// Focus Garden - Self-contained bundle
(() => {

// --- src/storage.js ---
// Namespaced localStorage helpers with safe read/write and defaults.

const NS = "focusgarden.";
const VERSION = 1;

function safeRead(key) {
  try {
    const raw = window.localStorage.getItem(NS + key);
    if (raw === null) return null;
    const obj = JSON.parse(raw);
    if (Array.isArray(obj) || typeof obj === "object") return obj;
    return null;
  } catch {
    return null;
  }
}

function safeWrite(key, value) {
  try {
    window.localStorage.setItem(NS + key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function safeRemove(key) {
  try { window.localStorage.removeItem(NS + key); } catch {}
}

function loadTasks() {
  const t = safeRead("tasks");
  return Array.isArray(t) ? t : [];
}

function saveTasks(tasks) {
  return safeWrite("tasks", tasks);
}

/** Settings shape: focus/short/long in minutes, cycles (before long break), sound. */
const DEFAULT_SETTINGS = {
  focus: 25,
  short: 5,
  long: 15,
  cycles: 4,
  soundOn: true,
  volume: 70,
};

function loadSettings() {
  const s = safeRead("settings");
  if (!s || typeof s !== "object") return { ...DEFAULT_SETTINGS };
  const clean = {};
  for (const k of Object.keys(DEFAULT_SETTINGS)) {
    const v = s[k];
    clean[k] =
      typeof DEFAULT_SETTINGS[k] === "number"
        ? Number.isFinite(v) ? clampNumber(v, minOf(k), maxOf(k)) : DEFAULT_SETTINGS[k]
        : (typeof v === "boolean" ? v : DEFAULT_SETTINGS[k]);
  }
  return clean;
}

function clampNumber(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
const minOf = (k) => (k === "cycles" ? 1 : 1);
const maxOf = (k) => (k === "cycles" ? 8 : 120);

function saveSettings(settings) {
  return safeWrite("settings", settings);
}

/** XP, sessions and plant collection. */
const DEFAULT_DATA = {
  xp: 0,
  sessions: [], // [{ date: "YYYY-MM-DD", minutes: number }]
  plant: "fern",
  unlockedPlants: ["fern"],
};

function loadData() {
  const d = safeRead("data");
  if (!d || typeof d !== "object") return { ...DEFAULT_DATA };
  const clean = { xp: Math.max(0, Math.floor(Number(d.xp) || 0)), sessions: Array.isArray(d.sessions) ? d.sessions : [], plant: typeof d.plant === "string" ? d.plant : DEFAULT_DATA.plant };
  return { ...clean, unlockedPlants: Array.isArray(d.unlockedPlants) ? d.unlockedPlants : [...DEFAULT_DATA.unlockedPlants] };
}

function saveData(data) {
  return safeWrite("data", data);
}

function clearAll() {
  ["tasks", "settings", "data"].forEach((k) => safeRemove(k));
}

// --- src/sfx.js ---
// Web Audio notification: a soft three-note chime, no audio assets needed.

class Sound {
  #ctx = null;

  ensure(ctx) {
    if (this.#ctx) return this.#ctx;
    const AC = (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext)) ||
               (typeof globalThis !== "undefined" && (globalThis.AudioContext || globalThis.webkitAudioContext));
    if (!AC) return null;
    try {
      this.#ctx = new AC();
    } catch {
      return null;
    }
    return this.#ctx;
  }

  playChime({ ctx, volume = 0.5 } = {}) {
    const ac = this.ensure(ctx);
    if (!ac || volume <= 0) return;
    if (ac.state === "suspended") {
      ac.resume().catch(() => {});
    }
    const t0 = ac.currentTime + 0.02;
    const freqs = [659.26, 831.78, 1046.5]; // E5 G5 B5 — warm ascending triad
    freqs.forEach((f, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const dur = 0.5 + i * 0.12;
      const amp = volume * 0.18 * (1 - i * 0.2);
      osc.type = "sine";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0, t0 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(amp, t0 + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.08 + dur);
      osc.connect(gain).connect(ac.destination);
      osc.start(t0 + i * 0.08);
      osc.stop(t0 + i * 0.08 + dur + 0.1);
    });
  }

  // Tiny "leaf" blip used for quick UI feedback (optional).
  blip({ ctx, volume = 0.3, freq = 1200 } = {}) {
    const ac = this.ensure(ctx);
    if (!ac || volume <= 0) return;
    if (ac.state === "suspended") {
      ac.resume().catch(() => {});
    }
    const t0 = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume * 0.1, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);
    osc.connect(gain).connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + 0.15);
  }
}


// --- src/timer.js ---
// Pomodoro timer driven by wall clock (Date.now()), so pauses, drift and
// background tab visibility always resolve accurately.
// Exposes:
//  - setDurations({ focus, short, long, cycles })   (minutes; read live)
//  - start() / pause() / reset()
//  - onTick(remainingMs, totalMs)          called periodically and on rAF
//  - onFinish(mode, minutes)               once per completed round (minutes, not seconds)
//  - onPhaseChange({ from, to })           phase switches

const MODE_LABELS = {
  focus: "Focus",
  short_break: "Short break",
  long_break: "Long break",
};

function getModeLabel(mode) {
  return MODE_LABELS[mode] ?? "Focus";
}

class PomodoroTimer {
  constructor({ clock = {} } = {}) {
    this._durations = { focus: 25, short: 5, long: 15, cycles: 4 };
    this._mode = "focus";
    this._running = false;
    this._sessionsInCycle = 0;
    this._remainingMs = this._dur("focus") * 60 * 1000;
    this._targetEndTime = null;

    // Clock hooks (injectable for testing)
    this._now = clock.now ? clock.now : () => Date.now();
    this._intervalId = null;
    this._rafId = null;

    this._onTick = null;
    this._onFinish = null;
    this._onPhaseChange = null;

    const d = typeof window !== "undefined" ? window : globalThis;
    if (d && typeof d.addEventListener === "function") {
      d.addEventListener("visibilitychange", () => this._onVisibility());
    }
  }

  // ---- public API ----------------------------------------------------
  get isRunning() {
    return this._running;
  }

  get mode() {
    return this._mode;
  }

  get remainingMs() {
    return Math.max(0, Math.ceil(this._remainingMs));
  }

  get totalMs() {
    return this._dur(this._mode) * 60 * 1000;
  }

  get sessionsInCycle() {
    return this._sessionsInCycle;
  }

  get durations() {
    return { ...this._durations };
  }

  set onTick(cb) { this._onTick = cb; }
  set onFinish(cb) { this._onFinish = cb; }
  set onPhaseChange(cb) { this._onPhaseChange = cb; }

  _dur(key) {
    const normKey = key === "short_break" ? "short" : key === "long_break" ? "long" : "focus";
    const d = this._durations?.[normKey] ?? (normKey === "focus" ? 25 : normKey === "short" ? 5 : 15);
    return Math.max(1, Number(d) || 25);
  }

  setDurations(d) {
    if (d && typeof d === "object") {
      this._durations = { ...this._durations, ...d };
    }
    // Re-anchor remaining time if not running
    if (!this._running) {
      this._remainingMs = this._dur(this._mode) * 60 * 1000;
      this._notifyTick();
    }
  }

  start() {
    if (this._running) return;
    this._running = true;
    this._targetEndTime = this._now() + this._remainingMs;
    this._startLoop();
    this._onPhaseChange?.({ from: this._mode, to: this._mode });
    this._notifyTick();
  }

  pause() {
    if (!this._running) return;
    if (this._targetEndTime !== null) {
      this._remainingMs = Math.max(0, this._targetEndTime - this._now());
    }
    this._running = false;
    this._stopLoop();
    this._notifyTick();
  }

  reset() {
    this.pause();
    this._mode = "focus";
    this._sessionsInCycle = 0;
    this._remainingMs = this._dur("focus") * 60 * 1000;
    this._targetEndTime = null;
    this._onPhaseChange?.({ from: this._mode, to: this._mode });
    this._notifyTick();
  }

  // ---- internals -------------------------------------------------------
  _startLoop() {
    this._stopLoop();

    // 1) Interval runs reliably in background tabs (even when rAF throttles)
    if (typeof setInterval !== "undefined") {
      this._intervalId = setInterval(() => {
        this._advance();
      }, 200);
      if (this._intervalId && typeof this._intervalId.unref === "function") {
        this._intervalId.unref();
      }
    }

    // 2) rAF gives smooth 60fps ring animation when tab is active
    if (typeof requestAnimationFrame !== "undefined") {
      const step = () => {
        if (!this._running) return;
        this._advance();
        this._rafId = requestAnimationFrame(step);
      };
      this._rafId = requestAnimationFrame(step);
    }
  }

  _stopLoop() {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
    if (this._rafId !== null) {
      if (typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this._rafId);
      }
      this._rafId = null;
    }
  }

  _advance() {
    if (!this._running || this._targetEndTime === null) return;

    const remaining = this._targetEndTime - this._now();
    this._remainingMs = Math.max(0, remaining);

    if (this._remainingMs <= 0) {
      this._stopLoop();
      this._running = false;
      this._finish();
      return;
    }

    this._notifyTick();
  }

  _onVisibility() {
    if (this._running) {
      // Re-evaluate immediately from wall-clock target time
      this._advance();
    }
  }

  _finish() {
    const fromMode = this._mode;
    const mins = this._dur(fromMode); // exact minutes configured for this mode
    this._remainingMs = 0;
    this._notifyTick();

    this._onFinish?.(fromMode, mins);

    if (fromMode === "focus") {
      this._sessionsInCycle++;
      const cycleLimit = this._durations?.cycles ?? 4;
      const next = this._sessionsInCycle >= cycleLimit ? "long_break" : "short_break";
      this.#set(next);
      this.start(); // auto-advance into the break
    } else if (fromMode === "long_break") {
      // Full cycle finished -> reset cycle count and prepare focus
      this._sessionsInCycle = 0;
      this.#set("focus");
    } else {
      // Short break finished -> prepare focus without resetting cycle count!
      this.#set("focus");
    }

    this._onPhaseChange?.({ from: fromMode, to: this._mode });
    this._notifyTick();
  }

  #set(mode) {
    const from = this._mode;
    this._mode = mode;
    this._remainingMs = this._dur(mode) * 60 * 1000;
    this._targetEndTime = this._running ? this._now() + this._remainingMs : null;
    if (from !== mode) {
      this._onPhaseChange?.({ from, to: mode });
    }
  }

  _notifyTick() {
    this._onTick?.(this.remainingMs, this.totalMs);
  }
}


// --- src/tasks.js ---
// Task state + rendering. Pure DOM helpers, storage via storage.js.

const PRIORITIES = [
  { key: "low", label: "Low", tone: "low" },
  { key: "medium", label: "Medium", tone: "medium" },
  { key: "high", label: "High", tone: "high" },
];

/** Minimal Task object shape: { id, text, priority, completed } */
function normalizeTask(t) {
  return {
    id: t?.id ?? (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    text: String(t?.text ?? "").trim(),
    priority: PRIORITIES.find((p) => p.key === t?.priority)?.key ?? "medium",
    completed: Boolean(t?.completed),
  };
}

function makeTasks() {
  const tasks = loadTasks();
  let filter = "all";

  function _save() { saveTasks(tasks); }

  function add(text, priority = "medium") {
    const t = normalizeTask({ text, priority });
    if (!t.text) return null;
    tasks.push(t); // newest last (rendered visually reversed? kept stable: top = latest)
    _save();
    return t;
  }

  function setCompleted(id, completed) {
    const t = tasks.find((x) => x.id === id);
    if (t) { t.completed = Boolean(completed); _save(); }
  }

  function remove(id) {
    const idx = tasks.findIndex((x) => x.id === id);
    if (idx >= 0) { tasks.splice(idx, 1); _save(); }
  }

  function editText(id, text, priority) {
    const t = tasks.find((x) => x.id === id);
    const n = normalizeTask({ ...t, text, priority });
    if (n.text) { Object.assign(t, n); _save(); }
  }

  function setFilter(f) {
    filter = f;
  }

  function all() { return tasks.map((x) => ({ ...x })); }
  function filtered() {
    const fs = all().filter((t) => filter === "all" || (filter === "active" ? !t.completed : t.completed));
    return fs;
  }

  function progress() {
    const c = tasks.filter((x) => x.completed).length;
    const total = tasks.length;
    return total > 0 ? Math.round((c / total) * 100) : 0;
  }

  // ---- DOM rendering ----
  let listEl = null;
  let pctEl = null;

  function _mount(list, pct) { listEl = list; pctEl = pct; render(); }

  function render() {
    if (!listEl) return;
    const items = filtered();
    listEl.replaceChildren(
      ...items.map((t) => taskRow(t)),
    );
    if (pctEl) pctEl.textContent = `${progress()}%`;
  }

  function _highlightPriority(t) {
    const p = PRIORITIES.find((x) => x.key === t.priority);
    return p ? p : PRIORITIES[1];
  }

  function taskRow(t) {
    const li = document.createElement("li");
    li.className = "task-item";
    if (t.completed) li.classList.add("task-done");
    li.dataset.id = t.id;

    // checkbox
    const cb = document.createElement("button");
    cb.className = "task-check";
    cb.setAttribute("role", "button");
    cb.setAttribute("aria-label", t.completed ? "Mark incomplete" : "Mark complete");
    cb.type = "button";
    cb.textContent = t.completed ? "✓" : "";
    if (t.completed) cb.classList.add("task-check--on");
    cb.addEventListener("click", () => { setCompleted(t.id, !t.completed); render(); });
    li.appendChild(cb);

    // title (editable)
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = t.text;
    title.title = "Double-click to edit";
    let editing = false;
    title.addEventListener("dblclick", () => {
      if (editing) return;
      editing = true;
      title.replaceChildren();

      const inp = document.createElement("input");
      inp.className = "task-edit";
      inp.value = t.text;
      inp.maxLength = 120;

      const sel = document.createElement("select");
      sel.className = "task-priority";
      PRIORITIES.forEach((p) => {
        const o = document.createElement("option");
        o.value = p.key;
        o.textContent = p.label;
        if (p.key === t.priority) o.selected = true;
        sel.appendChild(o);
      });

      const go = document.createElement("button");
      go.className = "btn btn-sm btn-primary";
      go.type = "button";
      go.textContent = "✓ Save";

      const cancel = document.createElement("button");
      cancel.className = "btn btn-sm btn-ghost";
      cancel.type = "button";
      cancel.textContent = "Cancel";

      const row2 = document.createElement("div");
      row2.className = "task-edit-row";
      row2.append(inp, sel, go, cancel);
      title.replaceChildren(row2);
      inp.focus();

      function commitSave() {
        if (!editing) return;
        editing = false;
        const val = inp.value.trim();
        if (val) {
          editText(t.id, val, sel.value);
        }
        render();
      }

      function cancelSave() {
        if (!editing) return;
        editing = false;
        render();
      }

      // Prevent blur from aborting clicks on the action buttons
      go.addEventListener("mousedown", (e) => e.preventDefault());
      go.addEventListener("click", () => commitSave());

      cancel.addEventListener("mousedown", (e) => e.preventDefault());
      cancel.addEventListener("click", () => cancelSave());

      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commitSave();
        } else if (e.key === "Escape") {
          e.preventDefault();
          cancelSave();
        }
      });

      // If user clicks completely outside the editing container, commit changes
      row2.addEventListener("focusout", (e) => {
        if (!row2.contains(e.relatedTarget)) {
          commitSave();
        }
      });
    });
    li.appendChild(title);

    // priority pill
    const p = _highlightPriority(t);
    const pill = document.createElement("span");
    pill.className = "task-priority-pill";
    pill.dataset.tone = t.priority;
    pill.textContent = p.label;
    li.appendChild(pill);

    // delete
    const del = document.createElement("button");
    del.className = "task-delete";
    del.type = "button";
    del.setAttribute("aria-label", "Delete task");
    del.innerHTML = "×";
    del.addEventListener("click", (e) => { e.stopPropagation(); remove(t.id); render(); });
    li.appendChild(del);

    return li;
  }

  return {
    mount: _mount,
    add, setCompleted, remove, editText,
    progress, all, filtered,
    setFilter,
    render,
  };
}

// --- src/garden.js ---
// Focus Garden — XP, levels, plant collection, and SVG growth renderer.
// Pure logic for state + string-based art; no DOM access.


// ---------------------------------------------------------------- Levels
const LEVEL_XP = [0, 60, 220, 560, 1200, 2400, 4800]; // cumulative XP to reach level n+1
const MAX_LEVEL = 7;
const STAGE_LABELS = ["Seed", "Sprout", "Young plant", "Growing", "Mature", "Budding", "In bloom"];

function levelFromXP(xp) {
  let lv = 1;
  for (let i = 1; i < LEVEL_XP.length; i += 1) {
    if (Number.isFinite(xp) && xp >= LEVEL_XP[i]) lv = i + 1;
    else break;
  }
  return Math.min(lv, MAX_LEVEL);
}

function stageForLevel(level) {
  return Math.min(Math.max((level || 1) - 1, 0), STAGE_LABELS.length - 1);
}

// ---------------------------------------------------------------- Collection
const PLANTS = [
  { id: "fern",       name: "Fern",           emoji: "🌿", desc: "A calm green start.",      unlockLevel: 1 },
  { id: "mint",       name: "Mint",           emoji: "🌱", desc: "Bright leaves, fast growth.", unlockLevel: 2 },
  { id: "orchid",     name: "Orchid",         emoji: "🪻", desc: "Delicate. Worth the patience.", unlockLevel: 3 },
  { id: "cactus",     name: "Cactus",         emoji: "🌵", desc: "Thrives through drought.",   unlockLevel: 4 },
  { id: "goldblossom",name: "Golden Blossom", emoji: "✨", desc: "The garden's full bloom.",    unlockLevel: 5 },
];

function plantForLevel(level) {
  return PLANTS.find((p) => p.unlockLevel === level) ?? null;
}

const PALETTES = {
  fern:      { stem: "#3d7a4c", leaf: "#6cc077", flower: "#e8f7dd", glow: "lime" },
  mint:      { stem: "#2f7d4e", leaf: "#8fe0b6", flower: "#f2fff8", glow: "mint" },
  orchid:    { stem: "#5c4a72", leaf: "#a586b6", flower: "#ffc9e6", glow: "purple" },
  cactus:    { stem: "#4d7d43", leaf: "#6ea057", flower: "#ffd24d", glow: "gold" },
  goldblossom: { stem: "#7c6a2f", leaf: "#d9c15f", flower: "#ffd24f", glow: "gold" },
};

// ---------------------------------------------------------------- State helpers
function getGarden() {
  const d = loadData();
  const lv = levelFromXP(d.xp);
  return {
    xp: d.xp,
    level: lv,
    stage: stageForLevel(lv),
    plant: PLANTS.some((p) => p.id === d.plant) ? d.plant : "fern",
    unlocked: [...d.unlockedPlants],
  };
}

function addXp(xpAmount) {
  const d = loadData();
  const prevLevel = levelFromXP(d.xp);
  d.xp += Math.max(0, Math.floor(Number(xpAmount) || 0));
  const newLevel = levelFromXP(d.xp);

  const newlyUnlocked = [];
  PLANTS.forEach((p) => {
    if (p.unlockLevel <= newLevel && !d.unlockedPlants.includes(p.id)) {
      d.unlockedPlants.push(p.id);
      newlyUnlocked.push(p);
    }
  });
  saveData(d);
  return {
    level: newLevel,
    stage: stageForLevel(newLevel),
    levelUp: newLevel > prevLevel,
    newlyUnlocked: newlyUnlocked[0] ?? (newLevel > prevLevel ? (plantForLevel(newLevel) ?? null) : null),
    xp: d.xp,
  };
}

function setPlant(id) {
  const d = loadData();
  if (PLANTS.some((p) => p.id === id)) { d.plant = id; }
  saveData(d);
  return getGarden();
}

function glowDefs() {
  const colors = { lime: "#c8f59e", mint: "#a8ffcf", purple: "#f0b7de", gold: "#ffe29a" };
  const defs = Object.entries(colors).map(([key, c]) => `
      <radialGradient id="glow-${key}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${c}" stop-opacity="0.45"/>
        <stop offset="60%" stop-color="${c}" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="${c}" stop-opacity="0"/>
      </radialGradient>`).join("");
  return `<defs>${defs}</defs>`;
}

function soil() {
  return `
    <ellipse cx="170" cy="286" rx="115" ry="22" fill="url(#soil)"/>
    <ellipse cx="170" cy="284" rx="92" ry="15" fill="#3a5a41" opacity="0.7"/>`;
}

function leaf(x, y, tiltDeg, size, color) {
  const sx = x + Math.sin(tiltDeg * (Math.PI / 180)) * size;
  const sy = y - Math.cos(tiltDeg * (Math.PI / 180)) * size;
  return `<path class="leaf" d="M${x} ${y} C ${x + 2} ${y - 14} ${sx - 6} ${sy - 8} ${x} ${y} Z" fill="${color}" opacity="0.92" transform="rotate(${tiltDeg - 6} ${x} ${y})"/>`;
}

function bud(x, y) {
  return `<ellipse class="bud" cx="${x}" cy="${y}" rx="7" ry="10" fill="#e8f7dd" opacity="0.95"/>`;
}

function flower(x, y, color, glowId) {
  let petals = "";
  for (let i = 0; i < 6; i += 1) {
    const a = i * 60;
    const px = x + Math.cos((a - 90) * (Math.PI / 180)) * 14;
    const py = y + Math.sin((a - 90) * (Math.PI / 180)) * 12;
    petals += `<ellipse class="petal" cx="${px}" cy="${py}" rx="6" ry="11" fill="${color}" opacity="0.97" transform="rotate(${a - 90} ${x} ${y})"/>`;
  }
  return `${petals}<circle cx="${x}" cy="${y}" r="7" fill="#f3e6a3"/><circle cx="${x}" cy="${y}" r="3.5" fill="#e7c84c"/>`;
}

function stemPlant({ stage, palette }) {
  if (stage === 0) {
    return `<g class="seed"><circle cx="170" cy="281" r="9" fill="#6b5540"/><circle cx="170" cy="281" r="4.5" fill="#8a6e53"/></g>`;
  }
  const topY = 282 - (stage * 18); // stage 1..6 → top rises
  let inner = "";
  if (stage >= 5) {
    inner += `<circle class="glow" cx="170" cy="${topY}" r="58" fill="url(#glow-${palette.glow})"/>`;
  }

  const h = 282 - topY;
  // stem with a gentle curve
  inner += `<path class="stem" d="M 170 282 C 164 ${282 - h * 0.35} 178 ${282 - h * 0.6} 170 ${topY}" fill="none" stroke="${palette.stem}" stroke-width="${3 + stage * 0.4}" stroke-linecap="round"/>`;

  const leaves = {};
  leaves[1] = [256];
  leaves[2] = [258, 232];
  leaves[3] = [266, 236, 206];
  leaves[4] = [270, 240, 210, 180];
  leaves[5] = [270, 240, 210, 178, 146];
  leaves[6] = [270, 240, 210, 180, 146];
  (leaves[stage] ?? []).forEach((y, i) => {
    inner += leaf(170, y, -38 + i * 4, 15 + stage * 1.5, palette.leaf);
    inner += leaf(170, y + (i % 2 ? 6 : -6), 38 - i * 3, 14 + stage * 1.5, palette.leaf);
  });

  if (stage === 5) inner += bud(170, topY - 4);
  if (stage >= 6) inner += flower(170, topY - 12, palette.flower, palette.glow);

  return inner;
}

function cactus({ stage, palette }) {
  if (stage === 0) {
    return `<g class="seed"><rect x="164" y="276" width="12" height="14" rx="5" fill="#6b5540"/></g>`;
  }
  const h = 60 + stage * 24;
  let inner = "";
  const topY = 282 - h;
  if (stage >= 5) inner += `<circle class="glow" cx="170" cy="${topY}" r="58" fill="url(#glow-${palette.glow})"/>`;

  const w = 24 + stage * 2.5;
  const x = 170 - w / 2;
  inner += `<rect class="stem" x="${x}" y="${topY}" width="${w}" height="${h}" rx="13" fill="${palette.stem}"/>`;

  if (stage >= 3) {
    const ah = 40 + stage * 4;
    inner += `<rect class="arm" x="${170 - 38}" y="${282 - ah - 10}" width="24" height="${ah + 12}" rx="11" fill="${palette.stem}"/>`;
  }
  if (stage >= 4) {
    const ah = 44 + stage * 4;
    inner += `<rect class="arm" x="${170 + 14}" y="${282 - ah - 6}" width="24" height="${ah + 8}" rx="11" fill="${palette.stem}"/>`;
  }
  if (stage >= 5) {
    inner += `<rect class="arm" x="${170 - 46}" y="${282 - 104}" width="24" height="52" rx="11" fill="${palette.stem}"/>`;
    inner += `<rect class="arm" x="${170 + 38}" y="${282 - 96}" width="24" height="56" rx="11" fill="${palette.stem}"/>`;
  }
  if (stage >= 6) {
    inner += flower(170, topY - 8, palette.flower, palette.glow);
    // side flowers too, at the arms' tops
    inner += `<circle class="petal" cx="${142}" cy="${282 - 40}" r="5" fill="${palette.flower}" opacity="0.9"/><circle class="petal" cx="${200}" cy="${276}" r="5" fill="${palette.flower}" opacity="0.9"/>`;
  }
  return inner;
}

function gardenSVG({ plant = "fern", stage = 0 }) {
  const info = PLANTS.find((p) => p.id === plant) ?? PLANTS[0];
  const palette = PALETTES[info.id] ?? PALETTES.fern;
  const body = info.id === "cactus" ? cactus({ stage, palette }) : stemPlant({ stage, palette });

  return `
    <svg viewBox="0 0 340 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${info.name} at stage: ${STAGE_LABELS[stage] || "Seed"}" preserveAspectRatio="xMidYMid meet" class="garden-svg">
      ${glowDefs()}
      <defs>
        <linearGradient id="soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#4a6c4f"/>
          <stop offset="1" stop-color="#1d3126"/>
        </linearGradient>
      </defs>
      ${soil()}
      <g class="plant" transform="scale(1)">${body}</g>
    </svg>`;
}

// ---------------------------------------------------------------- collection row helper
function collectionHtml({ garden }) {
  return PLANTS
    .map((p) => {
      const locked = !garden.unlocked.includes(p.id);
      const active = garden.plant === p.id;
      return `
        <button class="plant-card ${active ? "plant-active" : ""} ${locked ? "plant-locked" : ""}"
          data-plant="${p.id}" ${locked ? "disabled" : ""}
          title="${locked ? `Unlocks at level ${p.unlockLevel}` : p.desc}">
          <span class="plant-emoji">${p.emoji}</span>
          <span class="plant-name">${p.name}</span>
          <span class="plant-tag">${locked ? `Lv ${p.unlockLevel}` : ""}</span>
        </button>`;
    })
    .join("");
}


// --- src/stats.js ---
// Stats: total sessions, productive hours, streak, weekly chart — derived from
// stored session records. Pure math is exported separately for testing.


const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function dayKey(date) {
  const d = date instanceof Date ? date : new Date();
  return (
    d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

function todayKey(date) {
  return dayKey(date);
}

/** Add one focus session to persisted data. minutes>0 only; returns updated data. */
function recordSession(minutes) {
  const d = loadData();
  const m = Math.round(Number(minutes) || 0);
  if (m > 0) {
    d.sessions.push({ date: todayKey(), minutes: m });
  }
  saveData(d);
  return d;
}

// ---------------------------------------------------------------- pure helpers
function sessionMinutesByDate(sessions) {
  const map = new Map();
  for (const s of sessions) {
    if (s && Number.isFinite(Number(s.minutes)) && Number(s.minutes) > 0) {
      const key = String(s.date);
      map.set(key, (map.get(key) || 0) + Math.round(Number(s.minutes)));
    }
  }
  return map;
}

/** Consecutive days with ≥1 session, ending today. Today's empty day doesn't break the run yet. */
function computeStreak(sessions, targetDate = todayKey()) {
  const days = new Set();
  for (const s of (sessions || [])) {
    if (s && s.date) days.add(String(s.date));
  }

  const target = typeof targetDate === "string" ? targetDate : todayKey();
  const parts = target.split("-");
  let streak = 0;

  // 1) Chain starting from target day (today)
  let cur = new Date(+parts[0], parts[1] - 1, +parts[2]);
  while (days.has(dayKey(cur))) {
    streak += 1;
    cur.setDate(cur.getDate() - 1);
  }

  // 2) If target day has no sessions yet, check if there is an unbroken chain ending yesterday
  if (!days.has(target)) {
    cur = new Date(+parts[0], parts[1] - 1, +parts[2]);
    cur.setDate(cur.getDate() - 1);
    while (days.has(dayKey(cur))) {
      streak += 1;
      cur.setDate(cur.getDate() - 1);
    }
  }

  return Math.max(streak, 0);
}

/** Weekly activity: Mon→Sun of the current week with session minutes each. */
function computeWeekly(sessions, targetDate = todayKey()) {
  const target = typeof targetDate === "string" ? targetDate : todayKey();
  const parts = target.split("-");
  const today = new Date(+parts[0], parts[1] - 1, +parts[2]);

  // Calculate Monday of current week (getDay(): 0=Sun, 1=Mon, ..., 6=Sat)
  const dayOfWeek = today.getDay();
  const daysSinceMonday = (dayOfWeek + 6) % 7; // Mon=0, Tue=1, ..., Sun=6
  const monday = new Date(today);
  monday.setDate(today.getDate() - daysSinceMonday);

  const minutesByDate = sessionMinutesByDate(sessions || []);
  const week = [];
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    week.push({ label: DAY_LABELS[i], date: dayKey(d), minutes: minutesByDate.get(dayKey(d)) || 0 });
  }
  return week;
}

/** Aggregate stats object for the main screen. */
function getStats() {
  const d = loadData();
  const sessions = d.sessions;
  const totalMinutes = sessions.reduce((acc, s) => acc + Math.max(0, Math.round(Number(s.minutes) || 0)), 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return {
    totalSessions: sessions.length,
    totalMinutes,
    productiveHours: hours > 0 ? `${hours}h ${mins}m` : `${mins}m`,
    streak: computeStreak(sessions),
    weekly: computeWeekly(sessions),
  };
}


// --- src/main.js ---
// Focus Garden app entry: wires timer → garden XP, stats, toasts, tasks, settings.







// ---------------------------------------------------------------- refs
const ringWrap = document.getElementById("ring-wrap");
const ringProgress = document.getElementById("ring-progress");
const timerEl = document.getElementById("timer-time");
const phaseEl = document.getElementById("timer-phase");
const dotsEl = document.getElementById("cycle-dots");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const settingsBtn = document.getElementById("settings-btn");
const modal = document.getElementById("settings-modal");
const backdrop = document.getElementById("settings-backdrop");
const closeBtn = document.getElementById("settings-close");
const saveBtn = document.getElementById("settings-save");
const setFocus = document.getElementById("set-focus");
const setShort = document.getElementById("set-short");
const setLong = document.getElementById("set-long");
const setCycles = document.getElementById("set-cycles");
const setSound = document.getElementById("set-sound");

const levelNumEl = document.getElementById("level-num");
const levelStageEl = document.getElementById("level-stage");
const levelEmojiEl = document.getElementById("level-emoji");
const focusTimeEl = document.getElementById("focus-time");

const gardenWrap = document.getElementById("garden-stage-wrap");
const gardenLevelEl = document.getElementById("garden-level");
const gardenStageEl = document.getElementById("garden-stage-label");
const collectionEl = document.getElementById("garden-collection");
const xpBarEl = document.getElementById("xp-bar");
const xpBarLabelEl = document.getElementById("xp-bar-label");
const xpPillEl = document.getElementById("garden-xp-pill");

const statSessionsEl = document.getElementById("stat-sessions");
const statHoursEl = document.getElementById("stat-hours");
const statStreakEl = document.getElementById("stat-streak");
const statLevelEl = document.getElementById("stat-level-num");
const weeklyEl = document.getElementById("weekly-chart");

const toastsEl = document.getElementById("toasts");
const resetAllBtn = document.getElementById("reset-all-btn");
const levelBadgeEl = document.getElementById("level-badge");

// tasks (mounted later)
let taskBoard = null;

// ---------------------------------------------------------------- state
const settings = loadSettings();
let soundOn = settings.soundOn ?? true;

// XP only granted on focus-session finish, not breaks.
const xpPerMinute = 4;

const sound = new Sound({ ctx: window });

const timer = new PomodoroTimer();
timer.setDurations({
  focus: settings.focus,
  short: settings.short,
  long: settings.long,
  cycles: settings.cycles,
});

// ---------------------------------------------------------------- ring
const RING_R = 100;
const RING_CIRC = 2 * Math.PI * RING_R;
ringProgress.style.strokeDasharray = `${RING_CIRC}`;

function renderRing() {
  const total = timer.totalMs;
  const remaining = timer.remainingMs;
  const frac = total > 0 ? Math.max(0, Math.min(1, remaining / total)) : 0;
  ringProgress.style.strokeDashoffset = `${RING_CIRC * (1 - frac)}`;
}

function formatMs(ms) {
  const t = Math.max(0, Math.ceil(ms / 1000));
  const m = String(Math.floor(t / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// ---------------------------------------------------------------- phase / dots
function renderPhase() {
  phaseEl.textContent = getModeLabel(timer.mode);
  ringWrap.dataset.mode = timer.mode;

  const totalCycles = timer.durations?.cycles ?? settings.cycles ?? 4;
  if (dotsEl.children.length !== totalCycles) {
    dotsEl.replaceChildren(
      ...Array.from({ length: totalCycles }, (_, idx) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.title = `Cycle ${idx + 1}`;
        return dot;
      }),
    );
  }

  const dots = Array.from(dotsEl.children);
  dots.forEach((d, i) => {
    d.classList.toggle("dot--filled", i < timer.sessionsInCycle);
  });
}

function renderButtons() {
  startBtn.disabled = timer.isRunning;
  pauseBtn.disabled = !timer.isRunning;
}

// ---------------------------------------------------------------- toasts
function toast(msg, ttl = 3400) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  toastsEl.appendChild(el);
  el.classList.add("toast--show");
  setTimeout(() => {
    el.classList.remove("toast--show");
    setTimeout(() => el.remove(), 450);
  }, ttl);
}

// ---------------------------------------------------------------- garden + stats refresh
function refreshGardenAndHeader() {
  const g = getGarden();
  const level = levelFromXP(g.xp);
  const stage = stageForLevel(level);

  // header badge
  const plant = PLANTS.find((p) => p.id === g.plant) ?? PLANTS[0];
  levelNumEl.textContent = String(level);
  levelStageEl.textContent = STAGE_LABELS[stage] ?? "Seed";
  levelEmojiEl.textContent = plant.emoji;

  // garden card
  gardenWrap.innerHTML = gardenSVG({ plant: g.plant, stage });
  gardenLevelEl.textContent = `Level ${level}`;
  gardenStageEl.textContent = STAGE_LABELS[stage] ?? "Seed";

  // XP bar (progress to next level)
  renderXpBar(g.xp, level);
  xpPillEl.textContent = `${g.xp} XP`;

  // collection row
  collectionEl.innerHTML = collectionHtml({ garden: g });
}

function renderXpBar(xp, level) {
  let pct = 100;
  let label = "maxed out — keep growing 🌟";
  if (level < MAX_LEVEL) {
    const thresholds = LEVEL_XP;
    const cur = thresholds[level - 1] ?? 0;
    const next = thresholds[level] ?? thresholds[thresholds.length - 1];
    const span = next - cur;
    if (span > 0) {
      pct = Math.max(0, Math.min(100, Math.round(((xp - cur) / span) * 100)));
    }
    label = `next level in ${Math.ceil(Math.max(0, next - xp))} XP`;
  }
  xpBarEl.style.width = `${pct}%`;
  xpBarLabelEl.textContent = label;
}

function refreshStatsAndHeaderTime() {
  const s = getStats();
  statSessionsEl.textContent = String(s.totalSessions);
  statHoursEl.textContent = s.productiveHours;
  statStreakEl.textContent = String(s.streak);
  statLevelEl.textContent = String(levelFromXP(getGarden().xp));

  // focus time in header
  const hrs = Math.floor(s.totalMinutes / 60);
  const mins = s.totalMinutes % 60;
  focusTimeEl.textContent = hrs > 0 ? `${hrs}h ${mins}m focused` : `${mins}m focused`;

  renderWeekly(s.weekly);
}

function renderWeekly(week) {
  if (!Array.isArray(week) || week.length === 0) return;
  const max = Math.max(30, ...week.map((w) => w.minutes ?? 0));
  weeklyEl.replaceChildren(
    ...week.map((d) => {
      const isToday = d.date && d.date === todayKey();
      const el = document.createElement("div");
      el.className = "week-col" + (isToday ? " week-col--today" : "");
      el.title = `${d.label}: ${d.minutes} min`;
      el.innerHTML = `
        <div class="week-bar-wrap">
          <div class="week-bar" style="height: ${Math.min(64, Math.max(2, ((d.minutes ?? 0) / max) * 64))}px"></div>
        </div>
        <span class="week-label">${d.label}</span>`;
      return el;
    }),
  );
}

// ---------------------------------------------------------------- events: timer
timer.onTick = (remainingMs, totalMs) => {
  const formatted = formatMs(remainingMs);
  timerEl.textContent = formatted;
  renderRing();
  if (timer.isRunning) {
    document.title = `(${formatted}) Focus Garden`;
  } else {
    document.title = "Focus Garden — Grow by focusing";
  }
};

timer.onPhaseChange = () => {
  renderPhase();
  renderButtons();
  renderRing();
  if (!timer.isRunning) {
    document.title = "Focus Garden — Grow by focusing";
  }
};

timer.onFinish = (mode, minutes) => {
  sound.playChime({ ctx: window, volume: soundOn ? 0.5 : 0 });

  if (mode === "focus") {
    // award XP + record session
    const delta = addXp(Math.round(minutes * xpPerMinute));
    recordSession(minutes);
    toast(`Focus complete! +${Math.round(minutes * xpPerMinute)} XP 🌿`);
    if (delta.levelUp) {
      const newPlant = delta.newlyUnlocked;
      toast(`🎉 Level up! ${newPlant ? newPlant.name + " unlocked." : "Garden grows taller."}`);
      levelBadgeEl?.classList.add("level-pop");
      setTimeout(() => levelBadgeEl?.classList.remove("level-pop"), 900);
    }
    refreshGardenAndHeader();
    refreshStatsAndHeaderTime();
  }
  // break complete → timer auto-advances to focus; nothing extra needed.
};

// ---------------------------------------------------------------- events: garden collection click
collectionEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".plant-card");
  if (!btn || btn.disabled) return;
  setPlant(btn.dataset.plant);
  sound.blip({ ctx: window, volume: 0.3 });
  refreshGardenAndHeader();
});

// ---------------------------------------------------------------- events: settings
function openSettings() {
  setFocus.value = settings.focus;
  setShort.value = settings.short;
  setLong.value = settings.long;
  setCycles.value = settings.cycles;
  setSound.checked = soundOn;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeSettings() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function saveSettingsFromForm() {
  let f = Number(setFocus.value) || settings.focus;
  let s = Number(setShort.value) || settings.short;
  let l = Number(setLong.value) || settings.long;
  let c = Number(setCycles.value) || settings.cycles;
  f = Math.min(120, Math.max(1, f));
  s = Math.min(60, Math.max(1, s));
  l = Math.min(120, Math.max(1, l));
  c = Math.min(8, Math.max(1, c));
  soundOn = setSound.checked;

  const next = { focus: f, short: s, long: l, cycles: c, soundOn };
  Object.assign(settings, next);
  saveSettings(next);
  timer.setDurations({ focus: f, short: s, long: l, cycles: c });
  // reflect on inputs too
  setFocus.value = f;
  setShort.value = s;
  setLong.value = l;
  setCycles.value = c;
  renderPhase();
  renderRing();
  toast("Timer updated");
  closeSettings();
}

settingsBtn.addEventListener("click", openSettings);
closeBtn.addEventListener("click", closeSettings);
backdrop.addEventListener("click", closeSettings);
saveBtn.addEventListener("click", saveSettingsFromForm);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeSettings();
});

// ---------------------------------------------------------------- timer buttons
startBtn.addEventListener("click", () => {
  if (!timer.isRunning) {
    sound.blip({ ctx: window, volume: 0.3 });
    timer.start();
    renderButtons();
    renderRing();
  }
});
pauseBtn.addEventListener("click", () => {
  if (timer.isRunning) {
    sound.blip({ ctx: window, volume: 0.3 });
    timer.pause();
    document.title = "Focus Garden — Grow by focusing";
    renderButtons();
    renderPhase(); // phase stays same; just re-render to be safe
    renderRing();
  }
});
resetBtn.addEventListener("click", () => {
  timer.reset();
  document.title = "Focus Garden — Grow by focusing";
  renderButtons();
  renderPhase();
  renderRing();
});

// ---------------------------------------------------------------- reset all data
resetAllBtn.addEventListener("click", () => {
  if (!window.confirm("Reset all focus garden data (tasks, settings, XP)?")) return;
  clearAll();
  // reload defaults
  Object.assign(settings, loadSettings());
  soundOn = settings.soundOn ?? true;
  timer.setDurations({ focus: settings.focus, short: settings.short, long: settings.long, cycles: settings.cycles });
  taskBoard?.render?.();
  refreshTaskPct();
  refreshGardenAndHeader();
  refreshStatsAndHeaderTime();
  renderButtons();
  renderPhase();
  renderRing();
});

// ---------------------------------------------------------------- tasks mount
const taskForm = document.getElementById("task-add-form");
const taskInput = document.getElementById("task-input");
const taskPriority = document.getElementById("task-priority");
const taskListEl = document.getElementById("task-list");
const taskPctEl = document.getElementById("task-progress");
const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));

taskBoard = makeTasks();

// mount task list (render uses pctEl if present)
taskBoard.mount(taskListEl, taskPctEl);

// form add
taskForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value?.trim() || "";
  const priority = taskPriority.value;
  if (!text) return;
  const t = taskBoard.add(text, priority);
  if (t) {
    taskInput.value = "";
    taskInput.focus();
  }
  taskBoard.render(); // re-render list + pct
  refreshTaskPct();
});

// filters + progress label (tasks.js render sets a bare "X%")
function refreshTaskPct() {
  taskPctEl.textContent = `${taskBoard?.progress?.() ?? 0}% done`;
}

function setFilter(f) {
  taskBoard.setFilter?.(f);
  taskBoard.render?.();
  filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === f)));
}
refreshTaskPct();
filterBtns.forEach((b) => {
  b.addEventListener("click", () => setFilter(b.dataset.filter));
});

// initial renders
renderPhase();
renderRing();
renderButtons();
refreshGardenAndHeader();
refreshStatsAndHeaderTime();


})();

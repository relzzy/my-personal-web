// Focus Garden app entry: wires timer → garden XP, stats, toasts, tasks, settings.
import { loadSettings, saveSettings } from "./storage.js";
import { clearAll } from "./storage.js";
import { PomodoroTimer, getModeLabel } from "./timer.js";
import { Sound } from "./sfx.js";
import { makeTasks } from "./tasks.js";
import {
  gardenSVG,
  collectionHtml,
  addXp,
  getGarden,
  setPlant,
  PLANTS,
  levelFromXP,
  MAX_LEVEL,
  stageForLevel,
  STAGE_LABELS,
  LEVEL_XP,
} from "./garden.js";
import { recordSession, getStats, todayKey } from "./stats.js";

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

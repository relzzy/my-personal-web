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

export function loadTasks() {
  const t = safeRead("tasks");
  return Array.isArray(t) ? t : [];
}

export function saveTasks(tasks) {
  return safeWrite("tasks", tasks);
}

/** Settings shape: focus/short/long in minutes, cycles (before long break), sound. */
export const DEFAULT_SETTINGS = {
  focus: 25,
  short: 5,
  long: 15,
  cycles: 4,
  soundOn: true,
  volume: 70,
};

export function loadSettings() {
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

export function saveSettings(settings) {
  return safeWrite("settings", settings);
}

/** XP, sessions and plant collection. */
export const DEFAULT_DATA = {
  xp: 0,
  sessions: [], // [{ date: "YYYY-MM-DD", minutes: number }]
  plant: "fern",
  unlockedPlants: ["fern"],
};

export function loadData() {
  const d = safeRead("data");
  if (!d || typeof d !== "object") return { ...DEFAULT_DATA };
  const clean = { xp: Math.max(0, Math.floor(Number(d.xp) || 0)), sessions: Array.isArray(d.sessions) ? d.sessions : [], plant: typeof d.plant === "string" ? d.plant : DEFAULT_DATA.plant };
  return { ...clean, unlockedPlants: Array.isArray(d.unlockedPlants) ? d.unlockedPlants : [...DEFAULT_DATA.unlockedPlants] };
}

export function saveData(data) {
  return safeWrite("data", data);
}

export function clearAll() {
  ["tasks", "settings", "data"].forEach((k) => safeRemove(k));
}
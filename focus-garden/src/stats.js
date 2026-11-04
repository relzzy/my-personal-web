// Stats: total sessions, productive hours, streak, weekly chart — derived from
// stored session records. Pure math is exported separately for testing.

import { loadData, saveData } from "./storage.js";

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

export function todayKey(date) {
  return dayKey(date);
}

/** Add one focus session to persisted data. minutes>0 only; returns updated data. */
export function recordSession(minutes) {
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
export function computeStreak(sessions, targetDate = todayKey()) {
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
export function computeWeekly(sessions, targetDate = todayKey()) {
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
export function getStats() {
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

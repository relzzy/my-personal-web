// Automated test suite for Focus Garden core modules.
import assert from "node:assert/strict";

// Mock minimal browser globals for tests
const store = new Map();
globalThis.window = {
  localStorage: {
    getItem(k) { return store.has(k) ? store.get(k) : null; },
    setItem(k, v) { store.set(k, String(v)); },
    removeItem(k) { store.delete(k); },
    clear() { store.clear(); },
  },
  addEventListener() {},
  removeEventListener() {},
};

let testsPassed = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    testsPassed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    throw err;
  }
}

async function run() {
  console.log("\n🧪 Running Focus Garden Test Suite...\n");

  // 1) Storage tests
  const storage = await import("../src/storage.js");
  test("storage: save and load settings with clamping", () => {
    storage.clearAll();
    const def = storage.loadSettings();
    assert.equal(def.focus, 25);
    assert.equal(def.cycles, 4);

    storage.saveSettings({ focus: 50, cycles: 12 }); // cycles max is 8
    const saved = storage.loadSettings();
    assert.equal(saved.focus, 50);
    assert.equal(saved.cycles, 8);
  });

  test("storage: save and load data with plant integrity", () => {
    storage.clearAll();
    const d = storage.loadData();
    assert.equal(d.plant, "fern");
    assert.equal(d.xp, 0);

    storage.saveData({ xp: 120, plant: "mint", unlockedPlants: ["fern", "mint"] });
    const loaded = storage.loadData();
    assert.equal(loaded.xp, 120);
    assert.equal(loaded.plant, "mint");
  });

  // 2) Garden tests
  const garden = await import("../src/garden.js");
  test("garden: levelFromXP and stage calculations", () => {
    assert.equal(garden.levelFromXP(0), 1);
    assert.equal(garden.levelFromXP(59), 1);
    assert.equal(garden.levelFromXP(60), 2);
    assert.equal(garden.levelFromXP(220), 3);
    assert.equal(garden.levelFromXP(10000), garden.MAX_LEVEL);

    assert.equal(garden.stageForLevel(1), 0);
    assert.equal(garden.stageForLevel(7), 6);
  });

  test("garden: addXp level up and unlocks", () => {
    storage.clearAll();
    const res1 = garden.addXp(60);
    assert.equal(res1.level, 2);
    assert.equal(res1.levelUp, true);
    assert.equal(res1.newlyUnlocked?.id, "mint");

    const g = garden.getGarden();
    assert.equal(g.level, 2);
    assert.ok(g.unlocked.includes("mint"));
  });

  test("garden: SVG generation with matching glow definitions", () => {
    const fernSvg = garden.gardenSVG({ plant: "fern", stage: 6 });
    assert.ok(fernSvg.includes('id="glow-lime"'), "Defs must include glow-lime");
    assert.ok(fernSvg.includes('fill="url(#glow-lime)"'), "Circle must reference url(#glow-lime)");

    const cactusSvg = garden.gardenSVG({ plant: "cactus", stage: 6 });
    assert.ok(cactusSvg.includes('id="glow-gold"'), "Defs must include glow-gold");
    assert.ok(cactusSvg.includes('fill="url(#glow-gold)"'), "Cactus circle must reference url(#glow-gold)");
  });

  // 3) Stats tests
  const stats = await import("../src/stats.js");
  test("stats: computeStreak consecutive days calculation", () => {
    const today = stats.todayKey();
    assert.equal(stats.computeStreak([], today), 0);

    // Single session today
    assert.equal(stats.computeStreak([{ date: today, minutes: 25 }], today), 1);

    // Yesterday session without today still maintains streak of 1
    const parts = today.split("-");
    const yDate = new Date(+parts[0], parts[1] - 1, +parts[2] - 1);
    const yesterday = stats.todayKey(yDate);
    assert.equal(stats.computeStreak([{ date: yesterday, minutes: 25 }], today), 1);
  });

  test("stats: computeWeekly aligns Monday through Sunday", () => {
    const week = stats.computeWeekly([{ date: "2026-10-31", minutes: 30 }], "2026-10-31");
    assert.equal(week.length, 7);
    assert.equal(week[0].label, "Mon");
    assert.equal(week[0].date, "2026-10-26");
    assert.equal(week[5].label, "Sat");
    assert.equal(week[5].date, "2026-10-31");
    assert.equal(week[5].minutes, 30);
    assert.equal(week[6].label, "Sun");
    assert.equal(week[6].date, "2026-11-01");
  });

  // 4) Tasks tests
  const tasksMod = await import("../src/tasks.js");
  test("tasks: CRUD and progress calculation", () => {
    storage.clearAll();
    const board = tasksMod.makeTasks();
    assert.equal(board.progress(), 0);

    const t1 = board.add("Write unit tests", "high");
    assert.equal(t1.priority, "high");
    assert.equal(board.all().length, 1);
    assert.equal(board.progress(), 0);

    board.setCompleted(t1.id, true);
    assert.equal(board.progress(), 100);

    const t2 = board.add("Plant carrots", "low");
    assert.equal(board.progress(), 50);

    board.editText(t2.id, "Plant organic carrots", "medium");
    const updated = board.all().find(t => t.id === t2.id);
    assert.equal(updated.text, "Plant organic carrots");
    assert.equal(updated.priority, "medium");

    board.remove(t1.id);
    assert.equal(board.all().length, 1);
    assert.equal(board.progress(), 0);
  });

  // 5) Pomodoro Timer tests
  const timerMod = await import("../src/timer.js");
  test("timer: construction and getters", () => {
    const timer = new timerMod.PomodoroTimer();
    assert.equal(timer.mode, "focus");
    assert.equal(timer.isRunning, false);
    assert.equal(timer.sessionsInCycle, 0);
    assert.equal(timer.remainingMs, 25 * 60 * 1000);
    assert.equal(timer.totalMs, 25 * 60 * 1000);
  });

  test("timer: state transitions across full cycle", () => {
    let mockTime = 1000000;
    const timer = new timerMod.PomodoroTimer({
      clock: { now: () => mockTime },
    });
    timer.setDurations({ focus: 1, short: 1, long: 2, cycles: 2 });

    let finishedMode = null;
    let finishedMins = null;
    timer.onFinish = (mode, mins) => {
      finishedMode = mode;
      finishedMins = mins;
    };

    // 1st Focus
    timer.start();
    assert.equal(timer.isRunning, true);
    mockTime += 60 * 1000; // elapse 1 minute
    timer._advance();

    assert.equal(finishedMode, "focus");
    assert.equal(finishedMins, 1, "Must report 1 minute, not 60 seconds");
    assert.equal(timer.sessionsInCycle, 1);
    assert.equal(timer.mode, "short_break");

    // 1st Short break finishes -> should advance to focus without wiping sessionsInCycle
    mockTime += 60 * 1000;
    timer._advance();
    assert.equal(timer.mode, "focus");
    assert.equal(timer.sessionsInCycle, 1, "Short break must not reset sessionsInCycle");

    // 2nd Focus
    timer.start();
    mockTime += 60 * 1000;
    timer._advance();
    assert.equal(timer.sessionsInCycle, 2);
    assert.equal(timer.mode, "long_break", "2 cycles reached -> must switch to long_break");

    // Long break finishes -> resets cycle count
    mockTime += 120 * 1000;
    timer._advance();
    assert.equal(timer.mode, "focus");
    assert.equal(timer.sessionsInCycle, 0, "Long break finish must reset cycle count");
  });

  console.log(`\n🎉 All ${testsPassed} tests passed successfully!\n`);
}

run().catch((err) => {
  console.error("\n❌ Test Suite Failed:", err);
  process.exit(1);
});

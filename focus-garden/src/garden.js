// Focus Garden — XP, levels, plant collection, and SVG growth renderer.
// Pure logic for state + string-based art; no DOM access.

import { loadData, saveData } from "./storage.js";

// ---------------------------------------------------------------- Levels
export const LEVEL_XP = [0, 60, 220, 560, 1200, 2400, 4800]; // cumulative XP to reach level n+1
export const MAX_LEVEL = 7;
export const STAGE_LABELS = ["Seed", "Sprout", "Young plant", "Growing", "Mature", "Budding", "In bloom"];

export function levelFromXP(xp) {
  let lv = 1;
  for (let i = 1; i < LEVEL_XP.length; i += 1) {
    if (Number.isFinite(xp) && xp >= LEVEL_XP[i]) lv = i + 1;
    else break;
  }
  return Math.min(lv, MAX_LEVEL);
}

export function stageForLevel(level) {
  return Math.min(Math.max((level || 1) - 1, 0), STAGE_LABELS.length - 1);
}

// ---------------------------------------------------------------- Collection
export const PLANTS = [
  { id: "fern",       name: "Fern",           emoji: "🌿", desc: "A calm green start.",      unlockLevel: 1 },
  { id: "mint",       name: "Mint",           emoji: "🌱", desc: "Bright leaves, fast growth.", unlockLevel: 2 },
  { id: "orchid",     name: "Orchid",         emoji: "🪻", desc: "Delicate. Worth the patience.", unlockLevel: 3 },
  { id: "cactus",     name: "Cactus",         emoji: "🌵", desc: "Thrives through drought.",   unlockLevel: 4 },
  { id: "goldblossom",name: "Golden Blossom", emoji: "✨", desc: "The garden's full bloom.",    unlockLevel: 5 },
];

export function plantForLevel(level) {
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
export function getGarden() {
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

export function addXp(xpAmount) {
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

export function setPlant(id) {
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

export function gardenSVG({ plant = "fern", stage = 0 }) {
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
export function collectionHtml({ garden }) {
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

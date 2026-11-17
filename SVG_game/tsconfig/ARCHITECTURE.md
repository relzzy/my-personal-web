# 3D Engine Architecture & AI Guide

This document is a quick reference for developers and AI assistants working on the 3D engine in `SVG_game/tsconfig/`. For the full project guide, see the root [`README.md`](../../README.md).

---

## 🛠️ Build & Deploy Pipeline
- Source code is in `src/`.
- Deployed bundle is in `../../tokyo/`.
- **Never edit `../../tokyo/` directly.**
- Always build and deploy with:
  ```bash
  npm run deploy
  ```
  which runs `tsc --noEmit && vite build && rm -rf ../../tokyo && cp -r dist ../../tokyo`.

---

## 📂 Source Code Structure (`src/`)

- **`main.ts`**: Game loop, Three.js renderer setup, camera rig, scene initialization, animation clock.
- **`types.ts`**: Types for props, buildings, collisions, player states, interactables.
- **`game/`**:
  - `Player.ts`: First-person capsule physics, keyboard movement, mouse look, jump, footsteps.
  - `Collision.ts`: AABB collision grid preventing wall and prop penetration.
  - `Interaction.ts`: Proximity detection for interactable objects (`[E]`).
  - `Settings.ts`: Graphics toggle (`[G]`) for low vs high rendering quality.
  - `Input.ts`: Key listeners and mouse pointer lock.
  - `Messages.ts`: Toast notifications.
- **`ui/`**:
  - `Hud.ts`: Reticle, interaction prompts, coordinates, controls overlay.
  - `Minimap.ts`: Top-down radar minimap.
- **`world/`**:
  - `Audio.ts`: Synthesized audio system (synthesizes elevator ding, door buzzers, footsteps).
  - `Layout.ts`: World grid and road measurements.
  - `LightManager.ts`: Optimized streetlights, neon signs, and indoor ambient lights.
  - `Streets.ts`: Ground planes, roads, sidewalks, pedestrian crossings.
  - `Corridor4F.ts`: 4F residential corridor & elevator lounge (at `Y=50, Z=-110`).
  - `Suite402.ts`: Master luxury bedroom suite (at `Y=50, Z=-150`).
  - **`Materials.ts`**: Barrel export re-exporting `materials/`.
  - **`Buildings.ts`**: Barrel export / building placement orchestrator (206 lines).
  - **`Props.ts`**: Barrel export / prop placement orchestrator (186 lines).
  - **`materials/`**: Domain-separated canvas procedural textures & PBR materials.
    - `TextureCache.ts`: Central texture cache dictionary.
    - `CommonMaterials.ts`: Concrete, asphalt, grass, glass, metals.
    - `StorefrontMaterials.ts`: Konbini, ramen, arcade, cafe facades & posters.
    - `InteriorMaterials.ts`: Lobby, corridor runner carpet, elevator indicators, suite plaques.
    - `ParkMaterials.ts`: Granite signboards, rules notices, clock faces, restroom icons.
    - `PropMaterials.ts`: Japanese street signs, vending machine drink graphics, manholes.
  - **`buildings/`**: Discrete building builders.
    - `ApartmentLobby.ts`: 1F entrance lobby, concierge, mailboxes, 1F elevator bank.
    - `KonbiniStore.ts`: Walk-in convenience store interior with shelves and coolers.
    - `RamenShop.ts`: Noren curtains, cedar counter, kitchen pots, ticket machine.
    - `Storefronts.ts`: Street commercial shopfronts.
    - `BuildingEquipment.ts`: Rooftop water towers, HVAC, antennas, fire escapes.
  - **`props/`**: Categorized prop builders.
    - `ParkProps.ts`: Slide, swings, sandpit, pavilion, trees, fountain, clock tower.
    - `VendingMachines.ts`: Drink vending machines (hot/cold) and can recycling bins.
    - `StreetInfrastructure.ts`: Utility poles, power cables, street lamps, traffic lights.
    - `StreetFurniture.ts`: Bicycles, cars, bus stops, mailboxes, trash bins, planters.

---

## ⚠️ Important Rules for AI Assistants
1. **Target Submodules**: When adding or editing features, edit the corresponding submodule in `materials/`, `buildings/`, or `props/`. Do NOT re-bloat `Materials.ts`, `Buildings.ts`, or `Props.ts`.
2. **Procedural Canvas Textures**: All textures are generated via HTML5 2D Canvas in `materials/` and cached via `textureCache.get(key)`. Do not import external image URLs.
3. **Always Verify**: Run `npx tsc --noEmit` after editing to ensure zero type errors.

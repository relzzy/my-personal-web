# Personal Portfolio & 3D Tokyo Interactive Web

An interactive personal portfolio website featuring a first-person 3D Tokyo city block, residential apartment building, 4F elevator lounge, and luxury bedroom suite built with **Three.js** and **TypeScript**.

---

## 🗺️ Quick Repository Overview

```
my-personal-web/
├── index.html, project.html, anime.html... # Static portfolio website pages
├── tokyo/                                 # Production build output for the 3D game (served directly)
│   ├── index.html
│   └── assets/                            # Bundled JS/CSS produced by Vite
│
├── SVG_game/
│   └── tsconfig/                          # 🛠️ 3D Engine Source Code & Build Tooling
│       ├── package.json
│       ├── vite.config.ts
│       ├── tsconfig.json
│       └── src/                           # TypeScript Source
│           ├── main.ts                    # Game loop, scene, camera, renderer, setup
│           ├── types.ts                   # Core data models & interfaces
│           ├── game/                      # Input, player physics, collision, interaction
│           ├── ui/                        # HUD, Minimap, Toast messages
│           └── world/                     # 3D World generation, props, buildings, materials
│               ├── Audio.ts               # Synthesized audio effects (elevator chimes, footsteps)
│               ├── Layout.ts              # City grid, road dimensions, plot boundaries
│               ├── LightManager.ts        # Dynamic point lights, streetlights, neon glow
│               ├── Streets.ts             # Roads, sidewalks, crosswalks, ground planes
│               ├── Corridor4F.ts          # 4F Elevator Lounge & residential hallway
│               ├── Suite402Hall.ts        # Suite 402 Living room, hall & kitchenette
│               ├── Suite402.ts            # Suite 402 Master bedroom suite interior
│               ├── Suite402Bathroom.ts    # Suite 402 En-suite bathroom & wet room
│               ├── Buildings.ts           # Building layout orchestrator (206 lines)
│               ├── Props.ts               # Prop placement orchestrator (186 lines)
│               ├── Materials.ts           # Central barrel export (6 lines)
│               ├── buildings/             # Modular building constructors
│               ├── props/                 # Modular street & park prop constructors
│               └── materials/             # Modular procedural texture & material definitions
```

---

## 🤖 Guide for AI Assistants & Pair Programmers

> **CRITICAL RULE 1: Never edit files in `tokyo/` directly.**  
> `tokyo/` contains compiled, minified production assets. Always edit TypeScript source code inside `SVG_game/tsconfig/src/`, then compile and sync using `npm run deploy`.

> **CRITICAL RULE 2: Preserve Modular Architecture.**  
> Do not add monolithic code back into `Materials.ts`, `Buildings.ts`, or `Props.ts`. Those files are lightweight orchestrators / barrel exports. Always add or edit code in the relevant domain submodules:
> - Textures & Materials ➔ `src/world/materials/`
> - Building interiors/exteriors ➔ `src/world/buildings/`
> - Street furniture, park, vending ➔ `src/world/props/`

---

## 🏗️ 3D Subsystem Architecture

### 1. Materials Subsystem (`src/world/materials/`)
All textures are procedurally generated on HTML5 2D canvases to eliminate heavy image asset downloads and keep load times instant.
- **`TextureCache.ts`**: Global texture caching dictionary `textureCache` and font constants.
- **`CommonMaterials.ts`**: Static PBR materials (asphalt, sidewalk concrete, grass, metal, dark glass, warm wall paint, wood).
- **`StorefrontMaterials.ts`**: High-detail canvas textures for Konbini, Ramen Shop, Cafe, Izakaya, Bakery, Arcade, and A-frame chalkboard signs.
- **`InteriorMaterials.ts`**: Textures for 1F Lobby (concierge, mailboxes), 4F Corridor (carpet runner, elevator displays, room plaques, fire stairs), Suite 402 Hall & Living Room (welcome runner, cuisine sign, waveform display, art magazine, marble counters), Master Bedroom (rug, mat, workstation), and En-Suite Bathroom (travertine tiles, washer display, backlit LED mirror, water caustics).
- **`ParkMaterials.ts`**: Granite park nameplates, rules boards, bulletin notices, clock faces, and restroom icons.
- **`PropMaterials.ts`**: Japanese street signs, vending machine drink facades, recycling bins, and manholes.

### 2. Buildings Subsystem (`src/world/buildings/`)
- **`ApartmentLobby.ts`**: 1F entrance lobby, reception desk, mailboxes, and the 1F elevator bank with animated sliding doors.
- **`KonbiniStore.ts`**: Complete convenience store with glass facade, product shelves, refrigerated drink coolers, ATM, and checkout registers.
- **`RamenShop.ts`**: Ramen restaurant with cedar counter, swivel stools, open kitchen broth pots, noren fabric entrance curtains, and ticket machine.
- **`Storefronts.ts`**: Street-level commercial shops (Boba, Bakery, Izakaya, Laundromat, Clinic, Arcade, Bookshop).
- **`BuildingEquipment.ts`**: Rooftop infrastructure (HVAC units, industrial water towers, satellite dishes, AC compressor units, exterior fire escapes).

### 3. Props Subsystem (`src/world/props/`)
- **`ParkProps.ts`**: Playground spiral slide, swing set, see-saw spring riders, sandpit, park pavilion/gazebo, fountain, public restroom, clock tower, cherry trees, flowerbeds, and hedges.
- **`VendingMachines.ts`**: Authentic Japanese drink vending machines (cold blue, hot red, green tea) and recycling can receptacles.
- **`StreetInfrastructure.ts`**: Concrete utility poles with high-voltage transformers and powerlines, streetlamps, traffic signals, pedestrian crossing lights, and security cameras.
- **`StreetFurniture.ts`**: Commuter bicycles, parked cars, bus stop shelters, red postal mailboxes, trash bins, fire hydrants, stormwater drains, planters, and bollards.

### 4. Gameplay & Engine Core (`src/game/`)
- **`Player.ts`**: First-person capsule controller, camera rig, mouse-look, collision response, sprint, jump, footstep sound triggers.
- **`Collision.ts`**: Axis-aligned bounding box (AABB) spatial collision system preventing player clipping through walls and props.
- **`Interaction.ts`**: Proximity detection (`[E]`), prompt displays, and door/elevator action triggers.
- **`Settings.ts`**: Graphics quality settings (`low` vs `high` shadow/light render distance).

---

## 📍 World Coordinates & Spatial Map

The Tokyo apartment building interior features spatially partitioned, non-overlapping Z zones for optimal culling and collision safety:

| Zone / Area | Center Coordinates (X, Y, Z) | Active Z Bounds | Description & Connections |
| :--- | :--- | :--- | :--- |
| **Streets & City Center** | `(0, 0, 0)` | `Z: [-50, 50]` | Street grid, pedestrian sidewalks, shops, utility poles |
| **Public Park** | `X: [20, 60], Z: [-40, 0], Y: 0` | `Z: [-40, 0]` | Spiral slide, swings, trees, restroom, clock tower |
| **1F Apartment Lobby** | `X: -30, Z: -20, Y: 0` | Ground floor | Ground floor entrance, mailroom, 1F elevator cab |
| **4F Elevator Lounge** | `X: 0, Z: 65, Y: 0` | `Z: [55, 74]` | Isolated floor; elevator, vending, Door 402 entrance |
| **Suite 402 — Hall & Living Room** | `X: 0, Z: 86, Y: 0` | `Z: [74, 96]` | Kitchenette ("CUISINE"), dining, audio media center, sofa |
| **Suite 402 — Master Bedroom** | `X: 0, Z: 108, Y: 0` | `Z: [96, 118]` | Cyber workstation desk, platform bed, Tokyo balcony |
| **Suite 402 — En-Suite Bathroom** | `X: 0, Z: 126, Y: 0` | `Z: [118, 140]` | Soaking tub / wet room, washing machine ("42m"), vanity sink |

### 🚪 Suite 402 Circulation Flow
```
[4F Elevator Lounge] (Z: 65)
        │
        ▼ (Door 402 [E] - Screen Fade)
[Suite 402: Hall & Living Room] (Z: 86)
        │
        ▼ (West Archway [E] - Screen Fade)
[Suite 402: Master Bedroom] (Z: 108) ───► [Tokyo Balcony] (West)
        │
        ▼ (South Doorway [E] - Screen Fade)
[Suite 402: En-Suite Bathroom & Wet Room] (Z: 126)
```

### Fast URL Spawns
- `tokyo/index.html` ➔ Spawns in 1F Lobby / Streets
- `tokyo/index.html?lounge=1` or `?spawn=lounge` ➔ Spawns in 4F Elevator Lounge
- `tokyo/index.html?hall=1` or `?spawn=hall` ➔ Spawns in Suite 402 Hall & Living Room
- `tokyo/index.html?room=1` or `?spawn=room` ➔ Spawns in Suite 402 Master Bedroom
- `tokyo/index.html?bathroom=1` or `?spawn=bathroom` ➔ Spawns in Suite 402 Bathroom

---

## 🎮 Controls

- **`[W] [A] [S] [D]`**: Move (Hold **`[Shift]`** to sprint)
- **`[Mouse]`**: Look around (Click canvas to lock pointer)
- **`[E]`**: Interact (Open doors, call elevator, ring doorbells, operate appliances)
- **`[R]`**: Quick Transit Hotkey (Cycle: 1F Lobby ⟷ 4F Lounge ⟷ Suite 402 Hall ⟷ Suite 402 Bedroom)
- **`[G]`**: Toggle Graphics Quality (Low: optimized 60fps &bull; High: full render distance & shadows)
- **`[ESC]`**: Pause / Release mouse pointer

---

## 🚀 Development & Build Commands

All build commands must be run from `SVG_game/tsconfig/`:

```bash
cd SVG_game/tsconfig

# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run TypeScript type check (always run before deploying)
npx tsc --noEmit

# Full build and deploy to the root tokyo/ directory
npm run deploy
```

`npm run deploy` executes:
1. `tsc --noEmit` — Validates TypeScript types across all submodules.
2. `vite build` — Bundles optimized JS and assets into `dist/`.
3. `rm -rf ../../tokyo && cp -r dist ../../tokyo` — Syncs the build directly to the live game folder.

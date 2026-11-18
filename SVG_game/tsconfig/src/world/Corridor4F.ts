import * as THREE from 'three'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import { Settings } from '../game/Settings'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'
import { screenFade } from '../ui/ScreenFader'
import {
  suiteHardwoodFloorTexture,
  corridorCarpetRunnerTexture,
  corridorElevatorDisplayTexture,
  corridorFireStairsSignTexture,
  corridorWayfindingTexture,
  corridorSuitePlaqueTexture,
  corridorRefuseChuteTexture,
  corridorLoungeMagazineTexture,
  corridorLoungeArtTexture,
  suiteFlutedWoodTexture,
  corridorElevatorDoorTexture,
  corridorElevatorCallPanelTexture,
  corridorDoorIntercomTexture,
  corridorElevatorCOPTexture,
  elevatorAnimePoster1Texture,
  elevatorAnimePoster2Texture,
  suiteAnimePosterCyberpunkTexture,
} from './Materials'

export interface Corridor4FResult {
  group: THREE.Group
  update: (dt: number, p: { x: number; z: number }) => void
  openElevator: (autoAnimate?: boolean) => void
}

export function buildCorridor4F(
  scene: THREE.Scene,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
  lightManager?: LightManager,
  onRideElevatorTo1F?: () => void,
): Corridor4FResult {
  const corridorGroup = new THREE.Group()
  corridorGroup.name = 'corridor-4f-elevator-lounge'
  corridorGroup.visible = player.z >= 55 && player.z < 74
  scene.add(corridorGroup)

  // =========================================================================
  // 1. DIMENSIONS & COORDINATE ORIGIN
  // =========================================================================
  const cx = 0
  const cz = 65
  const floorY = 0.15
  const innerW = 14.4 // East-West length (X: -7.2 to +7.2)
  const innerD = 5.2  // North-South width (Z: cz - 2.6 to cz + 2.6)
  const wallH = 2.9
  const wallThick = 0.3

  // =========================================================================
  // 2. LUXURY HOTEL / APARTMENT MATERIALS
  // =========================================================================
  const woodFloorTex = suiteHardwoodFloorTexture()
  const woodBorderMat = new THREE.MeshStandardMaterial({
    map: woodFloorTex,
    roughness: 0.35,
    metalness: 0.08,
  })

  const runnerTex = corridorCarpetRunnerTexture()
  const runnerMat = new THREE.MeshStandardMaterial({
    map: runnerTex,
    roughness: 0.88,
    metalness: 0.04,
  })

  const upperWallMat = new THREE.MeshStandardMaterial({
    color: 0x141a26,
    roughness: 0.78,
    metalness: 0.05,
  })

  const wainscotMat = new THREE.MeshStandardMaterial({
    color: 0x221812,
    roughness: 0.45,
    metalness: 0.06,
  })

  const flutedWoodTex = suiteFlutedWoodTexture()
  const flutedWoodMat = new THREE.MeshStandardMaterial({
    map: flutedWoodTex,
    roughness: 0.45,
    metalness: 0.08,
  })

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.28,
    metalness: 0.88,
  })

  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x1a202c,
    roughness: 0.4,
    metalness: 0.8,
  })

  const elevDoorTex = corridorElevatorDoorTexture()
  const satinElevatorMat = new THREE.MeshStandardMaterial({
    map: elevDoorTex,
    color: 0x475569,
    roughness: 0.55,
    metalness: 0.38,
  })

  const btnUpNormalMat = new THREE.MeshBasicMaterial({
    color: 0xf59e0b,
    toneMapped: false,
  })

  const btnUpActiveMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    toneMapped: false,
  })

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0x121722,
    roughness: 0.7,
  })

  const coveLedMat = new THREE.MeshBasicMaterial({
    color: 0xfffae6,
    toneMapped: false,
  })

  const marbleMat = new THREE.MeshStandardMaterial({
    color: 0xedebe8,
    roughness: 0.22,
    metalness: 0.08,
  })

  const leatherCognacMat = new THREE.MeshStandardMaterial({
    color: 0x78350f,
    roughness: 0.65,
    metalness: 0.05,
  })

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x7dd3fc,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
  })

  const plantLeafMat = new THREE.MeshStandardMaterial({
    color: 0x1b4332,
    roughness: 0.6,
    side: THREE.DoubleSide,
  })

  // =========================================================================
  // 3. ARCHITECTURAL SHELL (FLOOR, CEILING, WALLS)
  // =========================================================================

  // 3.1 Hardwood Perimeter Floor
  const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.05, innerD), woodBorderMat)
  floorMesh.position.set(cx, floorY + 0.025, cz)
  floorMesh.receiveShadow = true
  corridorGroup.add(floorMesh)

  // 3.2 Wide Luxury Carpet Runner with Double Gold Borders
  const runnerW = innerW - 0.4
  const runnerD = 3.6
  const runnerMesh = new THREE.Mesh(new THREE.PlaneGeometry(runnerW, runnerD), runnerMat)
  runnerMesh.rotation.x = -Math.PI / 2
  runnerMesh.position.set(cx, floorY + 0.052, cz)
  runnerMesh.receiveShadow = true
  corridorGroup.add(runnerMesh)

  // 3.3 Suspended Ceiling with Recessed LED Cove Lighting Tray
  const ceilMesh = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.1, innerD), ceilingMat)
  ceilMesh.position.set(cx, floorY + wallH + 0.05, cz)
  corridorGroup.add(ceilMesh)

  // Recessed cove tray
  const coveTrayW = innerW - 1.2
  const coveTrayD = innerD - 1.2
  const trayMesh = new THREE.Mesh(new THREE.BoxGeometry(coveTrayW, 0.05, coveTrayD), ceilingMat)
  trayMesh.position.set(cx, floorY + wallH - 0.02, cz)
  const coveEdge = new THREE.Mesh(new THREE.BoxGeometry(coveTrayW + 0.08, 0.02, coveTrayD + 0.08), coveLedMat)
  coveEdge.position.set(cx, floorY + wallH - 0.04, cz)
  corridorGroup.add(trayMesh, coveEdge)

  // 3.4 Wall Wainscoting & Picture Rails Builder
  const buildWallWithWainscot = (
    w: number,
    d: number,
    x: number,
    z: number,
    isEastWest = true,
  ) => {
    const wallGrp = new THREE.Group()

    // Upper wall
    const upperH = wallH - 1.05
    const upper = new THREE.Mesh(new THREE.BoxGeometry(w, upperH, d), upperWallMat)
    upper.position.set(0, 1.05 + upperH / 2, 0)
    wallGrp.add(upper)

    // Polished Brass Picture Rail
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(isEastWest ? w : 0.03, 0.03, isEastWest ? 0.03 : d),
      goldMat,
    )
    rail.position.set(0, 1.05, 0)
    wallGrp.add(rail)

    // Lower American Walnut Wainscoting
    const lower = new THREE.Mesh(new THREE.BoxGeometry(w, 0.95, d), wainscotMat)
    lower.position.set(0, 0.525, 0)
    wallGrp.add(lower)

    // Dark Baseboard with Gold Bead
    const bb = new THREE.Mesh(
      new THREE.BoxGeometry(isEastWest ? w : 0.04, 0.1, isEastWest ? 0.04 : d),
      goldMat,
    )
    bb.position.set(0, 0.05, 0)
    wallGrp.add(bb)

    wallGrp.position.set(x, floorY, z)
    corridorGroup.add(wallGrp)
  }

  // SOUTH WALL (Solid backing with wainscot)
  buildWallWithWainscot(innerW, wallThick, cx, cz + innerD / 2 + wallThick / 2, true)

  // EAST WALL (Solid with picture rail)
  buildWallWithWainscot(wallThick, innerD, cx + innerW / 2 + wallThick / 2, cz, false)

  // WEST WALL (Split with grand entrance to Suite 402)
  const doorW402 = 1.6
  const wWallSegD = (innerD - doorW402) / 2
  buildWallWithWainscot(wallThick, wWallSegD, cx - innerW / 2 - wallThick / 2, cz - innerD / 2 + wWallSegD / 2, false)
  buildWallWithWainscot(wallThick, wWallSegD, cx - innerW / 2 - wallThick / 2, cz + innerD / 2 - wWallSegD / 2, false)

  // Header over Suite 402 entrance
  const eDoorH402 = 2.4
  const wHeader = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH - eDoorH402, doorW402), upperWallMat)
  wHeader.position.set(cx - innerW / 2 - wallThick / 2, floorY + eDoorH402 + (wallH - eDoorH402) / 2, cz)
  corridorGroup.add(wHeader)

  // Suite 402 Door Architrave & Plaque
  const archW402 = new THREE.Mesh(new THREE.BoxGeometry(0.08, eDoorH402, 0.08), goldMat)
  archW402.position.set(cx - innerW / 2 + 0.02, floorY + eDoorH402 / 2, cz - doorW402 / 2)
  const archW402R = new THREE.Mesh(new THREE.BoxGeometry(0.08, eDoorH402, 0.08), goldMat)
  archW402R.position.set(cx - innerW / 2 + 0.02, floorY + eDoorH402 / 2, cz + doorW402 / 2)
  const archW402Top = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, doorW402 + 0.16), goldMat)
  archW402Top.position.set(cx - innerW / 2 + 0.02, floorY + eDoorH402 + 0.04, cz)
  corridorGroup.add(archW402, archW402R, archW402Top)

  // Suite 402 Entrance Door Leaf (Solid dark walnut with recessed architectural panels)
  const s402DoorLeafW = doorW402 - 0.04 // 1.26m
  const s402DoorH = eDoorH402 - 0.02 // 2.38m
  const s402DoorThick = 0.05
  const s402DoorX = cx - innerW / 2 + 0.02

  const s402DoorGroup = new THREE.Group()
  const s402DoorMesh = new THREE.Mesh(
    new THREE.BoxGeometry(s402DoorThick, s402DoorH, s402DoorLeafW),
    wainscotMat,
  )
  s402DoorMesh.position.set(s402DoorX, floorY + s402DoorH / 2, cz)

  // 2 Recessed Architectural Panels on corridor-facing front face
  const panelGeo = new THREE.BoxGeometry(0.012, s402DoorH - 0.45, 0.46)
  const panel1 = new THREE.Mesh(
    panelGeo,
    new THREE.MeshStandardMaterial({ color: 0x150e09, roughness: 0.55 }),
  )
  panel1.position.set(s402DoorX + s402DoorThick / 2 + 0.005, floorY + s402DoorH / 2, cz - 0.30)
  const panel2 = new THREE.Mesh(
    panelGeo,
    new THREE.MeshStandardMaterial({ color: 0x150e09, roughness: 0.55 }),
  )
  panel2.position.set(s402DoorX + s402DoorThick / 2 + 0.005, floorY + s402DoorH / 2, cz + 0.30)

  // Satin gold horizontal lever handle & backplate
  const s402HandlePlate = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.28, 0.06), goldMat)
  s402HandlePlate.position.set(s402DoorX + s402DoorThick / 2 + 0.008, floorY + 1.05, cz - 0.44)
  const s402HandleLever = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.028, 0.14), goldMat)
  s402HandleLever.position.set(s402DoorX + s402DoorThick / 2 + 0.035, floorY + 1.05, cz - 0.48)

  // Optical Peephole
  const s402Peep = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.03, 12), goldMat)
  s402Peep.rotateZ(Math.PI / 2)
  s402Peep.position.set(s402DoorX + s402DoorThick / 2 + 0.01, floorY + 1.55, cz)

  s402DoorGroup.add(s402DoorMesh, panel1, panel2, s402HandlePlate, s402HandleLever, s402Peep)
  corridorGroup.add(s402DoorGroup)

  // Suite 402 Plaque
  const plaqueTex402 = corridorSuitePlaqueTexture('402')
  const plaque402 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.24, 0.16),
    new THREE.MeshStandardMaterial({ map: plaqueTex402, metalness: 0.85, roughness: 0.2 }),
  )
  plaque402.rotation.y = Math.PI / 2
  plaque402.position.set(cx - innerW / 2 + 0.04, floorY + 1.65, cz - doorW402 / 2 - 0.25)

  // Smart lock keypad with glowing cyan LED
  const lockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.22, 0.1), darkMetalMat)
  lockMesh.position.set(cx - innerW / 2 + 0.03, floorY + 1.25, cz - doorW402 / 2 - 0.25)
  const lockLed = new THREE.Mesh(new THREE.CircleGeometry(0.012, 12), new THREE.MeshBasicMaterial({ color: 0x00ffff }))
  lockLed.rotation.y = Math.PI / 2
  lockLed.position.set(cx - innerW / 2 + 0.046, floorY + 1.32, cz - doorW402 / 2 - 0.25)
  corridorGroup.add(plaque402, lockMesh, lockLed)

  // Coir Welcome Runner Mat for Suite 402
  const coirMat = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 1.3),
    new THREE.MeshStandardMaterial({ color: 0x3d2c1f, roughness: 0.95 }),
  )
  coirMat.rotation.x = -Math.PI / 2
  coirMat.position.set(cx - innerW / 2 + 0.55, floorY + 0.053, cz)
  corridorGroup.add(coirMat)

  // Warm light spill from Suite 402 door
  const suiteSpill = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 1.5),
    new THREE.MeshBasicMaterial({ color: 0xffeed6, transparent: true, opacity: 0.18 }),
  )
  suiteSpill.rotation.x = -Math.PI / 2
  suiteSpill.position.set(cx - innerW / 2 + 1.1, floorY + 0.054, cz)
  corridorGroup.add(suiteSpill)

  // =========================================================================
  // 3. NORTH WALL (SEGMENTED ARCHITECTURAL WALL WITH ELEVATOR OPENINGS)
  // [ARCHITECTURAL FIX]: Wall is cleanly segmented around Lift 1 and Lift 2
  // openings so the elevator shaft and doors sit naturally recessed inside
  // the wall thickness without intersecting solid geometry.
  // =========================================================================
  const elevH = 2.30
  const elevW = 1.40
  const elevDoorZ = cz - innerD / 2 - 0.07 // 62.33 (recessed inside wall pocket)

  const lift1X = cx - 1.45 // Active Lift 1 (Left)
  const lift2X = cx + 1.45 // Standby Lift 2 (Right)

  // 3.1 North Wall Segments (Flanking elevator portals)
  const sideWallW = 5.05 // from -7.2 to -2.15, and +2.15 to +7.2
  const westWallMesh = new THREE.Mesh(new THREE.BoxGeometry(sideWallW, wallH, wallThick), upperWallMat)
  westWallMesh.position.set(-7.2 + sideWallW / 2, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)

  const eastWallMesh = new THREE.Mesh(new THREE.BoxGeometry(sideWallW, wallH, wallThick), upperWallMat)
  eastWallMesh.position.set(7.2 - sideWallW / 2, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)

  const centerPierWall = new THREE.Mesh(new THREE.BoxGeometry(1.50, wallH, wallThick), upperWallMat)
  centerPierWall.position.set(cx, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)

  // Lintels above Lift 1 and Lift 2 portals
  const lintelH = wallH - elevH
  const lintel1 = new THREE.Mesh(new THREE.BoxGeometry(elevW, lintelH, wallThick), upperWallMat)
  lintel1.position.set(lift1X, floorY + elevH + lintelH / 2, cz - innerD / 2 - wallThick / 2)

  const lintel2 = new THREE.Mesh(new THREE.BoxGeometry(elevW, lintelH, wallThick), upperWallMat)
  lintel2.position.set(lift2X, floorY + elevH + lintelH / 2, cz - innerD / 2 - wallThick / 2)

  corridorGroup.add(westWallMesh, eastWallMesh, centerPierWall, lintel1, lintel2)

  // 3.2 Lower Wainscoting along North Wall (Stops cleanly at outer architraves)
  const wainscotW = 4.92
  const nWainscotW = new THREE.Mesh(new THREE.BoxGeometry(wainscotW, 0.95, 0.04), wainscotMat)
  nWainscotW.position.set(-7.2 + wainscotW / 2, floorY + 0.475, cz - innerD / 2 + 0.02)
  const nPictureRailW = new THREE.Mesh(new THREE.BoxGeometry(wainscotW, 0.03, 0.04), goldMat)
  nPictureRailW.position.set(-7.2 + wainscotW / 2, floorY + 1.05, cz - innerD / 2 + 0.02)

  const nWainscotE = new THREE.Mesh(new THREE.BoxGeometry(wainscotW, 0.95, 0.04), wainscotMat)
  nWainscotE.position.set(7.2 - wainscotW / 2, floorY + 0.475, cz - innerD / 2 + 0.02)
  const nPictureRailE = new THREE.Mesh(new THREE.BoxGeometry(wainscotW, 0.03, 0.04), goldMat)
  nPictureRailE.position.set(7.2 - wainscotW / 2, floorY + 1.05, cz - innerD / 2 + 0.02)
  corridorGroup.add(nWainscotW, nPictureRailW, nWainscotE, nPictureRailE)

  // =========================================================================
  // 4. UNIFIED GRAND ELEVATOR BANK (NORTH WALL)
  // [ELEVATOR OVERHAUL]: A continuous grand architectural entablature ties Lift 1,
  // the Center Pier, and Lift 2 into a single cohesive luxury hotel installation.
  // Doors are recessed inside wall pockets and slide behind jambs.
  // =========================================================================
  const bankTotalW = 4.64

  // 4.1 Continuous Architectural Entablature Header across Lift 1, Pier, & Lift 2
  const entablatureGroup = new THREE.Group()
  // Lower gold architrave belt
  const bankArchTrim = new THREE.Mesh(new THREE.BoxGeometry(bankTotalW, 0.04, 0.09), goldMat)
  bankArchTrim.position.set(cx, floorY + elevH + 0.02, cz - innerD / 2 + 0.045)

  // Center frieze panel (dark walnut)
  const bankFrieze = new THREE.Mesh(new THREE.BoxGeometry(bankTotalW - 0.04, 0.18, 0.07), wainscotMat)
  bankFrieze.position.set(cx, floorY + elevH + 0.13, cz - innerD / 2 + 0.035)

  // Upper stepped gold cornice crown molding
  const bankCornice = new THREE.Mesh(new THREE.BoxGeometry(bankTotalW + 0.04, 0.05, 0.11), goldMat)
  bankCornice.position.set(cx, floorY + elevH + 0.245, cz - innerD / 2 + 0.05)

  entablatureGroup.add(bankArchTrim, bankFrieze, bankCornice)
  corridorGroup.add(entablatureGroup)

  // 4.2 Center Architectural Pier (Between Lift 1 & Lift 2)
  const pierMesh = new THREE.Mesh(new THREE.BoxGeometry(1.24, elevH, 0.05), wainscotMat)
  pierMesh.position.set(cx, floorY + elevH / 2, cz - innerD / 2 + 0.025)

  const pierFlute = new THREE.Mesh(new THREE.BoxGeometry(1.10, elevH - 0.06, 0.02), flutedWoodMat)
  pierFlute.position.set(cx, floorY + elevH / 2, cz - innerD / 2 + 0.05)

  const pierTrimL = new THREE.Mesh(new THREE.BoxGeometry(0.025, elevH, 0.03), goldMat)
  pierTrimL.position.set(cx - 0.58, floorY + elevH / 2, cz - innerD / 2 + 0.05)
  const pierTrimR = new THREE.Mesh(new THREE.BoxGeometry(0.025, elevH, 0.03), goldMat)
  pierTrimR.position.set(cx + 0.58, floorY + elevH / 2, cz - innerD / 2 + 0.05)
  corridorGroup.add(pierMesh, pierFlute, pierTrimL, pierTrimR)

  // High-End Brushed Brass Elevator Call Station
  const callPlate = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.54, 0.025), goldMat)
  callPlate.position.set(cx, floorY + 1.35, cz - innerD / 2 + 0.065)

  const callPanelTex = corridorElevatorCallPanelTexture()
  const callPanelMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.24, 0.50),
    new THREE.MeshBasicMaterial({ map: callPanelTex }),
  )
  callPanelMesh.position.set(cx, floorY + 1.35, cz - innerD / 2 + 0.079)

  // Tactile 3D Button Bezels & Illuminated Lenses
  const callBtnGeo = new THREE.CylinderGeometry(0.026, 0.026, 0.012, 16)
  callBtnGeo.rotateX(Math.PI / 2)

  const callBtnUp = new THREE.Mesh(callBtnGeo, btnUpNormalMat)
  callBtnUp.position.set(cx, floorY + 1.44, cz - innerD / 2 + 0.082)

  const callBtnDown = new THREE.Mesh(
    callBtnGeo,
    new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4 }),
  )
  callBtnDown.position.set(cx, floorY + 1.25, cz - innerD / 2 + 0.082)

  corridorGroup.add(callPlate, callPanelMesh, callBtnUp, callBtnDown)

  // 4.3 HELPER: BUILD ELEVATOR PORTAL
  const buildElevatorPortal = (portalX: number, isLeft: boolean) => {
    const pGroup = new THREE.Group()

    // Outer Beveled Architrave Jambs (Gold / Brushed Bronze)
    const archL = new THREE.Mesh(new THREE.BoxGeometry(0.12, elevH, 0.08), goldMat)
    archL.position.set(portalX - elevW / 2 - 0.06, floorY + elevH / 2, cz - innerD / 2 + 0.04)

    const archR = new THREE.Mesh(new THREE.BoxGeometry(0.12, elevH, 0.08), goldMat)
    archR.position.set(portalX + elevW / 2 + 0.06, floorY + elevH / 2, cz - innerD / 2 + 0.04)

    // Inner Door Pocket Return Reveals (Concealing door sliding pocket)
    const revealL = new THREE.Mesh(new THREE.BoxGeometry(0.035, elevH, 0.20), darkMetalMat)
    revealL.position.set(portalX - elevW / 2 + 0.018, floorY + elevH / 2, cz - innerD / 2 - 0.05)

    const revealR = new THREE.Mesh(new THREE.BoxGeometry(0.035, elevH, 0.20), darkMetalMat)
    revealR.position.set(portalX + elevW / 2 - 0.018, floorY + elevH / 2, cz - innerD / 2 - 0.05)

    const revealTop = new THREE.Mesh(new THREE.BoxGeometry(elevW, 0.035, 0.20), darkMetalMat)
    revealTop.position.set(portalX, floorY + elevH - 0.018, cz - innerD / 2 - 0.05)

    // Polished Brass Floor Threshold Sill
    const sill = new THREE.Mesh(new THREE.BoxGeometry(elevW + 0.08, 0.025, 0.22), goldMat)
    sill.position.set(portalX, floorY + 0.045, cz - innerD / 2 - 0.04)

    // Integrated Floor Indicator Screen Box (Within Frieze)
    const dispTex = corridorElevatorDisplayTexture(isLeft ? 'left' : 'right')
    const dispMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.44, 0.14),
      new THREE.MeshBasicMaterial({ map: dispTex, toneMapped: false }),
    )
    dispMesh.position.set(portalX, floorY + elevH + 0.13, cz - innerD / 2 + 0.076)

    const dispFrame = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.18, 0.02), darkMetalMat)
    dispFrame.position.set(portalX, floorY + elevH + 0.13, cz - innerD / 2 + 0.065)

    // Directional Arrival Lantern (Chevron Up)
    const lanternGeo = new THREE.ConeGeometry(0.035, 0.06, 4)
    const lanternMat = isLeft ? btnUpNormalMat : new THREE.MeshStandardMaterial({ color: 0x475569 })
    const lantern = new THREE.Mesh(lanternGeo, lanternMat)
    lantern.position.set(portalX, floorY + elevH + 0.23, cz - innerD / 2 + 0.06)

    pGroup.add(archL, archR, revealL, revealR, revealTop, sill, dispFrame, dispMesh, lantern)
    corridorGroup.add(pGroup)
  }

  // 4.4 LIFT 1 (ACTIVE ELEVATOR TO 1F) - Left Portal
  buildElevatorPortal(lift1X, true)

  // Sliding Elevator Doors for Lift 1 (Recessed in wall pocket at elevDoorZ)
  const doorPanelW = 0.72
  const doorPanelH = elevH - 0.04
  const doorGeo = new THREE.BoxGeometry(doorPanelW, doorPanelH, 0.028)

  const lift1DoorL = new THREE.Mesh(doorGeo, satinElevatorMat)
  const lift1DoorR = new THREE.Mesh(doorGeo, satinElevatorMat)
  lift1DoorL.position.set(lift1X - doorPanelW / 2 + 0.01, floorY + doorPanelH / 2 + 0.01, elevDoorZ)
  lift1DoorR.position.set(lift1X + doorPanelW / 2 - 0.01, floorY + doorPanelH / 2 + 0.01, elevDoorZ)
  corridorGroup.add(lift1DoorL, lift1DoorR)

  // Lift 1 Cab Interior (Fully modeled interior cabin behind recessed doors)
  const cabW = 1.80
  const cabD = 2.00
  const cabH = 2.38
  const cabZ = cz - innerD / 2 - cabD / 2 - 0.10 // 61.30

  // Cab Floor (Dark Nero Marquina marble with border)
  const cabFloor = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.04, cabD), woodBorderMat)
  cabFloor.position.set(lift1X, floorY + 0.02, cabZ)

  // Cab Ceiling
  const cabCeil = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.06, cabD), darkMetalMat)
  cabCeil.position.set(lift1X, floorY + cabH, cabZ)

  // Cab Back Wall (Lower walnut wainscot + Upper tinted bronze mirror)
  const cabBackLower = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.85, 0.04), wainscotMat)
  cabBackLower.position.set(lift1X, floorY + 0.425, cabZ - cabD / 2 + 0.02)

  const cabBackMirror = new THREE.Mesh(
    new THREE.BoxGeometry(cabW - 0.04, cabH - 0.85, 0.02),
    new THREE.MeshStandardMaterial({ color: 0xd8e2ec, roughness: 0.12, metalness: 0.92 }),
  )
  cabBackMirror.position.set(lift1X, floorY + 0.85 + (cabH - 0.85) / 2, cabZ - cabD / 2 + 0.02)

  const cabRailBack = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, cabW - 0.25, 12), goldMat)
  cabRailBack.rotateZ(Math.PI / 2)
  cabRailBack.position.set(lift1X, floorY + 0.95, cabZ - cabD / 2 + 0.07)

  // Cab Left Side Wall (Solid enclosure)
  const cabLeftLower = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.85, cabD), wainscotMat)
  cabLeftLower.position.set(lift1X - cabW / 2 + 0.02, floorY + 0.425, cabZ)

  const cabLeftUpper = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, cabH - 0.85, cabD),
    new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.4 }),
  )
  cabLeftUpper.position.set(lift1X - cabW / 2 + 0.02, floorY + 0.85 + (cabH - 0.85) / 2, cabZ)

  const cabRailLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, cabD - 0.3, 12), goldMat)
  cabRailLeft.rotateX(Math.PI / 2)
  cabRailLeft.position.set(lift1X - cabW / 2 + 0.06, floorY + 0.95, cabZ)

  // Cab Right Side Wall (Solid enclosure + COP Button Panel)
  const cabRightLower = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.85, cabD), wainscotMat)
  cabRightLower.position.set(lift1X + cabW / 2 - 0.02, floorY + 0.425, cabZ)

  const cabRightUpper = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, cabH - 0.85, cabD),
    new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.4 }),
  )
  cabRightUpper.position.set(lift1X + cabW / 2 - 0.02, floorY + 0.85 + (cabH - 0.85) / 2, cabZ)

  // Car Operating Panel (COP Column) with High-Res Tactile Buttons & LED Screen
  const copGrp = new THREE.Group()
  const copChassis = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.45, 0.34), goldMat)
  copChassis.position.set(0, 0, 0)

  const copFaceTex = corridorElevatorCOPTexture('4F')
  const copFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.32, 1.42),
    new THREE.MeshStandardMaterial({
      map: copFaceTex,
      roughness: 0.35,
      metalness: 0.55,
    }),
  )
  copFace.rotateY(-Math.PI / 2)
  copFace.position.set(-0.021, 0, 0)
  copGrp.add(copChassis, copFace)
  copGrp.position.set(lift1X + cabW / 2 - 0.02, floorY + 1.25, cabZ + 0.30)

  // Framed Anime Girl Art Posters inside Elevator Cab
  const buildCabPoster = (
    texture: THREE.Texture,
    posX: number,
    posY: number,
    posZ: number,
    facingEast: boolean,
  ) => {
    const posterGrp = new THREE.Group()
    const frameMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.86, 0.58),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.8 }),
    )
    const goldTrim = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.88, 0.60), goldMat)

    const pic = new THREE.Mesh(
      new THREE.PlaneGeometry(0.54, 0.82),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.4, metalness: 0.1 }),
    )
    pic.rotation.y = facingEast ? Math.PI / 2 : -Math.PI / 2
    pic.position.set(facingEast ? 0.013 : -0.013, 0, 0)

    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.54, 0.82),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 0.9,
        transparent: true,
        opacity: 0.14,
      }),
    )
    glass.rotation.y = facingEast ? Math.PI / 2 : -Math.PI / 2
    glass.position.set(facingEast ? 0.015 : -0.015, 0, 0)

    posterGrp.add(goldTrim, frameMesh, pic, glass)
    posterGrp.position.set(posX, posY, posZ)
    return posterGrp
  }

  // Poster 1: Cyber Idol Kira (Left wall, facing East into cab)
  const poster1 = buildCabPoster(elevatorAnimePoster1Texture(), lift1X - cabW / 2 + 0.02, floorY + 1.45, cabZ - 0.35, true)
  // Poster 2: Sunset Lo-Fi Mei (Left wall, facing East into cab)
  const poster2 = buildCabPoster(elevatorAnimePoster2Texture(), lift1X - cabW / 2 + 0.02, floorY + 1.45, cabZ + 0.45, true)
  // Poster 3: Cyberpunk City Heroine (Right wall, facing West into cab, beside COP)
  const poster3 = buildCabPoster(suiteAnimePosterCyberpunkTexture(), lift1X + cabW / 2 - 0.02, floorY + 1.45, cabZ - 0.45, false)

  // Warm elevator interior downlight
  const cabLight = new THREE.PointLight(0xfffae6, 2.2, 5.5, 1.2)
  cabLight.position.set(lift1X, floorY + cabH - 0.12, cabZ)

  corridorGroup.add(
    cabFloor, cabCeil,
    cabBackLower, cabBackMirror, cabRailBack,
    cabLeftLower, cabLeftUpper, cabRailLeft,
    cabRightLower, cabRightUpper,
    copGrp, poster1, poster2, poster3,
    cabLight,
  )

  // 4.5 LIFT 2 (STANDBY ELEVATOR) - Right Portal
  buildElevatorPortal(lift2X, false)

  const lift2DoorL = new THREE.Mesh(doorGeo, satinElevatorMat)
  const lift2DoorR = new THREE.Mesh(doorGeo, satinElevatorMat)
  lift2DoorL.position.set(lift2X - doorPanelW / 2 + 0.01, floorY + doorPanelH / 2 + 0.01, elevDoorZ)
  lift2DoorR.position.set(lift2X + doorPanelW / 2 - 0.01, floorY + doorPanelH / 2 + 0.01, elevDoorZ)

  // Vertical center gasket seam highlight
  const seamR = new THREE.Mesh(new THREE.BoxGeometry(0.008, doorPanelH, 0.032), darkMetalMat)
  seamR.position.set(lift2X, floorY + doorPanelH / 2 + 0.01, elevDoorZ + 0.005)
  corridorGroup.add(lift2DoorL, lift2DoorR, seamR)

  // =========================================================================
  // 5. SUITE 401 & SUITE 403 ENTRANCE DOORS
  // =========================================================================
  const buildSuiteDoor = (doorNum: string, posX: number) => {
    const doorGrp = new THREE.Group()

    // Door Architrave Frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.3, 0.06), wainscotMat)
    frame.position.set(0, 1.15, 0.03)
    doorGrp.add(frame)

    // Door Leaf
    const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.05, 2.2, 0.04), wainscotMat)
    leaf.position.set(0, 1.12, 0.05)
    doorGrp.add(leaf)

    // Recessed Door Panels (2 vertical panels)
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 1.8, 0.02), new THREE.MeshStandardMaterial({ color: 0x18100a, roughness: 0.5 }))
    p1.position.set(-0.24, 1.12, 0.06)
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 1.8, 0.02), new THREE.MeshStandardMaterial({ color: 0x18100a, roughness: 0.5 }))
    p2.position.set(0.24, 1.12, 0.06)
    doorGrp.add(p1, p2)

    // Brass Plaque
    const plaqueTex = corridorSuitePlaqueTexture(doorNum)
    const plaque = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.12), new THREE.MeshStandardMaterial({ map: plaqueTex, metalness: 0.85, roughness: 0.2 }))
    plaque.position.set(0, 1.68, 0.075)
    doorGrp.add(plaque)

    // Optical Peephole
    const peephole = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.02, 10), goldMat)
    peephole.rotateX(Math.PI / 2)
    peephole.position.set(0, 1.5, 0.075)
    doorGrp.add(peephole)

    // Gold Door Handle Lever
    const lever = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.04), goldMat)
    lever.position.set(0.42, 1.05, 0.08)
    doorGrp.add(lever)

    // Architectural Video Intercom & Doorbell Station
    const intercomGrp = new THREE.Group()
    const icPlate = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.18, 0.022), darkMetalMat)
    icPlate.position.set(0, 0, 0.011)

    const icTex = corridorDoorIntercomTexture(doorNum)
    const icMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.082, 0.172),
      new THREE.MeshBasicMaterial({ map: icTex }),
    )
    icMesh.position.set(0, 0, 0.023)

    // Tactile 3D button bezel
    const icBtnGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.008, 16)
    icBtnGeo.rotateX(Math.PI / 2)
    const icBtn = new THREE.Mesh(
      icBtnGeo,
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.7 }),
    )
    icBtn.position.set(0, -0.045, 0.025)

    intercomGrp.add(icPlate, icMesh, icBtn)
    intercomGrp.position.set(-0.68, 1.35, 0.035)
    doorGrp.add(intercomGrp)

    doorGrp.position.set(posX, floorY, cz - innerD / 2)
    corridorGroup.add(doorGrp)
  }

  // Suite 401 (West of Elevators)
  buildSuiteDoor('401', cx - 3.8)

  // Suite 403 (East of Elevators)
  buildSuiteDoor('403', cx + 3.4)

  // =========================================================================
  // 6. REFUSE / RECYCLING CHUTE (NORTH WALL)
  // =========================================================================
  const chuteX = cx - 2.6
  const chuteZ = cz - innerD / 2
  const chuteTex = corridorRefuseChuteTexture()
  const chuteMat = new THREE.MeshStandardMaterial({
    map: chuteTex,
    roughness: 0.35,
    metalness: 0.75,
  })
  const chuteFrame = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.98, 0.03), darkMetalMat)
  chuteFrame.position.set(chuteX, floorY + 1.25, chuteZ + 0.02)
  const chuteMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.9), chuteMat)
  chuteMesh.position.set(chuteX, floorY + 1.25, chuteZ + 0.036)
  corridorGroup.add(chuteFrame, chuteMesh)

  // =========================================================================
  // 7. EMERGENCY FIRE STAIRWELL DOOR (NORTH-EAST WALL)
  // =========================================================================
  const stairsX = cx + 5.2
  const stairsZ = cz - innerD / 2

  // Heavy Steel Door Frame
  const stairsFrame = new THREE.Mesh(new THREE.BoxGeometry(1.25, 2.35, 0.06), darkMetalMat)
  stairsFrame.position.set(stairsX, floorY + 1.175, stairsZ + 0.03)

  // Steel Door Leaf
  const stairsLeaf = new THREE.Mesh(new THREE.BoxGeometry(1.12, 2.25, 0.04), new THREE.MeshStandardMaterial({ color: 0x27303f, roughness: 0.5, metalness: 0.6 }))
  stairsLeaf.position.set(stairsX, floorY + 1.15, stairsZ + 0.045)

  // Wired Safety Glass Inspection Panel
  const glassPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.55), new THREE.MeshStandardMaterial({ color: 0x082f49, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.85 }))
  glassPanel.position.set(stairsX, floorY + 1.5, stairsZ + 0.068)

  // Horizontal Stainless Steel Panic Push Bar
  const panicBar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 12), new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.2, metalness: 0.85 }))
  panicBar.rotateZ(Math.PI / 2)
  panicBar.position.set(stairsX, floorY + 0.95, stairsZ + 0.09)

  // Overhead Illuminated Green Running-Man Emergency Exit Sign
  const stairsSignTex = corridorFireStairsSignTexture()
  const stairsSignMat = new THREE.MeshBasicMaterial({ map: stairsSignTex, toneMapped: false })
  const stairsSign = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.24), stairsSignMat)
  stairsSign.position.set(stairsX, floorY + 2.52, stairsZ + 0.06)
  corridorGroup.add(stairsFrame, stairsLeaf, glassPanel, panicBar, stairsSign)

  // Directional Plaque: "◄ 401-404 | LIFTS | STAIRS ►"
  const wayTex = corridorWayfindingTexture()
  const wayMat = new THREE.MeshStandardMaterial({ map: wayTex, roughness: 0.35, metalness: 0.6 })
  const wayMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.28), wayMat)
  wayMesh.position.set(cx + 6.3, floorY + 1.6, cz - innerD / 2 + 0.04)
  corridorGroup.add(wayMesh)

  // =========================================================================
  // 8. LUXURY RESIDENTIAL LOUNGE SEATING & CONSOLE (SOUTH WALL)
  // [NEW POLISH]: High-end cognac leather sofa, Italian marble coffee table,
  // architectural console credenza, large decorative mirror, magazines, and plants.
  // =========================================================================
  const sofaX = cx + 0.5
  const sofaZ = cz + innerD / 2 - 0.48 // South wall zone (67.1)
  const sofaW = 2.2
  const sofaD = 0.78

  // 8.1 Cognac Leather Lounge Sofa
  const sofaGroup = new THREE.Group()
  sofaGroup.position.set(sofaX, floorY, sofaZ)

  // Main base & seat cushion
  const sofaSeat = new THREE.Mesh(new THREE.BoxGeometry(sofaW, 0.22, sofaD), leatherCognacMat)
  sofaSeat.position.set(0, 0.35, 0)

  // Low angled backrest
  const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(sofaW, 0.48, 0.16), leatherCognacMat)
  sofaBack.position.set(0, 0.65, sofaD / 2 - 0.08)

  // Symmetrical armrests
  const sofaArmL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.32, sofaD), leatherCognacMat)
  sofaArmL.position.set(-sofaW / 2 + 0.08, 0.48, 0)
  const sofaArmR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.32, sofaD), leatherCognacMat)
  sofaArmR.position.set(sofaW / 2 - 0.08, 0.48, 0)

  // 4 Tapered brass legs
  const sLegGeo = new THREE.CylinderGeometry(0.018, 0.024, 0.24, 8)
  const sLeg1 = new THREE.Mesh(sLegGeo, goldMat); sLeg1.position.set(-sofaW / 2 + 0.15, 0.12, -sofaD / 2 + 0.12)
  const sLeg2 = new THREE.Mesh(sLegGeo, goldMat); sLeg2.position.set(sofaW / 2 - 0.15, 0.12, -sofaD / 2 + 0.12)
  const sLeg3 = new THREE.Mesh(sLegGeo, goldMat); sLeg3.position.set(-sofaW / 2 + 0.15, 0.12, sofaD / 2 - 0.12)
  const sLeg4 = new THREE.Mesh(sLegGeo, goldMat); sLeg4.position.set(sofaW / 2 - 0.15, 0.12, sofaD / 2 - 0.12)

  sofaGroup.add(sofaSeat, sofaBack, sofaArmL, sofaArmR, sLeg1, sLeg2, sLeg3, sLeg4)
  corridorGroup.add(sofaGroup)

  // 8.2 Low Italian White Marble Coffee Table
  const tableX = sofaX
  const tableZ = sofaZ - 1.05
  const cTableTop = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.035, 32), marbleMat)
  cTableTop.position.set(tableX, floorY + 0.4, tableZ)

  const cTableRim = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.015, 32), goldMat)
  cTableRim.position.set(tableX, floorY + 0.39, tableZ)

  // Tripod brass legs
  for (let i = 0; i < 3; i++) {
    const ang = (i * Math.PI * 2) / 3
    const tLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.018, 0.38, 8), goldMat)
    tLeg.position.set(tableX + Math.cos(ang) * 0.36, floorY + 0.19, tableZ + Math.sin(ang) * 0.36)
    corridorGroup.add(tLeg)
  }
  corridorGroup.add(cTableTop, cTableRim)

  // Architecture Magazine on Coffee Table
  const magTex = corridorLoungeMagazineTexture()
  const magMat = new THREE.MeshStandardMaterial({ map: magTex, roughness: 0.35, metalness: 0.1 })
  const magMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.34), magMat)
  magMesh.rotation.x = -Math.PI / 2
  magMesh.rotation.z = 0.2
  magMesh.position.set(tableX - 0.12, floorY + 0.42, tableZ - 0.05)

  // Decorative Ceramic Center Bowl
  const bowlMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.08, 0.05, 16), darkMetalMat)
  bowlMesh.position.set(tableX + 0.18, floorY + 0.43, tableZ + 0.08)
  corridorGroup.add(magMesh, bowlMesh)

  // 8.3 Floating Walnut Console Credenza (South Wall)
  const credX = cx - 3.2
  const credZ = cz + innerD / 2 - 0.22
  const credW = 1.8
  const credH = 0.52
  const credD = 0.38

  const credMesh = new THREE.Mesh(new THREE.BoxGeometry(credW, credH, credD), wainscotMat)
  credMesh.position.set(credX, floorY + 0.55, credZ)

  const credGold = new THREE.Mesh(new THREE.BoxGeometry(credW + 0.02, 0.015, credD + 0.02), goldMat)
  credGold.position.set(credX, floorY + 0.55 + credH / 2, credZ)
  corridorGroup.add(credMesh, credGold)

  // Ceramic Blossom Vase on Credenza
  const vaseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.28, 16), marbleMat)
  vaseMesh.position.set(credX - 0.5, floorY + 0.55 + credH / 2 + 0.14, credZ)

  // Cherry Blossom branch
  const branchGeo = new THREE.CylinderGeometry(0.008, 0.012, 0.45, 6)
  const branch = new THREE.Mesh(branchGeo, new THREE.MeshStandardMaterial({ color: 0x3d2b1f }))
  branch.rotation.z = 0.25
  branch.position.set(credX - 0.48, floorY + 0.55 + credH / 2 + 0.35, credZ)
  const blossomPetal = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffb7c5 }))
  blossomPetal.position.set(credX - 0.42, floorY + 0.55 + credH / 2 + 0.52, credZ)
  corridorGroup.add(vaseMesh, branch, blossomPetal)

  // Warm Table Lamp on Credenza
  const tLampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.02, 16), goldMat)
  tLampBase.position.set(credX + 0.5, floorY + 0.55 + credH / 2 + 0.01, credZ)
  const tLampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8), goldMat)
  tLampStem.position.set(credX + 0.5, floorY + 0.55 + credH / 2 + 0.12, credZ)
  const tLampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.18, 16), new THREE.MeshStandardMaterial({ color: 0xfaf5ee, roughness: 0.8 }))
  tLampShade.position.set(credX + 0.5, floorY + 0.55 + credH / 2 + 0.26, credZ)
  const tLampLight = new THREE.PointLight(0xffeaaf, 1.2, 3.5, 1.2)
  tLampLight.position.set(credX + 0.5, floorY + 0.55 + credH / 2 + 0.26, credZ)
  corridorGroup.add(tLampBase, tLampStem, tLampShade, tLampLight)

  // 8.4 Large Decorative Arched Mirror (Above Credenza)
  const mirrorX = credX
  const mirrorY = floorY + 1.75
  const mirrorZ = cz + innerD / 2 - 0.02
  const mirrorW = 1.2
  const mirrorH = 1.25

  const mirrorFrame = new THREE.Mesh(new THREE.BoxGeometry(mirrorW, mirrorH, 0.03), goldMat)
  mirrorFrame.position.set(mirrorX, mirrorY, mirrorZ)
  const mirrorGlass = new THREE.Mesh(new THREE.PlaneGeometry(mirrorW - 0.08, mirrorH - 0.08), glassMat)
  mirrorGlass.position.set(mirrorX, mirrorY, mirrorZ + 0.018)
  corridorGroup.add(mirrorFrame, mirrorGlass)

  // 8.5 Contemporary Japanese Abstract Gallery Artwork (South Wall & East Wall)
  const artTex = corridorLoungeArtTexture()
  const artMat = new THREE.MeshStandardMaterial({ map: artTex, roughness: 0.25, metalness: 0.15 })

  // South Wall Art piece
  const artMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), artMat)
  artMesh1.position.set(cx + 3.6, floorY + 1.7, cz + innerD / 2 - 0.02)
  const artFrame1 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 0.03), darkMetalMat)
  artFrame1.position.set(cx + 3.6, floorY + 1.7, cz + innerD / 2 - 0.03)
  const artSconce1 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.08), goldMat)
  artSconce1.position.set(cx + 3.6, floorY + 2.45, cz + innerD / 2 - 0.06)
  corridorGroup.add(artMesh1, artFrame1, artSconce1)

  // East Wall Art piece
  const artMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.3), artMat)
  artMesh2.rotation.y = -Math.PI / 2
  artMesh2.position.set(cx + innerW / 2 - 0.02, floorY + 1.7, cz)
  const artFrame2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.4, 1.4), darkMetalMat)
  artFrame2.position.set(cx + innerW / 2 - 0.03, floorY + 1.7, cz)
  corridorGroup.add(artMesh2, artFrame2)

  // 8.6 Potted Sansevieria Snake Plants
  const createPlanter = (px: number, pz: number) => {
    const pGroup = new THREE.Group()
    pGroup.position.set(px, floorY, pz)

    // White Fluted Ceramic Pot
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.45, 16), marbleMat)
    pot.position.set(0, 0.35, 0)

    // Brass tripod stand
    for (let l = 0; l < 3; l++) {
      const a = (l * Math.PI * 2) / 3
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.28, 8), goldMat)
      leg.position.set(Math.cos(a) * 0.14, 0.14, Math.sin(a) * 0.14)
      pGroup.add(leg)
    }
    pGroup.add(pot)

    // Upward sword leaves
    for (let i = 0; i < 9; i++) {
      const a = (i * Math.PI * 2) / 9
      const h = 0.55 + (i % 3) * 0.15
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.08, h, 0.015), plantLeafMat)
      leaf.position.set(Math.cos(a) * 0.09, 0.45 + h / 2, Math.sin(a) * 0.09)
      leaf.rotation.y = a
      leaf.rotation.z = Math.cos(a) * 0.08
      pGroup.add(leaf)
    }
    corridorGroup.add(pGroup)
  }

  createPlanter(sofaX - 1.4, sofaZ)
  createPlanter(sofaX + 1.4, sofaZ)
  createPlanter(cx - 6.4, cz - innerD / 2 + 0.4)

  // Fire safety station on South wall
  const fireBox = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.55, 0.06), new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.4 }))
  fireBox.position.set(cx - 5.0, floorY + 1.25, cz + innerD / 2 - 0.02)
  corridorGroup.add(fireBox)

  // 8.4 Minimalist Architectural Cylindrical Tube Wall Sconces
  const sconceTubeMat = new THREE.MeshStandardMaterial({
    color: 0xfffae6,
    roughness: 0.35,
    emissive: 0xffea9f,
    emissiveIntensity: 0.7,
  })

  const buildModernSconce = (sx: number, sz: number, isSouthWall: boolean) => {
    const sGroup = new THREE.Group()
    const rotY = isSouthWall ? Math.PI : 0

    // Brushed gold backplate
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.34, 0.02), goldMat)
    plate.position.set(0, 0, 0.01)

    // Frosted acrylic diffuser cylinder
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.22, 16), sconceTubeMat)
    tube.position.set(0, 0, 0.035)

    // Gold machined top and bottom caps
    const capGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.035, 16)
    const capTop = new THREE.Mesh(capGeo, goldMat)
    capTop.position.set(0, 0.125, 0.035)
    const capBtm = new THREE.Mesh(capGeo, goldMat)
    capBtm.position.set(0, -0.125, 0.035)

    sGroup.add(plate, tube, capTop, capBtm)
    sGroup.rotation.y = rotY
    sGroup.position.set(sx, floorY + 1.75, sz)
    corridorGroup.add(sGroup)
  }

  // North Wall Sconces (Architectural placement avoiding doors and chute)
  buildModernSconce(cx - 5.6, cz - innerD / 2 + 0.01, false) // West wing pier
  buildModernSconce(cx + 4.6, cz - innerD / 2 + 0.01, false) // East wing pier

  // South Wall Sconces (Lounge Area flanking mirror and art)
  buildModernSconce(cx - 2.2, cz + innerD / 2 - 0.01, true)
  buildModernSconce(cx + 2.2, cz + innerD / 2 - 0.01, true)

  // =========================================================================
  // 9. LIGHTING & LIGHT MANAGER REGISTRATION
  // =========================================================================
  // Central Warm Hallway Ambient Light
  const loungeLight = new THREE.PointLight(0xfffae0, 2.2, 14, 1.2)
  loungeLight.position.set(cx, floorY + wallH - 0.25, cz)
  corridorGroup.add(loungeLight)

  // West corridor warm downlight (near Suite 402 entrance)
  const westLight = new THREE.PointLight(0xffe8cf, 1.8, 9, 1.2)
  westLight.position.set(cx - 4.5, floorY + wallH - 0.25, cz)
  corridorGroup.add(westLight)

  // East corridor warm downlight (near stairs)
  const eastLight = new THREE.PointLight(0xffe8cf, 1.8, 9, 1.2)
  eastLight.position.set(cx + 4.5, floorY + wallH - 0.25, cz)
  corridorGroup.add(eastLight)

  // Lounge Seating Ambient Pool
  const sofaLight = new THREE.PointLight(0xffecd1, 1.6, 6.0, 1.2)
  sofaLight.position.set(sofaX, floorY + wallH - 0.35, sofaZ - 0.5)
  corridorGroup.add(sofaLight)

  if (lightManager) {
    lightManager.register({
      x: cx,
      y: floorY + wallH - 0.25,
      z: cz,
      color: 0xfffae0,
      intensity: 2.2,
      distance: 14,
      decay: 1.2,
      zone: 'Lounge',
    })

    lightManager.register({
      x: cx - 4.5,
      y: floorY + wallH - 0.25,
      z: cz,
      color: 0xffe8cf,
      intensity: 1.8,
      distance: 9,
      decay: 1.2,
      zone: 'Lounge',
    })

    lightManager.register({
      x: cx + 4.5,
      y: floorY + wallH - 0.25,
      z: cz,
      color: 0xffe8cf,
      intensity: 1.8,
      distance: 9,
      decay: 1.2,
      zone: 'Lounge',
    })

    lightManager.register({
      x: sofaX,
      y: floorY + wallH - 0.35,
      z: sofaZ - 0.5,
      color: 0xffecd1,
      intensity: 1.6,
      distance: 6.0,
      decay: 1.2,
      zone: 'Lounge',
    })
  }

  // =========================================================================
  // 10. COLLISION WORLD BOUNDARIES
  // =========================================================================
  // South Wall
  colliders.add({
    minX: cx - innerW / 2 - 0.5,
    minY: 0,
    minZ: cz + innerD / 2 - 0.05,
    maxX: cx + innerW / 2 + 0.5,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 0.8,
  })

  // North Wall West of Lift 1 (towards Suite 401)
  colliders.add({
    minX: cx - innerW / 2 - 0.5,
    minY: 0,
    minZ: cz - innerD / 2 - 0.8,
    maxX: lift1X - elevW / 2 - 0.05,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // Center Pier Collider (between Lift 1 and Lift 2)
  colliders.add({
    minX: lift1X + elevW / 2 + 0.05,
    minY: 0,
    minZ: cz - innerD / 2 - 0.8,
    maxX: lift2X - elevW / 2 - 0.05,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.08,
  })

  // Lift 2 Standby Elevator Portal Collider (blocking player from walking into shaft)
  colliders.add({
    minX: lift2X - elevW / 2 - 0.05,
    minY: 0,
    minZ: cz - innerD / 2 - 0.8,
    maxX: lift2X + elevW / 2 + 0.05,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // North Wall East of Lift 2 (Suite 403, stairs, refuse chute)
  colliders.add({
    minX: lift2X + elevW / 2 + 0.05,
    minY: 0,
    minZ: cz - innerD / 2 - 0.8,
    maxX: cx + innerW / 2 + 0.5,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // Lift 1 Cab Perimeter Colliders (allowing player inside cab)
  colliders.add({
    minX: lift1X - cabW / 2 - 0.2,
    minY: 0,
    minZ: cabZ - cabD / 2 - 0.3,
    maxX: lift1X + cabW / 2 + 0.2,
    maxY: 4.0,
    maxZ: cabZ - cabD / 2 + 0.05,
  })
  colliders.add({
    minX: lift1X - cabW / 2 - 0.2,
    minY: 0,
    minZ: cabZ - cabD / 2,
    maxX: lift1X - cabW / 2 + 0.05,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })
  colliders.add({
    minX: lift1X + cabW / 2 - 0.05,
    minY: 0,
    minZ: cabZ - cabD / 2,
    maxX: lift1X + cabW / 2 + 0.2,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // East Wall
  colliders.add({
    minX: cx + innerW / 2 - 0.05,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx + innerW / 2 + 0.8,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 0.5,
  })

  // West Wall Top & Bottom (leaving Suite 402 entrance open in center)
  colliders.add({
    minX: cx - innerW / 2 - 0.8,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx - innerW / 2 + 0.05,
    maxY: 4.0,
    maxZ: cz - doorW402 / 2,
  })
  colliders.add({
    minX: cx - innerW / 2 - 0.8,
    minY: 0,
    minZ: cz + doorW402 / 2,
    maxX: cx - innerW / 2 + 0.05,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 0.5,
  })

  // Furniture Colliders (South Wall Lounge)
  // Lounge Sofa
  colliders.add({
    minX: sofaX - sofaW / 2 - 0.05,
    minY: 0,
    minZ: sofaZ - sofaD / 2 - 0.05,
    maxX: sofaX + sofaW / 2 + 0.05,
    maxY: 1.0,
    maxZ: sofaZ + sofaD / 2 + 0.05,
  })

  // Coffee Table
  colliders.add({
    minX: tableX - 0.6,
    minY: 0,
    minZ: tableZ - 0.6,
    maxX: tableX + 0.6,
    maxY: 0.6,
    maxZ: tableZ + 0.6,
  })

  // Console Credenza
  colliders.add({
    minX: credX - credW / 2 - 0.05,
    minY: 0,
    minZ: credZ - credD / 2 - 0.05,
    maxX: credX + credW / 2 + 0.05,
    maxY: 1.0,
    maxZ: credZ + credD / 2 + 0.05,
  })

  // =========================================================================
  // 11. PROXIMITY INTERACTIONS & TELEPORTATION
  // =========================================================================
  let elevOpen = true
  let elevProgress = 1.0

  // 1. Lift 1 (Active Elevator) -> Take to 1F Lobby
  interactions.add({
    id: 'corridor-elevator',
    x: lift1X,
    z: cz - innerD / 2 + 0.5,
    radius: 1.8,
    prompt: () => (elevOpen ? 'Take Elevator to 1F Lobby [1階 ロビーへ]' : 'Call Elevator [4階 エレベーター]'),
    onInteract: () => {
      if (!elevOpen) {
        elevOpen = true
        audio?.playElevatorChime()
        messages.show('*Ding* Lift 1 doors glide open.')
      } else {
        elevOpen = false
        audio?.playElevatorChime()
        messages.show('*Ding* Elevator doors glide shut. Descending to 1F Entrance Lobby...')
        screenFade(() => {
          player.teleport(0, 22.8, 0)
          onRideElevatorTo1F?.()
          messages.show('1F Entrance Lobby. Step out into midnight Tokyo.', 5.0)
        })
      }
    },
  })

  // 2. Elevator Call Station (Center Pier)
  interactions.add({
    id: 'corridor-elevator-call',
    x: cx,
    z: cz - innerD / 2 + 0.45,
    radius: 1.6,
    prompt: () => 'Call Elevator [エレベーターを呼ぶ]',
    onInteract: () => {
      audio?.playElevatorChime()
      callBtnUp.material = btnUpActiveMat
      messages.show('*Chime* Elevator called. Lift 1 arriving at 4F.')
      setTimeout(() => {
        elevOpen = true
        callBtnUp.material = btnUpNormalMat
      }, 600)
    },
  })

  // 3. Relax on Lounge Sofa
  interactions.add({
    id: 'corridor-sofa',
    x: sofaX,
    z: sofaZ - 0.4,
    radius: 1.8,
    prompt: () => 'Relax on Lounge Sofa [ソファーでくつろぐ]',
    onInteract: () => {
      messages.show('🛋️ You sit on the cognac leather lounge sofa. Quiet lo-fi jazz echoes softly down the hallway.')
    },
  })

  // 4. Browse Architecture Magazine on Coffee Table
  interactions.add({
    id: 'corridor-magazine',
    x: tableX,
    z: tableZ,
    radius: 1.5,
    prompt: () => 'Browse Tokyo Design Magazine [雑誌を読む]',
    onInteract: () => {
      messages.show('📖 Tokyo Architecture Issue 42: "Sun Heights Penthouse Suites & Modern Urban Living."')
    },
  })

  // 5. Emergency Fire Stairwell Door -> Descend to 1F Lobby
  interactions.add({
    id: 'corridor-stairs',
    x: stairsX,
    z: stairsZ + 0.5,
    radius: 1.6,
    prompt: () => 'Take Emergency Stairs to 1F [非常階段で1階へ]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('Heavy fire door clicks open. Descending fire stairs to 1F...')
      screenFade(() => {
        player.teleport(0, 18.2, Math.PI)
        onRideElevatorTo1F?.()
        messages.show('Arrived at 1F Entrance Lobby.', 4.0)
      })
    },
  })

  // 6. Suite 402 Entrance Door -> Step into Hall & Living Room
  interactions.add({
    id: 'corridor-suite-402',
    x: cx - innerW / 2 + 0.6,
    z: cz,
    radius: 1.7,
    prompt: () => 'Enter Suite 402 (Hall & Living Room) [402号室へ]',
    onInteract: () => {
      audio?.playElevatorChime()
      messages.show('Smart lock beeps: Access Granted. Welcome home to Suite 402.')
      screenFade(() => {
        player.teleport(4.8, 86.0, -Math.PI / 2)
        messages.show('Suite 402 — Living Room & Hall.', 4.0)
      })
    },
  })

  // 7. Suite 401 Doorbell
  interactions.add({
    id: 'corridor-suite-401',
    x: cx - 3.8,
    z: cz - innerD / 2 + 0.6,
    radius: 1.5,
    prompt: () => 'Ring Doorbell (Suite 401) [インターホン]',
    onInteract: () => {
      audio?.playCrosswalkChime()
      messages.show('Suite 401: *Chime* No answer. Soft relaxing lo-fi jazz can be heard inside.')
    },
  })

  // 8. Suite 403 Doorbell
  interactions.add({
    id: 'corridor-suite-403',
    x: cx + 3.4,
    z: cz - innerD / 2 + 0.6,
    radius: 1.5,
    prompt: () => 'Ring Doorbell (Suite 403) [インターホン]',
    onInteract: () => {
      audio?.playCrosswalkChime()
      messages.show('Suite 403: *Chime* A quiet evening hum. The occupant seems to be asleep.')
    },
  })

  // 9. Refuse / Recycling Chute
  interactions.add({
    id: 'corridor-refuse-chute',
    x: chuteX,
    z: chuteZ + 0.6,
    radius: 1.5,
    prompt: () => 'Open Refuse Chute [ダストシュート]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('The stainless steel chute flap opens with a smooth pneumatic hiss.')
    },
  })

  // =========================================================================
  // 12. RUNTIME UPDATE & SMOOTH ELEVATOR SLIDING ANIMATION
  // =========================================================================
  return {
    group: corridorGroup,
    openElevator(autoAnimate = true) {
      if (autoAnimate) {
        elevOpen = false
        elevProgress = 0.0
        setTimeout(() => {
          elevOpen = true
          audio?.playElevatorChime()
        }, 150)
      } else {
        elevOpen = true
        elevProgress = 1.0
      }
    },
    update(dt: number, p: { x: number; z: number }) {
      // Corridor is only visible when player is on the 4F corridor / elevator lounge (55 <= Z < 74)
      if (p.z < 55 || p.z >= 74) {
        corridorGroup.visible = false
        return
      }

      // Distance culling check (in Low quality mode)
      const distSq = (p.x - cx) ** 2 + (p.z - cz) ** 2
      const isNear = distSq < 1600 // 40m
      corridorGroup.visible = Settings.isHigh() || isNear

      if (!corridorGroup.visible) return

      // Smooth elevator door sliding animation
      const elevTarget = elevOpen ? 1.0 : 0.0
      elevProgress += (elevTarget - elevProgress) * Math.min(1, dt * 4.5)

      // Animate Lift 1 sliding doors
      lift1DoorL.position.x = lift1X - doorPanelW / 2 + 0.01 - elevProgress * 0.58
      lift1DoorR.position.x = lift1X + doorPanelW / 2 - 0.01 + elevProgress * 0.58
    },
  }
}

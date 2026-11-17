import * as THREE from 'three'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import { Settings } from '../game/Settings'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'
import {
  suiteHardwoodFloorTexture,
  corridorCarpetRunnerTexture,
  corridorElevatorDisplayTexture,
  corridorFireStairsSignTexture,
  corridorWayfindingTexture,
  corridorSuitePlaqueTexture,
  corridorRefuseChuteTexture,
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
): Corridor4FResult {
  const corridorGroup = new THREE.Group()
  corridorGroup.name = 'corridor-4f-elevator-lounge'
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

  const elevatorSteelMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    roughness: 0.25,
    metalness: 0.82,
  })

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0x121722,
    roughness: 0.7,
  })

  const warmSconceGlowMat = new THREE.MeshBasicMaterial({
    color: 0xffea9f,
    toneMapped: false,
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

  // 3.3 Ceiling with Recessed Tray
  const ceilMesh = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.1, innerD), ceilingMat)
  ceilMesh.position.set(cx, floorY + wallH + 0.05, cz)
  corridorGroup.add(ceilMesh)

  // 3.4 Wall Wainscoting & Picture Rails
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
    return wallGrp
  }

  // SOUTH WALL (Full solid length with emergency fire station)
  buildWallWithWainscot(innerW + wallThick * 2, wallThick, cx, cz + innerD / 2 + wallThick / 2, true)

  // EAST WALL (Solid with sconce)
  buildWallWithWainscot(wallThick, innerD, cx + innerW / 2 + wallThick / 2, cz, false)

  // WEST WALL (Split with grand entrance to Suite 402)
  const doorW402 = 1.6
  const doorH402 = 2.4
  const wWallLen = (innerD - doorW402) / 2

  buildWallWithWainscot(wallThick, wWallLen, cx - innerW / 2 - wallThick / 2, cz - innerD / 2 + wWallLen / 2, false)
  buildWallWithWainscot(wallThick, wWallLen, cx - innerW / 2 - wallThick / 2, cz + innerD / 2 - wWallLen / 2, false)

  // Header over Suite 402 entrance
  const wHeader = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH - doorH402, doorW402), upperWallMat)
  wHeader.position.set(cx - innerW / 2 - wallThick / 2, floorY + doorH402 + (wallH - doorH402) / 2, cz)
  corridorGroup.add(wHeader)

  // Suite 402 Door Architrave & Plaque
  const archTop = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, doorW402 + 0.16), goldMat)
  archTop.position.set(cx - innerW / 2 + 0.02, floorY + doorH402 + 0.04, cz)
  const archL = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH402, 0.08), goldMat)
  archL.position.set(cx - innerW / 2 + 0.02, floorY + doorH402 / 2, cz - doorW402 / 2 - 0.04)
  const archR = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH402, 0.08), goldMat)
  archR.position.set(cx - innerW / 2 + 0.02, floorY + doorH402 / 2, cz + doorW402 / 2 + 0.04)
  corridorGroup.add(archTop, archL, archR)

  // Suite 402 Plaque
  const plaque402Tex = corridorSuitePlaqueTexture('402')
  const plaque402 = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.12), new THREE.MeshStandardMaterial({ map: plaque402Tex, metalness: 0.85, roughness: 0.2 }))
  plaque402.rotation.y = Math.PI / 2
  plaque402.position.set(cx - innerW / 2 + 0.02, floorY + 1.6, cz + doorW402 / 2 + 0.2)
  corridorGroup.add(plaque402)

  // Smart Keypad with glowing LED
  const keypad = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.16, 0.08), darkMetalMat)
  keypad.position.set(cx - innerW / 2 + 0.02, floorY + 1.35, cz + doorW402 / 2 + 0.2)
  const keypadLed = new THREE.Mesh(new THREE.CircleGeometry(0.012, 8), new THREE.MeshBasicMaterial({ color: 0x22c55e, toneMapped: false }))
  keypadLed.rotation.y = Math.PI / 2
  keypadLed.position.set(cx - innerW / 2 + 0.031, floorY + 1.4, cz + doorW402 / 2 + 0.2)
  corridorGroup.add(keypad, keypadLed)

  // Coir Welcome Runner Mat for Suite 402
  const mat402 = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.4), new THREE.MeshStandardMaterial({
    color: 0x121722,
    roughness: 0.8,
  }))
  mat402.rotation.x = -Math.PI / 2
  mat402.position.set(cx - innerW / 2 + 0.55, floorY + 0.054, cz)
  corridorGroup.add(mat402)

  // Warm light spill from Suite 402 door
  const suiteSpillLight = new THREE.PointLight(0xffb84d, 1.8, 4.5, 1.2)
  suiteSpillLight.position.set(cx - innerW / 2 + 0.5, floorY + 1.8, cz)
  corridorGroup.add(suiteSpillLight)

  // NORTH WALL (With Elevators, Suite 401 & 403 Doors, Refuse Chute, and Stairs)
  // Solid wall backing
  const nWallGeo = new THREE.BoxGeometry(innerW + wallThick * 2, wallH, wallThick)
  const nWall = new THREE.Mesh(nWallGeo, upperWallMat)
  nWall.position.set(cx, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  corridorGroup.add(nWall)

  // Lower wainscoting along North Wall
  const nWainscot = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.95, 0.04), wainscotMat)
  nWainscot.position.set(cx, floorY + 0.475, cz - innerD / 2 + 0.02)
  const nPictureRail = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.03, 0.04), goldMat)
  nPictureRail.position.set(cx, floorY + 1.05, cz - innerD / 2 + 0.02)
  corridorGroup.add(nWainscot, nPictureRail)

  // =========================================================================
  // 4. DUAL ELEVATOR / LIFT BANK (CENTER OF NORTH WALL)
  // =========================================================================
  const elevBankW = 4.4
  const elevH = 2.4
  const elevBankZ = cz - innerD / 2 + 0.02

  // Grand Brass Architrave Casing
  const architrave = new THREE.Mesh(new THREE.BoxGeometry(elevBankW, elevH + 0.35, 0.08), goldMat)
  architrave.position.set(cx, floorY + (elevH + 0.35) / 2, elevBankZ + 0.04)

  const architraveInner = new THREE.Mesh(new THREE.BoxGeometry(elevBankW - 0.16, elevH + 0.18, 0.06), darkMetalMat)
  architraveInner.position.set(cx, floorY + (elevH + 0.18) / 2, elevBankZ + 0.06)
  corridorGroup.add(architrave, architraveInner)

  // Center Call Station Column (between the two elevators)
  const callStation = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.65, 0.04), darkMetalMat)
  callStation.position.set(cx, floorY + 1.3, elevBankZ + 0.08)

  const callBtnGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.02, 12)
  callBtnGeo.rotateX(Math.PI / 2)
  const callBtnUp = new THREE.Mesh(callBtnGeo, warmSconceGlowMat)
  callBtnUp.position.set(cx, floorY + 1.45, elevBankZ + 0.1)
  const callBtnDown = new THREE.Mesh(callBtnGeo, goldMat)
  callBtnDown.position.set(cx, floorY + 1.25, elevBankZ + 0.1)
  corridorGroup.add(callStation, callBtnUp, callBtnDown)

  // 4.1 Left Elevator (Lift 1: The Active Animated Elevator to 1F Lobby)
  const lift1X = cx - 1.15
  const doorPanelW = 0.92
  const doorGeo = new THREE.BoxGeometry(doorPanelW, elevH, 0.04)

  const lift1DoorL = new THREE.Mesh(doorGeo, elevatorSteelMat)
  const lift1DoorR = new THREE.Mesh(doorGeo, elevatorSteelMat)
  lift1DoorL.position.set(lift1X - doorPanelW / 2 + 0.01, floorY + elevH / 2, elevBankZ + 0.05)
  lift1DoorR.position.set(lift1X + doorPanelW / 2 - 0.01, floorY + elevH / 2, elevBankZ + 0.05)
  corridorGroup.add(lift1DoorL, lift1DoorR)

  // Digital Floor Display: "▲ 4"
  const dispTex1 = corridorElevatorDisplayTexture('left')
  const dispMat1 = new THREE.MeshBasicMaterial({ map: dispTex1, toneMapped: false })
  const dispMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.2), dispMat1)
  dispMesh1.position.set(lift1X, floorY + elevH + 0.18, elevBankZ + 0.09)
  corridorGroup.add(dispMesh1)

  // 4.2 Right Elevator (Lift 2: Idle Elevator)
  const lift2X = cx + 1.15
  const lift2DoorL = new THREE.Mesh(doorGeo, elevatorSteelMat)
  const lift2DoorR = new THREE.Mesh(doorGeo, elevatorSteelMat)
  lift2DoorL.position.set(lift2X - doorPanelW / 2 + 0.01, floorY + elevH / 2, elevBankZ + 0.05)
  lift2DoorR.position.set(lift2X + doorPanelW / 2 - 0.01, floorY + elevH / 2, elevBankZ + 0.05)
  corridorGroup.add(lift2DoorL, lift2DoorR)

  // Digital Floor Display: "4 - IDLE"
  const dispTex2 = corridorElevatorDisplayTexture('right')
  const dispMat2 = new THREE.MeshBasicMaterial({ map: dispTex2, toneMapped: false })
  const dispMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.2), dispMat2)
  dispMesh2.position.set(lift2X, floorY + elevH + 0.18, elevBankZ + 0.09)
  corridorGroup.add(dispMesh2)

  // Polished Brass Floor Sill Threshold
  const elevSill = new THREE.Mesh(new THREE.BoxGeometry(elevBankW - 0.1, 0.02, 0.16), goldMat)
  elevSill.position.set(cx, floorY + 0.053, elevBankZ + 0.08)
  corridorGroup.add(elevSill)

  // Elevator Cab Behind Left Lift
  const cabW = 2.1
  const cabD = 2.0
  const cabH = 2.5
  const cabZ = elevBankZ - cabD / 2 - 0.02
  const cabFloor = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.04, cabD), woodBorderMat)
  cabFloor.position.set(lift1X, floorY + 0.02, cabZ)
  const cabCeil = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.06, cabD), darkMetalMat)
  cabCeil.position.set(lift1X, floorY + cabH, cabZ)
  const cabBack = new THREE.Mesh(new THREE.BoxGeometry(cabW, cabH, 0.04), new THREE.MeshStandardMaterial({ color: 0xc8d4e0, roughness: 0.1, metalness: 0.9 }))
  cabBack.position.set(lift1X, floorY + cabH / 2, cabZ - cabD / 2)
  const cabLight = new THREE.PointLight(0xfffae6, 2.0, 5.0)
  cabLight.position.set(lift1X, floorY + cabH - 0.1, cabZ)
  corridorGroup.add(cabFloor, cabCeil, cabBack, cabLight)

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

    // Illuminated Doorbell Button
    const bell = new THREE.Mesh(new THREE.CircleGeometry(0.025, 12), warmSconceGlowMat)
    bell.position.set(-0.58, 1.35, 0.06)
    doorGrp.add(bell)

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
  const chuteMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.9), chuteMat)
  chuteMesh.position.set(chuteX, floorY + 1.25, chuteZ + 0.03)
  corridorGroup.add(chuteMesh)

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

  // =========================================================================
  // 8. WAYFINDING DIRECTIONAL SIGNAGE & SCONCES
  // =========================================================================
  // Directional Plaque: "◄ 401-404 | LIFTS | STAIRS ►"
  const wayTex = corridorWayfindingTexture()
  const wayMat = new THREE.MeshStandardMaterial({ map: wayTex, roughness: 0.35, metalness: 0.6 })
  const wayMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.28), wayMat)
  wayMesh.position.set(cx + 6.3, floorY + 1.6, cz - innerD / 2 + 0.04)
  corridorGroup.add(wayMesh)

  // Recessed Fire Safety Station on South Wall (Hose reel & extinguisher)
  const fireBox = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.55, 0.06), new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.4 }))
  fireBox.position.set(cx - 2.8, floorY + 1.25, cz + innerD / 2 - 0.02)
  corridorGroup.add(fireBox)

  // Brass Hourglass Wall Sconces
  const sconceXPositions = [cx - 5.5, cx - 1.8, cx + 1.8, cx + 4.4, cx]
  for (const sx of sconceXPositions) {
    const sconceBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.04), goldMat)
    sconceBase.position.set(sx, floorY + 1.75, cz - innerD / 2 + 0.03)

    // Upward cone
    const coneUp = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.1, 8), warmSconceGlowMat)
    coneUp.position.set(sx, floorY + 1.86, cz - innerD / 2 + 0.04)

    // Downward cone
    const coneDown = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.1, 8), warmSconceGlowMat)
    coneDown.rotation.x = Math.PI
    coneDown.position.set(sx, floorY + 1.64, cz - innerD / 2 + 0.04)
    corridorGroup.add(sconceBase, coneUp, coneDown)
  }

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
    maxX: lift1X - 0.95,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // North Wall East of Lift 1 (between lifts, idle lift 2, Suite 403, chute, stairs)
  colliders.add({
    minX: lift1X + 0.95,
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

  // =========================================================================
  // 11. PROXIMITY INTERACTIONS & TELEPORTATION
  // =========================================================================

  // 1. Dual Elevator Bank -> Take Elevator to 1F Lobby
  let elevOpen = true
  let elevProgress = 1.0

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
        setTimeout(() => {
          player.teleport(0, 18.2, Math.PI)
          messages.show('1F Entrance Lobby. Step out into midnight Tokyo.', 5.0)
        }, 500)
      }
    },
  })

  // 2. Emergency Fire Stairwell Door -> Descend to 1F Lobby
  interactions.add({
    id: 'corridor-stairs',
    x: stairsX,
    z: stairsZ + 0.5,
    radius: 1.6,
    prompt: () => 'Take Emergency Stairs to 1F [非常階段で1階へ]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('Heavy fire door clicks open. Descending fire stairs to 1F...')
      setTimeout(() => {
        player.teleport(0, 18.2, Math.PI)
        messages.show('Arrived at 1F Entrance Lobby.', 4.0)
      }, 400)
    },
  })

  // 3. Suite 402 Entrance Door -> Step into Bedroom
  interactions.add({
    id: 'corridor-suite-402',
    x: cx - innerW / 2 + 0.6,
    z: cz,
    radius: 1.7,
    prompt: () => 'Enter Suite 402 (Your Bedroom) [402号室へ]',
    onInteract: () => {
      audio?.playElevatorChime()
      messages.show('Smart lock beeps: Access Granted. Welcome home to Suite 402.')
      setTimeout(() => {
        player.teleport(1.2, 85.2, -Math.PI / 2)
      }, 350)
    },
  })

  // 4. Suite 401 Doorbell
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

  // 5. Suite 403 Doorbell
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

  // 6. Refuse / Recycling Chute
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
      // Distance culling check (in Low quality mode)
      const distSq = (p.x - cx) ** 2 + (p.z - cz) ** 2
      const isNear = distSq < 1600 // 40m
      corridorGroup.visible = Settings.isHigh() || isNear

      if (!corridorGroup.visible) return

      // Smooth elevator door sliding animation
      const elevTarget = elevOpen ? 1.0 : 0.0
      elevProgress += (elevTarget - elevProgress) * Math.min(1, dt * 4.5)

      // Animate Lift 1 sliding doors
      lift1DoorL.position.x = lift1X - doorPanelW / 2 + 0.01 - elevProgress * 0.75
      lift1DoorR.position.x = lift1X + doorPanelW / 2 - 0.01 + elevProgress * 0.75
    },
  }
}

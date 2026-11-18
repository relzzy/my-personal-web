import * as THREE from 'three'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'
import { screenFade } from '../ui/ScreenFader'
import {
  bathroomTravertineTileTexture,
  bathroomWasherDisplayTexture,
  bathroomMirrorBacklitTexture,
  bathroomWaterSurfaceTexture,
} from './Materials'

export interface Suite402BathroomResult {
  group: THREE.Group
  update: (dt: number, p: { x: number; z: number }) => void
}

export function buildSuite402Bathroom(
  scene: THREE.Scene,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
  lightManager?: LightManager,
): Suite402BathroomResult {
  const bathGroup = new THREE.Group()
  bathGroup.name = 'suite-402-en-suite-bathroom'
  bathGroup.visible = player.z >= 118
  scene.add(bathGroup)

  // =========================================================================
  // 1. COORDINATE ORIGIN & ROOM DIMENSIONS
  // =========================================================================
  const cx = 0
  const cz = 126
  const floorY = 0.15
  const innerW = 9.2 // East-West width (X: -4.6 to +4.6)
  const innerD = 5.2 // North-South depth (Z: cz - 2.6 to cz + 2.6 -> 123.4 to 128.6)
  const wallH = 2.8  // Sleek contemporary bathroom height
  const wallThick = 0.3

  // =========================================================================
  // 2. LUXURY BATHROOM MATERIALS
  // =========================================================================
  const floorTileTex = bathroomTravertineTileTexture()
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTileTex,
    roughness: 0.28,
    metalness: 0.1,
  })

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x181e2b,
    roughness: 0.72,
    metalness: 0.08,
  })

  const wallTileMat = new THREE.MeshStandardMaterial({
    color: 0x141822,
    roughness: 0.35,
    metalness: 0.12,
  })

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    roughness: 0.6,
  })

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.26,
    metalness: 0.9,
  })

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xdde4ec,
    roughness: 0.12,
    metalness: 0.96,
  })

  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x1f2635,
    roughness: 0.35,
    metalness: 0.85,
  })

  const porcelainWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.18,
    metalness: 0.04,
  })

  const acrylicWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.15,
    metalness: 0.05,
  })

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x7dd3fc,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  const waterTex = bathroomWaterSurfaceTexture()
  const waterMat = new THREE.MeshStandardMaterial({
    map: waterTex,
    color: 0x38bdf8,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.85,
  })

  const darkWoodMat = new THREE.MeshStandardMaterial({
    color: 0x241a13,
    roughness: 0.45,
    metalness: 0.05,
  })

  // =========================================================================
  // 3. ARCHITECTURAL SHELL (FLOOR, CEILING, WALLS)
  // =========================================================================

  // 3.1 Honed Travertine Tile Floor
  const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.05, innerD), floorMat)
  floorMesh.position.set(cx, floorY + 0.025, cz)
  floorMesh.receiveShadow = true
  bathGroup.add(floorMesh)

  // 3.2 Ceiling
  const ceilMesh = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.08, innerD), ceilingMat)
  ceilMesh.position.set(cx, floorY + wallH + 0.04, cz)
  bathGroup.add(ceilMesh)

  // 3.3 Perimeter Walls
  // South Wall (Solid with accent wall tiles)
  const sWall = new THREE.Mesh(new THREE.BoxGeometry(innerW + wallThick * 2, wallH, wallThick), wallTileMat)
  sWall.position.set(cx, floorY + wallH / 2, cz + innerD / 2 + wallThick / 2)
  sWall.castShadow = true
  sWall.receiveShadow = true
  bathGroup.add(sWall)

  // West Wall (Behind bathtub - Solid slate tiles)
  const wWall = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH, innerD), wallTileMat)
  wWall.position.set(cx - innerW / 2 - wallThick / 2, floorY + wallH / 2, cz)
  wWall.castShadow = true
  wWall.receiveShadow = true
  bathGroup.add(wWall)

  // East Wall (Towel rail & toilet side)
  const eWall = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH, innerD), wallMat)
  eWall.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz)
  eWall.castShadow = true
  eWall.receiveShadow = true
  bathGroup.add(eWall)

  // 3.4 NORTH WALL & DOORWAY (CONNECTING TO MASTER BEDROOM)
  const doorW = 1.6
  const doorH = 2.3
  const nWallSegW = (innerW - doorW) / 2

  // West segment of North wall
  const nWallW = new THREE.Mesh(new THREE.BoxGeometry(nWallSegW, wallH, wallThick), wallMat)
  nWallW.position.set(cx - innerW / 2 + nWallSegW / 2, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  bathGroup.add(nWallW)

  // East segment of North wall
  const nWallE = new THREE.Mesh(new THREE.BoxGeometry(nWallSegW, wallH, wallThick), wallMat)
  nWallE.position.set(cx + innerW / 2 - nWallSegW / 2, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  bathGroup.add(nWallE)

  // Header above North door
  const nHeader = new THREE.Mesh(new THREE.BoxGeometry(doorW, wallH - doorH, wallThick), wallMat)
  nHeader.position.set(cx, floorY + doorH + (wallH - doorH) / 2, cz - innerD / 2 - wallThick / 2)
  bathGroup.add(nHeader)

  // Door Frame & Brass Threshold Saddle
  const nFrameL = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 0.06), goldMat)
  nFrameL.position.set(cx - doorW / 2, floorY + doorH / 2, cz - innerD / 2 + 0.02)
  const nFrameR = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 0.06), goldMat)
  nFrameR.position.set(cx + doorW / 2, floorY + doorH / 2, cz - innerD / 2 + 0.02)
  const nFrameTop = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.12, 0.06, 0.06), goldMat)
  nFrameTop.position.set(cx, floorY + doorH + 0.03, cz - innerD / 2 + 0.02)
  bathGroup.add(nFrameL, nFrameR, nFrameTop)

  const threshold = new THREE.Mesh(new THREE.BoxGeometry(doorW, 0.015, 0.22), goldMat)
  threshold.position.set(cx, floorY + 0.052, cz - innerD / 2)
  bathGroup.add(threshold)

  // Walnut Door Leaf
  const nDoorLeaf = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.04, doorH - 0.04, 0.05), darkWoodMat)
  nDoorLeaf.position.set(cx, floorY + doorH / 2, cz - innerD / 2 - 0.02)
  bathGroup.add(nDoorLeaf)

  // Lever hardware
  const nLever = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.025, 0.06), goldMat)
  nLever.position.set(cx + 0.55, floorY + 1.05, cz - innerD / 2 + 0.04)
  bathGroup.add(nLever)

  // =========================================================================
  // 4. VERTICAL LUXURY BATHTUB / WET ROOM (WEST WALL)
  // =========================================================================
  // Matching Image 3: Spans the vertical height on the left
  const tubX = cx - innerW / 2 + 1.15 // ~ -3.45
  const tubZ = cz                     // center Z
  const tubW = 1.35                   // width out from wall
  const tubD = 3.6                    // vertical length
  const tubH = 0.65

  // 4.1 Stone Surrounding Deck
  const tubDeck = new THREE.Mesh(new THREE.BoxGeometry(tubW, tubH, tubD), darkMetalMat)
  tubDeck.position.set(tubX, floorY + tubH / 2, tubZ)
  tubDeck.castShadow = true
  tubDeck.receiveShadow = true
  bathGroup.add(tubDeck)

  // 4.2 Acrylic Tub Rim
  const tubRim = new THREE.Mesh(new THREE.BoxGeometry(tubW - 0.12, 0.05, tubD - 0.16), acrylicWhiteMat)
  tubRim.position.set(tubX, floorY + tubH + 0.025, tubZ)
  bathGroup.add(tubRim)

  // 4.3 Inner Basin
  const tubBasin = new THREE.Mesh(new THREE.BoxGeometry(tubW - 0.28, 0.5, tubD - 0.32), porcelainWhiteMat)
  tubBasin.position.set(tubX, floorY + tubH / 2 + 0.05, tubZ)
  bathGroup.add(tubBasin)

  // 4.4 Shimmering Translucent Water Surface
  const waterMesh = new THREE.Mesh(new THREE.PlaneGeometry(tubW - 0.32, tubD - 0.36), waterMat)
  waterMesh.rotation.x = -Math.PI / 2
  waterMesh.position.set(tubX, floorY + tubH - 0.08, tubZ)
  bathGroup.add(waterMesh)

  // 4.5 Pop-up Chrome Drain (South end)
  const drain = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.01, 16), chromeMat)
  drain.position.set(tubX, floorY + tubH - 0.075, tubZ + 1.2)
  bathGroup.add(drain)

  // 4.6 Thermostatic Mixer & Waterfall Spout (North wall of tub)
  const mixerBase = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.06), chromeMat)
  mixerBase.position.set(tubX, floorY + tubH + 0.15, tubZ - tubD / 2 + 0.04)
  const spout = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.14), chromeMat)
  spout.position.set(tubX, floorY + tubH + 0.13, tubZ - tubD / 2 + 0.12)
  const knobHot = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.03, 12), goldMat)
  knobHot.rotation.x = Math.PI / 2
  knobHot.position.set(tubX - 0.08, floorY + tubH + 0.15, tubZ - tubD / 2 + 0.08)
  const knobCold = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.03, 12), chromeMat)
  knobCold.rotation.x = Math.PI / 2
  knobCold.position.set(tubX + 0.08, floorY + tubH + 0.15, tubZ - tubD / 2 + 0.08)
  bathGroup.add(mixerBase, spout, knobHot, knobCold)

  // 4.7 Overhead Rainfall Showerhead Fixture
  const showerPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5, 12), chromeMat)
  showerPipe.position.set(tubX, floorY + wallH - 0.25, tubZ - 0.6)
  const showerHead = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.025, 24), chromeMat)
  showerHead.position.set(tubX, floorY + wallH - 0.5, tubZ - 0.6)
  bathGroup.add(showerPipe, showerHead)

  // 4.8 Frameless Glass Shower Screen (East edge of wet room)
  const glassScreen = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.1, tubD - 0.4), glassMat)
  glassScreen.position.set(tubX + tubW / 2 + 0.02, floorY + 1.05, tubZ)
  bathGroup.add(glassScreen)

  // Chrome glass mounting brackets
  for (const bz of [-1.2, 1.2]) {
    const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.06), chromeMat)
    bracket.position.set(tubX + tubW / 2 + 0.02, floorY + 0.4, tubZ + bz)
    bathGroup.add(bracket)
  }

  // 4.9 Ribbed Bamboo Bath Mat (Outside Tub)
  const matX = tubX + tubW / 2 + 0.4
  const bathMat = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.015, 1.4), darkWoodMat)
  bathMat.position.set(matX, floorY + 0.055, tubZ)
  bathGroup.add(bathMat)

  // =========================================================================
  // 5. WASHING MACHINE (NORTH WALL, RIGHT OF DOOR)
  // =========================================================================
  const washX = cx + 1.6
  const washZ = cz - innerD / 2 + 0.65 // ~ 124.05
  const washW = 0.85
  const washD = 0.82
  const washH = 0.95

  // 5.1 Dark Metallic Chassis
  const washBody = new THREE.Mesh(new THREE.BoxGeometry(washW, washH - 0.04, washD), darkMetalMat)
  washBody.position.set(washX, floorY + (washH - 0.04) / 2, washZ)
  washBody.castShadow = true
  washBody.receiveShadow = true
  bathGroup.add(washBody)

  // 5.2 Control Panel Face with "42m" Cyan Display
  const washDisplayTex = bathroomWasherDisplayTexture()
  const washDisplayMat = new THREE.MeshStandardMaterial({
    map: washDisplayTex,
    roughness: 0.25,
    metalness: 0.3,
  })
  const washPanel = new THREE.Mesh(new THREE.BoxGeometry(washW - 0.04, 0.2, 0.02), washDisplayMat)
  washPanel.position.set(washX, floorY + washH - 0.12, washZ + washD / 2 + 0.01)
  bathGroup.add(washPanel)

  // 5.3 Circular Front Glass Door (Matching Image 3)
  const doorRing = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 16, 32), chromeMat)
  doorRing.position.set(washX, floorY + 0.42, washZ + washD / 2 + 0.015)
  const doorGlass = new THREE.Mesh(new THREE.CircleGeometry(0.23, 24), glassMat)
  doorGlass.position.set(washX, floorY + 0.42, washZ + washD / 2 + 0.02)
  bathGroup.add(doorRing, doorGlass)

  // =========================================================================
  // 6. ARCHITECTURAL PRIVACY DIVIDER SCREEN
  // =========================================================================
  // Matching Image 3: Separates Washer and Vanity Sink
  const divX = cx + 2.3
  const divZ = cz - innerD / 2 + 0.65
  const divW = 0.04
  const divD = 0.95
  const divH = 2.1

  const divFrame = new THREE.Mesh(new THREE.BoxGeometry(divW, divH, divD), darkMetalMat)
  divFrame.position.set(divX, floorY + divH / 2, divZ)
  const divGlass = new THREE.Mesh(new THREE.BoxGeometry(divW - 0.01, divH - 0.1, divD - 0.1), glassMat)
  divGlass.position.set(divX, floorY + divH / 2, divZ)
  bathGroup.add(divFrame, divGlass)

  // =========================================================================
  // 7. LUXURY VANITY COUNTER & SINK (NORTH-EAST CORNER)
  // =========================================================================
  const vanX = cx + 3.4
  const vanZ = cz - innerD / 2 + 0.65
  const vanW = 1.65
  const vanD = 0.85
  const vanH = 0.92

  // 7.1 Dark Stone Quartz Countertop
  const vanCounter = new THREE.Mesh(new THREE.BoxGeometry(vanW, vanH - 0.06, vanD), darkMetalMat)
  vanCounter.position.set(vanX, floorY + (vanH - 0.06) / 2, vanZ)
  vanCounter.castShadow = true
  vanCounter.receiveShadow = true

  const vanTop = new THREE.Mesh(new THREE.BoxGeometry(vanW + 0.04, 0.06, vanD + 0.04), wallTileMat)
  vanTop.position.set(vanX, floorY + vanH, vanZ)
  vanTop.castShadow = true
  vanTop.receiveShadow = true
  bathGroup.add(vanCounter, vanTop)

  // Brushed Gold Edge Reveal
  const vanGoldReveal = new THREE.Mesh(new THREE.BoxGeometry(vanW + 0.02, 0.02, vanD + 0.02), goldMat)
  vanGoldReveal.position.set(vanX, floorY + vanH - 0.04, vanZ)
  bathGroup.add(vanGoldReveal)

  // 7.2 Undermount Ceramic Basin & Chrome Gooseneck Faucet
  const basin = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.02, 0.48), porcelainWhiteMat)
  basin.position.set(vanX, floorY + vanH + 0.035, vanZ - 0.05)

  const vFaucetStem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.26, 12), chromeMat)
  vFaucetStem.position.set(vanX, floorY + vanH + 0.16, vanZ - 0.28)
  const vFaucetSpout = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.14), chromeMat)
  vFaucetSpout.position.set(vanX, floorY + vanH + 0.28, vanZ - 0.22)
  const vKnobL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 12), goldMat)
  vKnobL.position.set(vanX - 0.1, floorY + vanH + 0.06, vanZ - 0.28)
  const vKnobR = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 12), goldMat)
  vKnobR.position.set(vanX + 0.1, floorY + vanH + 0.06, vanZ - 0.28)
  bathGroup.add(basin, vFaucetStem, vFaucetSpout, vKnobL, vKnobR)

  // 7.3 Backlit LED Vanity Mirror (On North wall above counter)
  const mirTex = bathroomMirrorBacklitTexture()
  const mirMat = new THREE.MeshStandardMaterial({
    map: mirTex,
    roughness: 0.1,
    metalness: 0.2,
  })
  const mirror = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.75, 0.03), mirMat)
  mirror.position.set(vanX, floorY + vanH + 0.65, cz - innerD / 2 + 0.02)
  bathGroup.add(mirror)

  // 7.4 Toiletries & Rolled Hand Towels
  const soapDispenser = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.14, 12), glassMat)
  soapDispenser.position.set(vanX - 0.5, floorY + vanH + 0.1, vanZ - 0.08)
  const towelStack = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.22), porcelainWhiteMat)
  towelStack.position.set(vanX + 0.5, floorY + vanH + 0.09, vanZ - 0.08)
  bathGroup.add(soapDispenser, towelStack)

  // =========================================================================
  // 8. HEATED TOWEL RAIL (EAST WALL)
  // =========================================================================
  const railX = cx + innerW / 2 - 0.06
  const railZ = cz + 0.3
  const railH = 1.1

  const railFrame = new THREE.Mesh(new THREE.BoxGeometry(0.04, railH, 0.6), goldMat)
  railFrame.position.set(railX, floorY + 1.3, railZ)

  // Folded plush towels on rungs
  const foldedTowel1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.45), porcelainWhiteMat)
  foldedTowel1.position.set(railX - 0.06, floorY + 1.45, railZ)
  const foldedTowel2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.45), darkMetalMat)
  foldedTowel2.position.set(railX - 0.06, floorY + 1.1, railZ)
  bathGroup.add(railFrame, foldedTowel1, foldedTowel2)

  // =========================================================================
  // 9. LUXURY TOILET SUITE (SOUTH-EAST CORNER)
  // =========================================================================
  const toiX = cx + 3.4
  const toiZ = cz + innerD / 2 - 0.65 // ~ 127.95

  // 9.1 Cistern Box (Against South Wall)
  const cistern = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.75, 0.24), porcelainWhiteMat)
  cistern.position.set(toiX, floorY + 0.75 / 2 + 0.2, toiZ + 0.28)

  // Chrome Dual-Flush Button
  const flushBtn = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.015), chromeMat)
  flushBtn.position.set(toiX, floorY + 0.68, toiZ + 0.15)

  // 9.2 Porcelain Toilet Bowl & Soft-Close Lid (Facing North)
  const bowl = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.42, 0.65), porcelainWhiteMat)
  bowl.position.set(toiX, floorY + 0.21, toiZ - 0.1)

  const lid = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.58), porcelainWhiteMat)
  lid.position.set(toiX, floorY + 0.435, toiZ - 0.1)
  bathGroup.add(cistern, flushBtn, bowl, lid)

  // 9.3 Wall-Mounted Toilet Paper Roll (East Wall)
  const tpRoll = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.14, 16), porcelainWhiteMat)
  tpRoll.rotation.x = Math.PI / 2
  tpRoll.position.set(cx + innerW / 2 - 0.12, floorY + 0.68, toiZ)
  const tpMount = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.16), chromeMat)
  tpMount.position.set(cx + innerW / 2 - 0.06, floorY + 0.68, toiZ)
  bathGroup.add(tpRoll, tpMount)

  // =========================================================================
  // 10. DYNAMIC LIGHTING
  // =========================================================================
  // Central Ambient Spotlight
  const bathLightC = new THREE.PointLight(0xfff5ea, 1.4, 6.5, 1.2)
  bathLightC.position.set(cx, floorY + wallH - 0.25, cz)
  bathGroup.add(bathLightC)

  // Vanity Mirror Accent Light
  const vanityLight = new THREE.PointLight(0x7dd3fc, 1.1, 4.0, 1.4)
  vanityLight.position.set(vanX, floorY + vanH + 0.65, cz - innerD / 2 + 0.4)
  bathGroup.add(vanityLight)

  // Tub Glow
  const tubLight = new THREE.PointLight(0x38bdf8, 1.0, 4.5, 1.3)
  tubLight.position.set(tubX, floorY + tubH + 0.4, tubZ)
  bathGroup.add(tubLight)

  if (lightManager) {
    lightManager.register({ x: cx, y: floorY + wallH - 0.25, z: cz, color: 0xfff5ea, intensity: 1.4, distance: 6.5 })
    lightManager.register({ x: vanX, y: floorY + vanH + 0.65, z: cz - innerD / 2 + 0.4, color: 0x7dd3fc, intensity: 1.1, distance: 4.0 })
    lightManager.register({ x: tubX, y: floorY + tubH + 0.4, z: tubZ, color: 0x38bdf8, intensity: 1.0, distance: 4.5 })
  }

  // =========================================================================
  // 11. COLLISION SYSTEM REGISTRATION
  // =========================================================================
  // Perimeter Walls
  colliders.add({ minX: cx - innerW / 2 - 0.5, minY: 0, maxX: cx + innerW / 2 + 0.5, maxY: 4.0, minZ: cz + innerD / 2 - 0.05, maxZ: cz + innerD / 2 + 0.4 }) // South
  colliders.add({ minX: cx - innerW / 2 - 0.4, minY: 0, maxX: cx - innerW / 2 + 0.05, maxY: 4.0, minZ: cz - innerD / 2 - 0.4, maxZ: cz + innerD / 2 + 0.4 }) // West
  colliders.add({ minX: cx + innerW / 2 - 0.05, minY: 0, maxX: cx + innerW / 2 + 0.4, maxY: 4.0, minZ: cz - innerD / 2 - 0.4, maxZ: cz + innerD / 2 + 0.4 }) // East

  // North Wall Segments (Leaving center door open: X from -0.8 to +0.8)
  colliders.add({ minX: cx - innerW / 2 - 0.2, minY: 0, maxX: cx - doorW / 2, maxY: 4.0, minZ: cz - innerD / 2 - 0.4, maxZ: cz - innerD / 2 + 0.05 })
  colliders.add({ minX: cx + doorW / 2, minY: 0, maxX: cx + innerW / 2 + 0.2, maxY: 4.0, minZ: cz - innerD / 2 - 0.4, maxZ: cz - innerD / 2 + 0.05 })

  // Bathtub / Wet Room
  colliders.add({ minX: tubX - tubW / 2 - 0.1, minY: 0, maxX: tubX + tubW / 2 + 0.1, maxY: 4.0, minZ: tubZ - tubD / 2 - 0.1, maxZ: tubZ + tubD / 2 + 0.1 })

  // Washer & Vanity
  colliders.add({ minX: washX - washW / 2 - 0.1, minY: 0, maxX: washX + washW / 2 + 0.1, maxY: 4.0, minZ: washZ - washD / 2 - 0.1, maxZ: washZ + washD / 2 + 0.1 })
  colliders.add({ minX: vanX - vanW / 2 - 0.1, minY: 0, maxX: vanX + vanW / 2 + 0.1, maxY: 4.0, minZ: vanZ - vanD / 2 - 0.1, maxZ: vanZ + vanD / 2 + 0.1 })

  // Toilet Suite
  colliders.add({ minX: toiX - 0.35, minY: 0, maxX: toiX + 0.35, maxY: 4.0, minZ: toiZ - 0.45, maxZ: toiZ + 0.45 })

  // =========================================================================
  // 12. INTERACTION SYSTEM REGISTRATION
  // =========================================================================

  // 1. North Door -> Return to Master Bedroom
  interactions.add({
    id: 'bath-to-bedroom',
    x: cx,
    z: cz - innerD / 2 + 0.5,
    radius: 1.8,
    prompt: () => 'Exit to Master Bedroom [ベッドルームへ]',
    onInteract: () => {
      audio?.playElevatorChime()
      messages.show('Returning to Master Bedroom...')
      screenFade(() => {
        player.teleport(cx, 110.2, 0)
        messages.show('Suite 402 — Master Bedroom.', 4.0)
      })
    },
  })

  // 2. Soaking Bathtub
  interactions.add({
    id: 'bath-tub',
    x: tubX + tubW / 2 + 0.4,
    z: tubZ,
    radius: 1.6,
    prompt: () => 'Fill Aromatherapy Hot Soaking Tub [お風呂を入れる]',
    onInteract: () => {
      audio?.playSipWaterSound()
      messages.show('🛁 Waterfall mixer turns on. Warm cedar & yuzu bath salts scent the steamy air.', 4.5)
    },
  })

  // 3. Washing Machine
  interactions.add({
    id: 'bath-washer',
    x: washX,
    z: washZ + 0.6,
    radius: 1.5,
    prompt: () => 'Check Laundry Status [洗濯機を確認]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('🧺 Cycle: "Delicate Steam Wash" — 42 minutes remaining. Whisper quiet inverter motor active.')
    },
  })

  // 4. Vanity Sink
  interactions.add({
    id: 'bath-sink',
    x: vanX,
    z: vanZ + 0.6,
    radius: 1.5,
    prompt: () => 'Wash Hands & Freshen Up [洗面台で手を洗う]',
    onInteract: () => {
      audio?.playSipWaterSound()
      messages.show('🧼 Cool mountain spring water flows from the chrome gooseneck tap. You feel refreshed.')
    },
  })

  // 5. Heated Towel Rail
  interactions.add({
    id: 'bath-towel',
    x: railX - 0.4,
    z: railZ,
    radius: 1.4,
    prompt: () => 'Take Warm Heated Towel [温かいタオル]',
    onInteract: () => {
      messages.show('✨ Fresh, warm Egyptian cotton towel ready on the brass heated rail.')
    },
  })

  // 6. Toilet Suite
  interactions.add({
    id: 'bath-toilet',
    x: toiX,
    z: toiZ - 0.6,
    radius: 1.5,
    prompt: () => 'Flush Toilet Suite [トイレを流す]',
    onInteract: () => {
      audio?.playSipWaterSound()
      messages.show('🚽 Whisper-quiet dual flush activated. Soft-close lid gently descends.')
    },
  })

  // =========================================================================
  // 13. RUNTIME ANIMATOR
  // =========================================================================
  let time = 0
  return {
    group: bathGroup,
    update: (dt: number, p: { x: number; z: number }) => {
      bathGroup.visible = p.z >= 118
      if (!bathGroup.visible) return

      time += dt
      // Gentle water shimmer pulse
      waterMat.opacity = 0.8 + Math.sin(time * 2.0) * 0.08
    },
  }
}

import * as THREE from 'three'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'
import { screenFade } from '../ui/ScreenFader'
import {
  suiteHardwoodFloorTexture,
  suite402LivingRoomRugTexture,
  suite402WelcomeRunnerTexture,
  suite402BedroomMatTexture,
  suiteKitchenBacksplashTexture,
  suiteFridgePanelTexture,
  suiteAudioWaveformTexture,
  suiteArtBookCoverTexture,
  suiteKitchenMarbleTexture,
} from './Materials'

export interface Suite402HallResult {
  group: THREE.Group
  update: (dt: number, p: { x: number; z: number }) => void
}

export function buildSuite402Hall(
  scene: THREE.Scene,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
  lightManager?: LightManager,
): Suite402HallResult {
  const hallGroup = new THREE.Group()
  hallGroup.name = 'suite-402-hall-livingroom'
  hallGroup.visible = player.z >= 74 && player.z < 96
  scene.add(hallGroup)

  // =========================================================================
  // 1. COORDINATE ORIGIN & ROOM DIMENSIONS
  // =========================================================================
  const cx = 0
  const cz = 86
  const floorY = 0.15
  const innerW = 12.0 // East-West width (X: -6.0 to +6.0)
  const innerD = 7.8  // North-South depth (Z: cz - 3.9 to cz + 3.9 -> 82.1 to 89.9)
  const wallH = 3.0   // Lofty luxury ceiling height
  const wallThick = 0.3

  // =========================================================================
  // 2. LUXURY ARCHITECTURAL MATERIALS
  // =========================================================================
  const floorTex = suiteHardwoodFloorTexture()
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex,
    roughness: 0.35,
    metalness: 0.08,
  })

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x141a26,
    roughness: 0.74,
    metalness: 0.05,
  })

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.26,
    metalness: 0.9,
  })

  const darkWoodMat = new THREE.MeshStandardMaterial({
    color: 0x221813,
    roughness: 0.42,
    metalness: 0.06,
  })

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0xf5f3ee,
    roughness: 0.6,
  })

  const coveLedMat = new THREE.MeshBasicMaterial({
    color: 0xfffae6,
    toneMapped: false,
  })

  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x1a202c,
    roughness: 0.35,
    metalness: 0.82,
  })

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xdde4ec,
    roughness: 0.15,
    metalness: 0.94,
  })

  const navyVelvetMat = new THREE.MeshStandardMaterial({
    color: 0x141b2a,
    roughness: 0.85,
    metalness: 0.04,
  })

  const mustardCushionMat = new THREE.MeshStandardMaterial({
    color: 0xeab308,
    roughness: 0.7,
    metalness: 0.05,
  })

  const cyanCushionMat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    roughness: 0.7,
    metalness: 0.05,
  })

  const marbleTex = suiteKitchenMarbleTexture()
  const marbleMat = new THREE.MeshStandardMaterial({
    map: marbleTex,
    roughness: 0.22,
    metalness: 0.08,
  })

  const ceramicWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.3,
    metalness: 0.05,
  })

  const backsplashTex = suiteKitchenBacksplashTexture()
  const backsplashMat = new THREE.MeshStandardMaterial({
    map: backsplashTex,
    roughness: 0.25,
    metalness: 0.05,
  })

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.08,
    metalness: 0.1,
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
  })

  const plantLeafMat = new THREE.MeshStandardMaterial({
    color: 0x166534,
    roughness: 0.65,
    side: THREE.DoubleSide,
  })

  // =========================================================================
  // 3. ARCHITECTURAL SHELL (FLOOR, CEILING, WALLS)
  // =========================================================================

  // 3.1 Hardwood Floor Planks
  const floorGeo = new THREE.BoxGeometry(innerW, 0.05, innerD)
  const floorMesh = new THREE.Mesh(floorGeo, floorMat)
  floorMesh.position.set(cx, floorY + 0.025, cz)
  floorMesh.receiveShadow = true
  hallGroup.add(floorMesh)

  // 3.2 Suspended Ceiling with Recessed LED Cove Lighting
  const ceilGeo = new THREE.BoxGeometry(innerW, 0.1, innerD)
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilingMat)
  ceilMesh.position.set(cx, floorY + wallH + 0.05, cz)
  hallGroup.add(ceilMesh)

  // Recessed cove tray
  const coveTrayW = innerW - 1.8
  const coveTrayD = innerD - 1.6
  const trayMesh = new THREE.Mesh(new THREE.BoxGeometry(coveTrayW, 0.06, coveTrayD), ceilingMat)
  trayMesh.position.set(cx, floorY + wallH - 0.02, cz)
  hallGroup.add(trayMesh)

  // Glowing perimeter LED strip
  const coveEdgeGeo = new THREE.BoxGeometry(coveTrayW + 0.1, 0.02, coveTrayD + 0.1)
  const coveEdge = new THREE.Mesh(coveEdgeGeo, coveLedMat)
  coveEdge.position.set(cx, floorY + wallH - 0.05, cz)
  hallGroup.add(coveEdge)

  // 3.3 Gold Perimeter Baseboards
  const addBaseboard = (x: number, z: number, w: number, d: number) => {
    const bb = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), goldMat)
    bb.position.set(x, floorY + 0.06, z)
    hallGroup.add(bb)
  }
  addBaseboard(cx, cz + innerD / 2 - 0.02, innerW, 0.04) // South baseboard
  addBaseboard(cx, cz - innerD / 2 + 0.02, innerW, 0.04) // North baseboard
  addBaseboard(cx - innerW / 2 + 0.02, cz - 2.5, 0.04, 2.6) // West North baseboard
  addBaseboard(cx - innerW / 2 + 0.02, cz + 2.5, 0.04, 2.6) // West South baseboard
  addBaseboard(cx + innerW / 2 - 0.02, cz - 2.5, 0.04, 2.6) // East North baseboard
  addBaseboard(cx + innerW / 2 - 0.02, cz + 2.5, 0.04, 2.6) // East South baseboard

  // 3.4 NORTH WALL (Solid luxury navy with gold fluted decorative accents)
  const nWall = new THREE.Mesh(new THREE.BoxGeometry(innerW + wallThick * 2, wallH, wallThick), wallMat)
  nWall.position.set(cx, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  nWall.castShadow = true
  nWall.receiveShadow = true
  hallGroup.add(nWall)

  // 3.5 SOUTH WALL (Solid luxury navy with vertical architectural gold stripes)
  const sWall = new THREE.Mesh(new THREE.BoxGeometry(innerW + wallThick * 2, wallH, wallThick), wallMat)
  sWall.position.set(cx, floorY + wallH / 2, cz + innerD / 2 + wallThick / 2)
  sWall.castShadow = true
  sWall.receiveShadow = true
  hallGroup.add(sWall)

  for (let sx = -5.0; sx <= 5.0; sx += 2.0) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.04, wallH - 0.4, 0.02), goldMat)
    stripe.position.set(cx + sx, floorY + wallH / 2, cz + innerD / 2 - 0.01)
    hallGroup.add(stripe)
  }

  // =========================================================================
  // 4. EAST WALL & DOORWAY (TO 4F ELEVATOR LOUNGE)
  // =========================================================================
  const doorW = 1.6
  const doorH = 2.4
  const eWallSegD = (innerD - doorW) / 2

  // North segment of East wall
  const eWallN = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH, eWallSegD), wallMat)
  eWallN.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz - innerD / 2 + eWallSegD / 2)
  hallGroup.add(eWallN)

  // South segment of East wall
  const eWallS = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH, eWallSegD), wallMat)
  eWallS.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz + innerD / 2 - eWallSegD / 2)
  hallGroup.add(eWallS)

  // Header above East door
  const eHeader = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH - doorH, doorW), wallMat)
  eHeader.position.set(cx + innerW / 2 + wallThick / 2, floorY + doorH + (wallH - doorH) / 2, cz)
  hallGroup.add(eHeader)

  // Gold Door Frame
  const eFrameL = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 0.06), goldMat)
  eFrameL.position.set(cx + innerW / 2 - 0.02, floorY + doorH / 2, cz - doorW / 2)
  const eFrameR = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 0.06), goldMat)
  eFrameR.position.set(cx + innerW / 2 - 0.02, floorY + doorH / 2, cz + doorW / 2)
  const eFrameTop = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, doorW + 0.12), goldMat)
  eFrameTop.position.set(cx + innerW / 2 - 0.02, floorY + doorH + 0.03, cz)
  hallGroup.add(eFrameL, eFrameR, eFrameTop)

  // East Door Leaf (Swung slightly open)
  const eDoorLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.05, doorH - 0.04, doorW - 0.04), darkWoodMat)
  eDoorLeaf.position.set(cx + innerW / 2 + 0.02, floorY + doorH / 2, cz)
  hallGroup.add(eDoorLeaf)

  // Smart Digital Lock & Brass Lever
  const eLock = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.06), darkMetalMat)
  eLock.position.set(cx + innerW / 2 - 0.02, floorY + 1.05, cz - 0.5)
  const eLed = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 8), new THREE.MeshBasicMaterial({ color: 0x38ef7d }))
  eLed.position.set(cx + innerW / 2 - 0.065, floorY + 1.12, cz - 0.5)
  const eLever = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.14), goldMat)
  eLever.position.set(cx + innerW / 2 - 0.05, floorY + 1.02, cz - 0.54)
  hallGroup.add(eLock, eLed, eLever)

  // Suite 402 Entrance Welcome Runner Mat
  const welcomeTex = suite402WelcomeRunnerTexture()
  const welcomeMat = new THREE.MeshStandardMaterial({
    map: welcomeTex,
    roughness: 0.45,
    metalness: 0.1,
  })
  const welcomeMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.8), welcomeMat)
  welcomeMesh.rotation.x = -Math.PI / 2
  welcomeMesh.position.set(cx + innerW / 2 - 0.65, floorY + 0.052, cz)
  hallGroup.add(welcomeMesh)

  // =========================================================================
  // 5. WEST WALL & DOORWAY (TO MASTER BEDROOM)
  // =========================================================================
  const wWallSegD = (innerD - doorW) / 2

  // North segment of West wall
  const wWallN = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH, wWallSegD), wallMat)
  wWallN.position.set(cx - innerW / 2 - wallThick / 2, floorY + wallH / 2, cz - innerD / 2 + wWallSegD / 2)
  hallGroup.add(wWallN)

  // South segment of West wall
  const wWallS = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH, wWallSegD), wallMat)
  wWallS.position.set(cx - innerW / 2 - wallThick / 2, floorY + wallH / 2, cz + innerD / 2 - wWallSegD / 2)
  hallGroup.add(wWallS)

  // Header above West door
  const wHeader = new THREE.Mesh(new THREE.BoxGeometry(wallThick, wallH - doorH, doorW), wallMat)
  wHeader.position.set(cx - innerW / 2 - wallThick / 2, floorY + doorH + (wallH - doorH) / 2, cz)
  hallGroup.add(wHeader)

  // Gold Door Frame
  const wFrameL = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 0.06), goldMat)
  wFrameL.position.set(cx - innerW / 2 + 0.02, floorY + doorH / 2, cz - doorW / 2)
  const wFrameR = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 0.06), goldMat)
  wFrameR.position.set(cx - innerW / 2 + 0.02, floorY + doorH / 2, cz + doorW / 2)
  const wFrameTop = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, doorW + 0.12), goldMat)
  wFrameTop.position.set(cx - innerW / 2 + 0.02, floorY + doorH + 0.03, cz)
  hallGroup.add(wFrameL, wFrameR, wFrameTop)

  // West Door Leaf
  const wDoorLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.05, doorH - 0.04, doorW - 0.04), darkWoodMat)
  wDoorLeaf.position.set(cx - innerW / 2 - 0.02, floorY + doorH / 2, cz)
  hallGroup.add(wDoorLeaf)

  // Brass Handle
  const wHandle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.025, 0.14), goldMat)
  wHandle.position.set(cx - innerW / 2 + 0.04, floorY + 1.05, cz + 0.5)
  hallGroup.add(wHandle)

  // "BEDROOM" Foyer Runner Mat
  const bedMatTex = suite402BedroomMatTexture()
  const bedMatMaterial = new THREE.MeshStandardMaterial({
    map: bedMatTex,
    roughness: 0.45,
    metalness: 0.1,
  })
  const bedMatMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.8), bedMatMaterial)
  bedMatMesh.rotation.x = -Math.PI / 2
  bedMatMesh.position.set(cx - innerW / 2 + 0.65, floorY + 0.052, cz)
  hallGroup.add(bedMatMesh)

  // =========================================================================
  // 6. MODERN LUXURY RESIDENTIAL HOUSE KITCHEN (NORTH-WEST)
  // [RESIDENTIAL HOME KITCHEN]: Replaces commercial "CUISINE" bar with a full,
  // warm Japanese residential apartment kitchen:
  // - Ceramic subway tile backsplash with warm under-cabinet LED wash lighting.
  // - Tall Japanese multi-door French-door refrigerator with OLED temperature readout.
  // - Rear counter run with 3-zone induction cooktop, Balmuda steam oven, kettle, and knife block.
  // - Stainless steel chimney extraction range hood with cooktop task downlight.
  // - Upper cabinetry and open floating display shelving with mugs & ceramics.
  // - Waterfall Calacatta marble prep island with undermount sink, gooseneck faucet,
  //   cutting board with citrus garnish, fruit bowl, and 3 modern bar stools.
  // =========================================================================
  const kitX = cx - 3.4
  const kitZ = cz - innerD / 2 + 1.25 // ~ 83.35

  // 6.1 Full Glazed Ceramic Subway Tile Backsplash (North Wall)
  const bSplashW = 4.4
  const bSplashH = 1.7
  const bSplashZ = cz - innerD / 2 + 0.02
  const backsplashMesh = new THREE.Mesh(new THREE.BoxGeometry(bSplashW, bSplashH, 0.03), backsplashMat)
  backsplashMesh.position.set(kitX - 0.2, floorY + 0.9 + bSplashH / 2, bSplashZ)
  hallGroup.add(backsplashMesh)

  // 6.2 Tall Japanese Multi-Door Refrigerator (West corner)
  const fridgeW = 0.88
  const fridgeD = 0.72
  const fridgeH = 2.18
  const fridgeX = cx - innerW / 2 + 0.65 // ~ -5.35
  const fridgeZ = cz - innerD / 2 + fridgeD / 2 + 0.04 // ~ 82.50

  const fridgeBody = new THREE.Mesh(new THREE.BoxGeometry(fridgeW, fridgeH, fridgeD), darkMetalMat)
  fridgeBody.position.set(fridgeX, floorY + fridgeH / 2, fridgeZ)
  fridgeBody.castShadow = true
  fridgeBody.receiveShadow = true

  // Front panel with digital temperature OLED display
  const fridgeTex = suiteFridgePanelTexture()
  const fridgeFrontMat = new THREE.MeshStandardMaterial({ map: fridgeTex, roughness: 0.35, metalness: 0.75 })
  const fridgeFront = new THREE.Mesh(new THREE.PlaneGeometry(fridgeW - 0.02, fridgeH - 0.02), fridgeFrontMat)
  fridgeFront.position.set(fridgeX, floorY + fridgeH / 2, fridgeZ + fridgeD / 2 + 0.005)

  // Recessed handle brass accent
  const fridgeHandle = new THREE.Mesh(new THREE.BoxGeometry(fridgeW - 0.06, 0.03, 0.02), goldMat)
  fridgeHandle.position.set(fridgeX, floorY + 1.05, fridgeZ + fridgeD / 2 + 0.01)

  hallGroup.add(fridgeBody, fridgeFront, fridgeHandle)

  colliders.add({
    minX: fridgeX - fridgeW / 2 - 0.05,
    minY: 0,
    maxX: fridgeX + fridgeW / 2 + 0.05,
    maxY: 4.0,
    minZ: fridgeZ - fridgeD / 2 - 0.05,
    maxZ: fridgeZ + fridgeD / 2 + 0.05,
  })

  // 6.3 Rear Counter Run (Along North Wall)
  const rearCounterW = 3.2
  const rearCounterD = 0.65
  const rearCounterH = 0.92
  const rearCounterX = kitX + 0.35 // ~ -3.05
  const rearCounterZ = cz - innerD / 2 + rearCounterD / 2 + 0.03 // ~ 82.455

  // Base Cabinetry (Dark Walnut with Gold Edge Pulls)
  const rearBase = new THREE.Mesh(new THREE.BoxGeometry(rearCounterW, rearCounterH - 0.06, rearCounterD - 0.05), darkWoodMat)
  rearBase.position.set(rearCounterX, floorY + (rearCounterH - 0.06) / 2, rearCounterZ)
  rearBase.castShadow = true
  rearBase.receiveShadow = true

  const rearToeKick = new THREE.Mesh(new THREE.BoxGeometry(rearCounterW - 0.04, 0.08, rearCounterD - 0.1), darkMetalMat)
  rearToeKick.position.set(rearCounterX, floorY + 0.04, rearCounterZ)

  // Calacatta Marble Countertop
  const rearTop = new THREE.Mesh(new THREE.BoxGeometry(rearCounterW + 0.04, 0.06, rearCounterD + 0.04), marbleMat)
  rearTop.position.set(rearCounterX, floorY + rearCounterH - 0.03, rearCounterZ)
  rearTop.castShadow = true
  rearTop.receiveShadow = true

  hallGroup.add(rearBase, rearToeKick, rearTop)

  colliders.add({
    minX: rearCounterX - rearCounterW / 2 - 0.05,
    minY: 0,
    maxX: rearCounterX + rearCounterW / 2 + 0.05,
    maxY: 4.0,
    minZ: rearCounterZ - rearCounterD / 2 - 0.05,
    maxZ: rearCounterZ + rearCounterD / 2 + 0.05,
  })

  // 6.4 3-Zone Ceramic Induction Cooktop (Rear Counter, left)
  const cookX = rearCounterX - 0.65 // ~ -3.70
  const cookZ = rearCounterZ
  const cooktop = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.015, 0.52), new THREE.MeshStandardMaterial({
    color: 0x090d14,
    roughness: 0.08,
    metalness: 0.92,
  }))
  cooktop.position.set(cookX, floorY + rearCounterH + 0.008, cookZ)
  hallGroup.add(cooktop)

  // Glowing induction cooking circles
  const bRing1 = new THREE.Mesh(new THREE.RingGeometry(0.06, 0.095, 24), new THREE.MeshBasicMaterial({ color: 0xf97316 }))
  bRing1.rotation.x = -Math.PI / 2
  bRing1.position.set(cookX - 0.18, floorY + rearCounterH + 0.016, cookZ + 0.06)
  const bRing2 = new THREE.Mesh(new THREE.RingGeometry(0.08, 0.12, 24), new THREE.MeshBasicMaterial({ color: 0xf97316 }))
  bRing2.rotation.x = -Math.PI / 2
  bRing2.position.set(cookX + 0.16, floorY + rearCounterH + 0.016, cookZ)
  const bRing3 = new THREE.Mesh(new THREE.RingGeometry(0.05, 0.075, 24), new THREE.MeshBasicMaterial({ color: 0xf97316 }))
  bRing3.rotation.x = -Math.PI / 2
  bRing3.position.set(cookX - 0.16, floorY + rearCounterH + 0.016, cookZ - 0.12)
  hallGroup.add(bRing1, bRing2, bRing3)

  // 6.5 Stainless Steel Extraction Range Hood & Chimney
  const hoodW = 0.9
  const hoodD = 0.54
  const hoodH = 0.12
  const hoodY = floorY + 1.95

  const hoodCanopy = new THREE.Mesh(new THREE.BoxGeometry(hoodW, hoodH, hoodD), chromeMat)
  hoodCanopy.position.set(cookX, hoodY + hoodH / 2, cookZ)

  const chimW = 0.38
  const chimD = 0.32
  const chimH = wallH - (1.95 + hoodH) + 0.05
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(chimW, chimH, chimD), chromeMat)
  chimney.position.set(cookX, hoodY + hoodH + chimH / 2, cz - innerD / 2 + chimD / 2 + 0.03)

  // Undermount LED Cooktop Downlight
  const hoodLight = new THREE.Mesh(new THREE.BoxGeometry(hoodW - 0.1, 0.01, hoodD - 0.1), coveLedMat)
  hoodLight.position.set(cookX, hoodY - 0.005, cookZ)

  hallGroup.add(hoodCanopy, chimney, hoodLight)

  // 6.6 Upper Wall Cabinets & Open Floating Display Shelving
  // Left Upper Cabinet (flanking hood, above counter)
  const uCabLW = 0.6
  const uCabH = 0.72
  const uCabD = 0.38
  const uCabLX = cookX - hoodW / 2 - uCabLW / 2 - 0.04
  const uCabY = floorY + 1.95 + uCabH / 2
  const uCabZ = cz - innerD / 2 + uCabD / 2 + 0.03

  const uCabL = new THREE.Mesh(new THREE.BoxGeometry(uCabLW, uCabH, uCabD), darkWoodMat)
  uCabL.position.set(uCabLX, uCabY, uCabZ)
  const uCabLTrim = new THREE.Mesh(new THREE.BoxGeometry(uCabLW, 0.02, 0.02), goldMat)
  uCabLTrim.position.set(uCabLX, uCabY - uCabH / 2 + 0.01, uCabZ + uCabD / 2 + 0.01)
  hallGroup.add(uCabL, uCabLTrim)

  // Right Upper Cabinet (far right edge)
  const uCabRW = 0.55
  const uCabRX = rearCounterX + rearCounterW / 2 - uCabRW / 2
  const uCabR = new THREE.Mesh(new THREE.BoxGeometry(uCabRW, uCabH, uCabD), darkWoodMat)
  uCabR.position.set(uCabRX, uCabY, uCabZ)
  const uCabRTrim = new THREE.Mesh(new THREE.BoxGeometry(uCabRW, 0.02, 0.02), goldMat)
  uCabRTrim.position.set(uCabRX, uCabY - uCabH / 2 + 0.01, uCabZ + uCabD / 2 + 0.01)
  hallGroup.add(uCabR, uCabRTrim)

  // Floating Natural Oak Open Display Shelf (between range hood and right cabinet)
  const shelfX = (cookX + hoodW / 2 + uCabRX - uCabRW / 2) / 2
  const shelfW = (uCabRX - uCabRW / 2) - (cookX + hoodW / 2) - 0.08
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(shelfW, 0.035, 0.3), darkWoodMat)
  shelf.position.set(shelfX, floorY + 2.05, cz - innerD / 2 + 0.18)
  const shelfGold = new THREE.Mesh(new THREE.BoxGeometry(shelfW + 0.02, 0.01, 0.02), goldMat)
  shelfGold.position.set(shelfX, floorY + 2.05 - 0.018, cz - innerD / 2 + 0.32)
  hallGroup.add(shelf, shelfGold)

  // Ceramic Coffee Mugs on Floating Shelf
  for (let m = 0; m < 4; m++) {
    const mugX = shelfX - shelfW / 2 + 0.15 + m * 0.22
    const mugMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.09, 16), m % 2 === 0 ? ceramicWhiteMat : darkMetalMat)
    mugMesh.position.set(mugX, floorY + 2.05 + 0.045 + 0.018, cz - innerD / 2 + 0.18)
    hallGroup.add(mugMesh)
  }

  // Under-Cabinet Warm LED Task Lighting Strip
  const underLedGeo = new THREE.BoxGeometry(rearCounterW - 0.1, 0.015, 0.03)
  const underLed = new THREE.Mesh(underLedGeo, coveLedMat)
  underLed.position.set(rearCounterX, floorY + 1.94, cz - innerD / 2 + 0.36)
  hallGroup.add(underLed)

  // 6.7 Countertop Home Appliances (Rear Counter)
  // Balmuda Steam Oven / Microwave (Right section of rear counter)
  const ovenX = rearCounterX + 0.55 // ~ -2.50
  const ovenZ = rearCounterZ - 0.05
  const ovenW = 0.52
  const ovenH = 0.32
  const ovenD = 0.38
  const ovenMesh = new THREE.Mesh(new THREE.BoxGeometry(ovenW, ovenH, ovenD), darkMetalMat)
  ovenMesh.position.set(ovenX, floorY + rearCounterH + ovenH / 2, ovenZ)

  // Oven Glass Door & Amber Dial
  const ovenGlass = new THREE.Mesh(new THREE.BoxGeometry(ovenW - 0.08, ovenH - 0.08, 0.02), new THREE.MeshStandardMaterial({
    color: 0x05070b,
    roughness: 0.1,
    metalness: 0.9,
  }))
  ovenGlass.position.set(ovenX, floorY + rearCounterH + ovenH / 2, ovenZ + ovenD / 2 + 0.01)
  const ovenDial = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 16), goldMat)
  ovenDial.rotation.x = Math.PI / 2
  ovenDial.position.set(ovenX + ovenW / 2 - 0.08, floorY + rearCounterH + 0.08, ovenZ + ovenD / 2 + 0.02)
  hallGroup.add(ovenMesh, ovenGlass, ovenDial)

  // Balmuda Gooseneck Electric Kettle
  const kettleX = rearCounterX + 1.25 // ~ -1.80
  const kettleZ = rearCounterZ
  const kettleBase = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 20), darkMetalMat)
  kettleBase.position.set(kettleX, floorY + rearCounterH + 0.01, kettleZ)
  const kettleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.085, 0.2, 20), darkMetalMat)
  kettleBody.position.set(kettleX, floorY + rearCounterH + 0.12, kettleZ)
  const kettleSpout = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.14, 0.12), darkMetalMat)
  kettleSpout.rotation.x = 0.4
  kettleSpout.position.set(kettleX, floorY + rearCounterH + 0.14, kettleZ + 0.1)
  hallGroup.add(kettleBase, kettleBody, kettleSpout)

  // Hardwood Knife Block with Chef Knives (Left section near fridge)
  const blockX = cookX - 0.65 // ~ -4.35
  const blockZ = rearCounterZ - 0.08
  const blockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.22, 0.22), darkWoodMat)
  blockMesh.rotation.x = 0.2
  blockMesh.position.set(blockX, floorY + rearCounterH + 0.11, blockZ)
  hallGroup.add(blockMesh)

  for (let k = 0; k < 3; k++) {
    const kHandle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.09, 0.025), darkMetalMat)
    kHandle.rotation.x = 0.2
    kHandle.position.set(blockX - 0.04 + k * 0.04, floorY + rearCounterH + 0.24, blockZ - 0.02)
    hallGroup.add(kHandle)
  }

  // Seasoning Shakers & Oil Cruet
  const oilCruet = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.22, 16), glassMat)
  oilCruet.position.set(rearCounterX - 0.05, floorY + rearCounterH + 0.11, rearCounterZ - 0.14)
  const shaker1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 12), ceramicWhiteMat)
  shaker1.position.set(rearCounterX + 0.08, floorY + rearCounterH + 0.06, rearCounterZ - 0.14)
  const shaker2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 12), darkMetalMat)
  shaker2.position.set(rearCounterX + 0.17, floorY + rearCounterH + 0.06, rearCounterZ - 0.14)
  hallGroup.add(oilCruet, shaker1, shaker2)

  // =========================================================================
  // 6.8 LUXURY WATERFALL MARBLE ISLAND / BREAKFAST BAR
  // =========================================================================
  const islW = 2.7
  const islD = 0.88
  const islH = 0.92
  const islX = kitX + 0.25 // ~ -3.15
  const islZ = cz - innerD / 2 + 2.35 // ~ 84.45 (leaving 1.25m walk aisle between counters)

  // Marble Waterfall Countertop & Cascading Legs
  const islTop = new THREE.Mesh(new THREE.BoxGeometry(islW, 0.06, islD), marbleMat)
  islTop.position.set(islX, floorY + islH - 0.03, islZ)
  islTop.castShadow = true
  islTop.receiveShadow = true

  // Left waterfall leg
  const islLegL = new THREE.Mesh(new THREE.BoxGeometry(0.06, islH - 0.06, islD), marbleMat)
  islLegL.position.set(islX - islW / 2 + 0.03, floorY + (islH - 0.06) / 2, islZ)
  // Right waterfall leg
  const islLegR = new THREE.Mesh(new THREE.BoxGeometry(0.06, islH - 0.06, islD), marbleMat)
  islLegR.position.set(islX + islW / 2 - 0.03, floorY + (islH - 0.06) / 2, islZ)

  // Island Base Cabinetry (Dark Walnut with Gold Toe-Kick)
  const islBase = new THREE.Mesh(new THREE.BoxGeometry(islW - 0.16, islH - 0.1, islD - 0.18), darkWoodMat)
  islBase.position.set(islX, floorY + (islH - 0.1) / 2, islZ - 0.04)
  islBase.castShadow = true

  const islToeKick = new THREE.Mesh(new THREE.BoxGeometry(islW - 0.2, 0.08, islD - 0.24), goldMat)
  islToeKick.position.set(islX, floorY + 0.04, islZ - 0.04)

  hallGroup.add(islTop, islLegL, islLegR, islBase, islToeKick)

  colliders.add({
    minX: islX - islW / 2 - 0.05,
    minY: 0,
    maxX: islX + islW / 2 + 0.05,
    maxY: 4.0,
    minZ: islZ - islD / 2 - 0.05,
    maxZ: islZ + islD / 2 + 0.05,
  })

  // Undermount Prep Sink & High-Arc Chrome Faucet (Left side of island)
  const sinkX = islX - 0.65
  const sinkZ = islZ
  const sinkMesh = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.015, 0.44), darkMetalMat)
  sinkMesh.position.set(sinkX, floorY + islH - 0.01, sinkZ)
  hallGroup.add(sinkMesh)

  const faucetStem = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.32, 16), chromeMat)
  faucetStem.position.set(sinkX, floorY + islH + 0.16, sinkZ - 0.22)
  const faucetArch = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.016, 12, 16, Math.PI), chromeMat)
  faucetArch.rotation.z = -Math.PI / 2
  faucetArch.position.set(sinkX, floorY + islH + 0.32, sinkZ - 0.13)
  const faucetWand = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.016, 0.08, 16), chromeMat)
  faucetWand.position.set(sinkX, floorY + islH + 0.27, sinkZ - 0.04)
  hallGroup.add(faucetStem, faucetArch, faucetWand)

  // End-Grain Walnut Prep Board & Citrus Garnish (Right side of island)
  const boardX = islX + 0.68
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.025, 0.36), darkWoodMat)
  board.position.set(boardX, floorY + islH + 0.012, islZ)
  const knife = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.008, 0.035), chromeMat)
  knife.rotation.y = 0.35
  knife.position.set(boardX + 0.08, floorY + islH + 0.03, islZ - 0.05)
  hallGroup.add(board, knife)

  // Ceramic Bowl with Fresh Green Apples
  const bowlX = islX + 0.05
  const fruitBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.1, 0.08, 20), ceramicWhiteMat)
  fruitBowl.position.set(bowlX, floorY + islH + 0.04, islZ + 0.02)
  hallGroup.add(fruitBowl)

  const appleMat = new THREE.MeshStandardMaterial({ color: 0x84cc16, roughness: 0.35 })
  for (let a = 0; a < 3; a++) {
    const apple = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), appleMat)
    const angle = (a / 3) * Math.PI * 2
    apple.position.set(bowlX + Math.cos(angle) * 0.06, floorY + islH + 0.1, islZ + 0.02 + Math.sin(angle) * 0.06)
    hallGroup.add(apple)
  }

  // 6.9 3 Modern Circular Breakfast Bar Stools (Room side of island)
  for (let s = -1; s <= 1; s++) {
    const stoolX = islX + s * 0.85
    const stoolZ = islZ + islD / 2 + 0.38
    const stoolH = 0.65

    // Base plate & Stem
    const sBase = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 24), goldMat)
    sBase.position.set(stoolX, floorY + 0.01, stoolZ)
    const sStem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, stoolH, 16), darkMetalMat)
    sStem.position.set(stoolX, floorY + stoolH / 2, stoolZ)
    const sFootRest = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.012, 8, 24), goldMat)
    sFootRest.rotation.x = Math.PI / 2
    sFootRest.position.set(stoolX, floorY + 0.2, stoolZ)

    // Cushioned Swivel Seat
    const sSeat = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.07, 24), navyVelvetMat)
    sSeat.position.set(stoolX, floorY + stoolH + 0.035, stoolZ)
    hallGroup.add(sBase, sStem, sFootRest, sSeat)

    colliders.add({
      minX: stoolX - 0.22,
      minY: 0,
      minZ: stoolZ - 0.22,
      maxX: stoolX + 0.22,
      maxY: 4.0,
      maxZ: stoolZ + 0.22,
    })
  }

  // =========================================================================
  // 7. MEDIA / AUDIO ENTERTAINMENT CENTER (NORTH-EAST)
  // =========================================================================
  const mediaX = cx + 3.6
  const mediaZ = cz - innerD / 2 + 0.8
  const mediaW = 2.8
  const mediaD = 0.65
  const mediaH = 0.55

  // 7.1 Walnut & Brass Media Credenza
  const credenza = new THREE.Mesh(new THREE.BoxGeometry(mediaW, mediaH, mediaD), darkWoodMat)
  credenza.position.set(mediaX, floorY + mediaH / 2, mediaZ)
  credenza.castShadow = true
  credenza.receiveShadow = true
  hallGroup.add(credenza)

  const credenzaTrim = new THREE.Mesh(new THREE.BoxGeometry(mediaW + 0.04, 0.03, mediaD + 0.04), goldMat)
  credenzaTrim.position.set(mediaX, floorY + mediaH, mediaZ)
  hallGroup.add(credenzaTrim)

  // 7.2 High-Tech Audio Waveform Display Monitor
  const waveTex = suiteAudioWaveformTexture()
  const waveMat = new THREE.MeshBasicMaterial({ map: waveTex })
  const screenMesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 0.04), waveMat)
  screenMesh.position.set(mediaX, floorY + mediaH + 0.42, mediaZ)
  hallGroup.add(screenMesh)

  const screenStem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 12), goldMat)
  screenStem.position.set(mediaX, floorY + mediaH + 0.06, mediaZ)
  const screenBase = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 0.2), goldMat)
  screenBase.position.set(mediaX, floorY + mediaH + 0.01, mediaZ)
  hallGroup.add(screenStem, screenBase)

  // 7.3 Stereo Hi-Fi Studio Monitor Speakers (Flanking Display)
  for (const dir of [-1, 1]) {
    const spkX = mediaX + dir * 1.05
    const speaker = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.55, 0.28), darkMetalMat)
    speaker.position.set(spkX, floorY + mediaH + 0.275, mediaZ)

    // Copper Woofer Cone & Tweeter Ring
    const woofer = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.015, 20), goldMat)
    woofer.rotation.x = Math.PI / 2
    woofer.position.set(spkX, floorY + mediaH + 0.22, mediaZ + 0.14)
    const tweeter = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.015, 16), chromeMat)
    tweeter.rotation.x = Math.PI / 2
    tweeter.position.set(spkX, floorY + mediaH + 0.42, mediaZ + 0.14)
    hallGroup.add(speaker, woofer, tweeter)
  }

  // 7.4 Console Chair
  const chairZ = mediaZ + 0.8
  const chair = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.48, 0.48), navyVelvetMat)
  chair.position.set(mediaX, floorY + 0.24, chairZ)
  hallGroup.add(chair)

  // =========================================================================
  // 8. DINING AREA (SOUTH-WEST)
  // =========================================================================
  const dinX = cx - 3.4
  const dinZ = cz + 2.4
  const dinW = 1.9
  const dinD = 1.15
  const dinH = 0.78

  // 8.1 Dining Table (Dark Walnut with Brushed Gold Edging)
  const dinTop = new THREE.Mesh(new THREE.BoxGeometry(dinW, 0.05, dinD), darkWoodMat)
  dinTop.position.set(dinX, floorY + dinH, dinZ)
  dinTop.castShadow = true
  dinTop.receiveShadow = true
  hallGroup.add(dinTop)

  const dinTrim = new THREE.Mesh(new THREE.BoxGeometry(dinW + 0.02, 0.02, dinD + 0.02), goldMat)
  dinTrim.position.set(dinX, floorY + dinH - 0.015, dinZ)
  hallGroup.add(dinTrim)

  // Table Legs (Brushed Gold)
  for (const dx of [-dinW / 2 + 0.12, dinW / 2 - 0.12]) {
    for (const dz of [-dinD / 2 + 0.12, dinD / 2 - 0.12]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, dinH, 0.06), goldMat)
      leg.position.set(dinX + dx, floorY + dinH / 2, dinZ + dz)
      hallGroup.add(leg)
    }
  }

  // 8.2 Centerpiece Tea Tray & Matcha Bowl
  const dinTray = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.02, 0.35), darkWoodMat)
  dinTray.position.set(dinX, floorY + dinH + 0.035, dinZ)
  const matchaBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.05, 0.07, 16), ceramicWhiteMat)
  matchaBowl.position.set(dinX, floorY + dinH + 0.08, dinZ)
  const matchaWhisk = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.08, 12), goldMat)
  matchaWhisk.position.set(dinX + 0.14, floorY + dinH + 0.08, dinZ)
  hallGroup.add(dinTray, matchaBowl, matchaWhisk)

  // 8.3 4 Dining Chairs (Matching Image 1: 2 on North side, 2 on South side)
  const chairPositions = [
    { x: dinX - 0.55, z: dinZ - dinD / 2 - 0.22, rot: 0 },
    { x: dinX + 0.55, z: dinZ - dinD / 2 - 0.22, rot: 0 },
    { x: dinX - 0.55, z: dinZ + dinD / 2 + 0.22, rot: Math.PI },
    { x: dinX + 0.55, z: dinZ + dinD / 2 + 0.22, rot: Math.PI },
  ]
  chairPositions.forEach((pos) => {
    const cGroup = new THREE.Group()
    cGroup.position.set(pos.x, floorY, pos.z)
    cGroup.rotation.y = pos.rot

    // Seat Cushion
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.42), navyVelvetMat)
    seat.position.set(0, 0.46, 0)
    // Backrest
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.4, 0.05), navyVelvetMat)
    back.position.set(0, 0.68, -0.18)
    // Chair Legs
    for (const lx of [-0.18, 0.18]) {
      for (const lz of [-0.18, 0.18]) {
        const cLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.46, 10), goldMat)
        cLeg.position.set(lx, 0.23, lz)
        cGroup.add(cLeg)
      }
    }
    cGroup.add(seat, back)
    hallGroup.add(cGroup)
  })

  // =========================================================================
  // 9. LIVING LOUNGE AREA (CENTER-EAST)
  // =========================================================================
  const loungeX = cx + 2.4
  const loungeZ = cz + 1.2

  // 9.1 Designer Geometric Living Room Area Rug
  const rugTex = suite402LivingRoomRugTexture()
  const rugMat = new THREE.MeshStandardMaterial({
    map: rugTex,
    roughness: 0.85,
    metalness: 0.05,
  })
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 4.0), rugMat)
  rug.rotation.x = -Math.PI / 2
  rug.position.set(loungeX, floorY + 0.051, loungeZ)
  hallGroup.add(rug)

  // 9.2 Luxury Modular Velvet Sofa (Facing Media Console)
  const sofaW = 3.2
  const sofaD = 1.05
  const sofaSeatH = 0.45
  const sofaZ = loungeZ + 0.65

  const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(sofaW, sofaSeatH, sofaD), navyVelvetMat)
  sofaBase.position.set(loungeX, floorY + sofaSeatH / 2, sofaZ)
  sofaBase.castShadow = true
  sofaBase.receiveShadow = true

  const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(sofaW, 0.48, 0.28), navyVelvetMat)
  sofaBack.position.set(loungeX, floorY + sofaSeatH + 0.24, sofaZ + sofaD / 2 - 0.14)

  const sofaArmL = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.32, sofaD), navyVelvetMat)
  sofaArmL.position.set(loungeX - sofaW / 2 + 0.12, floorY + sofaSeatH + 0.16, sofaZ)

  const sofaArmR = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.32, sofaD), navyVelvetMat)
  sofaArmR.position.set(loungeX + sofaW / 2 - 0.12, floorY + sofaSeatH + 0.16, sofaZ)

  hallGroup.add(sofaBase, sofaBack, sofaArmL, sofaArmR)

  // 9.3 Throw Cushions (Matching Image 1: Yellow & Cyan cushions)
  const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.14), mustardCushionMat)
  c1.position.set(loungeX - 0.85, floorY + sofaSeatH + 0.22, sofaZ + 0.18)
  c1.rotation.set(-0.2, 0.1, 0.1)

  const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.14), cyanCushionMat)
  c2.position.set(loungeX + 0.75, floorY + sofaSeatH + 0.22, sofaZ + 0.18)
  c2.rotation.set(-0.2, -0.15, -0.05)

  hallGroup.add(c1, c2)

  // 9.4 Designer Marble Coffee Table with "ART" Magazine
  const tableX = loungeX
  const tableZ = loungeZ - 0.65
  const tableW = 1.6
  const tableD = 0.85
  const tableH = 0.42

  const coffeeTop = new THREE.Mesh(new THREE.BoxGeometry(tableW, 0.05, tableD), marbleMat)
  coffeeTop.position.set(tableX, floorY + tableH, tableZ)
  coffeeTop.castShadow = true
  coffeeTop.receiveShadow = true

  const coffeeTrim = new THREE.Mesh(new THREE.BoxGeometry(tableW + 0.02, 0.02, tableD + 0.02), goldMat)
  coffeeTrim.position.set(tableX, floorY + tableH - 0.02, tableZ)

  const coffeeBase = new THREE.Mesh(new THREE.BoxGeometry(tableW - 0.3, 0.04, tableD - 0.2), darkMetalMat)
  coffeeBase.position.set(tableX, floorY + 0.02, tableZ)

  hallGroup.add(coffeeTop, coffeeTrim, coffeeBase)

  // 4 Brass table legs
  for (const dx of [-tableW / 2 + 0.1, tableW / 2 - 0.1]) {
    for (const dz of [-tableD / 2 + 0.1, tableD / 2 - 0.1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, tableH, 12), goldMat)
      leg.position.set(tableX + dx, floorY + tableH / 2, tableZ + dz)
      hallGroup.add(leg)
    }
  }

  // "ART" Book / Monograph on Table Top
  const artTex = suiteArtBookCoverTexture()
  const artMat = new THREE.MeshStandardMaterial({
    map: artTex,
    roughness: 0.3,
    metalness: 0.1,
  })
  const artBook = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.025, 0.52), artMat)
  artBook.rotation.y = 0.18
  artBook.position.set(tableX - 0.25, floorY + tableH + 0.038, tableZ)
  hallGroup.add(artBook)

  // Remote Control & Ceramic Coaster
  const remote = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.015, 0.22), darkMetalMat)
  remote.position.set(tableX + 0.35, floorY + tableH + 0.035, tableZ)
  const coaster = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.01, 16), goldMat)
  coaster.position.set(tableX + 0.15, floorY + tableH + 0.032, tableZ - 0.12)
  hallGroup.add(remote, coaster)

  // =========================================================================
  // 10. ARCHITECTURAL HOUSE PLANT (SOUTH-EAST CORNER)
  // =========================================================================
  const plantX = cx + innerW / 2 - 0.95
  const plantZ = cz + innerD / 2 - 0.95

  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.65, 24), ceramicWhiteMat)
  pot.position.set(plantX, floorY + 0.325, plantZ)
  pot.castShadow = true
  pot.receiveShadow = true

  const potSoil = new THREE.Mesh(new THREE.CircleGeometry(0.3, 20), new THREE.MeshStandardMaterial({ color: 0x271c14 }))
  potSoil.rotation.x = -Math.PI / 2
  potSoil.position.set(plantX, floorY + 0.64, plantZ)
  hallGroup.add(pot, potSoil)

  // Tall leafy foliage (Snake plant / Fiddle leaf)
  for (let l = 0; l < 8; l++) {
    const angle = (l / 8) * Math.PI * 2
    const leafH = 0.9 + (l % 3) * 0.25
    const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.12, leafH, 0.01), plantLeafMat)
    leaf.position.set(plantX + Math.cos(angle) * 0.12, floorY + 0.65 + leafH / 2, plantZ + Math.sin(angle) * 0.12)
    leaf.rotation.y = angle
    leaf.rotation.z = Math.sin(angle) * 0.18
    hallGroup.add(leaf)
  }

  // =========================================================================
  // 11. FOYER CONSOLE TABLE (WEST WALL)
  // =========================================================================
  const conX = cx - innerW / 2 + 0.4
  const conZ = cz - 2.2
  const consoleTable = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.82, 1.2), darkWoodMat)
  consoleTable.position.set(conX, floorY + 0.41, conZ)
  const consoleMarble = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.04, 1.24), marbleMat)
  consoleMarble.position.set(conX, floorY + 0.83, conZ)
  const catchTray = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.3), goldMat)
  catchTray.position.set(conX, floorY + 0.86, conZ)
  hallGroup.add(consoleTable, consoleMarble, catchTray)

  // =========================================================================
  // 12. DYNAMIC LIGHTING
  // =========================================================================
  // Warm Ambient Cove Downlights
  const hallLightC = new THREE.PointLight(0xffecd1, 1.4, 7.5, 1.2)
  hallLightC.position.set(cx, floorY + wallH - 0.25, cz)
  hallGroup.add(hallLightC)

  // Kitchen Spot
  const kitLight = new THREE.PointLight(0xfff3e0, 1.2, 5.0, 1.3)
  kitLight.position.set(kitX, floorY + wallH - 0.25, kitZ)
  hallGroup.add(kitLight)

  // Media Console Cyan Glow
  const waveLight = new THREE.PointLight(0x00ffff, 1.2, 4.0, 1.5)
  waveLight.position.set(mediaX, floorY + mediaH + 0.42, mediaZ + 0.35)
  hallGroup.add(waveLight)

  // Lounge Spot
  const loungeLight = new THREE.PointLight(0xffecd1, 1.1, 6.0, 1.2)
  loungeLight.position.set(loungeX, floorY + wallH - 0.25, loungeZ)
  hallGroup.add(loungeLight)

  // Register lights with LightManager if provided
  if (lightManager) {
    lightManager.register({ x: cx, y: floorY + wallH - 0.25, z: cz, color: 0xffecd1, intensity: 1.4, distance: 7.5 })
    lightManager.register({ x: kitX, y: floorY + wallH - 0.25, z: kitZ, color: 0xfff3e0, intensity: 1.2, distance: 5.0 })
    lightManager.register({ x: mediaX, y: floorY + mediaH + 0.42, z: mediaZ + 0.35, color: 0x00ffff, intensity: 1.2, distance: 4.0 })
    lightManager.register({ x: loungeX, y: floorY + wallH - 0.25, z: loungeZ, color: 0xffecd1, intensity: 1.1, distance: 6.0 })
  }

  // =========================================================================
  // 13. COLLISION SYSTEM REGISTRATION
  // =========================================================================
  // Perimeter Walls
  colliders.add({ minX: cx - innerW / 2 - 0.5, minY: 0, maxX: cx + innerW / 2 + 0.5, maxY: 4.0, minZ: cz - innerD / 2 - 0.4, maxZ: cz - innerD / 2 + 0.05 }) // North
  colliders.add({ minX: cx - innerW / 2 - 0.5, minY: 0, maxX: cx + innerW / 2 + 0.5, maxY: 4.0, minZ: cz + innerD / 2 - 0.05, maxZ: cz + innerD / 2 + 0.4 }) // South

  // East Wall Segments (Leaving door open at cz: 85.2 to 86.8)
  colliders.add({ minX: cx + innerW / 2 - 0.05, minY: 0, maxX: cx + innerW / 2 + 0.4, maxY: 4.0, minZ: cz - innerD / 2, maxZ: cz - doorW / 2 })
  colliders.add({ minX: cx + innerW / 2 - 0.05, minY: 0, maxX: cx + innerW / 2 + 0.4, maxY: 4.0, minZ: cz + doorW / 2, maxZ: cz + innerD / 2 })

  // West Wall Segments (Leaving door open at cz: 85.2 to 86.8)
  colliders.add({ minX: cx - innerW / 2 - 0.4, minY: 0, maxX: cx - innerW / 2 + 0.05, maxY: 4.0, minZ: cz - innerD / 2, maxZ: cz - doorW / 2 })
  colliders.add({ minX: cx - innerW / 2 - 0.4, minY: 0, maxX: cx - innerW / 2 + 0.05, maxY: 4.0, minZ: cz + doorW / 2, maxZ: cz + innerD / 2 })

  // Media Console
  colliders.add({ minX: mediaX - mediaW / 2 - 0.1, minY: 0, maxX: mediaX + mediaW / 2 + 0.1, maxY: 4.0, minZ: mediaZ - mediaD / 2 - 0.1, maxZ: mediaZ + mediaD / 2 + 0.1 })

  // Dining Table
  colliders.add({ minX: dinX - dinW / 2 - 0.2, minY: 0, maxX: dinX + dinW / 2 + 0.2, maxY: 4.0, minZ: dinZ - dinD / 2 - 0.2, maxZ: dinZ + dinD / 2 + 0.2 })

  // Sofa & Coffee Table
  colliders.add({ minX: loungeX - sofaW / 2 - 0.1, minY: 0, maxX: loungeX + sofaW / 2 + 0.1, maxY: 4.0, minZ: sofaZ - sofaD / 2 - 0.1, maxZ: sofaZ + sofaD / 2 + 0.1 })
  colliders.add({ minX: tableX - tableW / 2 - 0.1, minY: 0, maxX: tableX + tableW / 2 + 0.1, maxY: 4.0, minZ: tableZ - tableD / 2 - 0.1, maxZ: tableZ + tableD / 2 + 0.1 })

  // Corner Plant & Foyer Console
  colliders.add({ minX: plantX - 0.4, minY: 0, maxX: plantX + 0.4, maxY: 4.0, minZ: plantZ - 0.4, maxZ: plantZ + 0.4 })
  colliders.add({ minX: conX - 0.3, minY: 0, maxX: conX + 0.3, maxY: 4.0, minZ: conZ - 0.7, maxZ: conZ + 0.7 })

  // =========================================================================
  // 14. INTERACTION SYSTEM REGISTRATION
  // =========================================================================

  // 1. East Door -> Exit to 4F Elevator Lounge
  interactions.add({
    id: 'hall-to-corridor',
    x: cx + innerW / 2 - 0.5,
    z: cz,
    radius: 1.8,
    prompt: () => 'Exit to 4F Elevator Lounge [廊下・エレベーターホールへ]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('Stepping out into the 4F Elevator Lounge...')
      screenFade(() => {
        player.teleport(-6.0, 65.0, -Math.PI / 2)
        messages.show('Sun Heights 4F Elevator Lounge & Residential Corridor.', 4.0)
      })
    },
  })

  // 2. West Door -> Enter Master Bedroom
  interactions.add({
    id: 'hall-to-bedroom',
    x: cx - innerW / 2 + 0.5,
    z: cz,
    radius: 1.8,
    prompt: () => 'Enter Master Bedroom [ベッドルームへ]',
    onInteract: () => {
      audio?.playElevatorChime()
      messages.show('Entering Master Bedroom...')
      screenFade(() => {
        player.teleport(cx + 4.2, 108.0, -Math.PI / 2)
        messages.show('Suite 402 — Master Bedroom.', 4.0)
      })
    },
  })

  // 3. Residential House Kitchen
  interactions.add({
    id: 'hall-kitchen',
    x: kitX + 0.25,
    z: cz - innerD / 2 + 2.35 + 0.6,
    radius: 1.8,
    prompt: () => 'Make Coffee or Prepare Meal [キッチンで料理・珈琲]',
    onInteract: () => {
      audio?.playSipWaterSound()
      messages.show('☕ Fresh pour-over coffee brewed on the marble island counter. The kitchen is immaculate and warm.')
    },
  })

  // 4. Media Audio Waveform Console
  let audioTrackIndex = 0
  const tracks = [
    '🎵 Now Playing: "Midnight Expressway" — Synthwave Tokyo 80s',
    '🎵 Now Playing: "Rain over Shinjuku" — Chillout Lo-Fi Beats',
    '🎵 Now Playing: "Rooftop Neon Glow" — Ambient City Pop',
  ]
  interactions.add({
    id: 'hall-audio',
    x: mediaX,
    z: mediaZ + 0.6,
    radius: 1.7,
    prompt: () => 'Play Hi-Fi Audio & Synthesizer [オーディオ]',
    onInteract: () => {
      audio?.playSkylineChime()
      const t = tracks[audioTrackIndex % tracks.length]
      audioTrackIndex++
      messages.show(t, 4.5)
    },
  })

  // 5. Living Room Sofa
  interactions.add({
    id: 'hall-sofa',
    x: loungeX,
    z: sofaZ - 0.2,
    radius: 1.8,
    prompt: () => 'Relax on Living Room Sofa [ソファで寛ぐ]',
    onInteract: () => {
      messages.show('🛋️ You sink into the soft navy velvet sofa, looking across the spacious hall and skyline lights.')
    },
  })

  // 6. Coffee Table Art Monograph
  interactions.add({
    id: 'hall-art-book',
    x: tableX,
    z: tableZ,
    radius: 1.5,
    prompt: () => 'Browse Tokyo Art & Architecture Monograph [アートブック]',
    onInteract: () => {
      messages.show('📖 "Modern Architecture // Tokyo Edition 04" — Highlighting brutalist and minimalist residential spaces.')
    },
  })

  // 7. Dining Table
  interactions.add({
    id: 'hall-dining',
    x: dinX,
    z: dinZ,
    radius: 1.6,
    prompt: () => 'Enjoy Matcha Tea at Dining Table [ダイニング]',
    onInteract: () => {
      audio?.playSipWaterSound()
      messages.show('🍵 You enjoy a peaceful moment with hot Uji matcha green tea at the dining table.')
    },
  })

  // 8. House Plant
  interactions.add({
    id: 'hall-plant',
    x: plantX,
    z: plantZ,
    radius: 1.4,
    prompt: () => 'Inspect Architectural Plant [観葉植物]',
    onInteract: () => {
      messages.show('🌿 Healthy indoor snake plant thriving under the ambient suite cove lighting.')
    },
  })

  // =========================================================================
  // 15. RUNTIME ANIMATOR
  // =========================================================================
  let time = 0
  return {
    group: hallGroup,
    update: (dt: number, p: { x: number; z: number }) => {
      // Visibility culling
      hallGroup.visible = p.z >= 74 && p.z < 96
      if (!hallGroup.visible) return

      time += dt
      // Subtle pulse on waveform point light
      waveLight.intensity = 1.1 + Math.sin(time * 3.5) * 0.2
    },
  }
}

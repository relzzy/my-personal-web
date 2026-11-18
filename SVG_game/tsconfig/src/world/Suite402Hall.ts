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
  suiteCuisineSignTexture,
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
  // 6. KITCHENETTE / BREAKFAST BAR ("CUISINE" - NORTH-WEST)
  // =========================================================================
  const kitX = cx - 3.6
  const kitZ = cz - innerD / 2 + 1.15 // ~ 83.25
  const barW = 3.6
  const barD = 0.95
  const barH = 0.92

  // 6.1 "CUISINE" Illuminated Acrylic Sign (North Wall above counter)
  const cuiSignTex = suiteCuisineSignTexture()
  const cuiSignMat = new THREE.MeshStandardMaterial({
    map: cuiSignTex,
    roughness: 0.25,
    metalness: 0.3,
  })
  const cuiSign = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.5, 0.06), cuiSignMat)
  cuiSign.position.set(kitX, floorY + 2.3, cz - innerD / 2 + 0.04)
  hallGroup.add(cuiSign)

  // 6.2 Counter Base Cabinet (Dark Charcoal / Slate with Gold Toe-Kick)
  const barBase = new THREE.Mesh(new THREE.BoxGeometry(barW, barH - 0.08, barD - 0.1), darkMetalMat)
  barBase.position.set(kitX, floorY + (barH - 0.08) / 2, kitZ)
  barBase.castShadow = true
  barBase.receiveShadow = true
  hallGroup.add(barBase)

  const barToeKick = new THREE.Mesh(new THREE.BoxGeometry(barW - 0.04, 0.08, barD - 0.16), goldMat)
  barToeKick.position.set(kitX, floorY + 0.04, kitZ)
  hallGroup.add(barToeKick)

  // 6.3 Carrara Marble Countertop (with waterfall edge profile)
  const barTop = new THREE.Mesh(new THREE.BoxGeometry(barW + 0.08, 0.08, barD + 0.08), marbleMat)
  barTop.position.set(kitX, floorY + barH, kitZ)
  barTop.castShadow = true
  barTop.receiveShadow = true
  hallGroup.add(barTop)

  // 6.4 Undermount Stainless Sink & Chrome Faucet (Left of Counter)
  const sinkMesh = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.01, 0.48), darkMetalMat)
  sinkMesh.position.set(kitX - 1.0, floorY + barH + 0.042, kitZ - 0.1)
  hallGroup.add(sinkMesh)

  const faucetStem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.28, 12), chromeMat)
  faucetStem.position.set(kitX - 1.0, floorY + barH + 0.18, kitZ - 0.3)
  const faucetSpout = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.14), chromeMat)
  faucetSpout.position.set(kitX - 1.0, floorY + barH + 0.31, kitZ - 0.23)
  hallGroup.add(faucetStem, faucetSpout)

  // 6.5 Induction Cooktop (Center of Counter)
  const cooktop = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.01, 0.5), new THREE.MeshStandardMaterial({
    color: 0x0a0e17,
    roughness: 0.1,
    metalness: 0.9,
  }))
  cooktop.position.set(kitX, floorY + barH + 0.042, kitZ - 0.1)
  hallGroup.add(cooktop)

  // Glowing induction cooking circles
  const burnerRing1 = new THREE.Mesh(new THREE.RingGeometry(0.06, 0.09, 24), new THREE.MeshBasicMaterial({ color: 0xf97316 }))
  burnerRing1.rotation.x = -Math.PI / 2
  burnerRing1.position.set(kitX - 0.16, floorY + barH + 0.044, kitZ - 0.1)
  const burnerRing2 = new THREE.Mesh(new THREE.RingGeometry(0.08, 0.12, 24), new THREE.MeshBasicMaterial({ color: 0xf97316 }))
  burnerRing2.rotation.x = -Math.PI / 2
  burnerRing2.position.set(kitX + 0.16, floorY + barH + 0.044, kitZ - 0.1)
  hallGroup.add(burnerRing1, burnerRing2)

  // 6.6 Culinary Board & Food Prep (Right of Counter)
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.02, 0.38), darkWoodMat)
  board.position.set(kitX + 1.05, floorY + barH + 0.045, kitZ - 0.08)
  hallGroup.add(board)

  // Japanese Knife & Citrus Garnish
  const knife = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.008, 0.035), chromeMat)
  knife.rotation.y = 0.25
  knife.position.set(kitX + 1.15, floorY + barH + 0.06, kitZ - 0.08)
  hallGroup.add(knife)

  // 6.7 3 Modern Circular Breakfast Bar Stools
  for (let s = -1; s <= 1; s++) {
    const stoolX = kitX + s * 1.05
    const stoolZ = kitZ + barD / 2 + 0.35
    const stoolH = 0.65

    // Base plate & Stem
    const sBase = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.02, 24), goldMat)
    sBase.position.set(stoolX, floorY + 0.01, stoolZ)
    const sStem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, stoolH, 16), darkMetalMat)
    sStem.position.set(stoolX, floorY + stoolH / 2, stoolZ)
    const sFootRest = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.015, 8, 24), goldMat)
    sFootRest.rotation.x = Math.PI / 2
    sFootRest.position.set(stoolX, floorY + 0.2, stoolZ)

    // Cushioned Swivel Seat
    const sSeat = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.07, 24), navyVelvetMat)
    sSeat.position.set(stoolX, floorY + stoolH + 0.035, stoolZ)
    hallGroup.add(sBase, sStem, sFootRest, sSeat)

    colliders.add({
      minX: stoolX - 0.25,
      minY: 0,
      minZ: stoolZ - 0.25,
      maxX: stoolX + 0.25,
      maxY: 4.0,
      maxZ: stoolZ + 0.25,
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

  // Kitchen Bar Counter
  colliders.add({ minX: kitX - barW / 2 - 0.1, minY: 0, maxX: kitX + barW / 2 + 0.1, maxY: 4.0, minZ: kitZ - barD / 2 - 0.1, maxZ: kitZ + barD / 2 + 0.1 })

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

  // 3. Kitchenette / Cuisine Bar
  interactions.add({
    id: 'hall-cuisine',
    x: kitX,
    z: kitZ + 0.6,
    radius: 1.7,
    prompt: () => 'Prepare Coffee & Refreshments [キッチン]',
    onInteract: () => {
      audio?.playSipWaterSound()
      messages.show('☕ Freshly brewed Tokyo roast espresso prepared at the Cuisine Bar.')
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

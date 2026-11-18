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
  suiteLuxuryRugTexture,
  suiteCurvedMonitorTexture,
  suiteAlarmClockTexture,
  suiteLivingRoomDoorMatTexture,
  suiteAnimePosterCyberpunkTexture,
  suiteAnimePosterMechaTexture,
  suiteAnimePosterGhibliTexture,
  suiteAnimePosterLofiTexture,
  suiteMangaSpinesTexture,
  suiteFlutedWoodTexture,
  balconyTeakDeckTexture,
  sunHeightsFacadeTexture,
  frostedGlassPartitionTexture,
} from './Materials'
import { buildTokyoSkyline } from './buildings/TokyoSkyline'

export interface Suite402Result {
  group: THREE.Group
  update: (dt: number, p: { x: number; z: number }) => void
}

export function buildSuite402(
  scene: THREE.Scene,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
  lightManager?: LightManager,
): Suite402Result {
  const suiteGroup = new THREE.Group()
  suiteGroup.name = 'suite-402-executive-bedroom'
  scene.add(suiteGroup)

  // =========================================================================
  // 1. DIMENSIONS & COORDINATE ORIGIN
  // =========================================================================
  const cx = 0
  const cz = 85
  const floorY = 0.15
  const innerW = 10.6 // East-West width (X: cx - 5.3 to cx + 5.3) - expanded +26%
  const innerD = 7.4  // North-South depth (Z: cz - 3.7 to cz + 3.7) - expanded +32%
  const wallH = 3.0   // Lofty luxury ceiling height
  const wallThick = 0.3

  // =========================================================================
  // 2. LUXURY MATERIALS
  // =========================================================================
  const floorTex = suiteHardwoodFloorTexture()
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex,
    roughness: 0.32,
    metalness: 0.08,
  })

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x141a26,
    roughness: 0.74,
    metalness: 0.05,
  })

  const wallAccentMat = new THREE.MeshStandardMaterial({
    color: 0x0f1420,
    roughness: 0.65,
    metalness: 0.1,
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

  const flutedWoodTex = suiteFlutedWoodTexture()
  const flutedWoodMat = new THREE.MeshStandardMaterial({
    map: flutedWoodTex,
    roughness: 0.45,
    metalness: 0.08,
  })

  const wardrobeWoodMat = new THREE.MeshStandardMaterial({
    color: 0x1b130e,
    roughness: 0.48,
    metalness: 0.05,
  })

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0xf5f3ee,
    roughness: 0.6,
  })

  const coveLedMat = new THREE.MeshBasicMaterial({
    color: 0xfffae6,
    toneMapped: false,
  })

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x7dd3fc,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x1d222e,
    roughness: 0.32,
    metalness: 0.82,
  })

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xdde4ec,
    roughness: 0.15,
    metalness: 0.94,
  })

  const cyanGlowMat = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    toneMapped: false,
  })

  const blueLedMat = new THREE.MeshBasicMaterial({
    color: 0x3a86ff,
    toneMapped: false,
  })

  const navyDuvetMat = new THREE.MeshStandardMaterial({
    color: 0x182030,
    roughness: 0.82,
    metalness: 0.03,
  })

  const whiteLinenMat = new THREE.MeshStandardMaterial({
    color: 0xf4f7fa,
    roughness: 0.8,
    metalness: 0.0,
  })

  const velvetNavyMat = new THREE.MeshStandardMaterial({
    color: 0x131926,
    roughness: 0.88,
    metalness: 0.05,
  })

  const marbleMat = new THREE.MeshStandardMaterial({
    color: 0xedebe8,
    roughness: 0.22,
    metalness: 0.1,
  })

  const plantLeafMat = new THREE.MeshStandardMaterial({
    color: 0x2d6a4f,
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
  suiteGroup.add(floorMesh)

  // 3.2 Suspended Ceiling with Recessed LED Cove Lighting
  const ceilGeo = new THREE.BoxGeometry(innerW, 0.1, innerD)
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilingMat)
  ceilMesh.position.set(cx, floorY + wallH + 0.05, cz)
  suiteGroup.add(ceilMesh)

  // Recessed cove tray
  const coveTrayW = innerW - 1.8
  const coveTrayD = innerD - 1.6
  const trayMesh = new THREE.Mesh(new THREE.BoxGeometry(coveTrayW, 0.06, coveTrayD), ceilingMat)
  trayMesh.position.set(cx, floorY + wallH - 0.02, cz)
  suiteGroup.add(trayMesh)

  // Glowing perimeter LED strip
  const coveEdgeGeo = new THREE.BoxGeometry(coveTrayW + 0.1, 0.02, coveTrayD + 0.1)
  const coveEdge = new THREE.Mesh(coveEdgeGeo, coveLedMat)
  coveEdge.position.set(cx, floorY + wallH - 0.05, cz)
  suiteGroup.add(coveEdge)

  // 3.3 Gold Perimeter Baseboards
  const addBaseboard = (x: number, z: number, w: number, d: number) => {
    const bb = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), goldMat)
    bb.position.set(x, floorY + 0.06, z)
    suiteGroup.add(bb)
  }
  addBaseboard(cx, cz + innerD / 2 - 0.02, innerW, 0.04) // South baseboard
  addBaseboard(cx - innerW / 2 + 0.02, cz, 0.04, innerD) // West baseboard
  addBaseboard(cx - 3.4, cz - innerD / 2 + 0.02, 3.8, 0.04) // North-West baseboard
  addBaseboard(cx + 3.4, cz - innerD / 2 + 0.02, 3.8, 0.04) // North-East baseboard
  addBaseboard(cx + innerW / 2 - 0.02, cz - 1.6, 0.04, 4.2) // East-North baseboard
  addBaseboard(cx + innerW / 2 - 0.02, cz + 2.7, 0.04, 2.0) // East-South baseboard

  // 3.4 Walls & Partitions

  // SOUTH WALL (Solid luxury navy with vertical architectural gold accent fluting)
  const sWallGeo = new THREE.BoxGeometry(innerW + wallThick * 2, wallH, wallThick)
  const sWall = new THREE.Mesh(sWallGeo, wallMat)
  sWall.position.set(cx, floorY + wallH / 2, cz + innerD / 2 + wallThick / 2)
  sWall.castShadow = true
  sWall.receiveShadow = true
  suiteGroup.add(sWall)

  // Vertical gold accent stripes along south accent wall
  for (let sx = -4.5; sx <= 4.5; sx += 1.8) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.04, wallH - 0.35, 0.02), goldMat)
    stripe.position.set(cx + sx, floorY + wallH / 2, cz + innerD / 2 - 0.01)
    suiteGroup.add(stripe)
  }

  // WEST WALL (Battlestation & Headboard wall)
  const wWallGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const wWall = new THREE.Mesh(wWallGeo, wallAccentMat)
  wWall.position.set(cx - innerW / 2 - wallThick / 2, floorY + wallH / 2, cz)
  wWall.castShadow = true
  wWall.receiveShadow = true
  suiteGroup.add(wWall)

  // EAST WALL (With entrance sliding pocket door leading to Corridor 4F)
  // North section of East wall
  const eWallNGeo = new THREE.BoxGeometry(wallThick, wallH, 4.1)
  const eWallN = new THREE.Mesh(eWallNGeo, wallMat)
  eWallN.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz - 1.65)
  suiteGroup.add(eWallN)

  // South section of East wall
  const eWallSGeo = new THREE.BoxGeometry(wallThick, wallH, 1.7)
  const eWallS = new THREE.Mesh(eWallSGeo, wallMat)
  eWallS.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz + 2.85)
  suiteGroup.add(eWallS)

  // Header above East door opening
  const eDoorH = 2.35
  const eDoorTopGeo = new THREE.BoxGeometry(wallThick, wallH - eDoorH, 1.6)
  const eDoorTop = new THREE.Mesh(eDoorTopGeo, wallMat)
  eDoorTop.position.set(cx + innerW / 2 + wallThick / 2, floorY + eDoorH + (wallH - eDoorH) / 2, cz + 1.2)
  suiteGroup.add(eDoorTop)

  // Sliding pocket door slab in walnut with gold hardware
  const eDoorGeo = new THREE.BoxGeometry(0.06, eDoorH, 1.5)
  const eDoorMesh = new THREE.Mesh(eDoorGeo, darkWoodMat)
  eDoorMesh.position.set(cx + innerW / 2 + 0.04, floorY + eDoorH / 2, cz + 1.25)
  suiteGroup.add(eDoorMesh)

  const eDoorHandle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.04), goldMat)
  eDoorHandle.position.set(cx + innerW / 2 - 0.02, floorY + 1.15, cz + 0.75)
  suiteGroup.add(eDoorHandle)

  // Inlaid "LIVING ROOM / SUITE 402" Door Mat
  const matTex = suiteLivingRoomDoorMatTexture()
  const matMat = new THREE.MeshStandardMaterial({
    map: matTex,
    roughness: 0.45,
    metalness: 0.2,
  })
  const matMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.6), matMat)
  matMesh.rotation.x = -Math.PI / 2
  matMesh.position.set(cx + innerW / 2 - 0.55, floorY + 0.052, cz + 1.2)
  suiteGroup.add(matMesh)

  // NORTH WALL (With Grand Balcony Double Glass Sliding Doors)
  // Left wall section
  const nWallLGeo = new THREE.BoxGeometry(3.8, wallH, wallThick)
  const nWallL = new THREE.Mesh(nWallLGeo, wallMat)
  nWallL.position.set(cx - 3.4, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  suiteGroup.add(nWallL)

  // Right wall section
  const nWallRGeo = new THREE.BoxGeometry(3.8, wallH, wallThick)
  const nWallR = new THREE.Mesh(nWallRGeo, wallMat)
  nWallR.position.set(cx + 3.4, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  suiteGroup.add(nWallR)

  // Header above balcony doors
  const bDoorH = 2.5
  const nDoorTopGeo = new THREE.BoxGeometry(3.0, wallH - bDoorH, wallThick)
  const nDoorTop = new THREE.Mesh(nDoorTopGeo, wallMat)
  nDoorTop.position.set(cx, floorY + bDoorH + (wallH - bDoorH) / 2, cz - innerD / 2 - wallThick / 2)
  suiteGroup.add(nDoorTop)

  // Balcony Glass Doors Frame (Gold & Steel Trim)
  const bFrameOuter = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.06, 0.08), goldMat)
  bFrameOuter.position.set(cx, floorY + bDoorH, cz - innerD / 2)
  const bFrameDivider = new THREE.Mesh(new THREE.BoxGeometry(0.06, bDoorH, 0.08), goldMat)
  bFrameDivider.position.set(cx, floorY + bDoorH / 2, cz - innerD / 2)
  suiteGroup.add(bFrameOuter, bFrameDivider)

  // Left & Right Glass Door Panels
  const glassPanelGeo = new THREE.BoxGeometry(1.45, bDoorH - 0.08, 0.03)
  const glassLeft = new THREE.Mesh(glassPanelGeo, glassMat)
  glassLeft.position.set(cx - 0.73, floorY + bDoorH / 2, cz - innerD / 2)
  const glassRight = new THREE.Mesh(glassPanelGeo, glassMat)
  glassRight.position.set(cx + 0.73, floorY + bDoorH / 2, cz - innerD / 2 + 0.02)
  suiteGroup.add(glassLeft, glassRight)

  // Glass door handles
  const handleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.65, 8)
  const handleL = new THREE.Mesh(handleGeo, goldMat)
  handleL.position.set(cx - 0.1, floorY + 1.2, cz - innerD / 2 + 0.03)
  const handleR = new THREE.Mesh(handleGeo, goldMat)
  handleR.position.set(cx + 0.1, floorY + 1.2, cz - innerD / 2 + 0.05)
  suiteGroup.add(handleL, handleR)

  // =========================================================================
  // 4. ARCHITECTURAL EXTERIOR SHELL & CONTINUOUS 7-STORY RESIDENTIAL TOWER
  // =========================================================================
  const balconyD = 2.6
  const balconyW = 4.8
  const balconyZ = cz - innerD / 2 - balconyD / 2 // Z = 80.0
  const buildingHalfW = 9.2 // Facade spans X from -9.2 to +9.2 (18.4m total width)
  const facadeZ = cz - innerD / 2 // Z = 81.3

  // 4.1 Master Architectural Materials for Sun Heights Exterior
  const sunHeightsTileTex = sunHeightsFacadeTexture()
  const sunHeightsTileMat = new THREE.MeshStandardMaterial({
    map: sunHeightsTileTex,
    roughness: 0.72,
    metalness: 0.08,
  })

  const concreteSlabMat = new THREE.MeshStandardMaterial({
    color: 0x1a212e,
    roughness: 0.65,
    metalness: 0.08,
  })

  const concreteTrimMat = new THREE.MeshStandardMaterial({
    color: 0x121722,
    roughness: 0.55,
    metalness: 0.12,
  })

  const bronzeRailMat = new THREE.MeshStandardMaterial({
    color: 0x1c1713,
    roughness: 0.38,
    metalness: 0.85,
  })

  const frostedPartitionTex = frostedGlassPartitionTexture()
  const partitionMat = new THREE.MeshStandardMaterial({
    map: frostedPartitionTex,
    roughness: 0.42,
    metalness: 0.1,
    side: THREE.DoubleSide,
  })

  const balconyGlassMat = new THREE.MeshStandardMaterial({
    color: 0x6ba3d0,
    roughness: 0.05,
    metalness: 0.12,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  const curtainWarmMat = new THREE.MeshBasicMaterial({ color: 0xffe8aa, toneMapped: false })
  const curtainTealMat = new THREE.MeshBasicMaterial({ color: 0xbae6fd, toneMapped: false })
  const railLedMat = new THREE.MeshBasicMaterial({ color: 0xffdf99, toneMapped: false })

  // 4.2 Suite 402 Balcony: Reinforced Concrete Floor Slab (0.32m Thick)
  const slabThick = 0.32
  const bSlabGeo = new THREE.BoxGeometry(balconyW, slabThick, balconyD)
  const bSlab = new THREE.Mesh(bSlabGeo, concreteSlabMat)
  bSlab.position.set(cx, floorY - slabThick / 2, balconyZ)
  bSlab.receiveShadow = true

  const fasciaFront = new THREE.Mesh(new THREE.BoxGeometry(balconyW + 0.06, 0.08, 0.06), concreteTrimMat)
  fasciaFront.position.set(cx, floorY - 0.04, balconyZ - balconyD / 2 - 0.01)
  const fasciaL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, balconyD), concreteTrimMat)
  fasciaL.position.set(cx - balconyW / 2 - 0.01, floorY - 0.04, balconyZ)
  const fasciaR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, balconyD), concreteTrimMat)
  fasciaR.position.set(cx + balconyW / 2 + 0.01, floorY - 0.04, balconyZ)

  // Interlocking Teak Wood Parquet Decking on Top
  const teakTex = balconyTeakDeckTexture()
  const teakDeckMat = new THREE.MeshStandardMaterial({
    map: teakTex,
    roughness: 0.38,
    metalness: 0.05,
  })
  const bTeak = new THREE.Mesh(new THREE.PlaneGeometry(balconyW - 0.04, balconyD - 0.04), teakDeckMat)
  bTeak.rotation.x = -Math.PI / 2
  bTeak.position.set(cx, floorY + 0.005, balconyZ)
  bTeak.receiveShadow = true

  suiteGroup.add(bSlab, fasciaFront, fasciaL, fasciaR, bTeak)

  // 4.3 Japanese Balcony Privacy Divider Screens (*Hedate-ban* 隔て板)
  const partitionDepth = 1.7
  const partitionZ = facadeZ - partitionDepth / 2 // Z = 80.45
  const partitionH = wallH - 0.1

  const createPrivacyPartition = (px: number) => {
    const partGrp = new THREE.Group()

    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.06, partitionH, partitionDepth), bronzeRailMat)
    frame.position.set(0, partitionH / 2, 0)

    const board = new THREE.Mesh(new THREE.PlaneGeometry(partitionDepth - 0.08, partitionH - 0.08), partitionMat)
    board.position.set(px < 0 ? 0.032 : -0.032, partitionH / 2, 0)
    board.rotation.y = px < 0 ? -Math.PI / 2 : Math.PI / 2

    partGrp.add(frame, board)
    partGrp.position.set(px, floorY, partitionZ)
    return partGrp
  }

  const partitionWest = createPrivacyPartition(cx - balconyW / 2)
  const partitionEast = createPrivacyPartition(cx + balconyW / 2)
  suiteGroup.add(partitionWest, partitionEast)

  // 4.4 Balcony Front & Side Railings (Connecting to Privacy Screens)
  const railH = 1.15
  const frontRailZ = balconyZ - balconyD / 2 // Z = 78.7
  const sideRailDepth = balconyD - partitionDepth // 0.9m forward of partition

  const bRailFront = new THREE.Mesh(new THREE.BoxGeometry(balconyW, railH, 0.03), balconyGlassMat)
  bRailFront.position.set(cx, floorY + railH / 2, frontRailZ)

  const bRailSideL = new THREE.Mesh(new THREE.BoxGeometry(0.03, railH, sideRailDepth), balconyGlassMat)
  bRailSideL.position.set(cx - balconyW / 2, floorY + railH / 2, frontRailZ + sideRailDepth / 2)
  const bRailSideR = new THREE.Mesh(new THREE.BoxGeometry(0.03, railH, sideRailDepth), balconyGlassMat)
  bRailSideR.position.set(cx + balconyW / 2, floorY + railH / 2, frontRailZ + sideRailDepth / 2)

  const postGeo = new THREE.BoxGeometry(0.05, railH + 0.02, 0.05)
  const posts = [
    { x: cx - balconyW / 2, z: frontRailZ },
    { x: cx + balconyW / 2, z: frontRailZ },
    { x: cx - balconyW / 6, z: frontRailZ },
    { x: cx + balconyW / 6, z: frontRailZ },
    { x: cx - balconyW / 2, z: frontRailZ + sideRailDepth },
    { x: cx + balconyW / 2, z: frontRailZ + sideRailDepth },
  ]
  for (const p of posts) {
    const post = new THREE.Mesh(postGeo, bronzeRailMat)
    post.position.set(p.x, floorY + railH / 2, p.z)
    suiteGroup.add(post)
  }

  const handrailFront = new THREE.Mesh(new THREE.BoxGeometry(balconyW + 0.08, 0.06, 0.08), bronzeRailMat)
  handrailFront.position.set(cx, floorY + railH + 0.02, frontRailZ)
  const handrailL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, sideRailDepth), bronzeRailMat)
  handrailL.position.set(cx - balconyW / 2, floorY + railH + 0.02, frontRailZ + sideRailDepth / 2)
  const handrailR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, sideRailDepth), bronzeRailMat)
  handrailR.position.set(cx + balconyW / 2, floorY + railH + 0.02, frontRailZ + sideRailDepth / 2)

  const railGlowFront = new THREE.Mesh(new THREE.BoxGeometry(balconyW - 0.1, 0.016, 0.025), railLedMat)
  railGlowFront.position.set(cx, floorY + railH - 0.012, frontRailZ + 0.02)
  const railGlowL = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.016, sideRailDepth - 0.05), railLedMat)
  railGlowL.position.set(cx - balconyW / 2 + 0.02, floorY + railH - 0.012, frontRailZ + sideRailDepth / 2)
  const railGlowR = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.016, sideRailDepth - 0.05), railLedMat)
  railGlowR.position.set(cx + balconyW / 2 - 0.02, floorY + railH - 0.012, frontRailZ + sideRailDepth / 2)

  suiteGroup.add(bRailFront, bRailSideL, bRailSideR, handrailFront, handrailL, handrailR, railGlowFront, railGlowL, railGlowR)

  // 4.5 Adjacent 4F Balconies (Unit 401 on West, Unit 403 on East)
  const adjBalconyW = buildingHalfW - balconyW / 2 // 6.8m wide
  const adjSlabGeo = new THREE.BoxGeometry(adjBalconyW, slabThick, balconyD)

  // Unit 401 Balcony (West)
  const slab401 = new THREE.Mesh(adjSlabGeo, concreteSlabMat)
  slab401.position.set(cx - balconyW / 2 - adjBalconyW / 2, floorY - slabThick / 2, balconyZ)
  const rail401 = new THREE.Mesh(new THREE.BoxGeometry(adjBalconyW, railH, 0.03), balconyGlassMat)
  rail401.position.set(cx - balconyW / 2 - adjBalconyW / 2, floorY + railH / 2, frontRailZ)
  const cap401 = new THREE.Mesh(new THREE.BoxGeometry(adjBalconyW, 0.06, 0.08), bronzeRailMat)
  cap401.position.set(cx - balconyW / 2 - adjBalconyW / 2, floorY + railH + 0.02, frontRailZ)

  const patioDoor401 = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.3), curtainWarmMat)
  patioDoor401.position.set(cx - 5.8, floorY + 1.15, facadeZ + 0.02)
  patioDoor401.rotation.y = Math.PI

  const acUnitGeo = new THREE.BoxGeometry(0.85, 0.65, 0.38)
  const ac401 = new THREE.Mesh(acUnitGeo, darkMetalMat)
  ac401.position.set(cx - 3.2, floorY + 0.35, facadeZ - 0.5)

  // Unit 403 Balcony (East)
  const slab403 = new THREE.Mesh(adjSlabGeo, concreteSlabMat)
  slab403.position.set(cx + balconyW / 2 + adjBalconyW / 2, floorY - slabThick / 2, balconyZ)
  const rail403 = new THREE.Mesh(new THREE.BoxGeometry(adjBalconyW, railH, 0.03), balconyGlassMat)
  rail403.position.set(cx + balconyW / 2 + adjBalconyW / 2, floorY + railH / 2, frontRailZ)
  const cap403 = new THREE.Mesh(new THREE.BoxGeometry(adjBalconyW, 0.06, 0.08), bronzeRailMat)
  cap403.position.set(cx + balconyW / 2 + adjBalconyW / 2, floorY + railH + 0.02, frontRailZ)

  const patioDoor403 = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.3), curtainTealMat)
  patioDoor403.position.set(cx + 5.8, floorY + 1.15, facadeZ + 0.02)
  patioDoor403.rotation.y = Math.PI

  const ac403 = new THREE.Mesh(acUnitGeo, darkMetalMat)
  ac403.position.set(cx + 3.2, floorY + 0.35, facadeZ - 0.5)

  suiteGroup.add(slab401, rail401, cap401, patioDoor401, ac401, slab403, rail403, cap403, patioDoor403, ac403)

  // 4.6 Full Vertical Continuation Above & Below (Floors 1, 2, 3 below; Floors 5, 6, Roof above)
  const totalFloorSpanW = buildingHalfW * 2 // 18.4m
  const fullFloorSlabGeo = new THREE.BoxGeometry(totalFloorSpanW, slabThick, balconyD)
  const fullRailGeo = new THREE.BoxGeometry(totalFloorSpanW, railH, 0.03)
  const fullCapGeo = new THREE.BoxGeometry(totalFloorSpanW, 0.06, 0.08)

  const floorHeightStep = 3.1
  const floorLevels = [
    { level: 3, y: floorY - floorHeightStep, curtain: curtainWarmMat },       // 3F (Y = -2.95)
    { level: 2, y: floorY - floorHeightStep * 2, curtain: curtainTealMat },   // 2F (Y = -6.05)
    { level: 1, y: floorY - floorHeightStep * 3, curtain: curtainWarmMat },   // 1F (Y = -9.15)
    { level: 5, y: floorY + floorHeightStep, curtain: curtainWarmMat },       // 5F (Y = 3.25)
    { level: 6, y: floorY + floorHeightStep * 2, curtain: curtainTealMat },   // 6F (Y = 6.35)
  ]

  for (const fl of floorLevels) {
    const slab = new THREE.Mesh(fullFloorSlabGeo, concreteSlabMat)
    slab.position.set(cx, fl.y - slabThick / 2, balconyZ)

    const rail = new THREE.Mesh(fullRailGeo, balconyGlassMat)
    rail.position.set(cx, fl.y + railH / 2, frontRailZ)
    const cap = new THREE.Mesh(fullCapGeo, bronzeRailMat)
    cap.position.set(cx, fl.y + railH + 0.02, frontRailZ)

    const pL = new THREE.Mesh(new THREE.BoxGeometry(0.04, wallH - 0.2, partitionDepth), bronzeRailMat)
    pL.position.set(cx - balconyW / 2, fl.y + (wallH - 0.2) / 2, partitionZ)
    const pR = new THREE.Mesh(new THREE.BoxGeometry(0.04, wallH - 0.2, partitionDepth), bronzeRailMat)
    pR.position.set(cx + balconyW / 2, fl.y + (wallH - 0.2) / 2, partitionZ)

    const doorL = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.1), fl.curtain)
    doorL.position.set(cx - 5.5, fl.y + 1.1, facadeZ + 0.02)
    doorL.rotation.y = Math.PI
    const doorMid = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.1), fl.curtain)
    doorMid.position.set(cx, fl.y + 1.1, facadeZ + 0.02)
    doorMid.rotation.y = Math.PI
    const doorR = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.1), fl.curtain)
    doorR.position.set(cx + 5.5, fl.y + 1.1, facadeZ + 0.02)
    doorR.rotation.y = Math.PI

    suiteGroup.add(slab, rail, cap, pL, pR, doorL, doorMid, doorR)
  }

  // Recessed warm pin-spots on the underside of 5F balcony (ceiling soffit of Suite 402 balcony)
  const soffitPinMat = new THREE.MeshBasicMaterial({ color: 0xfff0cc, toneMapped: false })
  for (const px of [-1.2, 1.2]) {
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12), soffitPinMat)
    pin.position.set(cx + px, floorY + wallH - 0.02, balconyZ)
    suiteGroup.add(pin)
  }

  // Heavy Vertical Structural Concrete Piers running from Ground (Y = -12.5) to Roof (Y = 10.0)
  const totalFacadeH = 22.5
  const pierGeo = new THREE.BoxGeometry(0.35, totalFacadeH, 0.35)
  for (const px of [cx - buildingHalfW, cx - balconyW / 2, cx + balconyW / 2, cx + buildingHalfW]) {
    const pier = new THREE.Mesh(pierGeo, concreteTrimMat)
    pier.position.set(px, floorY - 1.25, frontRailZ + 0.15)
    suiteGroup.add(pier)
  }

  // Vertical Rainwater Downspout Pipes along the outer facade corners
  const downspoutGeo = new THREE.CylinderGeometry(0.045, 0.045, totalFacadeH, 8)
  for (const px of [cx - buildingHalfW + 0.2, cx + buildingHalfW - 0.2]) {
    const pipe = new THREE.Mesh(downspoutGeo, darkMetalMat)
    pipe.position.set(px, floorY - 1.25, facadeZ - 0.1)
    suiteGroup.add(pipe)
  }

  // Roof Parapet Wall & Mechanical Penthouse (Y = 9.45 to 12.0)
  const roofParapetY = floorY + floorHeightStep * 3 // Y = 9.45
  const roofParapet = new THREE.Mesh(new THREE.BoxGeometry(totalFloorSpanW, 0.9, 0.3), concreteTrimMat)
  roofParapet.position.set(cx, roofParapetY + 0.45, frontRailZ)

  const penthouse = new THREE.Mesh(new THREE.BoxGeometry(6.0, 2.5, 6.0), sunHeightsTileMat)
  penthouse.position.set(cx, roofParapetY + 1.25, facadeZ + 3.0)

  // Roof Obstruction Beacon on Rooftop Antenna
  const roofAntenna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.2, 5.0, 8), darkMetalMat)
  roofAntenna.position.set(cx + 4.0, roofParapetY + 2.5, facadeZ + 2.0)
  const roofBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff2222, toneMapped: false }))
  roofBeacon.position.set(cx + 4.0, roofParapetY + 5.1, facadeZ + 2.0)
  suiteGroup.add(roofParapet, penthouse, roofAntenna, roofBeacon)

  // 4.7 Continuous Building Side Return Walls (East & West)
  const sideWallGeo = new THREE.BoxGeometry(0.35, totalFacadeH, 9.5)
  const sideWallWest = new THREE.Mesh(sideWallGeo, sunHeightsTileMat)
  sideWallWest.position.set(cx - buildingHalfW, floorY - 1.25, facadeZ + 4.5)
  const sideWallEast = new THREE.Mesh(sideWallGeo, sunHeightsTileMat)
  sideWallEast.position.set(cx + buildingHalfW, floorY - 1.25, facadeZ + 4.5)

  const ventWindowMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, toneMapped: false })
  for (let wy = -6.0; wy <= 6.0; wy += 3.1) {
    const ventW = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.6), ventWindowMat)
    ventW.position.set(cx - buildingHalfW - 0.18, floorY + wy + 1.2, facadeZ + 4.5)
    ventW.rotation.y = -Math.PI / 2
    const ventE = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.6), ventWindowMat)
    ventE.position.set(cx + buildingHalfW + 0.18, floorY + wy + 1.2, facadeZ + 4.5)
    ventE.rotation.y = Math.PI / 2
    suiteGroup.add(ventW, ventE)
  }

  suiteGroup.add(sideWallWest, sideWallEast)

  // 4.8 Exterior Architectural Wall Sconces (Flanking Sliding Glass Doors)
  const sconceGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.28, 8)
  const sconceLensMat = new THREE.MeshBasicMaterial({ color: 0xffe2a8, toneMapped: false })
  for (const sx of [-1.9, 1.9]) {
    const sconce = new THREE.Mesh(sconceGeo, darkMetalMat)
    sconce.position.set(cx + sx, floorY + 1.8, facadeZ - 0.04)

    const lensTop = new THREE.Mesh(new THREE.CircleGeometry(0.034, 8), sconceLensMat)
    lensTop.rotation.x = -Math.PI / 2
    lensTop.position.set(cx + sx, floorY + 1.94, facadeZ - 0.04)

    const lensBot = new THREE.Mesh(new THREE.CircleGeometry(0.034, 8), sconceLensMat)
    lensBot.rotation.x = Math.PI / 2
    lensBot.position.set(cx + sx, floorY + 1.66, facadeZ - 0.04)

    suiteGroup.add(sconce, lensTop, lensBot)
  }

  // 4.9 Aesthetic Outdoor Balcony Furniture (Lounge Chair, Bistro Table, Planter)
  const chairBX = cx - 1.5
  const chairBZ = balconyZ - 0.15
  const chairFrameMat = new THREE.MeshStandardMaterial({ color: 0x1f1915, roughness: 0.55 })
  const cushionMat = new THREE.MeshStandardMaterial({ color: 0x2e3542, roughness: 0.85 })
  const throwMat = new THREE.MeshStandardMaterial({ color: 0xf5f3ee, roughness: 0.9 })

  const bChairBase = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.06, 0.75), chairFrameMat)
  bChairBase.position.set(chairBX, floorY + 0.22, chairBZ)
  bChairBase.rotation.y = 0.35

  for (const lx of [-0.32, 0.32]) {
    for (const lz of [-0.32, 0.32]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.015, 0.22, 6), chairFrameMat)
      const rotated = new THREE.Vector3(lx, 0, lz).applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.35)
      leg.position.set(chairBX + rotated.x, floorY + 0.11, chairBZ + rotated.z)
      suiteGroup.add(leg)
    }
  }

  const seatCushion = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.12, 0.68), cushionMat)
  seatCushion.position.set(chairBX, floorY + 0.31, chairBZ)
  seatCushion.rotation.y = 0.35

  const backCushion = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.45, 0.12), cushionMat)
  const backOffset = new THREE.Vector3(0, 0, 0.32).applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.35)
  backCushion.position.set(chairBX + backOffset.x, floorY + 0.54, chairBZ + backOffset.z)
  backCushion.rotation.y = 0.35
  backCushion.rotation.x = 0.12

  const throwBlanket = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.42), throwMat)
  const throwOffset = new THREE.Vector3(-0.25, 0, 0.1).applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.35)
  throwBlanket.position.set(chairBX + throwOffset.x, floorY + 0.38, chairBZ + throwOffset.z)
  throwBlanket.rotation.y = 0.35

  suiteGroup.add(bChairBase, seatCushion, backCushion, throwBlanket)

  // Minimalist Round Bistro Side Table
  const tableBX = cx - 0.7
  const tableBZ = balconyZ - 0.65
  const tableTopH = 0.55

  const pedestalGeo = new THREE.CylinderGeometry(0.04, 0.18, tableTopH - 0.03, 16)
  const pedestal = new THREE.Mesh(pedestalGeo, bronzeRailMat)
  pedestal.position.set(tableBX, floorY + (tableTopH - 0.03) / 2, tableBZ)

  const marbleTopGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.03, 24)
  const blackMarbleMat = new THREE.MeshStandardMaterial({
    color: 0x161a22,
    roughness: 0.18,
    metalness: 0.1,
  })
  const marbleTop = new THREE.Mesh(marbleTopGeo, blackMarbleMat)
  marbleTop.position.set(tableBX, floorY + tableTopH, tableBZ)

  const balconyMug = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.032, 0.08, 12), whiteLinenMat)
  balconyMug.position.set(tableBX + 0.08, floorY + tableTopH + 0.055, tableBZ - 0.04)
  const balconyCoffee = new THREE.Mesh(new THREE.CircleGeometry(0.03, 12), new THREE.MeshBasicMaterial({ color: 0x1a0f0a }))
  balconyCoffee.rotation.x = -Math.PI / 2
  balconyCoffee.position.set(tableBX + 0.08, floorY + tableTopH + 0.092, tableBZ - 0.04)

  const votiveGlass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.038, 0.034, 0.07, 12),
    new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, roughness: 0.1 }),
  )
  votiveGlass.position.set(tableBX - 0.07, floorY + tableTopH + 0.05, tableBZ + 0.05)

  const candleFlameMat = new THREE.MeshBasicMaterial({ color: 0xff9900, toneMapped: false })
  const candleFlame = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), candleFlameMat)
  candleFlame.scale.set(1, 1.8, 1)
  candleFlame.position.set(tableBX - 0.07, floorY + tableTopH + 0.065, tableBZ + 0.05)

  suiteGroup.add(pedestal, marbleTop, balconyMug, balconyCoffee, votiveGlass, candleFlame)

  // Architectural Fluted Planter with Japanese Bamboo (East side)
  const planterBX = cx + 1.75
  const planterBZ = balconyZ + 0.35
  const planterH = 0.65
  const planterGeo = new THREE.CylinderGeometry(0.24, 0.2, planterH, 16)
  const planterMat = new THREE.MeshStandardMaterial({ color: 0x1a212b, roughness: 0.65 })
  const planter = new THREE.Mesh(planterGeo, planterMat)
  planter.position.set(planterBX, floorY + planterH / 2, planterBZ)

  const soilGeo = new THREE.CircleGeometry(0.22, 16)
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x1f1712, roughness: 0.9 })
  const soil = new THREE.Mesh(soilGeo, soilMat)
  soil.rotation.x = -Math.PI / 2
  soil.position.set(planterBX, floorY + planterH - 0.02, planterBZ)

  const bambooMat = new THREE.MeshStandardMaterial({ color: 0x3d704d, roughness: 0.55 })
  const bambooLeafMat = new THREE.MeshStandardMaterial({ color: 0x4f8a61, roughness: 0.65, side: THREE.DoubleSide })
  const stalkOffsets = [
    { x: -0.08, z: -0.06, h: 1.8, r: 0.018 },
    { x: 0.07, z: -0.05, h: 2.1, r: 0.02 },
    { x: 0.01, z: 0.08, h: 1.95, r: 0.019 },
  ]
  for (const s of stalkOffsets) {
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(s.r, s.r * 1.1, s.h, 8), bambooMat)
    stalk.position.set(planterBX + s.x, floorY + planterH + s.h / 2, planterBZ + s.z)
    suiteGroup.add(stalk)

    for (let nh = 0.35; nh < s.h; nh += 0.35) {
      const node = new THREE.Mesh(new THREE.TorusGeometry(s.r + 0.003, 0.004, 6, 12), darkWoodMat)
      node.rotation.x = Math.PI / 2
      node.position.set(planterBX + s.x, floorY + planterH + nh, planterBZ + s.z)
      suiteGroup.add(node)
    }

    for (let a = 0; a < 4; a++) {
      const leafGeo = new THREE.PlaneGeometry(0.28, 0.08)
      const leaf = new THREE.Mesh(leafGeo, bambooLeafMat)
      const leafAngle = (a * Math.PI) / 2 + Math.random() * 0.3
      leaf.position.set(
        planterBX + s.x + Math.cos(leafAngle) * 0.12,
        floorY + planterH + s.h - 0.2 + a * 0.06,
        planterBZ + s.z + Math.sin(leafAngle) * 0.12,
      )
      leaf.rotation.y = leafAngle
      leaf.rotation.z = -0.25
      suiteGroup.add(leaf)
    }
  }

  suiteGroup.add(planter, soil)

  // 4.10 Integrate Re-Engineered Hybrid Tokyo City Environment
  const tokyoSkyline = buildTokyoSkyline(cx, cz)
  suiteGroup.add(tokyoSkyline.group)

  // =========================================================================
  // 5. CYBER GAMING WORKSTATION (NORTH-WEST WALL)
  // [ERGONOMICS FIX]: Desk faces West against the West wall. The chair faces
  // West towards the screen; its backrest faces East into the room, NEVER into the bed.
  // =========================================================================
  const deskX = cx - 4.8    // Pushed against West wall
  const deskZ = cz - 2.3    // North-West zone (82.7)
  const deskW = 0.9        // Along X (depth into room)
  const deskL = 2.0        // Along Z (width of desk)
  const deskH = 0.76

  // 5.1 Walnut Desk Top with Gold Perimeter Inlay
  const deskTopGeo = new THREE.BoxGeometry(deskW, 0.05, deskL)
  const deskTop = new THREE.Mesh(deskTopGeo, darkWoodMat)
  deskTop.position.set(deskX, floorY + deskH - 0.025, deskZ)
  deskTop.castShadow = true
  deskTop.receiveShadow = true

  const deskGoldTrim = new THREE.Mesh(new THREE.BoxGeometry(deskW + 0.02, 0.02, deskL + 0.02), goldMat)
  deskGoldTrim.position.set(deskX, floorY + deskH - 0.04, deskZ)
  suiteGroup.add(deskTop, deskGoldTrim)

  // Heavy square legs
  const legGeo = new THREE.BoxGeometry(0.07, deskH, 0.07)
  const legPositions = [
    { x: deskX - deskW / 2 + 0.06, z: deskZ - deskL / 2 + 0.06 },
    { x: deskX + deskW / 2 - 0.06, z: deskZ - deskL / 2 + 0.06 },
    { x: deskX - deskW / 2 + 0.06, z: deskZ + deskL / 2 - 0.06 },
    { x: deskX + deskW / 2 - 0.06, z: deskZ + deskL / 2 - 0.06 },
  ]
  for (const lp of legPositions) {
    const leg = new THREE.Mesh(legGeo, darkMetalMat)
    leg.position.set(lp.x, floorY + deskH / 2, lp.z)
    suiteGroup.add(leg)
  }

  // Extended Leather Desk Mat / RGB Mousepad
  const padMat = new THREE.MeshStandardMaterial({ color: 0x111620, roughness: 0.88 })
  const padMesh = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.008, 1.4), padMat)
  padMesh.position.set(deskX + 0.06, floorY + deskH + 0.004, deskZ)
  suiteGroup.add(padMesh)

  // 5.2 Curved Ultra-Wide Gaming Monitor (Facing East towards user)
  const monitorTex = suiteCurvedMonitorTexture()
  const monMat = new THREE.MeshBasicMaterial({ map: monitorTex, toneMapped: false })

  // Monitor Stand
  const monStandBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.02, 16), darkMetalMat)
  monStandBase.position.set(deskX - 0.25, floorY + deskH + 0.01, deskZ)
  const monStandStem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.35, 0.06), darkMetalMat)
  monStandStem.position.set(deskX - 0.25, floorY + deskH + 0.18, deskZ)
  suiteGroup.add(monStandBase, monStandStem)

  // Curved display segments (facing +X East)
  const monCenter = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.38), monMat)
  monCenter.rotation.y = Math.PI / 2
  monCenter.position.set(deskX - 0.16, floorY + deskH + 0.38, deskZ)

  const monWingGeo = new THREE.PlaneGeometry(0.24, 0.38)
  const monWingL = new THREE.Mesh(monWingGeo, monMat)
  monWingL.rotation.y = Math.PI / 2 + 0.22
  monWingL.position.set(deskX - 0.13, floorY + deskH + 0.38, deskZ - 0.42)

  const monWingR = new THREE.Mesh(monWingGeo, monMat)
  monWingR.rotation.y = Math.PI / 2 - 0.22
  monWingR.position.set(deskX - 0.13, floorY + deskH + 0.38, deskZ + 0.42)

  // Monitor Back Enclosure
  const monBack = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.4, 1.1), darkMetalMat)
  monBack.position.set(deskX - 0.18, floorY + deskH + 0.38, deskZ)

  // Cyan glowing light strip behind the monitor
  const monGlowStrip = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.9), cyanGlowMat)
  monGlowStrip.position.set(deskX - 0.2, floorY + deskH + 0.38, deskZ)
  suiteGroup.add(monCenter, monWingL, monWingR, monBack, monGlowStrip)

  // 5.3 Desktop Studio Audio Speakers
  const speakerGeo = new THREE.BoxGeometry(0.14, 0.22, 0.12)
  const spkL = new THREE.Mesh(speakerGeo, darkMetalMat)
  spkL.position.set(deskX - 0.12, floorY + deskH + 0.11, deskZ - 0.65)
  spkL.rotation.y = 0.25
  const spkR = new THREE.Mesh(speakerGeo, darkMetalMat)
  spkR.position.set(deskX - 0.12, floorY + deskH + 0.11, deskZ + 0.65)
  spkR.rotation.y = -0.25

  // Gold driver cones on speakers
  const coneGeo = new THREE.CircleGeometry(0.035, 12)
  const coneL = new THREE.Mesh(coneGeo, goldMat)
  coneL.rotation.y = Math.PI / 2 + 0.25
  coneL.position.set(deskX - 0.05, floorY + deskH + 0.1, deskZ - 0.63)
  const coneR = new THREE.Mesh(coneGeo, goldMat)
  coneR.rotation.y = Math.PI / 2 - 0.25
  coneR.position.set(deskX - 0.05, floorY + deskH + 0.1, deskZ + 0.63)
  suiteGroup.add(spkL, spkR, coneL, coneR)

  // 5.4 High-End Gaming PC Chassis (North corner of desk)
  const pcX = deskX - 0.05
  const pcZ = deskZ - 0.78
  const pcW = 0.52 // along X
  const pcD = 0.24 // along Z
  const pcH = 0.46

  const pcCase = new THREE.Mesh(new THREE.BoxGeometry(pcW, pcH, pcD), darkMetalMat)
  pcCase.position.set(pcX, floorY + deskH + pcH / 2, pcZ)

  // Tempered glass side panel facing South (+Z)
  const pcGlass = new THREE.Mesh(new THREE.PlaneGeometry(pcW - 0.04, pcH - 0.04), glassMat)
  pcGlass.position.set(pcX, floorY + deskH + pcH / 2, pcZ + pcD / 2 + 0.005)

  // Internal glowing components (GPU, RAM, dual LED front intake fans)
  const pcGpu = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.04), cyanGlowMat)
  pcGpu.position.set(pcX - 0.04, floorY + deskH + 0.18, pcZ + 0.02)

  const fanGeo = new THREE.RingGeometry(0.045, 0.065, 16)
  const fan1 = new THREE.Mesh(fanGeo, cyanGlowMat)
  fan1.rotation.y = Math.PI / 2
  fan1.position.set(pcX + pcW / 2 + 0.005, floorY + deskH + 0.15, pcZ)
  const fan2 = new THREE.Mesh(fanGeo, cyanGlowMat)
  fan2.rotation.y = Math.PI / 2
  fan2.position.set(pcX + pcW / 2 + 0.005, floorY + deskH + 0.32, pcZ)

  // Power LED button
  const pwrBtn = new THREE.Mesh(new THREE.CircleGeometry(0.012, 12), cyanGlowMat)
  pwrBtn.rotation.x = -Math.PI / 2
  pwrBtn.position.set(pcX + pcW / 2 - 0.04, floorY + deskH + pcH + 0.002, pcZ)
  suiteGroup.add(pcCase, pcGlass, pcGpu, fan1, fan2, pwrBtn)

  // 5.5 Mechanical Keyboard & Gaming Mouse
  const kbGeo = new THREE.BoxGeometry(0.16, 0.015, 0.44)
  const kbMat = new THREE.MeshStandardMaterial({ color: 0x1b202c, roughness: 0.4 })
  const kb = new THREE.Mesh(kbGeo, kbMat)
  kb.position.set(deskX + 0.08, floorY + deskH + 0.015, deskZ)

  // Cyan key glow strip
  const kbGlow = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.004, 0.42), cyanGlowMat)
  kbGlow.position.set(deskX + 0.08, floorY + deskH + 0.024, deskZ)

  // Mouse with RGB scroll wheel
  const mouseGeo = new THREE.BoxGeometry(0.12, 0.025, 0.07)
  const mouse = new THREE.Mesh(mouseGeo, darkMetalMat)
  mouse.position.set(deskX + 0.08, floorY + deskH + 0.018, deskZ + 0.35)

  const wheelGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.018, 8)
  const wheel = new THREE.Mesh(wheelGeo, cyanGlowMat)
  wheel.position.set(deskX + 0.04, floorY + deskH + 0.032, deskZ + 0.35)
  suiteGroup.add(kb, kbGlow, mouse, wheel)

  // 5.6 Ceramic Coffee Mug
  const mugGeo = new THREE.CylinderGeometry(0.04, 0.038, 0.09, 16)
  const mug = new THREE.Mesh(mugGeo, whiteLinenMat)
  mug.position.set(deskX + 0.15, floorY + deskH + 0.045, deskZ - 0.38)

  const coffeeGeo = new THREE.CircleGeometry(0.036, 16)
  const coffee = new THREE.Mesh(coffeeGeo, new THREE.MeshBasicMaterial({ color: 0x2e1910 }))
  coffee.rotation.x = -Math.PI / 2
  coffee.position.set(deskX + 0.15, floorY + deskH + 0.088, deskZ - 0.38)
  suiteGroup.add(mug, coffee)

  // 5.7 Ergonomic Swivel Mesh Office Chair
  // [PROPER ERGONOMIC ORIENTATION]: Faces WEST into the desk/monitor.
  // Backrest is on the EAST (+X) side facing the open room.
  const chairX = deskX + 0.85 // 82.7 in Z, -3.95 in X
  const chairZ = deskZ

  const chairBase = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.38, 8), chromeMat)
  chairBase.position.set(chairX, floorY + 0.19, chairZ)

  // 5-star legs
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5
    const cLegGeo = new THREE.BoxGeometry(0.32, 0.02, 0.04)
    const cLeg = new THREE.Mesh(cLegGeo, chromeMat)
    cLeg.position.set(chairX + Math.cos(angle) * 0.16, floorY + 0.06, chairZ + Math.sin(angle) * 0.16)
    cLeg.rotation.y = -angle
    suiteGroup.add(cLeg)
  }

  // Contoured mesh seat
  const seatGeo = new THREE.BoxGeometry(0.5, 0.07, 0.52)
  const seat = new THREE.Mesh(seatGeo, new THREE.MeshStandardMaterial({ color: 0x161a22, roughness: 0.85 }))
  seat.position.set(chairX, floorY + 0.44, chairZ)

  // High curved mesh backrest on East (+X) side facing open room
  const backGeo = new THREE.BoxGeometry(0.04, 0.65, 0.48)
  const back = new THREE.Mesh(backGeo, new THREE.MeshStandardMaterial({ color: 0x1d222e, roughness: 0.9 }))
  back.position.set(chairX + 0.24, floorY + 0.82, chairZ)
  back.rotation.z = -0.1 // Ergonomic lean

  // Armrests (North & South)
  const armN = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.06), darkMetalMat)
  armN.position.set(chairX + 0.05, floorY + 0.56, chairZ - 0.28)
  const armS = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.06), darkMetalMat)
  armS.position.set(chairX + 0.05, floorY + 0.56, chairZ + 0.28)
  suiteGroup.add(chairBase, seat, back, armN, armS)

  // =========================================================================
  // 6. MASTER PLATFORM BED & DUAL NIGHTSTANDS (SOUTH-WEST)
  // =========================================================================
  const bedX = cx - 4.1    // West wall zone
  const bedZ = cz + 1.2    // South-West zone (86.2)
  const bedW = 2.3         // Along X (extends from West wall towards center)
  const bedD = 2.0         // Along Z

  // Recessed floating shadow base
  const bedBase = new THREE.Mesh(new THREE.BoxGeometry(bedW - 0.2, 0.16, bedD - 0.2), darkMetalMat)
  bedBase.position.set(bedX, floorY + 0.08, bedZ)

  // Platform Frame with Polished Brass Trim
  const frameGeo = new THREE.BoxGeometry(bedW, 0.18, bedD)
  const bedFrame = new THREE.Mesh(frameGeo, darkWoodMat)
  bedFrame.position.set(bedX, floorY + 0.25, bedZ)

  const bedGoldBorder = new THREE.Mesh(new THREE.BoxGeometry(bedW + 0.02, 0.02, bedD + 0.02), goldMat)
  bedGoldBorder.position.set(bedX, floorY + 0.34, bedZ)
  suiteGroup.add(bedBase, bedFrame, bedGoldBorder)

  // Grand Headboard against West wall
  const hbGeo = new THREE.BoxGeometry(0.12, 1.35, bedD + 0.3)
  const headboard = new THREE.Mesh(hbGeo, darkWoodMat)
  headboard.position.set(cx - innerW / 2 + 0.06, floorY + 0.76, bedZ)

  // Fluted wood headboard insert
  const hbFlute = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.1, bedD + 0.15), flutedWoodMat)
  hbFlute.position.set(cx - innerW / 2 + 0.12, floorY + 0.76, bedZ)

  // Gold inlay frame around headboard
  const hbGold = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, bedD + 0.25), goldMat)
  hbGold.position.set(cx - innerW / 2 + 0.14, floorY + 1.28, bedZ)
  suiteGroup.add(headboard, hbFlute, hbGold)

  // Mattress & Deep Midnight Navy Duvet
  const duvetGeo = new THREE.BoxGeometry(bedW - 0.12, 0.24, bedD - 0.08)
  const duvet = new THREE.Mesh(duvetGeo, navyDuvetMat)
  duvet.position.set(bedX + 0.04, floorY + 0.46, bedZ)
  duvet.castShadow = true

  // White Top Sheet Turn-Down Cuff
  const cuffGeo = new THREE.BoxGeometry(0.25, 0.08, bedD - 0.12)
  const cuff = new THREE.Mesh(cuffGeo, whiteLinenMat)
  cuff.position.set(bedX - 0.75, floorY + 0.55, bedZ)

  // Navy Bed Runner with Gold Piping (Foot of bed)
  const runnerMat = new THREE.MeshStandardMaterial({ color: 0x101522, roughness: 0.78 })
  const runnerGeo = new THREE.BoxGeometry(0.48, 0.04, bedD - 0.06)
  const runner = new THREE.Mesh(runnerGeo, runnerMat)
  runner.position.set(bedX + 0.75, floorY + 0.58, bedZ)

  const runnerGold1 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, bedD - 0.06), goldMat)
  runnerGold1.position.set(bedX + 0.51, floorY + 0.6, bedZ)
  const runnerGold2 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, bedD - 0.06), goldMat)
  runnerGold2.position.set(bedX + 0.99, floorY + 0.6, bedZ)
  suiteGroup.add(duvet, cuff, runner, runnerGold1, runnerGold2)

  // 4 Plush Pillows (2 white linen, 2 navy accent)
  const pillowGeo = new THREE.BoxGeometry(0.42, 0.14, 0.7)
  const pillow1 = new THREE.Mesh(pillowGeo, whiteLinenMat)
  pillow1.position.set(bedX - 0.82, floorY + 0.58, bedZ - 0.45)
  const pillow2 = new THREE.Mesh(pillowGeo, whiteLinenMat)
  pillow2.position.set(bedX - 0.82, floorY + 0.58, bedZ + 0.45)

  const pillowAccGeo = new THREE.BoxGeometry(0.32, 0.12, 0.52)
  const pAcc1 = new THREE.Mesh(pillowAccGeo, velvetNavyMat)
  pAcc1.position.set(bedX - 0.55, floorY + 0.59, bedZ - 0.45)
  const pAcc2 = new THREE.Mesh(pillowAccGeo, velvetNavyMat)
  pAcc2.position.set(bedX - 0.55, floorY + 0.59, bedZ + 0.45)
  suiteGroup.add(pillow1, pillow2, pAcc1, pAcc2)

  // 6.1 DUAL SYMMETRICAL NIGHTSTANDS
  const nsW = 0.75 // along X
  const nsD = 0.65 // along Z
  const nsH = 0.54
  const lampGlobeMat = new THREE.MeshBasicMaterial({ color: 0xfffae0, toneMapped: false })

  const createNightstand = (nsZPos: number) => {
    const nsMesh = new THREE.Mesh(new THREE.BoxGeometry(nsW, nsH, nsD), darkWoodMat)
    nsMesh.position.set(cx - innerW / 2 + nsW / 2 + 0.05, floorY + nsH / 2, nsZPos)

    const nsGold = new THREE.Mesh(new THREE.BoxGeometry(nsW + 0.01, 0.015, nsD + 0.01), goldMat)
    nsGold.position.set(cx - innerW / 2 + nsW / 2 + 0.05, floorY + nsH - 0.01, nsZPos)

    const nsDrawerHandle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.025, 0.28), goldMat)
    nsDrawerHandle.position.set(cx - innerW / 2 + nsW + 0.055, floorY + nsH * 0.65, nsZPos)
    suiteGroup.add(nsMesh, nsGold, nsDrawerHandle)

    // Designer Spherical Table Lamp
    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.02, 16), goldMat)
    lampBase.position.set(cx - innerW / 2 + nsW / 2 + 0.05, floorY + nsH + 0.01, nsZPos)

    const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 8), goldMat)
    lampStem.position.set(cx - innerW / 2 + nsW / 2 + 0.05, floorY + nsH + 0.12, nsZPos)

    const lampGlobe = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 16), lampGlobeMat)
    lampGlobe.position.set(cx - innerW / 2 + nsW / 2 + 0.05, floorY + nsH + 0.28, nsZPos)
    suiteGroup.add(lampBase, lampStem, lampGlobe)

    return { lampGlobe, posX: cx - innerW / 2 + nsW / 2 + 0.05, posZ: nsZPos }
  }

  // North Nightstand (Z: 84.4)
  const nsNorth = createNightstand(bedZ - bedD / 2 - nsD / 2 - 0.15)
  // South Nightstand (Z: 88.0)
  const nsSouth = createNightstand(bedZ + bedD / 2 + nsD / 2 + 0.15)

  // Digital LED Alarm Clock on North Nightstand
  const clockTex = suiteAlarmClockTexture()
  const clockMat = new THREE.MeshBasicMaterial({ map: clockTex, toneMapped: false })
  const clockCase = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.1), darkMetalMat)
  clockCase.position.set(nsNorth.posX + 0.12, floorY + nsH + 0.04, nsNorth.posZ + 0.14)
  clockCase.rotation.y = -0.35

  const clockScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.07), clockMat)
  clockScreen.position.set(nsNorth.posX + 0.12 + Math.sin(-0.35) * 0.052, floorY + nsH + 0.04, nsNorth.posZ + 0.14 + Math.cos(-0.35) * 0.052)
  clockScreen.rotation.y = -0.35
  suiteGroup.add(clockCase, clockScreen)

  // Hardcover Books Stack on South Nightstand
  const book1 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.035, 0.16), new THREE.MeshStandardMaterial({ color: 0x8b1a1a, roughness: 0.6 }))
  book1.position.set(nsSouth.posX + 0.08, floorY + nsH + 0.02, nsSouth.posZ - 0.12)
  book1.rotation.y = 0.15
  const book2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.03, 0.15), new THREE.MeshStandardMaterial({ color: 0x1b3b2b, roughness: 0.6 }))
  book2.position.set(nsSouth.posX + 0.09, floorY + nsH + 0.05, nsSouth.posZ - 0.13)
  book2.rotation.y = -0.08
  suiteGroup.add(book1, book2)

  // =========================================================================
  // 7. GRAND LUXURY WARDROBE (EAST WALL)
  // [NEW LUXURY WARDROBE]: Generous 2.2m width, fluted dark walnut doors,
  // crown cornice, gold pull handles, and integrated LED accent downlighting.
  // =========================================================================
  const wardX = cx + innerW / 2 - 0.42 // East wall zone (4.88)
  const wardZ = cz - 1.8               // North-East zone (83.2)
  const wardD = 0.76                   // Along X (depth into room)
  const wardW = 2.2                    // Along Z (width of wardrobe)
  const wardH = 2.55                   // Grand ceiling height

  // Main Carcass
  const wardCarcass = new THREE.Mesh(new THREE.BoxGeometry(wardD, wardH, wardW), wardrobeWoodMat)
  wardCarcass.position.set(wardX, floorY + wardH / 2, wardZ)
  wardCarcass.castShadow = true

  // Crown Molding Cornice with Gold Inlay
  const cornice = new THREE.Mesh(new THREE.BoxGeometry(wardD + 0.08, 0.12, wardW + 0.08), darkWoodMat)
  cornice.position.set(wardX, floorY + wardH + 0.05, wardZ)

  const corniceGold = new THREE.Mesh(new THREE.BoxGeometry(wardD + 0.1, 0.02, wardW + 0.1), goldMat)
  corniceGold.position.set(wardX, floorY + wardH + 0.015, wardZ)
  suiteGroup.add(wardCarcass, cornice, corniceGold)

  // Triple Symmetrical Fluted Doors facing West (-X)
  const numDoors = 3
  const doorWidthZ = (wardW - 0.08) / numDoors
  for (let d = 0; d < numDoors; d++) {
    const doorCenterZ = wardZ - wardW / 2 + 0.04 + doorWidthZ * (d + 0.5)

    // Door slab
    const doorMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, wardH - 0.18, doorWidthZ - 0.02), wardrobeWoodMat)
    doorMesh.position.set(wardX - wardD / 2 - 0.01, floorY + wardH / 2 - 0.02, doorCenterZ)

    // Recessed fluted wood insert
    const doorFlute = new THREE.Mesh(new THREE.BoxGeometry(0.015, wardH - 0.32, doorWidthZ - 0.08), flutedWoodMat)
    doorFlute.position.set(wardX - wardD / 2 - 0.02, floorY + wardH / 2 - 0.02, doorCenterZ)

    // Brushed gold vertical pull handle
    const handleWard = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.45, 0.02), goldMat)
    const handleZOffset = d === 1 ? 0 : d === 0 ? doorWidthZ * 0.32 : -doorWidthZ * 0.32
    handleWard.position.set(wardX - wardD / 2 - 0.04, floorY + 1.25, doorCenterZ + handleZOffset)

    suiteGroup.add(doorMesh, doorFlute, handleWard)
  }

  // Integrated warm LED downlight wash strip underneath cornice
  const wardLed = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, wardW - 0.1), coveLedMat)
  wardLed.position.set(wardX - wardD / 2 - 0.02, floorY + wardH - 0.02, wardZ)
  suiteGroup.add(wardLed)

  // =========================================================================
  // 8. ANIME THEMED POSTERS (GALLERY FRAMES & SPOTLIGHTS)
  // [NEW FEATURE]: 4 unique high-res procedural anime posters with beveled
  // metallic frames, glass reflections, and dedicated spotlights.
  // =========================================================================
  const createFramedPoster = (
    posX: number,
    posY: number,
    posZ: number,
    width: number,
    height: number,
    tex: THREE.CanvasTexture,
    rotY: number,
  ) => {
    const posterGroup = new THREE.Group()
    posterGroup.position.set(posX, posY, posZ)
    posterGroup.rotation.y = rotY

    // Artwork plane
    const artMat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.25,
      metalness: 0.12,
    })
    const artMesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), artMat)
    artMesh.position.set(0, 0, 0.025)

    // Outer frame (sleek black titanium)
    const frameDepth = 0.04
    const frameBorder = 0.06
    const frameMesh = new THREE.Mesh(
      new THREE.BoxGeometry(width + frameBorder * 2, height + frameBorder * 2, frameDepth),
      darkMetalMat,
    )

    // Inner gold bevel
    const innerGold = new THREE.Mesh(
      new THREE.BoxGeometry(width + 0.02, height + 0.02, frameDepth + 0.005),
      goldMat,
    )
    innerGold.position.set(0, 0, -0.005)

    // Protective glass layer
    const posterGlass = new THREE.Mesh(new THREE.PlaneGeometry(width, height), glassMat)
    posterGlass.position.set(0, 0, 0.035)

    // Gallery picture downlight sconce above frame
    const sconceBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.03, 0.08), darkMetalMat)
    sconceBase.position.set(0, height / 2 + frameBorder + 0.12, 0.08)
    const sconceArm = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.14, 8), goldMat)
    sconceArm.rotation.x = Math.PI / 3
    sconceArm.position.set(0, height / 2 + frameBorder + 0.06, 0.05)
    const sconceHead = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.02, 0.04), goldMat)
    sconceHead.position.set(0, height / 2 + frameBorder + 0.12, 0.12)

    posterGroup.add(frameMesh, innerGold, artMesh, posterGlass, sconceBase, sconceArm, sconceHead)
    suiteGroup.add(posterGroup)
    return posterGroup
  }

  // 1. Poster 1: "NEO-TOKYO CYBERPUNK 2099" (North Wall, West of Balcony)
  const posterCyberTex = suiteAnimePosterCyberpunkTexture()
  createFramedPoster(cx - 3.4, floorY + 1.7, cz - innerD / 2 + 0.025, 0.95, 1.4, posterCyberTex, 0)

  // 2. Poster 2: "VALLEY OF THE WIND // GHIBLI ARCHIVES" (North Wall, East of Balcony)
  const posterGhibliTex = suiteAnimePosterGhibliTexture()
  createFramedPoster(cx + 3.4, floorY + 1.7, cz - innerD / 2 + 0.025, 0.95, 1.4, posterGhibliTex, 0)

  // 3. Poster 3: "PROJECT EVA-01 // MECHA PROTOCOL" (West Wall, above Workstation)
  const posterMechaTex = suiteAnimePosterMechaTexture()
  createFramedPoster(cx - innerW / 2 + 0.025, floorY + 2.15, deskZ, 0.85, 1.25, posterMechaTex, Math.PI / 2)

  // 4. Poster 4: "MIDNIGHT STUDY // LO-FI TOKYO" (South Wall, above Lounge Nook)
  const posterLofiTex = suiteAnimePosterLofiTexture()
  createFramedPoster(cx + 3.4, floorY + 1.7, cz + innerD / 2 - 0.025, 0.95, 1.4, posterLofiTex, Math.PI)

  // =========================================================================
  // 9. ANIME COLLECTIBLE & MANGA DISPLAY BOOKSHELF (SOUTH WALL)
  // [NEW FURNITURE]: Modern 4-tier open shelving unit with manga tankobon
  // series, collectible anime figurines, and potted bonsai/succulent.
  // =========================================================================
  const shelfX = cx - 0.6
  const shelfZ = cz + innerD / 2 - 0.22 // Against South wall
  const shelfW = 1.6
  const shelfD = 0.38
  const shelfH = 1.45

  // Shelving Frame in Dark Walnut & Brass uprights
  const shelfFrame = new THREE.Mesh(new THREE.BoxGeometry(shelfW, 0.04, shelfD), darkWoodMat)
  shelfFrame.position.set(shelfX, floorY + 0.06, shelfZ)
  suiteGroup.add(shelfFrame)

  // 4 Shelves
  for (let s = 1; s <= 4; s++) {
    const sMesh = new THREE.Mesh(new THREE.BoxGeometry(shelfW, 0.03, shelfD), darkWoodMat)
    sMesh.position.set(shelfX, floorY + s * 0.36, shelfZ)
    suiteGroup.add(sMesh)
  }

  // Brass vertical stanchions
  const stanchionGeo = new THREE.CylinderGeometry(0.015, 0.015, shelfH, 8)
  const stanchionPositions = [
    { x: shelfX - shelfW / 2 + 0.04, z: shelfZ - shelfD / 2 + 0.04 },
    { x: shelfX + shelfW / 2 - 0.04, z: shelfZ - shelfD / 2 + 0.04 },
    { x: shelfX - shelfW / 2 + 0.04, z: shelfZ + shelfD / 2 - 0.04 },
    { x: shelfX + shelfW / 2 - 0.04, z: shelfZ + shelfD / 2 - 0.04 },
  ]
  for (const sp of stanchionPositions) {
    const stMesh = new THREE.Mesh(stanchionGeo, goldMat)
    stMesh.position.set(sp.x, floorY + shelfH / 2, sp.z)
    suiteGroup.add(stMesh)
  }

  // Manga Volumes on Shelf 1 & 2
  const mangaTex = suiteMangaSpinesTexture()
  const mangaMat = new THREE.MeshStandardMaterial({ map: mangaTex, roughness: 0.5 })
  const mangaBlock1 = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.24, 0.18), mangaMat)
  mangaBlock1.position.set(shelfX - 0.35, floorY + 0.36 + 0.12, shelfZ)
  const mangaBlock2 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.24, 0.18), mangaMat)
  mangaBlock2.position.set(shelfX + 0.38, floorY + 0.72 + 0.12, shelfZ)
  suiteGroup.add(mangaBlock1, mangaBlock2)

  // Anime Scale Figures on Acrylic Stands (Shelf 2 & 3)
  const acrylicMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, transparent: true, opacity: 0.5 })
  // Figure 1: Cyber Heroine Figure (Pink & Cyan)
  const fig1Base = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.012, 16), acrylicMat)
  fig1Base.position.set(shelfX - 0.4, floorY + 0.72 + 0.01, shelfZ)
  const fig1Body = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.18, 8), new THREE.MeshStandardMaterial({ color: 0x111625 }))
  fig1Body.position.set(shelfX - 0.4, floorY + 0.72 + 0.1, shelfZ)
  const fig1Head = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 12), new THREE.MeshStandardMaterial({ color: 0xffd1b3 }))
  fig1Head.position.set(shelfX - 0.4, floorY + 0.72 + 0.21, shelfZ)
  const fig1Hair = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 8), new THREE.MeshStandardMaterial({ color: 0x00f5d4 }))
  fig1Hair.position.set(shelfX - 0.4, floorY + 0.72 + 0.24, shelfZ - 0.01)
  suiteGroup.add(fig1Base, fig1Body, fig1Head, fig1Hair)

  // Figure 2: Mecha Scale Model Figure (Red & Gold)
  const fig2Base = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.012, 16), acrylicMat)
  fig2Base.position.set(shelfX + 0.35, floorY + 1.08 + 0.01, shelfZ)
  const fig2Body = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.04), new THREE.MeshStandardMaterial({ color: 0x9b111e }))
  fig2Body.position.set(shelfX + 0.35, floorY + 1.08 + 0.09, shelfZ)
  const fig2Wings = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.01), goldMat)
  fig2Wings.position.set(shelfX + 0.35, floorY + 1.08 + 0.14, shelfZ - 0.02)
  suiteGroup.add(fig2Base, fig2Body, fig2Wings)

  // =========================================================================
  // 10. WALL-MOUNTED 60" OLED TV & MEDIA CONSOLE (SOUTH WALL)
  // [NEW FURNITURE]: Modern floating entertainment credenza with OLED screen,
  // next-gen gaming console, and soundbar.
  // =========================================================================
  const tvX = cx + 1.5
  const tvZ = cz + innerD / 2 - 0.05
  const tvW = 1.7
  const tvH = 0.96

  // 60" TV Display Panel
  const tvScreenMat = new THREE.MeshStandardMaterial({ color: 0x05070c, roughness: 0.12, metalness: 0.85 })
  const tvScreen = new THREE.Mesh(new THREE.BoxGeometry(tvW, tvH, 0.03), tvScreenMat)
  tvScreen.position.set(tvX, floorY + 1.6, tvZ - 0.02)

  // Gold ultra-thin bezel
  const tvBezel = new THREE.Mesh(new THREE.BoxGeometry(tvW + 0.02, tvH + 0.02, 0.02), goldMat)
  tvBezel.position.set(tvX, floorY + 1.6, tvZ - 0.015)
  suiteGroup.add(tvScreen, tvBezel)

  // Floating Walnut Media Credenza below TV
  const credW = 2.0
  const credH = 0.35
  const credD = 0.45
  const credZ = cz + innerD / 2 - credD / 2 - 0.02
  const credMesh = new THREE.Mesh(new THREE.BoxGeometry(credW, credH, credD), darkWoodMat)
  credMesh.position.set(tvX, floorY + 0.45, credZ)

  const credGold = new THREE.Mesh(new THREE.BoxGeometry(credW + 0.02, 0.015, credD + 0.02), goldMat)
  credGold.position.set(tvX, floorY + 0.45 + credH / 2, credZ)

  // Slim Soundbar on Credenza
  const soundbar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.08), darkMetalMat)
  soundbar.position.set(tvX, floorY + 0.45 + credH / 2 + 0.03, credZ + 0.1)

  // Next-Gen Gaming Console (with glowing blue status stripe)
  const consoleGeo = new THREE.BoxGeometry(0.3, 0.06, 0.24)
  const gameConsole = new THREE.Mesh(consoleGeo, whiteLinenMat)
  gameConsole.position.set(tvX - 0.65, floorY + 0.45 + credH / 2 + 0.035, credZ)
  const consoleLight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.005, 0.01), blueLedMat)
  consoleLight.position.set(tvX - 0.65, floorY + 0.45 + credH / 2 + 0.065, credZ + 0.11)

  suiteGroup.add(credMesh, credGold, soundbar, gameConsole, consoleLight)

  // =========================================================================
  // 11. LOUNGE READING NOOK & ACCENT ARMCHAIR (SOUTH-EAST)
  // [NEW FURNITURE]: Contemporary designer armchair, marble/brass side table,
  // and modern curved floor lamp.
  // =========================================================================
  const loungeX = cx + 3.6
  const loungeZ = cz + 2.0

  // Navy Velvet Accent Armchair
  const chairGroup = new THREE.Group()
  chairGroup.position.set(loungeX, floorY, loungeZ)
  chairGroup.rotation.y = -Math.PI / 4 // Angled towards room center

  // Seat cushion
  const lSeat = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.16, 0.68), velvetNavyMat)
  lSeat.position.set(0, 0.32, 0)

  // Curved wraparound backrest & arms
  const lBack = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.52, 0.14), velvetNavyMat)
  lBack.position.set(0, 0.58, 0.32)
  const lArmL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.38, 0.68), velvetNavyMat)
  lArmL.position.set(-0.34, 0.48, 0)
  const lArmR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.38, 0.68), velvetNavyMat)
  lArmR.position.set(0.34, 0.48, 0)

  // 4 Tapered brass legs
  const lLegGeo = new THREE.CylinderGeometry(0.015, 0.02, 0.28, 8)
  const lLeg1 = new THREE.Mesh(lLegGeo, goldMat); lLeg1.position.set(-0.28, 0.14, -0.28)
  const lLeg2 = new THREE.Mesh(lLegGeo, goldMat); lLeg2.position.set(0.28, 0.14, -0.28)
  const lLeg3 = new THREE.Mesh(lLegGeo, goldMat); lLeg3.position.set(-0.28, 0.14, 0.28)
  const lLeg4 = new THREE.Mesh(lLegGeo, goldMat); lLeg4.position.set(0.28, 0.14, 0.28)

  chairGroup.add(lSeat, lBack, lArmL, lArmR, lLeg1, lLeg2, lLeg3, lLeg4)
  suiteGroup.add(chairGroup)

  // Round White Marble & Brass Drink Table
  const tableTop = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.025, 24), marbleMat)
  tableTop.position.set(loungeX + 0.65, floorY + 0.48, loungeZ - 0.4)
  const tableStem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.46, 12), goldMat)
  tableStem.position.set(loungeX + 0.65, floorY + 0.24, loungeZ - 0.4)
  const tableBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.02, 24), goldMat)
  tableBase.position.set(loungeX + 0.65, floorY + 0.01, loungeZ - 0.4)
  suiteGroup.add(tableTop, tableStem, tableBase)

  // Arched Contemporary Brass Floor Lamp
  const fLampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.03, 16), darkMetalMat)
  fLampBase.position.set(loungeX + 1.0, floorY + 0.015, loungeZ + 0.7)
  const fLampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.85, 8), goldMat)
  fLampPole.position.set(loungeX + 1.0, floorY + 0.925, loungeZ + 0.7)
  const fLampShade = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.24, 16, 1, true), goldMat)
  fLampShade.position.set(loungeX + 0.65, floorY + 1.8, loungeZ + 0.3)
  const fLampBulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), coveLedMat)
  fLampBulb.position.set(loungeX + 0.65, floorY + 1.74, loungeZ + 0.3)
  suiteGroup.add(fLampBase, fLampPole, fLampShade, fLampBulb)

  // =========================================================================
  // 12. DRESSING ARCH MIRROR & POTTED INDOOR MONSTERA PLANT
  // =========================================================================

  // Full-Length Floor-Standing Arch Mirror (East wall beside wardrobe)
  const mirrorGroup = new THREE.Group()
  mirrorGroup.position.set(cx + innerW / 2 - 0.08, floorY + 0.95, cz + 0.1)
  mirrorGroup.rotation.y = -Math.PI / 2

  const mirrorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.8, 0.04), goldMat)
  const mirrorGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 1.72), glassMat)
  mirrorGlass.position.set(0, 0, 0.022)
  mirrorGroup.add(mirrorFrame, mirrorGlass)
  suiteGroup.add(mirrorGroup)

  // Potted Monstera Deliciosa Plant (North-West corner near balcony)
  const plantGroup = new THREE.Group()
  plantGroup.position.set(cx - 2.0, floorY, cz - innerD / 2 + 0.5)

  // White Ceramic Planter Pot on wooden tripod
  const potMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.42, 16), whiteLinenMat)
  potMesh.position.set(0, 0.35, 0)
  for (let l = 0; l < 3; l++) {
    const ang = (l * Math.PI * 2) / 3
    const pLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.28, 8), darkWoodMat)
    pLeg.position.set(Math.cos(ang) * 0.14, 0.14, Math.sin(ang) * 0.14)
    plantGroup.add(pLeg)
  }
  plantGroup.add(potMesh)

  // Fan of broad Monstera leaves
  const leafGeo = new THREE.SphereGeometry(0.24, 8, 8)
  leafGeo.scale(1.2, 0.08, 1.6)
  for (let i = 0; i < 7; i++) {
    const a = (i * Math.PI * 2) / 7
    const leaf = new THREE.Mesh(leafGeo, plantLeafMat)
    leaf.position.set(Math.cos(a) * 0.22, 0.52 + (i % 3) * 0.08, Math.sin(a) * 0.22)
    leaf.rotation.x = 0.35 * Math.sin(a)
    leaf.rotation.z = -0.35 * Math.cos(a)
    leaf.rotation.y = a
    plantGroup.add(leaf)
  }
  suiteGroup.add(plantGroup)

  // =========================================================================
  // 13. LUXURY CENTRAL AREA RUG
  // =========================================================================
  const rugTex = suiteLuxuryRugTexture()
  const rugMat = new THREE.MeshStandardMaterial({
    map: rugTex,
    roughness: 0.85,
    metalness: 0.08,
    transparent: true,
  })
  const rugMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 2.8), rugMat)
  rugMesh.rotation.x = -Math.PI / 2
  rugMesh.position.set(cx + 0.4, floorY + 0.052, cz + 0.3)
  rugMesh.receiveShadow = true
  suiteGroup.add(rugMesh)

  // =========================================================================
  // 14. LIGHTING RIG & LIGHT MANAGER SYNCHRONIZATION
  // =========================================================================

  // 14.1 Bedside Amber Lamps (Dual Lamps)
  let lampOn = true
  const lampLight = new THREE.PointLight(0xffa233, 2.6, 7.5, 1.2)
  lampLight.position.set(nsNorth.posX, floorY + nsH + 0.35, bedZ)
  suiteGroup.add(lampLight)

  // 14.2 Cyber Workstation Cyan Monitor Glow
  let pcOn = true
  const pcLight = new THREE.PointLight(0x00ffff, 2.2, 5.5, 1.1)
  pcLight.position.set(deskX + 0.1, floorY + deskH + 0.4, deskZ)
  suiteGroup.add(pcLight)

  // 14.3 Central Warm Recessed Cove Ambient Light
  const coveLight = new THREE.PointLight(0xffeed6, 2.0, 13, 1.2)
  coveLight.position.set(cx, floorY + wallH - 0.3, cz)
  suiteGroup.add(coveLight)

  // 14.4 Lounge Reading Warm Lamp
  const loungeLight = new THREE.PointLight(0xffd28e, 1.6, 5.0, 1.2)
  loungeLight.position.set(loungeX + 0.65, floorY + 1.7, loungeZ + 0.3)
  suiteGroup.add(loungeLight)

  if (lightManager) {
    lightManager.register({
      x: nsNorth.posX,
      y: floorY + nsH + 0.35,
      z: bedZ,
      color: 0xffa233,
      intensity: 2.6,
      distance: 7.5,
      decay: 1.2,
      zone: 'Suite402',
      dynamicIntensity: () => (lampOn ? 2.6 : 0),
    })

    lightManager.register({
      x: deskX + 0.1,
      y: floorY + deskH + 0.4,
      z: deskZ,
      color: 0x00ffff,
      intensity: 2.2,
      distance: 5.5,
      decay: 1.1,
      zone: 'Suite402',
      dynamicIntensity: () => (pcOn ? 1.9 + Math.sin(Date.now() * 0.003) * 0.3 : 0),
    })

    lightManager.register({
      x: cx,
      y: floorY + wallH - 0.3,
      z: cz,
      color: 0xffeed6,
      intensity: 2.0,
      distance: 13,
      decay: 1.2,
      zone: 'Suite402',
    })

    lightManager.register({
      x: loungeX + 0.65,
      y: floorY + 1.7,
      z: loungeZ + 0.3,
      color: 0xffd28e,
      intensity: 1.6,
      distance: 5.0,
      decay: 1.2,
      zone: 'Suite402',
    })
  }

  // =========================================================================
  // 15. COLLISION BOUNDARIES
  // =========================================================================

  // South Wall
  colliders.add({
    minX: cx - innerW / 2 - 0.5,
    minY: 0,
    minZ: cz + innerD / 2 - 0.05,
    maxX: cx + innerW / 2 + 0.5,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 1.0,
  })

  // West Wall
  colliders.add({
    minX: cx - innerW / 2 - 1.0,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx - innerW / 2 + 0.05,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 0.5,
  })

  // North Wall Sections (leaving 3.0m balcony sliding doors open in center)
  colliders.add({
    minX: cx - innerW / 2 - 0.5,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx - 1.45,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })
  colliders.add({
    minX: cx + 1.45,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx + innerW / 2 + 0.5,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // Balcony perimeter railings & privacy screens
  // Front safety railing (Z = 78.7)
  colliders.add({
    minX: cx - balconyW / 2 - 0.2,
    minY: 0,
    minZ: balconyZ - balconyD / 2 - 0.3,
    maxX: cx + balconyW / 2 + 0.2,
    maxY: 4.0,
    maxZ: balconyZ - balconyD / 2 + 0.1,
  })
  // West privacy screen & side rail (X = -2.4, prevents walking into Unit 401)
  colliders.add({
    minX: cx - balconyW / 2 - 0.3,
    minY: 0,
    minZ: cz - innerD / 2 - balconyD - 0.1,
    maxX: cx - balconyW / 2 + 0.1,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.1,
  })
  // East privacy screen & side rail (X = +2.4, prevents walking into Unit 403)
  colliders.add({
    minX: cx + balconyW / 2 - 0.1,
    minY: 0,
    minZ: cz - innerD / 2 - balconyD - 0.1,
    maxX: cx + balconyW / 2 + 0.3,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.1,
  })
  // Balcony outdoor lounge chair (West)
  colliders.add({
    minX: chairBX - 0.45,
    minY: 0,
    minZ: chairBZ - 0.45,
    maxX: chairBX + 0.45,
    maxY: 2.0,
    maxZ: chairBZ + 0.45,
  })
  // Balcony bistro table (West-Center)
  colliders.add({
    minX: tableBX - 0.32,
    minY: 0,
    minZ: tableBZ - 0.32,
    maxX: tableBX + 0.32,
    maxY: 2.0,
    maxZ: tableBZ + 0.32,
  })
  // Balcony bamboo planter (East)
  colliders.add({
    minX: planterBX - 0.28,
    minY: 0,
    minZ: planterBZ - 0.28,
    maxX: planterBX + 0.28,
    maxY: 2.0,
    maxZ: planterBZ + 0.28,
  })

  // East Wall Sections (leaving pocket door open in center)
  colliders.add({
    minX: cx + innerW / 2 - 0.05,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx + innerW / 2 + 1.0,
    maxY: 4.0,
    maxZ: cz + 0.45,
  })
  colliders.add({
    minX: cx + innerW / 2 - 0.05,
    minY: 0,
    minZ: cz + 2.0,
    maxX: cx + innerW / 2 + 1.0,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 0.5,
  })
  // East Door Stop (blocks walking outside past threshold)
  colliders.add({
    minX: cx + innerW / 2 + 0.25,
    minY: 0,
    minZ: cz + 0.45,
    maxX: cx + innerW / 2 + 1.2,
    maxY: 4.0,
    maxZ: cz + 2.0,
  })

  // Furniture Colliders:

  // Cyber Battlestation Desk
  colliders.add({
    minX: deskX - deskW / 2 - 0.05,
    minY: 0,
    minZ: deskZ - deskL / 2 - 0.05,
    maxX: deskX + deskW / 2 + 0.05,
    maxY: 1.5,
    maxZ: deskZ + deskL / 2 + 0.05,
  })

  // Master Bed
  colliders.add({
    minX: bedX - bedW / 2 - 0.05,
    minY: 0,
    minZ: bedZ - bedD / 2 - 0.05,
    maxX: bedX + bedW / 2 + 0.05,
    maxY: 1.2,
    maxZ: bedZ + bedD / 2 + 0.05,
  })

  // North Nightstand
  colliders.add({
    minX: nsNorth.posX - nsW / 2 - 0.05,
    minY: 0,
    minZ: nsNorth.posZ - nsD / 2 - 0.05,
    maxX: nsNorth.posX + nsW / 2 + 0.05,
    maxY: 1.0,
    maxZ: nsNorth.posZ + nsD / 2 + 0.05,
  })

  // South Nightstand
  colliders.add({
    minX: nsSouth.posX - nsW / 2 - 0.05,
    minY: 0,
    minZ: nsSouth.posZ - nsD / 2 - 0.05,
    maxX: nsSouth.posX + nsW / 2 + 0.05,
    maxY: 1.0,
    maxZ: nsSouth.posZ + nsD / 2 + 0.05,
  })

  // Grand Luxury Wardrobe
  colliders.add({
    minX: wardX - wardD / 2 - 0.05,
    minY: 0,
    minZ: wardZ - wardW / 2 - 0.05,
    maxX: wardX + wardD / 2 + 0.05,
    maxY: 3.0,
    maxZ: wardZ + wardW / 2 + 0.05,
  })

  // Anime Collectibles Bookshelf & Credenza
  colliders.add({
    minX: shelfX - shelfW / 2 - 0.05,
    minY: 0,
    minZ: shelfZ - shelfD / 2 - 0.05,
    maxX: shelfX + shelfW / 2 + 0.05,
    maxY: 1.6,
    maxZ: shelfZ + shelfD / 2 + 0.05,
  })

  // Media Console
  colliders.add({
    minX: tvX - credW / 2 - 0.05,
    minY: 0,
    minZ: credZ - credD / 2 - 0.05,
    maxX: tvX + credW / 2 + 0.05,
    maxY: 1.0,
    maxZ: credZ + credD / 2 + 0.05,
  })

  // Lounge Armchair
  colliders.add({
    minX: loungeX - 0.45,
    minY: 0,
    minZ: loungeZ - 0.45,
    maxX: loungeX + 0.45,
    maxY: 1.1,
    maxZ: loungeZ + 0.45,
  })

  // Balcony Outdoor Armchair
  colliders.add({
    minX: chairBX - 0.45,
    minY: 0,
    minZ: chairBZ - 0.45,
    maxX: chairBX + 0.45,
    maxY: 1.0,
    maxZ: chairBZ + 0.45,
  })

  // Balcony Bistro Table
  colliders.add({
    minX: tableBX - 0.32,
    minY: 0,
    minZ: tableBZ - 0.32,
    maxX: tableBX + 0.32,
    maxY: 0.8,
    maxZ: tableBZ + 0.32,
  })

  // Balcony Planter
  colliders.add({
    minX: planterBX - 0.28,
    minY: 0,
    minZ: planterBZ - 0.28,
    maxX: planterBX + 0.28,
    maxY: 1.2,
    maxZ: planterBZ + 0.28,
  })

  // =========================================================================
  // 16. PROXIMITY INTERACTIONS
  // =========================================================================

  // 1. Bedside Lamps Toggle
  interactions.add({
    id: 'suite-lamp',
    x: nsNorth.posX,
    z: bedZ,
    radius: 2.2,
    prompt: () => (lampOn ? 'Turn Off Bedside Lamps [消灯]' : 'Turn On Bedside Lamps [点灯]'),
    onInteract: () => {
      lampOn = !lampOn
      const globeMat = lampOn ? lampGlobeMat : new THREE.MeshBasicMaterial({ color: 0x4a4033 })
      nsNorth.lampGlobe.material = globeMat
      nsSouth.lampGlobe.material = globeMat
      lampLight.intensity = lampOn ? 2.6 : 0
      audio?.playVendingSound()
      messages.show(lampOn ? 'Bedside amber designer lamps turned ON.' : 'Bedside lamps turned OFF. Midnight shadows settle in.')
    },
  })

  // 2. PC Gaming / Cyber Workstation
  interactions.add({
    id: 'suite-pc',
    x: deskX + 0.45,
    z: deskZ,
    radius: 1.8,
    prompt: () => (pcOn ? 'Compile Code on Workstation [PC操作]' : 'Power On Workstation [PC起動]'),
    onInteract: () => {
      pcOn = true
      pcLight.intensity = 2.2
      audio?.playVendingSound()
      messages.show('💻 Tokyo Workstation: Build succeeded with 0 errors. All systems optimal!')
    },
  })

  // 3. Master Bed Rest
  interactions.add({
    id: 'suite-bed',
    x: bedX + 0.6,
    z: bedZ,
    radius: 2.0,
    prompt: () => 'Rest on Bed [ベッドで休む]',
    onInteract: () => {
      messages.show('🌙 You sit on the edge of the plush navy duvet, looking out through the glass doors at the Tokyo skyline.')
    },
  })

  // 4. Grand Wardrobe Inspection
  interactions.add({
    id: 'suite-wardrobe',
    x: wardX - 0.5,
    z: wardZ,
    radius: 1.8,
    prompt: () => 'Inspect Wardrobe [クローゼット]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('👔 Wardrobe: High-school blazer uniform, tailored dark coats, fresh linen, and travel luggage neatly organized.')
    },
  })

  // 5. Anime Poster: Cyberpunk 2099
  interactions.add({
    id: 'suite-poster-cyberpunk',
    x: cx - 3.4,
    z: cz - innerD / 2 + 0.6,
    radius: 1.8,
    prompt: () => 'Inspect Poster: Neo-Tokyo 2099 [ポスター鑑賞]',
    onInteract: () => {
      messages.show('🖼️ "Neo-Tokyo 2099" — Limited holographic edition art print featuring the cyber heroine overlooking the neon skyline.')
    },
  })

  // 6. Anime Poster: Valley of the Wind
  interactions.add({
    id: 'suite-poster-ghibli',
    x: cx + 3.4,
    z: cz - innerD / 2 + 0.6,
    radius: 1.8,
    prompt: () => 'Inspect Poster: Valley of the Wind [ポスター鑑賞]',
    onInteract: () => {
      messages.show('🖼️ "Valley of the Wind" — Nostalgic scenic landscape art print capturing an ancient airship soaring through golden sunset clouds.')
    },
  })

  // 7. Anime Poster: Mecha Protocol Unit-01
  interactions.add({
    id: 'suite-poster-mecha',
    x: cx - innerW / 2 + 0.8,
    z: deskZ,
    radius: 1.8,
    prompt: () => 'Inspect Art: Unit-01 Mecha [ポスター鑑賞]',
    onInteract: () => {
      messages.show('🖼️ "Project EVA // Unit-01" — Striking crimson combat illustration with glowing emerald optics and battle telemetry.')
    },
  })

  // 8. Anime Poster: Midnight Lo-Fi Study
  interactions.add({
    id: 'suite-poster-lofi',
    x: cx + 3.4,
    z: cz + innerD / 2 - 0.6,
    radius: 1.8,
    prompt: () => 'Inspect Poster: Midnight Lo-Fi [ポスター鑑賞]',
    onInteract: () => {
      messages.show('🖼️ "Midnight Lo-Fi" — Cozy rainy window art print with headphones, a sleeping cat, and soft neon bokeh lights.')
    },
  })

  // 9. Anime Collectibles & Manga Bookshelf
  interactions.add({
    id: 'suite-bookshelf',
    x: shelfX,
    z: shelfZ - 0.5,
    radius: 1.8,
    prompt: () => 'Inspect Manga & Figures [コレクション]',
    onInteract: () => {
      messages.show('📚 Display Collection: Complete volumes of favorite shonen manga, cyber heroine scale figure, and limited mecha model.')
    },
  })

  // 10. Entertainment TV & Next-Gen Console
  interactions.add({
    id: 'suite-tv',
    x: tvX,
    z: credZ - 0.5,
    radius: 1.8,
    prompt: () => 'Power On Entertainment Console [ゲーム機 / TV]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('🎮 Next-Gen Console beeps: Game Ready. Streaming favorite anime OST through the soundbar.')
    },
  })

  // 11. Lounge Reading Armchair
  interactions.add({
    id: 'suite-lounge',
    x: loungeX,
    z: loungeZ,
    radius: 1.8,
    prompt: () => 'Relax in Lounge Armchair [ラウンジチェア]',
    onInteract: () => {
      messages.show('🛋️ You sink into the soft navy velvet armchair beneath the warm brass floor lamp, enjoying the quiet midnight atmosphere.')
    },
  })

  // 12. Exit Door to 4F Elevator Lounge & Corridor
  interactions.add({
    id: 'suite-elevator',
    x: cx + innerW / 2 - 0.4,
    z: cz + 1.2,
    radius: 1.8,
    prompt: () => 'Exit to 4F Lounge & Hallway [廊下・ラウンジへ]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('Stepping out into the 4F Elevator Lounge...')
      screenFade(() => {
        player.teleport(-6.0, 65.0, -Math.PI / 2)
        messages.show('4F Elevator Lounge & Residential Corridor.', 4.0)
      })
    },
  })

  // 13. Balcony View
  let balconyGazeIndex = 0
  const balconyGazeMessages = [
    '🌃 Tokyo at 02:00 AM — Tokyo Tower glows radiant amber against the deep midnight indigo. A cool evening breeze whispers past.',
    '✨ Below, the Shuto Expressway flows like rivers of ruby taillights and gold headlights through the sleepless metropolis.',
    '🌙 High above the high-rises, the luminous crescent moon watches over the neon signs and rooftop helipads of Neo-Tokyo.',
    '☕ Steam rises gently from your hot coffee on the balcony table. Midnight serenity settles over the city.',
  ]

  interactions.add({
    id: 'suite-balcony',
    x: cx,
    z: cz - innerD / 2 - 0.8,
    radius: 2.2,
    prompt: () => 'Gaze across Tokyo Skyline [夜景を眺める]',
    onInteract: () => {
      audio?.playSkylineChime()
      const msg = balconyGazeMessages[balconyGazeIndex % balconyGazeMessages.length]
      balconyGazeIndex++
      messages.show(msg, 6.0)
    },
  })

  // =========================================================================
  // 17. RUNTIME UPDATE & DISTANCE CULLING
  // =========================================================================
  let time = 0

  return {
    group: suiteGroup,
    update(dt: number, p: { x: number; z: number }) {
      time += dt

      // If player is outside Suite 402 area (e.g. in Corridor 4F at Z=65), hide Suite 402
      if (p.z < 74) {
        suiteGroup.visible = false
        return
      }

      // Distance culling check (in Low quality mode)
      const distSq = (p.x - cx) ** 2 + (p.z - cz) ** 2
      const isNear = distSq < 2000 // 45 meters
      suiteGroup.visible = Settings.isHigh() || isNear

      if (!suiteGroup.visible) return

      // Update Tokyo Skyline dynamic animations (traffic trails, stars, aviation beacons, aircraft)
      tokyoSkyline.update(dt)

      // Candle flame gentle flicker
      candleFlame.scale.y = 1.7 + Math.sin(time * 12) * 0.35

      // Subtle pulse on PC intake fans and LED power
      if (pcOn) {
        const pulse = 1.8 + Math.sin(time * 3.5) * 0.35
        pcLight.intensity = pulse
      }
    },
  }
}

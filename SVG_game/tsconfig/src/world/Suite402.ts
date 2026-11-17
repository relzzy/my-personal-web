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
  suiteLuxuryRugTexture,
  suiteCurvedMonitorTexture,
  suiteAlarmClockTexture,
  suiteLivingRoomDoorMatTexture,
} from './Materials'

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
  const innerW = 8.4 // East-West width (X: cx - 4.2 to cx + 4.2)
  const innerD = 5.6 // North-South depth (Z: cz - 2.8 to cz + 2.8)
  const wallH = 2.9
  const wallThick = 0.3

  // =========================================================================
  // 2. LUXURY MATERIALS
  // =========================================================================
  const floorTex = suiteHardwoodFloorTexture()
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex,
    roughness: 0.3,
    metalness: 0.08,
  })

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x161c28,
    roughness: 0.72,
    metalness: 0.06,
  })

  const wallAccentMat = new THREE.MeshStandardMaterial({
    color: 0x101520,
    roughness: 0.65,
    metalness: 0.1,
  })

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.28,
    metalness: 0.88,
  })

  const darkWoodMat = new THREE.MeshStandardMaterial({
    color: 0x221813,
    roughness: 0.42,
    metalness: 0.06,
  })

  const wardrobeWoodMat = new THREE.MeshStandardMaterial({
    color: 0x1f1611,
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
    color: 0x1e2430,
    roughness: 0.35,
    metalness: 0.8,
  })

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xdde4ec,
    roughness: 0.15,
    metalness: 0.92,
  })

  const cyanGlowMat = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    toneMapped: false,
  })

  const navyDuvetMat = new THREE.MeshStandardMaterial({
    color: 0x1b2333,
    roughness: 0.84,
    metalness: 0.03,
  })

  const whiteLinenMat = new THREE.MeshStandardMaterial({
    color: 0xf3f6f9,
    roughness: 0.8,
    metalness: 0.0,
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
  const coveTrayW = innerW - 1.6
  const coveTrayD = innerD - 1.2
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
  addBaseboard(cx - 2.8, cz - innerD / 2 + 0.02, 2.8, 0.04) // North-West baseboard
  addBaseboard(cx + 2.8, cz - innerD / 2 + 0.02, 2.8, 0.04) // North-East baseboard
  addBaseboard(cx + innerW / 2 - 0.02, cz - 1.5, 0.04, 2.6) // East-North baseboard

  // 3.4 Walls & Partitions

  // SOUTH WALL (Solid luxury navy with vertical gold accent fluting)
  const sWallGeo = new THREE.BoxGeometry(innerW + wallThick * 2, wallH, wallThick)
  const sWall = new THREE.Mesh(sWallGeo, wallMat)
  sWall.position.set(cx, floorY + wallH / 2, cz + innerD / 2 + wallThick / 2)
  sWall.castShadow = true
  sWall.receiveShadow = true
  suiteGroup.add(sWall)

  // Vertical gold accent stripes along the south accent wall
  for (let sx = -3.2; sx <= 3.2; sx += 1.6) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.04, wallH - 0.4, 0.02), goldMat)
    stripe.position.set(cx + sx, floorY + wallH / 2, cz + innerD / 2 - 0.01)
    suiteGroup.add(stripe)
  }

  // WEST WALL (Behind bed & desk)
  const wWallGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const wWall = new THREE.Mesh(wWallGeo, wallAccentMat)
  wWall.position.set(cx - innerW / 2 - wallThick / 2, floorY + wallH / 2, cz)
  wWall.castShadow = true
  wWall.receiveShadow = true
  suiteGroup.add(wWall)

  // EAST WALL (With door opening leading to Living Room / Elevator)
  // North section of East wall
  const eWallNGeo = new THREE.BoxGeometry(wallThick, wallH, 2.6)
  const eWallN = new THREE.Mesh(eWallNGeo, wallMat)
  eWallN.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz - 1.5)
  suiteGroup.add(eWallN)

  // South section of East wall
  const eWallSGeo = new THREE.BoxGeometry(wallThick, wallH, 1.2)
  const eWallS = new THREE.Mesh(eWallSGeo, wallMat)
  eWallS.position.set(cx + innerW / 2 + wallThick / 2, floorY + wallH / 2, cz + 2.2)
  suiteGroup.add(eWallS)

  // Header above East door opening
  const eDoorH = 2.3
  const eDoorTopGeo = new THREE.BoxGeometry(wallThick, wallH - eDoorH, 1.8)
  const eDoorTop = new THREE.Mesh(eDoorTopGeo, wallMat)
  eDoorTop.position.set(cx + innerW / 2 + wallThick / 2, floorY + eDoorH + (wallH - eDoorH) / 2, cz + 0.7)
  suiteGroup.add(eDoorTop)

  // Sliding pocket door slab in walnut with gold hardware
  const eDoorGeo = new THREE.BoxGeometry(0.06, eDoorH, 1.4)
  const eDoorMesh = new THREE.Mesh(eDoorGeo, darkWoodMat)
  eDoorMesh.position.set(cx + innerW / 2 + 0.04, floorY + eDoorH / 2, cz + 0.8)
  suiteGroup.add(eDoorMesh)

  const eDoorHandle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4, 0.04), goldMat)
  eDoorHandle.position.set(cx + innerW / 2 - 0.02, floorY + 1.1, cz + 0.3)
  suiteGroup.add(eDoorHandle)

  // Inlaid "LIVING ROOM" Threshold Door Mat
  const matTex = suiteLivingRoomDoorMatTexture()
  const matMat = new THREE.MeshStandardMaterial({
    map: matTex,
    roughness: 0.45,
    metalness: 0.2,
  })
  const matMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.6), matMat)
  matMesh.rotation.x = -Math.PI / 2
  matMesh.position.set(cx + innerW / 2 - 0.55, floorY + 0.052, cz + 0.7)
  suiteGroup.add(matMesh)

  // NORTH WALL (With Balcony Glass Sliding Doors)
  // Left wall section
  const nWallLGeo = new THREE.BoxGeometry(2.8, wallH, wallThick)
  const nWallL = new THREE.Mesh(nWallLGeo, wallMat)
  nWallL.position.set(cx - 2.8, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  suiteGroup.add(nWallL)

  // Right wall section
  const nWallRGeo = new THREE.BoxGeometry(2.8, wallH, wallThick)
  const nWallR = new THREE.Mesh(nWallRGeo, wallMat)
  nWallR.position.set(cx + 2.8, floorY + wallH / 2, cz - innerD / 2 - wallThick / 2)
  suiteGroup.add(nWallR)

  // Header above balcony doors
  const bDoorH = 2.45
  const nDoorTopGeo = new THREE.BoxGeometry(2.8, wallH - bDoorH, wallThick)
  const nDoorTop = new THREE.Mesh(nDoorTopGeo, wallMat)
  nDoorTop.position.set(cx, floorY + bDoorH + (wallH - bDoorH) / 2, cz - innerD / 2 - wallThick / 2)
  suiteGroup.add(nDoorTop)

  // Balcony Glass Doors Frame (Gold & Steel Trim)
  const bFrameOuter = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.06, 0.08), goldMat)
  bFrameOuter.position.set(cx, floorY + bDoorH, cz - innerD / 2)
  const bFrameDivider = new THREE.Mesh(new THREE.BoxGeometry(0.06, bDoorH, 0.08), goldMat)
  bFrameDivider.position.set(cx, floorY + bDoorH / 2, cz - innerD / 2)
  suiteGroup.add(bFrameOuter, bFrameDivider)

  // Left & Right Glass Door Panels
  const glassPanelGeo = new THREE.BoxGeometry(1.35, bDoorH - 0.1, 0.03)
  const glassLeft = new THREE.Mesh(glassPanelGeo, glassMat)
  glassLeft.position.set(cx - 0.7, floorY + bDoorH / 2, cz - innerD / 2)
  const glassRight = new THREE.Mesh(glassPanelGeo, glassMat)
  glassRight.position.set(cx + 0.7, floorY + bDoorH / 2, cz - innerD / 2 + 0.02)
  suiteGroup.add(glassLeft, glassRight)

  // Glass door vertical handles
  const handleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 8)
  const handleL = new THREE.Mesh(handleGeo, goldMat)
  handleL.position.set(cx - 0.1, floorY + 1.15, cz - innerD / 2 + 0.03)
  const handleR = new THREE.Mesh(handleGeo, goldMat)
  handleR.position.set(cx + 0.1, floorY + 1.15, cz - innerD / 2 + 0.05)
  suiteGroup.add(handleL, handleR)

  // =========================================================================
  // 4. EXTERIOR BALCONY & TOKYO MIDNIGHT SKYLINE
  // =========================================================================
  const balconyD = 2.4
  const balconyW = 3.6
  const balconyZ = cz - innerD / 2 - balconyD / 2

  // Balcony Deck Floor
  const bDeckGeo = new THREE.BoxGeometry(balconyW, 0.08, balconyD)
  const bDeck = new THREE.Mesh(bDeckGeo, darkWoodMat)
  bDeck.position.set(cx, floorY - 0.01, balconyZ)
  suiteGroup.add(bDeck)

  // Balcony Safety Glass Railing
  const railH = 1.1
  const bRailFront = new THREE.Mesh(new THREE.BoxGeometry(balconyW, railH, 0.04), glassMat)
  bRailFront.position.set(cx, floorY + railH / 2, balconyZ - balconyD / 2)
  const bRailL = new THREE.Mesh(new THREE.BoxGeometry(0.04, railH, balconyD), glassMat)
  bRailL.position.set(cx - balconyW / 2, floorY + railH / 2, balconyZ)
  const bRailR = new THREE.Mesh(new THREE.BoxGeometry(0.04, railH, balconyD), glassMat)
  bRailR.position.set(cx + balconyW / 2, floorY + railH / 2, balconyZ)

  // Chrome Handrail Cap
  const handrailFront = new THREE.Mesh(new THREE.BoxGeometry(balconyW + 0.08, 0.05, 0.08), chromeMat)
  handrailFront.position.set(cx, floorY + railH, balconyZ - balconyD / 2)
  const handrailL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, balconyD), chromeMat)
  handrailL.position.set(cx - balconyW / 2, floorY + railH, balconyZ)
  const handrailR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, balconyD), chromeMat)
  handrailR.position.set(cx + balconyW / 2, floorY + railH, balconyZ)
  suiteGroup.add(bRailFront, bRailL, bRailR, handrailFront, handrailL, handrailR)

  // Distant Tokyo City Skyline & Towers
  const skyGroup = new THREE.Group()
  skyGroup.name = 'balcony-tokyo-skyline'

  // Night Sky Backdrop Mesh
  const skyBackdropMat = new THREE.MeshBasicMaterial({
    color: 0x070c17,
    side: THREE.BackSide,
  })
  const skyDome = new THREE.Mesh(new THREE.SphereGeometry(45, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), skyBackdropMat)
  skyDome.position.set(cx, floorY, cz)
  skyGroup.add(skyDome)

  // Crescent Moon
  const moonMat = new THREE.MeshBasicMaterial({ color: 0xfff6cf, toneMapped: false })
  const moonMesh = new THREE.Mesh(new THREE.CircleGeometry(1.6, 24), moonMat)
  moonMesh.position.set(cx + 10, floorY + 18, cz - 40)
  moonMesh.rotation.y = Math.PI
  skyGroup.add(moonMesh)

  // Skyline high-rise silhouettes
  const towers = [
    { x: -18, z: -38, w: 9, h: 28, d: 9, color: 0x0a101d },
    { x: -7, z: -32, w: 7, h: 22, d: 7, color: 0x0e1626 },
    { x: 3, z: -36, w: 10, h: 32, d: 10, color: 0x090f1b },
    { x: 14, z: -30, w: 8, h: 24, d: 8, color: 0x0e1728 },
    { x: 24, z: -38, w: 11, h: 35, d: 11, color: 0x080e18 },
  ]

  for (const t of towers) {
    const tMesh = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), new THREE.MeshBasicMaterial({ color: t.color }))
    tMesh.position.set(cx + t.x, floorY + t.h / 2 - 4, cz + t.z)
    skyGroup.add(tMesh)

    // Window lights grid (procedural dots)
    const winCols = 5
    const winRows = 8
    for (let r = 0; r < winRows; r++) {
      for (let c = 0; c < winCols; c++) {
        if ((r * 3 + c * 7) % 3 === 0) {
          const winColor = (r + c) % 2 === 0 ? 0xffea9f : 0x7dd3fc
          const win = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.45), new THREE.MeshBasicMaterial({ color: winColor, toneMapped: false }))
          win.position.set(cx + t.x - t.w / 2 + 1.0 + c * 1.5, floorY + 4 + r * 2.2, cz + t.z + t.d / 2 + 0.05)
          skyGroup.add(win)
        }
      }
    }

    // Rooftop antenna tower with red blinking beacon
    const antGeo = new THREE.CylinderGeometry(0.04, 0.08, 4.0, 6)
    const ant = new THREE.Mesh(antGeo, darkMetalMat)
    ant.position.set(cx + t.x, floorY + t.h - 4 + 2.0, cz + t.z)
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff2222, toneMapped: false }))
    beacon.position.set(cx + t.x, floorY + t.h - 4 + 4.1, cz + t.z)
    skyGroup.add(ant, beacon)
  }
  suiteGroup.add(skyGroup)

  // =========================================================================
  // 5. PC GAMING & CYBER WORKSTATION (NORTH-WEST CORNER)
  // =========================================================================
  const deskX = cx - 2.5
  const deskZ = cz - 1.5
  const deskW = 1.9
  const deskD = 1.2
  const deskH = 0.76

  // 5.1 Walnut Desk Top with Gold Perimeter Inlay
  const deskTopGeo = new THREE.BoxGeometry(deskW, 0.05, deskD)
  const deskTop = new THREE.Mesh(deskTopGeo, darkWoodMat)
  deskTop.position.set(deskX, floorY + deskH - 0.025, deskZ)
  deskTop.castShadow = true
  deskTop.receiveShadow = true

  const deskGoldTrim = new THREE.Mesh(new THREE.BoxGeometry(deskW + 0.02, 0.02, deskD + 0.02), goldMat)
  deskGoldTrim.position.set(deskX, floorY + deskH - 0.04, deskZ)
  suiteGroup.add(deskTop, deskGoldTrim)

  // Heavy square legs
  const legGeo = new THREE.BoxGeometry(0.07, deskH, 0.07)
  const legPositions = [
    { x: deskX - deskW / 2 + 0.06, z: deskZ - deskD / 2 + 0.06 },
    { x: deskX + deskW / 2 - 0.06, z: deskZ - deskD / 2 + 0.06 },
    { x: deskX - deskW / 2 + 0.06, z: deskZ + deskD / 2 - 0.06 },
    { x: deskX + deskW / 2 - 0.06, z: deskZ + deskD / 2 - 0.06 },
  ]
  for (const lp of legPositions) {
    const leg = new THREE.Mesh(legGeo, darkMetalMat)
    leg.position.set(lp.x, floorY + deskH / 2, lp.z)
    suiteGroup.add(leg)
  }

  // Leather Desk Mat
  const padMat = new THREE.MeshStandardMaterial({ color: 0x111620, roughness: 0.88 })
  const padMesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.008, 0.75), padMat)
  padMesh.position.set(deskX + 0.05, floorY + deskH + 0.004, deskZ)
  suiteGroup.add(padMesh)

  // 5.2 Curved Ultra-Wide Monitor (Facing South-East towards chair)
  const monitorTex = suiteCurvedMonitorTexture()
  const monMat = new THREE.MeshBasicMaterial({ map: monitorTex, toneMapped: false })

  // Monitor Stand
  const monStandBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.02, 16), darkMetalMat)
  monStandBase.position.set(deskX, floorY + deskH + 0.01, deskZ - 0.35)
  const monStandStem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.32, 0.06), darkMetalMat)
  monStandStem.position.set(deskX, floorY + deskH + 0.17, deskZ - 0.35)
  suiteGroup.add(monStandBase, monStandStem)

  // Monitor Curved Display Panel (modeled as 3 angled segments for sleek curvature)
  const monCenter = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.38), monMat)
  monCenter.position.set(deskX, floorY + deskH + 0.35, deskZ - 0.24)

  const monWingGeo = new THREE.PlaneGeometry(0.24, 0.38)
  const monWingL = new THREE.Mesh(monWingGeo, monMat)
  monWingL.position.set(deskX - 0.42, floorY + deskH + 0.35, deskZ - 0.21)
  monWingL.rotation.y = 0.22

  const monWingR = new THREE.Mesh(monWingGeo, monMat)
  monWingR.position.set(deskX + 0.42, floorY + deskH + 0.35, deskZ - 0.21)
  monWingR.rotation.y = -0.22

  // Monitor Back Enclosure
  const monBack = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.4, 0.04), darkMetalMat)
  monBack.position.set(deskX, floorY + deskH + 0.35, deskZ - 0.26)

  // Cyan glowing light strip behind the monitor
  const monGlowStrip = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.02), cyanGlowMat)
  monGlowStrip.position.set(deskX, floorY + deskH + 0.35, deskZ - 0.28)
  suiteGroup.add(monCenter, monWingL, monWingR, monBack, monGlowStrip)

  // 5.3 High-End Gaming PC Chassis
  const pcX = deskX - 0.65
  const pcZ = deskZ - 0.1
  const pcW = 0.24
  const pcD = 0.52
  const pcH = 0.46

  const pcCase = new THREE.Mesh(new THREE.BoxGeometry(pcW, pcH, pcD), darkMetalMat)
  pcCase.position.set(pcX, floorY + deskH + pcH / 2, pcZ)

  // Tempered glass side panel
  const pcGlass = new THREE.Mesh(new THREE.PlaneGeometry(pcD - 0.04, pcH - 0.04), glassMat)
  pcGlass.rotation.y = Math.PI / 2
  pcGlass.position.set(pcX + pcW / 2 + 0.005, floorY + deskH + pcH / 2, pcZ)

  // Internal glowing components (GPU, RAM, dual LED front intake fans)
  const pcGpu = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.28), cyanGlowMat)
  pcGpu.position.set(pcX + 0.02, floorY + deskH + 0.18, pcZ - 0.04)

  const fanGeo = new THREE.RingGeometry(0.045, 0.065, 16)
  const fan1 = new THREE.Mesh(fanGeo, cyanGlowMat)
  fan1.position.set(pcX, floorY + deskH + 0.15, pcZ + pcD / 2 + 0.005)
  const fan2 = new THREE.Mesh(fanGeo, cyanGlowMat)
  fan2.position.set(pcX, floorY + deskH + 0.32, pcZ + pcD / 2 + 0.005)

  // Power LED button
  const pwrBtn = new THREE.Mesh(new THREE.CircleGeometry(0.012, 12), cyanGlowMat)
  pwrBtn.rotation.x = -Math.PI / 2
  pwrBtn.position.set(pcX, floorY + deskH + pcH + 0.002, pcZ + pcD / 2 - 0.04)
  suiteGroup.add(pcCase, pcGlass, pcGpu, fan1, fan2, pwrBtn)

  // 5.4 Mechanical Keyboard & Mouse
  const kbGeo = new THREE.BoxGeometry(0.44, 0.015, 0.16)
  const kbMat = new THREE.MeshStandardMaterial({ color: 0x1b202c, roughness: 0.4 })
  const kb = new THREE.Mesh(kbGeo, kbMat)
  kb.position.set(deskX, floorY + deskH + 0.015, deskZ + 0.06)

  // Cyan key glow strip
  const kbGlow = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.004, 0.14), cyanGlowMat)
  kbGlow.position.set(deskX, floorY + deskH + 0.024, deskZ + 0.06)

  // Mouse with RGB scroll wheel
  const mouseGeo = new THREE.BoxGeometry(0.07, 0.025, 0.12)
  const mouse = new THREE.Mesh(mouseGeo, darkMetalMat)
  mouse.position.set(deskX + 0.36, floorY + deskH + 0.018, deskZ + 0.06)

  const wheelGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.018, 8)
  wheelGeo.rotateZ(Math.PI / 2)
  const wheel = new THREE.Mesh(wheelGeo, cyanGlowMat)
  wheel.position.set(deskX + 0.36, floorY + deskH + 0.032, deskZ + 0.02)
  suiteGroup.add(kb, kbGlow, mouse, wheel)

  // 5.5 Ceramic Coffee Mug
  const mugGeo = new THREE.CylinderGeometry(0.04, 0.038, 0.09, 16)
  const mug = new THREE.Mesh(mugGeo, whiteLinenMat)
  mug.position.set(deskX - 0.35, floorY + deskH + 0.045, deskZ + 0.15)

  const coffeeGeo = new THREE.CircleGeometry(0.036, 16)
  const coffee = new THREE.Mesh(coffeeGeo, new THREE.MeshBasicMaterial({ color: 0x2e1910 }))
  coffee.rotation.x = -Math.PI / 2
  coffee.position.set(deskX - 0.35, floorY + deskH + 0.088, deskZ + 0.15)
  suiteGroup.add(mug, coffee)

  // 5.6 Ergonomic Swivel Mesh Office Chair
  const chairX = deskX
  const chairZ = deskZ + 0.75

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
  const seatGeo = new THREE.BoxGeometry(0.52, 0.07, 0.5)
  const seat = new THREE.Mesh(seatGeo, new THREE.MeshStandardMaterial({ color: 0x161a22, roughness: 0.85 }))
  seat.position.set(chairX, floorY + 0.44, chairZ)

  // High curved mesh backrest
  const backGeo = new THREE.BoxGeometry(0.48, 0.65, 0.04)
  const back = new THREE.Mesh(backGeo, new THREE.MeshStandardMaterial({ color: 0x1d222e, roughness: 0.9 }))
  back.position.set(chairX, floorY + 0.82, chairZ + 0.24)
  back.rotation.x = -0.1

  // Armrests
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.28), darkMetalMat)
  armL.position.set(chairX - 0.28, floorY + 0.56, chairZ + 0.05)
  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.28), darkMetalMat)
  armR.position.set(chairX + 0.28, floorY + 0.56, chairZ + 0.05)
  suiteGroup.add(chairBase, seat, back, armL, armR)

  // =========================================================================
  // 6. MASTER PLATFORM BED (WEST WALL)
  // =========================================================================
  const bedX = cx - 2.2
  const bedZ = cz + 0.4
  const bedW = 2.4 // Along X
  const bedD = 1.9 // Along Z

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

  // Headboard against West wall
  const hbGeo = new THREE.BoxGeometry(0.12, 1.25, bedD + 0.2)
  const headboard = new THREE.Mesh(hbGeo, darkWoodMat)
  headboard.position.set(cx - innerW / 2 + 0.06, floorY + 0.72, bedZ)

  // Gold inlay strip along headboard
  const hbGold = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, bedD + 0.16), goldMat)
  hbGold.position.set(cx - innerW / 2 + 0.13, floorY + 0.95, bedZ)
  suiteGroup.add(headboard, hbGold)

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
  const runnerMat = new THREE.MeshStandardMaterial({ color: 0x111622, roughness: 0.78 })
  const runnerGeo = new THREE.BoxGeometry(0.48, 0.04, bedD - 0.06)
  const runner = new THREE.Mesh(runnerGeo, runnerMat)
  runner.position.set(bedX + 0.8, floorY + 0.58, bedZ)

  const runnerGold1 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, bedD - 0.06), goldMat)
  runnerGold1.position.set(bedX + 0.56, floorY + 0.6, bedZ)
  const runnerGold2 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, bedD - 0.06), goldMat)
  runnerGold2.position.set(bedX + 1.04, floorY + 0.6, bedZ)
  suiteGroup.add(duvet, cuff, runner, runnerGold1, runnerGold2)

  // Two Plump White Pillows
  const pillowGeo = new THREE.BoxGeometry(0.44, 0.15, 0.72)
  const pillow1 = new THREE.Mesh(pillowGeo, whiteLinenMat)
  pillow1.position.set(bedX - 0.85, floorY + 0.58, bedZ - 0.42)
  pillow1.rotation.y = 0.05

  const pillow2 = new THREE.Mesh(pillowGeo, whiteLinenMat)
  pillow2.position.set(bedX - 0.85, floorY + 0.58, bedZ + 0.42)
  pillow2.rotation.y = -0.05
  suiteGroup.add(pillow1, pillow2)

  // =========================================================================
  // 7. BEDSIDE NIGHTSTAND & DESIGNER WARM LAMP (SOUTH-WEST)
  // =========================================================================
  const nsX = cx - 3.4
  const nsZ = cz + 2.1
  const nsW = 0.82
  const nsD = 0.72
  const nsH = 0.54

  // Nightstand Cabinet
  const nsGeo = new THREE.BoxGeometry(nsW, nsH, nsD)
  const nsMesh = new THREE.Mesh(nsGeo, darkWoodMat)
  nsMesh.position.set(nsX, floorY + nsH / 2, nsZ)

  const nsGold = new THREE.Mesh(new THREE.BoxGeometry(nsW + 0.01, 0.015, nsD + 0.01), goldMat)
  nsGold.position.set(nsX, floorY + nsH - 0.01, nsZ)

  const nsDrawerHandle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.025, 0.32), goldMat)
  nsDrawerHandle.position.set(nsX + nsW / 2 + 0.01, floorY + nsH * 0.65, nsZ)
  suiteGroup.add(nsMesh, nsGold, nsDrawerHandle)

  // Designer Spherical Table Lamp
  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.02, 16), goldMat)
  lampBase.position.set(nsX, floorY + nsH + 0.01, nsZ - 0.15)

  const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 8), goldMat)
  lampStem.position.set(nsX, floorY + nsH + 0.12, nsZ - 0.15)

  const lampGlobeMat = new THREE.MeshBasicMaterial({ color: 0xfffae0, toneMapped: false })
  const lampGlobe = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), lampGlobeMat)
  lampGlobe.position.set(nsX, floorY + nsH + 0.28, nsZ - 0.15)
  suiteGroup.add(lampBase, lampStem, lampGlobe)

  // Digital LED Alarm Clock ("11:42")
  const clockTex = suiteAlarmClockTexture()
  const clockMat = new THREE.MeshBasicMaterial({ map: clockTex, toneMapped: false })
  const clockCase = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.09, 0.12), darkMetalMat)
  clockCase.position.set(nsX + 0.18, floorY + nsH + 0.045, nsZ + 0.16)
  clockCase.rotation.y = -0.35

  const clockScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.08), clockMat)
  clockScreen.position.set(nsX + 0.18 + Math.sin(-0.35) * 0.061, floorY + nsH + 0.045, nsZ + 0.16 + Math.cos(-0.35) * 0.061)
  clockScreen.rotation.y = -0.35
  suiteGroup.add(clockCase, clockScreen)

  // Hardcover Books Stack
  const book1 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.04, 0.18), new THREE.MeshStandardMaterial({ color: 0x8b1a1a, roughness: 0.6 }))
  book1.position.set(nsX - 0.16, floorY + nsH + 0.02, nsZ + 0.15)
  book1.rotation.y = 0.12

  const book2 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.035, 0.16), new THREE.MeshStandardMaterial({ color: 0x1b3b2b, roughness: 0.6 }))
  book2.position.set(nsX - 0.15, floorY + nsH + 0.055, nsZ + 0.14)
  book2.rotation.y = -0.06
  suiteGroup.add(book1, book2)

  // =========================================================================
  // 8. LUXURY CENTRAL AREA RUG
  // =========================================================================
  const rugTex = suiteLuxuryRugTexture()
  const rugMat = new THREE.MeshStandardMaterial({
    map: rugTex,
    roughness: 0.85,
    metalness: 0.08,
    transparent: true,
  })
  const rugMesh = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.1), rugMat)
  rugMesh.rotation.x = -Math.PI / 2
  rugMesh.position.set(cx + 0.6, floorY + 0.052, cz + 0.6)
  rugMesh.receiveShadow = true
  suiteGroup.add(rugMesh)

  // =========================================================================
  // 9. GRAND DOUBLE-DOOR WARDROBE (NORTH-EAST CORNER)
  // =========================================================================
  const wardX = cx + 3.1
  const wardZ = cz - 1.5
  const wardW = 1.6
  const wardD = 0.72
  const wardH = 2.45

  // Main Carcass
  const wardCarcass = new THREE.Mesh(new THREE.BoxGeometry(wardW, wardH, wardD), wardrobeWoodMat)
  wardCarcass.position.set(wardX, floorY + wardH / 2, wardZ)
  wardCarcass.castShadow = true

  // Crown Molding Cornice with Gold Inlay
  const cornice = new THREE.Mesh(new THREE.BoxGeometry(wardW + 0.08, 0.1, wardD + 0.08), darkWoodMat)
  cornice.position.set(wardX, floorY + wardH + 0.04, wardZ)

  const corniceGold = new THREE.Mesh(new THREE.BoxGeometry(wardW + 0.1, 0.015, wardD + 0.1), goldMat)
  corniceGold.position.set(wardX, floorY + wardH + 0.01, wardZ)
  suiteGroup.add(wardCarcass, cornice, corniceGold)

  // Symmetrical Twin Doors with Recessed Molding Panels
  const doorW = (wardW - 0.06) / 2
  const doorGeo = new THREE.BoxGeometry(doorW, wardH - 0.18, 0.03)

  const doorL = new THREE.Mesh(doorGeo, wardrobeWoodMat)
  doorL.position.set(wardX - doorW / 2 - 0.01, floorY + wardH / 2 - 0.02, wardZ + wardD / 2 + 0.01)

  const doorR = new THREE.Mesh(doorGeo, wardrobeWoodMat)
  doorR.position.set(wardX + doorW / 2 + 0.01, floorY + wardH / 2 - 0.02, wardZ + wardD / 2 + 0.01)

  // Recessed panel trims on doors
  const addDoorPanels = (parentDoor: THREE.Mesh) => {
    // Upper panel
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.14, 0.85, 0.01), darkWoodMat)
    p1.position.set(0, 0.42, 0.015)
    // Lower panel
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.14, 0.85, 0.01), darkWoodMat)
    p2.position.set(0, -0.48, 0.015)
    parentDoor.add(p1, p2)
  }
  addDoorPanels(doorL)
  addDoorPanels(doorR)

  // Vertical Polished Brass Pull Handles
  const handleGeoW = new THREE.BoxGeometry(0.02, 0.35, 0.03)
  const handleLW = new THREE.Mesh(handleGeoW, goldMat)
  handleLW.position.set(wardX - 0.05, floorY + 1.15, wardZ + wardD / 2 + 0.04)

  const handleRW = new THREE.Mesh(handleGeoW, goldMat)
  handleRW.position.set(wardX + 0.05, floorY + 1.15, wardZ + wardD / 2 + 0.04)
  suiteGroup.add(doorL, doorR, handleLW, handleRW)

  // =========================================================================
  // 10. LIGHTING RIG & LIGHT MANAGER SYNCHRONIZATION
  // =========================================================================

  // 10.1 Bedside Amber Designer Lamp
  let lampOn = true
  const lampLight = new THREE.PointLight(0xffa233, 2.6, 6.5, 1.2)
  lampLight.position.set(nsX, floorY + nsH + 0.35, nsZ - 0.15)
  suiteGroup.add(lampLight)

  // 10.2 Cyber Workstation Cyan Monitor Glow
  let pcOn = true
  const pcLight = new THREE.PointLight(0x00ffff, 2.0, 5.2, 1.1)
  pcLight.position.set(deskX, floorY + deskH + 0.38, deskZ - 0.1)
  suiteGroup.add(pcLight)

  // 10.3 Central Warm Recessed Cove Ambient Light
  const coveLight = new THREE.PointLight(0xffeed6, 1.8, 11, 1.2)
  coveLight.position.set(cx, floorY + wallH - 0.3, cz)
  suiteGroup.add(coveLight)

  if (lightManager) {
    lightManager.register({
      x: nsX,
      y: floorY + nsH + 0.35,
      z: nsZ - 0.15,
      color: 0xffa233,
      intensity: 2.6,
      distance: 6.5,
      decay: 1.2,
      zone: 'Suite402',
      dynamicIntensity: () => (lampOn ? 2.6 : 0),
    })

    lightManager.register({
      x: deskX,
      y: floorY + deskH + 0.38,
      z: deskZ - 0.1,
      color: 0x00ffff,
      intensity: 2.0,
      distance: 5.2,
      decay: 1.1,
      zone: 'Suite402',
      dynamicIntensity: () => (pcOn ? 1.8 + Math.sin(Date.now() * 0.003) * 0.2 : 0),
    })

    lightManager.register({
      x: cx,
      y: floorY + wallH - 0.3,
      z: cz,
      color: 0xffeed6,
      intensity: 1.8,
      distance: 11,
      decay: 1.2,
      zone: 'Suite402',
    })
  }

  // =========================================================================
  // 11. COLLISION BOUNDARIES
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

  // North Wall Sections (leaving balcony door open in center)
  colliders.add({
    minX: cx - innerW / 2 - 0.5,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx - 1.35,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })
  colliders.add({
    minX: cx + 1.35,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx + innerW / 2 + 0.5,
    maxY: 4.0,
    maxZ: cz - innerD / 2 + 0.05,
  })

  // Balcony perimeter railings
  colliders.add({
    minX: cx - balconyW / 2 - 0.2,
    minY: 0,
    minZ: balconyZ - balconyD / 2 - 0.3,
    maxX: cx + balconyW / 2 + 0.2,
    maxY: 4.0,
    maxZ: balconyZ - balconyD / 2 + 0.1,
  })
  colliders.add({
    minX: cx - balconyW / 2 - 0.3,
    minY: 0,
    minZ: cz - innerD / 2 - balconyD,
    maxX: cx - balconyW / 2 + 0.1,
    maxY: 4.0,
    maxZ: cz - innerD / 2,
  })
  colliders.add({
    minX: cx + balconyW / 2 - 0.1,
    minY: 0,
    minZ: cz - innerD / 2 - balconyD,
    maxX: cx + balconyW / 2 + 0.3,
    maxY: 4.0,
    maxZ: cz - innerD / 2,
  })

  // East Wall Sections (leaving living room / elevator door open)
  colliders.add({
    minX: cx + innerW / 2 - 0.05,
    minY: 0,
    minZ: cz - innerD / 2 - 0.5,
    maxX: cx + innerW / 2 + 1.0,
    maxY: 4.0,
    maxZ: cz - 0.1,
  })
  colliders.add({
    minX: cx + innerW / 2 - 0.05,
    minY: 0,
    minZ: cz + 1.6,
    maxX: cx + innerW / 2 + 1.0,
    maxY: 4.0,
    maxZ: cz + innerD / 2 + 0.5,
  })
  // East Door Stop (blocks walking outside past the threshold)
  colliders.add({
    minX: cx + innerW / 2 + 0.25,
    minY: 0,
    minZ: cz - 0.1,
    maxX: cx + innerW / 2 + 1.2,
    maxY: 4.0,
    maxZ: cz + 1.6,
  })

  // Furniture Colliders:
  // PC Desk
  colliders.add({
    minX: deskX - deskW / 2 - 0.1,
    minY: 0,
    minZ: deskZ - deskD / 2 - 0.1,
    maxX: deskX + deskW / 2 + 0.1,
    maxY: 1.5,
    maxZ: deskZ + deskD / 2 + 0.1,
  })

  // Master Bed
  colliders.add({
    minX: bedX - bedW / 2 - 0.1,
    minY: 0,
    minZ: bedZ - bedD / 2 - 0.1,
    maxX: bedX + bedW / 2 + 0.1,
    maxY: 1.2,
    maxZ: bedZ + bedD / 2 + 0.1,
  })

  // Nightstand
  colliders.add({
    minX: nsX - nsW / 2 - 0.05,
    minY: 0,
    minZ: nsZ - nsD / 2 - 0.05,
    maxX: nsX + nsW / 2 + 0.05,
    maxY: 1.0,
    maxZ: nsZ + nsD / 2 + 0.05,
  })

  // Wardrobe
  colliders.add({
    minX: wardX - wardW / 2 - 0.05,
    minY: 0,
    minZ: wardZ - wardD / 2 - 0.05,
    maxX: wardX + wardW / 2 + 0.05,
    maxY: 3.0,
    maxZ: wardZ + wardD / 2 + 0.05,
  })

  // =========================================================================
  // 12. PROXIMITY INTERACTIONS
  // =========================================================================

  // 1. Bedside Lamp Toggle
  interactions.add({
    id: 'suite-lamp',
    x: nsX,
    z: nsZ,
    radius: 1.8,
    prompt: () => (lampOn ? 'Turn Off Bedside Lamp [消灯]' : 'Turn On Bedside Lamp [点灯]'),
    onInteract: () => {
      lampOn = !lampOn
      lampGlobe.material = lampOn ? lampGlobeMat : new THREE.MeshBasicMaterial({ color: 0x4a4033 })
      lampLight.intensity = lampOn ? 2.6 : 0
      audio?.playVendingSound()
      messages.show(lampOn ? 'Bedside amber designer lamp turned ON.' : 'Bedside lamp turned OFF. Midnight shadows settle in.')
    },
  })

  // 2. PC Gaming / Cyber Workstation
  interactions.add({
    id: 'suite-pc',
    x: deskX,
    z: deskZ + 0.45,
    radius: 1.7,
    prompt: () => (pcOn ? 'Compile Code on Workstation [PC操作]' : 'Power On Workstation [PC起動]'),
    onInteract: () => {
      pcOn = true
      pcLight.intensity = 2.0
      audio?.playVendingSound()
      messages.show('💻 Tokyo Workstation: Build succeeded with 0 errors. All systems optimal!')
    },
  })

  // 3. Master Bed Rest
  interactions.add({
    id: 'suite-bed',
    x: bedX + 0.6,
    z: bedZ,
    radius: 1.8,
    prompt: () => 'Rest on Bed [ベッドで休む]',
    onInteract: () => {
      messages.show('🌙 You sit by the edge of your bed, listening to the distant midnight city murmur.')
    },
  })

  // 4. Wardrobe Inspection
  interactions.add({
    id: 'suite-wardrobe',
    x: wardX,
    z: wardZ + wardD / 2 + 0.4,
    radius: 1.6,
    prompt: () => 'Inspect Wardrobe [クローゼット]',
    onInteract: () => {
      messages.show('👔 Wardrobe: High-school blazer uniform, dark coats, and fresh linen neatly organized.')
    },
  })

  // 5. Exit Door to 4F Elevator Lounge & Corridor
  interactions.add({
    id: 'suite-elevator',
    x: cx + innerW / 2 - 0.2,
    z: cz + 0.7,
    radius: 1.6,
    prompt: () => 'Exit to 4F Lounge & Hallway [廊下・ラウンジへ]',
    onInteract: () => {
      audio?.playVendingSound()
      messages.show('Stepping out into the 4F Elevator Lounge...')
      setTimeout(() => {
        player.teleport(-5.8, 65.0, 0)
        messages.show('4F Elevator Lounge & Residential Corridor.', 4.0)
      }, 350)
    },
  })

  // 6. Balcony View
  interactions.add({
    id: 'suite-balcony',
    x: cx,
    z: cz - innerD / 2 - 0.8,
    radius: 1.6,
    prompt: () => 'Gaze across Tokyo Skyline [夜景を眺める]',
    onInteract: () => {
      messages.show('🌃 The midnight Tokyo skyline glimmers beneath the crescent moon. A cool evening breeze passes.')
    },
  })

  // =========================================================================
  // 13. RUNTIME UPDATE & DISTANCE CULLING
  // =========================================================================
  let time = 0

  return {
    group: suiteGroup,
    update(dt: number, p: { x: number; z: number }) {
      time += dt

      // Distance culling check (in Low quality mode)
      const distSq = (p.x - cx) ** 2 + (p.z - cz) ** 2
      const isNear = distSq < 1600 // 40 meters
      suiteGroup.visible = Settings.isHigh() || isNear

      if (!suiteGroup.visible) return

      // Subtle pulse on PC intake fans and LED power
      if (pcOn) {
        const pulse = 1.6 + Math.sin(time * 3.5) * 0.3
        pcLight.intensity = pulse
      }
    },
  }
}

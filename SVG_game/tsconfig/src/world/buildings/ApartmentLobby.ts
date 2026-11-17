import * as THREE from 'three'
import type { BuildingSpec } from '../../types'
import { CollisionWorld } from '../../game/Collision'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import { Settings } from '../../game/Settings'
import type { Player } from '../../game/Player'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
  apartmentLobbyWallTexture,
  apartmentLobbyFloorTexture,
  woodSlatTexture,
  apartmentMailboxTexture,
  apartmentDeliveryLockerTexture,
  receptionNoticeBoardTexture,
  apartmentDirectoryTexture,
  metalMat,
  lampMat,
  shopGlassMat,
  postMat,
  signMaterial,
  emergencyExitTexture,
} from '../Materials'

export function buildApartmentLobby(
  group: THREE.Group,
  spec: BuildingSpec,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  _wallMat: THREE.Material,
  trimMat: THREE.Material,
  audio?: AudioManager,
  lightManager?: LightManager,
  player?: Player,
  onRideElevatorTo4F?: () => void,
): { light: THREE.PointLight; update: (dt: number, p: { x: number; z: number }) => void } {
  const floorH = 3.2
  const halfW = spec.w / 2

  const interiorGroup = new THREE.Group()
  interiorGroup.name = 'lobby-interior-props'
  group.add(interiorGroup)

  // Lobby Interior Dimensions
  const innerW = 7.6
  const innerD = 8.4
  const floorY = 0.15
  const wallThick = 0.35
  const wallH = floorH - floorY

  // 1. FLOOR (Polished Taupe Marble Tiles)
  const floorMat = new THREE.MeshStandardMaterial({
    map: apartmentLobbyFloorTexture(),
    roughness: 0.22,
    metalness: 0.08,
  })
  const floorGeo = new THREE.BoxGeometry(innerW, 0.05, innerD)
  const floorMesh = new THREE.Mesh(floorGeo, floorMat)
  floorMesh.position.set(spec.x, floorY + 0.025, spec.z)
  floorMesh.receiveShadow = true
  group.add(floorMesh)

  // 2. CEILING (Clean Warm Suspended Ceiling with Recessed LED Cove Lighting)
  const ceilMat = new THREE.MeshStandardMaterial({ color: 0xf6f4ef, roughness: 0.5 })
  const ceilGeo = new THREE.BoxGeometry(innerW, 0.2, innerD)
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilMat)
  ceilMesh.position.set(spec.x, floorH - 0.1, spec.z)
  group.add(ceilMesh)

  // Recessed Ceiling Cove Tray (Indirect Warm Lighting)
  const trayW = 4.8
  const trayD = 5.6
  const trayGeo = new THREE.BoxGeometry(trayW, 0.08, trayD)
  const trayMat = new THREE.MeshStandardMaterial({ color: 0xf0ece2, roughness: 0.6 })
  const tray = new THREE.Mesh(trayGeo, trayMat)
  tray.position.set(spec.x, floorH - 0.04, spec.z)
  interiorGroup.add(tray)

  // Glowing perimeter cove LED strip
  const coveEdgeGeo = new THREE.BoxGeometry(trayW + 0.12, 0.02, trayD + 0.12)
  const coveEdge = new THREE.Mesh(coveEdgeGeo, lampMat)
  coveEdge.position.set(spec.x, floorH - 0.07, spec.z)
  interiorGroup.add(coveEdge)

  // 4 Recessed Downlight Fixtures
  for (const dx of [-1.8, 1.8]) {
    for (const dz of [-2.0, 2.0]) {
      const downGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.04, 12)
      const downMesh = new THREE.Mesh(downGeo, metalMat)
      downMesh.position.set(spec.x + dx, floorH - 0.02, spec.z + dz)
      const bulbMesh = new THREE.Mesh(new THREE.CircleGeometry(0.09, 12), lampMat)
      bulbMesh.rotateX(Math.PI / 2)
      bulbMesh.position.set(spec.x + dx, floorH - 0.041, spec.z + dz)
      interiorGroup.add(downMesh, bulbMesh)
    }
  }

  // 3. INTERIOR WALLS (Warm Ivory Limestone Tiles)
  const lobbyWallMat = new THREE.MeshStandardMaterial({
    map: apartmentLobbyWallTexture(),
    roughness: 0.55,
    metalness: 0.02,
  })

  // North (Back) Wall
  const backGeo = new THREE.BoxGeometry(innerW, wallH, wallThick)
  const backMesh = new THREE.Mesh(backGeo, lobbyWallMat)
  backMesh.position.set(spec.x, floorY + wallH / 2, spec.z + innerD / 2 - wallThick / 2)
  group.add(backMesh)
  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z + innerD / 2 - wallThick,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z + innerD / 2 + 1,
  })

  // West Wall
  const westGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const westMesh = new THREE.Mesh(westGeo, lobbyWallMat)
  westMesh.position.set(spec.x - innerW / 2 + wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(westMesh)
  colliders.add({
    minX: spec.x - halfW - 0.5,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x - innerW / 2 + wallThick,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // East Wall
  const eastGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const eastMesh = new THREE.Mesh(eastGeo, lobbyWallMat)
  eastMesh.position.set(spec.x + innerW / 2 - wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(eastMesh)
  colliders.add({
    minX: spec.x + innerW / 2 - wallThick,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + halfW + 0.5,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // South (Front) Wall: Has a 2.4m doorway in center
  const doorW = 2.4
  const sideWallW = (innerW - doorW) / 2

  // Left Front Wall
  const lfGeo = new THREE.BoxGeometry(sideWallW, wallH, wallThick)
  const lfMesh = new THREE.Mesh(lfGeo, lobbyWallMat)
  lfMesh.position.set(spec.x - innerW / 2 + sideWallW / 2, floorY + wallH / 2, spec.z - innerD / 2 + wallThick / 2)
  group.add(lfMesh)
  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x - doorW / 2,
    maxY: floorH,
    maxZ: spec.z - innerD / 2 + wallThick,
  })

  // Right Front Wall
  const rfGeo = new THREE.BoxGeometry(sideWallW, wallH, wallThick)
  const rfMesh = new THREE.Mesh(rfGeo, lobbyWallMat)
  rfMesh.position.set(spec.x + innerW / 2 - sideWallW / 2, floorY + wallH / 2, spec.z - innerD / 2 + wallThick / 2)
  group.add(rfMesh)
  colliders.add({
    minX: spec.x + doorW / 2,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z - innerD / 2 + wallThick,
  })

  // Lintel above front door
  const lintelGeo = new THREE.BoxGeometry(doorW, 0.7, wallThick)
  const lintelMesh = new THREE.Mesh(lintelGeo, trimMat)
  lintelMesh.position.set(spec.x, floorH - 0.35, spec.z - innerD / 2 + wallThick / 2)
  group.add(lintelMesh)

  // Glowing Green Emergency Exit Sign (非常口) above door
  const exitMat = new THREE.MeshBasicMaterial({ map: emergencyExitTexture(), toneMapped: false })
  const exitMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.35, 0.08), exitMat)
  exitMesh.position.set(spec.x, floorH - 0.55, spec.z - innerD / 2 + wallThick + 0.02)
  group.add(exitMesh)

  // Animated Glass automatic sliding door panels
  const glassGeo = new THREE.BoxGeometry(1.15, 2.3, 0.06)
  const dLeft = new THREE.Mesh(glassGeo, shopGlassMat)
  dLeft.position.set(spec.x - 0.65, floorY + 1.15, spec.z - innerD / 2 + wallThick / 2)
  const dRight = new THREE.Mesh(glassGeo, shopGlassMat)
  dRight.position.set(spec.x + 0.65, floorY + 1.15, spec.z - innerD / 2 + wallThick / 2)
  group.add(dLeft, dRight)

  // Genkan entrance runner mat
  const matGeo = new THREE.BoxGeometry(2.4, 0.015, 1.4)
  const matMaterial = new THREE.MeshStandardMaterial({ color: 0x2d1a24, roughness: 0.95 })
  const rug = new THREE.Mesh(matGeo, matMaterial)
  rug.position.set(spec.x, floorY + 0.035, spec.z - innerD / 2 + 1.2)
  group.add(rug)

  // Umbrella Stand (傘立て) near entrance
  const umbGeo = new THREE.CylinderGeometry(0.18, 0.16, 0.65, 12)
  const umbMesh = new THREE.Mesh(umbGeo, metalMat)
  umbMesh.position.set(spec.x + 1.5, floorY + 0.325, spec.z - innerD / 2 + 0.6)
  group.add(umbMesh)

  // Umbrellas handles inside
  for (let u = 0; u < 3; u++) {
    const handleGeo = new THREE.TorusGeometry(0.04, 0.012, 6, 12, Math.PI)
    const handleMesh = new THREE.Mesh(handleGeo, postMat)
    handleMesh.position.set(spec.x + 1.45 + u * 0.05, floorY + 0.72, spec.z - innerD / 2 + 0.6)
    group.add(handleMesh)
  }

  // Red Fire Extinguisher (消火器)
  const feGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.42, 10)
  const feMat = new THREE.MeshStandardMaterial({ color: 0xd92618, roughness: 0.3, metalness: 0.2 })
  const feMesh = new THREE.Mesh(feGeo, feMat)
  feMesh.position.set(spec.x - 1.5, floorY + 0.28, spec.z - innerD / 2 + 0.5)
  group.add(feMesh)

  // Intercom Security Unit outside
  const icGeo = new THREE.BoxGeometry(0.35, 0.5, 0.06)
  const icMesh = new THREE.Mesh(icGeo, metalMat)
  icMesh.position.set(spec.x + doorW / 2 + 0.4, floorY + 1.35, spec.z - innerD / 2 - 0.05)
  group.add(icMesh)

  // Entrance Signboard outside
  const signMat = signMaterial('サンハイツ SUN HEIGHTS', '#1d2530', '#e2ebf5', 'RESIDENCE 1-24', 512, 128)
  const signMesh = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.65, 0.12), signMat)
  signMesh.position.set(spec.x, floorH - 0.25, spec.z - innerD / 2 - 0.08)
  group.add(signMesh)

  // =========================================================================
  // 4. WEST WALL: POLISHED MAILBOX BANK & TAKKYUBIN DELIVERY LOCKERS
  // =========================================================================
  const westWallX = spec.x - innerW / 2 + wallThick

  // (A) Polished Stainless Mailbox Bank
  const mailW = 0.28
  const mailH = 1.35
  const mailL = 2.6
  const mailBankX = westWallX + mailW / 2 + 0.01
  const mailBankZ = spec.z - 0.5

  const mailHousingGeo = new THREE.BoxGeometry(mailW, mailH, mailL)
  const mailHousingMat = new THREE.MeshStandardMaterial({ color: 0x4a525d, roughness: 0.3, metalness: 0.6 })
  const mailHousing = new THREE.Mesh(mailHousingGeo, mailHousingMat)
  mailHousing.position.set(mailBankX, floorY + 1.25, mailBankZ)
  interiorGroup.add(mailHousing)

  // Detailed textured mailbox front face (24 individual numbered units)
  const mailFrontMat = new THREE.MeshStandardMaterial({
    map: apartmentMailboxTexture(),
    roughness: 0.25,
    metalness: 0.5,
  })
  const mailFront = new THREE.Mesh(new THREE.PlaneGeometry(mailL, mailH), mailFrontMat)
  mailFront.rotateY(Math.PI / 2)
  mailFront.position.set(mailBankX + mailW / 2 + 0.005, floorY + 1.25, mailBankZ)
  interiorGroup.add(mailFront)

  // Stainless steel mail sorting counter ledge underneath
  const ledgeGeo = new THREE.BoxGeometry(0.38, 0.04, mailL + 0.1)
  const ledgeMesh = new THREE.Mesh(ledgeGeo, metalMat)
  ledgeMesh.position.set(westWallX + 0.19, floorY + 0.56, mailBankZ)
  interiorGroup.add(ledgeMesh)

  // Junk Mail / Flyer Recycling Bin (不要チラシ回収BOX)
  const flyerBinGeo = new THREE.BoxGeometry(0.32, 0.45, 0.45)
  const flyerBinMat = new THREE.MeshStandardMaterial({ color: 0x22553b, roughness: 0.4 })
  const flyerBin = new THREE.Mesh(flyerBinGeo, flyerBinMat)
  flyerBin.position.set(westWallX + 0.18, floorY + 0.23, mailBankZ + mailL / 2 - 0.3)
  interiorGroup.add(flyerBin)

  const binSlot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.06), metalMat)
  binSlot.position.set(westWallX + 0.18, floorY + 0.46, mailBankZ + mailL / 2 - 0.3)
  interiorGroup.add(binSlot)

  // (B) Electronic Takkyubin Delivery Lockers (宅配ボックス)
  const lockW = 0.44
  const lockH = 1.95
  const lockL = 1.6
  const lockBankX = westWallX + lockW / 2 + 0.01
  const lockBankZ = spec.z + 2.1

  const lockerHousing = new THREE.Mesh(
    new THREE.BoxGeometry(lockW, lockH, lockL),
    new THREE.MeshStandardMaterial({ color: 0x1f2630, roughness: 0.35, metalness: 0.5 }),
  )
  lockerHousing.position.set(lockBankX, floorY + lockH / 2, lockBankZ)
  interiorGroup.add(lockerHousing)

  // Textured locker front face with touch panel and lockers
  const lockFrontMat = new THREE.MeshStandardMaterial({
    map: apartmentDeliveryLockerTexture(),
    roughness: 0.3,
    metalness: 0.4,
  })
  const lockFront = new THREE.Mesh(new THREE.PlaneGeometry(lockL, lockH), lockFrontMat)
  lockFront.rotateY(Math.PI / 2)
  lockFront.position.set(lockBankX + lockW / 2 + 0.005, floorY + lockH / 2, lockBankZ)
  interiorGroup.add(lockFront)

  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z - 2.0,
    maxX: spec.x - innerW / 2 + 0.85,
    maxY: 2.4,
    maxZ: spec.z + 3.1,
  })

  interactions.add({
    id: 'apt-mailboxes',
    x: westWallX + 0.95,
    z: spec.z + 0.6,
    radius: 2.2,
    prompt: 'Check Mail & Parcel Lockers',
    onInteract: () => {
      messages.show(
        'Apartment #304 (Relzzy): Tokyo Gas statement, local izakaya coupon, and a notification: Delivery Locker #3 is holding your Amazon parcel!',
      )
    },
  })

  // =========================================================================
  // 5. EAST WALL: RECEPTIONIST DESK (管理人室 / フロント) & MANAGEMENT CORNER
  // =========================================================================
  const eastWallX = spec.x + innerW / 2 - wallThick

  // Reception Desk Dimensions
  const deskW = 1.15
  const deskH = 1.05
  const deskL = 2.4
  const deskX = eastWallX - deskW / 2 - 0.2
  const deskZ = spec.z + 0.9

  // Desk Base (Wrapped in natural Japanese oak wood slats)
  const deskBaseMat = new THREE.MeshStandardMaterial({
    map: woodSlatTexture(),
    roughness: 0.4,
    metalness: 0.05,
  })
  const deskBase = new THREE.Mesh(new THREE.BoxGeometry(deskW, deskH, deskL), deskBaseMat)
  deskBase.position.set(deskX, floorY + deskH / 2, deskZ)
  deskBase.castShadow = true
  interiorGroup.add(deskBase)

  // Undercounter Warm LED Glow Strip (Luxury cove light beneath counter edge)
  const deskGlowGeo = new THREE.BoxGeometry(0.04, 0.02, deskL - 0.04)
  const deskGlow = new THREE.Mesh(deskGlowGeo, lampMat)
  deskGlow.position.set(deskX - deskW / 2 - 0.01, floorY + deskH - 0.02, deskZ)
  interiorGroup.add(deskGlow)

  // Polished White Quartz Countertop Slab
  const slabGeo = new THREE.BoxGeometry(deskW + 0.08, 0.06, deskL + 0.08)
  const slabMat = new THREE.MeshStandardMaterial({ color: 0xf5f7fb, roughness: 0.18, metalness: 0.08 })
  const slab = new THREE.Mesh(slabGeo, slabMat)
  slab.position.set(deskX, floorY + deskH + 0.03, deskZ)
  interiorGroup.add(slab)

  // Countertop Clear Glass Partition Screen with Speech Cutout
  const glassScreenGeo = new THREE.BoxGeometry(0.02, 0.45, deskL * 0.75)
  const glassScreen = new THREE.Mesh(glassScreenGeo, shopGlassMat)
  glassScreen.position.set(deskX - deskW / 2 + 0.05, floorY + deskH + 0.28, deskZ + 0.2)
  interiorGroup.add(glassScreen)

  // Brass Reception Service Call Bell (卓上コールベル)
  const bellBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.02, 12), metalMat)
  const bellDome = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.2, metalness: 0.8 }),
  )
  const bellPin = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.03, 8), metalMat)
  bellBase.position.set(deskX - deskW / 4, floorY + deskH + 0.07, deskZ - 0.5)
  bellDome.position.set(deskX - deskW / 4, floorY + deskH + 0.08, deskZ - 0.5)
  bellPin.position.set(deskX - deskW / 4, floorY + deskH + 0.125, deskZ - 0.5)
  interiorGroup.add(bellBase, bellDome, bellPin)

  // Resident Guest Logbook (受付簿) open on counter
  const bookBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.015, 0.22),
    new THREE.MeshStandardMaterial({ color: 0x241e1a, roughness: 0.8 }),
  )
  const bookPages = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.016, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xfbfbf8, roughness: 0.5 }),
  )
  bookBase.position.set(deskX - deskW / 4, floorY + deskH + 0.065, deskZ - 0.1)
  bookPages.position.set(deskX - deskW / 4, floorY + deskH + 0.075, deskZ - 0.1)
  interiorGroup.add(bookBase, bookPages)

  // Silver Pen in Stand
  const penStand = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.03, 8), metalMat)
  penStand.position.set(deskX - deskW / 4 + 0.18, floorY + deskH + 0.075, deskZ - 0.1)
  const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.14, 6), metalMat)
  pen.position.set(deskX - deskW / 4 + 0.18, floorY + deskH + 0.14, deskZ - 0.1)
  pen.rotateZ(0.15)
  interiorGroup.add(penStand, pen)

  // Intercom Office Telephone Console (内線電話機)
  const phoneBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.05, 0.18),
    new THREE.MeshStandardMaterial({ color: 0x1f2328, roughness: 0.4 }),
  )
  phoneBody.position.set(deskX + 0.05, floorY + deskH + 0.08, deskZ + 0.6)
  const phoneHandset = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.04, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x11161d, roughness: 0.3 }),
  )
  phoneHandset.position.set(deskX + 0.02, floorY + deskH + 0.11, deskZ + 0.6)
  interiorGroup.add(phoneBody, phoneHandset)

  // Banker's Desk Lamp with Emerald Green Shade
  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.02, 10), metalMat)
  lampBase.position.set(deskX + 0.15, floorY + deskH + 0.07, deskZ - 0.6)
  const lampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28, 8), metalMat)
  lampPole.position.set(deskX + 0.15, floorY + deskH + 0.21, deskZ - 0.6)
  const lampShade = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.08, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x0a4a2b, roughness: 0.3, metalness: 0.2 }),
  )
  lampShade.position.set(deskX + 0.12, floorY + deskH + 0.33, deskZ - 0.6)
  interiorGroup.add(lampBase, lampPole, lampShade)

  // Warm local glow from desk lamp
  const deskLampLight = new THREE.PointLight(0xffdfa0, 1.2, 3.5)
  deskLampLight.position.set(deskX + 0.12, floorY + deskH + 0.3, deskZ - 0.6)
  if (lightManager) {
    lightManager.register({
      x: deskX + 0.12,
      y: floorY + deskH + 0.3,
      z: deskZ - 0.6,
      color: 0xffdfa0,
      intensity: 1.2,
      distance: 3.5,
      zone: 'Lobby',
    })
  } else {
    interiorGroup.add(deskLampLight)
  }

  // Brass Concierge Desk Plate (管理事務室)
  const deskSignMat = signMaterial('管理事務室', '#18202c', '#d4af37', 'CONCIERGE & MGMT', 256, 128)
  const deskPlate = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.12), deskSignMat)
  deskPlate.rotateY(-Math.PI / 2)
  deskPlate.position.set(deskX - deskW / 2 - 0.005, floorY + deskH + 0.08, deskZ - 0.8)
  interiorGroup.add(deskPlate)

  // Ergonomic Mesh Swivel Chair behind counter
  const chairBase = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.04, 6), metalMat)
  chairBase.position.set(deskX + 0.45, floorY + 0.06, deskZ + 0.1)
  const chairPost = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.45, 8), metalMat)
  chairPost.position.set(deskX + 0.45, floorY + 0.28, deskZ + 0.1)
  const chairSeat = new THREE.Mesh(
    new THREE.BoxGeometry(0.44, 0.06, 0.42),
    new THREE.MeshStandardMaterial({ color: 0x181e26, roughness: 0.7 }),
  )
  chairSeat.position.set(deskX + 0.45, floorY + 0.52, deskZ + 0.1)
  const chairBack = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.44, 0.4),
    new THREE.MeshStandardMaterial({ color: 0x222a36, roughness: 0.6 }),
  )
  chairBack.position.set(deskX + 0.64, floorY + 0.74, deskZ + 0.1)
  interiorGroup.add(chairBase, chairPost, chairSeat, chairBack)

  // Wall-Mounted Key Cabinet (キーキャビネット)
  const keyCab = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.6, 0.45),
    new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.6 }),
  )
  keyCab.position.set(eastWallX - 0.05, floorY + 1.5, deskZ - 0.6)
  interiorGroup.add(keyCab)

  // Security CCTV Quad-Display (防犯カメラ モニター)
  const cctv = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.55, 0.85),
    new THREE.MeshStandardMaterial({ color: 0x11161d, roughness: 0.3 }),
  )
  cctv.position.set(eastWallX - 0.04, floorY + 1.65, deskZ + 0.6)
  const cctvScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 0.5),
    new THREE.MeshBasicMaterial({ color: 0x224455 }),
  )
  cctvScreen.rotateY(-Math.PI / 2)
  cctvScreen.position.set(eastWallX - 0.075, floorY + 1.65, deskZ + 0.6)
  interiorGroup.add(cctv, cctvScreen)

  // Resident Notice Board (サンハイツ管理組合 掲示板)
  const nbMat = new THREE.MeshStandardMaterial({
    map: receptionNoticeBoardTexture(),
    roughness: 0.6,
  })
  const noticeBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), nbMat)
  noticeBoard.rotateY(-Math.PI / 2)
  noticeBoard.position.set(eastWallX - 0.015, floorY + 1.65, deskZ - 0.2)
  interiorGroup.add(noticeBoard)

  colliders.add({
    minX: deskX - deskW / 2 - 0.1,
    minY: 0,
    minZ: deskZ - deskL / 2 - 0.1,
    maxX: spec.x + innerW / 2,
    maxY: 2.2,
    maxZ: deskZ + deskL / 2 + 0.2,
  })

  interactions.add({
    id: 'apt-reception-bell',
    x: deskX - deskW / 2 - 0.4,
    z: deskZ - 0.5,
    radius: 1.8,
    prompt: 'Ring Concierge Desk Bell',
    onInteract: () => {
      audio?.playDeskBellSound()
      messages.show(
        '*Ting!* Resident Manager: "Konnichiwa! Welcome back to Sun Heights. All parcel lockers and facilities are operational."',
      )
    },
  })

  interactions.add({
    id: 'apt-notice-board',
    x: deskX - deskW / 2 - 0.4,
    z: deskZ - 0.1,
    radius: 1.8,
    prompt: 'Read Resident Notices',
    onInteract: () => {
      messages.show(
        '[Lobby Notices] ① Trash: Burnable Mon/Thu, Recyclable Wed. ② Annual fire equipment check this Saturday. ③ Please collapse Amazon cardboard boxes.',
      )
    },
  })

  // =========================================================================
  // 6. LOBBY LOUNGE & DIRECTORY BOARD (EAST WALL FRONT SECTION)
  // =========================================================================
  // Modern Building Directory Board
  const dirMat = new THREE.MeshStandardMaterial({
    map: apartmentDirectoryTexture(),
    roughness: 0.35,
    metalness: 0.2,
  })
  const dirMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.05), dirMat)
  dirMesh.rotateY(-Math.PI / 2)
  dirMesh.position.set(eastWallX - 0.015, floorY + 1.6, spec.z - 2.2)
  interiorGroup.add(dirMesh)

  // Contemporary Upholstered Waiting Bench (Cognac leather & dark walnut)
  const benchL = 1.4
  const benchW = 0.55
  const benchX = eastWallX - benchW / 2 - 0.25
  const benchZ = spec.z - 1.2

  const bBaseGeo = new THREE.BoxGeometry(benchW, 0.06, benchL)
  const bBaseMat = new THREE.MeshStandardMaterial({ color: 0x2b1d14, roughness: 0.7 })
  const bBase = new THREE.Mesh(bBaseGeo, bBaseMat)
  bBase.position.set(benchX, floorY + 0.22, benchZ)

  const bCushionGeo = new THREE.BoxGeometry(benchW - 0.04, 0.18, benchL - 0.04)
  const bCushionMat = new THREE.MeshStandardMaterial({ color: 0x7c4322, roughness: 0.5 }) // Cognac leather!
  const bCushion = new THREE.Mesh(bCushionGeo, bCushionMat)
  bCushion.position.set(benchX, floorY + 0.33, benchZ)

  for (const lx of [-benchW / 2 + 0.08, benchW / 2 - 0.08]) {
    for (const lz of [-benchL / 2 + 0.08, benchL / 2 - 0.08]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.015, 0.22, 8), metalMat)
      leg.position.set(benchX + lx, floorY + 0.11, benchZ + lz)
      interiorGroup.add(leg)
    }
  }
  interiorGroup.add(bBase, bCushion)

  colliders.add({
    minX: benchX - benchW / 2,
    minY: 0,
    minZ: benchZ - benchL / 2,
    maxX: eastWallX,
    maxY: 1.0,
    maxZ: benchZ + benchL / 2,
  })

  // Large Indoor Potted Plant (観葉植物) in corner
  const potGeo = new THREE.CylinderGeometry(0.24, 0.18, 0.55, 12)
  const potMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.3 })
  const pot = new THREE.Mesh(potGeo, potMat)
  const plantX = spec.x - innerW / 2 + 0.8
  const plantZ = spec.z - innerD / 2 + 0.9
  pot.position.set(plantX, floorY + 0.275, plantZ)
  interiorGroup.add(pot)

  // Lush green leaves
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x2e6f40, roughness: 0.4 })
  for (let l = 0; l < 7; l++) {
    const leafGeo = new THREE.ConeGeometry(0.18, 0.65, 5)
    leafGeo.rotateX(0.4)
    const leaf = new THREE.Mesh(leafGeo, leafMat)
    leaf.position.set(plantX, floorY + 0.55, plantZ)
    leaf.rotateY((l * Math.PI * 2) / 7)
    interiorGroup.add(leaf)
  }

  // =========================================================================
  // 7. NORTH WALL: ELEVATOR HALL & 3D INTERIOR CAB
  // =========================================================================
  const elevW = 2.0
  const elevH = 2.4
  const elevZ = spec.z + innerD / 2 - wallThick - 0.05

  // Brushed Champagne Gold Door Frame (三方枠)
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x7c694a, roughness: 0.25, metalness: 0.7 })
  const fL = new THREE.Mesh(new THREE.BoxGeometry(0.12, elevH + 0.06, 0.08), frameMat)
  fL.position.set(spec.x - elevW / 2 - 0.06, floorY + elevH / 2, elevZ)
  const fR = new THREE.Mesh(new THREE.BoxGeometry(0.12, elevH + 0.06, 0.08), frameMat)
  fR.position.set(spec.x + elevW / 2 + 0.06, floorY + elevH / 2, elevZ)
  const fT = new THREE.Mesh(new THREE.BoxGeometry(elevW + 0.24, 0.12, 0.08), frameMat)
  fT.position.set(spec.x, floorY + elevH + 0.06, elevZ)
  interiorGroup.add(fL, fR, fT)

  // Sliding Elevator Doors
  const elevLeftGeo = new THREE.BoxGeometry(0.98, elevH, 0.06)
  const elevRightGeo = new THREE.BoxGeometry(0.98, elevH, 0.06)
  const elevDoorMat = new THREE.MeshStandardMaterial({ color: 0x8a929d, roughness: 0.25, metalness: 0.75 })
  const elevLeft = new THREE.Mesh(elevLeftGeo, elevDoorMat)
  const elevRight = new THREE.Mesh(elevRightGeo, elevDoorMat)
  elevLeft.position.set(spec.x - 0.5, floorY + elevH / 2, elevZ)
  elevRight.position.set(spec.x + 0.5, floorY + elevH / 2, elevZ)
  interiorGroup.add(elevLeft, elevRight)

  // Digital Floor Indicator (Floor "1F ▲" Amber Glowing Display)
  const indGeo = new THREE.PlaneGeometry(0.45, 0.22)
  const indMat = new THREE.MeshBasicMaterial({ color: 0xffaa22 })
  const indMesh = new THREE.Mesh(indGeo, indMat)
  indMesh.position.set(spec.x, floorY + elevH + 0.22, elevZ + 0.05)
  interiorGroup.add(indMesh)

  // Wall Call Station with Circular Illuminated Call Button
  const callPlate = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.03), metalMat)
  callPlate.position.set(spec.x + elevW / 2 + 0.35, floorY + 1.25, elevZ + 0.03)
  const callBtn = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 10), lampMat)
  callBtn.rotateX(Math.PI / 2)
  callBtn.position.set(spec.x + elevW / 2 + 0.35, floorY + 1.28, elevZ + 0.05)
  interiorGroup.add(callPlate, callBtn)

  // 3D ELEVATOR CAB INTERIOR (Visible & Steppable Behind Doors)
  const cabW = 2.0
  const cabD = 1.8
  const cabH = 2.5
  const cabCenterZ = elevZ + cabD / 2 + 0.05

  // Cab Floor
  const cabFloorMesh = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.04, cabD), floorMat)
  cabFloorMesh.position.set(spec.x, floorY + 0.02, cabCenterZ)
  interiorGroup.add(cabFloorMesh)

  // Cab Ceiling
  const cabCeilMesh = new THREE.Mesh(new THREE.BoxGeometry(cabW, 0.08, cabD), metalMat)
  cabCeilMesh.position.set(spec.x, floorY + cabH, cabCenterZ)
  interiorGroup.add(cabCeilMesh)

  // Cab Back Mirror Wall
  const mirrorGeo = new THREE.BoxGeometry(cabW - 0.1, cabH - 0.2, 0.04)
  const mirrorMat = new THREE.MeshStandardMaterial({ color: 0xccd6e0, roughness: 0.05, metalness: 0.9 })
  const mirror = new THREE.Mesh(mirrorGeo, mirrorMat)
  mirror.position.set(spec.x, floorY + cabH / 2, cabCenterZ + cabD / 2 - 0.02)
  interiorGroup.add(mirror)

  // Cab Left & Right Stainless Walls
  const cabWallGeo = new THREE.BoxGeometry(0.04, cabH, cabD)
  const cabLWall = new THREE.Mesh(cabWallGeo, elevDoorMat)
  cabLWall.position.set(spec.x - cabW / 2 + 0.02, floorY + cabH / 2, cabCenterZ)
  const cabRWall = new THREE.Mesh(cabWallGeo, elevDoorMat)
  cabRWall.position.set(spec.x + cabW / 2 - 0.02, floorY + cabH / 2, cabCenterZ)
  interiorGroup.add(cabLWall, cabRWall)

  // Cab Horizontal Safety Handrail Bar
  const railGeo = new THREE.CylinderGeometry(0.02, 0.02, cabW - 0.2, 8)
  railGeo.rotateZ(Math.PI / 2)
  const rail = new THREE.Mesh(railGeo, metalMat)
  rail.position.set(spec.x, floorY + 0.9, cabCenterZ + cabD / 2 - 0.1)
  interiorGroup.add(rail)

  // Inside Floor Button Column
  const inBtnCol = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.7, 0.14), metalMat)
  inBtnCol.position.set(spec.x + cabW / 2 - 0.06, floorY + 1.25, cabCenterZ - 0.2)
  interiorGroup.add(inBtnCol)

  // Inside Cab Warm Ceiling Spotlight
  const cabLight = new THREE.PointLight(0xfffae0, 2.0, 5.5)
  cabLight.position.set(spec.x, floorY + cabH - 0.15, cabCenterZ)
  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorY + cabH - 0.15,
      z: cabCenterZ,
      color: 0xfffae0,
      intensity: 2.0,
      distance: 5.5,
      zone: 'Lobby',
    })
  } else {
    interiorGroup.add(cabLight)
  }

  // Elevator Cab Perimeter Colliders
  colliders.add({
    minX: spec.x - cabW / 2 - 0.2,
    minY: 0,
    minZ: cabCenterZ + cabD / 2 - 0.1,
    maxX: spec.x + cabW / 2 + 0.2,
    maxY: floorH,
    maxZ: cabCenterZ + cabD / 2 + 0.3,
  })
  colliders.add({
    minX: spec.x - cabW / 2 - 0.2,
    minY: 0,
    minZ: elevZ,
    maxX: spec.x - cabW / 2 + 0.1,
    maxY: floorH,
    maxZ: cabCenterZ + cabD / 2,
  })
  colliders.add({
    minX: spec.x + cabW / 2 - 0.1,
    minY: 0,
    minZ: elevZ,
    maxX: spec.x + cabW / 2 + 0.2,
    maxY: floorH,
    maxZ: cabCenterZ + cabD / 2,
  })

  // Elevator Call Button
  let elevOpen = false
  interactions.add({
    id: 'apt-elevator',
    x: spec.x + elevW / 2 + 0.35,
    z: spec.z + innerD / 2 - 0.8,
    radius: 1.8,
    prompt: () => (elevOpen ? 'Take Elevator to 4F Lounge [4階 ラウンジへ]' : 'Call Elevator [1階 エレベーター]'),
    onInteract: () => {
      if (!elevOpen) {
        elevOpen = true
        audio?.playElevatorChime()
        messages.show('*Ding* Elevator arrives at 1F. Champagne doors glide open.')
      } else {
        elevOpen = false
        audio?.playElevatorChime()
        messages.show('*Ding* Doors glide shut. Riding elevator up to 4F Lounge...')
        if (player) {
          setTimeout(() => {
            player.teleport(-1.15, 61.5, 0)
            onRideElevatorTo4F?.()
            messages.show('Sun Heights 4F Elevator Lounge. Suite 402 is down the hall to the left.', 5.0)
          }, 450)
        }
      }
    },
  })

  // =========================================================================
  // 8. LOBBY LIGHTING & AMBIANCE (WARM, BRIGHT, INVITING)
  // =========================================================================
  // Central Warm Ambient Downlight
  const light = new THREE.PointLight(0xffe8cf, 2.2, 16, 1.1)
  light.position.set(spec.x, floorH - 0.25, spec.z)

  // Reception Desk Focused Warm Spot
  const receptionLight = new THREE.PointLight(0xffe0b0, 1.8, 8, 1.2)
  receptionLight.position.set(deskX, floorH - 0.25, deskZ)

  // Elevator Hall Downlight
  const elevatorHallLight = new THREE.PointLight(0xffe6c8, 1.8, 8, 1.2)
  elevatorHallLight.position.set(spec.x, floorH - 0.25, elevZ - 1.2)

  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorH - 0.25,
      z: spec.z,
      color: 0xffe8cf,
      intensity: 2.2,
      distance: 16,
      decay: 1.1,
      zone: 'Lobby',
    })
    lightManager.register({
      x: deskX,
      y: floorH - 0.25,
      z: deskZ,
      color: 0xffe0b0,
      intensity: 1.8,
      distance: 8,
      decay: 1.2,
      zone: 'Lobby',
    })
    lightManager.register({
      x: spec.x,
      y: floorH - 0.25,
      z: elevZ - 1.2,
      color: 0xffe6c8,
      intensity: 1.8,
      distance: 8,
      decay: 1.2,
      zone: 'Lobby',
    })
  } else {
    group.add(light)
    group.add(receptionLight)
    group.add(elevatorHallLight)
  }

  let doorProgress = 0
  let elevProgress = 0
  let doorPlayed = false

  const update = (dt: number, p: { x: number; z: number }): void => {
    // Distance culling: hide interior props when player is more than 28m away (in low graphics mode)
    const distSq = (p.x - spec.x) ** 2 + (p.z - spec.z) ** 2
    interiorGroup.visible = Settings.isHigh() || distSq < 784

    // Proximity to front glass doors
    const distToDoor = Math.hypot(p.x - spec.x, p.z - (spec.z - innerD / 2))
    const doorTarget = distToDoor < 2.6 ? 1.0 : 0.0

    if (doorTarget > 0.5 && !doorPlayed) {
      audio?.playSlidingDoorSound()
      doorPlayed = true
    } else if (doorTarget < 0.5) {
      doorPlayed = false
    }

    doorProgress += (doorTarget - doorProgress) * Math.min(1, dt * 5)
    dLeft.position.x = spec.x - 0.65 - doorProgress * 0.75
    dRight.position.x = spec.x + 0.65 + doorProgress * 0.75

    // Elevator doors
    if (interiorGroup.visible) {
      const elevTarget = elevOpen ? 1.0 : 0.0
      elevProgress += (elevTarget - elevProgress) * Math.min(1, dt * 4)
      elevLeft.position.x = spec.x - 0.5 - elevProgress * 0.75
      elevRight.position.x = spec.x + 0.5 + elevProgress * 0.75
    }
  }

  return { light, update }
}

// =========================================================================
// 2. CONVENIENCE STORE (FAMILY KONBINI)

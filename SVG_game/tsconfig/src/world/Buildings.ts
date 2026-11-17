import * as THREE from 'three'
import type { BuildingSpec, FaceId } from '../types'
import { NEIGHBORHOOD_BUILDINGS } from './Layout'
import {
  signMaterial,
  shopGlassMat,
  acMat,
  postMat,
  lampMat,
  tileMat,
  metalMat,
  emergencyExitTexture,
  steamMat,
  konbiniCounterFrontTexture,
  konbiniWallTexture,
  konbiniCoolerDoorsTexture,
  hotSnacksDisplayTexture,
  apartmentLobbyWallTexture,
  apartmentLobbyFloorTexture,
  woodSlatTexture,
  apartmentMailboxTexture,
  apartmentDeliveryLockerTexture,
  receptionNoticeBoardTexture,
  apartmentDirectoryTexture,
  ramenSignTexture,
  ramenLanternTexture,
  ramenNorenTexture,
  ramenKenbaikiTexture,
  ramenWallTexture,
  ramenFloorTexture,
  dentalClinicWindowTexture,
  dentalClinicSignTexture,
  dryCleanerWindowTexture,
  dryCleanerSignTexture,
  izakayaFacadeTexture,
  izakayaSignTexture,
  pharmacyWindowTexture,
  pharmacySignTexture,
  bookstoreWindowTexture,
  bookstoreSignTexture,
  cafeStorefrontTexture,
  cafeSignTexture,
  aFrameSignTexture,
  residentialEntranceTexture,
  type AFrameSignType,
} from './Materials'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import { Settings } from '../game/Settings'
import type { Player } from '../game/Player'
import { buildSuite402 } from './Suite402'
import { buildCorridor4F, type Corridor4FResult } from './Corridor4F'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'

export interface BuildingsResult {
  group: THREE.Group
  lobbyLight: THREE.PointLight
  konbiniLight: THREE.PointLight
  ramenLight: THREE.PointLight
  update(dt: number, player: { x: number; z: number }): void
}

export function buildBuildings(
  scene: THREE.Scene,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  audio?: AudioManager,
  lightManager?: LightManager,
  player?: Player,
): BuildingsResult {
  const root = new THREE.Group()
  root.name = 'buildings'

  let lobbyLight: THREE.PointLight | null = null
  let konbiniLight: THREE.PointLight | null = null
  let ramenLight: THREE.PointLight | null = null

  // Animation hooks
  const animators: ((dt: number, player: { x: number; z: number }) => void)[] = []
  let corridorRes: Corridor4FResult | undefined

  for (const spec of NEIGHBORHOOD_BUILDINGS) {
    const bGroup = new THREE.Group()
    bGroup.name = `building-${spec.id}`

    // Base Dimensions
    const floorH = 3.2
    const totalH = spec.floors * floorH
    const halfW = spec.w / 2
    const halfD = spec.d / 2

    // Wall Material for this building
    const wallColor = new THREE.Color(spec.wall)
    const trimColor = new THREE.Color(spec.trim)
    const balconyColor = new THREE.Color(spec.balcony)

    const wallMat = new THREE.MeshStandardMaterial({
      color: wallColor,
      roughness: 0.82,
      metalness: 0.08,
    })
    const trimMat = new THREE.MeshStandardMaterial({
      color: trimColor,
      roughness: 0.65,
      metalness: 0.12,
    })
    const balconyMat = new THREE.MeshStandardMaterial({
      color: balconyColor,
      roughness: 0.75,
      metalness: 0.15,
    })

    // 1. COLLIDERS & STRUCTURAL SHELL
    if (spec.id === 'b-sunheights') {
      // STARTING APARTMENT: Special hollow enterable ground floor lobby!
      const lobbyRes = buildApartmentLobby(
        bGroup,
        spec,
        colliders,
        interactions,
        messages,
        wallMat,
        trimMat,
        audio,
        lightManager,
        player,
        () => {
          corridorRes?.openElevator(true)
        },
      )
      lobbyLight = lobbyRes.light
      animators.push(lobbyRes.update)

      // Upper floors solid structure
      const upperH = (spec.floors - 1) * floorH
      const upperGeo = new THREE.BoxGeometry(spec.w, upperH, spec.d)
      const upperMesh = new THREE.Mesh(upperGeo, wallMat)
      upperMesh.position.set(spec.x, floorH + upperH / 2, spec.z)
      upperMesh.castShadow = true
      upperMesh.receiveShadow = true
      bGroup.add(upperMesh)

      // Add upper floors windows & balconies
      addUpperWindowsAndBalconies(bGroup, spec, floorH, trimMat, balconyMat)
    } else if (spec.id === 'b-konbini') {
      // CONVENIENCE STORE: Enterable storefront with interior!
      const kRes = buildKonbiniStore(bGroup, spec, colliders, interactions, messages, wallMat, trimMat, audio, lightManager)
      konbiniLight = kRes.light
      animators.push(kRes.update)

      // Upper floors
      const upperH = (spec.floors - 1) * floorH
      const upperGeo = new THREE.BoxGeometry(spec.w, upperH, spec.d)
      const upperMesh = new THREE.Mesh(upperGeo, wallMat)
      upperMesh.position.set(spec.x, floorH + upperH / 2, spec.z)
      upperMesh.castShadow = true
      upperMesh.receiveShadow = true
      bGroup.add(upperMesh)

      addUpperWindowsAndBalconies(bGroup, spec, floorH, trimMat, balconyMat)
    } else if (spec.id === 'b-ramen') {
      // RAMEN SHOP: Traditional facade & enterable counter
      const rRes = buildRamenShop(bGroup, spec, colliders, interactions, messages, wallMat, trimMat, audio, lightManager)
      ramenLight = rRes.light
      animators.push(rRes.update)

      // Upper floors
      const upperH = (spec.floors - 1) * floorH
      const upperGeo = new THREE.BoxGeometry(spec.w, upperH, spec.d)
      const upperMesh = new THREE.Mesh(upperGeo, wallMat)
      upperMesh.position.set(spec.x, floorH + upperH / 2, spec.z)
      upperMesh.castShadow = true
      upperMesh.receiveShadow = true
      bGroup.add(upperMesh)

      addUpperWindowsAndBalconies(bGroup, spec, floorH, trimMat, balconyMat)
    } else {
      // STANDARD 3D BUILDING WITH SOLID EXTERIOR & ENTRANCE DETAIL
      const mainGeo = new THREE.BoxGeometry(spec.w, totalH, spec.d)
      const mainMesh = new THREE.Mesh(mainGeo, wallMat)
      mainMesh.position.set(spec.x, totalH / 2, spec.z)
      mainMesh.castShadow = true
      mainMesh.receiveShadow = true
      bGroup.add(mainMesh)

      // Add building collision box
      colliders.add({
        minX: spec.x - halfW,
        minY: 0,
        minZ: spec.z - halfD,
        maxX: spec.x + halfW,
        maxY: totalH + 2,
        maxZ: spec.z + halfD,
      })

      // Ground floor storefront / entrance feature
      const sfRes = buildStandardStorefront(bGroup, spec, trimMat, interactions, messages, audio, lightManager)
      if (sfRes?.update) animators.push(sfRes.update)

      // Upper windows and balconies
      addUpperWindowsAndBalconies(bGroup, spec, 0, trimMat, balconyMat)
    }

    // 2. ROOF DETAILS (Parapet walls, water tank, HVAC chiller, antenna)
    buildRoofEquipment(bGroup, spec, totalH, trimMat)

    // 3. FACADE DETAILS: Rain downspout pipes, external AC units on side walls
    buildDownspoutsAndPipes(bGroup, spec, totalH)

    root.add(bGroup)
  }

  scene.add(root)

  // 4. SUITE 402 (EXECUTIVE BEDROOM)
  if (player) {
    const suiteRes = buildSuite402(scene, colliders, interactions, messages, player, audio, lightManager)
    animators.push(suiteRes.update)

    // 5. 4F ELEVATOR LOUNGE & CORRIDOR
    corridorRes = buildCorridor4F(scene, colliders, interactions, messages, player, audio, lightManager)
    animators.push(corridorRes.update)
  }

  return {
    group: root,
    lobbyLight: lobbyLight ?? new THREE.PointLight(0xffe2b0, 1, 10),
    konbiniLight: konbiniLight ?? new THREE.PointLight(0xffffff, 1, 12),
    ramenLight: ramenLight ?? new THREE.PointLight(0xff9944, 1, 10),
    update(dt: number, player: { x: number; z: number }): void {
      for (const a of animators) a(dt, player)
    },
  }
}

// =========================================================================
// 1. APARTMENT ENTRANCE LOBBY (STARTING POINT)
// =========================================================================
function buildApartmentLobby(
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
// =========================================================================
function buildKonbiniStore(
  group: THREE.Group,
  spec: BuildingSpec,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  wallMat: THREE.Material,
  trimMat: THREE.Material,
  audio?: AudioManager,
  lightManager?: LightManager,
): { light: THREE.PointLight; update: (dt: number, p: { x: number; z: number }) => void } {
  const floorH = 3.2
  const innerW = 9.8
  const innerD = 11.4
  const floorY = 0.15
  const wallH = floorH - floorY
  const wallThick = 0.35

  const interiorGroup = new THREE.Group()
  interiorGroup.name = 'konbini-interior-props'
  group.add(interiorGroup)

  // 1. FLOOR & CEILING
  const floorGeo = new THREE.BoxGeometry(innerW, 0.05, innerD)
  const floorMesh = new THREE.Mesh(floorGeo, tileMat)
  floorMesh.position.set(spec.x, floorY + 0.025, spec.z)
  floorMesh.receiveShadow = true
  group.add(floorMesh)

  // Clean bright suspended ceiling
  const ceilGeo = new THREE.BoxGeometry(innerW, 0.2, innerD)
  const ceilMat = new THREE.MeshStandardMaterial({ color: 0xf5f8fa, roughness: 0.5 })
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilMat)
  ceilMesh.position.set(spec.x, floorH - 0.1, spec.z)
  group.add(ceilMesh)

  // 2. INTERIOR WALLS (Bright modern store panels with FamilyMart green/blue stripes)
  const konbiniWallMat = new THREE.MeshStandardMaterial({
    map: konbiniWallTexture(),
    roughness: 0.3,
    metalness: 0.05,
  })

  // Back Wall (East) - Holds Reach-in Drink Coolers
  const backGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const backMesh = new THREE.Mesh(backGeo, wallMat)
  backMesh.position.set(spec.x + innerW / 2 - wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(backMesh)
  colliders.add({
    minX: spec.x + innerW / 2 - wallThick,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + spec.w / 2 + 1,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // North Wall (Interior lined with striped wall panels, exterior with building wallMat)
  const northInner = new THREE.Mesh(new THREE.BoxGeometry(innerW, wallH, 0.04), konbiniWallMat)
  northInner.position.set(spec.x, floorY + wallH / 2, spec.z + innerD / 2 - 0.02)
  const northOuter = new THREE.Mesh(new THREE.BoxGeometry(spec.w, floorH, wallThick), wallMat)
  northOuter.position.set(spec.x, floorH / 2, spec.z + spec.d / 2 - wallThick / 2)
  group.add(northInner, northOuter)

  // Exterior details on North Wall (Alley-facing service door & conduit)
  const serviceDoorMat = new THREE.MeshStandardMaterial({ color: 0x3a424e, roughness: 0.6, metalness: 0.4 })
  const serviceDoor = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.1, 0.06), serviceDoorMat)
  serviceDoor.position.set(spec.x - 2.5, 1.05, spec.z + spec.d / 2 + 0.01)
  const meterBox = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.22), metalMat)
  meterBox.position.set(spec.x + 2.0, 1.5, spec.z + spec.d / 2 + 0.08)
  group.add(serviceDoor, meterBox)

  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z + innerD / 2 - wallThick,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z + spec.d / 2 + 1,
  })

  // South Wall (Interior lined with striped wall panels, exterior with building wallMat)
  const southInner = new THREE.Mesh(new THREE.BoxGeometry(innerW, wallH, 0.04), konbiniWallMat)
  southInner.position.set(spec.x, floorY + wallH / 2, spec.z - innerD / 2 + 0.02)
  const southOuter = new THREE.Mesh(new THREE.BoxGeometry(spec.w, floorH, wallThick), wallMat)
  southOuter.position.set(spec.x, floorH / 2, spec.z - spec.d / 2 + wallThick / 2)
  group.add(southInner, southOuter)
  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z - spec.d / 2 - 1,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z - innerD / 2 + wallThick,
  })

  // 3. FRONT STOREFRONT GLASS & AUTOMATIC DOORS
  const doorW = 2.4
  const frontWallL = (innerD - doorW) / 2

  // North & South Front Windows
  const nfgGeo = new THREE.BoxGeometry(0.1, 2.4, frontWallL)
  const nfgMesh = new THREE.Mesh(nfgGeo, shopGlassMat)
  nfgMesh.position.set(spec.x - innerW / 2 + 0.05, floorY + 1.2, spec.z + innerD / 2 - frontWallL / 2)
  const sfgGeo = new THREE.BoxGeometry(0.1, 2.4, frontWallL)
  const sfgMesh = new THREE.Mesh(sfgGeo, shopGlassMat)
  sfgMesh.position.set(spec.x - innerW / 2 + 0.05, floorY + 1.2, spec.z - innerD / 2 + frontWallL / 2)
  group.add(nfgMesh, sfgMesh)

  colliders.add({
    minX: spec.x - innerW / 2 - 0.2,
    minY: 0,
    minZ: spec.z + doorW / 2,
    maxX: spec.x - innerW / 2 + 0.3,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })
  colliders.add({
    minX: spec.x - innerW / 2 - 0.2,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x - innerW / 2 + 0.3,
    maxY: floorH,
    maxZ: spec.z - doorW / 2,
  })

  // Sliding glass doors
  const kDoorGeo = new THREE.BoxGeometry(0.06, 2.3, 1.15)
  const kDoorNorth = new THREE.Mesh(kDoorGeo, shopGlassMat)
  const kDoorSouth = new THREE.Mesh(kDoorGeo, shopGlassMat)
  kDoorNorth.position.set(spec.x - innerW / 2 + 0.05, floorY + 1.15, spec.z + 0.6)
  kDoorSouth.position.set(spec.x - innerW / 2 + 0.05, floorY + 1.15, spec.z - 0.6)
  group.add(kDoorNorth, kDoorSouth)

  // Header above storefront
  const headGeo = new THREE.BoxGeometry(0.4, 0.8, innerD)
  const headMesh = new THREE.Mesh(headGeo, trimMat)
  headMesh.position.set(spec.x - innerW / 2 + 0.2, floorH - 0.4, spec.z)
  group.add(headMesh)

  // Exterior Storefront Sign (24H Convenience Store)
  const signMat = signMaterial('CONVENIENCE 24H', '#0c6c44', '#ffffff', 'FAMILY STORE', 512, 160)
  const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 0.95), signMat)
  signMesh.rotateY(-Math.PI / 2)
  signMesh.position.set(spec.x - innerW / 2 - 0.05, floorH - 0.4, spec.z)
  group.add(signMesh)

  // 4. BACK REFRIGERATED BEVERAGE COOLER WALL
  const coolerW = 8.6
  const coolerGeo = new THREE.BoxGeometry(0.65, 2.4, coolerW)
  const coolerMat = new THREE.MeshStandardMaterial({ color: 0x141a22, roughness: 0.3, metalness: 0.5 })
  const coolerMesh = new THREE.Mesh(coolerGeo, coolerMat)
  coolerMesh.position.set(spec.x + innerW / 2 - 0.5, floorY + 1.2, spec.z)
  interiorGroup.add(coolerMesh)

  // Glowing cooler doors with rows of drinks & handles
  const coolerDoorsMat = new THREE.MeshBasicMaterial({
    map: konbiniCoolerDoorsTexture(),
    toneMapped: false,
  })
  const coolerFront = new THREE.Mesh(new THREE.PlaneGeometry(coolerW, 2.2), coolerDoorsMat)
  coolerFront.rotateY(-Math.PI / 2)
  coolerFront.position.set(spec.x + innerW / 2 - 0.84, floorY + 1.2, spec.z)
  interiorGroup.add(coolerFront)

  colliders.add({
    minX: spec.x + innerW / 2 - 1.1,
    minY: 0,
    minZ: spec.z - coolerW / 2,
    maxX: spec.x + innerW / 2,
    maxY: 2.6,
    maxZ: spec.z + coolerW / 2,
  })

  interactions.add({
    id: 'konbini-drinks',
    x: spec.x + innerW / 2 - 1.4,
    z: spec.z,
    radius: 2.0,
    prompt: 'Open Beverage Chiller & Grab Drink',
    onInteract: () => {
      messages.show('Cold blast of air! Grabbed an ice-cold Pocari Sweat and Melty Blend Green Tea.')
    },
  })

  // 5. DETAILED MULTI-TIER GONDOLA SHELVES (NO PLAIN BOXES!)
  buildGondolaShelf(interiorGroup, spec.x + 0.8, floorY, spec.z + 1.8, colliders)
  buildGondolaShelf(interiorGroup, spec.x + 0.8, floorY, spec.z - 2.2, colliders)

  interactions.add({
    id: 'konbini-shelf-noodles',
    x: spec.x + 0.8,
    z: spec.z + 1.8,
    radius: 1.8,
    prompt: 'Browse Cup Noodles & Snacks',
    onInteract: () => {
      messages.show('Nissin Seafood Cup Noodles, Curry Ramen, Calbee Seaweed Chips, and Matcha Pocky in stock.')
    },
  })

  interactions.add({
    id: 'konbini-shelf-bento',
    x: spec.x + 0.8,
    z: spec.z - 2.2,
    radius: 1.8,
    prompt: 'Inspect Bento & Onigiri Shelf',
    onInteract: () => {
      messages.show('Spicy salmon onigiri, tuna mayo rice ball, and hot tonkatsu bento lunchbox ready to eat.')
    },
  })

  // 6. CHECKOUT COUNTER (レジカウンター)
  const counterL = 3.6
  const counterW = 1.05
  const counterH = 0.98

  // Main counter body
  const counterGeo = new THREE.BoxGeometry(counterW, counterH, counterL)
  const counterBodyMat = new THREE.MeshStandardMaterial({
    map: konbiniCounterFrontTexture(),
    roughness: 0.25,
    metalness: 0.05,
  })
  const counter = new THREE.Mesh(counterGeo, counterBodyMat)
  counter.position.set(spec.x - 2.2, floorY + counterH / 2, spec.z - 3.4)
  interiorGroup.add(counter)

  // Countertop slab (Dark granite/wood laminate)
  const topSlabGeo = new THREE.BoxGeometry(counterW + 0.08, 0.06, counterL + 0.08)
  const topSlabMat = new THREE.MeshStandardMaterial({ color: 0x1f2328, roughness: 0.25, metalness: 0.15 })
  const topSlab = new THREE.Mesh(topSlabGeo, topSlabMat)
  topSlab.position.set(spec.x - 2.2, floorY + counterH + 0.03, spec.z - 3.4)
  interiorGroup.add(topSlab)

  colliders.add({
    minX: spec.x - 2.2 - counterW / 2 - 0.1,
    minY: 0,
    minZ: spec.z - 3.4 - counterL / 2,
    maxX: spec.x - 2.2 + counterW / 2 + 0.1,
    maxY: 1.5,
    maxZ: spec.z - 3.4 + counterL / 2,
  })

  // COUNTERTOP GEAR:
  // (A) Dual-Screen POS Register
  const posStand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2, 8), metalMat)
  posStand.position.set(spec.x - 2.2, floorY + counterH + 0.16, spec.z - 3.8)
  const posScreen = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.26, 0.04),
    new THREE.MeshBasicMaterial({ color: 0x1a8f4c }), // glowing register screen!
  )
  posScreen.position.set(spec.x - 2.2, floorY + counterH + 0.3, spec.z - 3.8)
  posScreen.rotateX(-0.2)
  interiorGroup.add(posStand, posScreen)

  // Customer Payment Terminal (Card/Suica tap pad)
  const payPad = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.06, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 }),
  )
  payPad.position.set(spec.x - 1.85, floorY + counterH + 0.09, spec.z - 3.6)
  payPad.rotateX(0.15)
  interiorGroup.add(payPad)

  // Blue Coin Change Tray (カルトン)
  const trayGeo = new THREE.BoxGeometry(0.18, 0.02, 0.14)
  const trayMat = new THREE.MeshStandardMaterial({ color: 0x0077cc, roughness: 0.3 })
  const changeTray = new THREE.Mesh(trayGeo, trayMat)
  changeTray.position.set(spec.x - 1.85, floorY + counterH + 0.07, spec.z - 4.0)
  interiorGroup.add(changeTray)

  // (B) HOT FOOD WARMER SHOWCASE (ホットスナック)
  const warmerW = 0.95
  const warmerH = 0.65
  const warmerD = 0.55
  const warmer = new THREE.Group()
  warmer.position.set(spec.x - 2.0, floorY + counterH + 0.06, spec.z - 2.3)

  // Stainless frame
  const wFrame = new THREE.Mesh(new THREE.BoxGeometry(warmerD, warmerH, warmerW), metalMat)
  wFrame.position.set(0, warmerH / 2, 0)
  warmer.add(wFrame)

  // Glowing front display header
  const wSignMat = new THREE.MeshBasicMaterial({ map: hotSnacksDisplayTexture(), toneMapped: false })
  const wSign = new THREE.Mesh(new THREE.PlaneGeometry(warmerW * 0.95, 0.22), wSignMat)
  wSign.rotateY(Math.PI / 2)
  wSign.position.set(warmerD / 2 + 0.01, warmerH - 0.12, 0)
  warmer.add(wSign)

  // Glass showcase front
  const wGlass = new THREE.Mesh(new THREE.PlaneGeometry(warmerW * 0.95, warmerH * 0.55), shopGlassMat)
  wGlass.rotateY(Math.PI / 2)
  wGlass.position.set(warmerD / 2 + 0.01, warmerH * 0.38, 0)
  warmer.add(wGlass)

  // Golden crispy fried chicken cutlets (FamiChiki) inside!
  const chikiGeo = new THREE.BoxGeometry(0.08, 0.035, 0.14)
  const chikiMat = new THREE.MeshStandardMaterial({ color: 0xd98218, roughness: 0.85 }) // golden fried!
  for (let c = 0; c < 3; c++) {
    const ch = new THREE.Mesh(chikiGeo, chikiMat)
    ch.position.set(0, 0.18, -0.28 + c * 0.28)
    warmer.add(ch)
  }

  // White steamed pork buns (Nikuman)
  const bunGeo = new THREE.SphereGeometry(0.055, 10, 8)
  bunGeo.scale(1, 0.6, 1)
  const bunMat = new THREE.MeshStandardMaterial({ color: 0xfffcf5, roughness: 0.9 })
  for (let b = 0; b < 3; b++) {
    const bun = new THREE.Mesh(bunGeo, bunMat)
    bun.position.set(0, 0.36, -0.28 + b * 0.28)
    warmer.add(bun)
  }

  // Glowing warm amber heat lamp inside warmer
  const warmerLight = new THREE.PointLight(0xff7711, 2.2, 4.5)
  warmerLight.position.set(0, warmerH - 0.1, 0)
  if (lightManager) {
    lightManager.register({
      x: spec.x - 2.0,
      y: floorY + counterH + 0.06 + warmerH - 0.1,
      z: spec.z - 2.3,
      color: 0xff7711,
      intensity: 2.2,
      distance: 4.5,
      zone: 'Konbini',
    })
  } else {
    warmer.add(warmerLight)
  }

  interiorGroup.add(warmer)

  // (C) Commercial Double Microwave
  const microGeo = new THREE.BoxGeometry(0.52, 0.45, 0.48)
  const microMesh = new THREE.Mesh(microGeo, metalMat)
  microMesh.position.set(spec.x - 2.8, floorY + counterH + 0.28, spec.z - 4.5)
  interiorGroup.add(microMesh)

  // (D) FamiCafe Coffee Espresso Machine
  const coffeeGeo = new THREE.BoxGeometry(0.42, 0.62, 0.42)
  const coffeeMat = new THREE.MeshStandardMaterial({ color: 0x1f2328, roughness: 0.3, metalness: 0.6 })
  const coffee = new THREE.Mesh(coffeeGeo, coffeeMat)
  coffee.position.set(spec.x - 2.8, floorY + counterH + 0.36, spec.z - 1.8)
  interiorGroup.add(coffee)

  // 7. WIRE MAGAZINE RACK BY FRONT WINDOW
  const magGeo = new THREE.BoxGeometry(0.35, 1.25, 2.6)
  const magMat = new THREE.MeshStandardMaterial({ color: 0x3d444e, metalness: 0.6, roughness: 0.3 })
  const magMesh = new THREE.Mesh(magGeo, magMat)
  magMesh.position.set(spec.x - innerW / 2 + 0.65, floorY + 0.65, spec.z + 3.4)
  interiorGroup.add(magMesh)

  // Colorful manga and magazine book spines
  const colors = [0xd92618, 0x1868d4, 0x1f8838, 0xf2a65a, 0x8a2be2, 0xff69b4]
  for (let m = 0; m < 8; m++) {
    const book = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.24, 0.28),
      new THREE.MeshStandardMaterial({ color: colors[m % colors.length], roughness: 0.4 }),
    )
    book.position.set(spec.x - innerW / 2 + 0.68, floorY + 0.85, spec.z + 2.3 + m * 0.3)
    book.rotateZ(0.2)
    interiorGroup.add(book)
  }

  // 8. GREEN ATM MACHINE
  const atmGeo = new THREE.BoxGeometry(0.75, 1.95, 0.68)
  const atmMat = new THREE.MeshStandardMaterial({ color: 0x0f5934, roughness: 0.35 })
  const atm = new THREE.Mesh(atmGeo, atmMat)
  atm.position.set(spec.x - innerW / 2 + 0.55, floorY + 0.98, spec.z - 4.6)
  interiorGroup.add(atm)

  const atmScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.44, 0.32),
    new THREE.MeshBasicMaterial({ color: 0x38e59e }),
  )
  atmScreen.rotateY(Math.PI / 2)
  atmScreen.position.set(spec.x - innerW / 2 + 0.94, floorY + 1.35, spec.z - 4.6)
  interiorGroup.add(atmScreen)

  interactions.add({
    id: 'konbini-famichiki',
    x: spec.x - 2.0,
    z: spec.z - 2.3,
    radius: 1.8,
    prompt: 'Buy Hot FamiChiki Fried Chicken [¥220]',
    onInteract: () => {
      messages.show('*Warm & Crispy!* You received piping hot FamiChiki in its tear-open paper pouch.')
    },
  })

  interactions.add({
    id: 'konbini-pay',
    x: spec.x - 1.8,
    z: spec.z - 3.6,
    radius: 1.8,
    prompt: 'Pay at Register with Suica / Cash [¥420]',
    onInteract: () => {
      messages.show('*Pii-rin!* "Arigatou gozaimashita!" Suica card accepted.')
    },
  })

  // 9. BRILLIANT JAPANESE STORE LIGHTING (DAYLIGHT CONVENIENCE STORE)
  // Store Central Main Daylight Light
  const light = new THREE.PointLight(0xffffff, 2.8, 18, 1.1)
  light.position.set(spec.x, floorH - 0.35, spec.z)

  // Counter Area Fill Light
  const counterLight = new THREE.PointLight(0xfff5ea, 2.0, 9, 1.2)
  counterLight.position.set(spec.x - 2.0, floorH - 0.35, spec.z - 3.2)

  // Aisle Back Fill Light
  const aisleLight = new THREE.PointLight(0xf0f8ff, 2.0, 14, 1.2)
  aisleLight.position.set(spec.x + 1.8, floorH - 0.35, spec.z)

  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorH - 0.35,
      z: spec.z,
      color: 0xffffff,
      intensity: 2.8,
      distance: 18,
      decay: 1.1,
      zone: 'Konbini',
    })
    lightManager.register({
      x: spec.x - 2.0,
      y: floorH - 0.35,
      z: spec.z - 3.2,
      color: 0xfff5ea,
      intensity: 2.0,
      distance: 9,
      decay: 1.2,
      zone: 'Konbini',
    })
    lightManager.register({
      x: spec.x + 1.8,
      y: floorH - 0.35,
      z: spec.z,
      color: 0xf0f8ff,
      intensity: 2.0,
      distance: 14,
      decay: 1.2,
      zone: 'Konbini',
    })
  } else {
    group.add(light)
    group.add(counterLight)
    group.add(aisleLight)
  }

  // 4 Suspended Fluorescent Ceiling Luminaires
  for (let zOff = -3.2; zOff <= 3.2; zOff += 2.2) {
    const fixtureGroup = new THREE.Group()
    fixtureGroup.position.set(spec.x, floorH - 0.08, spec.z + zOff)

    // Housing
    const housing = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.08, 0.35), metalMat)
    fixtureGroup.add(housing)

    // Dual glowing fluorescent tubes
    const tube1 = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.03, 0.08), lampMat)
    tube1.position.set(0, -0.04, -0.08)
    const tube2 = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.03, 0.08), lampMat)
    tube2.position.set(0, -0.04, 0.08)
    fixtureGroup.add(tube1, tube2)

    interiorGroup.add(fixtureGroup)
  }

  let doorProgress = 0
  let chimePlayed = false

  const update = (dt: number, p: { x: number; z: number }): void => {
    // Distance culling: hide interior props when player is more than 28m away (in low graphics mode)
    const distSq = (p.x - spec.x) ** 2 + (p.z - spec.z) ** 2
    interiorGroup.visible = Settings.isHigh() || distSq < 784

    const distToDoor = Math.hypot(p.x - (spec.x - innerW / 2), p.z - spec.z)
    const doorTarget = distToDoor < 2.8 ? 1.0 : 0.0

    if (doorTarget > 0.5 && !chimePlayed) {
      audio?.playFamilyMartChime()
      audio?.playSlidingDoorSound()
      chimePlayed = true
    } else if (doorTarget < 0.5) {
      chimePlayed = false
    }

    doorProgress += (doorTarget - doorProgress) * Math.min(1, dt * 5)
    kDoorNorth.position.z = spec.z + 0.6 + doorProgress * 0.7
    kDoorSouth.position.z = spec.z - 0.6 - doorProgress * 0.7
  }

  return { light, update }
}

// =========================================================================
// HELPER: DETAILED MULTI-TIER GONDOLA STORE SHELVING UNIT
// =========================================================================
function buildGondolaShelf(
  group: THREE.Group,
  x: number,
  y: number,
  z: number,
  colliders: CollisionWorld,
): void {
  const shelfW = 0.95
  const shelfH = 1.55
  const shelfL = 4.8

  // Base metal deck (White powder-coat)
  const baseGeo = new THREE.BoxGeometry(shelfW, 0.16, shelfL)
  const baseMat = new THREE.MeshStandardMaterial({ color: 0xe8ecf0, roughness: 0.35, metalness: 0.4 })
  const base = new THREE.Mesh(baseGeo, baseMat)
  base.position.set(x, y + 0.08, z)
  base.castShadow = true
  group.add(base)

  // Vertical back panel (White slatwall)
  const backGeo = new THREE.BoxGeometry(0.04, shelfH, shelfL)
  const backMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
  const back = new THREE.Mesh(backGeo, backMat)
  back.position.set(x, y + shelfH / 2, z)
  group.add(back)

  // Vertical steel endcap panels (FamilyMart Green accent)
  const endMat = new THREE.MeshStandardMaterial({ color: 0x0d7a46, roughness: 0.35 })
  const endGeo = new THREE.BoxGeometry(shelfW + 0.04, shelfH, 0.08)
  const end1 = new THREE.Mesh(endGeo, endMat)
  end1.position.set(x, y + shelfH / 2, z - shelfL / 2)
  const end2 = new THREE.Mesh(endGeo, endMat)
  end2.position.set(x, y + shelfH / 2, z + shelfL / 2)
  group.add(end1, end2)

  // Promotional header banner on endcap
  const promoMat = signMaterial('新発売 NEW', '#ffaa00', '#221100', 'RECOMMENDED', 256, 128)
  const p1 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.35), promoMat)
  p1.position.set(x, y + shelfH - 0.25, z - shelfL / 2 - 0.05)
  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.35), promoMat)
  p2.position.set(x, y + shelfH - 0.25, z + shelfL / 2 + 0.05)
  p2.rotateY(Math.PI)
  group.add(p1, p2)

  // 4 Shelves on each side
  const shelfTierMat = new THREE.MeshStandardMaterial({ color: 0xf5f7fa, roughness: 0.3, metalness: 0.2 })
  const tagRedMat = new THREE.MeshBasicMaterial({ color: 0xd92618 })
  const tagBlueMat = new THREE.MeshBasicMaterial({ color: 0x0080cc })

  // Vibrant item materials
  const redMat = new THREE.MeshStandardMaterial({ color: 0xd92618, roughness: 0.4 })
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x1868d4, roughness: 0.4 })
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd9a826, roughness: 0.3, metalness: 0.4 })
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x1f8838, roughness: 0.4 })
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xf26b1d, roughness: 0.4 })
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.8 })
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8f8f8, roughness: 0.5 })

  for (let tier = 0; tier < 4; tier++) {
    const tierY = y + 0.22 + tier * 0.38

    for (const side of [-1, 1]) {
      const slabGeo = new THREE.BoxGeometry(0.42, 0.03, shelfL - 0.1)
      const slab = new THREE.Mesh(slabGeo, shelfTierMat)
      slab.position.set(x + side * 0.24, tierY, z)
      group.add(slab)

      // Price tag strip on front edge
      const tagGeo = new THREE.BoxGeometry(0.02, 0.04, shelfL - 0.1)
      const tag = new THREE.Mesh(tagGeo, tier % 2 === 0 ? tagRedMat : tagBlueMat)
      tag.position.set(x + side * 0.45, tierY, z)
      group.add(tag)

      // ITEMS ON THIS SHELF:
      if (tier === 3) {
        // TOP TIER: Instant Cup Noodles!
        const cupGeo = new THREE.CylinderGeometry(0.055, 0.042, 0.12, 10)
        const numCups = 14
        for (let c = 0; c < numCups; c++) {
          const cupZ = z - shelfL / 2 + 0.35 + c * 0.3
          const cMat = c % 3 === 0 ? redMat : c % 3 === 1 ? blueMat : goldMat
          const cup = new THREE.Mesh(cupGeo, cMat)
          cup.position.set(x + side * 0.26, tierY + 0.075, cupZ)
          // White lid
          const lidGeo = new THREE.CircleGeometry(0.057, 10)
          lidGeo.rotateX(-Math.PI / 2)
          const lid = new THREE.Mesh(lidGeo, whiteMat)
          lid.position.set(x + side * 0.26, tierY + 0.136, cupZ)
          group.add(cup, lid)
        }
      } else if (tier === 2) {
        // TIER 2: Snack bags & Pocky boxes!
        const boxGeo = new THREE.BoxGeometry(0.04, 0.16, 0.09)
        const numBoxes = 16
        for (let b = 0; b < numBoxes; b++) {
          const bZ = z - shelfL / 2 + 0.3 + b * 0.26
          const bMat = b % 4 === 0 ? redMat : b % 4 === 1 ? greenMat : b % 4 === 2 ? orangeMat : blueMat
          const sBox = new THREE.Mesh(boxGeo, bMat)
          sBox.position.set(x + side * 0.26, tierY + 0.095, bZ)
          group.add(sBox)
        }
      } else if (tier === 1) {
        // TIER 1: Onigiri & Bento lunchboxes!
        const onigiriGeo = new THREE.ConeGeometry(0.055, 0.09, 3)
        const bentoGeo = new THREE.BoxGeometry(0.22, 0.05, 0.16)
        for (let item = 0; item < 10; item++) {
          const itemZ = z - shelfL / 2 + 0.4 + item * 0.42
          if (item % 2 === 0) {
            // Onigiri triangle with black seaweed
            const oni = new THREE.Mesh(onigiriGeo, blackMat)
            oni.position.set(x + side * 0.26, tierY + 0.06, itemZ)
            group.add(oni)
          } else {
            // Bento box with clear lid
            const bento = new THREE.Mesh(bentoGeo, blackMat)
            bento.position.set(x + side * 0.26, tierY + 0.04, itemZ)
            const rice = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 0.12), whiteMat)
            rice.position.set(x + side * 0.26, tierY + 0.066, itemZ)
            const katsu = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.06), goldMat)
            katsu.position.set(x + side * 0.26, tierY + 0.08, itemZ)
            group.add(bento, rice, katsu)
          }
        }
      } else {
        // BOTTOM TIER: Canned drinks & water bottles
        const canGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.14, 8)
        for (let d = 0; d < 14; d++) {
          const dZ = z - shelfL / 2 + 0.35 + d * 0.3
          const dMat = d % 3 === 0 ? greenMat : d % 3 === 1 ? blueMat : goldMat
          const can = new THREE.Mesh(canGeo, dMat)
          can.position.set(x + side * 0.26, tierY + 0.08, dZ)
          group.add(can)
        }
      }
    }
  }

  // Collider for this shelf
  colliders.add({
    minX: x - shelfW / 2 - 0.1,
    minY: y,
    minZ: z - shelfL / 2,
    maxX: x + shelfW / 2 + 0.1,
    maxY: y + shelfH,
    maxZ: z + shelfL / 2,
  })
}

// =========================================================================
// 3. TRADITIONAL RAMEN BAR (MENYA TOKYO)
// =========================================================================
function buildRamenShop(
  group: THREE.Group,
  spec: BuildingSpec,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  _wallMat: THREE.Material,
  trimMat: THREE.Material,
  audio?: AudioManager,
  lightManager?: LightManager,
): { light: THREE.PointLight; update: (dt: number, p: { x: number; z: number }) => void } {
  const floorH = 3.2
  const innerW = 5.8
  const innerD = 7.4
  const floorY = 0.15
  const wallH = floorH - floorY
  const wallThick = 0.35

  const interiorGroup = new THREE.Group()
  interiorGroup.name = 'ramen-interior-props'
  group.add(interiorGroup)

  // 1. FLOOR (Non-slip Charcoal Japanese Ceramic Restaurant Tiles)
  const floorMat = new THREE.MeshStandardMaterial({
    map: ramenFloorTexture(),
    roughness: 0.45,
    metalness: 0.08,
  })
  const floorGeo = new THREE.BoxGeometry(innerW, 0.05, innerD)
  const floorMesh = new THREE.Mesh(floorGeo, floorMat)
  floorMesh.position.set(spec.x, floorY + 0.025, spec.z)
  floorMesh.receiveShadow = true
  group.add(floorMesh)

  // 2. CEILING (Warm Cedar Timber Planks with Exposed Beams)
  const ceilMat = new THREE.MeshStandardMaterial({ color: 0x24160c, roughness: 0.7 })
  const ceilGeo = new THREE.BoxGeometry(innerW, 0.2, innerD)
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilMat)
  ceilMesh.position.set(spec.x, floorH - 0.1, spec.z)
  group.add(ceilMesh)

  // Transverse Cedar Beams across ceiling
  const beamMat = new THREE.MeshStandardMaterial({ color: 0x3d2414, roughness: 0.6 })
  for (const bz of [-1.8, 0, 1.8]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.16, 0.18), beamMat)
    beam.position.set(spec.x, floorH - 0.16, spec.z + bz)
    group.add(beam)
  }

  // 3. INTERIOR WALLS (Warm Plaster Stucco with Dark Cedar Wainscot & Battens)
  const ramenWallMat = new THREE.MeshStandardMaterial({
    map: ramenWallTexture(),
    roughness: 0.6,
    metalness: 0.02,
  })

  // North (Back) Wall
  const backGeo = new THREE.BoxGeometry(innerW, wallH, wallThick)
  const backMesh = new THREE.Mesh(backGeo, ramenWallMat)
  backMesh.position.set(spec.x, floorY + wallH / 2, spec.z + innerD / 2 - wallThick / 2)
  group.add(backMesh)
  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z + innerD / 2 - wallThick,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z + spec.d / 2 + 1,
  })

  // West Wall
  const westGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const westMesh = new THREE.Mesh(westGeo, ramenWallMat)
  westMesh.position.set(spec.x - innerW / 2 + wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(westMesh)
  colliders.add({
    minX: spec.x - spec.w / 2 - 1,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x - innerW / 2 + wallThick,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // East Wall
  const eastGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const eastMesh = new THREE.Mesh(eastGeo, ramenWallMat)
  eastMesh.position.set(spec.x + innerW / 2 - wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(eastMesh)
  colliders.add({
    minX: spec.x + innerW / 2 - wallThick,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + spec.w / 2 + 1,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // 4. SOUTH (FRONT) FACADE & STOREFRONT
  const doorW = 2.0
  const sideW = (innerW - doorW) / 2

  // Exterior charred timber wall finish
  const yakisugiMat = new THREE.MeshStandardMaterial({ color: 0x1c1713, roughness: 0.85 })

  // Left Front Wall
  const lfGeo = new THREE.BoxGeometry(sideW, wallH, wallThick)
  const lfMesh = new THREE.Mesh(lfGeo, yakisugiMat)
  lfMesh.position.set(spec.x - innerW / 2 + sideW / 2, floorY + wallH / 2, spec.z - innerD / 2 + wallThick / 2)
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
  const rfGeo = new THREE.BoxGeometry(sideW, wallH, wallThick)
  const rfMesh = new THREE.Mesh(rfGeo, yakisugiMat)
  rfMesh.position.set(spec.x + innerW / 2 - sideW / 2, floorY + wallH / 2, spec.z - innerD / 2 + wallThick / 2)
  group.add(rfMesh)
  colliders.add({
    minX: spec.x + doorW / 2,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z - innerD / 2 + wallThick,
  })

  // Entrance Lintel
  const lintelMesh = new THREE.Mesh(new THREE.BoxGeometry(doorW, 0.45, wallThick), trimMat)
  lintelMesh.position.set(spec.x, floorH - 0.225, spec.z - innerD / 2 + wallThick / 2)
  group.add(lintelMesh)

  // Traditional Japanese Roof Tile Awning (瓦庇 Kawara Awning) above entrance
  const eaveW = 4.8
  const eaveD = 0.65
  const eaveGeo = new THREE.BoxGeometry(eaveW, 0.08, eaveD)
  const eaveMat = new THREE.MeshStandardMaterial({ color: 0x22262d, roughness: 0.5, metalness: 0.2 })
  const eave = new THREE.Mesh(eaveGeo, eaveMat)
  eave.rotateX(0.18) // angled roof tiles
  eave.position.set(spec.x, floorH + 0.05, spec.z - innerD / 2 - 0.25)
  group.add(eave)

  // Wood Corbel Support Brackets under awning
  for (const bx of [-1.9, -0.6, 0.6, 1.9]) {
    const corbel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.35), beamMat)
    corbel.position.set(spec.x + bx, floorH - 0.12, spec.z - innerD / 2 - 0.15)
    group.add(corbel)
  }

  // =========================================================================
  // 5. CARVED WOODEN STORE SIGNBOARD (NO GLITCHES / OVERLAPS)
  // =========================================================================
  const signMat = new THREE.MeshStandardMaterial({
    map: ramenSignTexture(),
    roughness: 0.4,
    metalness: 0.05,
  })
  const signMesh = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.82, 0.1), signMat)
  signMesh.position.set(spec.x, floorH - 0.45, spec.z - innerD / 2 - 0.08)
  group.add(signMesh)

  // Two Swan-Neck Brass Spotlights illuminating the Signboard
  for (const sx of [-1.3, 1.3]) {
    const lampArm = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.25, 8), metalMat)
    lampArm.rotateX(Math.PI / 4)
    lampArm.position.set(spec.x + sx, floorH - 0.05, spec.z - innerD / 2 - 0.18)
    const lampHood = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.08, 10), metalMat)
    lampHood.rotateX(-Math.PI / 3)
    lampHood.position.set(spec.x + sx, floorH - 0.12, spec.z - innerD / 2 - 0.26)
    group.add(lampArm, lampHood)

    const signSpot = new THREE.PointLight(0xfffae0, 1.2, 2.5)
    signSpot.position.set(spec.x + sx, floorH - 0.16, spec.z - innerD / 2 - 0.25)
    if (lightManager) {
      lightManager.register({
        x: spec.x + sx,
        y: floorH - 0.16,
        z: spec.z - innerD / 2 - 0.25,
        color: 0xfffae0,
        intensity: 1.2,
        distance: 2.5,
        zone: 'Street',
      })
    } else {
      group.add(signSpot)
    }
  }

  // =========================================================================
  // 6. AUTHENTIC RED CHOCHIN LANTERNS (PROPERLY PLACED FLANKING DOORWAY)
  // =========================================================================
  // Left: 'らーめん' (Ramen) | Right: '味自慢' (Pride in Flavor)
  // Positioned lower and wider so they NEVER cover the sign!
  const lanternY = floorH - 1.25 // Y = 1.95m (well below the 2.32m sign bottom!)
  const lanternZ = spec.z - innerD / 2 - 0.38

  const createLantern = (x: number, text: string): THREE.Group => {
    const lGroup = new THREE.Group()
    lGroup.position.set(x, lanternY, lanternZ)

    // Forged black iron wall bracket arm
    const bracketPole = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.38, 8), postMat)
    bracketPole.rotateX(Math.PI / 2)
    bracketPole.position.set(0, 0.38, 0.18)
    const hangerRing = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.006, 6, 12), postMat)
    hangerRing.position.set(0, 0.38, 0)
    lGroup.add(bracketPole, hangerRing)

    // Hanging chain
    const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.14, 6), metalMat)
    chain.position.set(0, 0.31, 0)
    lGroup.add(chain)

    // Top black wooden collar
    const topCap = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.05, 16), postMat)
    topCap.position.set(0, 0.22, 0)
    lGroup.add(topCap)

    // Ribbed Japanese Vermilion Red Paper Lantern Body
    const bodyMat = new THREE.MeshStandardMaterial({
      map: ramenLanternTexture(text),
      roughness: 0.5,
      metalness: 0.05,
      emissive: new THREE.Color(0xd82618),
      emissiveIntensity: 0.35,
    })
    const bodyGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.44, 16)
    const body = new THREE.Mesh(bodyGeo, bodyMat)
    lGroup.add(body)

    // Bottom black wooden collar
    const btmCap = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.05, 16), postMat)
    btmCap.position.set(0, -0.22, 0)
    lGroup.add(btmCap)

    // Warm inner amber paper glow
    const lanternInnerLight = new THREE.PointLight(0xff5522, 1.4, 4.2)
    lanternInnerLight.position.set(0, 0, 0)
    if (lightManager) {
      lightManager.register({
        x: x,
        y: lanternY,
        z: lanternZ,
        color: 0xff5522,
        intensity: 1.4,
        distance: 4.2,
        zone: 'Street',
      })
    } else {
      lGroup.add(lanternInnerLight)
    }

    return lGroup
  }

  const l1 = createLantern(spec.x - 1.45, 'らーめん')
  const l2 = createLantern(spec.x + 1.45, '味自慢')
  group.add(l1, l2)

  // =========================================================================
  // 7. AUTHENTIC NOREN ENTRANCE CURTAIN (SPLIT FABRIC DRAPERY)
  // =========================================================================
  // Wooden dowel rod
  const rodGeo = new THREE.CylinderGeometry(0.016, 0.016, doorW + 0.15, 8)
  rodGeo.rotateZ(Math.PI / 2)
  const rod = new THREE.Mesh(rodGeo, beamMat)
  rod.position.set(spec.x, floorH - 0.72, spec.z - innerD / 2 - 0.06)
  group.add(rod)

  // Indigo blue dyed fabric with white crest & 'らーめん'
  const norenMat = new THREE.MeshStandardMaterial({
    map: ramenNorenTexture(),
    roughness: 0.85,
    side: THREE.DoubleSide,
  })
  const norenMesh = new THREE.Mesh(new THREE.PlaneGeometry(doorW * 0.96, 0.72), norenMat)
  norenMesh.position.set(spec.x, floorH - 1.1, spec.z - innerD / 2 - 0.07)
  group.add(norenMesh)

  // =========================================================================
  // 8. TICKET VENDING MACHINE (券売機 KENBAIKI) OUTSIDE
  // =========================================================================
  const kenW = 0.68
  const kenH = 1.62
  const kenD = 0.52
  const kenX = spec.x - 1.78
  const kenZ = spec.z - innerD / 2 - 0.28

  const kenHousing = new THREE.Mesh(
    new THREE.BoxGeometry(kenW, kenH, kenD),
    new THREE.MeshStandardMaterial({ color: 0xd8d4cc, roughness: 0.4, metalness: 0.2 }),
  )
  kenHousing.position.set(kenX, floorY + kenH / 2, kenZ)
  group.add(kenHousing)

  // Detailed front control panel with buttons, slots, and LED display
  const kenFrontMat = new THREE.MeshStandardMaterial({
    map: ramenKenbaikiTexture(),
    roughness: 0.35,
    metalness: 0.1,
  })
  const kenFront = new THREE.Mesh(new THREE.PlaneGeometry(kenW * 0.95, kenH * 0.95), kenFrontMat)
  kenFront.position.set(kenX, floorY + kenH / 2, kenZ - kenD / 2 - 0.005)
  kenFront.rotateY(Math.PI)
  group.add(kenFront)

  colliders.add({
    minX: kenX - kenW / 2 - 0.05,
    minY: 0,
    minZ: kenZ - kenD / 2,
    maxX: kenX + kenW / 2 + 0.05,
    maxY: kenH,
    maxZ: kenZ + kenD / 2 + 0.1,
  })

  interactions.add({
    id: 'ramen-kenbaiki',
    x: kenX,
    z: kenZ - 0.6,
    radius: 1.8,
    prompt: 'Buy Ramen Ticket at Kenbaiki [¥980]',
    onInteract: () => {
      audio?.playRamenTicketSound()
      messages.show(
        '*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!',
      )
    },
  })

  // =========================================================================
  // 9. DINING BAR COUNTER & STOOLS (POLISHED HINOKI WOOD)
  // =========================================================================
  const barW = 4.2
  const barH = 0.98
  const barD = 0.72
  const barX = spec.x
  const barZ = spec.z + 0.1

  // Lower counter body (Dark cedar slats)
  const cBodyGeo = new THREE.BoxGeometry(barW, barH, barD)
  const cBodyMat = new THREE.MeshStandardMaterial({ color: 0x2b1c12, roughness: 0.6 })
  const cBody = new THREE.Mesh(cBodyGeo, cBodyMat)
  cBody.position.set(barX, floorY + barH / 2, barZ)
  interiorGroup.add(cBody)

  // Polished Hinoki Wood Countertop (Customer dining surface)
  const topGeo = new THREE.BoxGeometry(barW + 0.12, 0.06, barD + 0.08)
  const topMat = new THREE.MeshStandardMaterial({ color: 0xad7542, roughness: 0.28, metalness: 0.05 })
  const topSlab = new THREE.Mesh(topGeo, topMat)
  topSlab.position.set(barX, floorY + barH + 0.03, barZ)
  interiorGroup.add(topSlab)

  // Raised Upper Server Ledge (Where chef places steaming ramen bowls)
  const ledgeGeo = new THREE.BoxGeometry(barW + 0.12, 0.18, 0.24)
  const ledgeMat = new THREE.MeshStandardMaterial({ color: 0x8a542a, roughness: 0.35 })
  const ledge = new THREE.Mesh(ledgeGeo, ledgeMat)
  ledge.position.set(barX, floorY + barH + 0.12, barZ + barD / 2 - 0.12)
  interiorGroup.add(ledge)

  // 4 Bar Stools (Turned dark wood with padded black leather swivel cushion)
  const stoolMat = new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.5 })
  const stoolWood = new THREE.MeshStandardMaterial({ color: 0x3d2414, roughness: 0.5 })
  for (let i = 0; i < 4; i++) {
    const sx = spec.x - 1.5 + i * 1.0
    const sz = barZ - barD / 2 - 0.38

    // Central wood post & base
    const sBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.03, 12), metalMat)
    sBase.position.set(sx, floorY + 0.015, sz)
    const sPost = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.48, 8), stoolWood)
    sPost.position.set(sx, floorY + 0.255, sz)

    // Brass footrest ring
    const footring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.01, 6, 12), metalMat)
    footring.rotateX(Math.PI / 2)
    footring.position.set(sx, floorY + 0.18, sz)

    // Padded seat cushion
    const sCushion = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.08, 14), stoolMat)
    sCushion.position.set(sx, floorY + 0.53, sz)

    interiorGroup.add(sBase, sPost, footring, sCushion)
  }

  // =========================================================================
  // 10. DINING COUNTER PLACESETTINGS (STEAMING RAMEN BOWL & CONDIMENTS)
  // =========================================================================
  // Steaming Donburi Bowl (Special Tonkotsu Ramen)
  const bowlW = 0.28
  const bowlH = 0.14
  const bowlX = spec.x - 0.5
  const bowlZ = barZ - 0.08
  const bowlY = floorY + barH + 0.06

  // Ceramic Bowl (Black exterior, red inner lip)
  const bMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(bowlW / 2, bowlW * 0.28, bowlH, 16, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.15, side: THREE.DoubleSide }),
  )
  bMesh.position.set(bowlX, bowlY + bowlH / 2, bowlZ)
  interiorGroup.add(bMesh)

  // Rich Tonkotsu Broth surface
  const broth = new THREE.Mesh(
    new THREE.CircleGeometry(bowlW * 0.46, 16),
    new THREE.MeshStandardMaterial({ color: 0xd4a055, roughness: 0.25 }), // Creamy tonkotsu!
  )
  broth.rotateX(-Math.PI / 2)
  broth.position.set(bowlX, bowlY + bowlH - 0.015, bowlZ)
  interiorGroup.add(broth)

  // Wavy yellow noodles
  const noodleMesh = new THREE.Mesh(
    new THREE.TorusGeometry(0.065, 0.012, 6, 12),
    new THREE.MeshStandardMaterial({ color: 0xf5d061, roughness: 0.6 }),
  )
  noodleMesh.rotateX(Math.PI / 2)
  noodleMesh.position.set(bowlX + 0.02, bowlY + bowlH - 0.008, bowlZ)
  interiorGroup.add(noodleMesh)

  // Two Braised Chashu Pork Slices
  for (let c = 0; c < 2; c++) {
    const chashu = new THREE.Mesh(
      new THREE.CylinderGeometry(0.038, 0.038, 0.01, 10),
      new THREE.MeshStandardMaterial({ color: 0x9b4625, roughness: 0.7 }),
    )
    chashu.position.set(bowlX - 0.04 + c * 0.05, bowlY + bowlH, bowlZ - 0.03 + c * 0.04)
    interiorGroup.add(chashu)
  }

  // Soft-boiled Ajitama (Halved egg with golden yolk)
  const eggWhite = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.01, 10),
    new THREE.MeshStandardMaterial({ color: 0xfbfbf6, roughness: 0.5 }),
  )
  eggWhite.position.set(bowlX + 0.05, bowlY + bowlH, bowlZ - 0.04)
  const eggYolk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 0.012, 8),
    new THREE.MeshStandardMaterial({ color: 0xffa500, roughness: 0.3 }),
  )
  eggYolk.position.set(bowlX + 0.05, bowlY + bowlH + 0.002, bowlZ - 0.04)
  interiorGroup.add(eggWhite, eggYolk)

  // Crispy Nori Seaweed Sheet standing up
  const nori = new THREE.Mesh(
    new THREE.PlaneGeometry(0.065, 0.09),
    new THREE.MeshStandardMaterial({ color: 0x141814, roughness: 0.9, side: THREE.DoubleSide }),
  )
  nori.rotateY(-0.3)
  nori.position.set(bowlX - 0.07, bowlY + bowlH + 0.04, bowlZ - 0.05)
  interiorGroup.add(nori)

  // Chopped Green Scallions / Negi
  const negi = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.025, 0.008, 8),
    new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.8 }),
  )
  negi.position.set(bowlX, bowlY + bowlH + 0.002, bowlZ + 0.04)
  interiorGroup.add(negi)

  // Animated Rising Steam Quads from Ramen Bowl
  const steamPuffs: THREE.Mesh[] = []
  for (let sp = 0; sp < 4; sp++) {
    const sQuad = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), steamMat)
    sQuad.position.set(bowlX + (Math.random() - 0.5) * 0.08, bowlY + 0.12 + sp * 0.16, bowlZ)
    interiorGroup.add(sQuad)
    steamPuffs.push(sQuad)
  }

  // Condiment Set on Counter
  const cruetGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.12, 10)
  // Shoyu (Soy Sauce) Cruet
  const shoyu = new THREE.Mesh(
    cruetGeo,
    new THREE.MeshStandardMaterial({ color: 0x11161d, roughness: 0.2, metalness: 0.1 }),
  )
  shoyu.position.set(spec.x + 0.9, bowlY + 0.06, barZ)
  // Rayu (Chili Oil) Cruet
  const rayu = new THREE.Mesh(
    cruetGeo,
    new THREE.MeshStandardMaterial({ color: 0xc42012, roughness: 0.3 }),
  )
  rayu.position.set(spec.x + 1.05, bowlY + 0.06, barZ)
  // Stainless Pepper Shaker
  const pepper = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.09, 8), metalMat)
  pepper.position.set(spec.x + 1.18, bowlY + 0.045, barZ)
  interiorGroup.add(shoyu, rayu, pepper)

  // Wooden Box of Disposable Chopsticks (割り箸 Waribashi)
  const chopBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.18, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x5a341e, roughness: 0.6 }),
  )
  chopBox.position.set(spec.x + 1.4, bowlY + 0.09, barZ)
  // White paper wrapped chopsticks protruding
  const chopsticks = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.08, 0.1),
    new THREE.MeshStandardMaterial({ color: 0xf5f5ee, roughness: 0.8 }),
  )
  chopsticks.position.set(spec.x + 1.4, bowlY + 0.2, barZ)
  interiorGroup.add(chopBox, chopsticks)

  // Stainless Cold Water Pitcher & Drinking Glasses
  const pitcher = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.07, 0.22, 10),
    new THREE.MeshStandardMaterial({ color: 0xd8e0e8, roughness: 0.2, metalness: 0.8 }),
  )
  pitcher.position.set(spec.x - 1.4, bowlY + 0.11, barZ)
  const glassCup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.032, 0.028, 0.09, 8),
    shopGlassMat,
  )
  glassCup.position.set(spec.x - 1.22, bowlY + 0.045, barZ)
  interiorGroup.add(pitcher, glassCup)

  // =========================================================================
  // 11. KITCHEN BEHIND COUNTER (STAINLESS COOKING VATS, BROTH POTS & STEAM)
  // =========================================================================
  const kitZ = spec.z + 1.7
  const kitW = 4.2
  const kitH = 0.92

  // Stainless Steel Kitchen Prep Counter
  const kitCounter = new THREE.Mesh(
    new THREE.BoxGeometry(kitW, kitH, 0.85),
    new THREE.MeshStandardMaterial({ color: 0x8a929c, roughness: 0.35, metalness: 0.75 }),
  )
  kitCounter.position.set(spec.x, floorY + kitH / 2, kitZ)
  interiorGroup.add(kitCounter)

  // Commercial Stainless Exhaust Hood (レンジフード) above kitchen
  const hood = new THREE.Mesh(
    new THREE.BoxGeometry(kitW * 0.9, 0.45, 0.95),
    new THREE.MeshStandardMaterial({ color: 0x6e7682, roughness: 0.3, metalness: 0.8 }),
  )
  hood.position.set(spec.x, floorH - 0.45, kitZ)
  interiorGroup.add(hood)

  // Task light inside exhaust hood
  const hoodLight = new THREE.PointLight(0xfff0dd, 2.2, 5.5)
  hoodLight.position.set(spec.x, floorH - 0.65, kitZ)
  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorH - 0.65,
      z: kitZ,
      color: 0xfff0dd,
      intensity: 2.2,
      distance: 5.5,
      zone: 'Ramen',
    })
  } else {
    interiorGroup.add(hoodLight)
  }

  // Two Large Boiling Tonkotsu Broth Stockpots (寸胴鍋 Zundo-nabe)
  const potGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.48, 14)
  for (let p = 0; p < 2; p++) {
    const px = spec.x - 0.9 + p * 0.58
    const zundo = new THREE.Mesh(potGeo, metalMat)
    zundo.position.set(px, floorY + kitH + 0.24, kitZ - 0.05)

    // Rich bubbling broth inside pot
    const pBroth = new THREE.Mesh(
      new THREE.CircleGeometry(0.22, 12),
      new THREE.MeshStandardMaterial({ color: 0xc88f42, roughness: 0.4 }),
    )
    pBroth.rotateX(-Math.PI / 2)
    pBroth.position.set(px, floorY + kitH + 0.46, kitZ - 0.05)

    // Pot loop handles
    const h1 = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 4, 8), metalMat)
    h1.position.set(px - 0.25, floorY + kitH + 0.4, kitZ - 0.05)
    const h2 = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 4, 8), metalMat)
    h2.position.set(px + 0.25, floorY + kitH + 0.4, kitZ - 0.05)

    interiorGroup.add(zundo, pBroth, h1, h2)

    // Billowing steam from boiling stockpots
    for (let s = 0; s < 3; s++) {
      const pSteam = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), steamMat)
      pSteam.position.set(px + (Math.random() - 0.5) * 0.1, floorY + kitH + 0.55 + s * 0.25, kitZ - 0.05)
      interiorGroup.add(pSteam)
      steamPuffs.push(pSteam)
    }
  }

  // Noodle Boiler Vat with Tebo Strainer Baskets (ゆで麺機 & テボ)
  const vatGeo = new THREE.BoxGeometry(0.55, 0.35, 0.48)
  const vat = new THREE.Mesh(vatGeo, metalMat)
  vat.position.set(spec.x + 0.7, floorY + kitH + 0.18, kitZ - 0.05)
  interiorGroup.add(vat)

  // 2 Tebo noodle strainers hanging on vat rim
  for (let t = 0; t < 2; t++) {
    const teboHandle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.24, 6),
      new THREE.MeshStandardMaterial({ color: 0x5a341e }),
    )
    teboHandle.rotateX(0.3)
    teboHandle.position.set(spec.x + 0.6 + t * 0.18, floorY + kitH + 0.42, kitZ - 0.2)
    interiorGroup.add(teboHandle)
  }

  // Stack of Clean Donburi Ramen Bowls on Back Shelf
  for (let b = 0; b < 4; b++) {
    const sBowl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.08, 0.08, 12, 1, true),
      new THREE.MeshStandardMaterial({ color: b % 2 === 0 ? 0xd82618 : 0xf8f8f8, roughness: 0.2 }),
    )
    sBowl.position.set(spec.x + 1.5, floorY + kitH + 0.04 + b * 0.05, kitZ)
    interiorGroup.add(sBowl)
  }

  // =========================================================================
  // 12. WALL MENU PLAQUES (木札 KIFUDA) ON TIMBER RAIL
  // =========================================================================
  const menuItems = [
    '特製豚骨 ¥980',
    'チャーシュー麺 ¥1100',
    '濃厚魚介味噌 ¥950',
    '辛味噌らーめん ¥920',
    '替玉(一玉) ¥150',
    '博多一口餃子 ¥380',
  ]
  menuItems.forEach((label, idx) => {
    const tagMat = signMaterial(label, '#e2caa0', '#1c1208', undefined, 256, 64)
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.85), tagMat)
    tag.position.set(spec.x - 1.6 + idx * 0.64, floorY + 2.05, spec.z + innerD / 2 - wallThick - 0.02)
    interiorGroup.add(tag)
  })

  // Colliders for Counter and Kitchen
  colliders.add({
    minX: barX - barW / 2 - 0.1,
    minY: 0,
    minZ: barZ - barD / 2,
    maxX: barX + barW / 2 + 0.1,
    maxY: 1.5,
    maxZ: spec.z + innerD / 2,
  })

  interactions.add({
    id: 'ramen-counter',
    x: spec.x - 0.5,
    z: barZ - 0.8,
    radius: 1.8,
    prompt: 'Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]',
    onInteract: () => {
      audio?.playRamenTicketSound()
      messages.show(
        '"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!',
      )
    },
  })

  // =========================================================================
  // 13. WARM ATMOSPHERIC LIGHTING & PENDANT LAMPS
  // =========================================================================
  // Two Warm Conical Pendant Lamps hanging over Counter
  for (const px of [-1.0, 1.0]) {
    // Hanging cord
    const cord = new THREE.Mesh(
      new THREE.CylinderGeometry(0.004, 0.004, 0.75, 6),
      postMat,
    )
    cord.position.set(spec.x + px, floorH - 0.45, barZ)
    // Conical lamp shade
    const shade = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.14, 12, 1, true),
      new THREE.MeshStandardMaterial({ color: 0x18241a, roughness: 0.4 }),
    )
    shade.position.set(spec.x + px, floorH - 0.82, barZ)
    interiorGroup.add(cord, shade)

    // Warm downlight pool
    const pLight = new THREE.PointLight(0xffa544, 1.8, 6.5, 1.2)
    pLight.position.set(spec.x + px, floorH - 0.9, barZ)
    if (lightManager) {
      lightManager.register({
        x: spec.x + px,
        y: floorH - 0.9,
        z: barZ,
        color: 0xffa544,
        intensity: 1.8,
        distance: 6.5,
        decay: 1.2,
        zone: 'Ramen',
      })
    } else {
      interiorGroup.add(pLight)
    }
  }

  // Central Store Warm Ambient Light
  const light = new THREE.PointLight(0xff9944, 2.2, 14, 1.1)
  light.position.set(spec.x, floorH - 0.35, spec.z)
  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorH - 0.35,
      z: spec.z,
      color: 0xff9944,
      intensity: 2.2,
      distance: 14,
      decay: 1.1,
      zone: 'Ramen',
    })
  } else {
    group.add(light)
  }

  let time = 0

  const update = (dt: number, p: { x: number; z: number }): void => {
    // Distance culling: hide interior props when player is more than 28m away (in low graphics mode)
    const distSq = (p.x - spec.x) ** 2 + (p.z - spec.z) ** 2
    interiorGroup.visible = Settings.isHigh() || distSq < 784

    time += dt

    // Gentle lantern sway in night breeze
    const sway = Math.sin(time * 2.0) * 0.05
    l1.rotation.z = sway
    l2.rotation.z = -sway

    // Animate rising steam particles only when visible
    if (interiorGroup.visible) {
      steamPuffs.forEach((puff, i) => {
        const cycle = (time * 0.55 + i * 0.18) % 1.0
        puff.position.y += dt * 0.25
        puff.scale.setScalar(0.75 + cycle * 0.85)
        puff.rotation.z += dt * 0.15
      })
    }
  }

  return { light, update }
}

// =========================================================================
// 4. STANDARD GROUND STOREFRONTS & EXTERIORS (AUTHENTIC TOKYO SHOPFRONTS)
// =========================================================================

// --- Helper A-Frame Sidewalk Sandwich Board (立て看板) ---
function buildStorefrontAFrame(type: AFrameSignType): THREE.Group {
  const g = new THREE.Group()

  const legH = 0.92
  const signW = 0.5
  const legAngle = 0.16

  // 4 Angled wooden / powder-coated aluminum legs
  const legGeo = new THREE.CylinderGeometry(0.012, 0.012, legH, 6)
  const legMat = type === 'izakaya' || type === 'cafe' || type === 'bookstore'
    ? new THREE.MeshStandardMaterial({ color: 0x3d271a, roughness: 0.7 })
    : postMat

  for (const side of [-1, 1]) {
    const lx = (side * signW) / 2

    // Front leg
    const frontLeg = new THREE.Mesh(legGeo, legMat)
    frontLeg.position.set(lx, legH / 2, 0.07)
    frontLeg.rotation.x = -legAngle
    g.add(frontLeg)

    // Back leg
    const backLeg = new THREE.Mesh(legGeo, legMat)
    backLeg.position.set(lx, legH / 2, -0.07)
    backLeg.rotation.x = legAngle
    g.add(backLeg)
  }

  // Top hinge crossbar
  const hingeGeo = new THREE.CylinderGeometry(0.012, 0.012, signW + 0.04, 6)
  hingeGeo.rotateZ(Math.PI / 2)
  const hinge = new THREE.Mesh(hingeGeo, metalMat)
  hinge.position.set(0, legH - 0.02, 0)
  g.add(hinge)

  // Horizontal lower spreader bar
  const spreaderGeo = new THREE.CylinderGeometry(0.008, 0.008, signW, 6)
  spreaderGeo.rotateZ(Math.PI / 2)
  const spreader = new THREE.Mesh(spreaderGeo, metalMat)
  spreader.position.set(0, 0.15, 0)
  g.add(spreader)

  // Weighted plastic ballast water tank (注水置台) on the spreader bar
  const tankMat = new THREE.MeshStandardMaterial({
    color: type === 'dental' || type === 'cleaners' ? 0x24589e : 0x3a424e,
    roughness: 0.55,
  })
  const tankGeo = new THREE.BoxGeometry(signW * 0.78, 0.09, 0.2)
  const tank = new THREE.Mesh(tankGeo, tankMat)
  tank.position.set(0, 0.16, 0)
  g.add(tank)

  // Tank water cap
  const capGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.02, 8)
  const cap = new THREE.Mesh(capGeo, metalMat)
  cap.position.set(0.12, 0.21, 0)
  g.add(cap)

  // Sign panels (Front and Back)
  const signMat = new THREE.MeshBasicMaterial({
    map: aFrameSignTexture(type),
    toneMapped: false,
  })
  const signGeo = new THREE.PlaneGeometry(signW - 0.04, 0.68)

  // Front sign face
  const frontSign = new THREE.Mesh(signGeo, signMat)
  frontSign.position.set(0, 0.46, 0.075)
  frontSign.rotation.x = -legAngle
  g.add(frontSign)

  // Back sign face
  const backSign = new THREE.Mesh(signGeo, signMat)
  backSign.position.set(0, 0.46, -0.075)
  backSign.rotation.x = legAngle
  backSign.rotation.y = Math.PI
  g.add(backSign)

  return g
}

// --- Helper Japanese Stainless Steel Umbrella Stand (傘立て) ---
function buildUmbrellaStand(): THREE.Group {
  const g = new THREE.Group()

  const standW = 0.38
  const standH = 0.55
  const standD = 0.22

  // Stainless steel perimeter wire frame
  const frameGeo = new THREE.BoxGeometry(standW, standH, standD)
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x8a94a0,
    metalness: 0.85,
    roughness: 0.25,
    wireframe: true,
  })
  const frame = new THREE.Mesh(frameGeo, frameMat)
  frame.position.set(0, standH / 2, 0)
  g.add(frame)

  // Bottom catch drip tray
  const trayMat = new THREE.MeshStandardMaterial({ color: 0x22262d, roughness: 0.6, metalness: 0.4 })
  const tray = new THREE.Mesh(new THREE.BoxGeometry(standW + 0.02, 0.04, standD + 0.02), trayMat)
  tray.position.set(0, 0.02, 0)
  g.add(tray)

  // 3 Transparent Japanese Vinyl Umbrellas (ビニール傘)
  const vinylMat = new THREE.MeshStandardMaterial({
    color: 0xddeef8,
    roughness: 0.15,
    transparent: true,
    opacity: 0.6,
  })
  const handleMat = new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.3 })

  const offsets = [
    { x: -0.1, z: -0.04, rx: 0.06, rz: -0.08 },
    { x: 0.08, z: 0.03, rx: -0.05, rz: 0.09 },
    { x: -0.02, z: 0.05, rx: 0.08, rz: 0.04 },
  ]

  offsets.forEach((o) => {
    const umbGroup = new THREE.Group()
    umbGroup.position.set(o.x, 0.1, o.z)
    umbGroup.rotation.x = o.rx
    umbGroup.rotation.z = o.rz

    // Shaft
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.72, 6), metalMat)
    shaft.position.set(0, 0.36, 0)

    // Folded canopy body
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.48, 8), vinylMat)
    body.position.set(0, 0.28, 0)

    // J-shaped curved handle at top
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.032, 0.009, 6, 12, Math.PI), handleMat)
    handle.position.set(0.032, 0.72, 0)
    handle.rotation.z = Math.PI / 2

    umbGroup.add(shaft, body, handle)
    g.add(umbGroup)
  })

  return g
}

// --- Helper Traditional Japanese Sake Barrel (樽酒 - Taruzake) ---
function buildSakeBarrel(): THREE.Group {
  const g = new THREE.Group()

  // Wooden 4-legged pedestal stand (台座)
  const standMat = new THREE.MeshStandardMaterial({ color: 0x422d1d, roughness: 0.75 })
  const basePlank = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.04, 0.46), standMat)
  basePlank.position.set(0, 0.2, 0)
  g.add(basePlank)

  for (const lx of [-0.22, 0.22]) {
    for (const lz of [-0.18, 0.18]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.2, 0.05), standMat)
      leg.position.set(lx, 0.1, lz)
      g.add(leg)
    }
  }

  // Straw-bound cedar barrel (樽)
  const strawMat = new THREE.MeshStandardMaterial({ color: 0xc4a36f, roughness: 0.88 })
  const barrelGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.48, 16)
  const barrel = new THREE.Mesh(barrelGeo, strawMat)
  barrel.position.set(0, 0.46, 0)
  g.add(barrel)

  // Braided bamboo hoops around barrel
  const hoopMat = new THREE.MeshStandardMaterial({ color: 0x5a3d24, roughness: 0.8 })
  for (const hy of [0.32, 0.6]) {
    const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.245, 0.014, 6, 16), hoopMat)
    hoop.position.set(0, hy, 0)
    hoop.rotation.x = Math.PI / 2
    g.add(hoop)
  }

  // Circular calligraphy crest badge on front
  const crestMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
  const crest = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), crestMat)
  crest.position.set(0, 0.46, 0.245)
  g.add(crest)

  // Vermilion seal mark in center of crest
  const sealMat = new THREE.MeshBasicMaterial({ color: 0xcc291d, toneMapped: false })
  const seal = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.07), sealMat)
  seal.position.set(0, 0.46, 0.248)
  g.add(seal)

  return g
}

// --- Helper Wall Blade Sign (突き出し看板 / 袖看板) ---
function buildBladeSign(type: 'dental' | 'pharmacy', skipPointLight = false): THREE.Group {
  const g = new THREE.Group()

  // Projecting wrought-iron mounting bracket
  const bracketGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.44, 6)
  bracketGeo.rotateX(Math.PI / 2)
  const bracketUpper = new THREE.Mesh(bracketGeo, postMat)
  bracketUpper.position.set(0, 0.35, 0.22)
  const bracketLower = new THREE.Mesh(bracketGeo, postMat)
  bracketLower.position.set(0, -0.35, 0.22)
  g.add(bracketUpper, bracketLower)

  // Lightbox housing
  const boxW = 0.12
  const boxH = 0.88
  const boxD = 0.42
  const housingMat = new THREE.MeshStandardMaterial({ color: 0x222830, roughness: 0.4, metalness: 0.6 })
  const housing = new THREE.Mesh(new THREE.BoxGeometry(boxW, boxH, boxD), housingMat)
  housing.position.set(0, 0, 0.42)
  g.add(housing)

  // Glowing translucent acrylic sign faces on both sides
  const faceMat = new THREE.MeshBasicMaterial({
    color: type === 'dental' ? 0xd8f5fa : 0xd8faee,
    toneMapped: false,
  })
  const faceGeo = new THREE.PlaneGeometry(boxD - 0.04, boxH - 0.04)

  for (const side of [-1, 1]) {
    const face = new THREE.Mesh(faceGeo, faceMat)
    face.position.set(side * (boxW / 2 + 0.005), 0, 0.42)
    face.rotation.y = (side * Math.PI) / 2
    g.add(face)

    // Symbol on face
    if (type === 'pharmacy') {
      // Green cross
      const crossMat = new THREE.MeshBasicMaterial({ color: 0x00a86b, toneMapped: false })
      const barV = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.24), crossMat)
      barV.position.set(side * (boxW / 2 + 0.008), 0.08, 0.42)
      barV.rotation.y = (side * Math.PI) / 2
      const barH = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.07), crossMat)
      barH.position.set(side * (boxW / 2 + 0.008), 0.08, 0.42)
      barH.rotation.y = (side * Math.PI) / 2
      g.add(barV, barH)
    } else {
      // Cyan tooth emblem badge
      const toothMat = new THREE.MeshBasicMaterial({ color: 0x1f7a8c, toneMapped: false })
      const toothCircle = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), toothMat)
      toothCircle.position.set(side * (boxW / 2 + 0.008), 0.08, 0.42)
      toothCircle.rotation.y = (side * Math.PI) / 2
      g.add(toothCircle)
    }
  }

  // Soft glow light (avoid adding PointLight if lightManager is in use)
  if (!skipPointLight) {
    const bladeLight = new THREE.PointLight(type === 'dental' ? 0x9be8f5 : 0x8ef5cf, 0.8, 3.5)
    bladeLight.position.set(0, 0, 0.45)
    g.add(bladeLight)
  }

  return g
}

// --- Helper Japanese Bookstore Sidewalk Display Wagon (店頭ワゴンセール) ---
function buildBookWagon(): THREE.Group {
  const g = new THREE.Group()

  const wagonW = 0.82
  const wagonH = 0.85
  const wagonD = 0.48

  // Metal cart frame
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x3d434a, roughness: 0.5, metalness: 0.6 })
  const cartBody = new THREE.Mesh(new THREE.BoxGeometry(wagonW, wagonH - 0.12, wagonD), frameMat)
  cartBody.position.set(0, wagonH / 2, 0)
  g.add(cartBody)

  // 4 Caster wheels
  const wheelGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 8)
  wheelGeo.rotateZ(Math.PI / 2)
  for (const wx of [-0.34, 0.34]) {
    for (const wz of [-0.18, 0.18]) {
      const wheel = new THREE.Mesh(wheelGeo, postMat)
      wheel.position.set(wx, 0.04, wz)
      g.add(wheel)
    }
  }

  // Display rows of books on top shelf
  const bookColors = [0x9e2a2b, 0x24589e, 0x1e7845, 0xd97724, 0x5b328a, 0x1e2430]
  for (let bx = -0.32; bx < 0.34; bx += 0.075) {
    const bColor = bookColors[Math.floor(Math.random() * bookColors.length)]
    const bMat = new THREE.MeshStandardMaterial({ color: bColor, roughness: 0.7 })
    const bookMesh = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.18, 0.36), bMat)
    bookMesh.position.set(bx, wagonH + 0.08, 0)
    bookMesh.rotation.y = (Math.random() - 0.5) * 0.15
    g.add(bookMesh)
  }

  // Hanging laminated sale tag
  const tagMat = new THREE.MeshBasicMaterial({ color: 0xffd13b, toneMapped: false })
  const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.14), tagMat)
  tag.position.set(0, wagonH - 0.08, wagonD / 2 + 0.01)
  g.add(tag)

  return g
}

// =========================================================================
// MAIN STOREFRONT BUILDER: CUSTOM FAÇADE FOR EACH SHOP
// =========================================================================
function buildStandardStorefront(
  group: THREE.Group,
  spec: BuildingSpec,
  _trimMat: THREE.Material,
  interactions: InteractionSystem,
  messages: MessageBus,
  audio?: AudioManager,
  lightManager?: LightManager,
): { update?: (dt: number, p: { x: number; z: number }) => void } | void {
  const floorH = 3.2
  const halfW = spec.w / 2
  const halfD = spec.d / 2
  const facadeW = spec.front === 's' || spec.front === 'n' ? spec.w : spec.d

  // Dedicated storefront group with unified local coordinate system:
  // - Origin (0,0,0) is at bottom center of the front exterior wall
  // - Local X is along the facade width
  // - Local Y is vertical
  // - Local +Z points OUTWARD into the street
  const sfGroup = new THREE.Group()
  let rotY = 0
  let posX = spec.x
  let posZ = spec.z

  if (spec.front === 's') {
    rotY = Math.PI
    posX = spec.x
    posZ = spec.z - halfD
  } else if (spec.front === 'n') {
    rotY = 0
    posX = spec.x
    posZ = spec.z + halfD
  } else if (spec.front === 'w') {
    rotY = -Math.PI / 2
    posX = spec.x - halfW
    posZ = spec.z
  } else if (spec.front === 'e') {
    rotY = Math.PI / 2
    posX = spec.x + halfW
    posZ = spec.z
  }

  sfGroup.position.set(posX, 0, posZ)
  sfGroup.rotation.y = rotY
  group.add(sfGroup)

  // Coordinate conversion helper for interaction triggers in world space
  function toWorld(lx: number, lz: number): { x: number; z: number } {
    if (spec.front === 's') return { x: spec.x - lx, z: spec.z - halfD - lz }
    if (spec.front === 'n') return { x: spec.x + lx, z: spec.z + halfD + lz }
    if (spec.front === 'w') return { x: spec.x - halfW - lz, z: spec.z - lx }
    return { x: spec.x + halfW + lz, z: spec.z + lx }
  }

  // Determine shop identity
  let storeType: 'dental' | 'cleaners' | 'izakaya' | 'pharmacy' | 'bookstore' | 'cafe' | 'residential' = 'residential'
  if (spec.id === 'b-se-mansion') storeType = 'dental'
  else if (spec.id === 'b-nw-mansion') storeType = 'cleaners'
  else if (spec.id === 'b-sw-commercial') storeType = 'izakaya'
  else if (spec.id === 'b-ne-apartments') storeType = 'pharmacy'
  else if (spec.id === 'b-fe-north') storeType = 'bookstore'
  else if (spec.id === 'b-cafe') storeType = 'cafe'

  // Anodized aluminum dark mullion frame material
  const mullionMat = new THREE.MeshStandardMaterial({ color: 0x1e242c, roughness: 0.35, metalness: 0.7 })

  // -------------------------------------------------------------------------
  // 1. DENTAL CLINIC (PARKSIDE DENTAL / パークサイド歯科)
  // -------------------------------------------------------------------------
  if (storeType === 'dental') {
    const storeW = 10.8

    // Clean stone / architectural composite backdrop panel
    const cladMat = new THREE.MeshStandardMaterial({ color: 0xdde6eb, roughness: 0.45, metalness: 0.1 })
    const cladMesh = new THREE.Mesh(new THREE.BoxGeometry(storeW + 0.4, floorH, 0.08), cladMat)
    cladMesh.position.set(0, floorH / 2, -0.02)
    sfGroup.add(cladMesh)

    // Large Illuminated Frosted Display Window (Left Bay)
    const winW = 5.6
    const winH = 2.25
    const winX = -2.0
    const winMat = new THREE.MeshBasicMaterial({
      map: dentalClinicWindowTexture(),
      toneMapped: false,
    })
    const winMesh = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winMat)
    winMesh.position.set(winX, 1.25, 0.04)
    sfGroup.add(winMesh)

    // Aluminum mullion border and dividers around display window
    const borderTop = new THREE.Mesh(new THREE.BoxGeometry(winW + 0.1, 0.06, 0.08), mullionMat)
    borderTop.position.set(winX, 1.25 + winH / 2, 0.05)
    const borderBtm = new THREE.Mesh(new THREE.BoxGeometry(winW + 0.1, 0.12, 0.08), mullionMat)
    borderBtm.position.set(winX, 0.06, 0.05)
    sfGroup.add(borderTop, borderBtm)

    for (const mx of [-winW / 6, winW / 6]) {
      const div = new THREE.Mesh(new THREE.BoxGeometry(0.04, winH, 0.06), mullionMat)
      div.position.set(winX + mx, 1.25, 0.05)
      sfGroup.add(div)
    }

    // Automatic Double Sliding Glass Entrance Doors (Right Bay)
    const doorW = 2.4
    const doorX = 2.4
    const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.16, 2.3, 0.12), mullionMat)
    dFrame.position.set(doorX, 1.2, 0.02)
    sfGroup.add(dFrame)

    const glassDoorGeo = new THREE.BoxGeometry(doorW * 0.48, 2.18, 0.04)
    const dLeft = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dLeft.position.set(doorX - doorW * 0.24, 1.18, 0.03)
    const dRight = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dRight.position.set(doorX + doorW * 0.24, 1.18, 0.05)
    sfGroup.add(dLeft, dRight)

    // Stainless steel push plates & automatic door sensor plate
    const pushPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.02), metalMat)
    pushPlate.position.set(doorX - 0.06, 1.15, 0.07)
    sfGroup.add(pushPlate)

    // Entrance Thin Stainless Steel Canopy
    const canopyGeo = new THREE.BoxGeometry(doorW + 0.6, 0.06, 0.9)
    const canopyMesh = new THREE.Mesh(canopyGeo, metalMat)
    canopyMesh.position.set(doorX, 2.45, 0.45)
    sfGroup.add(canopyMesh)

    // Recessed under-canopy entry spotlight
    if (lightManager) {
      const wPos = toWorld(doorX, 0.45)
      lightManager.register({
        x: wPos.x,
        y: 2.38,
        z: wPos.z,
        color: 0xf2fbff,
        intensity: 1.4,
        distance: 4.0,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const canopyLight = new THREE.PointLight(0xf2fbff, 1.4, 4.0, 1.2)
      canopyLight.position.set(doorX, 2.38, 0.45)
      sfGroup.add(canopyLight)
    }

    // Charcoal welcome runner mat outside sliding door
    const matMat = new THREE.MeshStandardMaterial({ color: 0x1d363d, roughness: 0.95 })
    const matMesh = new THREE.Mesh(new THREE.BoxGeometry(doorW * 0.9, 0.02, 0.95), matMat)
    matMesh.position.set(doorX, 0.012, 0.55)
    sfGroup.add(matMesh)

    // Illuminated Fascia Lightbox Sign
    const signW = 7.6
    const signH = 0.82
    const signMat = new THREE.MeshBasicMaterial({
      map: dentalClinicSignTexture(),
      toneMapped: false,
    })
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(signW, signH, 0.15), signMat)
    signMesh.position.set(0, 2.76, 0.12)
    sfGroup.add(signMesh)

    // Aluminum frame surrounding sign
    const signFrame = new THREE.Mesh(new THREE.BoxGeometry(signW + 0.12, signH + 0.1, 0.18), mullionMat)
    signFrame.position.set(0, 2.76, 0.1)
    sfGroup.add(signFrame)

    // Exterior Downlights above sign casting light pool on the pavement
    for (const lx of [-2.4, 2.4]) {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.35, 6), metalMat)
      arm.rotation.x = Math.PI / 3
      arm.position.set(lx, 3.22, 0.25)
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.12), metalMat)
      head.position.set(lx, 3.28, 0.38)
      sfGroup.add(arm, head)
    }

    if (lightManager) {
      const wPos = toWorld(0, 0.5)
      lightManager.register({
        x: wPos.x,
        y: 3.15,
        z: wPos.z,
        color: 0xdcf6fa,
        intensity: 1.9,
        distance: 7.5,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const signDownlight = new THREE.PointLight(0xdcf6fa, 1.9, 7.5, 1.2)
      signDownlight.position.set(0, 3.15, 0.5)
      sfGroup.add(signDownlight)
    }

    // Corner Blade Sign (突き出し看板)
    const blade = buildBladeSign('dental', !!lightManager)
    blade.position.set(storeW / 2 + 0.1, 2.4, 0.25)
    sfGroup.add(blade)

    // Sidewalk Accessories:
    // A-Frame Sign
    const aFrame = buildStorefrontAFrame('dental')
    aFrame.position.set(-3.8, 0, 0.85)
    aFrame.rotation.y = 0.14
    sfGroup.add(aFrame)

    // Stainless Umbrella Stand beside door
    const umbStand = buildUmbrellaStand()
    umbStand.position.set(doorX + doorW / 2 + 0.35, 0, 0.35)
    sfGroup.add(umbStand)

    // Potted plant beside door
    const potMat = new THREE.MeshStandardMaterial({ color: 0xefede6, roughness: 0.5 })
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.45, 12), potMat)
    pot.position.set(0.9, 0.225, 0.35)
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x225530, roughness: 0.6 })
    const plant = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), leafMat)
    plant.position.set(0.9, 0.55, 0.35)
    sfGroup.add(pot, plant)

    // Interactive Trigger
    const interPos = toWorld(doorX, 1.1)
    interactions.add({
      id: 'sf-dental-clinic',
      x: interPos.x,
      z: interPos.z,
      radius: 2.2,
      prompt: 'Inspect Dental Clinic & Reception',
      onInteract: () => {
        if (audio) audio.playDeskBellSound()
        messages.show(
          'パークサイド歯科: 『本日は予約優先制となっております。歯のクリーニング、定期検診、急患の診療は随時受付中（TEL 03-3456-7890）』',
        )
      },
    })
    return
  }

  // -------------------------------------------------------------------------
  // 2. DRY CLEANERS & LAUNDROMAT (SHIROKANE CLEANING / 白金クリーニング)
  // -------------------------------------------------------------------------
  if (storeType === 'cleaners') {
    const storeW = 10.8

    // Royal Blue Canvas Awning with Valance
    const awningMat = new THREE.MeshStandardMaterial({ color: 0x1d4380, roughness: 0.85 })
    const awningGeo = new THREE.BoxGeometry(storeW * 0.92, 0.08, 1.25)
    awningGeo.rotateX(0.18)
    const awning = new THREE.Mesh(awningGeo, awningMat)
    awning.position.set(0, 2.45, 0.6)

    // Scalloped / straight bottom valance drop
    const valance = new THREE.Mesh(new THREE.BoxGeometry(storeW * 0.92, 0.22, 0.03), awningMat)
    valance.position.set(0, 2.24, 1.18)
    sfGroup.add(awning, valance)

    // Large Display Window (Left Bay)
    const winW = 5.6
    const winH = 2.25
    const winX = -2.0
    const winMat = new THREE.MeshBasicMaterial({
      map: dryCleanerWindowTexture(),
      toneMapped: false,
    })
    const winMesh = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winMat)
    winMesh.position.set(winX, 1.25, 0.04)
    sfGroup.add(winMesh)

    // Sliding Entrance Doors (Right Bay)
    const doorW = 2.4
    const doorX = 2.4
    const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.16, 2.3, 0.12), mullionMat)
    dFrame.position.set(doorX, 1.2, 0.02)
    sfGroup.add(dFrame)

    const glassDoorGeo = new THREE.BoxGeometry(doorW * 0.48, 2.18, 0.04)
    const dLeft = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dLeft.position.set(doorX - doorW * 0.24, 1.18, 0.03)
    const dRight = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dRight.position.set(doorX + doorW * 0.24, 1.18, 0.05)
    sfGroup.add(dLeft, dRight)

    // Cleaners Royal Blue Entrance Mat
    const matMat = new THREE.MeshStandardMaterial({ color: 0x17315f, roughness: 0.95 })
    const rug = new THREE.Mesh(new THREE.BoxGeometry(doorW * 0.9, 0.02, 0.95), matMat)
    rug.position.set(doorX, 0.012, 0.55)
    sfGroup.add(rug)

    // Fascia Sign
    const signW = 7.6
    const signH = 0.82
    const signMat = new THREE.MeshBasicMaterial({
      map: dryCleanerSignTexture(),
      toneMapped: false,
    })
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(signW, signH, 0.15), signMat)
    signMesh.position.set(0, 2.78, 0.12)
    sfGroup.add(signMesh)

    // Storefront Downlight pool illuminating pavement
    if (lightManager) {
      const wPos = toWorld(0, 0.6)
      lightManager.register({
        x: wPos.x,
        y: 3.15,
        z: wPos.z,
        color: 0xe8f2ff,
        intensity: 2.0,
        distance: 7.5,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const cleanersLight = new THREE.PointLight(0xe8f2ff, 2.0, 7.5, 1.2)
      cleanersLight.position.set(0, 3.15, 0.6)
      sfGroup.add(cleanersLight)
    }

    // Sidewalk Accessories
    const aFrame = buildStorefrontAFrame('cleaners')
    aFrame.position.set(-3.8, 0, 0.85)
    aFrame.rotation.y = -0.12
    sfGroup.add(aFrame)

    const umbStand = buildUmbrellaStand()
    umbStand.position.set(doorX + doorW / 2 + 0.35, 0, 0.35)
    sfGroup.add(umbStand)

    // Interactive Trigger
    const interPos = toWorld(doorX, 1.1)
    interactions.add({
      id: 'sf-dry-cleaners',
      x: interPos.x,
      z: interPos.z,
      radius: 2.2,
      prompt: 'Check Dry Cleaners Rates',
      onInteract: () => {
        if (audio) audio.playDeskBellSound()
        messages.show(
          '白金クリーニング: 『朝10時までのお預かりで夕方5時お渡し！ワイシャツ立体仕上 ¥220、スーツ上下 ¥1,280。24Hコインランドリーも併設稼働中です！』',
        )
      },
    })
    return
  }

  // -------------------------------------------------------------------------
  // 3. TRADITIONAL IZAKAYA (UOGASHI / 和食・酒処 魚河岸)
  // -------------------------------------------------------------------------
  if (storeType === 'izakaya') {
    const storeW = 9.2

    // Dark charred yakisugi timber cladding
    const cedarMat = new THREE.MeshStandardMaterial({ color: 0x221a14, roughness: 0.9 })
    const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(storeW + 0.3, floorH, 0.08), cedarMat)
    wallMesh.position.set(0, floorH / 2, -0.02)
    sfGroup.add(wallMesh)

    // Traditional cedar eave roof with dark kawara tiles (瓦屋根の庇)
    const eaveGeo = new THREE.BoxGeometry(storeW * 0.96, 0.12, 1.2)
    eaveGeo.rotateX(0.2)
    const eaveMesh = new THREE.Mesh(eaveGeo, new THREE.MeshStandardMaterial({ color: 0x1f2329, roughness: 0.6 }))
    eaveMesh.position.set(0, 2.5, 0.6)
    sfGroup.add(eaveMesh)

    // Large Shoji Paper Lattice & Wooden Menu Facade
    const winW = 5.2
    const winH = 2.25
    const winX = -1.6
    const winMat = new THREE.MeshBasicMaterial({
      map: izakayaFacadeTexture(),
      toneMapped: false,
    })
    const winMesh = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winMat)
    winMesh.position.set(winX, 1.25, 0.04)
    sfGroup.add(winMesh)

    // Sliding Wooden Lattice Entrance Door (Right Bay)
    const doorW = 2.0
    const doorX = 2.4
    const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.12, 2.2, 0.1), cedarMat)
    dFrame.position.set(doorX, 1.15, 0.02)
    sfGroup.add(dFrame)

    // Indigo dyed noren curtain (暖簾) over the doorway
    const norenGeo = new THREE.BoxGeometry(doorW * 0.95, 0.55, 0.03)
    const norenMat = new THREE.MeshStandardMaterial({ color: 0x18243b, roughness: 0.85 })
    const noren = new THREE.Mesh(norenGeo, norenMat)
    noren.position.set(doorX, 2.05, 0.09)
    sfGroup.add(noren)

    // Stone entrance threshold slab (敷石)
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x3d4248, roughness: 0.8 })
    const stone = new THREE.Mesh(new THREE.BoxGeometry(doorW * 1.1, 0.04, 0.8), stoneMat)
    stone.position.set(doorX, 0.02, 0.45)
    sfGroup.add(stone)

    // 3D Traditional Sake Barrel (樽酒) on sidewalk
    const sakeBarrel = buildSakeBarrel()
    sakeBarrel.position.set(-3.4, 0, 0.55)
    sfGroup.add(sakeBarrel)

    // 3D Hanging Glowing Red Chochin Paper Lantern (赤提灯)
    const lanternGroup = new THREE.Group()
    lanternGroup.position.set(1.1, 2.3, 0.5)

    // Wrought-iron bracket
    const bArm = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.48, 6), postMat)
    bArm.rotation.x = Math.PI / 2
    bArm.position.set(0, 0.15, -0.24)
    lanternGroup.add(bArm)

    // Red paper oval lantern
    const lanternMat = new THREE.MeshBasicMaterial({ color: 0xd93829, toneMapped: false })
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.38, 12), lanternMat)
    const cap1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.04, 12), postMat)
    cap1.position.set(0, 0.2, 0)
    const cap2 = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.04, 12), postMat)
    cap2.position.set(0, -0.2, 0)
    lantern.add(cap1, cap2)
    lanternGroup.add(lantern)

    // Warm orange lantern glow
    if (lightManager) {
      const wPos = toWorld(1.1, 0.5)
      lightManager.register({
        x: wPos.x,
        y: 2.3,
        z: wPos.z,
        color: 0xff7722,
        intensity: 1.8,
        distance: 5.0,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const lanternLight = new THREE.PointLight(0xff7722, 1.8, 5.0, 1.2)
      lanternLight.position.set(0, 0, 0)
      lanternGroup.add(lanternLight)
    }
    sfGroup.add(lanternGroup)

    // Fascia Sign
    const signW = 6.8
    const signH = 0.82
    const signMat = new THREE.MeshBasicMaterial({
      map: izakayaSignTexture(),
      toneMapped: false,
    })
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(signW, signH, 0.15), signMat)
    signMesh.position.set(0, 2.82, 0.12)
    sfGroup.add(signMesh)

    // Warm tavern amber ambient downlight pool
    if (lightManager) {
      const wPos = toWorld(0, 0.55)
      lightManager.register({
        x: wPos.x,
        y: 3.1,
        z: wPos.z,
        color: 0xff9933,
        intensity: 2.2,
        distance: 8.0,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const tavernLight = new THREE.PointLight(0xff9933, 2.2, 8.0, 1.2)
      tavernLight.position.set(0, 3.1, 0.55)
      sfGroup.add(tavernLight)
    }

    // Sidewalk Chalkboard A-Frame Sign
    const aFrame = buildStorefrontAFrame('izakaya')
    aFrame.position.set(3.4, 0, 0.85)
    aFrame.rotation.y = 0.15
    sfGroup.add(aFrame)

    // Interactive Trigger
    const interPos = toWorld(doorX, 1.1)
    interactions.add({
      id: 'sf-izakaya',
      x: interPos.x,
      z: interPos.z,
      radius: 2.2,
      prompt: 'Look at Izakaya Specials',
      onInteract: () => {
        if (audio) audio.playDeskBellSound()
        messages.show(
          '和食・酒処 魚河岸: 『いらっしゃい！今夜のイチオシは豊洲直送の刺身三種盛り(¥980)と、じっくり煮込んだ特製もつ煮込み(¥480)だよ！晩酌セットも大人気！』',
        )
      },
    })

    // Swaying lantern animator in the night breeze
    let lTime = 0
    return {
      update(dt: number) {
        lTime += dt
        lantern.rotation.z = Math.sin(lTime * 2.2) * 0.06
        lantern.rotation.x = Math.cos(lTime * 1.8) * 0.04
      },
    }
  }

  // -------------------------------------------------------------------------
  // 4. PHARMACY & MORI CLINIC (森クリニック / 薬局)
  // -------------------------------------------------------------------------
  if (storeType === 'pharmacy') {
    const storeW = 8.8

    // Clean mint/teal stone facade panel
    const cladMat = new THREE.MeshStandardMaterial({ color: 0xd7eee7, roughness: 0.45, metalness: 0.1 })
    const cladMesh = new THREE.Mesh(new THREE.BoxGeometry(storeW + 0.3, floorH, 0.08), cladMat)
    cladMesh.position.set(0, floorH / 2, -0.02)
    sfGroup.add(cladMesh)

    // Large Display Window (Left Bay)
    const winW = 4.8
    const winH = 2.25
    const winX = -1.6
    const winMat = new THREE.MeshBasicMaterial({
      map: pharmacyWindowTexture(),
      toneMapped: false,
    })
    const winMesh = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winMat)
    winMesh.position.set(winX, 1.25, 0.04)
    sfGroup.add(winMesh)

    // Automatic Sliding Glass Doors (Right Bay)
    const doorW = 2.2
    const doorX = 2.2
    const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.16, 2.3, 0.12), mullionMat)
    dFrame.position.set(doorX, 1.2, 0.02)
    sfGroup.add(dFrame)

    const glassDoorGeo = new THREE.BoxGeometry(doorW * 0.48, 2.18, 0.04)
    const dLeft = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dLeft.position.set(doorX - doorW * 0.24, 1.18, 0.03)
    const dRight = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dRight.position.set(doorX + doorW * 0.24, 1.18, 0.05)
    sfGroup.add(dLeft, dRight)

    // Green pharmacy entrance mat
    const matMat = new THREE.MeshStandardMaterial({ color: 0x145244, roughness: 0.95 })
    const rug = new THREE.Mesh(new THREE.BoxGeometry(doorW * 0.9, 0.02, 0.95), matMat)
    rug.position.set(doorX, 0.012, 0.55)
    sfGroup.add(rug)

    // Fascia Sign
    const signW = 6.6
    const signH = 0.82
    const signMat = new THREE.MeshBasicMaterial({
      map: pharmacySignTexture(),
      toneMapped: false,
    })
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(signW, signH, 0.15), signMat)
    signMesh.position.set(0, 2.76, 0.12)
    sfGroup.add(signMesh)

    // Projecting Blade Sign (Green Cross)
    const blade = buildBladeSign('pharmacy', !!lightManager)
    blade.position.set(storeW / 2 + 0.1, 2.4, 0.25)
    sfGroup.add(blade)

    // Medical Storefront Light pool
    if (lightManager) {
      const wPos = toWorld(0, 0.5)
      lightManager.register({
        x: wPos.x,
        y: 3.15,
        z: wPos.z,
        color: 0xdaf8f0,
        intensity: 1.9,
        distance: 7.0,
        decay: 1.1,
        zone: 'Street',
      })
    } else {
      const medLight = new THREE.PointLight(0xdaf8f0, 1.9, 7.0, 1.1)
      medLight.position.set(0, 3.15, 0.5)
      sfGroup.add(medLight)
    }

    // Sidewalk Accessories
    const aFrame = buildStorefrontAFrame('pharmacy')
    aFrame.position.set(-3.2, 0, 0.85)
    aFrame.rotation.y = 0.12
    sfGroup.add(aFrame)

    const umbStand = buildUmbrellaStand()
    umbStand.position.set(doorX + doorW / 2 + 0.35, 0, 0.35)
    sfGroup.add(umbStand)

    // Interactive Trigger
    const interPos = toWorld(doorX, 1.1)
    interactions.add({
      id: 'sf-pharmacy',
      x: interPos.x,
      z: interPos.z,
      radius: 2.2,
      prompt: 'Consult Pharmacy Counter',
      onInteract: () => {
        if (audio) audio.playDeskBellSound()
        messages.show(
          '森クリニック・森薬局: 『全国どちらの医療機関の処方せんも受け付けております。お薬の相談、在宅医療、各種健康診断もお気軽にどうぞ。』',
        )
      },
    })
    return
  }

  // -------------------------------------------------------------------------
  // 5. HIGASHI BOOKSTORE & MANGA (東書店 本屋)
  // -------------------------------------------------------------------------
  if (storeType === 'bookstore') {
    const storeW = 9.8

    // Mahogany timber framing
    const timberMat = new THREE.MeshStandardMaterial({ color: 0x3b2216, roughness: 0.65 })
    const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(storeW + 0.3, floorH, 0.08), timberMat)
    wallMesh.position.set(0, floorH / 2, -0.02)
    sfGroup.add(wallMesh)

    // Large Display Window (Left Bay)
    const winW = 5.4
    const winH = 2.25
    const winX = -1.8
    const winMat = new THREE.MeshBasicMaterial({
      map: bookstoreWindowTexture(),
      toneMapped: false,
    })
    const winMesh = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winMat)
    winMesh.position.set(winX, 1.25, 0.04)
    sfGroup.add(winMesh)

    // Sliding Entrance Doors (Right Bay)
    const doorW = 2.2
    const doorX = 2.2
    const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.16, 2.3, 0.12), mullionMat)
    dFrame.position.set(doorX, 1.2, 0.02)
    sfGroup.add(dFrame)

    const glassDoorGeo = new THREE.BoxGeometry(doorW * 0.48, 2.18, 0.04)
    const dLeft = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dLeft.position.set(doorX - doorW * 0.24, 1.18, 0.03)
    const dRight = new THREE.Mesh(glassDoorGeo, shopGlassMat)
    dRight.position.set(doorX + doorW * 0.24, 1.18, 0.05)
    sfGroup.add(dLeft, dRight)

    // Fascia Sign
    const signW = 7.0
    const signH = 0.82
    const signMat = new THREE.MeshBasicMaterial({
      map: bookstoreSignTexture(),
      toneMapped: false,
    })
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(signW, signH, 0.15), signMat)
    signMesh.position.set(0, 2.76, 0.12)
    sfGroup.add(signMesh)

    // Warm bookstore light pool
    if (lightManager) {
      const wPos = toWorld(0, 0.5)
      lightManager.register({
        x: wPos.x,
        y: 3.15,
        z: wPos.z,
        color: 0xffe6c4,
        intensity: 2.0,
        distance: 7.5,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const bookLight = new THREE.PointLight(0xffe6c4, 2.0, 7.5, 1.2)
      bookLight.position.set(0, 3.15, 0.5)
      sfGroup.add(bookLight)
    }

    // Outdoor Sidewalk Book Display Wagon (店頭ワゴンセール)
    const bookWagon = buildBookWagon()
    bookWagon.position.set(-3.2, 0, 0.65)
    sfGroup.add(bookWagon)

    // Sidewalk Accessories
    const aFrame = buildStorefrontAFrame('bookstore')
    aFrame.position.set(3.4, 0, 0.85)
    aFrame.rotation.y = -0.15
    sfGroup.add(aFrame)

    const umbStand = buildUmbrellaStand()
    umbStand.position.set(1.0, 0, 0.35)
    sfGroup.add(umbStand)

    // Interactive Trigger
    const interPos = toWorld(doorX, 1.1)
    interactions.add({
      id: 'sf-bookstore',
      x: interPos.x,
      z: interPos.z,
      radius: 2.2,
      prompt: 'Browse Bookstore Display',
      onInteract: () => {
        if (audio) audio.playDeskBellSound()
        messages.show(
          '東書店: 『話題の直木賞・芥川賞受賞作、今週発売のジャンプ系コミックス最新巻が平積みされています！図書カードNEXT取扱店です。』',
        )
      },
    })
    return
  }

  // -------------------------------------------------------------------------
  // 6. CAFE MAME (喫茶 TOKYO CAFE / ROASTERY & BEANS)
  // -------------------------------------------------------------------------
  if (storeType === 'cafe') {
    const storeW = 8.2

    // Dark walnut timber cladding with brass accents
    const walnutMat = new THREE.MeshStandardMaterial({ color: 0x2a1a12, roughness: 0.7 })
    const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(storeW + 0.3, floorH, 0.08), walnutMat)
    wallMesh.position.set(0, floorH / 2, -0.02)
    sfGroup.add(wallMesh)

    // Espresso brown canvas awning
    const awningMat = new THREE.MeshStandardMaterial({ color: 0x362013, roughness: 0.85 })
    const awningGeo = new THREE.BoxGeometry(storeW * 0.92, 0.08, 1.15)
    awningGeo.rotateX(0.18)
    const awning = new THREE.Mesh(awningGeo, awningMat)
    awning.position.set(0, 2.45, 0.55)
    sfGroup.add(awning)

    // Display Window (Left Bay)
    const winW = 4.6
    const winH = 2.25
    const winX = -1.4
    const winMat = new THREE.MeshBasicMaterial({
      map: cafeStorefrontTexture(),
      toneMapped: false,
    })
    const winMesh = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winMat)
    winMesh.position.set(winX, 1.25, 0.04)
    sfGroup.add(winMesh)

    // Timber & Glass Cafe Entrance Door (Right Bay)
    const doorW = 2.0
    const doorX = 2.0
    const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.14, 2.25, 0.12), walnutMat)
    dFrame.position.set(doorX, 1.18, 0.02)
    sfGroup.add(dFrame)

    const dGlass = new THREE.Mesh(new THREE.BoxGeometry(doorW * 0.9, 2.15, 0.04), shopGlassMat)
    dGlass.position.set(doorX, 1.18, 0.04)
    sfGroup.add(dGlass)

    // Polished brass push bar on cafe door
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4a853, metalness: 0.85, roughness: 0.25 })
    const pushBar = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.7, 8), brassMat)
    pushBar.rotation.z = Math.PI / 2
    pushBar.position.set(doorX, 1.15, 0.08)
    sfGroup.add(pushBar)

    // Fascia Sign
    const signW = 6.2
    const signH = 0.82
    const signMat = new THREE.MeshBasicMaterial({
      map: cafeSignTexture(),
      toneMapped: false,
    })
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(signW, signH, 0.15), signMat)
    signMesh.position.set(0, 2.76, 0.12)
    sfGroup.add(signMesh)

    // Warm deep amber cafe glow pool
    if (lightManager) {
      const wPos = toWorld(0, 0.5)
      lightManager.register({
        x: wPos.x,
        y: 3.15,
        z: wPos.z,
        color: 0xffaa44,
        intensity: 2.0,
        distance: 7.5,
        decay: 1.2,
        zone: 'Street',
      })
    } else {
      const cafeLight = new THREE.PointLight(0xffaa44, 2.0, 7.5, 1.2)
      cafeLight.position.set(0, 3.15, 0.5)
      sfGroup.add(cafeLight)
    }

    // Sidewalk Chalkboard Easel
    const aFrame = buildStorefrontAFrame('cafe')
    aFrame.position.set(-2.8, 0, 0.85)
    aFrame.rotation.y = 0.15
    sfGroup.add(aFrame)

    // Outdoor wooden bench
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x4a3220, roughness: 0.7 })
    const bench = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.45, 0.42), benchMat)
    bench.position.set(2.8, 0.225, 0.55)
    sfGroup.add(bench)

    // Interactive Trigger
    const interPos = toWorld(doorX, 1.1)
    interactions.add({
      id: 'sf-cafe',
      x: interPos.x,
      z: interPos.z,
      radius: 2.2,
      prompt: 'Read Cafe Chalkboard',
      onInteract: () => {
        if (audio) audio.playDeskBellSound()
        messages.show(
          'Cafe Mame: 『本日のおすすめ：エチオピア・イルガチェフェ G1（浅煎り ¥550）。華やかな香りと柑橘の酸味が楽しめます。テイクアウトも可能です。』',
        )
      },
    })
    return
  }

  // -------------------------------------------------------------------------
  // 7. RESIDENTIAL MANSION ENTRANCES (b-sw-houses, b-fe-south, b-fw-north, etc.)
  // -------------------------------------------------------------------------
  const storeW = Math.min(facadeW * 0.55, 5.8)

  // Polished granite/slate portal
  const portalMat = new THREE.MeshStandardMaterial({ color: 0x1d222a, roughness: 0.35, metalness: 0.2 })
  const portal = new THREE.Mesh(new THREE.BoxGeometry(storeW, floorH, 0.12), portalMat)
  portal.position.set(0, floorH / 2, -0.02)
  sfGroup.add(portal)

  // Double sliding tinted glass security doors
  const doorW = 2.4
  const dFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.16, 2.3, 0.14), mullionMat)
  dFrame.position.set(-0.5, 1.2, 0.02)
  sfGroup.add(dFrame)

  const glassDoorGeo = new THREE.BoxGeometry(doorW * 0.48, 2.18, 0.04)
  const dLeft = new THREE.Mesh(glassDoorGeo, shopGlassMat)
  dLeft.position.set(-0.5 - doorW * 0.24, 1.18, 0.03)
  const dRight = new THREE.Mesh(glassDoorGeo, shopGlassMat)
  dRight.position.set(-0.5 + doorW * 0.24, 1.18, 0.05)
  sfGroup.add(dLeft, dRight)

  // Japanese Auto-lock Intercom Terminal Console (集合玄関機)
  const icMat = new THREE.MeshBasicMaterial({
    map: residentialEntranceTexture(),
    toneMapped: false,
  })
  const icMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.55), icMat)
  icMesh.position.set(1.4, 1.35, 0.05)
  sfGroup.add(icMesh)

  // Stainless Steel Entrance Canopy
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(storeW * 0.85, 0.08, 0.85), metalMat)
  canopy.position.set(0, 2.5, 0.4)
  sfGroup.add(canopy)

  // Recessed warm entry ceiling light
  if (lightManager) {
    const wPos = toWorld(0, 0.4)
    lightManager.register({
      x: wPos.x,
      y: 2.42,
      z: wPos.z,
      color: 0xfff0db,
      intensity: 1.4,
      distance: 5.5,
      decay: 1.2,
      zone: 'Street',
    })
  } else {
    const entryLight = new THREE.PointLight(0xfff0db, 1.4, 5.5, 1.2)
    entryLight.position.set(0, 2.42, 0.4)
    sfGroup.add(entryLight)
  }

  // Stainless umbrella stand
  const umbStand = buildUmbrellaStand()
  umbStand.position.set(-2.0, 0, 0.35)
  sfGroup.add(umbStand)

  // Interactive Trigger
  const interPos = toWorld(1.4, 1.0)
  interactions.add({
    id: `sf-intercom-${spec.id}`,
    x: interPos.x,
    z: interPos.z,
    radius: 2.0,
    prompt: 'Examine Residence Intercom',
    onInteract: () => {
      if (audio) audio.playDeskBellSound()
      messages.show(
        'オートロック操作盤: 『居住者専用エントランスです。訪問先の部屋番号を押して「呼出」を押してください。』',
      )
    },
  })
}

// =========================================================================
// 5. UPPER FLOORS: 3D WINDOWS WITH DEPTH & BALCONIES
// =========================================================================
function addUpperWindowsAndBalconies(
  group: THREE.Group,
  spec: BuildingSpec,
  yOffset: number,
  trimMat: THREE.Material,
  balconyMat: THREE.Material,
): void {
  const floorH = 3.2
  const halfW = spec.w / 2
  const halfD = spec.d / 2

  const warmWindowMat = new THREE.MeshStandardMaterial({
    color: 0xffe29a,
    emissive: 0xffb844,
    emissiveIntensity: 0.85,
    roughness: 0.3,
  })
  const coolWindowMat = new THREE.MeshStandardMaterial({
    color: 0xd4ecff,
    emissive: 0x76b4e8,
    emissiveIntensity: 0.7,
    roughness: 0.3,
  })
  const darkWindowMat = new THREE.MeshStandardMaterial({
    color: 0x181e26,
    roughness: 0.1,
    metalness: 0.7,
  })

  const startFloor = yOffset > 0 ? 1 : 1
  for (let f = startFloor; f < spec.floors; f++) {
    const floorBaseY = f * floorH

    const hasBalcony = spec.balconies.includes(f)
    if (hasBalcony) {
      for (const face of spec.balconyFaces) {
        buildBalconyRow(group, spec, face, floorBaseY, balconyMat)
      }
    }

    const bays = spec.bay
    const baySpacing = (spec.w - 1.6) / bays
    for (let b = 0; b < bays; b++) {
      const bx = -halfW + 0.8 + b * baySpacing + baySpacing / 2
      const seedVal = (spec.seed + f * 17 + b * 31) % 100

      const wMat = seedVal < 55 ? warmWindowMat : seedVal < 80 ? coolWindowMat : darkWindowMat

      if (spec.front === 's') {
        buildWindowUnit(group, spec.x + bx, floorBaseY + 1.45, spec.z - halfD, 1.4, 1.6, 's', wMat, trimMat)
      } else if (spec.front === 'n') {
        buildWindowUnit(group, spec.x + bx, floorBaseY + 1.45, spec.z + halfD, 1.4, 1.6, 'n', wMat, trimMat)
      } else if (spec.front === 'w') {
        const bz = -halfD + 0.8 + b * ((spec.d - 1.6) / bays) + ((spec.d - 1.6) / bays) / 2
        buildWindowUnit(group, spec.x - halfW, floorBaseY + 1.45, spec.z + bz, 1.4, 1.6, 'w', wMat, trimMat)
      } else {
        const bz = -halfD + 0.8 + b * ((spec.d - 1.6) / bays) + ((spec.d - 1.6) / bays) / 2
        buildWindowUnit(group, spec.x + halfW, floorBaseY + 1.45, spec.z + bz, 1.4, 1.6, 'e', wMat, trimMat)
      }
    }
  }
}

function buildWindowUnit(
  group: THREE.Group,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  face: FaceId,
  glassMat: THREE.Material,
  frameMat: THREE.Material,
): void {
  const depth = 0.18
  const frameThick = 0.08

  const frameGeo =
    face === 's' || face === 'n'
      ? new THREE.BoxGeometry(w, h, depth)
      : new THREE.BoxGeometry(depth, h, w)
  const frameMesh = new THREE.Mesh(frameGeo, frameMat)
  frameMesh.position.set(x, y, z)
  group.add(frameMesh)

  const glassGeo =
    face === 's' || face === 'n'
      ? new THREE.BoxGeometry(w - frameThick * 2, h - frameThick * 2, 0.04)
      : new THREE.BoxGeometry(0.04, h - frameThick * 2, w - frameThick * 2)
  const glassMesh = new THREE.Mesh(glassGeo, glassMat)
  const zShift = face === 's' ? -0.02 : face === 'n' ? 0.02 : 0
  const xShift = face === 'w' ? -0.02 : face === 'e' ? 0.02 : 0
  glassMesh.position.set(x + xShift, y, z + zShift)
  group.add(glassMesh)
}

function buildBalconyRow(
  group: THREE.Group,
  spec: BuildingSpec,
  face: FaceId,
  floorBaseY: number,
  balconyMat: THREE.Material,
): void {
  const halfW = spec.w / 2
  const halfD = spec.d / 2
  const balconyDepth = 1.15
  const balconyH = 1.05

  if (face === 's') {
    const slabGeo = new THREE.BoxGeometry(spec.w * 0.85, 0.18, balconyDepth)
    const slab = new THREE.Mesh(slabGeo, balconyMat)
    slab.position.set(spec.x, floorBaseY + 0.09, spec.z - halfD - balconyDepth / 2)
    group.add(slab)

    const railGeo = new THREE.BoxGeometry(spec.w * 0.85, balconyH, 0.06)
    const rail = new THREE.Mesh(railGeo, metalMat)
    rail.position.set(spec.x, floorBaseY + balconyH / 2 + 0.18, spec.z - halfD - balconyDepth)
    group.add(rail)

    buildACUnit(group, spec.x + spec.w * 0.3, floorBaseY + 0.5, spec.z - halfD - balconyDepth * 0.5, 0)
  } else if (face === 'n') {
    const slabGeo = new THREE.BoxGeometry(spec.w * 0.85, 0.18, balconyDepth)
    const slab = new THREE.Mesh(slabGeo, balconyMat)
    slab.position.set(spec.x, floorBaseY + 0.09, spec.z + halfD + balconyDepth / 2)
    group.add(slab)

    const railGeo = new THREE.BoxGeometry(spec.w * 0.85, balconyH, 0.06)
    const rail = new THREE.Mesh(railGeo, metalMat)
    rail.position.set(spec.x, floorBaseY + balconyH / 2 + 0.18, spec.z + halfD + balconyDepth)
    group.add(rail)

    buildACUnit(group, spec.x - spec.w * 0.3, floorBaseY + 0.5, spec.z + halfD + balconyDepth * 0.5, Math.PI)
  } else if (face === 'w') {
    const slabGeo = new THREE.BoxGeometry(balconyDepth, 0.18, spec.d * 0.85)
    const slab = new THREE.Mesh(slabGeo, balconyMat)
    slab.position.set(spec.x - halfW - balconyDepth / 2, floorBaseY + 0.09, spec.z)
    group.add(slab)

    const railGeo = new THREE.BoxGeometry(0.06, balconyH, spec.d * 0.85)
    const rail = new THREE.Mesh(railGeo, metalMat)
    rail.position.set(spec.x - halfW - balconyDepth, floorBaseY + balconyH / 2 + 0.18, spec.z)
    group.add(rail)

    buildACUnit(group, spec.x - halfW - balconyDepth * 0.5, floorBaseY + 0.5, spec.z + spec.d * 0.3, -Math.PI / 2)
  }
}

// =========================================================================
// 6. EXTERNAL AC COMPRESSOR UNITS & DOWNSPOUT PIPES
// =========================================================================
function buildACUnit(group: THREE.Group, x: number, y: number, z: number, rotY: number): void {
  const acGroup = new THREE.Group()
  const bodyGeo = new THREE.BoxGeometry(0.72, 0.52, 0.32)
  const body = new THREE.Mesh(bodyGeo, acMat)
  acGroup.add(body)

  const grillGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.02, 16)
  grillGeo.rotateX(Math.PI / 2)
  const grillMat = new THREE.MeshBasicMaterial({ color: 0x444444 })
  const grill = new THREE.Mesh(grillGeo, grillMat)
  grill.position.set(0.12, 0, 0.165)
  acGroup.add(grill)

  acGroup.position.set(x, y, z)
  acGroup.rotateY(rotY)
  group.add(acGroup)
}

function buildDownspoutsAndPipes(group: THREE.Group, spec: BuildingSpec, totalH: number): void {
  const halfW = spec.w / 2
  const halfD = spec.d / 2
  const pipeGeo = new THREE.CylinderGeometry(0.06, 0.06, totalH, 8)

  const pipe = new THREE.Mesh(pipeGeo, postMat)
  pipe.position.set(spec.x - halfW + 0.2, totalH / 2, spec.z - halfD - 0.08)
  group.add(pipe)
}

// =========================================================================
// 7. ROOFTOP DETAILS
// =========================================================================
function buildRoofEquipment(
  group: THREE.Group,
  spec: BuildingSpec,
  totalH: number,
  trimMat: THREE.Material,
): void {
  const halfW = spec.w / 2
  const halfD = spec.d / 2
  const parapetH = 0.9

  const pNorth = new THREE.Mesh(new THREE.BoxGeometry(spec.w, parapetH, 0.3), trimMat)
  pNorth.position.set(spec.x, totalH + parapetH / 2, spec.z + halfD - 0.15)
  const pSouth = new THREE.Mesh(new THREE.BoxGeometry(spec.w, parapetH, 0.3), trimMat)
  pSouth.position.set(spec.x, totalH + parapetH / 2, spec.z - halfD + 0.15)
  const pWest = new THREE.Mesh(new THREE.BoxGeometry(0.3, parapetH, spec.d), trimMat)
  pWest.position.set(spec.x - halfW + 0.15, totalH + parapetH / 2, spec.z)
  const pEast = new THREE.Mesh(new THREE.BoxGeometry(0.3, parapetH, spec.d), trimMat)
  pEast.position.set(spec.x + halfW - 0.15, totalH + parapetH / 2, spec.z)
  group.add(pNorth, pSouth, pWest, pEast)

  const pentGeo = new THREE.BoxGeometry(3.2, 2.4, 3.2)
  const pentMesh = new THREE.Mesh(pentGeo, trimMat)
  pentMesh.position.set(spec.x, totalH + 1.2, spec.z)
  group.add(pentMesh)

  if (spec.floors >= 4) {
    const tankGroup = new THREE.Group()
    const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 6)
    for (const lx of [-0.6, 0.6]) {
      for (const lz of [-0.6, 0.6]) {
        const leg = new THREE.Mesh(legGeo, metalMat)
        leg.position.set(lx, 0.6, lz)
        tankGroup.add(leg)
      }
    }
    const tankBodyGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.6, 16)
    const tankBodyMat = new THREE.MeshStandardMaterial({ color: 0x98b8c8, roughness: 0.3, metalness: 0.4 })
    const tankBody = new THREE.Mesh(tankBodyGeo, tankBodyMat)
    tankBody.position.set(0, 1.8, 0)
    tankGroup.add(tankBody)

    tankGroup.position.set(spec.x + halfW * 0.5, totalH, spec.z + halfD * 0.4)
    group.add(tankGroup)
  }

  const mastGeo = new THREE.CylinderGeometry(0.03, 0.04, 3.6, 6)
  const mast = new THREE.Mesh(mastGeo, metalMat)
  mast.position.set(spec.x - halfW * 0.4, totalH + 1.8, spec.z - halfD * 0.4)
  group.add(mast)
}

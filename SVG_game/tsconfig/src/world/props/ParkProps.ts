import * as THREE from 'three'
import { CollisionWorld } from '../../game/Collision'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import type { Player } from '../../game/Player'
import { Settings } from '../../game/Settings'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import { buildVendingMachine, buildRecycleCanReceptacle } from './VendingMachines'
import { buildBicycle } from './StreetInfrastructure' 
import {
  lampMat,
  barkMat,
  sakuraMat,
  leavesMat,
  metalMat,
  parkNameplateTexture,
  parkRulesBoardTexture,
  parkNoticeBoardTexture,
  parkClockTexture,
  parkToiletSignTexture,
  hedgeMat,
  pineLeavesMat,
  flowerMatPink,
  flowerMatWhite,
  flowerMatPurple,
  swingTealMat,
  swingYellowMat,
  swingRedMat,
  rubberSeatMat,
  slideChuteMat,
  sandboxWoodMat,
  sandMat,
  springMat,
  shopGlassMat,
} from '../Materials'

export function buildParkProps(
  group: THREE.Group,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
  streetLights?: THREE.PointLight[],
  lightManager?: LightManager,
): { update: (dt: number) => void } {
  const animators: ((dt: number) => void)[] = []

  // 1. PARK ENTRANCES & PERIMETER ENCLOSURE
  buildParkEntranceGateposts(group, colliders, interactions, messages)
  buildParkPerimeterEnclosure(group, colliders)

  // 2. PARK LIGHTING (ATMOSPHERIC GLOBE LAMPS & KASUGA LANTERN)
  buildParkGlobeLamp(group, 1.8, -18.5, streetLights ?? [], lightManager)
  buildParkGlobeLamp(group, -0.5, -31.0, streetLights ?? [], lightManager)
  const lanternRes = buildStoneLantern(-2.5, -17.5, lightManager)
  group.add(lanternRes.group)
  animators.push(lanternRes.update)
  colliders.add({ minX: -2.9, minY: 0, minZ: -17.9, maxX: -2.1, maxY: 2.2, maxZ: -17.1 })

  // 3. PARK SIGNAGE & CLOCK TOWER
  buildParkRulesSign(group, 2.8, -8.5, colliders, interactions, messages)
  buildCommunityNoticeBoard(group, -2.8, -8.5, colliders, interactions, messages)
  buildParkClockTower(group, 3.6, -10.2, colliders)

  // 4. RESTROOM PAVILION & AMENITIES
  buildParkRestroom(group, 6.2, -32.5, colliders)
  buildParkWasteBin(group, 3.6, -26.0, colliders)

  // Park Vending Machine & Can/Bottle Recycling Receptacle (North-West corner)
  const parkVm = buildVendingMachine(-7.5, -9.2, -Math.PI / 2, 1, 'cold Pocari Sweat & Calpis Soda [¥160]', interactions, messages, colliders, lightManager)
  group.add(parkVm)
  group.add(buildRecycleCanReceptacle(-7.5, -10.4, interactions, messages, audio))

  // Parked Mamachari bicycle by entrance
  const parkBike = buildBicycle(-5.8, -8.8, 0.25, 0x1d4d38, 'bike-park-entrance', interactions, messages, audio)
  group.add(parkBike)
  colliders.add({ minX: -6.5, minY: 0, minZ: -9.2, maxX: -5.1, maxY: 1.2, maxZ: -8.4 })

  // 5. REST & SOCIAL FURNITURE
  // Wooden Pergola with Ivy Trellis and Sheltered Bench
  buildWoodenPergola(group, -0.5, -23.8, colliders, interactions, messages, player)

  // Park Bench under Grand Sakura
  const bench1 = buildBench(3.4, -18.2, -Math.PI / 2)
  group.add(bench1)
  colliders.add({ minX: 3.0, minY: 0, minZ: -19.2, maxX: 3.8, maxY: 1.2, maxZ: -17.2 })
  interactions.add({
    id: 'bench-sakura',
    x: 2.6,
    z: -18.2,
    radius: 1.8,
    prompt: () => (player.seated ? 'Stand up from Bench' : 'Sit on Sakura Bench'),
    onInteract: () => {
      player.seated = !player.seated
      if (player.seated) {
        messages.show('You sit beneath the grand sakura tree. Pink petals drift down gently in the quiet midnight breeze.')
      } else {
        messages.show('You stand back up, refreshed.')
      }
    },
  })

  // Park Bench facing Playground
  const bench2 = buildBench(3.5, -28.5, -Math.PI / 2)
  group.add(bench2)
  colliders.add({ minX: 3.1, minY: 0, minZ: -29.5, maxX: 3.9, maxY: 1.2, maxZ: -27.5 })
  interactions.add({
    id: 'bench-playground',
    x: 2.7,
    z: -28.5,
    radius: 1.8,
    prompt: () => (player.seated ? 'Stand up from Bench' : 'Sit on Park Bench'),
    onInteract: () => {
      player.seated = !player.seated
      if (player.seated) {
        messages.show('You sit down facing the playground. The quiet night air of Tokyo surrounds you.')
      } else {
        messages.show('You stand back up.')
      }
    },
  })

  // Picnic / Shogi Stone Table & Stools
  buildPicnicTableAndStools(group, 2.4, -22.5, colliders)

  // Japanese 2-Level Drinking Fountain
  buildDrinkingFountain(group, -2.2, -20.5, colliders, interactions, messages, audio)

  // 6. PLAYGROUND EQUIPMENT
  const swingRes = buildSwingSet(group, -3.8, -27.5, colliders, interactions, messages, player, audio)
  animators.push(swingRes.update)

  const rockerRes = buildSpringRocker(group, -1.5, -29.2, colliders, interactions, messages, audio)
  animators.push(rockerRes.update)

  buildPlaygroundSlide(group, -4.8, -33.6, Math.PI, colliders, interactions, messages, audio)
  buildSandbox(group, -2.5, -33.5, colliders)

  // 7. NATURE, MATURE TREES & FLOWER BEDS
  // Grand blooming Sakura tree
  const grandSakura = buildSakuraTree(5.2, -15.5, 1.25)
  group.add(grandSakura)
  colliders.add({ minX: 4.6, minY: 0, minZ: -16.1, maxX: 5.8, maxY: 6.5, maxZ: -14.9 })

  // Micro-decorative details group (culled beyond 42m from park center)
  const detailGroup = new THREE.Group()
  group.add(detailGroup)

  const petalRes = buildSakuraPetals(5.2, -15.5)
  detailGroup.add(petalRes.group)

  // Young Sakura tree
  const youngSakura = buildSakuraTree(-2.8, -12.5, 0.85)
  group.add(youngSakura)
  colliders.add({ minX: -3.3, minY: 0, minZ: -13.0, maxX: -2.3, maxY: 5.5, maxZ: -12.0 })

  // Japanese Black Pine (黒松)
  const pine = buildJapaneseBlackPine(-5.0, -14.0)
  group.add(pine)
  colliders.add({ minX: -5.5, minY: 0, minZ: -14.5, maxX: -4.5, maxY: 5.5, maxZ: -13.5 })

  // Japanese Summer Maple (イロハモミジ)
  const maple1 = buildGreenTree(-5.5, -17.5, 1.0)
  group.add(maple1)
  colliders.add({ minX: -6.0, minY: 0, minZ: -18.0, maxX: -5.0, maxY: 5.5, maxZ: -17.0 })

  const maple2 = buildGreenTree(-6.8, -34.8, 1.05)
  group.add(maple2)
  colliders.add({ minX: -7.3, minY: 0, minZ: -35.3, maxX: -6.3, maxY: 5.5, maxZ: -34.3 })

  // Cypress / Cedar background trees behind restroom
  for (const pos of [{ x: 8.5, z: -28.0 }, { x: 8.5, z: -31.5 }, { x: 8.5, z: -35.0 }]) {
    const cedar = buildCypressTree(pos.x, pos.z)
    group.add(cedar)
    colliders.add({ minX: pos.x - 0.4, minY: 0, minZ: pos.z - 0.4, maxX: pos.x + 0.4, maxY: 6, maxZ: pos.z + 0.4 })
  }

  // Raised stone flower beds
  buildFlowerBed(group, 7.6, -14.0, 1.4, 3.2, 'azalea', colliders)
  buildFlowerBed(group, -7.2, -13.5, 1.4, 2.6, 'hydrangea', colliders)

  // Ground Petal Decal Clusters
  buildGroundPetalDecals(detailGroup, 5.2, -15.5, 3.2, 40)
  buildGroundPetalDecals(detailGroup, -2.8, -12.5, 2.2, 20)

  let detailTimer = 0
  let isParkNearby = true

  return {
    update(dt: number) {
      if (Settings.isHigh()) {
        detailGroup.visible = true
        petalRes.update(dt)
      } else {
        detailTimer += dt
        if (detailTimer > 0.1) {
          detailTimer = 0
          const distSq = (player.x - 0) * (player.x - 0) + (player.z - (-22.5)) * (player.z - (-22.5))
          isParkNearby = distSq < 1764 // 42m
          detailGroup.visible = isParkNearby
        }
        if (isParkNearby) {
          petalRes.update(dt)
        }
      }
      for (const a of animators) a(dt)
    },
  }
}

// -------------------------------------------------------------------------
// ENTRANCE GATEPOSTS & PERIMETER ENCLOSURE
// -------------------------------------------------------------------------
function buildParkEntranceGateposts(
  group: THREE.Group,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
): void {
  const graniteMat = new THREE.MeshStandardMaterial({ color: 0x484f58, roughness: 0.85, metalness: 0.05 })
  const capMat = new THREE.MeshStandardMaterial({ color: 0x363c44, roughness: 0.8 })

  // North Entrance: Left Post (X: -2.2, Z: -7.6)
  const p1 = new THREE.Group()
  p1.position.set(-2.2, 0.15, -7.6)
  const col1 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.25, 0.55), graniteMat)
  col1.position.set(0, 0.625, 0)
  col1.castShadow = true
  const cap1 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.1, 0.65), capMat)
  cap1.position.set(0, 1.3, 0)
  p1.add(col1, cap1)
  group.add(p1)
  colliders.add({ minX: -2.5, minY: 0, minZ: -7.9, maxX: -1.9, maxY: 1.5, maxZ: -7.3 })

  // North Entrance: Right Post with Nameplate (X: 2.2, Z: -7.6)
  const p2 = new THREE.Group()
  p2.position.set(2.2, 0.15, -7.6)
  const col2 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.25, 0.55), graniteMat)
  col2.position.set(0, 0.625, 0)
  col2.castShadow = true
  const cap2 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.1, 0.65), capMat)
  cap2.position.set(0, 1.3, 0)
  p2.add(col2, cap2)

  // Inscribed Bronze Nameplate on front face
  const plateMat = new THREE.MeshBasicMaterial({ map: parkNameplateTexture() })
  const plateGeo = new THREE.PlaneGeometry(0.42, 0.22)
  const plateMesh = new THREE.Mesh(plateGeo, plateMat)
  plateMesh.position.set(0, 0.85, 0.28)
  p2.add(plateMesh)
  group.add(p2)
  colliders.add({ minX: 1.9, minY: 0, minZ: -7.9, maxX: 2.5, maxY: 1.5, maxZ: -7.3 })

  interactions.add({
    id: 'park-nameplate',
    x: 2.2,
    z: -7.0,
    radius: 1.6,
    prompt: 'Read Park Plaque',
    onInteract: () => {
      messages.show('Bronze Park Plaque: "Sakura-cho Children\'s Park (桜町児童遊園) — Minato Ward, Tokyo".')
    },
  })

  // Low Yellow/Black Anti-Vehicle Bollards (車止めポール)
  const bollardMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.7 })
  const yStripeMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.4 })

  const bollardSpots = [
    { x: -0.75, z: -7.6 },
    { x: 0.75, z: -7.6 },
    { x: -8.5, z: -22.6 },
    { x: -8.5, z: -21.4 },
  ]
  for (const bs of bollardSpots) {
    const bGroup = new THREE.Group()
    bGroup.position.set(bs.x, 0.15, bs.z)

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.8, 12), bollardMat)
    pole.position.set(0, 0.4, 0)
    pole.castShadow = true
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), bollardMat)
    cap.position.set(0, 0.8, 0)

    // Reflective yellow band
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.16, 12), yStripeMat)
    stripe.position.set(0, 0.58, 0)

    bGroup.add(pole, cap, stripe)
    group.add(bGroup)
    colliders.add({ minX: bs.x - 0.12, minY: 0, minZ: bs.z - 0.12, maxX: bs.x + 0.12, maxY: 0.9, maxZ: bs.z + 0.12 })
  }
}

function buildParkPerimeterEnclosure(group: THREE.Group, colliders: CollisionWorld): void {
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x3e444c, roughness: 0.9 })
  const railMat = new THREE.MeshStandardMaterial({ color: 0x1b2820, roughness: 0.4, metalness: 0.7 })

  // Perimeter wall segments:
  // North Left: X [-8.5, -2.5], Z = -7.6
  // North Right: X [2.5, 9.5], Z = -7.6
  // West North: Z [-7.6, -20.6], X = -8.5
  // West South: Z [-23.4, -36.5], X = -8.5
  // South Wall: X [-8.5, 9.5], Z = -36.5
  // East Wall: Z [-7.6, -36.5], X = 9.5
  const wallSegments = [
    { x1: -8.5, z1: -7.6, x2: -2.5, z2: -7.6, w: 6.0, d: 0.35, cx: -5.5, cz: -7.6 },
    { x1: 2.5, z1: -7.6, x2: 9.5, z2: -7.6, w: 7.0, d: 0.35, cx: 6.0, cz: -7.6 },
    { x1: -8.5, z1: -20.6, x2: -8.5, z2: -7.6, w: 0.35, d: 13.0, cx: -8.5, cz: -14.1 },
    { x1: -8.5, z1: -36.5, x2: -8.5, z2: -23.4, w: 0.35, d: 13.1, cx: -8.5, cz: -29.95 },
    { x1: -8.5, z1: -36.5, x2: 9.5, z2: -36.5, w: 18.0, d: 0.35, cx: 0.5, cz: -36.5 },
    { x1: 9.5, z1: -36.5, x2: 9.5, z2: -7.6, w: 0.35, d: 28.9, cx: 9.5, cz: -22.05 },
  ]

  for (const ws of wallSegments) {
    // 1. Concrete base curb (height 0.35m)
    const curbGeo = new THREE.BoxGeometry(ws.w, 0.35, ws.d)
    const curb = new THREE.Mesh(curbGeo, wallMat)
    curb.position.set(ws.cx, 0.15 + 0.175, ws.cz)
    curb.castShadow = true
    group.add(curb)

    // 2. Dark green steel safety fence top rail (height 0.75m)
    const fenceH = 0.75
    const isEW = ws.w > ws.d
    const topRailGeo = new THREE.BoxGeometry(ws.w, 0.05, ws.d)
    const topRail = new THREE.Mesh(topRailGeo, railMat)
    topRail.position.set(ws.cx, 0.15 + 0.35 + fenceH, ws.cz)
    group.add(topRail)

    // Vertical pickets
    const length = isEW ? ws.w : ws.d
    const count = Math.floor(length / 0.45)
    for (let i = 0; i <= count; i++) {
      const frac = count > 0 ? (i / count) - 0.5 : 0
      const px = isEW ? ws.cx + frac * length : ws.cx
      const pz = isEW ? ws.cz : ws.cz + frac * length
      const postMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, fenceH, 6), railMat)
      postMesh.position.set(px, 0.15 + 0.35 + fenceH / 2, pz)
      group.add(postMesh)
    }

    // 3. Dense trimmed box hedge along the inside
    const hedgeOffset = isEW ? (ws.cz < -20 ? 0.35 : -0.35) : (ws.cx > 0 ? -0.35 : 0.35)
    const hedgeW = isEW ? ws.w - 0.2 : 0.5
    const hedgeD = isEW ? 0.5 : ws.d - 0.2
    const hedgeGeo = new THREE.BoxGeometry(hedgeW, 0.95, hedgeD)
    const hedgeMesh = new THREE.Mesh(hedgeGeo, hedgeMat)
    hedgeMesh.position.set(
      isEW ? ws.cx : ws.cx + hedgeOffset,
      0.15 + 0.475,
      isEW ? ws.cz + hedgeOffset : ws.cz,
    )
    hedgeMesh.castShadow = true
    group.add(hedgeMesh)

    // Collider for this perimeter wall segment
    colliders.add({
      minX: ws.cx - ws.w / 2 - 0.1,
      minY: 0,
      minZ: ws.cz - ws.d / 2 - 0.1,
      maxX: ws.cx + ws.w / 2 + 0.1,
      maxY: 1.5,
      maxZ: ws.cz + ws.d / 2 + 0.1,
    })
  }
}

// -------------------------------------------------------------------------
// PARK ATMOSPHERIC LIGHTING
// -------------------------------------------------------------------------
function buildParkGlobeLamp(
  group: THREE.Group,
  x: number,
  z: number,
  streetLights: THREE.PointLight[],
  lightManager?: LightManager,
): void {
  const lamp = new THREE.Group()
  lamp.position.set(x, 0.15, z)

  const postGeo = new THREE.CylinderGeometry(0.08, 0.12, 3.6, 12)
  const lampPostMat = new THREE.MeshStandardMaterial({ color: 0x1b2d22, roughness: 0.5, metalness: 0.6 })
  const post = new THREE.Mesh(postGeo, lampPostMat)
  post.position.set(0, 1.8, 0)
  post.castShadow = true
  lamp.add(post)

  // Decorative base collar
  const baseCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.4, 12), lampPostMat)
  baseCollar.position.set(0, 0.2, 0)
  lamp.add(baseCollar)

  // Top globe fitter cup
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.07, 0.15, 12), lampPostMat)
  cup.position.set(0, 3.65, 0)
  lamp.add(cup)

  // Milky spherical glass globe
  const globeGeo = new THREE.SphereGeometry(0.24, 16, 16)
  const globe = new THREE.Mesh(globeGeo, lampMat)
  globe.position.set(0, 3.85, 0)
  lamp.add(globe)

  // Soft warm welcoming PointLight
  if (lightManager) {
    lightManager.register({
      x,
      y: 4.0,
      z,
      color: 0xffecc2,
      intensity: 1.6,
      distance: 13,
      decay: 1.2,
      zone: 'Park',
    })
  } else {
    const light = new THREE.PointLight(0xffecc2, 1.6, 13)
    light.position.set(0, 3.85, 0)
    lamp.add(light)
    streetLights.push(light)
  }

  group.add(lamp)
}

function buildStoneLantern(
  x: number,
  z: number,
  lightManager?: LightManager,
): { group: THREE.Group; update: (dt: number) => void } {
  const lantern = new THREE.Group()
  lantern.position.set(x, 0.15, z)

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x5a6068, roughness: 0.9 })

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.35, 6), stoneMat)
  base.position.set(0, 0.175, 0)
  base.castShadow = true
  lantern.add(base)

  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.8, 6), stoneMat)
  post.position.set(0, 0.75, 0)
  lantern.add(post)

  const chamber = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.45, 0.55), stoneMat)
  chamber.position.set(0, 1.35, 0)
  lantern.add(chamber)

  let candleIntensity = 1.3
  let directLight: THREE.PointLight | null = null

  if (lightManager) {
    lightManager.register({
      x,
      y: 1.5,
      z,
      color: 0xffa844,
      intensity: 1.4,
      distance: 6,
      decay: 1.2,
      zone: 'Park',
      dynamicIntensity: () => candleIntensity,
    })
  } else {
    directLight = new THREE.PointLight(0xffa844, 1.4, 6)
    directLight.position.set(0, 1.35, 0)
    lantern.add(directLight)
  }

  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.35, 6), stoneMat)
  roof.position.set(0, 1.75, 0)
  lantern.add(roof)

  let time = 0
  const update = (dt: number): void => {
    time += dt
    candleIntensity = 1.3 + Math.sin(time * 8.5) * 0.15 + (Math.random() - 0.5) * 0.08
    if (directLight) {
      directLight.intensity = candleIntensity
    }
  }

  return { group: lantern, update }
}

// -------------------------------------------------------------------------
// SIGNAGE, BULLETIN BOARD, CLOCK TOWER
// -------------------------------------------------------------------------
function buildParkRulesSign(
  group: THREE.Group,
  x: number,
  z: number,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
): void {
  const sign = new THREE.Group()
  sign.position.set(x, 0.15, z)

  // Dual metal support poles
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x485058, roughness: 0.4, metalness: 0.7 })
  const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 8), poleMat)
  p1.position.set(-0.55, 0.8, 0)
  const p2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 8), poleMat)
  p2.position.set(0.55, 0.8, 0)
  sign.add(p1, p2)

  // Double-sided rules board
  const boardMat = new THREE.MeshBasicMaterial({ map: parkRulesBoardTexture() })
  const boardGeo = new THREE.PlaneGeometry(1.35, 0.85)
  const boardFront = new THREE.Mesh(boardGeo, boardMat)
  boardFront.position.set(0, 1.1, 0.015)
  const boardBack = new THREE.Mesh(boardGeo, boardMat)
  boardBack.position.set(0, 1.1, -0.015)
  boardBack.rotateY(Math.PI)

  const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 0.025), poleMat)
  frameMesh.position.set(0, 1.1, 0)

  sign.add(p1, p2, frameMesh, boardFront, boardBack)
  group.add(sign)

  colliders.add({ minX: x - 0.75, minY: 0, minZ: z - 0.15, maxX: x + 0.75, maxY: 1.6, maxZ: z + 0.15 })

  interactions.add({
    id: 'park-rules-sign',
    x,
    z: z + 0.6,
    radius: 1.8,
    prompt: 'Read Park Regulations',
    onInteract: () => {
      messages.show('Park Rules: Please take your litter home, no fireworks or open flames, keep dogs on leash, and keep noise down at night.')
    },
  })
}

function buildCommunityNoticeBoard(
  group: THREE.Group,
  x: number,
  z: number,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
): void {
  const nb = new THREE.Group()
  nb.position.set(x, 0.15, z)

  const woodFrameMat = new THREE.MeshStandardMaterial({ color: 0x3d2918, roughness: 0.85 })
  const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.7, 0.08), woodFrameMat)
  p1.position.set(-0.75, 0.85, 0)
  const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.7, 0.08), woodFrameMat)
  p2.position.set(0.75, 0.85, 0)

  const boardMat = new THREE.MeshBasicMaterial({ map: parkNoticeBoardTexture() })
  const boardMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.9), boardMat)
  boardMesh.position.set(0, 1.25, 0.02)

  const glassMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.9), shopGlassMat)
  glassMesh.position.set(0, 1.25, 0.035)

  const backMesh = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.96, 0.05), woodFrameMat)
  backMesh.position.set(0, 1.25, -0.01)

  // Slanted little rain roof
  const roofMesh = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.04, 0.25), woodFrameMat)
  roofMesh.position.set(0, 1.75, 0.05)
  roofMesh.rotateX(0.2)

  nb.add(p1, p2, backMesh, boardMesh, glassMesh, roofMesh)
  group.add(nb)

  colliders.add({ minX: x - 0.85, minY: 0, minZ: z - 0.2, maxX: x + 0.85, maxY: 1.8, maxZ: z + 0.2 })

  interactions.add({
    id: 'community-board',
    x,
    z: z + 0.7,
    radius: 1.8,
    prompt: 'Read Community Bulletin',
    onInteract: () => {
      messages.show('Sakura-cho Bulletin: Spring night festival next week, disaster evacuation meeting point, and a lost calico cat flyer: "Answers to Mike, wearing a red bell collar"!')
    },
  })
}

function buildParkClockTower(group: THREE.Group, x: number, z: number, colliders: CollisionWorld): void {
  const clock = new THREE.Group()
  clock.position.set(x, 0.15, z)

  const poleMat = new THREE.MeshStandardMaterial({ color: 0x1f3427, roughness: 0.5, metalness: 0.5 })

  // Tapered base and column
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 0.6, 8), poleMat)
  base.position.set(0, 0.3, 0)
  base.castShadow = true
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.4, 8), poleMat)
  pillar.position.set(0, 2.0, 0)
  pillar.castShadow = true

  // Clock head housing (cylindrical drum)
  const drumGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.24, 24)
  drumGeo.rotateX(Math.PI / 2)
  const drum = new THREE.Mesh(drumGeo, poleMat)
  drum.position.set(0, 3.8, 0)

  // Dual clock faces (North and South)
  const faceMat = new THREE.MeshBasicMaterial({ map: parkClockTexture(), toneMapped: false })
  const faceGeo = new THREE.CircleGeometry(0.42, 24)
  const faceNorth = new THREE.Mesh(faceGeo, faceMat)
  faceNorth.position.set(0, 3.8, 0.125)
  const faceSouth = new THREE.Mesh(faceGeo, faceMat)
  faceSouth.position.set(0, 3.8, -0.125)
  faceSouth.rotateY(Math.PI)

  // Decorative spire on top
  const spire = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.45, 8), poleMat)
  spire.position.set(0, 4.45, 0)

  clock.add(base, pillar, drum, faceNorth, faceSouth, spire)
  group.add(clock)

  colliders.add({ minX: x - 0.35, minY: 0, minZ: z - 0.35, maxX: x + 0.35, maxY: 4.5, maxZ: z + 0.35 })
}

// -------------------------------------------------------------------------
// RESTROOM PAVILION & PARK WASTE RECEPTACLES
// -------------------------------------------------------------------------
function buildParkRestroom(group: THREE.Group, x: number, z: number, colliders: CollisionWorld): void {
  const rest = new THREE.Group()
  rest.position.set(x, 0.15, z)

  const tileWallMat = new THREE.MeshStandardMaterial({ color: 0xdfded8, roughness: 0.65, metalness: 0.05 })
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x282c32, roughness: 0.7, metalness: 0.3 })
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x7a838d, roughness: 0.3, metalness: 0.7 })

  // Main Pavilion Block (W: 4.2m, H: 2.7m, D: 3.2m)
  const body = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.7, 3.2), tileWallMat)
  body.position.set(0, 1.35, 0)
  body.castShadow = true
  rest.add(body)

  // Flat roof with dark overhanging fascia
  const roof = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.18, 3.6), roofMat)
  roof.position.set(0, 2.75, 0)
  rest.add(roof)

  // Recessed doors (Left Gents, Right Ladies)
  const d1 = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.05, 0.04), doorMat)
  d1.position.set(-1.1, 1.025, 1.62)
  const d2 = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.05, 0.04), doorMat)
  d2.position.set(1.1, 1.025, 1.62)
  rest.add(d1, d2)

  // Frosted high clerestory transom window strip with warm amber glow
  const windowGlowMat = new THREE.MeshBasicMaterial({ color: 0xffe2a4, toneMapped: false })
  const win = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.32), windowGlowMat)
  win.position.set(0, 2.35, 1.62)
  rest.add(win)

  // Pictogram Restroom Signage Plaque above doors
  const signMat = new THREE.MeshBasicMaterial({ map: parkToiletSignTexture() })
  const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.36), signMat)
  signMesh.position.set(0, 1.9, 1.62)
  rest.add(signMesh)

  // Privacy screen partition wall in front of entry
  const screenMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 0.12), tileWallMat)
  screenMesh.position.set(0, 0.9, 2.35)
  rest.add(screenMesh)

  group.add(rest)

  // Restroom colliders (main building and privacy screen)
  colliders.add({ minX: x - 2.2, minY: 0, minZ: z - 1.7, maxX: x + 2.2, maxY: 3.0, maxZ: z + 1.7 })
  colliders.add({ minX: x - 1.3, minY: 0, minZ: z + 2.2, maxX: x + 1.3, maxY: 2.0, maxZ: z + 2.5 })
}

function buildParkWasteBin(group: THREE.Group, x: number, z: number, colliders: CollisionWorld): void {
  const bin = new THREE.Group()
  bin.position.set(x, 0.15, z)

  const greenWireMat = new THREE.MeshStandardMaterial({ color: 0x1e4620, roughness: 0.5, metalness: 0.5 })
  const binMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.72, 16), greenWireMat)
  binMesh.position.set(0, 0.36, 0)
  binMesh.castShadow = true

  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.02, 8, 16), greenWireMat)
  rim.position.set(0, 0.72, 0)
  rim.rotateX(Math.PI / 2)

  bin.add(binMesh, rim)
  group.add(bin)

  colliders.add({ minX: x - 0.3, minY: 0, minZ: z - 0.3, maxX: x + 0.3, maxY: 0.8, maxZ: z + 0.3 })
}

// -------------------------------------------------------------------------
// REST & FURNITURE (PERGOLA, BENCHES, FOUNTAIN, PICNIC TABLE)
// -------------------------------------------------------------------------
function buildWoodenPergola(
  group: THREE.Group,
  x: number,
  z: number,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
): void {
  const pergola = new THREE.Group()
  pergola.position.set(x, 0.15, z)

  const timberMat = new THREE.MeshStandardMaterial({ color: 0x4a321e, roughness: 0.88, metalness: 0.02 })

  // 4 Square Timber Corner Posts (W: 3.6m, D: 2.4m, H: 2.6m)
  const postGeo = new THREE.BoxGeometry(0.16, 2.6, 0.16)
  const halfW = 1.6
  const halfD = 1.0
  const postCoords = [
    { px: -halfW, pz: -halfD },
    { px: halfW, pz: -halfD },
    { px: -halfW, pz: halfD },
    { px: halfW, pz: halfD },
  ]
  for (const pc of postCoords) {
    const pMesh = new THREE.Mesh(postGeo, timberMat)
    pMesh.position.set(pc.px, 1.3, pc.pz)
    pMesh.castShadow = true
    pergola.add(pMesh)
  }

  // Longitudinal overhead beams
  const beamGeo = new THREE.BoxGeometry(3.6, 0.18, 0.1)
  const b1 = new THREE.Mesh(beamGeo, timberMat)
  b1.position.set(0, 2.65, -halfD)
  const b2 = new THREE.Mesh(beamGeo, timberMat)
  b2.position.set(0, 2.65, halfD)
  pergola.add(b1, b2)

  // Transverse roof trellis rafters
  const rafterGeo = new THREE.BoxGeometry(0.08, 0.14, 2.4)
  for (let rx = -halfW + 0.3; rx <= halfW - 0.3; rx += 0.5) {
    const raf = new THREE.Mesh(rafterGeo, timberMat)
    raf.position.set(rx, 2.78, 0)
    pergola.add(raf)
  }

  // Climbing Ivy / Wisteria Vines on Trellis
  const vineGeo = new THREE.DodecahedronGeometry(0.42, 1)
  for (let vx = -halfW; vx <= halfW; vx += 0.8) {
    const vMesh = new THREE.Mesh(vineGeo, leavesMat)
    vMesh.position.set(vx + (Math.random() - 0.5) * 0.3, 2.9, (Math.random() - 0.5) * 1.4)
    vMesh.scale.set(1.4, 0.6, 1.2)
    pergola.add(vMesh)
  }

  // Built-in Wooden Bench under the Pergola
  const bench = buildBench(0, 0, 0)
  pergola.add(bench)
  group.add(pergola)

  // Colliders for pergola posts and bench
  colliders.add({ minX: x - halfW - 0.15, minY: 0, minZ: z - halfD - 0.15, maxX: x - halfW + 0.15, maxY: 2.6, maxZ: z - halfD + 0.15 })
  colliders.add({ minX: x + halfW - 0.15, minY: 0, minZ: z - halfD - 0.15, maxX: x + halfW + 0.15, maxY: 2.6, maxZ: z - halfD + 0.15 })
  colliders.add({ minX: x - halfW - 0.15, minY: 0, minZ: z + halfD - 0.15, maxX: x - halfW + 0.15, maxY: 2.6, maxZ: z + halfD + 0.15 })
  colliders.add({ minX: x + halfW - 0.15, minY: 0, minZ: z + halfD - 0.15, maxX: x + halfW + 0.15, maxY: 2.6, maxZ: z + halfD + 0.15 })
  colliders.add({ minX: x - 1.1, minY: 0, minZ: z - 0.6, maxX: x + 1.1, maxY: 1.2, maxZ: z + 0.6 })

  interactions.add({
    id: 'bench-pergola',
    x,
    z: z + 0.8,
    radius: 1.8,
    prompt: () => (player.seated ? 'Stand up from Pergola' : 'Sit under Pergola'),
    onInteract: () => {
      player.seated = !player.seated
      if (player.seated) {
        messages.show('You sit under the wisteria pergola. The climbing foliage filters the gentle streetlights above.')
      } else {
        messages.show('You stand back up.')
      }
    },
  })
}

function buildBench(x: number, z: number, rotY: number): THREE.Group {
  const bench = new THREE.Group()
  bench.position.set(x, 0.15, z)
  bench.rotateY(rotY)

  // Slatted wooden seat
  const seatGeo = new THREE.BoxGeometry(1.8, 0.08, 0.55)
  const seat = new THREE.Mesh(seatGeo, barkMat)
  seat.position.set(0, 0.44, 0)
  seat.castShadow = true
  bench.add(seat)

  // Slatted wooden backrest
  const backGeo = new THREE.BoxGeometry(1.8, 0.45, 0.08)
  const back = new THREE.Mesh(backGeo, barkMat)
  back.position.set(0, 0.78, -0.24)
  bench.add(back)

  // Cast iron curved legs
  const legGeo = new THREE.BoxGeometry(0.08, 0.45, 0.5)
  const l1 = new THREE.Mesh(legGeo, metalMat)
  l1.position.set(-0.75, 0.22, 0)
  const l2 = new THREE.Mesh(legGeo, metalMat)
  l2.position.set(0.75, 0.22, 0)
  bench.add(l1, l2)

  return bench
}

function buildPicnicTableAndStools(group: THREE.Group, x: number, z: number, colliders: CollisionWorld): void {
  const set = new THREE.Group()
  set.position.set(x, 0.15, z)

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x5a6068, roughness: 0.9 })

  // Round stone table top and central pedestal
  const topMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.08, 18), stoneMat)
  topMesh.position.set(0, 0.74, 0)
  topMesh.castShadow = true
  const pedMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.7, 12), stoneMat)
  pedMesh.position.set(0, 0.35, 0)
  set.add(topMesh, pedMesh)

  // 3 Mushroom Stools around table
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3
    const sx = Math.cos(angle) * 1.05
    const sz = Math.sin(angle) * 1.05
    const seatMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.08, 12), stoneMat)
    seatMesh.position.set(sx, 0.42, sz)
    const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.4, 10), stoneMat)
    legMesh.position.set(sx, 0.2, sz)
    set.add(seatMesh, legMesh)
  }

  group.add(set)
  colliders.add({ minX: x - 1.3, minY: 0, minZ: z - 1.3, maxX: x + 1.3, maxY: 0.85, maxZ: z + 1.3 })
}

function buildDrinkingFountain(
  group: THREE.Group,
  x: number,
  z: number,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  audio?: AudioManager,
): void {
  const fount = new THREE.Group()
  fount.position.set(x, 0.15, z)

  const concMat = new THREE.MeshStandardMaterial({ color: 0x6e747c, roughness: 0.82 })
  // Main concrete body (dual tier)
  const ped = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.78, 0.5), concMat)
  ped.position.set(0, 0.39, 0)
  ped.castShadow = true

  // Upper drinking water basin
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 14), metalMat)
  basin.position.set(0, 0.82, 0)

  // Stainless nozzle bubbler spout
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.09, 8), metalMat)
  spout.position.set(0, 0.88, 0.06)
  spout.rotateX(-0.3)

  // Lower foot/hand wash faucet extension
  const lowSpout = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.12, 8), metalMat)
  lowSpout.position.set(0.26, 0.38, 0)
  lowSpout.rotateZ(Math.PI / 2)

  // Drainage grate base slab
  const grateMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.6, metalness: 0.8 })
  const baseSlab = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.02, 0.75), grateMat)
  baseSlab.position.set(0, 0.01, 0)

  fount.add(ped, basin, spout, lowSpout, baseSlab)
  group.add(fount)

  colliders.add({ minX: x - 0.4, minY: 0, minZ: z - 0.4, maxX: x + 0.4, maxY: 1.2, maxZ: z + 0.4 })

  interactions.add({
    id: 'park-fountain',
    x,
    z: z + 0.6,
    radius: 1.6,
    prompt: 'Drink Cold Park Water',
    onInteract: () => {
      audio?.playFountainDrinkSound()
      messages.show('Cold, crisp water bubbles from the fountain nozzle. Very refreshing!')
    },
  })
}

// -------------------------------------------------------------------------
// PLAYGROUND EQUIPMENT (SWINGS, SPRING ROCKER, SLIDE, SANDBOX)
// -------------------------------------------------------------------------
function buildSwingSet(
  group: THREE.Group,
  x: number,
  z: number,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
): { update: (dt: number) => void } {
  const swings = new THREE.Group()
  swings.position.set(x, 0.15, z)

  // Dimensions: Width 3.4m, Height 2.8m, Base depth 1.8m
  const w = 3.4
  const h = 2.8

  // Top horizontal crossbar (yellow)
  const barGeo = new THREE.CylinderGeometry(0.06, 0.06, w + 0.4, 12)
  barGeo.rotateZ(Math.PI / 2)
  const topBar = new THREE.Mesh(barGeo, swingYellowMat)
  topBar.position.set(0, h, 0)
  topBar.castShadow = true
  swings.add(topBar)

  // Two A-Frame side legs (Teal/Cyan)
  const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 3.0, 10)
  for (const side of [-1, 1]) {
    const lx = (w / 2) * side

    // Leg forward
    const l1 = new THREE.Mesh(legGeo, swingTealMat)
    l1.position.set(lx, h / 2, 0.5)
    l1.rotateX(0.32 * side)
    l1.castShadow = true

    // Leg backward
    const l2 = new THREE.Mesh(legGeo, swingTealMat)
    l2.position.set(lx, h / 2, -0.5)
    l2.rotateX(-0.32 * side)
    l2.castShadow = true

    // Cross brace
    const brace = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.85, 8), swingTealMat)
    brace.position.set(lx, 1.0, 0)
    brace.rotateX(Math.PI / 2)

    swings.add(l1, l2, brace)
  }

  // Two Swings (Left and Right)
  const swingPivots: THREE.Group[] = []
  for (const sx of [-0.85, 0.85]) {
    const pivot = new THREE.Group()
    pivot.position.set(sx, h - 0.05, 0)

    // Chains
    const chainMat = metalMat
    const chainLen = 2.05
    for (const cx of [-0.25, 0.25]) {
      const chainMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, chainLen, 6), chainMat)
      chainMesh.position.set(cx, -chainLen / 2, 0)
      pivot.add(chainMesh)
    }

    // Rubber seat
    const seatMesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.05, 0.26), rubberSeatMat)
    seatMesh.position.set(0, -chainLen, 0)
    seatMesh.castShadow = true
    pivot.add(seatMesh)

    swings.add(pivot)
    swingPivots.push(pivot)
  }

  group.add(swings)

  // Side A-frame colliders
  colliders.add({ minX: x - w / 2 - 0.25, minY: 0, minZ: z - 0.9, maxX: x - w / 2 + 0.25, maxY: 2.8, maxZ: z + 0.9 })
  colliders.add({ minX: x + w / 2 - 0.25, minY: 0, minZ: z - 0.9, maxX: x + w / 2 + 0.25, maxY: 2.8, maxZ: z + 0.9 })

  interactions.add({
    id: 'park-swing',
    x,
    z: z + 0.7,
    radius: 2.0,
    prompt: () => (player.seated ? 'Stand up from Swing' : 'Sit on Park Swing'),
    onInteract: () => {
      player.seated = !player.seated
      if (player.seated) {
        audio?.playSwingCreakSound()
        messages.show('You sit on the park swing. The chains creak softly as you sway under the midnight sky.')
      } else {
        messages.show('You hop off the swing.')
      }
    },
  })

  let time = 0
  const update = (dt: number): void => {
    time += dt
    // Gentle natural pendulum sway
    swingPivots[0].rotation.x = Math.sin(time * 1.5) * 0.12
    swingPivots[1].rotation.x = Math.sin(time * 1.7 + 1.2) * 0.1
  }

  return { update }
}

function buildSpringRocker(
  group: THREE.Group,
  x: number,
  z: number,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  audio?: AudioManager,
): { update: (dt: number) => void } {
  const rocker = new THREE.Group()
  rocker.position.set(x, 0.15, z)

  // Base anchor flange
  const baseFlange = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.05, 12), metalMat)
  baseFlange.position.set(0, 0.025, 0)
  rocker.add(baseFlange)

  // Heavy steel coil spring
  const springPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.42, 12), springMat)
  springPillar.position.set(0, 0.25, 0)
  rocker.add(springPillar)

  // Panda Rider Body (attached to spring top)
  const rider = new THREE.Group()
  rider.position.set(0, 0.46, 0)

  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.6 })
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.7 })

  // Body oval
  const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.36, 0.65), whiteMat)
  bodyMesh.position.set(0, 0.18, 0)
  bodyMesh.castShadow = true

  // Black saddle seat
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.34), blackMat)
  saddle.position.set(0, 0.38, -0.05)

  // Head
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), whiteMat)
  headMesh.position.set(0, 0.35, 0.38)

  // Black ears
  const e1 = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), blackMat)
  e1.position.set(-0.16, 0.52, 0.34)
  const e2 = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), blackMat)
  e2.position.set(0.16, 0.52, 0.34)
  e2.position.set(0.16, 0.52, 0.34)

  // Red handlebar grip
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.44, 8), swingRedMat)
  bar.position.set(0, 0.52, 0.28)
  bar.rotateZ(Math.PI / 2)

  // Footrests
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.48, 8), metalMat)
  foot.position.set(0, 0.08, 0.18)
  foot.rotateZ(Math.PI / 2)

  rider.add(bodyMesh, saddle, headMesh, e1, e2, bar, foot)
  rocker.add(rider)
  group.add(rocker)

  colliders.add({ minX: x - 0.4, minY: 0, minZ: z - 0.45, maxX: x + 0.4, maxY: 1.1, maxZ: z + 0.45 })

  let bounceTimer = 0
  interactions.add({
    id: 'spring-rocker',
    x,
    z: z + 0.5,
    radius: 1.5,
    prompt: 'Ride Panda Spring Rocker',
    onInteract: () => {
      audio?.playSpringRockerSound()
      bounceTimer = 2.5
      messages.show('You bounce on the little panda rocker! Boing boing!')
    },
  })

  let time = 0
  const update = (dt: number): void => {
    time += dt
    if (bounceTimer > 0) {
      bounceTimer -= dt
      rider.rotation.x = Math.sin(time * 16.0) * (bounceTimer * 0.12)
      rider.rotation.z = Math.cos(time * 12.0) * (bounceTimer * 0.05)
    } else {
      // Gentle idle breeze wobble
      rider.rotation.x = Math.sin(time * 2.2) * 0.02
      rider.rotation.z = 0
    }
  }

  return { update }
}

function buildPlaygroundSlide(
  group: THREE.Group,
  x: number,
  z: number,
  rotY = Math.PI,
  colliders?: CollisionWorld,
  interactions?: InteractionSystem,
  messages?: MessageBus,
  audio?: AudioManager,
): void {
  const slide = new THREE.Group()
  slide.position.set(x, 0.15, z)
  slide.rotation.y = rotY

  // Ladder steps and platform (H: 2.1m)
  const h = 2.1
  const ladderGeo = new THREE.CylinderGeometry(0.035, 0.035, 2.3, 8)
  const l1 = new THREE.Mesh(ladderGeo, swingRedMat)
  l1.position.set(-0.35, h / 2, 0.4)
  l1.rotateX(0.25)
  const l2 = new THREE.Mesh(ladderGeo, swingRedMat)
  l2.position.set(0.35, h / 2, 0.4)
  l2.rotateX(0.25)
  slide.add(l1, l2)

  // Ladder rungs
  for (let y = 0.35; y < h; y += 0.35) {
    const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 8), swingYellowMat)
    rung.position.set(0, y, 0.4 - (y / h) * 0.4)
    rung.rotateZ(Math.PI / 2)
    slide.add(rung)
  }

  // Top platform and safety hoop
  const platMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.06, 0.8), swingRedMat)
  platMesh.position.set(0, h, 0)
  const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.03, 8, 16, Math.PI), swingRedMat)
  hoop.position.set(0, h + 0.4, 0)
  slide.add(platMesh, hoop)

  // Polished Stainless Steel Slide Chute (running forward)
  const chuteLen = 3.6
  const chuteGeo = new THREE.BoxGeometry(0.65, 0.06, chuteLen)
  const chute = new THREE.Mesh(chuteGeo, slideChuteMat)
  chute.position.set(0, h / 2 + 0.1, -chuteLen / 2 + 0.2)
  chute.rotateX(-0.52)
  chute.castShadow = true

  // Side safety rails
  const railL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, chuteLen), swingTealMat)
  railL.position.set(-0.32, h / 2 + 0.2, -chuteLen / 2 + 0.2)
  railL.rotateX(-0.52)
  const railR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, chuteLen), swingTealMat)
  railR.position.set(0.32, h / 2 + 0.2, -chuteLen / 2 + 0.2)
  railR.rotateX(-0.52)

  slide.add(chute, railL, railR)
  group.add(slide)

  if (colliders) {
    if (Math.abs(rotY - Math.PI) < 0.2) {
      // Facing North (+Z) into open playground
      colliders.add({ minX: x - 0.55, minY: 0, minZ: z - 0.6, maxX: x + 0.55, maxY: 2.4, maxZ: z + chuteLen - 0.2 })
    } else {
      // Facing South (-Z)
      colliders.add({ minX: x - 0.55, minY: 0, minZ: z - chuteLen + 0.2, maxX: x + 0.55, maxY: 2.4, maxZ: z + 0.6 })
    }
  }

  if (interactions && messages) {
    const triggerZ = Math.abs(rotY - Math.PI) < 0.2 ? z + 1.6 : z - 1.6
    interactions.add({
      id: 'playground-slide',
      x,
      z: triggerZ,
      radius: 2.2,
      prompt: 'Ride Playground Slide [すべり台]',
      onInteract: () => {
        if (audio) audio.playSlideSound()
        messages.show('You climb the ladder to the red platform and whoosh down the stainless steel slide into the park grass! Wheee!')
      },
    })
  }
}

function buildSandbox(group: THREE.Group, x: number, z: number, colliders: CollisionWorld): void {
  const sb = new THREE.Group()
  sb.position.set(x, 0.15, z)

  // Timber border frame (2.4m x 2.4m, H: 0.24m)
  const size = 2.4
  const rim = new THREE.Mesh(new THREE.BoxGeometry(size, 0.24, 0.16), sandboxWoodMat)
  const r1 = rim.clone()
  r1.position.set(0, 0.12, -size / 2)
  const r2 = rim.clone()
  r2.position.set(0, 0.12, size / 2)
  const r3 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, size), sandboxWoodMat)
  r3.position.set(-size / 2, 0.12, 0)
  const r4 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, size), sandboxWoodMat)
  r4.position.set(size / 2, 0.12, 0)

  // Soft Sand Fill
  const sandBed = new THREE.Mesh(new THREE.BoxGeometry(size - 0.1, 0.18, size - 0.1), sandMat)
  sandBed.position.set(0, 0.09, 0)
  sandBed.receiveShadow = true

  // Mini colorful plastic bucket and shovel
  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.14, 12), swingYellowMat)
  bucket.position.set(0.4, 0.24, 0.3)
  const spade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.015, 0.22), swingTealMat)
  spade.position.set(0.55, 0.19, 0.35)
  spade.rotateY(0.4)

  sb.add(r1, r2, r3, r4, sandBed, bucket, spade)
  group.add(sb)

  colliders.add({ minX: x - size / 2, minY: 0, minZ: z - size / 2, maxX: x + size / 2, maxY: 0.3, maxZ: z + size / 2 })
}

// -------------------------------------------------------------------------
// TREES & FLORA (SAKURA, PINE, MAPLE, CYPRESS, FLOWER BEDS, PETALS)
// -------------------------------------------------------------------------
function buildSakuraTree(x: number, z: number, scale = 1.0): THREE.Group {
  const tree = new THREE.Group()
  tree.position.set(x, 0.15, z)
  tree.scale.set(scale, scale, scale)

  const trunkGeo = new THREE.CylinderGeometry(0.32, 0.45, 3.4, 8)
  const trunk = new THREE.Mesh(trunkGeo, barkMat)
  trunk.position.set(0, 1.7, 0)
  trunk.castShadow = true
  tree.add(trunk)

  const b1Geo = new THREE.CylinderGeometry(0.18, 0.24, 2.2, 6)
  b1Geo.rotateZ(0.55)
  const b1 = new THREE.Mesh(b1Geo, barkMat)
  b1.position.set(0.7, 3.2, 0)
  tree.add(b1)

  const b2Geo = new THREE.CylinderGeometry(0.18, 0.24, 2.2, 6)
  b2Geo.rotateZ(-0.55)
  const b2 = new THREE.Mesh(b2Geo, barkMat)
  b2.position.set(-0.7, 3.2, 0)
  tree.add(b2)

  const clusters = [
    { x: 0, y: 4.8, z: 0, r: 2.4 },
    { x: 1.8, y: 4.2, z: 0.6, r: 1.8 },
    { x: -1.8, y: 4.2, z: -0.6, r: 1.8 },
    { x: 0.8, y: 4.0, z: -1.6, r: 1.7 },
    { x: -0.8, y: 4.0, z: 1.6, r: 1.7 },
    { x: 0.0, y: 5.6, z: 0.0, r: 1.5 },
  ]
  for (const c of clusters) {
    const fGeo = new THREE.DodecahedronGeometry(c.r, 1)
    const fMesh = new THREE.Mesh(fGeo, sakuraMat)
    fMesh.position.set(c.x, c.y, c.z)
    fMesh.castShadow = true
    tree.add(fMesh)
  }

  return tree
}

function buildJapaneseBlackPine(x: number, z: number): THREE.Group {
  const tree = new THREE.Group()
  tree.position.set(x, 0.15, z)

  // Sculptural gnarled trunk (curved / stepped cylinders)
  const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 2.0, 8), barkMat)
  t1.position.set(0, 1.0, 0)
  t1.rotateZ(-0.15)
  t1.castShadow = true

  const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, 1.8, 8), barkMat)
  t2.position.set(0.25, 2.6, 0.1)
  t2.rotateZ(0.22)
  t2.castShadow = true

  tree.add(t1, t2)

  // Distinct horizontal flattened tiered cloud needle clusters
  const clouds = [
    { x: 0.6, y: 2.8, z: 0.3, sx: 1.6, sy: 0.45, sz: 1.3 },
    { x: -0.8, y: 3.3, z: -0.2, sx: 1.8, sy: 0.48, sz: 1.4 },
    { x: 0.4, y: 3.9, z: 0.1, sx: 1.5, sy: 0.45, sz: 1.3 },
    { x: 0.0, y: 4.5, z: 0.0, sx: 1.3, sy: 0.42, sz: 1.1 },
  ]
  for (const c of clouds) {
    const fGeo = new THREE.DodecahedronGeometry(1.0, 1)
    const fMesh = new THREE.Mesh(fGeo, pineLeavesMat)
    fMesh.position.set(c.x, c.y, c.z)
    fMesh.scale.set(c.sx, c.sy, c.sz)
    fMesh.castShadow = true
    tree.add(fMesh)
  }

  return tree
}

function buildGreenTree(x: number, z: number, scale = 1.0): THREE.Group {
  const tree = new THREE.Group()
  tree.position.set(x, 0.15, z)
  tree.scale.set(scale, scale, scale)

  const trunkGeo = new THREE.CylinderGeometry(0.28, 0.38, 3.2, 8)
  const trunk = new THREE.Mesh(trunkGeo, barkMat)
  trunk.position.set(0, 1.6, 0)
  trunk.castShadow = true
  tree.add(trunk)

  const clusters = [
    { x: 0, y: 4.5, z: 0, r: 2.0 },
    { x: 1.4, y: 3.8, z: 0.5, r: 1.5 },
    { x: -1.4, y: 3.8, z: -0.5, r: 1.5 },
    { x: 0, y: 5.2, z: 0, r: 1.2 },
  ]
  for (const c of clusters) {
    const fGeo = new THREE.DodecahedronGeometry(c.r, 1)
    const fMesh = new THREE.Mesh(fGeo, leavesMat)
    fMesh.position.set(c.x, c.y, c.z)
    fMesh.castShadow = true
    tree.add(fMesh)
  }

  return tree
}

function buildCypressTree(x: number, z: number): THREE.Group {
  const tree = new THREE.Group()
  tree.position.set(x, 0.15, z)

  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 2.0, 8), barkMat)
  trunk.position.set(0, 1.0, 0)
  tree.add(trunk)

  // Slender conical evergreen foliage
  const cone1 = new THREE.Mesh(new THREE.ConeGeometry(1.1, 2.5, 8), hedgeMat)
  cone1.position.set(0, 2.8, 0)
  const cone2 = new THREE.Mesh(new THREE.ConeGeometry(0.85, 2.2, 8), hedgeMat)
  cone2.position.set(0, 4.2, 0)
  tree.add(cone1, cone2)

  return tree
}

function buildFlowerBed(
  group: THREE.Group,
  x: number,
  z: number,
  w: number,
  d: number,
  type: 'azalea' | 'hydrangea',
  colliders: CollisionWorld,
): void {
  const bed = new THREE.Group()
  bed.position.set(x, 0.15, z)

  // Stone retaining curb
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x5a6068, roughness: 0.9 })
  const curbMesh = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, d), curbMat)
  curbMesh.position.set(0, 0.11, 0)
  bed.add(curbMesh)

  // Dark rich garden soil
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x221a12, roughness: 0.95 })
  const soilMesh = new THREE.Mesh(new THREE.BoxGeometry(w - 0.2, 0.24, d - 0.2), soilMat)
  soilMesh.position.set(0, 0.12, 0)
  bed.add(soilMesh)

  // Lush flowering bushes inside
  const count = Math.max(3, Math.floor((w * d) * 1.5))
  for (let i = 0; i < count; i++) {
    const fx = (Math.random() - 0.5) * (w - 0.4)
    const fz = (Math.random() - 0.5) * (d - 0.4)
    const rad = 0.28 + Math.random() * 0.15

    // Green shrub base
    const bush = new THREE.Mesh(new THREE.SphereGeometry(rad, 8, 8), leavesMat)
    bush.position.set(fx, 0.24 + rad * 0.6, fz)
    bed.add(bush)

    // Blossom cluster
    const flowerMat = type === 'azalea'
      ? (Math.random() > 0.4 ? flowerMatPink : flowerMatWhite)
      : (Math.random() > 0.4 ? flowerMatPurple : flowerMatWhite)
    const bloom = new THREE.Mesh(new THREE.DodecahedronGeometry(rad * 0.65, 0), flowerMat)
    bloom.position.set(fx, 0.28 + rad * 0.9, fz)
    bed.add(bloom)
  }

  group.add(bed)
  colliders.add({ minX: x - w / 2, minY: 0, minZ: z - d / 2, maxX: x + w / 2, maxY: 0.6, maxZ: z + d / 2 })
}

function buildGroundPetalDecals(group: THREE.Group, cx: number, cz: number, radius: number, count: number): void {
  const decalGeo = new THREE.PlaneGeometry(0.12, 0.08)
  decalGeo.rotateX(-Math.PI / 2)

  for (let i = 0; i < count; i++) {
    const r = Math.sqrt(Math.random()) * radius
    const theta = Math.random() * Math.PI * 2
    const px = cx + Math.cos(theta) * r
    const pz = cz + Math.sin(theta) * r

    const petal = new THREE.Mesh(decalGeo, sakuraMat)
    petal.position.set(px, 0.158, pz)
    petal.rotateY(Math.random() * Math.PI)
    group.add(petal)
  }
}

function buildSakuraPetals(parkX: number, parkZ: number): { group: THREE.Group; update: (dt: number) => void } {
  const petalGroup = new THREE.Group()
  petalGroup.position.set(parkX, 0.15, parkZ)

  const count = 38
  const petals: { mesh: THREE.Mesh; x0: number; z0: number; speed: number; phase: number }[] = []
  const petalGeo = new THREE.PlaneGeometry(0.08, 0.05)

  for (let i = 0; i < count; i++) {
    const pMesh = new THREE.Mesh(petalGeo, sakuraMat)
    const x0 = (Math.random() - 0.5) * 9
    const z0 = (Math.random() - 0.5) * 9
    const y0 = 0.5 + Math.random() * 4.8
    pMesh.position.set(x0, y0, z0)
    pMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
    petalGroup.add(pMesh)

    petals.push({
      mesh: pMesh,
      x0,
      z0,
      speed: 0.28 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
    })
  }

  let time = 0
  const update = (dt: number): void => {
    time += dt
    for (const p of petals) {
      p.mesh.position.y -= dt * p.speed
      p.mesh.position.x = p.x0 + Math.sin(time * 1.5 + p.phase) * 0.4
      p.mesh.position.z = p.z0 + Math.cos(time * 1.2 + p.phase) * 0.4
      p.mesh.rotation.z += dt * 1.2
      p.mesh.rotation.y += dt * 0.8

      if (p.mesh.position.y < 0.1) {
        p.mesh.position.y = 4.8 + Math.random() * 0.5
      }
    }
  }

  return { group: petalGroup, update }
}


// =========================================================================
// 4. JAPANESE BICYCLE (AUTHENTIC MAMACHARI ママチャリ)
// =========================================================================

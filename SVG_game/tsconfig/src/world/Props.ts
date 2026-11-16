import * as THREE from 'three'
import {
  vendingTexture,
  postMat,
  lampMat,
  barkMat,
  sakuraMat,
  leavesMat,
  metalMat,
  yellowMat,
  carPaintMat,
  carGlassMat,
  mirrorOrangeMat,
  mirrorGlassMat,
  volumetricConeMat,
  mikanBoxTexture,
  tokyoTrashNoticeTexture,
  canRecycleBoxTexture,
  crowNetTexture,
  parkNameplateTexture,
  parkRulesBoardTexture,
  parkNoticeBoardTexture,
  parkClockTexture,
  parkToiletSignTexture,
  shopGlassMat,
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
} from './Materials'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'

export interface PropsResult {
  group: THREE.Group
  streetLights: THREE.PointLight[]
  update(dt: number): void
}

export function buildProps(
  scene: THREE.Scene,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  player: Player,
  audio?: AudioManager,
  lightManager?: LightManager,
): PropsResult {
  const group = new THREE.Group()
  group.name = 'urban_props'

  const streetLights: THREE.PointLight[] = []
  const animators: ((dt: number) => void)[] = []

  // 1. UTILITY POLES (電柱) & OVERHEAD CABLES
  const polePositions = [
    { x: -36, z: 4.8 },
    { x: -14, z: 4.8 },
    { x: 8, z: 4.8 },
    { x: 32, z: 4.8 },
    { x: -36, z: -4.8 },
    { x: 8, z: -4.8 },
    { x: 32, z: -4.8 },
    { x: 12.2, z: 16 },
    { x: 12.2, z: 32 },
    { x: 19.8, z: 24 },
    { x: -17.8, z: -18 },
    { x: -17.8, z: -32 },
    { x: -9.8, z: -20 },
  ]

  for (const pos of polePositions) {
    const pole = buildUtilityPole(pos.x, pos.z, streetLights, lightManager)
    group.add(pole)

    // Utility pole collider (radius 0.25m)
    colliders.add({
      minX: pos.x - 0.25,
      minY: 0,
      minZ: pos.z - 0.25,
      maxX: pos.x + 0.25,
      maxY: 10,
      maxZ: pos.z + 0.25,
    })
  }

  // Overhead sagging electrical cables connecting poles
  buildOverheadCables(group, polePositions)

  // 2. VENDING MACHINES (自動販売機)
  const vendingSpots = [
    { x: -4.2, z: 8.8, rotY: 0, variant: 0, drink: 'hot Boss Coffee [缶コーヒー ¥140]' },
    { x: 20.4, z: 9.8, rotY: -Math.PI / 2, variant: 1, drink: 'cold Pocari Sweat [ポカリスエット ¥160]' },
    { x: 5.2, z: 22.1, rotY: Math.PI, variant: 2, drink: 'warm Green Tea [お〜いお茶 ¥130]' },
    { x: -9.6, z: -10.8, rotY: Math.PI / 2, variant: 0, drink: 'cold Royal Milk Tea [ミルクティー ¥150]' },
  ]

  for (let i = 0; i < vendingSpots.length; i++) {
    const vs = vendingSpots[i]
    const vm = buildVendingMachine(vs.x, vs.z, vs.rotY, vs.variant, vs.drink, interactions, messages, colliders, lightManager)
    group.add(vm)
  }

  // 3. POCKET PARK PROPS (AUTHENTIC TOKYO SAKURA POCKET PARK)
  const parkRes = buildParkProps(group, colliders, interactions, messages, player, audio, streetLights, lightManager)
  animators.push(parkRes.update)

  // 4. BICYCLES (AUTHENTIC JAPANESE MAMACHARI)
  const bikeSpots = [
    { x: 2.4, z: 6.8, rotY: 0.15, color: 0x1f3b58, id: 'bike-ramen' },
    { x: -3.5, z: 8.2, rotY: -0.1, color: 0x1e4620, id: 'bike-sunheights' },
    { x: 21.5, z: 12.0, rotY: Math.PI / 2, color: 0x8a1824, id: 'bike-konbini-1' },
    { x: 21.5, z: 13.5, rotY: Math.PI / 2, color: 0xa8b4c0, id: 'bike-konbini-2' },
    { x: 8.5, z: 27.5, rotY: -Math.PI / 2, color: 0x241e1a, id: 'bike-cafe' },
    { x: 10.8, z: 20.5, rotY: Math.PI / 2, color: 0x1f3b58, id: 'bike-alley' },
    { x: 2.2, z: 23.8, rotY: Math.PI, color: 0x1e4620, id: 'bike-north' },
    { x: -18.2, z: -10.5, rotY: -Math.PI / 2, color: 0x8a1824, id: 'bike-residential' },
  ]
  for (const bs of bikeSpots) {
    const bike = buildBicycle(bs.x, bs.z, bs.rotY, bs.color, bs.id, interactions, messages, audio)
    group.add(bike)
    colliders.add({
      minX: bs.x - 0.75,
      minY: 0,
      minZ: bs.z - 0.35,
      maxX: bs.x + 0.75,
      maxY: 1.2,
      maxZ: bs.z + 0.35,
    })
  }

  // 5. POTTED PLANTS ALONG HOUSES & RESIDENTIAL ALLEY (CLEARED FROM CORNERS)
  const plantSpots = [
    { x: -2.8, z: 8.2, type: 'bush' },
    { x: -2.2, z: 8.2, type: 'fern' },
    { x: 2.0, z: 8.2, type: 'tall' },
    { x: 6.8, z: 21.0, type: 'bonsai' },
    { x: 7.4, z: 21.0, type: 'hydrangea' },
    { x: 8.0, z: 21.0, type: 'trough' },
    { x: 8.6, z: 21.0, type: 'tall' },
    { x: 1.5, z: 23.6, type: 'fern' },
    { x: -1.2, z: 23.6, type: 'bush' },
  ]
  for (const ps of plantSpots) {
    const pot = buildPottedPlant(ps.x, ps.z, ps.type)
    group.add(pot)
  }

  // Alley Gardening Accessories (watering can & wall hose reel)
  group.add(buildGardenAccessories(7.1, 20.9))

  // 6. PARKED JAPANESE KEI-CARS (軽自動車)
  const car1 = buildKeiCar(-20.5, 0.15, -16.5, Math.PI / 2, colliders)
  group.add(car1)

  // 7. CONVEX INTERSECTION TRAFFIC MIRRORS (カーブミラー)
  const mirror1 = buildConvexMirror(-16.8, -4.2, Math.PI / 4, colliders)
  const mirror2 = buildConvexMirror(13.2, 4.2, -Math.PI / 4, colliders)
  group.add(mirror1, mirror2)

  // 8. NEIGHBORHOOD TRASH & RECYCLING STATION (ゴミ集積所)
  const trash1 = buildTrashStation(9.6, 20.4)
  group.add(trash1)

  // Alley Recycling Receptacle next to green tea vending machine
  group.add(buildRecycleCanReceptacle(4.25, 22.1, interactions, messages, audio))

  // Alley Vintage Gooseneck Wall Lamp with warm amber glow
  group.add(buildAlleyWallLamp(6.2, 22.3, streetLights, lightManager))

  // 9. PEDESTRIAN CROSSING BUTTON POST
  buildCrossingSignals(group, colliders, interactions, messages)

  // 10. NEIGHBORHOOD STRAY CAT (KURO-CHAN)
  const catRes = buildStrayCat(group, interactions, messages, player, audio)
  animators.push(catRes.update)

  scene.add(group)
  return {
    group,
    streetLights,
    update(dt: number) {
      for (const a of animators) a(dt)
    },
  }
}

// =========================================================================
// 1. JAPANESE UTILITY POLE (DENCHU)
// =========================================================================
function buildUtilityPole(
  x: number,
  z: number,
  streetLights: THREE.PointLight[],
  lightManager?: LightManager,
): THREE.Group {
  const pole = new THREE.Group()
  pole.position.set(x, 0, z)

  const poleH = 9.2
  // Concrete cylindrical pole
  const pGeo = new THREE.CylinderGeometry(0.18, 0.24, poleH, 12)
  const pMat = new THREE.MeshStandardMaterial({ color: 0x5a5f66, roughness: 0.88, metalness: 0.05 })
  const pMesh = new THREE.Mesh(pGeo, pMat)
  pMesh.position.set(0, poleH / 2, 0)
  pMesh.castShadow = true
  pole.add(pMesh)

  // Metal crossarms
  const arm1Geo = new THREE.BoxGeometry(2.2, 0.1, 0.1)
  const arm1 = new THREE.Mesh(arm1Geo, postMat)
  arm1.position.set(0, poleH - 0.6, 0)
  pole.add(arm1)

  const arm2Geo = new THREE.BoxGeometry(1.6, 0.1, 0.1)
  const arm2 = new THREE.Mesh(arm2Geo, postMat)
  arm2.position.set(0, poleH - 1.4, 0)
  pole.add(arm2)

  // Insulator pegs
  const insGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.14, 8)
  const insMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.2 })
  for (const ox of [-0.95, -0.45, 0.45, 0.95]) {
    const ins = new THREE.Mesh(insGeo, insMat)
    ins.position.set(ox, poleH - 0.5, 0)
    pole.add(ins)
  }

  // Cylindrical Transformer Drum (柱上変圧器)
  const transGeo = new THREE.CylinderGeometry(0.32, 0.32, 1.1, 12)
  const transMat = new THREE.MeshStandardMaterial({ color: 0x485058, roughness: 0.5, metalness: 0.4 })
  const trans = new THREE.Mesh(transGeo, transMat)
  trans.position.set(0.35, poleH - 2.2, 0)
  pole.add(trans)

  // Climbing step pegs
  const pegGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.28, 6)
  pegGeo.rotateZ(Math.PI / 2)
  for (let y = 1.8; y < poleH - 2.5; y += 0.55) {
    const peg = new THREE.Mesh(pegGeo, metalMat)
    const side = Math.sin(y * 4) > 0 ? 0.2 : -0.2
    peg.position.set(side, y, 0)
    pole.add(peg)
  }

  // Attached Streetlamp
  const lampArmGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.1, 8)
  lampArmGeo.rotateZ(Math.PI / 3)
  const lampArm = new THREE.Mesh(lampArmGeo, postMat)
  lampArm.position.set(0.45, 5.2, 0)
  pole.add(lampArm)

  // Lamp shade
  const shadeGeo = new THREE.ConeGeometry(0.25, 0.15, 12)
  const shade = new THREE.Mesh(shadeGeo, postMat)
  shade.position.set(0.85, 4.8, 0)
  pole.add(shade)

  // Glowing bulb
  const bulbGeo = new THREE.SphereGeometry(0.1, 12, 12)
  const bulb = new THREE.Mesh(bulbGeo, lampMat)
  bulb.position.set(0.85, 4.72, 0)
  pole.add(bulb)

  // Volumetric streetlamp light cone
  const coneGeo = new THREE.ConeGeometry(2.4, 4.6, 16, 1, true)
  coneGeo.translate(0, -2.3, 0)
  const cone = new THREE.Mesh(coneGeo, volumetricConeMat)
  cone.position.set(0.85, 4.7, 0)
  pole.add(cone)

  // Dynamic warm streetlight point light (shadow pass disabled for high performance)
  if (lightManager) {
    lightManager.register({
      x: x + 0.85,
      y: 4.65,
      z,
      color: 0xffe4b5,
      intensity: 1.6,
      distance: 16,
      decay: 1.5,
      zone: 'Street',
    })
  } else {
    const light = new THREE.PointLight(0xffe4b5, 1.6, 16, 1.5)
    light.position.set(0.85, 4.65, 0)
    streetLights.push(light)
    pole.add(light)
  }

  return pole
}

function buildOverheadCables(group: THREE.Group, polePositions: { x: number; z: number }[]): void {
  const cableMat = new THREE.LineBasicMaterial({ color: 0x1a1e24, linewidth: 1.5 })

  for (let i = 0; i < polePositions.length; i++) {
    for (let j = i + 1; j < polePositions.length; j++) {
      const p1 = polePositions[i]
      const p2 = polePositions[j]
      const dist = Math.hypot(p2.x - p1.x, p2.z - p1.z)
      if (dist < 26) {
        for (const wireOffset of [-0.45, 0, 0.45]) {
          const y1 = 8.6 + wireOffset * 0.4
          const y2 = 8.6 + wireOffset * 0.4
          const midX = (p1.x + p2.x) / 2
          const midZ = (p1.z + p2.z) / 2
          const sag = Math.min(1.2, dist * 0.045)

          const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(p1.x, y1, p1.z),
            new THREE.Vector3(midX, (y1 + y2) / 2 - sag, midZ),
            new THREE.Vector3(p2.x, y2, p2.z),
          )
          const points = curve.getPoints(12)
          const geo = new THREE.BufferGeometry().setFromPoints(points)
          const line = new THREE.Line(geo, cableMat)
          group.add(line)
        }
      }
    }
  }
}

// =========================================================================
// 2. VENDING MACHINE (自動販売機)
// =========================================================================
function buildVendingMachine(
  x: number,
  z: number,
  rotY: number,
  variant: number,
  drinkName: string,
  interactions: InteractionSystem,
  messages: MessageBus,
  colliders: CollisionWorld,
  lightManager?: LightManager,
): THREE.Group {
  const vm = new THREE.Group()
  const w = 1.05
  const h = 1.95
  const d = 0.82

  const bodyGeo = new THREE.BoxGeometry(w, h, d)
  const bodyMat = new THREE.MeshStandardMaterial({
    color: variant === 0 ? 0x1b3b38 : variant === 1 ? 0x5a1824 : 0x1a2e54,
    roughness: 0.35,
    metalness: 0.65,
  })
  const body = new THREE.Mesh(bodyGeo, bodyMat)
  body.position.set(0, h / 2, 0)
  body.castShadow = true
  vm.add(body)

  const dispGeo = new THREE.PlaneGeometry(0.92, 1.75)
  const tex = vendingTexture(variant)
  const dispMat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
  const dispMesh = new THREE.Mesh(dispGeo, dispMat)
  dispMesh.position.set(0, h / 2 + 0.04, d / 2 + 0.01)
  vm.add(dispMesh)

  const vColor = variant === 0 ? 0x7affd4 : variant === 1 ? 0xff8899 : 0x88ccff
  if (lightManager) {
    const forwardOffset = d / 2 + 0.45
    lightManager.register({
      x: x + Math.sin(rotY) * forwardOffset,
      y: 0.15 + 1.2,
      z: z + Math.cos(rotY) * forwardOffset,
      color: vColor,
      intensity: 0.9,
      distance: 4.0,
      decay: 1.2,
      zone: 'Street',
    })
  } else {
    const vLight = new THREE.PointLight(vColor, 0.9, 4)
    vLight.position.set(0, 1.2, d / 2 + 0.45)
    vm.add(vLight)
  }

  const binGeo = new THREE.BoxGeometry(0.42, 0.85, 0.42)
  const binMat = new THREE.MeshStandardMaterial({ color: 0x3d444d, roughness: 0.4 })
  const bin = new THREE.Mesh(binGeo, binMat)
  bin.position.set(w / 2 + 0.32, 0.425, 0)
  vm.add(bin)

  const holeGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 12)
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x111111 })
  const h1 = new THREE.Mesh(holeGeo, holeMat)
  h1.position.set(w / 2 + 0.24, 0.86, 0)
  const h2 = new THREE.Mesh(holeGeo, holeMat)
  h2.position.set(w / 2 + 0.4, 0.86, 0)
  vm.add(h1, h2)

  vm.position.set(x, 0.15, z)
  vm.rotateY(rotY)

  colliders.add({
    minX: x - 0.9,
    minY: 0,
    minZ: z - 0.7,
    maxX: x + 0.9,
    maxY: 2.2,
    maxZ: z + 0.7,
  })

  interactions.add({
    id: `vending-${x}-${z}`,
    x,
    z,
    radius: 1.8,
    prompt: `Buy ${drinkName}`,
    onInteract: () => {
      messages.show(`*Clink-clatter-thump!* You bought a ${drinkName}. It feels warm and soothing in your hands.`)
    },
  })

  return vm
}

// =========================================================================
// 3. POCKET PARK PROPS (AUTHENTIC TOKYO SAKURA POCKET PARK)
// =========================================================================
function buildParkProps(
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
function buildBicycle(
  x: number,
  z: number,
  rotY: number,
  frameColor = 0x1f3b58,
  id = 'bike',
  interactions?: InteractionSystem,
  messages?: MessageBus,
  audio?: AudioManager,
): THREE.Group {
  const bike = new THREE.Group()
  bike.position.set(x, 0.15, z)
  bike.rotateY(rotY)
  bike.rotateZ(-0.06) // Realistic 3.5° parked lean on side kickstand

  // Materials
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.9 })
  const frameMat = new THREE.MeshStandardMaterial({ color: frameColor, roughness: 0.35, metalness: 0.4 })
  const saddleMat = new THREE.MeshStandardMaterial({ color: 0x241812, roughness: 0.5 })
  const gripMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.85 })
  const bellMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.2, metalness: 0.85 })
  const reflectorRedMat = new THREE.MeshBasicMaterial({ color: 0xdd1818 })
  const reflectorAmberMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b })

  const wheelR = 0.32
  const wheelPositions = [
    { x: 0.55, isFront: true },
    { x: -0.55, isFront: false },
  ]

  // 1. WHEELS (Tires, Chrome Rims, Center Axles, Spokes & Fenders)
  for (const wp of wheelPositions) {
    const wGroup = new THREE.Group()
    wGroup.position.set(wp.x, wheelR, 0)

    // Outer rubber tire
    const tire = new THREE.Mesh(new THREE.TorusGeometry(wheelR, 0.024, 8, 24), rubberMat)
    wGroup.add(tire)

    // Shiny chrome rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(wheelR - 0.02, 0.012, 6, 24), metalMat)
    wGroup.add(rim)

    // Center axle hub
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.07, 8), metalMat)
    hub.rotateX(Math.PI / 2)
    wGroup.add(hub)

    // Crossed spokes
    for (let s = 0; s < 4; s++) {
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, (wheelR - 0.02) * 2, 4), metalMat)
      spoke.rotateZ((s * Math.PI) / 4)
      wGroup.add(spoke)
    }

    // Curved Mudguards / Fenders (泥除け)
    const fenderGeo = new THREE.TorusGeometry(wheelR + 0.022, 0.016, 6, 18, Math.PI * (wp.isFront ? 0.72 : 0.85))
    const fender = new THREE.Mesh(fenderGeo, frameMat)
    fender.rotateZ(wp.isFront ? -Math.PI * 0.58 : -Math.PI * 0.42)
    wGroup.add(fender)

    // Rear red reflector on back fender
    if (!wp.isFront) {
      const ref = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.01, 8), reflectorRedMat)
      ref.position.set(-wheelR - 0.015, -0.05, 0)
      ref.rotateZ(Math.PI / 2)
      wGroup.add(ref)
    }

    bike.add(wGroup)
  }

  // 2. JAPANESE MAMACHARI FRAME (Low-Step Curved Step-Through Tubes)
  // Bottom bracket shell
  const bb = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.08, 8), frameMat)
  bb.rotateX(Math.PI / 2)
  bb.position.set(-0.06, 0.28, 0)
  bike.add(bb)

  // Head tube
  const ht = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8), frameMat)
  ht.position.set(0.42, 0.7, 0)
  ht.rotateZ(-0.28)
  bike.add(ht)

  // Twin curved step-through down-tubes (Easy step-over for shopping)
  for (const side of [-0.018, 0.018]) {
    const downTube = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.65, 8), frameMat)
    downTube.position.set(0.18, 0.46, side)
    downTube.rotateZ(0.72)
    bike.add(downTube)
  }

  // Seat tube rising to saddle
  const st = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.46, 8), frameMat)
  st.position.set(-0.16, 0.48, 0)
  st.rotateZ(-0.25)
  bike.add(st)

  // Front chrome fork blades
  for (const side of [-0.038, 0.038]) {
    const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.009, 0.45, 8), metalMat)
    fork.position.set(0.48, 0.51, side)
    fork.rotateZ(-0.28)
    bike.add(fork)
  }

  // Rear chainstays connecting BB to rear axle
  for (const side of [-0.038, 0.038]) {
    const cs = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.52, 6), frameMat)
    cs.position.set(-0.31, 0.3, side)
    cs.rotateZ(-0.09)
    bike.add(cs)
  }

  // Rear seatstays connecting seat cluster to rear axle
  for (const side of [-0.038, 0.038]) {
    const ss = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.55, 6), frameMat)
    ss.position.set(-0.38, 0.52, side)
    ss.rotateZ(0.78)
    bike.add(ss)
  }

  // 3. HANDLEBARS, STEM & BRASS BELL (プロムナードハンドル)
  // Chrome quill stem
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.22, 8), metalMat)
  stem.position.set(0.44, 0.82, 0)
  bike.add(stem)

  // Swept-back cruiser handlebar
  const barArc = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.011, 6, 16, Math.PI * 0.8), metalMat)
  barArc.rotateX(Math.PI / 2)
  barArc.rotateZ(Math.PI * 0.6)
  barArc.position.set(0.4, 0.92, 0)
  bike.add(barArc)

  // Left & right rubber handgrips
  for (const gz of [-0.22, 0.22]) {
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.09, 8), gripMat)
    grip.position.set(0.29, 0.91, gz)
    grip.rotateZ(Math.PI / 6)
    bike.add(grip)
  }

  // Brass bicycle bell on left handlebar
  const bellDome = new THREE.Mesh(new THREE.SphereGeometry(0.024, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), bellMat)
  bellDome.position.set(0.35, 0.94, -0.16)
  const bellThumb = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.005, 0.012), metalMat)
  bellThumb.position.set(0.33, 0.94, -0.18)
  bike.add(bellDome, bellThumb)

  // 4. FRONT WIRE SHOPPING BASKET (前カゴ)
  const basketW = 0.32
  const basketD = 0.22
  const basketH = 0.2
  const bX = 0.58
  const bY = 0.76

  // Wire basket rim & cage
  const bRim = new THREE.Mesh(new THREE.BoxGeometry(basketD, 0.016, basketW), metalMat)
  bRim.position.set(bX, bY + basketH / 2, 0)
  const bFloor = new THREE.Mesh(new THREE.BoxGeometry(basketD - 0.02, 0.012, basketW - 0.02), metalMat)
  bFloor.position.set(bX, bY - basketH / 2, 0)
  bike.add(bRim, bFloor)

  // Wire mesh side struts
  for (const cx of [-basketD / 2 + 0.01, basketD / 2 - 0.01]) {
    for (const cz of [-basketW / 2 + 0.01, basketW / 2 - 0.01]) {
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, basketH, 4), metalMat)
      strut.position.set(bX + cx, bY, cz)
      bike.add(strut)
    }
  }

  // Inside basket: Convenience store bag / tote
  const bag = new THREE.Mesh(
    new THREE.BoxGeometry(basketD * 0.75, basketH * 0.65, basketW * 0.75),
    new THREE.MeshStandardMaterial({ color: 0xf5f8fa, roughness: 0.8 }),
  )
  bag.position.set(bX, bY - 0.02, 0)
  bike.add(bag)

  // Chrome bullet dynamo headlight under basket
  const headLight = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.018, 0.06, 10), metalMat)
  headLight.rotateZ(-Math.PI / 2)
  headLight.position.set(0.66, 0.62, 0)
  const lampLens = new THREE.Mesh(new THREE.CircleGeometry(0.022, 10), lampMat)
  lampLens.rotateY(Math.PI / 2)
  lampLens.position.set(0.691, 0.62, 0)
  bike.add(headLight, lampLens)

  // 5. ERGONOMIC SPRUNG SADDLE (サドル)
  const sPost = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.16, 8), metalMat)
  sPost.position.set(-0.19, 0.73, 0)
  sPost.rotateZ(-0.25)

  // Contoured saddle cushion
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.055, 0.17), saddleMat)
  saddle.position.set(-0.2, 0.81, 0)

  // Dual chrome coil springs under seat
  for (const sz of [-0.045, 0.045]) {
    const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.04, 8), metalMat)
    spring.position.set(-0.26, 0.77, sz)
    bike.add(spring)
  }
  bike.add(sPost, saddle)

  // 6. REAR CARGO LUGGAGE RACK (リアキャリア)
  const rackPlat = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.14), metalMat)
  rackPlat.position.set(-0.5, 0.73, 0)
  bike.add(rackPlat)

  // Rack support struts down to rear axle
  for (const rz of [-0.05, 0.05]) {
    const rStrut = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.44, 4), metalMat)
    rStrut.position.set(-0.52, 0.52, rz)
    rStrut.rotateZ(0.2)
    bike.add(rStrut)
  }

  // 7. DRIVETRAIN, PEDALS & KICKSTAND
  // Chaincase cover
  const chaincase = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.11, 0.03), frameMat)
  chaincase.position.set(-0.28, 0.28, 0.04)
  bike.add(chaincase)

  // Crank arms & pedals with yellow reflectors
  for (const side of [-1, 1]) {
    const crank = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.14, 6), metalMat)
    crank.position.set(-0.06, 0.28 + side * 0.06, side * 0.07)
    const pedal = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.06), gripMat)
    pedal.position.set(-0.06, 0.28 + side * 0.12, side * 0.1)
    const refA = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.01, 0.01), reflectorAmberMat)
    refA.position.set(-0.06, 0.28 + side * 0.12, side * 0.13)
    bike.add(crank, pedal, refA)
  }

  // Steel kickstand (holding bike upright with slight lean)
  const kickstand = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.32, 6), metalMat)
  kickstand.position.set(-0.46, 0.16, -0.1)
  kickstand.rotateX(0.38)
  bike.add(kickstand)

  // Municipal parking registration sticker (防犯登録) on seat tube
  const regDecal = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.03, 8), reflectorAmberMat)
  regDecal.position.set(-0.16, 0.52, 0)
  bike.add(regDecal)

  // Interactive Bicycle Bell
  if (interactions) {
    interactions.add({
      id: `${id}-bell`,
      x,
      z,
      radius: 1.8,
      prompt: 'Ring Bicycle Bell',
      onInteract: () => {
        audio?.playBikeBellSound()
        messages?.show('*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.')
      },
    })
  }

  return bike
}

// =========================================================================
// 5. POTTED PLANTS & RESIDENTIAL ALLEY GARDENING (軒先ガーデン)
// =========================================================================
function buildPottedPlant(x: number, z: number, type: string): THREE.Group {
  const g = new THREE.Group()
  g.position.set(x, 0.15, z)

  if (type === 'bonsai') {
    // Japanese Bonsai in glazed oval ceramic dish
    const dishMat = new THREE.MeshStandardMaterial({ color: 0x1f3c58, roughness: 0.35, metalness: 0.15 })
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.2, 0.08, 14), dishMat)
    dish.position.set(0, 0.04, 0)
    dish.scale.set(1.3, 1, 0.9)

    // Mossy soil
    const mossMat = new THREE.MeshStandardMaterial({ color: 0x223d1d, roughness: 0.9 })
    const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.04, 12), mossMat)
    soil.position.set(0, 0.08, 0)
    soil.scale.set(1.25, 1, 0.85)
    g.add(dish, soil)

    // Gnarled twisted trunk
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2618, roughness: 0.9 })
    const trunk1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, 0.22, 7), trunkMat)
    trunk1.position.set(0, 0.18, 0)
    trunk1.rotation.z = -0.18
    const trunk2 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.025, 0.2, 6), trunkMat)
    trunk2.position.set(0.04, 0.34, 0)
    trunk2.rotation.z = 0.28
    g.add(trunk1, trunk2)

    // 3 Flattened cloud-tuft foliage pads
    const pineMat = new THREE.MeshStandardMaterial({ color: 0x143b22, roughness: 0.85 })
    const pads = [
      { x: -0.12, y: 0.28, z: 0.02, rx: 0.14, rz: 0.06 },
      { x: 0.14, y: 0.38, z: -0.04, rx: 0.16, rz: 0.07 },
      { x: 0.02, y: 0.48, z: 0.02, rx: 0.2, rz: 0.08 },
    ]
    pads.forEach((p) => {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(p.rx, p.rx * 0.9, p.rz, 10), pineMat)
      pad.position.set(p.x, p.y, p.z)
      g.add(pad)
    })
  } else if (type === 'hydrangea') {
    // Japanese Blooming Hydrangeas (紫陽花 - Ajisai)
    const potMat = new THREE.MeshStandardMaterial({ color: 0x8a4b33, roughness: 0.8 })
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.16, 0.38, 12), potMat)
    pot.position.set(0, 0.19, 0)
    g.add(pot)

    // Lush broad leaves
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x1f5c2b, roughness: 0.7 })
    for (let i = 0; i < 5; i++) {
      const ang = (i * Math.PI * 2) / 5
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 6), leafMat)
      leaf.scale.set(1.4, 0.3, 0.8)
      leaf.position.set(Math.cos(ang) * 0.18, 0.38, Math.sin(ang) * 0.18)
      leaf.rotation.y = -ang
      leaf.rotation.z = 0.35
      g.add(leaf)
    }

    // 3 Pastel flower cluster domes (soft lavender and periwinkle blue)
    const flowerColors = [0x7c8cf8, 0xa78bfa, 0x60a5fa]
    const clusters = [
      { x: -0.08, y: 0.52, z: 0.06, c: flowerColors[0] },
      { x: 0.09, y: 0.54, z: -0.05, c: flowerColors[1] },
      { x: 0, y: 0.62, z: 0, c: flowerColors[2] },
    ]
    clusters.forEach((cl) => {
      const flMat = new THREE.MeshStandardMaterial({ color: cl.c, roughness: 0.85 })
      const dome = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14, 1), flMat)
      dome.position.set(cl.x, cl.y, cl.z)
      g.add(dome)
    })
  } else if (type === 'trough') {
    // Rectangular wooden/terracotta flower planter box
    const troughMat = new THREE.MeshStandardMaterial({ color: 0x4a3222, roughness: 0.85 })
    const trough = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.22, 0.25), troughMat)
    trough.position.set(0, 0.11, 0)
    g.add(trough)

    // Soil
    const soil = new THREE.Mesh(
      new THREE.BoxGeometry(0.61, 0.04, 0.21),
      new THREE.MeshStandardMaterial({ color: 0x221810 }),
    )
    soil.position.set(0, 0.21, 0)
    g.add(soil)

    // Colorful blossoming flowers (pansies/petunias)
    const petColors = [0xfacc15, 0xf43f5e, 0xffffff, 0xa855f7, 0xf97316]
    for (let fx = -0.24; fx <= 0.25; fx += 0.12) {
      const col = petColors[Math.floor(Math.random() * petColors.length)]
      const blossom = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.06, 1),
        new THREE.MeshStandardMaterial({ color: col }),
      )
      blossom.position.set(fx, 0.27, (Math.random() - 0.5) * 0.1)
      g.add(blossom)
    }
  } else if (type === 'tall') {
    // Slender green bamboo shoots in tall cylindrical terracotta pot
    const potMat = new THREE.MeshStandardMaterial({ color: 0x6e432c, roughness: 0.8 })
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.42, 10), potMat)
    pot.position.set(0, 0.21, 0)
    g.add(pot)

    const bambooMat = new THREE.MeshStandardMaterial({ color: 0x3d7a3e, roughness: 0.5 })
    for (const bx of [-0.06, 0.05]) {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.018, 0.9, 6), bambooMat)
      stalk.position.set(bx, 0.65, bx * 2 * 0.03)
      const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.45, 6), leavesMat)
      tuft.position.set(bx, 1.05, 0)
      g.add(stalk, tuft)
    }
  } else {
    // Classic Japanese house-front fern / bush in terracotta pot
    const potMat = new THREE.MeshStandardMaterial({ color: 0x7c4e36, roughness: 0.85 })
    const pMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.35, 10), potMat)
    pMesh.position.set(0, 0.175, 0)
    const fol = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28, 1), leavesMat)
    fol.position.set(0, 0.45, 0)
    g.add(pMesh, fol)
  }

  return g
}

function buildGardenAccessories(x: number, z: number): THREE.Group {
  const g = new THREE.Group()
  g.position.set(x, 0.15, z)

  // Green plastic Japanese watering can (じょうろ)
  const canMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.5 })
  const canBody = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.18, 10), canMat)
  canBody.position.set(0, 0.09, 0)
  // Carry handle
  const handleGeo = new THREE.TorusGeometry(0.08, 0.012, 6, 12, Math.PI)
  const handle = new THREE.Mesh(handleGeo, canMat)
  handle.position.set(0, 0.2, 0)
  handle.rotation.z = Math.PI / 2
  // Long spout
  const spoutGeo = new THREE.CylinderGeometry(0.01, 0.015, 0.22, 6)
  spoutGeo.rotateZ(-Math.PI / 3)
  const spout = new THREE.Mesh(spoutGeo, canMat)
  spout.position.set(0.12, 0.16, 0)
  // Rose head (sprinkler cap)
  const rose = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.015, 0.025, 8), canMat)
  rose.position.set(0.21, 0.24, 0)
  rose.rotation.z = -Math.PI / 3
  g.add(canBody, handle, spout, rose)

  // Wall-mounted garden hose reel on the wall at z + 0.28
  const reelMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.6 })
  const reel = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.12, 12), reelMat)
  reel.rotation.x = Math.PI / 2
  reel.position.set(-0.35, 0.55, 0.28)
  // Coiled hose
  const hoseMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.4 })
  const hoseTorus = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.025, 6, 16), hoseMat)
  hoseTorus.position.set(-0.35, 0.55, 0.28)
  // Brass spray nozzle hanging down
  const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.3 })
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.14, 6), nozzleMat)
  nozzle.position.set(-0.24, 0.42, 0.28)
  g.add(reel, hoseTorus, nozzle)

  return g
}

// =========================================================================
// 6. PARKED JAPANESE KEI-CAR (軽自動車)
// =========================================================================
function buildKeiCar(x: number, y: number, z: number, rotY: number, colliders: CollisionWorld): THREE.Group {
  const car = new THREE.Group()
  car.position.set(x, y, z)
  car.rotateY(rotY)

  const w = 1.48
  const l = 3.35
  const h = 1.62

  // Body
  const bodyGeo = new THREE.BoxGeometry(w, 0.75, l)
  const body = new THREE.Mesh(bodyGeo, carPaintMat)
  body.position.set(0, 0.55, 0)
  body.castShadow = true
  car.add(body)

  // Cabin
  const cabGeo = new THREE.BoxGeometry(w - 0.08, 0.72, l * 0.72)
  const cab = new THREE.Mesh(cabGeo, carPaintMat)
  cab.position.set(0, 1.25, -0.15)
  car.add(cab)

  // Windshield
  const windGeo = new THREE.BoxGeometry(w - 0.04, 0.62, 0.06)
  windGeo.rotateX(0.2)
  const wind = new THREE.Mesh(windGeo, carGlassMat)
  wind.position.set(0, 1.22, (l * 0.72) / 2 - 0.12)
  car.add(wind)

  const rearWindGeo = new THREE.BoxGeometry(w - 0.04, 0.58, 0.06)
  const rearWind = new THREE.Mesh(rearWindGeo, carGlassMat)
  rearWind.position.set(0, 1.25, (-l * 0.72) / 2 - 0.16)
  car.add(rearWind)

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.18, 12)
  wheelGeo.rotateZ(Math.PI / 2)
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1b1b1b, roughness: 0.9 })
  for (const wx of [-w / 2, w / 2]) {
    for (const wz of [-l * 0.32, l * 0.32]) {
      const wh = new THREE.Mesh(wheelGeo, wheelMat)
      wh.position.set(wx, 0.26, wz)
      car.add(wh)
    }
  }

  // Headlights
  const hlGeo = new THREE.BoxGeometry(0.25, 0.18, 0.06)
  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffae8 })
  const hl1 = new THREE.Mesh(hlGeo, hlMat)
  hl1.position.set(-w / 2 + 0.24, 0.65, l / 2 + 0.01)
  const hl2 = new THREE.Mesh(hlGeo, hlMat)
  hl2.position.set(w / 2 - 0.24, 0.65, l / 2 + 0.01)
  car.add(hl1, hl2)

  // Taillights
  const tlGeo = new THREE.BoxGeometry(0.2, 0.24, 0.06)
  const tlMat = new THREE.MeshBasicMaterial({ color: 0xdd1818 })
  const tl1 = new THREE.Mesh(tlGeo, tlMat)
  tl1.position.set(-w / 2 + 0.2, 0.75, -l / 2 - 0.01)
  const tl2 = new THREE.Mesh(tlGeo, tlMat)
  tl2.position.set(w / 2 - 0.2, 0.75, -l / 2 - 0.01)
  car.add(tl1, tl2)

  // Yellow Japanese License Plates
  const plateGeo = new THREE.BoxGeometry(0.35, 0.18, 0.02)
  const pFront = new THREE.Mesh(plateGeo, yellowMat)
  pFront.position.set(0, 0.38, l / 2 + 0.02)
  const pRear = new THREE.Mesh(plateGeo, yellowMat)
  pRear.position.set(0, 0.42, -l / 2 - 0.02)
  car.add(pFront, pRear)

  colliders.add({
    minX: x - l / 2 - 0.1,
    minY: y,
    minZ: z - w / 2 - 0.1,
    maxX: x + l / 2 + 0.1,
    maxY: y + h,
    maxZ: z + w / 2 + 0.1,
  })

  return car
}

// =========================================================================
// 7. CONVEX INTERSECTION TRAFFIC MIRRORS (カーブミラー)
// =========================================================================
function buildConvexMirror(x: number, z: number, rotY: number, colliders: CollisionWorld): THREE.Group {
  const mGroup = new THREE.Group()
  mGroup.position.set(x, 0.15, z)
  mGroup.rotateY(rotY)

  const postH = 3.4
  const postMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, postH, 10), postMat)
  postMesh.position.set(0, postH / 2, 0)
  mGroup.add(postMesh)

  const hoodGeo = new THREE.CylinderGeometry(0.48, 0.52, 0.12, 24)
  hoodGeo.rotateX(Math.PI / 2)
  const hood = new THREE.Mesh(hoodGeo, mirrorOrangeMat)
  hood.position.set(0.35, postH - 0.2, 0)
  mGroup.add(hood)

  const faceGeo = new THREE.SphereGeometry(0.44, 24, 12, 0, Math.PI * 2, 0, Math.PI / 3)
  faceGeo.rotateX(Math.PI / 2)
  const face = new THREE.Mesh(faceGeo, mirrorGlassMat)
  face.position.set(0.35, postH - 0.2, 0.04)
  mGroup.add(face)

  colliders.add({
    minX: x - 0.25,
    minY: 0,
    minZ: z - 0.25,
    maxX: x + 0.25,
    maxY: 3.8,
    maxZ: z + 0.25,
  })

  return mGroup
}

// =========================================================================
// 8. NEIGHBORHOOD TRASH & RECYCLING STATION (ゴミ集積所)
// =========================================================================
function buildTrashStation(x: number, z: number): THREE.Group {
  const g = new THREE.Group()
  g.position.set(x, 0.15, z)

  // 1. Tokyo Municipal Collection Schedule Signboard
  const signGeo = new THREE.PlaneGeometry(0.72, 0.72)
  const signMat = new THREE.MeshBasicMaterial({ map: tokyoTrashNoticeTexture(), toneMapped: false })
  const signMesh = new THREE.Mesh(signGeo, signMat)
  signMesh.position.set(0, 1.4, 0.65)
  signMesh.rotation.y = Math.PI // facing South into the alley
  g.add(signMesh)

  const signBack = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.76, 0.02), metalMat)
  signBack.position.set(0, 1.4, 0.66)
  g.add(signBack)

  // 2. Collapsible Plastic Crates (折りたたみ回収コンテナ)
  // (A) Yellow Crate for Glass Bottles (ビン)
  const yCrateMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.6 })
  const yCrate = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.32, 0.38), yCrateMat)
  yCrate.position.set(-0.38, 0.16, 0.15)
  g.add(yCrate)

  // Glass bottles inside yellow crate
  const bottleColors = [0x78350f, 0x065f46, 0x14532d, 0x92400e]
  for (let bx = -0.2; bx <= 0.2; bx += 0.1) {
    const col = bottleColors[Math.floor(Math.random() * bottleColors.length)]
    const bMat = new THREE.MeshStandardMaterial({
      color: col,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
    })
    const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8), bMat)
    bottle.position.set(-0.38 + bx, 0.22, 0.15 + (Math.random() - 0.5) * 0.1)
    g.add(bottle)
  }

  // (B) Blue Crate for Cans (カン)
  const bCrateMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.6 })
  const bCrate = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.32, 0.38), bCrateMat)
  bCrate.position.set(0.28, 0.16, 0.15)
  g.add(bCrate)

  // Aluminum cans inside blue crate
  const canColors = [0xd97706, 0xdc2626, 0x2563eb, 0x059669]
  for (let cx = -0.18; cx <= 0.18; cx += 0.09) {
    const col = canColors[Math.floor(Math.random() * canColors.length)]
    const can = new THREE.Mesh(
      new THREE.CylinderGeometry(0.028, 0.028, 0.14, 8),
      new THREE.MeshStandardMaterial({ color: col, metalness: 0.6, roughness: 0.3 }),
    )
    can.position.set(0.28 + cx, 0.18, 0.15 + (Math.random() - 0.5) * 0.1)
    g.add(can)
  }

  // 3. Tokyo Municipal Waste Bags (指定収集ごみ袋)
  const bagMat = new THREE.MeshStandardMaterial({
    color: 0xfef9c3,
    roughness: 0.5,
    metalness: 0.05,
    transparent: true,
    opacity: 0.85,
  })
  const bagSpots = [
    { x: -0.25, y: 0.24, z: -0.22, s: 0.24 },
    { x: 0.22, y: 0.26, z: -0.2, s: 0.26 },
    { x: 0.0, y: 0.22, z: -0.28, s: 0.22 },
  ]
  bagSpots.forEach((b) => {
    const bagGroup = new THREE.Group()
    bagGroup.position.set(b.x, b.y, b.z)
    const bagBody = new THREE.Mesh(new THREE.DodecahedronGeometry(b.s, 1), bagMat)
    bagBody.scale.set(1.1, 0.9, 1.05)
    const knot = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.09, 6), bagMat)
    knot.position.set(0, b.s * 0.9, 0)
    bagGroup.add(bagBody, knot)
    g.add(bagGroup)
  })

  // 4. Realistic Draped Crow Protection Net (カラスよけネット)
  const netMat = new THREE.MeshStandardMaterial({
    map: crowNetTexture(),
    roughness: 0.8,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
  })
  const netGeo = new THREE.SphereGeometry(0.78, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55)
  netGeo.scale(1.3, 0.75, 1.05)
  const net = new THREE.Mesh(netGeo, netMat)
  net.position.set(-0.04, 0.08, -0.04)
  g.add(net)

  // Heavy dark lead-weighted edge rope (重り入りロープ) holding net against ground
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.9 })
  const ropeTorus = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.022, 6, 24), ropeMat)
  ropeTorus.rotation.x = Math.PI / 2
  ropeTorus.scale.set(1.3, 1.05, 1)
  ropeTorus.position.set(-0.04, 0.02, -0.04)
  g.add(ropeTorus)

  // 5. Sidewalk bamboo cleaning broom (竹箒)
  const broomGroup = new THREE.Group()
  broomGroup.position.set(0.85, 0, 0.45)
  broomGroup.rotation.z = -0.15
  const bHandle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.012, 1.35, 6),
    new THREE.MeshStandardMaterial({ color: 0xa16207, roughness: 0.8 }),
  )
  bHandle.position.set(0, 0.7, 0)
  const bristles = new THREE.Mesh(
    new THREE.ConeGeometry(0.08, 0.35, 8),
    new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 }),
  )
  bristles.position.set(0, 0.18, 0)
  broomGroup.add(bHandle, bristles)
  g.add(broomGroup)

  return g
}

// Dedicated Can / Bottle Recycling Receptacle (自販機横 空き缶回収BOX)
function buildRecycleCanReceptacle(
  x: number,
  z: number,
  interactions: InteractionSystem,
  messages: MessageBus,
  audio?: AudioManager,
): THREE.Group {
  const g = new THREE.Group()
  g.position.set(x, 0.15, z)

  const boxW = 0.46
  const boxH = 0.95
  const boxD = 0.4

  const bodyMat = new THREE.MeshStandardMaterial({
    map: canRecycleBoxTexture(),
    roughness: 0.4,
    metalness: 0.2,
  })
  const body = new THREE.Mesh(new THREE.BoxGeometry(boxW, boxH, boxD), bodyMat)
  body.position.set(0, boxH / 2, 0)
  g.add(body)

  const lidMat = new THREE.MeshStandardMaterial({ color: 0x172554, roughness: 0.4 })
  const lid = new THREE.Mesh(new THREE.BoxGeometry(boxW + 0.03, 0.06, boxD + 0.03), lidMat)
  lid.position.set(0, boxH + 0.03, 0)
  g.add(lid)

  const holeMat = new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.8 })
  for (const hx of [-0.12, 0.12]) {
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12), holeMat)
    hole.position.set(hx, boxH + 0.065, 0)
    g.add(hole)
  }

  interactions.add({
    id: 'alley-can-recycle',
    x,
    z,
    radius: 1.8,
    prompt: 'Recycle Can / Bottle [空き缶・ボトル回収]',
    onInteract: () => {
      if (audio) audio.playDeskBellSound()
      messages.show('空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*')
    },
  })

  return g
}

// Vintage Gooseneck Japanese Alley Wall Lamp (路地裏の街灯)
function buildAlleyWallLamp(
  x: number,
  z: number,
  streetLights: THREE.PointLight[],
  lightManager?: LightManager,
): THREE.Group {
  const g = new THREE.Group()
  g.position.set(x, 3.1, z)

  // Wrought iron gooseneck bracket from wall
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.45, 6), postMat)
  arm.rotation.x = Math.PI / 2
  arm.position.set(0, 0, -0.22)
  g.add(arm)

  // Dark green enamel shade
  const shadeMat = new THREE.MeshStandardMaterial({ color: 0x133827, roughness: 0.35 })
  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.12, 12, 1, true), shadeMat)
  shade.position.set(0, -0.06, 0)
  g.add(shade)

  // Glowing warm amber bulb
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), lampMat)
  bulb.position.set(0, -0.09, 0)
  g.add(bulb)

  // Warm amber alley downlight
  if (lightManager) {
    lightManager.register({
      x,
      y: 2.95,
      z,
      color: 0xffa544,
      intensity: 2.2,
      distance: 8.5,
      decay: 1.2,
      zone: 'Street',
    })
  } else {
    const light = new THREE.PointLight(0xffa544, 2.2, 8.5, 1.2)
    light.position.set(0, -0.15, 0)
    g.add(light)
    streetLights.push(light)
  }

  return g
}

// =========================================================================
// 9. PEDESTRIAN CROSSING SIGNALS
// =========================================================================
function buildCrossingSignals(
  group: THREE.Group,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
): void {
  const signals = [
    { x: 13.8, z: 3.8 },
    { x: 18.2, z: -3.8 },
  ]

  for (const s of signals) {
    const post = new THREE.Group()
    post.position.set(s.x, 0.15, s.z)

    const pMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 8), postMat)
    pMesh.position.set(0, 1.6, 0)
    post.add(pMesh)

    const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.14), yellowMat)
    boxMesh.position.set(0, 1.25, 0.08)
    post.add(boxMesh)

    const btnMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 10), metalMat)
    btnMesh.rotateX(Math.PI / 2)
    btnMesh.position.set(0, 1.25, 0.16)
    post.add(btnMesh)

    const sigHead = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.65, 0.22), postMat)
    sigHead.position.set(0, 2.8, 0)
    post.add(sigHead)

    const greenLight = new THREE.Mesh(
      new THREE.CircleGeometry(0.1, 12),
      new THREE.MeshBasicMaterial({ color: 0x44ffaa }),
    )
    greenLight.position.set(0, 2.65, 0.12)
    post.add(greenLight)

    group.add(post)

    colliders.add({
      minX: s.x - 0.2,
      minY: 0,
      minZ: s.z - 0.2,
      maxX: s.x + 0.2,
      maxY: 3.5,
      maxZ: s.z + 0.2,
    })

    interactions.add({
      id: `signal-${s.x}`,
      x: s.x,
      z: s.z + 0.4,
      radius: 1.6,
      prompt: 'Push Pedestrian Crossing Button [押ボタン式]',
      onInteract: () => {
        messages.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')
      },
    })
  }
}

// =========================================================================
// 10. NEIGHBORHOOD STRAY CAT (KURO-CHAN) & MIKAN BOX BED
// =========================================================================
function buildStrayCat(
  group: THREE.Group,
  interactions: InteractionSystem,
  messages: MessageBus,
  player?: Player,
  audio?: AudioManager,
): { update: (dt: number) => void } {
  const catX = 6.0
  const catZ = 21.2
  const catY = 0.15

  const alleyCatGroup = new THREE.Group()
  alleyCatGroup.position.set(catX, catY, catZ)

  // -------------------------------------------------------------
  // 1. Japanese "Ehime Mikan" Cardboard Box Bed (愛媛みかん 箱)
  // -------------------------------------------------------------
  const boxGroup = new THREE.Group()
  const boxW = 0.52
  const boxH = 0.2
  const boxD = 0.4
  const wallThick = 0.015

  const mikanMat = new THREE.MeshStandardMaterial({
    map: mikanBoxTexture(),
    roughness: 0.88,
  })
  const innerCardboardMat = new THREE.MeshStandardMaterial({
    color: 0xc89d6c,
    roughness: 0.9,
  })

  // Box Bottom
  const bottom = new THREE.Mesh(new THREE.BoxGeometry(boxW, wallThick, boxD), mikanMat)
  bottom.position.set(0, wallThick / 2, 0)
  boxGroup.add(bottom)

  // Box 4 vertical sides
  const frontWall = new THREE.Mesh(new THREE.BoxGeometry(boxW, boxH, wallThick), mikanMat)
  frontWall.position.set(0, boxH / 2, boxD / 2 - wallThick / 2)
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(boxW, boxH, wallThick), mikanMat)
  backWall.position.set(0, boxH / 2, -boxD / 2 + wallThick / 2)
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(wallThick, boxH, boxD - wallThick * 2), mikanMat)
  leftWall.position.set(-boxW / 2 + wallThick / 2, boxH / 2, 0)
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(wallThick, boxH, boxD - wallThick * 2), mikanMat)
  rightWall.position.set(boxW / 2 - wallThick / 2, boxH / 2, 0)
  boxGroup.add(frontWall, backWall, leftWall, rightWall)

  // Folded flaps on top rim
  const flapLen = 0.08
  const frontFlap = new THREE.Mesh(new THREE.BoxGeometry(boxW, wallThick, flapLen), innerCardboardMat)
  frontFlap.position.set(0, boxH + 0.01, boxD / 2 + flapLen * 0.4)
  frontFlap.rotation.x = 0.45
  const backFlap = new THREE.Mesh(new THREE.BoxGeometry(boxW, wallThick, flapLen), innerCardboardMat)
  backFlap.position.set(0, boxH + 0.01, -boxD / 2 - flapLen * 0.4)
  backFlap.rotation.x = -0.45
  const leftFlap = new THREE.Mesh(new THREE.BoxGeometry(flapLen, wallThick, boxD), innerCardboardMat)
  leftFlap.position.set(-boxW / 2 - flapLen * 0.4, boxH + 0.01, 0)
  leftFlap.rotation.z = -0.45
  const rightFlap = new THREE.Mesh(new THREE.BoxGeometry(flapLen, wallThick, boxD), innerCardboardMat)
  rightFlap.position.set(boxW / 2 + flapLen * 0.4, boxH + 0.01, 0)
  rightFlap.rotation.z = 0.45
  boxGroup.add(frontFlap, backFlap, leftFlap, rightFlap)

  // Soft fleece cat cushion inside
  const blanketMat = new THREE.MeshStandardMaterial({ color: 0xfdf6e2, roughness: 0.95 })
  const blanket = new THREE.Mesh(new THREE.BoxGeometry(boxW - 0.06, 0.08, boxD - 0.06), blanketMat)
  blanket.position.set(0, 0.05, 0)
  boxGroup.add(blanket)

  alleyCatGroup.add(boxGroup)

  // -------------------------------------------------------------
  // 2. Ceramic Dishes (Kibble Saucer & Water Bowl)
  // -------------------------------------------------------------
  const saucerMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 })
  // Kibble saucer
  const kibbleSaucer = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.035, 16), saucerMat)
  kibbleSaucer.position.set(-0.42, 0.018, 0.06)
  const kibbleMat = new THREE.MeshStandardMaterial({ color: 0x6d4323, roughness: 0.9 })
  const kibble = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.02, 12), kibbleMat)
  kibble.position.set(-0.42, 0.032, 0.06)
  alleyCatGroup.add(kibbleSaucer, kibble)

  // Water bowl
  const waterBowlMat = new THREE.MeshStandardMaterial({ color: 0xe0f2fe, roughness: 0.25 })
  const waterBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.045, 16), waterBowlMat)
  waterBowl.position.set(-0.42, 0.0225, -0.16)
  const waterSurface = new THREE.Mesh(
    new THREE.CircleGeometry(0.08, 16),
    new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.4,
      transparent: true,
      opacity: 0.85,
    }),
  )
  waterSurface.rotation.x = -Math.PI / 2
  waterSurface.position.set(-0.42, 0.04, -0.16)
  alleyCatGroup.add(waterBowl, waterSurface)

  // Cardboard scratch pad on other side
  const scratchPadMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.9 })
  const scratchPad = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.035, 0.32), scratchPadMat)
  scratchPad.position.set(0.38, 0.018, 0)
  alleyCatGroup.add(scratchPad)

  // -------------------------------------------------------------
  // 3. Kitten Model (Kuro-chan - 黒猫)
  // -------------------------------------------------------------
  const cat = new THREE.Group()
  cat.position.set(0, 0.08, 0)

  const furMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.82 })
  const whiteBibMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.85 })
  const pinkMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.5 })

  // Body (loafing torso)
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), furMat)
  body.scale.set(0.95, 0.76, 1.25)
  body.position.set(0, 0.1, -0.02)
  cat.add(body)

  // White chest patch (bib)
  const bib = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), whiteBibMat)
  bib.scale.set(0.72, 0.72, 0.35)
  bib.position.set(0, 0.11, 0.11)
  cat.add(bib)

  // Front paws (white mittens tucked under loaf)
  const mittenGeo = new THREE.SphereGeometry(0.038, 10, 8)
  mittenGeo.scale(0.85, 0.55, 1.25)

  const leftPaw = new THREE.Mesh(mittenGeo, whiteBibMat)
  leftPaw.position.set(-0.065, 0.03, 0.12)
  const rightPaw = new THREE.Mesh(mittenGeo, whiteBibMat)
  rightPaw.position.set(0.065, 0.03, 0.12)
  cat.add(leftPaw, rightPaw)

  // Tiny pink toe beans (肉球) on front paws
  const beanGeo = new THREE.SphereGeometry(0.007, 6, 6)
  beanGeo.scale(1, 0.6, 1)
  for (const px of [-0.065, 0.065]) {
    for (let bi = -1; bi <= 1; bi++) {
      const bean = new THREE.Mesh(beanGeo, pinkMat)
      bean.position.set(px + bi * 0.012, 0.032, 0.16)
      cat.add(bean)
    }
  }

  // Red ribbon collar with shiny golden bell
  const collarMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 })
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.011, 6, 16), collarMat)
  collar.position.set(0, 0.17, 0.09)
  collar.rotation.x = 0.35
  cat.add(collar)

  const bellMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.85, roughness: 0.2 })
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 10), bellMat)
  bell.position.set(0, 0.14, 0.16)
  cat.add(bell)

  // -------------------------------------------------------------
  // Head Pivot (turns to look at player)
  // -------------------------------------------------------------
  const headPivot = new THREE.Group()
  headPivot.position.set(0, 0.22, 0.1)

  // Head sphere
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 14), furMat)
  head.scale.set(1.05, 0.95, 0.98)
  headPivot.add(head)

  // Cheeks / Muzzle (white accents)
  const cheekGeo = new THREE.SphereGeometry(0.036, 10, 8)
  const leftCheek = new THREE.Mesh(cheekGeo, whiteBibMat)
  leftCheek.position.set(-0.032, -0.026, 0.092)
  const rightCheek = new THREE.Mesh(cheekGeo, whiteBibMat)
  rightCheek.position.set(0.032, -0.026, 0.092)
  headPivot.add(leftCheek, rightCheek)

  // Tiny pink nose triangle
  const noseGeo = new THREE.ConeGeometry(0.013, 0.014, 3)
  noseGeo.rotateZ(Math.PI)
  const nose = new THREE.Mesh(noseGeo, pinkMat)
  nose.position.set(0, -0.014, 0.118)
  headPivot.add(nose)

  // Whiskers (fine white nylon whiskers)
  const whiskerMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const whiskerGeo = new THREE.CylinderGeometry(0.0015, 0.0015, 0.11, 4)
  whiskerGeo.rotateZ(Math.PI / 2)
  for (const side of [-1, 1]) {
    for (let wi = -1; wi <= 1; wi++) {
      const whisker = new THREE.Mesh(whiskerGeo, whiskerMat)
      whisker.position.set(side * 0.075, -0.024 + wi * 0.009, 0.095)
      whisker.rotation.z = side * (0.15 + wi * 0.18)
      whisker.rotation.y = side * 0.35
      headPivot.add(whisker)
    }
  }

  // Ears on twitch pivots
  const leftEarPivot = new THREE.Group()
  leftEarPivot.position.set(-0.065, 0.085, 0.01)
  const rightEarPivot = new THREE.Group()
  rightEarPivot.position.set(0.065, 0.085, 0.01)

  const earOuterMat = furMat
  const earInnerMat = new THREE.MeshStandardMaterial({ color: 0xf9a8d4, roughness: 0.65 })
  const earOuterGeo = new THREE.ConeGeometry(0.038, 0.078, 4)
  const earInnerGeo = new THREE.ConeGeometry(0.026, 0.056, 4)

  const leftEarOuter = new THREE.Mesh(earOuterGeo, earOuterMat)
  leftEarOuter.rotation.y = Math.PI / 4
  const leftEarInner = new THREE.Mesh(earInnerGeo, earInnerMat)
  leftEarInner.rotation.y = Math.PI / 4
  leftEarInner.position.set(0, -0.004, 0.008)
  leftEarPivot.add(leftEarOuter, leftEarInner)

  const rightEarOuter = new THREE.Mesh(earOuterGeo, earOuterMat)
  rightEarOuter.rotation.y = -Math.PI / 4
  const rightEarInner = new THREE.Mesh(earInnerGeo, earInnerMat)
  rightEarInner.rotation.y = -Math.PI / 4
  rightEarInner.position.set(0, -0.004, 0.008)
  rightEarPivot.add(rightEarOuter, rightEarInner)

  headPivot.add(leftEarPivot, rightEarPivot)

  // Eyes (Expressive Emerald-Green Anime Eyes)
  const eyeIrisMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    roughness: 0.2,
    emissive: 0x059669,
    emissiveIntensity: 0.45,
  })
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
  const catchlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff })

  const eyeGroups: THREE.Group[] = []
  const eyelidMeshes: THREE.Mesh[] = []

  for (const ex of [-0.044, 0.044]) {
    const eyeGroup = new THREE.Group()
    eyeGroup.position.set(ex, 0.016, 0.098)

    // Green Iris
    const iris = new THREE.Mesh(new THREE.SphereGeometry(0.024, 12, 10), eyeIrisMat)
    eyeGroup.add(iris)

    // Vertical slit pupil
    const pupil = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.032, 0.005), pupilMat)
    pupil.position.set(0, 0, 0.022)
    eyeGroup.add(pupil)

    // Specular catchlights (glint)
    const glint1 = new THREE.Mesh(new THREE.SphereGeometry(0.005, 6, 6), catchlightMat)
    glint1.position.set(-0.007, 0.008, 0.023)
    const glint2 = new THREE.Mesh(new THREE.SphereGeometry(0.0028, 6, 6), catchlightMat)
    glint2.position.set(0.005, -0.006, 0.023)
    eyeGroup.add(glint1, glint2)

    // Eyelid for blinking
    const eyelidGeo = new THREE.SphereGeometry(0.026, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.52)
    const eyelid = new THREE.Mesh(eyelidGeo, furMat)
    eyelid.rotation.x = Math.PI / 2
    eyelid.position.set(0, 0.004, 0)
    eyelid.scale.set(1.02, 0.01, 1.02) // Open by default
    eyeGroup.add(eyelid)
    eyelidMeshes.push(eyelid)

    headPivot.add(eyeGroup)
    eyeGroups.push(eyeGroup)
  }

  cat.add(headPivot)

  // -------------------------------------------------------------
  // Tail (Sinuous multi-joint curled tail)
  // -------------------------------------------------------------
  const tailBase = new THREE.Group()
  tailBase.position.set(0, 0.12, -0.16)

  const tailMat = furMat
  const tailSegGeo = new THREE.CylinderGeometry(0.022, 0.026, 0.11, 8)
  tailSegGeo.translate(0, 0.055, 0)

  const seg1 = new THREE.Mesh(tailSegGeo, tailMat)
  seg1.rotation.x = -0.7
  tailBase.add(seg1)

  const tailMid = new THREE.Group()
  tailMid.position.set(0, 0.09, -0.065)
  const seg2Geo = new THREE.CylinderGeometry(0.018, 0.022, 0.11, 8)
  seg2Geo.translate(0, 0.055, 0)
  const seg2 = new THREE.Mesh(seg2Geo, tailMat)
  seg2.rotation.x = 0.5
  tailMid.add(seg2)

  const tailTip = new THREE.Group()
  tailTip.position.set(0, 0.09, 0.055)
  // White tip on tail!
  const seg3Geo = new THREE.CylinderGeometry(0.012, 0.018, 0.1, 8)
  seg3Geo.translate(0, 0.05, 0)
  const seg3 = new THREE.Mesh(seg3Geo, whiteBibMat)
  seg3.rotation.x = 0.8
  tailTip.add(seg3)

  tailMid.add(tailTip)
  tailBase.add(tailMid)
  cat.add(tailBase)

  alleyCatGroup.add(cat)

  // -------------------------------------------------------------
  // Floating Hearts Particle Effect on Petting
  // -------------------------------------------------------------
  const heartShape = new THREE.Shape()
  heartShape.moveTo(0.025, 0.025)
  heartShape.bezierCurveTo(0.025, 0.025, 0.02, 0, 0, 0)
  heartShape.bezierCurveTo(-0.03, 0, -0.03, 0.035, -0.03, 0.035)
  heartShape.bezierCurveTo(-0.03, 0.055, -0.01, 0.077, 0.025, 0.1)
  heartShape.bezierCurveTo(0.06, 0.077, 0.08, 0.055, 0.08, 0.035)
  heartShape.bezierCurveTo(0.08, 0.035, 0.08, 0, 0.05, 0)
  heartShape.bezierCurveTo(0.035, 0, 0.025, 0.025, 0.025, 0.025)
  const heartGeo = new THREE.ShapeGeometry(heartShape)
  heartGeo.scale(0.8, -0.8, 0.8)

  const heartMat = new THREE.MeshBasicMaterial({
    color: 0xf43f5e,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  })

  const hearts: { mesh: THREE.Mesh; vy: number; life: number; maxLife: number; baseX: number; baseZ: number }[] = []
  for (let i = 0; i < 3; i++) {
    const hm = new THREE.Mesh(heartGeo, heartMat.clone())
    hm.visible = false
    alleyCatGroup.add(hm)
    hearts.push({
      mesh: hm,
      vy: 0.35 + i * 0.08,
      life: 0,
      maxLife: 1.6,
      baseX: (i - 1) * 0.12,
      baseZ: (i % 2 === 0 ? 0.08 : -0.08),
    })
  }

  const triggerHearts = () => {
    hearts.forEach((h, idx) => {
      h.life = h.maxLife
      h.mesh.visible = true
      h.mesh.position.set(h.baseX, 0.38 + idx * 0.05, h.baseZ)
      const m = h.mesh.material as THREE.MeshBasicMaterial
      m.opacity = 1
    })
  }

  group.add(alleyCatGroup)

  // -------------------------------------------------------------
  // Interaction & Petting Dialogue
  // -------------------------------------------------------------
  let petCount = 0
  let petReactionTimer = 0

  const petResponses = [
    'Kuro-chan (クロちゃん) leans gently into your hand, closes its emerald eyes, and lets out a warm, rumbling purr: "Nyaaa~~ ฅ(≈>ܫ<≈)ฅ"',
    'You scratch Kuro-chan under its chin! The tiny brass bell tinkles softly as it purrs: "*Purrrrrr... Purrrrrr...*"',
    'Kuro-chan rolls slightly onto its side on the warm fleece blanket, happily kneading its little white paws: "Mew! <3"',
    'Kuro-chan nudges its nose against your fingers, completely relaxed in its Ehime Mikan box: "Purr-purr... Nyaa~"',
  ]

  interactions.add({
    id: 'stray-cat',
    x: catX,
    z: catZ,
    radius: 2.0,
    prompt: 'Pet Kuro-chan the Alley Kitten [クロちゃんを撫でる]',
    onInteract: () => {
      petReactionTimer = 2.4
      triggerHearts()

      if (audio) {
        audio.playCatMeow()
        setTimeout(() => {
          if (audio) audio.playCatPurr()
        }, 320)
      }

      const msg = petResponses[petCount % petResponses.length]
      petCount++
      messages.show(msg)
    },
  })

  // -------------------------------------------------------------
  // Update Animation Loop
  // -------------------------------------------------------------
  let time = 0
  let blinkTimer = 2.5
  let isBlinking = false
  let blinkProgress = 0
  let earTwitchTimer = 4.0
  let earTwitchProgress = 0

  const update = (dt: number): void => {
    time += dt

    // 1. Torso Breathing Animation
    body.scale.y = 0.76 + Math.sin(time * 2.2) * 0.024
    body.position.y = 0.1 + Math.sin(time * 2.2) * 0.003

    // 2. Gentle Sinuous Tail Wave
    tailBase.rotation.y = Math.sin(time * 1.8) * 0.22
    tailMid.rotation.y = Math.sin(time * 1.8 - 0.4) * 0.26
    tailTip.rotation.y = Math.sin(time * 1.8 - 0.8) * 0.32

    // 3. Eye Blinking Logic
    blinkTimer -= dt
    if (blinkTimer <= 0 && !isBlinking) {
      isBlinking = true
      blinkProgress = 0
    }
    if (isBlinking) {
      blinkProgress += dt * 8.0 // Quick blink (~0.12s)
      if (blinkProgress >= Math.PI) {
        isBlinking = false
        blinkTimer = 3.0 + Math.random() * 4.0
        eyelidMeshes.forEach((el) => el.scale.set(1.02, 0.01, 1.02))
      } else {
        const lidClose = Math.sin(blinkProgress) * 0.98 + 0.01
        eyelidMeshes.forEach((el) => el.scale.set(1.02, lidClose, 1.02))
      }
    }

    // 4. Ear Twitch Logic
    earTwitchTimer -= dt
    if (earTwitchTimer <= 0 && earTwitchProgress <= 0) {
      earTwitchProgress = Math.PI * 2
      earTwitchTimer = 3.5 + Math.random() * 5.0
    }
    if (earTwitchProgress > 0) {
      earTwitchProgress -= dt * 14.0
      const tw = Math.sin(earTwitchProgress) * 0.22
      leftEarPivot.rotation.z = Math.max(0, tw)
      rightEarPivot.rotation.z = Math.min(0, -tw * 0.7)
    } else {
      leftEarPivot.rotation.z = 0
      rightEarPivot.rotation.z = 0
    }

    // 5. Petting State & Player Head Tracking
    if (petReactionTimer > 0) {
      petReactionTimer -= dt
      // Cat leans head back happily, closing eyes into soft contented slits
      headPivot.rotation.x = -0.22
      headPivot.rotation.z = 0.06 * Math.sin(time * 3)
      eyelidMeshes.forEach((el) => el.scale.set(1.02, 0.85, 1.02))
    } else {
      headPivot.rotation.x = 0

      // Head Tracking Player
      if (player) {
        const dx = player.x - catX
        const dz = player.z - catZ
        const dist = Math.hypot(dx, dz)
        if (dist < 4.2) {
          // Desired yaw towards player
          const targetYaw = Math.atan2(dx, dz)
          // Clamp tracking angle so kitten doesn't turn head backwards
          const clampedYaw = Math.max(-1.3, Math.min(1.3, targetYaw))
          headPivot.rotation.y = THREE.MathUtils.lerp(headPivot.rotation.y, clampedYaw, dt * 3.5)
          // Inquisitive head tilt when player is very close
          headPivot.rotation.z = Math.sin(time * 1.5) * 0.06
        } else {
          headPivot.rotation.y = THREE.MathUtils.lerp(headPivot.rotation.y, 0, dt * 2.0)
          headPivot.rotation.z = THREE.MathUtils.lerp(headPivot.rotation.z, 0, dt * 2.0)
        }
      }
    }

    // 6. Floating Hearts Animation
    for (const h of hearts) {
      if (h.life > 0) {
        h.life -= dt
        h.mesh.position.y += h.vy * dt
        h.mesh.position.x = h.baseX + Math.sin(h.life * 4.0) * 0.03
        const frac = h.life / h.maxLife
        const m = h.mesh.material as THREE.MeshBasicMaterial
        m.opacity = Math.max(0, Math.min(1, frac * 1.5))
        if (h.life <= 0) h.mesh.visible = false
      }
    }
  }

  return { update }
}

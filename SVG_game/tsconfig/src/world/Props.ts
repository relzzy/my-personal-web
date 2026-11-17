import * as THREE from 'three'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'

// Subsystem builders
import {
  buildUtilityPole,
  buildOverheadCables,
  buildBicycle,
  buildKeiCar,
  buildConvexMirror,
  buildCrossingSignals,
} from './props/StreetInfrastructure'
import {
  buildVendingMachine,
  buildRecycleCanReceptacle,
} from './props/VendingMachines'
import { buildParkProps } from './props/ParkProps'
import {
  buildPottedPlant,
  buildGardenAccessories,
  buildTrashStation,
  buildAlleyWallLamp,
  buildStrayCat,
} from './props/StreetFurniture'

// Re-export all prop subsystems for backward compatibility
export * from './props'

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

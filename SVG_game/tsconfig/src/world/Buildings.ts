import * as THREE from 'three'
import { NEIGHBORHOOD_BUILDINGS } from './Layout'
import { CollisionWorld } from '../game/Collision'
import { InteractionSystem } from '../game/Interaction'
import { MessageBus } from '../game/Messages'
import type { Player } from '../game/Player'
import { buildSuite402 } from './Suite402'
import { buildCorridor4F, type Corridor4FResult } from './Corridor4F'
import type { AudioManager } from './Audio'
import type { LightManager } from './LightManager'

// Subsystem builders
import { buildApartmentLobby } from './buildings/ApartmentLobby'
import { buildKonbiniStore } from './buildings/KonbiniStore'
import { buildRamenShop } from './buildings/RamenShop'
import { buildStandardStorefront } from './buildings/Storefronts'
import {
  addUpperWindowsAndBalconies,
  buildRoofEquipment,
  buildDownspoutsAndPipes,
} from './buildings/BuildingEquipment'

// Re-export all building submodules for backward compatibility
export * from './buildings'

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

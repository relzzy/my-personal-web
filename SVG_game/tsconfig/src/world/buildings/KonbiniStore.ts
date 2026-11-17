import * as THREE from 'three'
import type { BuildingSpec } from '../../types'
import { CollisionWorld } from '../../game/Collision'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import { Settings } from '../../game/Settings'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
  konbiniCounterFrontTexture,
  konbiniWallTexture,
  konbiniCoolerDoorsTexture,
  hotSnacksDisplayTexture,
  tileMat,
  metalMat,
  shopGlassMat,
  signMaterial,
  lampMat,
} from '../Materials'

export function buildKonbiniStore(
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

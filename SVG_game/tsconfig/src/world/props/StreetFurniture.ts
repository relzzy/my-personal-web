import * as THREE from 'three'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import type { Player } from '../../game/Player'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
  leavesMat,
  metalMat,
  postMat,
  lampMat,
  mikanBoxTexture,
  tokyoTrashNoticeTexture,
  crowNetTexture,
} from '../Materials'

export function buildPottedPlant(x: number, z: number, type: string): THREE.Group {
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

export function buildGardenAccessories(x: number, z: number): THREE.Group {
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


export function buildTrashStation(x: number, z: number): THREE.Group {
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


export function buildAlleyWallLamp(
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


export function buildStrayCat(
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

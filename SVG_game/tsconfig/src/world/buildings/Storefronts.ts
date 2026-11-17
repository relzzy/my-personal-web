import * as THREE from 'three'
import type { BuildingSpec } from '../../types'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
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
  shopGlassMat,
  postMat,
  metalMat,
  } from '../Materials'

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
export function buildStandardStorefront(
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

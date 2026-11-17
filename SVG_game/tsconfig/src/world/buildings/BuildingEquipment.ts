import * as THREE from 'three'
import type { BuildingSpec, FaceId } from '../../types'
import { metalMat, acMat, postMat } from '../Materials'

export function addUpperWindowsAndBalconies(
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

export function buildDownspoutsAndPipes(group: THREE.Group, spec: BuildingSpec, totalH: number): void {
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
export function buildRoofEquipment(
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

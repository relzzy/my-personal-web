import * as THREE from 'three'
import {
  asphaltMat,
  walkMat,
  alleyMat,
  parkMat,
  pathMat,
  parkGrassMat,
  lineMat,
  yellowMat,
  postMat,
  manholeTexture,
} from './Materials'
import { CollisionWorld } from '../game/Collision'

export function buildStreets(scene: THREE.Scene, colliders: CollisionWorld): THREE.Group {
  const group = new THREE.Group()
  group.name = 'streets_and_terrain'

  // 1. ASPHALT ROADS
  const roadGeometries: THREE.BufferGeometry[] = []

  // Main Street: X [-55, 55], Z [-3.5, 3.5]
  const mainRoad = new THREE.PlaneGeometry(110, 7)
  mainRoad.rotateX(-Math.PI / 2)
  mainRoad.translate(0, 0.002, 0)
  roadGeometries.push(mainRoad)

  // North Street: X [13.5, 18.5], Z [3.5, 42]
  const northRoad = new THREE.PlaneGeometry(5, 38.5)
  northRoad.rotateX(-Math.PI / 2)
  northRoad.translate(16, 0.002, 22.75)
  roadGeometries.push(northRoad)

  // South Street: X [-16.5, -11.5], Z [-42, -3.5]
  const southRoad = new THREE.PlaneGeometry(5, 38.5)
  southRoad.rotateX(-Math.PI / 2)
  southRoad.translate(-14, 0.002, -22.75)
  roadGeometries.push(southRoad)

  for (const g of roadGeometries) {
    const mesh = new THREE.Mesh(g, asphaltMat)
    mesh.receiveShadow = true
    group.add(mesh)
  }

  // 2. SIDEWALKS (Y = 0.15)
  const sidewalkParts: { w: number; d: number; x: number; z: number }[] = [
    // Main St North Sidewalk (West of North St)
    { w: 68.5, d: 4, x: -20.75, z: 5.5 },
    // Main St North Sidewalk (East of North St)
    { w: 33.5, d: 4, x: 35.25, z: 5.5 },
    // Apartment entrance approach plaza
    { w: 10, d: 6, x: 0, z: 10.5 },

    // Main St South Sidewalk (West of South St)
    { w: 38.5, d: 4, x: -35.75, z: -5.5 },
    // Main St South Sidewalk (East of South St)
    { w: 63.5, d: 4, x: 20.25, z: -5.5 },

    // North St West Sidewalk
    { w: 3, d: 38.5, x: 12, z: 22.75 },
    // North St East Sidewalk
    { w: 3, d: 38.5, x: 20, z: 22.75 },

    // South St West Sidewalk
    { w: 3, d: 38.5, x: -18, z: -22.75 },
    // South St East Sidewalk
    { w: 3, d: 38.5, x: -10, z: -22.75 },
  ]

  for (const s of sidewalkParts) {
    const geo = new THREE.BoxGeometry(s.w, 0.15, s.d)
    const mesh = new THREE.Mesh(geo, walkMat)
    mesh.position.set(s.x, 0.075, s.z)
    mesh.receiveShadow = true
    group.add(mesh)
  }

  // 3. RESIDENTIAL ALLEYWAY (Y = 0.15)
  const alley1 = new THREE.BoxGeometry(9.5, 0.15, 3)
  const mAlley1 = new THREE.Mesh(alley1, alleyMat)
  mAlley1.position.set(8.75, 0.075, 21)
  mAlley1.receiveShadow = true
  group.add(mAlley1)

  const alley2 = new THREE.BoxGeometry(9, 0.15, 3)
  const mAlley2 = new THREE.Mesh(alley2, alleyMat)
  mAlley2.position.set(0, 0.075, 23.5)
  mAlley2.receiveShadow = true
  group.add(mAlley2)

  // 4. POCKET PARK (Sakura Park: X [-8.5, 9.5], Z [-36.5, -7.5])
  // Base earthen clay/gravel ground (真砂土)
  const parkGeo = new THREE.BoxGeometry(18, 0.15, 29)
  const parkMesh = new THREE.Mesh(parkGeo, parkMat)
  parkMesh.position.set(0.5, 0.075, -22)
  parkMesh.receiveShadow = true
  group.add(parkMesh)

  // Paved interlocking brick plazas and walkways (Y = 0.158)
  const pavedSections = [
    // North Entrance Plaza (seamless connection to Main Street sidewalk at Z = -7.5)
    { x: 0.0, z: -9.5, w: 5.6, d: 4.0 },
    // West Entrance Apron (connecting to South Street sidewalk at X = -8.5)
    { x: -7.2, z: -22.0, w: 2.8, d: 3.6 },
    // Central Social Plaza (around seating, fountain, and lantern)
    { x: 0.0, z: -21.5, w: 6.2, d: 5.8 },
    // North-South connecting promenade (North entrance to Central plaza)
    { x: 0.0, z: -15.0, w: 3.2, d: 7.2 },
    // West cross-walkway (Central plaza to West entrance)
    { x: -4.2, z: -22.0, w: 3.4, d: 2.6 },
    // South walkway (Central plaza down toward Playground & Restroom)
    { x: 1.0, z: -27.5, w: 3.0, d: 6.5 },
    // Restroom approach plaza (South-East corner)
    { x: 6.0, z: -32.0, w: 4.5, d: 3.8 },
  ]
  for (const p of pavedSections) {
    const pGeo = new THREE.BoxGeometry(p.w, 0.012, p.d)
    const pMesh = new THREE.Mesh(pGeo, pathMat)
    pMesh.position.set(p.x, 0.156, p.z)
    pMesh.receiveShadow = true
    group.add(pMesh)
  }

  // Raised Grass Lawn Mounds (芝生マウンド) with low granite curbs
  const lawnMounds = [
    // East Grand Sakura Lawn Island
    { x: 5.2, z: -16.0, w: 5.8, d: 7.2 },
    // West Green Maple & Pine Lawn Island
    { x: -5.0, z: -14.5, w: 4.8, d: 6.2 },
    // South Greenery Buffer Lawn
    { x: -3.5, z: -33.2, w: 7.4, d: 4.2 },
  ]
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x5a6068, roughness: 0.9 })
  for (const lm of lawnMounds) {
    // Low stone curb
    const curbGeo = new THREE.BoxGeometry(lm.w + 0.3, 0.06, lm.d + 0.3)
    const curb = new THREE.Mesh(curbGeo, curbMat)
    curb.position.set(lm.x, 0.17, lm.z)
    curb.receiveShadow = true
    group.add(curb)

    // Lush grass top
    const lawnGeo = new THREE.BoxGeometry(lm.w, 0.065, lm.d)
    const lawn = new THREE.Mesh(lawnGeo, parkGrassMat)
    lawn.position.set(lm.x, 0.18, lm.z)
    lawn.receiveShadow = true
    group.add(lawn)
  }

  // 5. CURBS & TACTILE PAVING
  buildCurbsAndMarkings(group)

  // 6. PERIMETER BOUNDARY COLLIDERS
  // Prevent player from walking off the edge of the playable Tokyo map
  colliders.add({ minX: -55, minY: 0, minZ: -45, maxX: 55, maxY: 10, maxZ: -41.5 })
  colliders.add({ minX: -55, minY: 0, minZ: 41.5, maxX: 55, maxY: 10, maxZ: 45 })
  colliders.add({ minX: -55, minY: 0, minZ: -45, maxX: -51.5, maxY: 10, maxZ: 45 })
  colliders.add({ minX: 51.5, minY: 0, minZ: -45, maxX: 55, maxY: 10, maxZ: 45 })

  // Boundary road fences / end barricades
  addEndBarricade(group, -51, 0, 0, false)
  addEndBarricade(group, 51, 0, 0, false)
  addEndBarricade(group, 16, 0, 40, true)
  addEndBarricade(group, -14, 0, -40, true)

  scene.add(group)
  return group
}

function buildCurbsAndMarkings(group: THREE.Group): void {
  // Road Zebra Crosswalks
  const crosswalks = [
    // Main St crosswalk at North intersection
    { x: 16, z: 0, w: 4.2, d: 6.8, rotY: 0 },
    // Main St crosswalk at South intersection
    { x: -14, z: 0, w: 4.2, d: 6.8, rotY: 0 },
    // Main St crosswalk near apartment
    { x: 0, z: 0, w: 3.6, d: 6.8, rotY: 0 },
    // North St entrance crosswalk
    { x: 16, z: 5.5, w: 4.8, d: 3.2, rotY: Math.PI / 2 },
    // South St entrance crosswalk
    { x: -14, z: -5.5, w: 4.8, d: 3.2, rotY: Math.PI / 2 },
  ]

  for (const cw of crosswalks) {
    const stripes = 8
    const stripeWidth = cw.rotY === 0 ? cw.w / (stripes * 2 - 1) : cw.d / (stripes * 2 - 1)
    const stripeLen = cw.rotY === 0 ? cw.d : cw.w

    for (let i = 0; i < stripes; i++) {
      const g = new THREE.PlaneGeometry(
        cw.rotY === 0 ? stripeWidth : stripeLen,
        cw.rotY === 0 ? stripeLen : stripeWidth,
      )
      g.rotateX(-Math.PI / 2)
      const m = new THREE.Mesh(g, lineMat)
      if (cw.rotY === 0) {
        const offset = -cw.w / 2 + i * stripeWidth * 2 + stripeWidth / 2
        m.position.set(cw.x + offset, 0.005, cw.z)
      } else {
        const offset = -cw.d / 2 + i * stripeWidth * 2 + stripeWidth / 2
        m.position.set(cw.x, 0.005, cw.z + offset)
      }
      group.add(m)
    }
  }

  // Dashed Center Line along Main Street
  const dashLen = 2.4
  const gapLen = 2.4
  for (let x = -50; x <= 50; x += dashLen + gapLen) {
    // Skip crosswalk areas
    if (Math.abs(x - 16) < 3.5 || Math.abs(x - (-14)) < 3.5 || Math.abs(x) < 2.5) continue
    const dash = new THREE.PlaneGeometry(dashLen, 0.18)
    dash.rotateX(-Math.PI / 2)
    const m = new THREE.Mesh(dash, lineMat)
    m.position.set(x + dashLen / 2, 0.004, 0)
    group.add(m)
  }

  // Solid shoulder white lines on Main Street (Z = -3.2 and Z = 3.2)
  const shoulderLines = [
    { z: -3.2, x1: -52, x2: -17 },
    { z: -3.2, x1: -11, x2: 52 },
    { z: 3.2, x1: -52, x2: 13 },
    { z: 3.2, x1: 19, x2: 52 },
  ]
  for (const sl of shoulderLines) {
    const len = sl.x2 - sl.x1
    const p = new THREE.PlaneGeometry(len, 0.15)
    p.rotateX(-Math.PI / 2)
    const m = new THREE.Mesh(p, lineMat)
    m.position.set(sl.x1 + len / 2, 0.004, sl.z)
    group.add(m)
  }

  // Tactile Yellow Braille blocks at crosswalk sidewalk edges
  const tactileLocations = [
    { x: 16, z: 3.6, w: 4.0, d: 0.6 },
    { x: 16, z: -3.6, w: 4.0, d: 0.6 },
    { x: -14, z: 3.6, w: 4.0, d: 0.6 },
    { x: -14, z: -3.6, w: 4.0, d: 0.6 },
    { x: 0, z: 3.6, w: 3.6, d: 0.6 },
    { x: 0, z: -3.6, w: 3.6, d: 0.6 },
    { x: 13.6, z: 5.5, w: 0.6, d: 3.0 },
    { x: 18.4, z: 5.5, w: 0.6, d: 3.0 },
  ]
  for (const tl of tactileLocations) {
    const geo = new THREE.BoxGeometry(tl.w, 0.015, tl.d)
    const mesh = new THREE.Mesh(geo, yellowMat)
    mesh.position.set(tl.x, 0.155, tl.z)
    mesh.receiveShadow = true
    group.add(mesh)
  }

  // Japanese "止まれ" (Stop) triangles / road text near intersections
  addStopMarking(group, 16, 7.5, Math.PI)
  addStopMarking(group, -14, -7.5, 0)

  // Tokyo cast-iron sakura manholes & gutter drain grates
  buildManholesAndDrains(group)
}

function buildManholesAndDrains(group: THREE.Group): void {
  const mhMat = new THREE.MeshStandardMaterial({
    map: manholeTexture(),
    roughness: 0.55,
    metalness: 0.8,
  })

  const manholes = [
    { x: -6, z: 1.2 },
    { x: 16, z: 14 },
    { x: -14, z: -14 },
    { x: 28, z: -1.2 },
    { x: -30, z: 1.4 },
  ]
  const mhGeo = new THREE.CircleGeometry(0.44, 24)
  mhGeo.rotateX(-Math.PI / 2)

  for (const mh of manholes) {
    const m = new THREE.Mesh(mhGeo, mhMat)
    m.position.set(mh.x, 0.005, mh.z)
    m.receiveShadow = true
    group.add(m)
  }

  // Curb gutter drainage slotted grates along road edges
  const drainGeo = new THREE.PlaneGeometry(0.4, 0.9)
  drainGeo.rotateX(-Math.PI / 2)
  const drainMat = new THREE.MeshStandardMaterial({
    color: 0x22262c,
    roughness: 0.4,
    metalness: 0.85,
  })

  const drains = [
    { x: -22, z: 3.25 },
    { x: -8, z: 3.25 },
    { x: 8, z: 3.25 },
    { x: 26, z: 3.25 },
    { x: -22, z: -3.25 },
    { x: -8, z: -3.25 },
    { x: 8, z: -3.25 },
    { x: 26, z: -3.25 },
    { x: 13.75, z: 12 },
    { x: 18.25, z: 12 },
    { x: 13.75, z: 28 },
    { x: 18.25, z: 28 },
  ]
  for (const d of drains) {
    const dm = new THREE.Mesh(drainGeo, drainMat)
    dm.position.set(d.x, 0.005, d.z)
    group.add(dm)
  }
}

function addStopMarking(group: THREE.Group, x: number, z: number, angle: number): void {
  // Road stop line
  const barGeo = new THREE.PlaneGeometry(3.6, 0.45)
  barGeo.rotateX(-Math.PI / 2)
  barGeo.rotateY(angle)
  const bar = new THREE.Mesh(barGeo, lineMat)
  bar.position.set(x, 0.006, z)
  group.add(bar)

  // Inverted stop triangle
  const triGeo = new THREE.BufferGeometry()
  const vertices = new Float32Array([
    -0.9, 0.006, -0.6,
    0.9, 0.006, -0.6,
    0.0, 0.006, 1.2,
  ])
  triGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  triGeo.computeVertexNormals()
  const tri = new THREE.Mesh(triGeo, lineMat)
  tri.position.set(x, 0, z + (angle === 0 ? -1.8 : 1.8))
  if (angle !== 0) tri.rotateY(angle)
  group.add(tri)
}

function addEndBarricade(group: THREE.Group, x: number, y: number, z: number, rotated: boolean): void {
  const barricade = new THREE.Group()
  const postGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.1, 8)
  const barGeo = new THREE.BoxGeometry(4.8, 0.18, 0.06)

  // Posts
  const p1 = new THREE.Mesh(postGeo, postMat)
  p1.position.set(-2.2, 0.55, 0)
  const p2 = new THREE.Mesh(postGeo, postMat)
  p2.position.set(2.2, 0.55, 0)
  barricade.add(p1, p2)

  // Rails with yellow/black hazard striping or red/white
  const rail1 = new THREE.Mesh(barGeo, yellowMat)
  rail1.position.set(0, 0.8, 0)
  const rail2 = new THREE.Mesh(barGeo, yellowMat)
  rail2.position.set(0, 0.45, 0)
  barricade.add(rail1, rail2)

  barricade.position.set(x, y, z)
  if (rotated) barricade.rotateY(Math.PI / 2)
  group.add(barricade)
}

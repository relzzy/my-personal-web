import * as THREE from 'three'
import {
  tokyoPanoramicSkylineTexture,
  tokyoStreetGroundTexture,
  midgroundWindowTexture,
  neighborBuildingTexture,
  SKYLINE_TEXTURE_URL,
} from '../materials/SkylineMaterials'

export interface TokyoSkylineResult {
  group: THREE.Group
  update: (dt: number) => void
  dispose: () => void
}

/**
 * 2.5D Parallax Diorama Tokyo Environment Architecture
 *
 * Architecture:
 * 1. Curved 360° Tokyo Skyline Backdrop (1 Draw Call)
 *    - Inverted THREE.CylinderGeometry (R = 420, H = 260, openEnded: true, BackSide)
 *    - Positioned from y = -45 to y = 215 (Center y = 85)
 *    - Unlit THREE.MeshBasicMaterial (fog: false) mapped with 4096x1024 Tokyo twilight skyline
 *    - Optional custom SKYLINE_TEXTURE_URL loader support
 * 2. Ground Plane & Street Level at y = -14 (1 Draw Call)
 *    - 1000 x 1000 PlaneGeometry with dark Tokyo asphalt & warm sodium streetlamp light pools
 * 3. Flanking Neighbor Buildings (Solves empty void when looking left/right)
 *    - 2 neighboring 7-story apartment buildings at cx - 19 and cx + 19 firmly planted at y = -14
 *    - Dark architectural concrete with horizontal balcony ledges and warm interior windows
 * 4. Mid-Ground Parallax Silhouettes (1 Draw Call)
 *    - 16 varied high-rises between radius 85 and 215 planted at y = -14 (H: 25 to 75)
 *    - Rendered via single THREE.InstancedMesh with shared emissive window grid texture
 *    - 4 slow-blinking red aviation obstruction beacons on tallest roofs
 * 5. Strict Zero-Shadow Exterior & Memory Lifecycle Management
 */
export function buildTokyoSkyline(cx = 0, cz = 85): TokyoSkylineResult {
  const skylineGroup = new THREE.Group()
  skylineGroup.name = 'panoramic-tokyo-environment'

  const animators: ((dt: number) => void)[] = []
  const disposables: { dispose: () => void }[] = []

  // Track disposables helper
  const track = <T extends { dispose: () => void }>(item: T): T => {
    disposables.push(item)
    return item
  }

  // =========================================================================
  // 1. CURVED 360° TOKYO SKYLINE BACKDROP (1 DRAW CALL)
  // =========================================================================
  const cylRadius = 420
  const cylHeight = 260
  const cylGeo = track(new THREE.CylinderGeometry(cylRadius, cylRadius, cylHeight, 64, 1, true))

  const panoTex = tokyoPanoramicSkylineTexture()
  const cylMat = track(
    new THREE.MeshBasicMaterial({
      map: panoTex,
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    }),
  )

  // Dynamic custom panorama loader if URL constant is configured
  if (SKYLINE_TEXTURE_URL) {
    const loader = new THREE.TextureLoader()
    loader.load(SKYLINE_TEXTURE_URL, (customTex) => {
      customTex.colorSpace = THREE.SRGBColorSpace
      customTex.wrapS = THREE.RepeatWrapping
      customTex.wrapT = THREE.ClampToEdgeWrapping
      cylMat.map = track(customTex)
      cylMat.needsUpdate = true
    })
  }

  const cylMesh = new THREE.Mesh(cylGeo, cylMat)
  // Vertically positioned from y = -45 to y = 215 -> Center Y = 85
  cylMesh.position.set(cx, 85, cz)
  cylMesh.castShadow = false
  cylMesh.receiveShadow = false
  skylineGroup.add(cylMesh)

  // =========================================================================
  // 2. GROUND PLANE & STREET LEVEL AT Y = -14 (1 DRAW CALL)
  // =========================================================================
  const groundGeo = track(new THREE.PlaneGeometry(1000, 1000))
  const streetTex = tokyoStreetGroundTexture()
  const groundMat = track(
    new THREE.MeshBasicMaterial({
      map: streetTex,
      fog: true, // Blends seamlessly into scene.fog (0x1a1f36)
    }),
  )
  const groundMesh = new THREE.Mesh(groundGeo, groundMat)
  groundMesh.rotation.x = -Math.PI / 2
  groundMesh.position.set(cx, -14, cz)
  groundMesh.castShadow = false
  groundMesh.receiveShadow = false
  skylineGroup.add(groundMesh)

  // =========================================================================
  // 3. FLANKING NEIGHBOR BUILDINGS (LEFT & RIGHT AT Y = -14)
  // =========================================================================
  const neighborTex = neighborBuildingTexture()
  const neighborWallMat = track(
    new THREE.MeshBasicMaterial({
      map: neighborTex,
      fog: true,
    }),
  )
  const neighborTrimMat = track(
    new THREE.MeshBasicMaterial({
      color: 0x121722,
      fog: true,
    }),
  )

  const nWidth = 16
  const nHeight = 24.5 // 7 stories (each 3.5m)
  const nDepth = 22
  const nBaseY = -14
  const nCenterY = nBaseY + nHeight / 2 // -1.75

  const leftNeighborX = cx - 19
  const rightNeighborX = cx + 19
  const neighborZ = cz - 2

  const createNeighborBuilding = (bx: number, isLeft: boolean) => {
    const bGrp = new THREE.Group()

    // Main 7-story structural volume
    const bodyGeo = track(new THREE.BoxGeometry(nWidth, nHeight, nDepth))
    const bodyMesh = new THREE.Mesh(bodyGeo, neighborWallMat)
    bodyMesh.castShadow = false
    bodyMesh.receiveShadow = false
    bGrp.add(bodyMesh)

    // Horizontal concrete balcony ledge reveals every floor
    const ledgeCount = 7
    const floorH = nHeight / ledgeCount
    const frontLedgeGeo = track(new THREE.BoxGeometry(nWidth + 0.3, 0.28, 1.2))
    const innerLedgeGeo = track(new THREE.BoxGeometry(1.2, 0.28, nDepth + 0.3))

    for (let f = 0; f < ledgeCount; f++) {
      const ly = -nHeight / 2 + (f + 1) * floorH

      // Street-facing front balcony slab
      const frontLedge = new THREE.Mesh(frontLedgeGeo, neighborTrimMat)
      frontLedge.position.set(0, ly, -nDepth / 2 - 0.55)
      frontLedge.castShadow = false
      frontLedge.receiveShadow = false

      // Alley-facing inner balcony slab
      const innerLedge = new THREE.Mesh(innerLedgeGeo, neighborTrimMat)
      innerLedge.position.set(isLeft ? nWidth / 2 + 0.55 : -nWidth / 2 - 0.55, ly, 0)
      innerLedge.castShadow = false
      innerLedge.receiveShadow = false

      bGrp.add(frontLedge, innerLedge)
    }

    // Rooftop parapet & mechanical penthouse
    const roofY = nHeight / 2
    const parapetGeo = track(new THREE.BoxGeometry(nWidth + 0.1, 0.75, nDepth + 0.1))
    const parapet = new THREE.Mesh(parapetGeo, neighborTrimMat)
    parapet.position.set(0, roofY + 0.375, 0)
    parapet.castShadow = false
    parapet.receiveShadow = false

    const penthouseGeo = track(new THREE.BoxGeometry(5.5, 2.2, 5.5))
    const penthouse = new THREE.Mesh(penthouseGeo, neighborTrimMat)
    penthouse.position.set(0, roofY + 1.1, 2.0)
    penthouse.castShadow = false
    penthouse.receiveShadow = false

    bGrp.add(parapet, penthouse)
    bGrp.position.set(bx, nCenterY, neighborZ)
    return bGrp
  }

  const leftNeighbor = createNeighborBuilding(leftNeighborX, true)
  const rightNeighbor = createNeighborBuilding(rightNeighborX, false)
  skylineGroup.add(leftNeighbor, rightNeighbor)

  // =========================================================================
  // 4. MID-GROUND PARALLAX SILHOUETTES (1 DRAW CALL VIA INSTANCED MESH)
  // =========================================================================
  const midCount = 16
  const unitBoxGeo = track(new THREE.BoxGeometry(1, 1, 1))
  const midTex = midgroundWindowTexture()
  const midMat = track(
    new THREE.MeshBasicMaterial({
      map: midTex,
      fog: true,
    }),
  )

  const instancedMesh = new THREE.InstancedMesh(unitBoxGeo, midMat, midCount)
  instancedMesh.castShadow = false
  instancedMesh.receiveShadow = false

  // Seeded deterministic placement for 16 mid-ground buildings
  // Radii: 85 to 215, Heights: 25 to 75, firmly planted at y = -14
  interface MidBuildingData {
    x: number
    y: number
    z: number
    w: number
    h: number
    d: number
  }

  const midBuildings: MidBuildingData[] = []
  let bSeed = 99
  const bRnd = () => {
    bSeed = (bSeed * 9301 + 49297) % 233280
    return bSeed / 233280
  }

  // Angular sectors:
  // Balcony faces North (-Z, angle PI).
  // Distribute 16 buildings across front & side horizon arcs:
  for (let i = 0; i < midCount; i++) {
    const angleFrac = (i / midCount) * 1.3 - 0.65 // -0.65 to +0.65
    const angle = Math.PI + angleFrac * Math.PI * 0.95 // Concentrated North (-Z) & flanking
    const r = 85 + bRnd() * 130 // R in [85, 215]
    const h = 26 + bRnd() * 48 // Heights between 26 and 74
    const w = 15 + bRnd() * 14
    const d = 15 + bRnd() * 14

    const bx = cx + Math.sin(angle) * r
    const bz = cz + Math.cos(angle) * r
    const by = -14 + h / 2

    midBuildings.push({ x: bx, y: by, z: bz, w, h, d })
  }

  const dummy = new THREE.Object3D()
  for (let i = 0; i < midCount; i++) {
    const b = midBuildings[i]
    dummy.position.set(b.x, b.y, b.z)
    dummy.scale.set(b.w, b.h, b.d)
    dummy.rotation.y = (b.x * 0.05) % Math.PI
    dummy.updateMatrix()
    instancedMesh.setMatrixAt(i, dummy.matrix)
  }
  instancedMesh.instanceMatrix.needsUpdate = true
  skylineGroup.add(instancedMesh)

  // 4 SLOW-BLINKING RED AVIATION OBSTRUCTION LIGHTS ON TALLEST ROOFS
  const tallest = [...midBuildings]
    .sort((a, b) => b.h - a.h)
    .slice(0, 4)

  const beaconGeo = track(new THREE.SphereGeometry(0.5, 6, 6))
  const beaconMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xff1122,
      fog: false,
    }),
  )

  for (const tb of tallest) {
    const beacon = new THREE.Mesh(beaconGeo, beaconMat)
    beacon.position.set(tb.x, -14 + tb.h + 0.6, tb.z)
    beacon.castShadow = false
    beacon.receiveShadow = false
    skylineGroup.add(beacon)
  }

  let beaconTime = 0
  animators.push((dt) => {
    beaconTime += dt
    // 0.8 Hz slow-blinking aviation pulse
    const pulse = (beaconTime % 1.25) < 0.65
    beaconMat.color.setHex(pulse ? 0xff2222 : 0x4a0a0a)
  })

  return {
    group: skylineGroup,
    update(dt: number) {
      for (const a of animators) a(dt)
    },
    dispose() {
      for (const d of disposables) {
        d.dispose()
      }
    },
  }
}

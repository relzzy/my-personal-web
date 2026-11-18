import * as THREE from 'three'
import {
  createSkySphereMaterial,
  tokyoWetAsphaltTexture,
} from '../materials/SkylineMaterials'

export interface TokyoSkylineResult {
  group: THREE.Group
  update: (dt: number) => void
  dispose: () => void
}

/**
 * Clean 2.5D Tokyo Parallax Diorama Environment
 *
 * 1. Full-Sphere Sky Dome: THREE.SphereGeometry(600, 64, 32) with smooth vertical night sky shader
 *    (Zenith #05070e, Mid-sky #0f1526, Horizon #1f1930 to #2b1d38) + seamless 2D panorama support.
 * 2. Solid Dark Wet-Asphalt Ground Plane at y = -18 (balconyY - 18) with soft warm/cyan light pools.
 * 3. Two Framing Neighbor Buildings (18m left and right) with subtle warm horizontal balcony strip lights.
 * 4. 20 Sleek Dark Monolithic Skyscraper Silhouettes (#070a12) with minimal neon edge strips,
 *    glowing rooftop crown bands, stylized Tokyo Tower silhouette, and blinking red aviation beacons.
 * 5. Full memory disposal & zero shadow overhead.
 */
export function buildTokyoSkyline(cx = 0, cz = 85): TokyoSkylineResult {
  const skylineGroup = new THREE.Group()
  skylineGroup.name = 'panoramic-tokyo-environment'

  const animators: ((dt: number) => void)[] = []
  const disposables: { dispose: () => void }[] = []

  const track = <T extends { dispose: () => void }>(item: T): T => {
    disposables.push(item)
    return item
  }

  // =========================================================================
  // 1. FULL-SPHERE SKY DOME (R = 600m, ZERO CUTOFF LINE)
  // =========================================================================
  const skyGeo = track(new THREE.SphereGeometry(600, 64, 32))
  const skyMat = track(createSkySphereMaterial())
  const skyMesh = new THREE.Mesh(skyGeo, skyMat)
  // Centered directly on the balcony (cz = 85, balconyZ ≈ 80)
  skyMesh.position.set(cx, 0, cz - 5)
  skyMesh.castShadow = false
  skyMesh.receiveShadow = false
  skylineGroup.add(skyMesh)

  // =========================================================================
  // 2. SOLID DARK WET-ASPHALT GROUND PLANE (y = -18, NO DASHED LINES)
  // =========================================================================
  const groundY = -18
  const groundGeo = track(new THREE.PlaneGeometry(1000, 1000))
  const asphaltTex = tokyoWetAsphaltTexture()
  const groundMat = track(
    new THREE.MeshStandardMaterial({
      map: asphaltTex,
      color: 0x06080d,
      roughness: 0.8,
      metalness: 0.1,
      fog: true,
    }),
  )
  const groundMesh = new THREE.Mesh(groundGeo, groundMat)
  groundMesh.rotation.x = -Math.PI / 2
  groundMesh.position.set(cx, groundY, cz)
  groundMesh.castShadow = false
  groundMesh.receiveShadow = false
  skylineGroup.add(groundMesh)

  // =========================================================================
  // 3. FRAMING NEIGHBOR BUILDINGS (18m LEFT & RIGHT)
  // =========================================================================
  const neighborMat = track(
    new THREE.MeshStandardMaterial({
      color: 0x0a0d14,
      roughness: 0.85,
      metalness: 0.05,
      fog: true,
    }),
  )

  const warmStripMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xffaa55,
      toneMapped: false,
      fog: true,
    }),
  )

  const nWidth = 15
  const nDepth = 22
  const nHeight = 30 // From y = -18 to y = 12
  const nCenterY = groundY + nHeight / 2 // -3

  const createNeighborVolume = (bx: number, isLeft: boolean) => {
    const bGrp = new THREE.Group()

    const bodyGeo = track(new THREE.BoxGeometry(nWidth, nHeight, nDepth))
    const bodyMesh = new THREE.Mesh(bodyGeo, neighborMat)
    bodyMesh.castShadow = false
    bodyMesh.receiveShadow = false
    bGrp.add(bodyMesh)

    // Subtle horizontal warm balcony strip lighting (low emissive intensity)
    const stripGeo = track(new THREE.BoxGeometry(nWidth + 0.1, 0.08, 0.2))
    const innerStripGeo = track(new THREE.BoxGeometry(0.2, 0.08, nDepth + 0.1))

    for (let f = 1; f <= 7; f++) {
      const sy = -nHeight / 2 + f * 3.6

      // Street-facing horizontal strip
      const stripFront = new THREE.Mesh(stripGeo, warmStripMat)
      stripFront.position.set(0, sy, -nDepth / 2 - 0.05)
      stripFront.castShadow = false
      stripFront.receiveShadow = false

      // Alley-facing inner strip
      const stripInner = new THREE.Mesh(innerStripGeo, warmStripMat)
      stripInner.position.set(isLeft ? nWidth / 2 + 0.05 : -nWidth / 2 - 0.05, sy, 0)
      stripInner.castShadow = false
      stripInner.receiveShadow = false

      bGrp.add(stripFront, stripInner)
    }

    bGrp.position.set(bx, nCenterY, cz - 4)
    return bGrp
  }

  const leftNeighbor = createNeighborVolume(cx - 18, true)
  const rightNeighbor = createNeighborVolume(cx + 18, false)
  skylineGroup.add(leftNeighbor, rightNeighbor)

  // =========================================================================
  // 4. CLEAN DARK SILHOUETTE SKYLINE (18-25 TOWERS, NO WINDOW NOISE)
  // =========================================================================
  const towerMat = track(
    new THREE.MeshStandardMaterial({
      color: 0x070a12,
      roughness: 0.9,
      metalness: 0.15,
      fog: true,
    }),
  )

  const cyanNeonMat = track(
    new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      toneMapped: false,
      fog: true,
    }),
  )

  const warmWhiteNeonMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xffeedd,
      toneMapped: false,
      fog: true,
    }),
  )

  const crownGoldMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xffd166,
      toneMapped: false,
      fog: true,
    }),
  )

  const redBeaconMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xff2222,
      fog: false,
    }),
  )

  // 21 Monolithic Skyscraper Silhouettes
  interface TowerSpec {
    angle: number
    radius: number
    w: number
    h: number
    d: number
    accent?: 'cyan-edge' | 'white-edge' | 'gold-crown' | 'cyan-crown'
  }

  const towers: TowerSpec[] = [
    // Center-left arc
    { angle: Math.PI * 0.92, radius: 82, w: 20, h: 48, d: 20, accent: 'cyan-edge' },
    { angle: Math.PI * 0.84, radius: 110, w: 24, h: 68, d: 24, accent: 'gold-crown' },
    { angle: Math.PI * 0.77, radius: 145, w: 26, h: 84, d: 22, accent: 'white-edge' },
    { angle: Math.PI * 0.71, radius: 190, w: 32, h: 92, d: 28, accent: 'cyan-crown' },
    { angle: Math.PI * 0.65, radius: 235, w: 36, h: 72, d: 30 },

    // Center-right arc
    { angle: Math.PI * 1.08, radius: 86, w: 22, h: 52, d: 22, accent: 'white-edge' },
    { angle: Math.PI * 1.16, radius: 115, w: 25, h: 74, d: 24, accent: 'cyan-edge' },
    { angle: Math.PI * 1.23, radius: 150, w: 28, h: 88, d: 26, accent: 'gold-crown' },
    { angle: Math.PI * 1.29, radius: 195, w: 34, h: 82, d: 30, accent: 'cyan-edge' },
    { angle: Math.PI * 1.35, radius: 240, w: 38, h: 68, d: 32 },

    // Mid-distant filler towers
    { angle: Math.PI * 0.96, radius: 125, w: 18, h: 58, d: 18 },
    { angle: Math.PI * 1.04, radius: 130, w: 19, h: 62, d: 19, accent: 'white-edge' },
    { angle: Math.PI * 0.88, radius: 165, w: 28, h: 78, d: 25 },
    { angle: Math.PI * 1.12, radius: 170, w: 30, h: 76, d: 26 },
    { angle: Math.PI * 0.81, radius: 215, w: 32, h: 65, d: 28 },
    { angle: Math.PI * 1.19, radius: 220, w: 35, h: 64, d: 30 },

    // Flank horizon depth
    { angle: Math.PI * 0.58, radius: 175, w: 30, h: 60, d: 28 },
    { angle: Math.PI * 0.52, radius: 225, w: 34, h: 55, d: 30 },
    { angle: Math.PI * 1.42, radius: 180, w: 32, h: 58, d: 28 },
    { angle: Math.PI * 1.48, radius: 230, w: 36, h: 54, d: 32 },
  ]

  const beaconMeshes: THREE.Mesh[] = []

  for (const t of towers) {
    const tx = cx + Math.sin(t.angle) * t.radius
    const tz = cz + Math.cos(t.angle) * t.radius
    const ty = groundY + t.h / 2

    const bMesh = new THREE.Mesh(track(new THREE.BoxGeometry(t.w, t.h, t.d)), towerMat)
    bMesh.position.set(tx, ty, tz)
    bMesh.castShadow = false
    bMesh.receiveShadow = false
    skylineGroup.add(bMesh)

    const roofY = groundY + t.h

    // Architectural neon edge strips
    if (t.accent === 'cyan-edge' || t.accent === 'white-edge') {
      const edgeMat = t.accent === 'cyan-edge' ? cyanNeonMat : warmWhiteNeonMat
      const edgeGeo = track(new THREE.BoxGeometry(0.18, t.h, 0.18))
      const edgeL = new THREE.Mesh(edgeGeo, edgeMat)
      edgeL.position.set(tx - t.w / 2 + 0.1, ty, tz - t.d / 2 + 0.1)
      edgeL.castShadow = false
      edgeL.receiveShadow = false

      const edgeR = new THREE.Mesh(edgeGeo, edgeMat)
      edgeR.position.set(tx + t.w / 2 - 0.1, ty, tz - t.d / 2 + 0.1)
      edgeR.castShadow = false
      edgeR.receiveShadow = false

      skylineGroup.add(edgeL, edgeR)
    }

    // Glowing rooftop crown bands
    if (t.accent === 'gold-crown' || t.accent === 'cyan-crown') {
      const crownMat = t.accent === 'gold-crown' ? crownGoldMat : cyanNeonMat
      const bandGeo = track(new THREE.BoxGeometry(t.w + 0.2, 0.6, t.d + 0.2))
      const band = new THREE.Mesh(bandGeo, crownMat)
      band.position.set(tx, roofY - 0.3, tz)
      band.castShadow = false
      band.receiveShadow = false
      skylineGroup.add(band)
    }

    // Rooftop aviation obstruction light on tall towers (h >= 70)
    if (t.h >= 70) {
      const beacon = new THREE.Mesh(track(new THREE.SphereGeometry(0.45, 6, 6)), redBeaconMat)
      beacon.position.set(tx, roofY + 0.6, tz)
      beacon.castShadow = false
      beacon.receiveShadow = false
      skylineGroup.add(beacon)
      beaconMeshes.push(beacon)
    }
  }

  // =========================================================================
  // 5. CLEAN STYLIZED TOKYO TOWER SILHOUETTE (Center Distance)
  // =========================================================================
  const ttX = cx
  const ttZ = cz - 165
  const ttOrangeMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xff5500,
      fog: true,
    }),
  )
  const ttWhiteMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      fog: true,
    }),
  )
  const ttDeckMat = track(
    new THREE.MeshBasicMaterial({
      color: 0xffe066,
      toneMapped: false,
      fog: true,
    }),
  )

  const ttGroup = new THREE.Group()

  // Base tapered lattice legs
  const leg1Geo = track(new THREE.CylinderGeometry(0.5, 3.2, 42, 6))
  const leg1 = new THREE.Mesh(leg1Geo, ttOrangeMat)
  leg1.position.set(ttX - 7.5, groundY + 21, ttZ)
  leg1.rotation.z = -0.15
  leg1.castShadow = false
  leg1.receiveShadow = false

  const leg2 = new THREE.Mesh(leg1Geo, ttOrangeMat)
  leg2.position.set(ttX + 7.5, groundY + 21, ttZ)
  leg2.rotation.z = 0.15
  leg2.castShadow = false
  leg2.receiveShadow = false

  // Main Observation Deck
  const deckY = groundY + 42
  const mainDeck = new THREE.Mesh(track(new THREE.BoxGeometry(10, 3.2, 10)), ttDeckMat)
  mainDeck.position.set(ttX, deckY, ttZ)
  mainDeck.castShadow = false
  mainDeck.receiveShadow = false

  // Upper shaft (alternating white & orange bands)
  const shaftGeo = track(new THREE.CylinderGeometry(0.6, 2.2, 28, 8))
  const shaftMesh = new THREE.Mesh(shaftGeo, ttWhiteMat)
  shaftMesh.position.set(ttX, deckY + 14, ttZ)
  shaftMesh.castShadow = false
  shaftMesh.receiveShadow = false

  // Special observation deck
  const specDeck = new THREE.Mesh(track(new THREE.CylinderGeometry(2.4, 2.4, 2.0, 8)), ttDeckMat)
  specDeck.position.set(ttX, deckY + 28, ttZ)
  specDeck.castShadow = false
  specDeck.receiveShadow = false

  // Spire antenna
  const spireGeo = track(new THREE.CylinderGeometry(0.12, 0.45, 18, 6))
  const spire = new THREE.Mesh(spireGeo, ttWhiteMat)
  spire.position.set(ttX, deckY + 38, ttZ)
  spire.castShadow = false
  spire.receiveShadow = false

  // Spire pinnacle beacon
  const topBeacon = new THREE.Mesh(track(new THREE.SphereGeometry(0.75, 6, 6)), redBeaconMat)
  topBeacon.position.set(ttX, deckY + 47.5, ttZ)
  topBeacon.castShadow = false
  topBeacon.receiveShadow = false
  beaconMeshes.push(topBeacon)

  ttGroup.add(leg1, leg2, mainDeck, shaftMesh, specDeck, spire, topBeacon)
  skylineGroup.add(ttGroup)

  // Aviation Beacon Blink Animation (0.8 Hz)
  let beaconTimer = 0
  animators.push((dt) => {
    beaconTimer += dt
    const blink = (beaconTimer % 1.25) < 0.65
    redBeaconMat.color.setHex(blink ? 0xff2222 : 0x4a0a0a)
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

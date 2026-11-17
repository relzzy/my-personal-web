import * as THREE from 'three'
import {
  skylineOfficeWindowsTexture,
  skylineResidentialWindowsTexture,
  tokyoTowerLatticeTexture,
  highwayTrafficTrailsTexture,
  rooftopNeonSignTexture,
  celestialMoonTexture,
} from '../materials/SkylineMaterials'

export interface TokyoSkylineResult {
  group: THREE.Group
  update: (dt: number) => void
}

/**
 * Builds the panoramic Tokyo midnight skyline vista seen from Suite 402 balcony.
 *
 * Origin: Suite 402 is at cx = 0, cz = 85.
 * Balcony front railing is at Z = 78.7.
 * Vista looks North (-Z) across the Tokyo basin.
 */
export function buildTokyoSkyline(cx = 0, cz = 85): TokyoSkylineResult {
  const skylineGroup = new THREE.Group()
  skylineGroup.name = 'panoramic-tokyo-skyline'

  const animators: ((dt: number) => void)[] = []

  // =========================================================================
  // 1. CELESTIAL SKYDOME & STARFIELD
  // =========================================================================

  // Procedural midnight sky gradient canvas
  const skyCanvas = document.createElement('canvas')
  skyCanvas.width = 256
  skyCanvas.height = 512
  const skyCtx = skyCanvas.getContext('2d')!

  const skyGrad = skyCtx.createLinearGradient(0, 0, 0, 512)
  skyGrad.addColorStop(0, '#030610')    // Cosmic deep obsidian zenith
  skyGrad.addColorStop(0.35, '#070f22') // Deep sapphire midnight
  skyGrad.addColorStop(0.7, '#0e1633')  // Tokyo urban indigo
  skyGrad.addColorStop(0.9, '#181b3d')  // Atmospheric haze violet
  skyGrad.addColorStop(1.0, '#1a1836')  // City glow horizon line
  skyCtx.fillStyle = skyGrad
  skyCtx.fillRect(0, 0, 256, 512)

  const skyTex = new THREE.CanvasTexture(skyCanvas)
  const skyMat = new THREE.MeshBasicMaterial({
    map: skyTex,
    side: THREE.BackSide,
    fog: false, // Critical: Immune to ground fog attenuation
    depthWrite: false,
  })

  // Large half-dome enclosing the northern hemisphere
  const domeRadius = 145
  const skyDome = new THREE.Mesh(
    new THREE.SphereGeometry(domeRadius, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.52),
    skyMat,
  )
  skyDome.position.set(cx, -4, cz)
  skylineGroup.add(skyDome)

  // Starfield Particles
  const starCount = 520
  const starPositions = new Float32Array(starCount * 3)
  const starColors = new Float32Array(starCount * 3)
  const starTwinkles: { idx: number; speed: number; phase: number }[] = []

  let sIdx = 0
  for (let i = 0; i < starCount; i++) {
    // Distribute stars mostly in northern sky (looking towards -Z from balcony)
    const theta = Math.PI + (Math.random() - 0.5) * Math.PI * 1.3 // -Z direction
    const phi = 0.15 + Math.random() * 0.75 // Above horizon up to zenith
    const r = domeRadius - 3

    const x = cx + r * Math.sin(phi) * Math.sin(theta)
    const y = r * Math.cos(phi) + 2
    const z = cz + r * Math.sin(phi) * Math.cos(theta)

    starPositions[sIdx * 3] = x
    starPositions[sIdx * 3 + 1] = y
    starPositions[sIdx * 3 + 2] = z

    // Subtle star colors (ice blue, diamond white, soft amber)
    const colorType = Math.random()
    if (colorType < 0.65) {
      starColors[sIdx * 3] = 0.95
      starColors[sIdx * 3 + 1] = 0.98
      starColors[sIdx * 3 + 2] = 1.0
    } else if (colorType < 0.85) {
      starColors[sIdx * 3] = 0.7
      starColors[sIdx * 3 + 1] = 0.85
      starColors[sIdx * 3 + 2] = 1.0 // Ice blue
    } else {
      starColors[sIdx * 3] = 1.0
      starColors[sIdx * 3 + 1] = 0.92
      starColors[sIdx * 3 + 2] = 0.72 // Pale gold
    }

    starTwinkles.push({
      idx: sIdx,
      speed: 1.5 + Math.random() * 3.0,
      phase: Math.random() * Math.PI * 2,
    })
    sIdx++
  }

  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

  const starMat = new THREE.PointsMaterial({
    size: 0.9,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    fog: false,
    depthWrite: false,
  })
  const starPoints = new THREE.Points(starGeo, starMat)
  skylineGroup.add(starPoints)

  // Animate star twinkle
  let starTime = 0
  animators.push((dt) => {
    starTime += dt
    starMat.opacity = 0.82 + Math.sin(starTime * 1.8) * 0.12
  })

  // Crescent Moon with Atmospheric Radial Halo
  const moonX = cx + 18
  const moonY = 38
  const moonZ = cz - 70 // Z = 15

  const moonTex = celestialMoonTexture()
  const moonMat = new THREE.MeshBasicMaterial({
    map: moonTex,
    transparent: true,
    fog: false,
    depthWrite: false,
    toneMapped: false,
  })
  const moonMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 6.5), moonMat)
  moonMesh.position.set(moonX, moonY, moonZ)
  moonMesh.rotation.y = Math.PI // Face South (+Z) towards balcony
  skylineGroup.add(moonMesh)

  // Soft atmospheric lunar glow sprite
  const glowCanvas = document.createElement('canvas')
  glowCanvas.width = 128
  glowCanvas.height = 128
  const gCtx = glowCanvas.getContext('2d')!
  const haloGrad = gCtx.createRadialGradient(64, 64, 8, 64, 64, 64)
  haloGrad.addColorStop(0, 'rgba(255, 250, 230, 0.45)')
  haloGrad.addColorStop(0.4, 'rgba(180, 210, 255, 0.18)')
  haloGrad.addColorStop(1, 'rgba(100, 150, 255, 0)')
  gCtx.fillStyle = haloGrad
  gCtx.fillRect(0, 0, 128, 128)

  const haloTex = new THREE.CanvasTexture(glowCanvas)
  const haloMat = new THREE.MeshBasicMaterial({
    map: haloTex,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  })
  const haloMesh = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), haloMat)
  haloMesh.position.set(moonX, moonY, moonZ + 0.1)
  skylineGroup.add(haloMesh)

  // Cruising Commercial Airliner Navigation Beacon
  const planeLightMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false })
  const planeLight = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 6), planeLightMat)
  planeLight.position.set(cx - 50, 44, cz - 65)

  const planeStrobeMat = new THREE.MeshBasicMaterial({ color: 0xff1122, fog: false })
  const planeStrobe = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), planeStrobeMat)
  planeStrobe.position.set(cx - 50, 43.7, cz - 65)

  skylineGroup.add(planeLight, planeStrobe)

  let planePos = cx - 50
  let planeTimer = 0
  animators.push((dt) => {
    planePos += dt * 3.2
    if (planePos > cx + 60) planePos = cx - 60
    planeLight.position.x = planePos
    planeStrobe.position.x = planePos

    planeTimer += dt
    // 1-second double flash strobe
    const strobe = (planeTimer % 1.2 < 0.08) || (planeTimer % 1.2 > 0.16 && planeTimer % 1.2 < 0.24)
    planeStrobeMat.color.setHex(strobe ? 0xffffff : 0xff1122)
  })

  // =========================================================================
  // 2. THE CROWN JEWEL: TOKYO TOWER (東京タワー)
  // =========================================================================
  // Positioned at X = 11.5, Z = cz - 56 = 29. Distance from balcony is ~51m.
  const ttX = cx + 11.5
  const ttZ = cz - 56
  const ttBaseY = -1.5

  const ttGroup = new THREE.Group()
  ttGroup.name = 'tokyo-tower'

  // International Orange & White Lattice Material
  const ttLatticeTex = tokyoTowerLatticeTexture()
  const ttLatticeMat = new THREE.MeshBasicMaterial({
    map: ttLatticeTex,
    color: 0xffa066, // Warm illuminated glow
    fog: false,
  })

  const ttSteelMat = new THREE.MeshBasicMaterial({
    color: 0xff4d00,
    fog: false,
  })

  const ttWhiteMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    fog: false,
  })

  const ttDeckWindowMat = new THREE.MeshBasicMaterial({
    color: 0xffea88, // Radiant warm golden observation lights
    fog: false,
  })

  // 2.1 Four Curved Arched Legs (Base Y: -1.5 to 19m)
  const legH = 21
  const baseSpread = 9.5
  const topSpread = 3.6

  const cornerSigns = [
    { x: -1, z: -1 },
    { x: 1, z: -1 },
    { x: -1, z: 1 },
    { x: 1, z: 1 },
  ]

  for (const c of cornerSigns) {
    const legGeo = new THREE.CylinderGeometry(0.35, 0.7, legH, 6)
    const leg = new THREE.Mesh(legGeo, ttLatticeMat)
    leg.position.set(
      (c.x * (baseSpread + topSpread)) / 4,
      ttBaseY + legH / 2,
      (c.z * (baseSpread + topSpread)) / 4,
    )
    leg.rotation.z = -c.x * 0.14
    leg.rotation.x = c.z * 0.14
    ttGroup.add(leg)
  }

  // Horizontal Cross Struts between legs
  for (let sh = 4; sh < legH; sh += 5) {
    const spreadAtH = baseSpread - (sh / legH) * (baseSpread - topSpread)
    const strut1 = new THREE.Mesh(new THREE.BoxGeometry(spreadAtH, 0.28, 0.28), ttSteelMat)
    strut1.position.set(0, ttBaseY + sh, spreadAtH / 2)
    const strut2 = new THREE.Mesh(new THREE.BoxGeometry(spreadAtH, 0.28, 0.28), ttSteelMat)
    strut2.position.set(0, ttBaseY + sh, -spreadAtH / 2)
    const strut3 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, spreadAtH), ttSteelMat)
    strut3.position.set(spreadAtH / 2, ttBaseY + sh, 0)
    const strut4 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, spreadAtH), ttSteelMat)
    strut4.position.set(-spreadAtH / 2, ttBaseY + sh, 0)
    ttGroup.add(strut1, strut2, strut3, strut4)
  }

  // 2.2 Main Observation Deck (大展望台, Y: 19.5 to 24.5m)
  const deckBase = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.5, 4.8), ttSteelMat)
  deckBase.position.set(0, ttBaseY + legH + 0.25, 0)

  // 2-Tier Glass Observation Windows
  const deckWindows = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.6, 4.6), ttDeckWindowMat)
  deckWindows.position.set(0, ttBaseY + legH + 1.8, 0)

  const deckRoof = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.4, 5.0), ttWhiteMat)
  deckRoof.position.set(0, ttBaseY + legH + 3.3, 0)

  const deckTier2 = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.8, 3.6), ttDeckWindowMat)
  deckTier2.position.set(0, ttBaseY + legH + 4.3, 0)
  ttGroup.add(deckBase, deckWindows, deckRoof, deckTier2)

  // 2.3 Upper Tapered Lattice Spire (Y: 26 to 40m)
  const spireH = 15
  const upperSpireGeo = new THREE.CylinderGeometry(0.7, 1.8, spireH, 8)
  const upperSpire = new THREE.Mesh(upperSpireGeo, ttLatticeMat)
  upperSpire.position.set(0, ttBaseY + legH + 5.2 + spireH / 2, 0)
  ttGroup.add(upperSpire)

  // 2.4 Top Observation Deck (特別展望台, Y: 42 to 44m)
  const topDeck = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 1.8, 12), ttDeckWindowMat)
  topDeck.position.set(0, ttBaseY + legH + 5.2 + spireH + 0.9, 0)

  const topDeckRoof = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.35, 12), ttWhiteMat)
  topDeckRoof.position.set(0, ttBaseY + legH + 5.2 + spireH + 1.9, 0)
  ttGroup.add(topDeck, topDeckRoof)

  // 2.5 Broadcast Antenna Needle & Obstruction Beacon (Y: 44 to 53m)
  const mastH = 10
  const mastGeo = new THREE.CylinderGeometry(0.12, 0.35, mastH, 8)
  const mast = new THREE.Mesh(mastGeo, ttWhiteMat)
  mast.position.set(0, ttBaseY + legH + 5.2 + spireH + 2.1 + mastH / 2, 0)

  // Red Pulsing Aviation Beacon on Pinnacle
  const ttBeaconMat = new THREE.MeshBasicMaterial({ color: 0xff1e1e, fog: false })
  const ttBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), ttBeaconMat)
  ttBeacon.position.set(0, ttBaseY + legH + 5.2 + spireH + 2.1 + mastH + 0.3, 0)
  ttGroup.add(mast, ttBeacon)

  ttGroup.position.set(ttX, 0, ttZ)
  skylineGroup.add(ttGroup)

  // Red beacon slow pulse animation
  const beaconsToAnimate: { mat: THREE.MeshBasicMaterial; offset: number }[] = []
  beaconsToAnimate.push({ mat: ttBeaconMat, offset: 0 })

  // =========================================================================
  // 3. TOKYO SKYTREE SPIRE (FAR DISTANCE LANDMARK)
  // =========================================================================
  // Positioned at X = -28, Z = cz - 78 = 7 (Distance ~73m).
  const stX = cx - 28
  const stZ = cz - 78
  const stBaseY = -1.5

  const stGroup = new THREE.Group()
  stGroup.name = 'tokyo-skytree'

  const stMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, fog: false })
  const stCyanLedMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, fog: false })
  const stPurpleLedMat = new THREE.MeshBasicMaterial({ color: 0xc084fc, fog: false })

  // Slender tapered tripod lattice reaching 68m tall
  const stH = 68
  const stTowerGeo = new THREE.CylinderGeometry(0.4, 2.8, stH, 8)
  const stTower = new THREE.Mesh(stTowerGeo, stMat)
  stTower.position.set(0, stBaseY + stH / 2, 0)

  // Lower Observation Pod (Tembo Deck) at Y = 36
  const stPod1 = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.0, 3.2, 12), ttDeckWindowMat)
  stPod1.position.set(0, stBaseY + 36, 0)

  // Upper Observation Pod (Tembo Galleria) at Y = 48
  const stPod2 = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.4, 2.2, 12), ttDeckWindowMat)
  stPod2.position.set(0, stBaseY + 48, 0)

  // Illuminated central lighting spine (alternating cyan & purple LED bands)
  const stSpineCyan = new THREE.Mesh(new THREE.BoxGeometry(0.2, 28, 0.2), stCyanLedMat)
  stSpineCyan.position.set(0, stBaseY + 20, 0.8)
  const stSpinePurple = new THREE.Mesh(new THREE.BoxGeometry(0.2, 18, 0.2), stPurpleLedMat)
  stSpinePurple.position.set(0, stBaseY + 56, 0.4)

  // Summit strobe beacon
  const stBeaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false })
  const stBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), stBeaconMat)
  stBeacon.position.set(0, stBaseY + stH + 0.3, 0)

  stGroup.add(stTower, stPod1, stPod2, stSpineCyan, stSpinePurple, stBeacon)
  stGroup.position.set(stX, 0, stZ)
  skylineGroup.add(stGroup)

  beaconsToAnimate.push({ mat: stBeaconMat, offset: 0.5 })

  // =========================================================================
  // 4. LAYERED MODERN SKYSCRAPERS & HIGH-RISES
  // =========================================================================
  const officeMat = new THREE.MeshBasicMaterial({
    map: skylineOfficeWindowsTexture(),
    color: 0xd8e6ff,
    fog: false,
  })

  const resMat = new THREE.MeshBasicMaterial({
    map: skylineResidentialWindowsTexture(),
    color: 0xfff0dd,
    fog: false,
  })

  const darkRoofMat = new THREE.MeshBasicMaterial({
    color: 0x0c121d,
    fog: false,
  })

  const goldAccentMat = new THREE.MeshBasicMaterial({
    color: 0xd4af37,
    fog: false,
  })

  // Skyscraper specifications
  interface TowerSpec {
    x: number
    z: number
    w: number
    h: number
    d: number
    type: 'office' | 'res'
    crown?: 'stepped' | 'slanted' | 'spire' | 'flat'
    neon?: { text: string; sub: string; col: string }
    hasHelipad?: boolean
  }

  const towers: TowerSpec[] = [
    // Midground Tier 1 (Z: cz - 42 to cz - 54) -> Distance 35m to 48m from balcony
    {
      x: -18,
      z: cz - 45,
      w: 10,
      h: 42,
      d: 9,
      type: 'office',
      crown: 'stepped',
      neon: { text: 'サイバー', sub: 'CYBER HQ', col: '#00ffff' },
      hasHelipad: true,
    },
    {
      x: -7,
      z: cz - 42,
      w: 8.5,
      h: 35,
      d: 8,
      type: 'res',
      crown: 'slanted',
    },
    {
      x: 1.5,
      z: cz - 46,
      w: 7.5,
      h: 30,
      d: 7.5,
      type: 'res',
      crown: 'flat',
    },
    {
      x: 21,
      z: cz - 44,
      w: 9.5,
      h: 39,
      d: 9,
      type: 'office',
      crown: 'stepped',
      neon: { text: '東京', sub: 'TOKYO 2099', col: '#ff007f' },
      hasHelipad: true,
    },
    {
      x: 31,
      z: cz - 48,
      w: 11,
      h: 45,
      d: 10,
      type: 'office',
      crown: 'spire',
      neon: { text: 'SHINJUKU', sub: 'HOTEL 402', col: '#ffd166' },
    },

    // Background Tier 2 (Z: cz - 58 to cz - 75) -> Distance 50m to 70m
    { x: -36, z: cz - 62, w: 12, h: 48, d: 11, type: 'office', crown: 'flat' },
    { x: -24, z: cz - 65, w: 10, h: 44, d: 10, type: 'res', crown: 'stepped' },
    { x: -13, z: cz - 60, w: 9, h: 40, d: 9, type: 'office', crown: 'spire' },
    { x: -3, z: cz - 68, w: 13, h: 54, d: 12, type: 'office', crown: 'stepped', hasHelipad: true },
    { x: 19, z: cz - 66, w: 10.5, h: 46, d: 10, type: 'office', crown: 'flat' },
    { x: 38, z: cz - 64, w: 12, h: 50, d: 11, type: 'res', crown: 'stepped' },

    // Distant Silhouette Tier 3 (Z: cz - 78 to cz - 98) -> Distance 70m to 92m
    { x: -44, z: cz - 82, w: 14, h: 52, d: 12, type: 'office', crown: 'flat' },
    { x: -18, z: cz - 88, w: 12, h: 56, d: 11, type: 'office', crown: 'spire' },
    { x: 5, z: cz - 92, w: 16, h: 62, d: 14, type: 'office', crown: 'stepped' },
    { x: 26, z: cz - 86, w: 13, h: 54, d: 12, type: 'res', crown: 'flat' },
    { x: 44, z: cz - 94, w: 15, h: 58, d: 13, type: 'office', crown: 'spire' },
  ]

  for (const t of towers) {
    const tMat = t.type === 'office' ? officeMat : resMat
    const bMesh = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), tMat)
    bMesh.position.set(cx + t.x, -2 + t.h / 2, t.z)
    skylineGroup.add(bMesh)

    // Roof cap
    const roofY = -2 + t.h
    const roofCap = new THREE.Mesh(new THREE.BoxGeometry(t.w + 0.2, 0.6, t.d + 0.2), darkRoofMat)
    roofCap.position.set(cx + t.x, roofY + 0.3, t.z)
    skylineGroup.add(roofCap)

    // Architectural crown features
    if (t.crown === 'stepped') {
      const step1 = new THREE.Mesh(new THREE.BoxGeometry(t.w * 0.75, 2.5, t.d * 0.75), darkRoofMat)
      step1.position.set(cx + t.x, roofY + 1.85, t.z)
      const step2 = new THREE.Mesh(new THREE.BoxGeometry(t.w * 0.5, 2.2, t.d * 0.5), goldAccentMat)
      step2.position.set(cx + t.x, roofY + 4.1, t.z)
      skylineGroup.add(step1, step2)
    } else if (t.crown === 'spire') {
      const antH = 7.0
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.22, antH, 8), darkRoofMat)
      ant.position.set(cx + t.x, roofY + 0.6 + antH / 2, t.z)
      skylineGroup.add(ant)

      // Spire tip beacon
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2222, fog: false })
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.24, 6, 6), beaconMat)
      beacon.position.set(cx + t.x, roofY + 0.6 + antH + 0.2, t.z)
      skylineGroup.add(beacon)
      beaconsToAnimate.push({ mat: beaconMat, offset: (t.x * 0.1) % 1.0 })
    }

    // Helipad with illuminated H marking and green corner lights
    if (t.hasHelipad) {
      const padGeo = new THREE.BoxGeometry(t.w * 0.65, 0.08, t.d * 0.65)
      const padMesh = new THREE.Mesh(padGeo, darkRoofMat)
      padMesh.position.set(cx + t.x, roofY + 0.65, t.z)

      // Yellow glowing 'H' marker
      const hMat = new THREE.MeshBasicMaterial({ color: 0xffd700, fog: false })
      const hBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 2.2), hMat)
      hBar1.position.set(cx + t.x - 0.7, roofY + 0.7, t.z)
      const hBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 2.2), hMat)
      hBar2.position.set(cx + t.x + 0.7, roofY + 0.7, t.z)
      const hBarMid = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, 0.4), hMat)
      hBarMid.position.set(cx + t.x, roofY + 0.7, t.z)

      skylineGroup.add(padMesh, hBar1, hBar2, hBarMid)

      // Green perimeter lights
      const greenMat = new THREE.MeshBasicMaterial({ color: 0x22c55e, fog: false })
      const padHalfW = (t.w * 0.65) / 2
      const padHalfD = (t.d * 0.65) / 2
      for (const cx1 of [-padHalfW, padHalfW]) {
        for (const cz1 of [-padHalfD, padHalfD]) {
          const gLight = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), greenMat)
          gLight.position.set(cx + t.x + cx1, roofY + 0.75, t.z + cz1)
          skylineGroup.add(gLight)
        }
      }
    }

    // Rooftop Japanese Neon Billboard Sign
    if (t.neon) {
      const signTex = rooftopNeonSignTexture(t.neon.text, t.neon.sub, t.neon.col)
      const signMat = new THREE.MeshBasicMaterial({ map: signTex, fog: false })
      const signGeo = new THREE.PlaneGeometry(6.2, 2.0)
      const signMesh = new THREE.Mesh(signGeo, signMat)
      signMesh.rotation.y = Math.PI // Face South towards balcony
      signMesh.position.set(cx + t.x, roofY + 2.4, t.z + t.d / 2 + 0.1)

      // Steel support truss legs
      const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6), darkRoofMat)
      leg1.position.set(cx + t.x - 2.5, roofY + 0.8, t.z + t.d / 2 + 0.05)
      const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6), darkRoofMat)
      leg2.position.set(cx + t.x + 2.5, roofY + 0.8, t.z + t.d / 2 + 0.05)

      skylineGroup.add(signMesh, leg1, leg2)
    }

    // Red Obstruction Beacon for every tall roof
    if (!t.crown || t.crown !== 'spire') {
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2222, fog: false })
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 6), beaconMat)
      beacon.position.set(cx + t.x, roofY + (t.crown === 'stepped' ? 5.5 : 1.2), t.z)
      skylineGroup.add(beacon)
      beaconsToAnimate.push({ mat: beaconMat, offset: (t.x * 0.15) % 1.0 })
    }
  }

  // Animate Aviation Warning Beacons (Rhythmic Slow Pulse)
  let beaconTime = 0
  animators.push((dt) => {
    beaconTime += dt
    for (const b of beaconsToAnimate) {
      const pulse = Math.sin(beaconTime * 3.2 + b.offset * Math.PI * 2)
      // Sharp distinct strobe pulse
      const isLit = pulse > 0.05
      b.mat.color.setHex(isLit ? 0xff2222 : 0x4a0a0a)
    }
  })

  // =========================================================================
  // 5. LIVING CITY: SHUTO EXPRESSWAY (首都高) & LIGHT TRAILS
  // =========================================================================
  // Elevated highway viaduct crossing at Z = cz - 46 = 39 (Distance ~40m, visible below skyline).
  const hwyZ = cz - 47
  const hwyY = 1.6
  const hwyW = 75
  const hwyD = 4.8

  const hwyGroup = new THREE.Group()
  hwyGroup.name = 'shuto-expressway'

  // Elevated concrete deck
  const deckMat = new THREE.MeshBasicMaterial({ color: 0x141a24, fog: false })
  const hwyDeck = new THREE.Mesh(new THREE.BoxGeometry(hwyW, 0.6, hwyD), deckMat)
  hwyDeck.position.set(cx, hwyY, hwyZ)

  // Concrete safety side barriers
  const barrierMat = new THREE.MeshBasicMaterial({ color: 0x1e2736, fog: false })
  const barrierN = new THREE.Mesh(new THREE.BoxGeometry(hwyW, 0.5, 0.2), barrierMat)
  barrierN.position.set(cx, hwyY + 0.45, hwyZ - hwyD / 2)
  const barrierS = new THREE.Mesh(new THREE.BoxGeometry(hwyW, 0.5, 0.2), barrierMat)
  barrierS.position.set(cx, hwyY + 0.45, hwyZ + hwyD / 2)

  // Viaduct concrete support piers
  const pierMat = new THREE.MeshBasicMaterial({ color: 0x0f141d, fog: false })
  for (let px = -32; px <= 32; px += 16) {
    const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, hwyY + 2, 8), pierMat)
    pier.position.set(cx + px, (hwyY + 2) / 2 - 2, hwyZ)
    hwyGroup.add(pier)
  }

  // Highway Traffic Light Streaks (Scrolling UV)
  const trafficTex = highwayTrafficTrailsTexture()
  trafficTex.repeat.set(6, 1)

  const trafficMat = new THREE.MeshBasicMaterial({
    map: trafficTex,
    transparent: true,
    fog: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  const trafficGeo = new THREE.PlaneGeometry(hwyW - 0.5, hwyD - 0.4)
  trafficGeo.rotateX(-Math.PI / 2)
  const trafficMesh = new THREE.Mesh(trafficGeo, trafficMat)
  trafficMesh.position.set(cx, hwyY + 0.32, hwyZ)

  hwyGroup.add(hwyDeck, barrierN, barrierS, trafficMesh)
  skylineGroup.add(hwyGroup)

  // Smooth traffic light trail scrolling animation
  animators.push((dt) => {
    trafficTex.offset.x -= dt * 0.45 // Traffic flow
  })

  // =========================================================================
  // 6. SEA OF CITY LIGHTS (SPRAWLING TOKYO LIGHT CARPET)
  // =========================================================================
  const carpetCount = 750
  const carpetPos = new Float32Array(carpetCount * 3)
  const carpetCol = new Float32Array(carpetCount * 3)

  for (let i = 0; i < carpetCount; i++) {
    const angle = Math.PI + (Math.random() - 0.5) * 1.5
    const dist = 32 + Math.random() * 65

    carpetPos[i * 3] = cx + Math.sin(angle) * dist
    carpetPos[i * 3 + 1] = -1.2 + Math.random() * 3.5 // Ground to low roofs
    carpetPos[i * 3 + 2] = cz - Math.abs(Math.cos(angle) * dist) - 10

    // Varied warm amber, cool office white, and soft neon tints
    const tint = Math.random()
    if (tint < 0.55) {
      // Warm golden street lights
      carpetCol[i * 3] = 1.0
      carpetCol[i * 3 + 1] = 0.82
      carpetCol[i * 3 + 2] = 0.45
    } else if (tint < 0.8) {
      // White headlights / storefronts
      carpetCol[i * 3] = 0.95
      carpetCol[i * 3 + 1] = 0.98
      carpetCol[i * 3 + 2] = 1.0
    } else {
      // Cyan / Magenta neon glow
      carpetCol[i * 3] = 0.25
      carpetCol[i * 3 + 1] = 0.75
      carpetCol[i * 3 + 2] = 1.0
    }
  }

  const carpetGeo = new THREE.BufferGeometry()
  carpetGeo.setAttribute('position', new THREE.BufferAttribute(carpetPos, 3))
  carpetGeo.setAttribute('color', new THREE.BufferAttribute(carpetCol, 3))

  const carpetMat = new THREE.PointsMaterial({
    size: 1.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    fog: false,
    depthWrite: false,
  })
  const carpetPoints = new THREE.Points(carpetGeo, carpetMat)
  skylineGroup.add(carpetPoints)

  // =========================================================================
  // 7. ATMOSPHERIC HORIZON NEON CITY HAZE / UNDERGLOW
  // =========================================================================
  // Soft glowing atmospheric gradient planes along the base of the skyline
  const hazeCanvas = document.createElement('canvas')
  hazeCanvas.width = 128
  hazeCanvas.height = 128
  const hCtx = hazeCanvas.getContext('2d')!

  const hGrad = hCtx.createLinearGradient(0, 128, 0, 0)
  hGrad.addColorStop(0, 'rgba(255, 140, 60, 0.28)')  // Warm amber city heat
  hGrad.addColorStop(0.3, 'rgba(120, 80, 220, 0.18)') // Tokyo neon purple
  hGrad.addColorStop(0.7, 'rgba(30, 120, 200, 0.08)') // Cool cyan haze
  hGrad.addColorStop(1.0, 'rgba(10, 20, 50, 0)')
  hCtx.fillStyle = hGrad
  hCtx.fillRect(0, 0, 128, 128)

  const hazeTex = new THREE.CanvasTexture(hazeCanvas)
  const hazeMat = new THREE.MeshBasicMaterial({
    map: hazeTex,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  })

  // Large horizontal haze ribbon
  const hazeGeo = new THREE.PlaneGeometry(120, 18)
  const hazeMesh = new THREE.Mesh(hazeGeo, hazeMat)
  hazeMesh.rotation.y = Math.PI
  hazeMesh.position.set(cx, 6.5, cz - 60)
  skylineGroup.add(hazeMesh)

  // Subtle breathing oscillation on city underglow
  let hazeTime = 0
  animators.push((dt) => {
    hazeTime += dt
    hazeMat.opacity = 0.85 + Math.sin(hazeTime * 0.8) * 0.15
  })

  return {
    group: skylineGroup,
    update(dt: number) {
      for (const a of animators) a(dt)
    },
  }
}

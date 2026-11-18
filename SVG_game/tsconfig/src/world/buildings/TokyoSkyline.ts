import * as THREE from 'three'
import {
  skylineOfficeWindowsTexture,
  skylineResidentialWindowsTexture,
  tokyoTowerLatticeTexture,
  highwayTrafficTrailsTexture,
  rooftopNeonSignTexture,
  celestialMoonTexture,
  tokyoPanoramicSkylineTexture,
  rooftopGravelTexture,
} from '../materials/SkylineMaterials'

export interface TokyoSkylineResult {
  group: THREE.Group
  update: (dt: number) => void
}

/**
 * Re-engineered Hybrid 2.5D + 3D Tokyo City Environment
 *
 * Combines:
 * 1. Near-field opposing 3-story rooftop and ground alleyway (Y = -12.5 to -3.5)
 * 2. Mid-field simplified 3D city blocks with InstancedMesh rooftop props
 * 3. Iconic Tokyo Tower landmark in the mid-distance
 * 4. Animated Shuto Expressway light trails
 * 5. Far-field 2.5D curved cylindrical Tokyo skyline panorama (R = 92m, arc = 220°)
 * 6. Atmospheric blue-hour twilight sky dome, starfield, moon, and cruising airliner
 */
export function buildTokyoSkyline(cx = 0, cz = 85): TokyoSkylineResult {
  const skylineGroup = new THREE.Group()
  skylineGroup.name = 'panoramic-tokyo-environment'

  const animators: ((dt: number) => void)[] = []

  // Shared master materials for rendering efficiency
  const darkRoofMat = new THREE.MeshBasicMaterial({ color: 0x111622, fog: false })
  const concreteTrimMat = new THREE.MeshBasicMaterial({ color: 0x1e2638, fog: false })
  const metalSteelMat = new THREE.MeshBasicMaterial({ color: 0x334155, fog: false })
  const goldAccentMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, fog: false })

  // =========================================================================
  // 1. CELESTIAL BLUE-HOUR SKY DOME & STARFIELD (R = 142m)
  // =========================================================================

  // Procedural blue-hour dusk gradient canvas
  const skyCanvas = document.createElement('canvas')
  skyCanvas.width = 256
  skyCanvas.height = 512
  const skyCtx = skyCanvas.getContext('2d')!

  const skyGrad = skyCtx.createLinearGradient(0, 0, 0, 512)
  skyGrad.addColorStop(0, '#040817')    // Cosmic deep indigo zenith
  skyGrad.addColorStop(0.35, '#0b1633') // Rich royal twilight blue
  skyGrad.addColorStop(0.7, '#16193d')  // Tokyo dusk violet
  skyGrad.addColorStop(0.88, '#241f45') // Horizon twilight haze
  skyGrad.addColorStop(1.0, '#262244')  // Warm urban underglow
  skyCtx.fillStyle = skyGrad
  skyCtx.fillRect(0, 0, 256, 512)

  const skyTex = new THREE.CanvasTexture(skyCanvas)
  const skyMat = new THREE.MeshBasicMaterial({
    map: skyTex,
    side: THREE.BackSide,
    fog: false,
    depthWrite: false,
  })

  const domeRadius = 142
  const skyDome = new THREE.Mesh(
    new THREE.SphereGeometry(domeRadius, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.53),
    skyMat,
  )
  skyDome.position.set(cx, -12, cz)
  skylineGroup.add(skyDome)

  // Starfield Particles in upper twilight sky
  const starCount = 480
  const starPositions = new Float32Array(starCount * 3)
  const starColors = new Float32Array(starCount * 3)

  let sIdx = 0
  for (let i = 0; i < starCount; i++) {
    const theta = Math.PI + (Math.random() - 0.5) * Math.PI * 1.35 // Looking North (-Z)
    const phi = 0.12 + Math.random() * 0.65 // Upper sky
    const r = domeRadius - 4

    starPositions[sIdx * 3] = cx + r * Math.sin(phi) * Math.sin(theta)
    starPositions[sIdx * 3 + 1] = r * Math.cos(phi) - 6
    starPositions[sIdx * 3 + 2] = cz + r * Math.sin(phi) * Math.cos(theta)

    const colorType = Math.random()
    if (colorType < 0.65) {
      starColors[sIdx * 3] = 0.95
      starColors[sIdx * 3 + 1] = 0.98
      starColors[sIdx * 3 + 2] = 1.0
    } else if (colorType < 0.85) {
      starColors[sIdx * 3] = 0.72
      starColors[sIdx * 3 + 1] = 0.86
      starColors[sIdx * 3 + 2] = 1.0 // Ice blue
    } else {
      starColors[sIdx * 3] = 1.0
      starColors[sIdx * 3 + 1] = 0.92
      starColors[sIdx * 3 + 2] = 0.75 // Pale gold
    }
    sIdx++
  }

  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

  const starMat = new THREE.PointsMaterial({
    size: 0.95,
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    fog: false,
    depthWrite: false,
  })
  const starPoints = new THREE.Points(starGeo, starMat)
  skylineGroup.add(starPoints)

  let starTime = 0
  animators.push((dt) => {
    starTime += dt
    starMat.opacity = 0.84 + Math.sin(starTime * 1.6) * 0.14
  })

  // Luminous Crescent Moon & Atmospheric Radial Halo
  const moonX = cx + 18
  const moonY = 38
  const moonZ = cz - 74

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
  moonMesh.rotation.y = Math.PI
  skylineGroup.add(moonMesh)

  const glowCanvas = document.createElement('canvas')
  glowCanvas.width = 128
  glowCanvas.height = 128
  const gCtx = glowCanvas.getContext('2d')!
  const haloGrad = gCtx.createRadialGradient(64, 64, 8, 64, 64, 64)
  haloGrad.addColorStop(0, 'rgba(255, 250, 230, 0.42)')
  haloGrad.addColorStop(0.45, 'rgba(180, 210, 255, 0.16)')
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

  // Cruising Airliner with Navigation Strobe
  const planeLightMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false })
  const planeLight = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 6), planeLightMat)
  planeLight.position.set(cx - 55, 43, cz - 70)

  const planeStrobeMat = new THREE.MeshBasicMaterial({ color: 0xff1122, fog: false })
  const planeStrobe = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), planeStrobeMat)
  planeStrobe.position.set(cx - 55, 42.7, cz - 70)
  skylineGroup.add(planeLight, planeStrobe)

  let planePos = cx - 55
  let planeTimer = 0
  animators.push((dt) => {
    planePos += dt * 3.0
    if (planePos > cx + 65) planePos = cx - 65
    planeLight.position.x = planePos
    planeStrobe.position.x = planePos

    planeTimer += dt
    const strobe = (planeTimer % 1.2 < 0.08) || (planeTimer % 1.2 > 0.16 && planeTimer % 1.2 < 0.24)
    planeStrobeMat.color.setHex(strobe ? 0xffffff : 0xff1122)
  })

  // =========================================================================
  // 2. FAR-FIELD 2.5D CURVED CYLINDRICAL PANORAMA (R = 92m, Arc = 220°)
  // =========================================================================
  const panoRadius = 92
  const panoHeight = 52
  const panoArc = Math.PI * 1.22 // ~220 degrees
  const panoThetaStart = Math.PI - panoArc / 2 // Centered towards North (-Z)

  const panoTex = tokyoPanoramicSkylineTexture()
  const panoMat = new THREE.MeshBasicMaterial({
    map: panoTex,
    transparent: true,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  })

  const panoGeo = new THREE.CylinderGeometry(
    panoRadius,
    panoRadius,
    panoHeight,
    48,
    1,
    true,
    panoThetaStart,
    panoArc,
  )
  const panoMesh = new THREE.Mesh(panoGeo, panoMat)
  panoMesh.position.set(cx, 14, cz)
  skylineGroup.add(panoMesh)

  // =========================================================================
  // 3. NEAR-FIELD: GROUND ALLEYWAY & OPPOSING 3-STORY ROOFTOP (Y: -12.5 to -3.5)
  // =========================================================================
  const groundY = -12.5

  // A) Ground Alleyway Asphalt (Directly below Suite 402 balcony, Z in [60, 80])
  const alleyRoadMat = new THREE.MeshBasicMaterial({ color: 0x0f131a, fog: false })
  const alleyRoad = new THREE.Mesh(new THREE.PlaneGeometry(50, 22), alleyRoadMat)
  alleyRoad.rotation.x = -Math.PI / 2
  alleyRoad.position.set(cx, groundY + 0.01, cz - 15) // Z = 70
  skylineGroup.add(alleyRoad)

  // Street Gutter / Sidewalk along alley base
  const gutterMat = new THREE.MeshBasicMaterial({ color: 0x1a202c, fog: false })
  const gutter = new THREE.Mesh(new THREE.BoxGeometry(48, 0.15, 1.2), gutterMat)
  gutter.position.set(cx, groundY + 0.08, cz - 8)
  skylineGroup.add(gutter)

  // Ground Alley Vending Machines (Illuminated Blue & Red)
  const vendBlueMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, toneMapped: false, fog: false })
  const vendRedMat = new THREE.MeshBasicMaterial({ color: 0xd97706, toneMapped: false, fog: false })
  const vendBodyMat = new THREE.MeshBasicMaterial({ color: 0x1e293b, fog: false })

  const vend1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.1, 0.8), vendBodyMat)
  vend1.position.set(cx - 3.2, groundY + 1.05, cz - 8.8)
  const vend1Face = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.4), vendBlueMat)
  vend1Face.position.set(cx - 3.2, groundY + 1.25, cz - 9.21)
  vend1Face.rotation.y = Math.PI

  const vend2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.1, 0.8), vendBodyMat)
  vend2.position.set(cx - 1.8, groundY + 1.05, cz - 8.8)
  const vend2Face = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.4), vendRedMat)
  vend2Face.position.set(cx - 1.8, groundY + 1.25, cz - 9.21)
  vend2Face.rotation.y = Math.PI
  skylineGroup.add(vend1, vend1Face, vend2, vend2Face)

  // Ground Utility Pole with Transformer & Warm Streetlamp
  const poleMat = new THREE.MeshBasicMaterial({ color: 0x334155, fog: false })
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 9.5, 8), poleMat)
  pole.position.set(cx + 4.5, groundY + 4.75, cz - 9.0)

  const arm = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.12), poleMat)
  arm.position.set(cx + 4.5, groundY + 8.8, cz - 9.0)

  const lampBulbMat = new THREE.MeshBasicMaterial({ color: 0xffe899, toneMapped: false, fog: false })
  const lampBulb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), lampBulbMat)
  lampBulb.position.set(cx + 3.5, groundY + 8.6, cz - 9.0)
  skylineGroup.add(pole, arm, lampBulb)

  // B) Opposing 3-Story Building Across the Alley (Z in [52, 64], Roof Y = -3.5)
  // When looking down from the balcony, the player sees this realistic rooftop life
  const oppRoofY = -3.5
  const oppBuildingH = oppRoofY - groundY // 9.0 meters tall
  const oppW = 28
  const oppD = 12
  const oppZ = cz - 25 // Z = 60

  const oppWallMat = new THREE.MeshBasicMaterial({ color: 0x161d28, fog: false })
  const oppBuilding = new THREE.Mesh(new THREE.BoxGeometry(oppW, oppBuildingH, oppD), oppWallMat)
  oppBuilding.position.set(cx - 2, groundY + oppBuildingH / 2, oppZ)

  // Tar-and-gravel rooftop slab
  const oppRoofTex = rooftopGravelTexture()
  const oppRoofMat = new THREE.MeshBasicMaterial({ map: oppRoofTex, fog: false })
  const oppRoofMesh = new THREE.Mesh(new THREE.PlaneGeometry(oppW - 0.4, oppD - 0.4), oppRoofMat)
  oppRoofMesh.rotation.x = -Math.PI / 2
  oppRoofMesh.position.set(cx - 2, oppRoofY + 0.02, oppZ)

  // Rooftop concrete safety parapet walls
  const parapetFront = new THREE.Mesh(new THREE.BoxGeometry(oppW, 0.75, 0.3), concreteTrimMat)
  parapetFront.position.set(cx - 2, oppRoofY + 0.375, oppZ + oppD / 2)
  const parapetBack = new THREE.Mesh(new THREE.BoxGeometry(oppW, 0.75, 0.3), concreteTrimMat)
  parapetBack.position.set(cx - 2, oppRoofY + 0.375, oppZ - oppD / 2)
  const parapetL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.75, oppD), concreteTrimMat)
  parapetL.position.set(cx - 2 - oppW / 2, oppRoofY + 0.375, oppZ)
  const parapetR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.75, oppD), concreteTrimMat)
  parapetR.position.set(cx - 2 + oppW / 2, oppRoofY + 0.375, oppZ)

  skylineGroup.add(oppBuilding, oppRoofMesh, parapetFront, parapetBack, parapetL, parapetR)

  // Detailed Rooftop Equipment on Opposing Building:
  // 1. Stainless Steel Cylindrical Water Storage Tank on Steel Stilt Legs
  const tankGeo = new THREE.CylinderGeometry(1.1, 1.1, 2.4, 16)
  const tankMat = new THREE.MeshBasicMaterial({ color: 0x64748b, fog: false })
  const waterTank = new THREE.Mesh(tankGeo, tankMat)
  waterTank.position.set(cx - 6.5, oppRoofY + 1.2 + 1.1, oppZ + 1.5)

  // 4 steel stilt legs
  for (const lx of [-0.8, 0.8]) {
    for (const lz of [-0.8, 0.8]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.2, 0.08), metalSteelMat)
      leg.position.set(cx - 6.5 + lx, oppRoofY + 0.6, oppZ + 1.5 + lz)
      skylineGroup.add(leg)
    }
  }
  skylineGroup.add(waterTank)

  // 2. Large Industrial AC Compressor Chillers on Opposing Roof
  for (let ci = 0; ci < 3; ci++) {
    const acChiller = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.0), metalSteelMat)
    acChiller.position.set(cx + 1.5 + ci * 2.2, oppRoofY + 0.6, oppZ + 2.0)
    skylineGroup.add(acChiller)
  }

  // =========================================================================
  // 4. THE CROWN JEWEL: TOKYO TOWER (東京タワー)
  // =========================================================================
  // Positioned at X = 13.5, Z = cz - 58 = 27 (Distance ~52m from balcony)
  const ttX = cx + 13.5
  const ttZ = cz - 58
  const ttBaseY = -6.0

  const ttGroup = new THREE.Group()
  ttGroup.name = 'tokyo-tower'

  const ttLatticeTex = tokyoTowerLatticeTexture()
  const ttLatticeMat = new THREE.MeshBasicMaterial({
    map: ttLatticeTex,
    color: 0xffa066,
    fog: false,
  })

  const ttSteelMat = new THREE.MeshBasicMaterial({ color: 0xff4d00, fog: false })
  const ttWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false })
  const ttDeckWindowMat = new THREE.MeshBasicMaterial({ color: 0xffea88, fog: false })

  const legH = 22
  const baseSpread = 9.8
  const topSpread = 3.8

  const cornerSigns = [
    { x: -1, z: -1 },
    { x: 1, z: -1 },
    { x: -1, z: 1 },
    { x: 1, z: 1 },
  ]

  for (const c of cornerSigns) {
    const legGeo = new THREE.CylinderGeometry(0.38, 0.75, legH, 6)
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

  for (let sh = 4; sh < legH; sh += 5) {
    const spreadAtH = baseSpread - (sh / legH) * (baseSpread - topSpread)
    const strut1 = new THREE.Mesh(new THREE.BoxGeometry(spreadAtH, 0.3, 0.3), ttSteelMat)
    strut1.position.set(0, ttBaseY + sh, spreadAtH / 2)
    const strut2 = new THREE.Mesh(new THREE.BoxGeometry(spreadAtH, 0.3, 0.3), ttSteelMat)
    strut2.position.set(0, ttBaseY + sh, -spreadAtH / 2)
    const strut3 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, spreadAtH), ttSteelMat)
    strut3.position.set(spreadAtH / 2, ttBaseY + sh, 0)
    const strut4 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, spreadAtH), ttSteelMat)
    strut4.position.set(-spreadAtH / 2, ttBaseY + sh, 0)
    ttGroup.add(strut1, strut2, strut3, strut4)
  }

  // 2-Tier Main Observation Deck
  const deckBase = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.5, 5.0), ttSteelMat)
  deckBase.position.set(0, ttBaseY + legH + 0.25, 0)
  const deckWindows = new THREE.Mesh(new THREE.BoxGeometry(4.8, 2.6, 4.8), ttDeckWindowMat)
  deckWindows.position.set(0, ttBaseY + legH + 1.8, 0)
  const deckRoof = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.4, 5.2), ttWhiteMat)
  deckRoof.position.set(0, ttBaseY + legH + 3.3, 0)
  const deckTier2 = new THREE.Mesh(new THREE.BoxGeometry(3.8, 1.8, 3.8), ttDeckWindowMat)
  deckTier2.position.set(0, ttBaseY + legH + 4.3, 0)
  ttGroup.add(deckBase, deckWindows, deckRoof, deckTier2)

  // Upper Spire & Top Observation Deck
  const spireH = 16
  const upperSpireGeo = new THREE.CylinderGeometry(0.7, 1.8, spireH, 8)
  const upperSpire = new THREE.Mesh(upperSpireGeo, ttLatticeMat)
  upperSpire.position.set(0, ttBaseY + legH + 5.2 + spireH / 2, 0)

  const topDeck = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 1.8, 12), ttDeckWindowMat)
  topDeck.position.set(0, ttBaseY + legH + 5.2 + spireH + 0.9, 0)
  const topDeckRoof = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.35, 12), ttWhiteMat)
  topDeckRoof.position.set(0, ttBaseY + legH + 5.2 + spireH + 1.9, 0)

  // Antenna Needle & Red Beacon
  const mastH = 11
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.35, mastH, 8), ttWhiteMat)
  mast.position.set(0, ttBaseY + legH + 5.2 + spireH + 2.1 + mastH / 2, 0)

  const ttBeaconMat = new THREE.MeshBasicMaterial({ color: 0xff1e1e, fog: false })
  const ttBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.38, 8, 8), ttBeaconMat)
  ttBeacon.position.set(0, ttBaseY + legH + 5.2 + spireH + 2.1 + mastH + 0.3, 0)
  ttGroup.add(upperSpire, topDeck, topDeckRoof, mast, ttBeacon)

  ttGroup.position.set(ttX, 0, ttZ)
  skylineGroup.add(ttGroup)

  const beaconsToAnimate: { mat: THREE.MeshBasicMaterial; offset: number }[] = []
  beaconsToAnimate.push({ mat: ttBeaconMat, offset: 0 })

  // =========================================================================
  // 5. MID-FIELD SIMPLIFIED 3D BUILDINGS & INSTANCED ROOFTOP PROPS
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

  interface MidBuildingSpec {
    x: number
    z: number
    w: number
    h: number
    d: number
    type: 'office' | 'res'
    crown?: 'stepped' | 'slanted' | 'spire' | 'flat'
    hasHelipad?: boolean
    neon?: { text: string; sub: string; col: string }
  }

  // Carefully arranged mid-field buildings at distance 30m to 62m
  const midBuildings: MidBuildingSpec[] = [
    // West Block (X: -36 to -14, Z: 36 to 52)
    {
      x: -18,
      z: cz - 44,
      w: 10,
      h: 40,
      d: 9,
      type: 'office',
      crown: 'stepped',
      neon: { text: 'サイバー', sub: 'CYBER HQ', col: '#00ffff' },
      hasHelipad: true,
    },
    {
      x: -28,
      z: cz - 48,
      w: 11,
      h: 36,
      d: 10,
      type: 'res',
      crown: 'slanted',
    },
    {
      x: -8,
      z: cz - 40,
      w: 8.5,
      h: 32,
      d: 8,
      type: 'res',
      crown: 'flat',
    },

    // Center-East Block (X: 1 to 24, Z: 38 to 52)
    {
      x: 1.5,
      z: cz - 44,
      w: 7.5,
      h: 28,
      d: 7.5,
      type: 'res',
      crown: 'flat',
    },
    {
      x: 23,
      z: cz - 42,
      w: 9.5,
      h: 38,
      d: 9,
      type: 'office',
      crown: 'stepped',
      neon: { text: '東京', sub: 'TOKYO 2099', col: '#ff007f' },
      hasHelipad: true,
    },
    {
      x: 32,
      z: cz - 48,
      w: 11,
      h: 42,
      d: 10,
      type: 'office',
      crown: 'spire',
      neon: { text: 'SHINJUKU', sub: 'HOTEL 402', col: '#ffd166' },
    },

    // Farther Mid-Field Clusters (Z: 20 to 35)
    { x: -36, z: cz - 60, w: 12, h: 46, d: 11, type: 'office', crown: 'flat' },
    { x: -12, z: cz - 58, w: 9, h: 38, d: 9, type: 'office', crown: 'spire' },
    { x: -2, z: cz - 64, w: 12, h: 50, d: 11, type: 'office', crown: 'stepped', hasHelipad: true },
    { x: 38, z: cz - 62, w: 12, h: 48, d: 11, type: 'res', crown: 'stepped' },
  ]

  for (const b of midBuildings) {
    const mat = b.type === 'office' ? officeMat : resMat
    const bMesh = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.d), mat)
    bMesh.position.set(cx + b.x, groundY + b.h / 2, b.z)
    skylineGroup.add(bMesh)

    const roofY = groundY + b.h
    const cap = new THREE.Mesh(new THREE.BoxGeometry(b.w + 0.2, 0.6, b.d + 0.2), darkRoofMat)
    cap.position.set(cx + b.x, roofY + 0.3, b.z)
    skylineGroup.add(cap)

    if (b.crown === 'stepped') {
      const s1 = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.75, 2.5, b.d * 0.75), darkRoofMat)
      s1.position.set(cx + b.x, roofY + 1.85, b.z)
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.5, 2.0, b.d * 0.5), goldAccentMat)
      s2.position.set(cx + b.x, roofY + 4.0, b.z)
      skylineGroup.add(s1, s2)
    } else if (b.crown === 'spire') {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.2, 7.0, 8), darkRoofMat)
      ant.position.set(cx + b.x, roofY + 4.1, b.z)
      skylineGroup.add(ant)

      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2222, fog: false })
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 6), beaconMat)
      beacon.position.set(cx + b.x, roofY + 7.8, b.z)
      skylineGroup.add(beacon)
      beaconsToAnimate.push({ mat: beaconMat, offset: (b.x * 0.12) % 1.0 })
    }

    if (b.hasHelipad) {
      const pad = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.65, 0.08, b.d * 0.65), darkRoofMat)
      pad.position.set(cx + b.x, roofY + 0.65, b.z)
      const hMat = new THREE.MeshBasicMaterial({ color: 0xffd700, fog: false })
      const hBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 2.0), hMat)
      hBar1.position.set(cx + b.x - 0.6, roofY + 0.7, b.z)
      const hBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 2.0), hMat)
      hBar2.position.set(cx + b.x + 0.6, roofY + 0.7, b.z)
      const hBarMid = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.02, 0.35), hMat)
      hBarMid.position.set(cx + b.x, roofY + 0.7, b.z)
      skylineGroup.add(pad, hBar1, hBar2, hBarMid)
    }

    if (b.neon) {
      const signTex = rooftopNeonSignTexture(b.neon.text, b.neon.sub, b.neon.col)
      const signMat = new THREE.MeshBasicMaterial({ map: signTex, fog: false })
      const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 2.0), signMat)
      signMesh.rotation.y = Math.PI
      signMesh.position.set(cx + b.x, roofY + 2.4, b.z + b.d / 2 + 0.1)
      skylineGroup.add(signMesh)
    }

    if (!b.crown || b.crown !== 'spire') {
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2222, fog: false })
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 6), beaconMat)
      beacon.position.set(cx + b.x, roofY + (b.crown === 'stepped' ? 5.4 : 1.2), b.z)
      skylineGroup.add(beacon)
      beaconsToAnimate.push({ mat: beaconMat, offset: (b.x * 0.15) % 1.0 })
    }
  }

  // Aviation Warning Beacon Pulse
  let beaconTime = 0
  animators.push((dt) => {
    beaconTime += dt
    for (const b of beaconsToAnimate) {
      const pulse = Math.sin(beaconTime * 3.2 + b.offset * Math.PI * 2)
      b.mat.color.setHex(pulse > 0.05 ? 0xff2222 : 0x4a0a0a)
    }
  })

  // =========================================================================
  // 6. SHUTO EXPRESSWAY (首都高) & FLOWING TRAFFIC LIGHT TRAILS
  // =========================================================================
  const hwyZ = cz - 46
  const hwyY = -2.5
  const hwyW = 75
  const hwyD = 4.8

  const hwyGroup = new THREE.Group()
  hwyGroup.name = 'shuto-expressway'

  const hwyDeckMat = new THREE.MeshBasicMaterial({ color: 0x141a24, fog: false })
  const hwyDeck = new THREE.Mesh(new THREE.BoxGeometry(hwyW, 0.6, hwyD), hwyDeckMat)
  hwyDeck.position.set(cx, hwyY, hwyZ)

  const barrierMat = new THREE.MeshBasicMaterial({ color: 0x1e2736, fog: false })
  const barrierN = new THREE.Mesh(new THREE.BoxGeometry(hwyW, 0.5, 0.2), barrierMat)
  barrierN.position.set(cx, hwyY + 0.45, hwyZ - hwyD / 2)
  const barrierS = new THREE.Mesh(new THREE.BoxGeometry(hwyW, 0.5, 0.2), barrierMat)
  barrierS.position.set(cx, hwyY + 0.45, hwyZ + hwyD / 2)

  const pierMat = new THREE.MeshBasicMaterial({ color: 0x0f141d, fog: false })
  for (let px = -32; px <= 32; px += 16) {
    const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, hwyY - groundY, 8), pierMat)
    pier.position.set(cx + px, groundY + (hwyY - groundY) / 2, hwyZ)
    hwyGroup.add(pier)
  }

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

  animators.push((dt) => {
    trafficTex.offset.x -= dt * 0.42
  })

  return {
    group: skylineGroup,
    update(dt: number) {
      for (const a of animators) a(dt)
    },
  }
}

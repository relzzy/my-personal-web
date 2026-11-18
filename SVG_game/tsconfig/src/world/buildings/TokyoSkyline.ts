import * as THREE from 'three'
import {
  skylineOfficeWindowsTexture,
  skylineResidentialWindowsTexture,
  rooftopNeonSignTexture,
  celestialMoonTexture,
  tokyoPhotographicPanoramaTexture,
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
 * 1. Celestial Blue-Hour Twilight Sky Dome (R = 142m), twinkling starfield, crescent moon, cruising airliner
 * 2. High-Resolution Curved Panoramic Matte-Painting Environment (R = 68m, Arc ~189°)
 *    anchored in world-space, feathering smoothly at the edges into the ambient sky
 * 3. Near-field genuine 3D architecture:
 *    - Ground alleyway at Y = -12.5m (asphalt, gutter, illuminated vending machines, utility pole & lamp)
 *    - Opposing 3-story building at Z = 60m (Roof Y = -3.5m) with gravel roof, parapet, water tank on stilts, AC chillers
 * 4. Peripheral 3D buildings on the far West and East flanks providing real parallax and depth for side views
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
      starColors[sIdx * 3 + 1] = 1.0 // Ice blue
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
  // 2. CURVED PANORAMIC MATTE-PAINTING ENVIRONMENT (R = 68m, Arc = 189°)
  // =========================================================================
  const panoRadius = 68
  const panoHeight = 42
  const panoArc = Math.PI * 1.05 // ~189 degrees (from ~West through North to ~East)
  const panoThetaStart = Math.PI - panoArc / 2 // Centered towards North (-Z)

  const panoTex = tokyoPhotographicPanoramaTexture()
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
    64,
    1,
    true,
    panoThetaStart,
    panoArc,
  )
  const panoMesh = new THREE.Mesh(panoGeo, panoMat)
  // Anchored in world-space centered around balcony (cx, cz - 5 = 80.0)
  panoMesh.position.set(cx, 8.5, cz - 5)
  skylineGroup.add(panoMesh)

  // =========================================================================
  // 3. NEAR-FIELD 3D: GROUND ALLEYWAY & OPPOSING 3-STORY ROOFTOP (Y: -12.5 to -3.5)
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
  // When looking down from the balcony, the player sees authentic rooftop life
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
  // 4. PERIPHERAL SIDE 3D BUILDINGS (Flanks |X| >= 34m, for side view depth)
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

  interface SideBuildingSpec {
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

  const sideBuildings: SideBuildingSpec[] = [
    // West Flank (Side View depth, looking left from balcony)
    {
      x: -34,
      z: cz - 48,
      w: 12,
      h: 36,
      d: 11,
      type: 'res',
      crown: 'slanted',
    },
    {
      x: -46,
      z: cz - 60,
      w: 13,
      h: 44,
      d: 12,
      type: 'office',
      crown: 'flat',
      neon: { text: 'サイバー', sub: 'CYBER HQ', col: '#00ffff' },
    },

    // East Flank (Side View depth, looking right from balcony)
    {
      x: 34,
      z: cz - 48,
      w: 11,
      h: 38,
      d: 10,
      type: 'office',
      crown: 'spire',
      neon: { text: 'SHINJUKU', sub: 'HOTEL 402', col: '#ffd166' },
    },
    {
      x: 46,
      z: cz - 60,
      w: 13,
      h: 44,
      d: 12,
      type: 'res',
      crown: 'stepped',
      hasHelipad: true,
    },
  ]

  const beaconsToAnimate: { mat: THREE.MeshBasicMaterial; offset: number }[] = []

  for (const b of sideBuildings) {
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

  return {
    group: skylineGroup,
    update(dt: number) {
      for (const a of animators) a(dt)
    },
  }
}

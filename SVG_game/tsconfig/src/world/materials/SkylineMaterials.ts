import * as THREE from 'three'
import { textureCache } from './TextureCache'

/**
 * Optional external panorama image URL override.
 * Drop in any equirectangular/cylindrical .webp or .jpg image URL here to swap the skyline.
 * When null, the high-resolution programmatic canvas texture is used.
 */
export const SKYLINE_TEXTURE_URL: string | null = null

/**
 * High-Resolution 360° Tokyo Panoramic Skyline Texture (4096 x 1024).
 * Designed for an inverted cylindrical backdrop (radius 420, height 260, y: -45 to 215).
 *
 * Vertical layout (y=0 top zenith to y=1024 bottom cylinder base):
 * - y=0 to 600: Deep cosmic indigo to midnight sapphire twilight sky
 * - y=600 to 902: Tokyo skyline silhouettes, dense bokeh window grids, illuminated Tokyo Tower
 * - y=902: Street level horizon (y = -14)
 * - y=902 to 1024: Sub-horizon atmospheric haze matching scene fog (0x1a1f36)
 *
 * Horizontal layout (u=0 to 1.0, 4096px):
 * - u=0.5 (x=2048): North / Direct Balcony View (Tokyo Tower + high-rise district)
 * - u=0.75 (x=3072): West / Left flank view (Shinjuku towers, Docomo tower)
 * - u=0.25 (x=1024): East / Right flank view (Roppongi / Minato towers, Cocoon tower)
 * - u=0.0 & u=1.0: South / Rear view (seamlessly wrapped)
 */
export function tokyoPanoramicSkylineTexture(): THREE.CanvasTexture {
  const key = 'tokyo-panoramic-skyline-4096'
  const cached = textureCache.get(key)
  if (cached) return cached as THREE.CanvasTexture

  const W = 4096
  const H = 1024
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const g = canvas.getContext('2d')!

  // 1. CELESTIAL BLUE-HOUR TWILIGHT SKY GRADIENT
  const skyGrad = g.createLinearGradient(0, 0, 0, H)
  skyGrad.addColorStop(0, '#040714')    // Zenith cosmic black-blue
  skyGrad.addColorStop(0.25, '#0a1024') // Upper twilight navy
  skyGrad.addColorStop(0.55, '#121a38') // Mid-sky midnight sapphire
  skyGrad.addColorStop(0.72, '#1e204a') // Warm dusk violet
  skyGrad.addColorStop(0.85, '#292248') // Tokyo metropolitan underglow
  skyGrad.addColorStop(0.88, '#1a1f36') // Horizon fog blend line (y ≈ 902)
  skyGrad.addColorStop(1.0, '#101426')  // Base foundation below street
  g.fillStyle = skyGrad
  g.fillRect(0, 0, W, H)

  // 2. TWINKLING FAINT STARS IN UPPER CELESTIAL SKY
  let starSeed = 1337
  const starRnd = () => {
    starSeed = (starSeed * 9301 + 49297) % 233280
    return starSeed / 233280
  }
  for (let i = 0; i < 400; i++) {
    const sx = Math.floor(starRnd() * W)
    const sy = Math.floor(starRnd() * 480)
    const size = starRnd() < 0.85 ? 1 : 1.5
    const alpha = 0.35 + starRnd() * 0.55
    g.fillStyle = `rgba(220, 235, 255, ${alpha})`
    g.fillRect(sx, sy, size, size)
  }

  // 3. SEEDED DETERMINISTIC GENERATOR FOR SEAMLESS SKYLINE
  let seed = 42
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  const horizonY = 902 // Street level (y = -14)

  // LAYER 1: Deep Distant High-Rise Silhouettes (Far background, dark indigo)
  g.fillStyle = '#0a1022'
  for (let x = 0; x < W; x += 16 + Math.floor(rnd() * 24)) {
    const w = 20 + Math.floor(rnd() * 32)
    const bHeight = 160 + Math.floor(rnd() * 190)
    const y = horizonY - bHeight
    g.fillRect(x, y, w, bHeight + 40)
    if (x + w > W) {
      // Wrap seamlessly
      g.fillRect(x - W, y, w, bHeight + 40)
    }

    // Distant rooftop spires
    if (rnd() > 0.65) {
      const spireH = 25 + Math.floor(rnd() * 45)
      g.fillRect(x + w / 2 - 1, y - spireH, 2, spireH)
      g.fillStyle = 'rgba(255, 60, 60, 0.85)'
      g.fillRect(x + w / 2 - 1, y - spireH, 2, 2)
      g.fillStyle = '#0a1022'
    }
  }

  // LAYER 2: Mid-Distant Towers with Rich Glowing Window Grids
  for (let x = 0; x < W; x += 28 + Math.floor(rnd() * 42)) {
    // Avoid drawing mid-distant buildings right across Tokyo Tower (x in [1960, 2136])
    if (x > 1940 && x < 2150) continue

    const w = 30 + Math.floor(rnd() * 48)
    const bHeight = 180 + Math.floor(rnd() * 260)
    const y = horizonY - bHeight

    g.fillStyle = '#0e162a'
    g.fillRect(x, y, w, bHeight + 40)
    if (x + w > W) {
      g.fillRect(x - W, y, w, bHeight + 40)
    }

    // Architectural crown
    const crownType = Math.floor(rnd() * 4)
    if (crownType === 1) {
      g.fillRect(x + 4, y - 16, w - 8, 16)
      g.fillRect(x + 10, y - 28, w - 20, 12)
    } else if (crownType === 2) {
      g.beginPath()
      g.moveTo(x, y)
      g.lineTo(x + w, y + 20)
      g.lineTo(x + w, y)
      g.fillStyle = '#0a0f1d'
      g.fill()
      g.fillStyle = '#0e162a'
    } else if (crownType === 3) {
      g.fillRect(x + w / 2 - 1.5, y - 35, 3, 35)
      g.fillStyle = '#ff3333'
      g.fillRect(x + w / 2 - 1.5, y - 36, 3, 3)
      g.fillStyle = '#0e162a'
    }

    // Dense glowing window grid
    const cols = Math.max(3, Math.floor(w / 6.5))
    const rows = Math.floor(bHeight / 9.0)
    const colStep = w / cols
    const rowStep = 9.0

    for (let r = 2; r < rows - 2; r++) {
      for (let c = 1; c < cols - 1; c++) {
        const pRnd = rnd()
        if (pRnd < 0.42) {
          if (pRnd < 0.16) {
            g.fillStyle = '#fde047' // Warm incandescent gold
          } else if (pRnd < 0.28) {
            g.fillStyle = '#fed7aa' // Soft amber
          } else if (pRnd < 0.36) {
            g.fillStyle = '#f1f5f9' // Crisp office white
          } else {
            g.fillStyle = '#38bdf8' // Tech cyan accent
          }

          const wx = x + c * colStep + 0.5
          const wy = y + r * rowStep
          g.fillRect(wx, wy, colStep - 2.0, 4.5)
          if (wx + colStep > W) {
            g.fillRect(wx - W, wy, colStep - 2.0, 4.5)
          }
        }
      }
    }
  }

  // LAYER 3: ICONIC TOKYO LANDMARKS
  // A) DETAILED ILLUMINATED TOKYO TOWER (Centered at x = 2048, u = 0.5)
  const ttX = 2048
  const ttBaseY = horizonY
  const ttTopY = 340 // Peak antenna beacon
  const ttH = ttBaseY - ttTopY // 562px tall

  // Ambient warm golden glow behind Tokyo Tower
  const ttGlow = g.createRadialGradient(ttX, ttBaseY - 260, 20, ttX, ttBaseY - 260, 320)
  ttGlow.addColorStop(0, 'rgba(255, 120, 20, 0.45)')
  ttGlow.addColorStop(0.4, 'rgba(255, 90, 0, 0.22)')
  ttGlow.addColorStop(0.8, 'rgba(255, 60, 0, 0.06)')
  ttGlow.addColorStop(1.0, 'rgba(255, 60, 0, 0)')
  g.fillStyle = ttGlow
  g.fillRect(ttX - 350, ttTopY - 60, 700, ttH + 120)

  // Tower Base Arches & Pylons (Ground to Main Observation Deck)
  const baseW = 140
  const mainDeckY = ttBaseY - 240
  const upperDeckY = ttBaseY - 390

  // Tower tapered structural legs (International orange & white)
  g.strokeStyle = '#ff5500'
  g.lineWidth = 6
  // Left leg
  g.beginPath()
  g.moveTo(ttX - baseW / 2, ttBaseY)
  g.quadraticCurveTo(ttX - baseW * 0.35, ttBaseY - 120, ttX - 22, mainDeckY)
  g.stroke()
  // Right leg
  g.beginPath()
  g.moveTo(ttX + baseW / 2, ttBaseY)
  g.quadraticCurveTo(ttX + baseW * 0.35, ttBaseY - 120, ttX + 22, mainDeckY)
  g.stroke()

  // Inner arch at base
  g.beginPath()
  g.arc(ttX, ttBaseY, 34, Math.PI, 0)
  g.lineWidth = 4
  g.strokeStyle = '#ff7722'
  g.stroke()

  // Cross truss lattice between legs
  g.strokeStyle = 'rgba(255, 230, 180, 0.65)'
  g.lineWidth = 1.8
  for (let ly = ttBaseY - 30; ly > mainDeckY; ly -= 22) {
    const factor = (ly - mainDeckY) / (ttBaseY - mainDeckY)
    const legHalfW = 22 + (baseW / 2 - 22) * factor
    g.beginPath()
    g.moveTo(ttX - legHalfW, ly)
    g.lineTo(ttX + legHalfW, ly)
    g.stroke()
    g.beginPath()
    g.moveTo(ttX - legHalfW, ly)
    g.lineTo(ttX + legHalfW, ly - 22)
    g.stroke()
    g.beginPath()
    g.moveTo(ttX + legHalfW, ly)
    g.lineTo(ttX - legHalfW, ly - 22)
    g.stroke()
  }

  // 1. Main Observation Deck (Two-tier glowing structure)
  g.fillStyle = '#ff6600'
  g.fillRect(ttX - 26, mainDeckY - 2, 52, 28)
  // Observation deck window band
  g.fillStyle = '#fffbeb'
  g.fillRect(ttX - 24, mainDeckY + 4, 48, 8)
  g.fillStyle = '#fde047'
  g.fillRect(ttX - 24, mainDeckY + 14, 48, 7)

  // Shaft between Main Deck and Special Deck (Alternating white/orange bands)
  const shaftSteps = 6
  const shaftH = (mainDeckY - upperDeckY) / shaftSteps
  for (let s = 0; s < shaftSteps; s++) {
    const sy = mainDeckY - (s + 1) * shaftH
    const fTop = 1 - (s + 1) / shaftSteps
    const fBot = 1 - s / shaftSteps
    const wTop = 9 + 11 * fTop
    const wBot = 9 + 11 * fBot

    g.fillStyle = s % 2 === 0 ? '#ff5500' : '#ffffff'
    g.beginPath()
    g.moveTo(ttX - wBot, sy + shaftH)
    g.lineTo(ttX + wBot, sy + shaftH)
    g.lineTo(ttX + wTop, sy)
    g.lineTo(ttX - wTop, sy)
    g.closePath()
    g.fill()

    // Warm floodlight highlight
    g.strokeStyle = 'rgba(255, 235, 160, 0.7)'
    g.lineWidth = 1.2
    g.stroke()
  }

  // 2. Special Observation Deck (Upper spherical/hexagonal deck)
  g.fillStyle = '#fef08a'
  g.beginPath()
  g.arc(ttX, upperDeckY + 2, 11, 0, Math.PI * 2)
  g.fill()
  g.fillStyle = '#ff5500'
  g.fillRect(ttX - 12, upperDeckY + 8, 24, 6)

  // 3. Antenna Spire & Obstruction Strobe
  g.strokeStyle = '#ffffff'
  g.lineWidth = 3
  g.beginPath()
  g.moveTo(ttX, upperDeckY - 8)
  g.lineTo(ttX, ttTopY)
  g.stroke()

  // Spire horizontal antenna crossbars
  g.lineWidth = 1.5
  for (let ay = upperDeckY - 18; ay > ttTopY; ay -= 24) {
    const aw = 14 * ((ay - ttTopY) / (upperDeckY - ttTopY))
    g.beginPath()
    g.moveTo(ttX - aw, ay)
    g.lineTo(ttX + aw, ay)
    g.stroke()
  }

  // Top aviation beacon light
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(ttX, ttTopY, 3.5, 0, Math.PI * 2)
  g.fill()
  g.fillStyle = 'rgba(255, 40, 40, 0.9)'
  g.beginPath()
  g.arc(ttX, ttTopY, 6, 0, Math.PI * 2)
  g.fill()

  // B) SHINJUKU COCOON TOWER (x = 1024, u = 0.25)
  const ccX = 1024
  g.fillStyle = '#0a101f'
  g.beginPath()
  g.ellipse(ccX, horizonY - 180, 36, 180, 0, 0, Math.PI * 2)
  g.fill()
  g.strokeStyle = 'rgba(56, 189, 248, 0.4)'
  g.lineWidth = 1.5
  for (let cy = horizonY - 340; cy < horizonY; cy += 16) {
    g.beginPath()
    g.moveTo(ccX - 32, cy)
    g.lineTo(ccX + 32, cy + 32)
    g.stroke()
    g.beginPath()
    g.moveTo(ccX + 32, cy)
    g.lineTo(ccX - 32, cy + 32)
    g.stroke()
  }

  // C) NTT DOCOMO TOWER (x = 3120, u = 0.76)
  const dcX = 3120
  g.fillStyle = '#0c1224'
  g.fillRect(dcX - 22, horizonY - 320, 44, 320)
  g.fillRect(dcX - 14, horizonY - 360, 28, 40)
  g.fillRect(dcX - 4, horizonY - 430, 8, 70) // Spire
  // Glowing clock face
  g.fillStyle = '#fef08a'
  g.fillRect(dcX - 7, horizonY - 350, 14, 14)

  // 4. SHUTO EXPRESSWAY ILLUMINATED TRAFFIC FLOW ALONG HORIZON
  for (let lane = 0; lane < 2; lane++) {
    const laneY = horizonY - 14 + lane * 7
    for (let i = 0; i < 90; i++) {
      const tx = (i * 46 + (lane * 23)) % W
      const tLen = 28 + (i % 5) * 8
      const grad = g.createLinearGradient(tx, laneY, tx + tLen, laneY)
      if (lane === 0) {
        // Red taillights
        grad.addColorStop(0, 'rgba(255, 30, 50, 0)')
        grad.addColorStop(0.3, 'rgba(255, 40, 60, 0.85)')
        grad.addColorStop(0.7, 'rgba(255, 180, 180, 0.95)')
        grad.addColorStop(1.0, 'rgba(255, 30, 50, 0)')
      } else {
        // White/Gold headlights
        grad.addColorStop(0, 'rgba(255, 240, 180, 0)')
        grad.addColorStop(0.3, 'rgba(255, 235, 150, 0.9)')
        grad.addColorStop(0.7, 'rgba(255, 255, 255, 1.0)')
        grad.addColorStop(1.0, 'rgba(255, 240, 180, 0)')
      }
      g.fillStyle = grad
      g.fillRect(tx, laneY, tLen, 2.8)
    }
  }

  // 5. SEAMLESS BLEND BASE & HORIZON FOG HAZE
  const hazeGrad = g.createLinearGradient(0, horizonY - 80, 0, H)
  hazeGrad.addColorStop(0, 'rgba(26, 31, 54, 0)')
  hazeGrad.addColorStop(0.35, 'rgba(26, 31, 54, 0.55)')
  hazeGrad.addColorStop(0.75, 'rgba(26, 31, 54, 0.95)')
  hazeGrad.addColorStop(1.0, '#1a1f36') // Perfectly matches scene.fog (0x1a1f36)
  g.fillStyle = hazeGrad
  g.fillRect(0, horizonY - 80, W, H - (horizonY - 80))

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Ground & Street Level Asphalt Texture (1024 x 1024)
 * For the 1000 x 1000 ground plane planted at y = -14.
 * Features dark Tokyo road asphalt, road lane markings, and warm sodium streetlamp light pools.
 */
export function tokyoStreetGroundTexture(): THREE.CanvasTexture {
  const key = 'tokyo-street-ground-1024'
  const cached = textureCache.get(key)
  if (cached) return cached as THREE.CanvasTexture

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1024
  const g = canvas.getContext('2d')!

  // Deep dark Tokyo asphalt base
  g.fillStyle = '#0f131a'
  g.fillRect(0, 0, 1024, 1024)

  // Subtle asphalt aggregate flecks
  for (let i = 0; i < 2400; i++) {
    const x = Math.random() * 1024
    const y = Math.random() * 1024
    const b = 20 + Math.floor(Math.random() * 22)
    g.fillStyle = `rgb(${b},${b + 2},${b + 5})`
    g.fillRect(x, y, 2, 2)
  }

  // Major Avenue A (North-South, X = 512, Width = 96px)
  const aveW = 96
  const aveX = 512 - aveW / 2
  g.fillStyle = '#0c0f16'
  g.fillRect(aveX, 0, aveW, 1024)

  // Major Avenue B (East-West, Y = 512, Height = 96px)
  const aveY = 512 - aveW / 2
  g.fillRect(0, aveY, 1024, aveW)

  // Curbs & gutters
  g.fillStyle = '#1c2331'
  g.fillRect(aveX - 4, 0, 4, 1024)
  g.fillRect(aveX + aveW, 0, 4, 1024)
  g.fillRect(0, aveY - 4, 1024, 4)
  g.fillRect(0, aveY + aveW, 1024, 4)

  // White road lane markings & dashed lines
  g.fillStyle = 'rgba(235, 240, 255, 0.65)'
  // North-South center dashed divider
  for (let y = 0; y < 1024; y += 48) {
    if (y > aveY - 30 && y < aveY + aveW + 30) continue // Skip intersection
    g.fillRect(512 - 2, y, 4, 28)
  }
  // East-West center dashed divider
  for (let x = 0; x < 1024; x += 48) {
    if (x > aveX - 30 && x < aveX + aveW + 30) continue
    g.fillRect(x, 512 - 2, 28, 4)
  }

  // Pedestrian zebra crosswalks at intersection
  const barW = 8
  for (let bx = aveX + 8; bx < aveX + aveW - 8; bx += 16) {
    // North crosswalk
    g.fillRect(bx, aveY - 26, barW, 20)
    // South crosswalk
    g.fillRect(bx, aveY + aveW + 6, barW, 20)
  }
  for (let by = aveY + 8; by < aveY + aveW - 8; by += 16) {
    // West crosswalk
    g.fillRect(aveX - 26, by, 20, barW)
    // East crosswalk
    g.fillRect(aveX + aveW + 6, by, 20, barW)
  }

  // Warm sodium streetlamp radial illumination pools
  const lampPositions = [
    { x: aveX - 24, y: aveY - 24 },
    { x: aveX + aveW + 24, y: aveY - 24 },
    { x: aveX - 24, y: aveY + aveW + 24 },
    { x: aveX + aveW + 24, y: aveY + aveW + 24 },
    { x: aveX + aveW / 2, y: 160 },
    { x: aveX + aveW / 2, y: 864 },
    { x: 160, y: aveY + aveW / 2 },
    { x: 864, y: aveY + aveW / 2 },
  ]

  for (const lp of lampPositions) {
    const lampGlow = g.createRadialGradient(lp.x, lp.y, 4, lp.x, lp.y, 140)
    lampGlow.addColorStop(0, 'rgba(255, 195, 105, 0.45)')
    lampGlow.addColorStop(0.35, 'rgba(255, 165, 65, 0.22)')
    lampGlow.addColorStop(0.7, 'rgba(255, 135, 45, 0.08)')
    lampGlow.addColorStop(1.0, 'rgba(255, 130, 40, 0)')
    g.fillStyle = lampGlow
    g.beginPath()
    g.arc(lp.x, lp.y, 140, 0, Math.PI * 2)
    g.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(12, 12)
  textureCache.set(key, tex)
  return tex
}

/**
 * Low-Cost Shared Emissive Window Texture (512 x 512)
 * For mid-ground building InstancedMesh.
 */
export function midgroundWindowTexture(): THREE.CanvasTexture {
  const key = 'midground-window-grid-512'
  const cached = textureCache.get(key)
  if (cached) return cached as THREE.CanvasTexture

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Dark architectural concrete body
  g.fillStyle = '#101522'
  g.fillRect(0, 0, 512, 512)

  const cols = 16
  const rows = 24
  const cw = 512 / cols
  const ch = 512 / rows

  for (let r = 0; r < rows; r++) {
    // Floor slab reveal
    g.fillStyle = '#0a0d16'
    g.fillRect(0, r * ch, 512, 3)

    for (let c = 0; c < cols; c++) {
      const hash = Math.sin(r * 113.3 + c * 317.7) * 43758.5453
      const rnd = hash - Math.floor(hash)

      const wx = c * cw + 2
      const wy = r * ch + 4
      const ww = cw - 4
      const wh = ch - 5

      if (rnd < 0.38) {
        if (rnd < 0.16) {
          g.fillStyle = '#fed7aa' // Warm amber
        } else if (rnd < 0.28) {
          g.fillStyle = '#fef08a' // Warm gold
        } else if (rnd < 0.35) {
          g.fillStyle = '#e2e8f0' // Office white
        } else {
          g.fillStyle = '#38bdf8' // Tech cyan
        }
        g.fillRect(wx, wy, ww, wh)
      } else {
        g.fillStyle = '#141a29'
        g.fillRect(wx, wy, ww, wh)
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(2, 2)
  textureCache.set(key, tex)
  return tex
}

/**
 * Neighbor Apartment Facade Texture (512 x 512)
 * Low-poly dark architectural concrete with balcony ledges and warm interior windows.
 */
export function neighborBuildingTexture(): THREE.CanvasTexture {
  const key = 'neighbor-building-facade-512'
  const cached = textureCache.get(key)
  if (cached) return cached as THREE.CanvasTexture

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Dark architectural concrete
  g.fillStyle = '#151b26'
  g.fillRect(0, 0, 512, 512)

  const floors = 7
  const floorH = 512 / floors

  for (let f = 0; f < floors; f++) {
    const fy = f * floorH

    // Balcony slab ledge line
    g.fillStyle = '#0f141d'
    g.fillRect(0, fy, 512, 6)
    g.fillStyle = 'rgba(255, 255, 255, 0.04)'
    g.fillRect(0, fy + 6, 512, 2)

    // Window units on each floor
    for (let u = 0; u < 4; u++) {
      const ux = u * 128 + 16
      const uw = 96
      const uh = floorH - 18

      // Balcony glass / wall area
      g.fillStyle = '#1c2433'
      g.fillRect(ux, fy + 12, uw, uh)

      // Interior glowing window behind curtain
      const rnd = Math.sin(f * 37.1 + u * 83.3)
      if (rnd > -0.2) {
        g.fillStyle = rnd > 0.4 ? '#fed7aa' : '#fde68a'
        g.fillRect(ux + 12, fy + 16, uw - 24, uh - 16)

        // Balcony dark rail bar
        g.fillStyle = '#10141d'
        g.fillRect(ux, fy + uh - 6, uw, 10)
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Balcony Teak Parquet Decking Texture
 * Interlocking 4-slat teak wood tiles with authentic wood grain and drainage grooves.
 */
export function balconyTeakDeckTexture(): THREE.CanvasTexture {
  const key = 'balcony-teak-deck'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  g.fillStyle = '#26170d'
  g.fillRect(0, 0, 512, 512)

  const tileSize = 128
  const slatsPerTile = 4
  const slatW = tileSize / slatsPerTile

  for (let ty = 0; ty < 512; ty += tileSize) {
    for (let tx = 0; tx < 512; tx += tileSize) {
      const isHorizontal = ((tx / tileSize) + (ty / tileSize)) % 2 === 0

      g.fillStyle = '#140c07'
      g.fillRect(tx, ty, tileSize, 2)
      g.fillRect(tx, ty, 2, tileSize)

      for (let s = 0; s < slatsPerTile; s++) {
        const toneVar = ((tx * 7 + ty * 13 + s * 19) % 25) - 12
        const r = Math.min(255, Math.max(0, 150 + toneVar * 2))
        const gr = Math.min(255, Math.max(0, 92 + toneVar))
        const b = Math.min(255, Math.max(0, 50 + toneVar))

        if (isHorizontal) {
          const sy = ty + s * slatW + 1
          g.fillStyle = `rgb(${r},${gr},${b})`
          g.fillRect(tx + 2, sy, tileSize - 4, slatW - 2)

          for (let streak = 0; streak < 4; streak++) {
            const streakY = sy + Math.random() * (slatW - 3)
            g.fillStyle = 'rgba(60, 32, 16, 0.25)'
            g.fillRect(tx + 2, streakY, tileSize - 4, 1)
          }
        } else {
          const sx = tx + s * slatW + 1
          g.fillStyle = `rgb(${r},${gr},${b})`
          g.fillRect(sx, ty + 2, slatW - 2, tileSize - 4)

          for (let streak = 0; streak < 4; streak++) {
            const streakX = sx + Math.random() * (slatW - 3)
            g.fillStyle = 'rgba(60, 32, 16, 0.25)'
            g.fillRect(streakX, ty + 2, 1, tileSize - 4)
          }
        }
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 3)
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Sun Heights Residential Facade Tile Texture
 */
export function sunHeightsFacadeTexture(): THREE.CanvasTexture {
  const key = 'sun-heights-facade-tile'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  g.fillStyle = '#171c26'
  g.fillRect(0, 0, 512, 512)

  const colW = 16
  for (let x = 0; x < 512; x += colW) {
    const toneVar = ((x * 13) % 19) - 9
    const r = Math.min(255, Math.max(0, 28 + toneVar))
    const gr = Math.min(255, Math.max(0, 34 + toneVar))
    const b = Math.min(255, Math.max(0, 46 + toneVar))

    g.fillStyle = `rgb(${r},${gr},${b})`
    g.fillRect(x + 1, 0, colW - 2, 512)

    g.fillStyle = '#0f121a'
    g.fillRect(x, 0, 1, 512)
  }

  g.fillStyle = '#10141d'
  for (let y = 0; y < 512; y += 128) {
    g.fillRect(0, y, 512, 6)
    g.fillStyle = 'rgba(255, 255, 255, 0.05)'
    g.fillRect(0, y + 6, 512, 1)
    g.fillStyle = '#10141d'
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 4)
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Japanese Balcony Privacy Divider Screen (*Hedate-ban* 隔て板)
 */
export function frostedGlassPartitionTexture(): THREE.CanvasTexture {
  const key = 'balcony-privacy-partition'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 512
  const g = canvas.getContext('2d')!

  g.fillStyle = '#475569'
  g.fillRect(0, 0, 256, 512)

  for (let i = 0; i < 600; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 512
    g.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.12)'
    g.fillRect(x, y, 2, 2)
  }

  g.lineWidth = 12
  g.strokeStyle = '#1e1b18'
  g.strokeRect(6, 6, 244, 500)

  g.fillStyle = '#1e1b18'
  g.fillRect(0, 250, 256, 12)

  g.fillStyle = '#dc2626'
  g.fillRect(40, 420, 176, 28)

  g.fillStyle = '#ffffff'
  g.font = 'bold 12px "Noto Sans JP", sans-serif'
  g.textAlign = 'center'
  g.fillText('非常の際には', 128, 438)

  g.fillStyle = '#cbd5e1'
  g.font = '10px "Noto Sans JP", sans-serif'
  g.fillText('ここを破って隣戸へ避難出来ます', 128, 465)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Industrial Tar and Gravel Rooftop Texture
 */
export function rooftopGravelTexture(): THREE.CanvasTexture {
  const key = 'rooftop-gravel-tar'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const g = canvas.getContext('2d')!

  g.fillStyle = '#181e28'
  g.fillRect(0, 0, 256, 256)

  for (let i = 0; i < 900; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 256
    const brightness = 35 + Math.floor(Math.random() * 45)
    g.fillStyle = `rgb(${brightness},${brightness + 4},${brightness + 8})`
    g.fillRect(x, y, 2, 2)
  }

  g.strokeStyle = '#0f131a'
  g.lineWidth = 3
  g.beginPath()
  g.moveTo(0, 128)
  g.lineTo(256, 128)
  g.moveTo(128, 0)
  g.lineTo(128, 256)
  g.stroke()

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 3)
  textureCache.set(key, tex)
  return tex
}

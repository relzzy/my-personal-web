import * as THREE from 'three'
import { textureCache } from './TextureCache'
import tokyoPanoramaUrl from '../../assets/tokyo_balcony_panorama.jpg'

/**
 * Photographic Matte-Painting Tokyo Skyline Panorama Texture.
 * Loads the authentic 4th-floor residential dusk panorama and applies smooth
 * horizontal edge feathering (left 8% and right 8%) and top vertical feathering
 * using an HTML5 canvas mask so it blends seamlessly into the sky dome.
 */
export function tokyoPhotographicPanoramaTexture(): THREE.CanvasTexture {
  const key = 'tokyo-photographic-panorama'
  const cached = textureCache.get(key)
  if (cached) return cached as THREE.CanvasTexture

  const canvas = document.createElement('canvas')
  canvas.width = 1920
  canvas.height = 1080
  const ctx = canvas.getContext('2d')!

  // Deep twilight background while the image finishes loading
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1080)
  bgGrad.addColorStop(0, '#040817')
  bgGrad.addColorStop(0.5, '#0e1838')
  bgGrad.addColorStop(1.0, '#262244')
  ctx.fillStyle = bgGrad
  ctx.fillRect(0, 0, 1920, 1080)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = tokyoPanoramaUrl
  img.onload = () => {
    canvas.width = img.naturalWidth || 1920
    canvas.height = img.naturalHeight || 1080
    const w = canvas.width
    const h = canvas.height

    // 1. Draw base matte painting
    ctx.drawImage(img, 0, 0, w, h)

    // 2. Feather horizontal edges (left & right) and top edge into sky dome
    ctx.save()
    ctx.globalCompositeOperation = 'destination-in'

    // Left and right horizontal feather
    const hGrad = ctx.createLinearGradient(0, 0, w, 0)
    hGrad.addColorStop(0, 'rgba(0, 0, 0, 0)')
    hGrad.addColorStop(0.08, 'rgba(0, 0, 0, 1)')
    hGrad.addColorStop(0.92, 'rgba(0, 0, 0, 1)')
    hGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = hGrad
    ctx.fillRect(0, 0, w, h)

    // Top vertical feather (soft transition to upper cosmic sky)
    const vGrad = ctx.createLinearGradient(0, 0, 0, h)
    vGrad.addColorStop(0, 'rgba(0, 0, 0, 0)')
    vGrad.addColorStop(0.12, 'rgba(0, 0, 0, 1)')
    vGrad.addColorStop(1.0, 'rgba(0, 0, 0, 1)')
    ctx.fillStyle = vGrad
    ctx.fillRect(0, 0, w, h)

    ctx.restore()

    texture.needsUpdate = true
  }

  textureCache.set(key, texture)
  return texture
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

  // Deep rich teak base
  g.fillStyle = '#26170d'
  g.fillRect(0, 0, 512, 512)

  const tileSize = 128
  const slatsPerTile = 4
  const slatW = tileSize / slatsPerTile

  for (let ty = 0; ty < 512; ty += tileSize) {
    for (let tx = 0; tx < 512; tx += tileSize) {
      const isHorizontal = ((tx / tileSize) + (ty / tileSize)) % 2 === 0

      // Tile groove boundary
      g.fillStyle = '#140c07'
      g.fillRect(tx, ty, tileSize, 2)
      g.fillRect(tx, ty, 2, tileSize)

      for (let s = 0; s < slatsPerTile; s++) {
        // Individual teak slat color variation
        const toneVar = ((tx * 7 + ty * 13 + s * 19) % 25) - 12
        const r = Math.min(255, Math.max(0, 150 + toneVar * 2))
        const gr = Math.min(255, Math.max(0, 92 + toneVar))
        const b = Math.min(255, Math.max(0, 50 + toneVar))

        if (isHorizontal) {
          const sy = ty + s * slatW + 1
          g.fillStyle = `rgb(${r},${gr},${b})`
          g.fillRect(tx + 2, sy, tileSize - 4, slatW - 2)

          // Wood grain streaks
          for (let streak = 0; streak < 4; streak++) {
            const streakY = sy + Math.random() * (slatW - 3)
            g.fillStyle = 'rgba(60, 32, 16, 0.25)'
            g.fillRect(tx + 2, streakY, tileSize - 4, 1)
          }
        } else {
          const sx = tx + s * slatW + 1
          g.fillStyle = `rgb(${r},${gr},${b})`
          g.fillRect(sx, ty + 2, slatW - 2, tileSize - 4)

          // Wood grain streaks
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
 * Procedural Commercial Skyscraper Office Window Grid Texture
 * Dark structural spandrels with randomized glowing office windows (amber, cool white, cyan).
 */
export function skylineOfficeWindowsTexture(): THREE.CanvasTexture {
  const key = 'skyline-office-windows'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Deep obsidian facade
  g.fillStyle = '#0a0e17'
  g.fillRect(0, 0, 512, 512)

  const cols = 16
  const rows = 24
  const cellW = 512 / cols
  const cellH = 512 / rows

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hash = Math.sin(r * 127.1 + c * 311.7) * 43758.5453
      const rnd = hash - Math.floor(hash)

      // Spandrel frame
      const x = c * cellW
      const y = r * cellH
      const w = cellW - 3
      const h = cellH - 3

      if (rnd < 0.42) {
        // Lit window - choose color temperature
        let lightCol: string
        if (rnd < 0.22) {
          // Warm incandescent amber
          lightCol = rnd < 0.11 ? '#ffd166' : '#ffe8a3'
        } else if (rnd < 0.35) {
          // Modern cool white
          lightCol = '#e0f2fe'
        } else {
          // High-tech cyan
          lightCol = '#38bdf8'
        }
        g.fillStyle = lightCol
        g.fillRect(x + 1.5, y + 1.5, w, h)

        // Subtle internal blinds or floor partition
        if (rnd > 0.15 && rnd < 0.3) {
          g.fillStyle = 'rgba(20, 20, 30, 0.4)'
          g.fillRect(x + 1.5, y + 1.5, w, h * 0.35)
        }
      } else {
        // Darkened glass with subtle city sky reflection
        g.fillStyle = '#101622'
        g.fillRect(x + 1.5, y + 1.5, w, h)
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Residential High-Rise Windows Texture
 * Warmer tones, private balconies, and varied soft glows.
 */
export function skylineResidentialWindowsTexture(): THREE.CanvasTexture {
  const key = 'skyline-residential-windows'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  g.fillStyle = '#0c101a'
  g.fillRect(0, 0, 512, 512)

  const cols = 12
  const rows = 20
  const cellW = 512 / cols
  const cellH = 512 / rows

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hash = Math.sin(r * 93.3 + c * 241.1) * 23421.631
      const rnd = hash - Math.floor(hash)

      const x = c * cellW
      const y = r * cellH
      const w = cellW - 4
      const h = cellH - 4

      // Balcony silhouette at bottom of window
      if (rnd < 0.38) {
        // Warm living room glow
        const glow = rnd < 0.2 ? '#fbcfe8' : rnd < 0.28 ? '#fde68a' : '#fed7aa'
        g.fillStyle = glow
        g.fillRect(x + 2, y + 2, w, h)

        // Balcony dark railing overlay
        g.fillStyle = '#141a26'
        g.fillRect(x + 2, y + h - 5, w, 5)
      } else {
        // Dark room
        g.fillStyle = '#131824'
        g.fillRect(x + 2, y + 2, w, h)
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Tokyo Tower Lattice Texture
 * White and international orange lattice diagonals with observation deck windows.
 */
export function tokyoTowerLatticeTexture(): THREE.CanvasTexture {
  const key = 'tokyo-tower-lattice'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // International orange background
  g.fillStyle = '#ff4d00'
  g.fillRect(0, 0, 256, 512)

  // Alternating white bands
  g.fillStyle = '#f8fafc'
  const bandH = 64
  for (let y = bandH; y < 512; y += bandH * 2) {
    g.fillRect(0, y, 256, bandH)
  }

  // Steel cross-bracing diagonal trusses
  g.lineWidth = 4
  g.strokeStyle = 'rgba(255, 255, 255, 0.7)'
  for (let y = 0; y < 512; y += 32) {
    g.beginPath()
    g.moveTo(0, y)
    g.lineTo(256, y + 32)
    g.stroke()

    g.beginPath()
    g.moveTo(256, y)
    g.lineTo(0, y + 32)
    g.stroke()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Shuto Expressway Traffic Light Streaks Texture
 * Flowing dual-direction light trails: red taillights and brilliant white/gold headlights.
 */
export function highwayTrafficTrailsTexture(): THREE.CanvasTexture {
  const key = 'highway-traffic-trails'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 128
  const g = canvas.getContext('2d')!

  // Dark road asphalt base
  g.fillStyle = '#090b10'
  g.fillRect(0, 0, 1024, 128)

  // Concrete highway barrier divider in middle
  g.fillStyle = '#1e2430'
  g.fillRect(0, 60, 1024, 8)

  // Lane 1 & 2: Heading East (Red Taillights)
  for (let i = 0; i < 48; i++) {
    const x = (i * 22 + (i % 3) * 7) % 1024
    const y = 14 + (i % 3) * 14
    const len = 35 + ((i * 17) % 55)

    // Red light blur streak
    const grad = g.createLinearGradient(x, y, x + len, y)
    grad.addColorStop(0, 'rgba(255, 30, 60, 0)')
    grad.addColorStop(0.3, 'rgba(255, 30, 60, 0.85)')
    grad.addColorStop(0.7, 'rgba(255, 200, 200, 1.0)')
    grad.addColorStop(1, 'rgba(255, 30, 60, 0)')

    g.fillStyle = grad
    g.fillRect(x, y, len, 3.5)
  }

  // Lane 3 & 4: Heading West (White/Gold Headlights)
  for (let i = 0; i < 48; i++) {
    const x = (i * 24 + (i % 4) * 9) % 1024
    const y = 74 + (i % 3) * 14
    const len = 40 + ((i * 21) % 65)

    const grad = g.createLinearGradient(x, y, x + len, y)
    grad.addColorStop(0, 'rgba(255, 250, 220, 0)')
    grad.addColorStop(0.3, 'rgba(255, 240, 180, 0.9)')
    grad.addColorStop(0.7, 'rgba(255, 255, 255, 1.0)')
    grad.addColorStop(1, 'rgba(255, 250, 220, 0)')

    g.fillStyle = grad
    g.fillRect(x, y, len, 3.5)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Japanese Rooftop Neon Signboard
 */
export function rooftopNeonSignTexture(
  mainText: string,
  subText: string,
  color: string,
  bgBorder = '#0d131f',
): THREE.CanvasTexture {
  const key = `neon-sign-${mainText}-${color}`
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 160
  const g = canvas.getContext('2d')!

  // Metal sign frame
  g.fillStyle = bgBorder
  g.fillRect(0, 0, 512, 160)

  // Neon tube border glow
  g.lineWidth = 4
  g.strokeStyle = color
  g.strokeRect(10, 10, 492, 140)

  // Subtle inner sign panel
  g.fillStyle = '#060a12'
  g.fillRect(14, 14, 484, 132)

  // Glow shadow for main kanji / letters
  g.shadowColor = color
  g.shadowBlur = 18

  // Main text
  g.fillStyle = color
  g.font = 'bold 58px "Noto Sans JP", sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText(mainText, 256, 72)

  // Sub text
  g.shadowBlur = 8
  g.fillStyle = '#ffffff'
  g.font = 'bold 22px monospace'
  g.fillText(subText, 256, 122)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

/**
 * Luminous Moon Texture with Crescent Mask & Soft Crater Detail
 */
export function celestialMoonTexture(): THREE.CanvasTexture {
  const key = 'celestial-crescent-moon'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Clear transparent
  g.clearRect(0, 0, 256, 256)

  // Draw full glowing orb first
  const cx = 128
  const cy = 128
  const r = 90

  // Crescent shape via clip
  g.save()
  g.beginPath()
  g.arc(cx, cy, r, 0, Math.PI * 2)
  g.fillStyle = '#fffdf0'
  g.fill()

  // Cutout with offset circle to make a crescent
  g.globalCompositeOperation = 'destination-out'
  g.beginPath()
  g.arc(cx - 36, cy - 20, r - 4, 0, Math.PI * 2)
  g.fill()
  g.restore()

  // Soft lunar surface shading on crescent rim
  g.globalCompositeOperation = 'source-atop'
  const grad = g.createRadialGradient(cx, cy, 40, cx, cy, r)
  grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)')
  grad.addColorStop(0.75, 'rgba(255, 248, 220, 0.95)')
  grad.addColorStop(1, 'rgba(255, 230, 160, 0.8)')
  g.fillStyle = grad
  g.fillRect(0, 0, 256, 256)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

/**
 * High-Resolution 2.5D Tokyo Panoramic Skyline Texture (2048 x 512)
 * Designed for a 220-degree world-space cylindrical backdrop.
 * Features iconic layered Tokyo high-rise silhouettes, thousands of glowing windows,
 * radio spires with aviation beacons, and soft atmospheric base haze.
 */
export function tokyoPanoramicSkylineTexture(): THREE.CanvasTexture {
  const key = 'tokyo-panoramic-skyline-2048'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Clear transparent
  g.clearRect(0, 0, 2048, 512)

  // Seeded pseudo-random generator for repeatable, deterministic skyline
  let seed = 42
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  // LAYER 1: Deep Distant Silhouettes (Farthest layer, darker blue-grey)
  g.fillStyle = 'rgba(10, 16, 32, 0.95)'
  const baseH = 260
  for (let x = 0; x < 2048; x += 18 + Math.floor(rnd() * 26)) {
    const w = 18 + Math.floor(rnd() * 32)
    const h = baseH + Math.floor(rnd() * 160)
    const y = 512 - h
    g.fillRect(x, y, w, h)

    // Spires & antennas on distant towers
    if (rnd() > 0.6) {
      const antH = 20 + Math.floor(rnd() * 40)
      g.fillRect(x + w / 2 - 1, y - antH, 2, antH)
      // Distant red beacon
      g.fillStyle = 'rgba(255, 40, 40, 0.8)'
      g.fillRect(x + w / 2 - 1, y - antH, 2, 2)
      g.fillStyle = 'rgba(10, 16, 32, 0.95)'
    }
  }

  // LAYER 2: Mid-Distant High-Rise Silhouettes with Lit Window Clusters
  for (let x = 0; x < 2048; x += 28 + Math.floor(rnd() * 40)) {
    const w = 26 + Math.floor(rnd() * 45)
    const h = 210 + Math.floor(rnd() * 190)
    const y = 512 - h

    // Dark architectural body
    g.fillStyle = '#0f172a'
    g.fillRect(x, y, w, h)

    // Architectural crown variations
    const crownType = Math.floor(rnd() * 4)
    if (crownType === 1) {
      // Stepped crown
      g.fillRect(x + 4, y - 14, w - 8, 14)
      g.fillRect(x + 8, y - 24, w - 16, 10)
    } else if (crownType === 2) {
      // Slanted roof
      g.beginPath()
      g.moveTo(x, y)
      g.lineTo(x + w, y + 16)
      g.lineTo(x + w, y)
      g.fillStyle = '#090d16'
      g.fill()
      g.fillStyle = '#0f172a'
    } else if (crownType === 3) {
      // Central spire
      g.fillRect(x + w / 2 - 1.5, y - 30, 3, 30)
      g.fillStyle = '#ff2222'
      g.fillRect(x + w / 2 - 1.5, y - 31, 3, 3)
      g.fillStyle = '#0f172a'
    }

    // Glowing window matrix
    const winCols = Math.max(3, Math.floor(w / 5.5))
    const winRows = Math.floor(h / 7.5)
    for (let r = 2; r < winRows - 4; r++) {
      for (let c = 1; c < winCols - 1; c++) {
        const pRnd = rnd()
        if (pRnd < 0.38) {
          // Warm amber, white, or cyan glow
          if (pRnd < 0.2) {
            g.fillStyle = pRnd < 0.1 ? '#fed7aa' : '#fef08a' // Warm amber
          } else if (pRnd < 0.32) {
            g.fillStyle = '#e2e8f0' // Cool office white
          } else {
            g.fillStyle = '#38bdf8' // Tech cyan
          }
          const wx = x + c * (w / winCols) + 0.5
          const wy = y + r * 7.5
          g.fillRect(wx, wy, 2.5, 3.2)
        }
      }
    }
  }

  // LAYER 3: Prominent Tokyo Landmark Silhouettes
  // 1. Shinjuku Cocoon Tower silhouette around x = 520
  g.fillStyle = '#090e1a'
  g.beginPath()
  g.ellipse(520, 320, 32, 190, 0, 0, Math.PI * 2)
  g.fill()
  // Cross-hatch diagonal window grid on Cocoon Tower
  g.strokeStyle = 'rgba(56, 189, 248, 0.45)'
  g.lineWidth = 1.5
  for (let cy = 160; cy < 500; cy += 14) {
    g.beginPath()
    g.moveTo(492, cy)
    g.lineTo(548, cy + 28)
    g.stroke()
    g.beginPath()
    g.moveTo(548, cy)
    g.lineTo(492, cy + 28)
    g.stroke()
  }

  // 2. NTT Docomo Tower with clock face around x = 1420
  g.fillStyle = '#0a101d'
  g.fillRect(1400, 160, 44, 350)
  g.fillRect(1408, 120, 28, 40)
  g.fillRect(1418, 50, 8, 70) // Spire
  // Glowing clock face
  g.fillStyle = '#fef08a'
  g.fillRect(1415, 130, 14, 14)

  // Atmospheric base haze gradient blending into the Tokyo city underglow
  const hazeGrad = g.createLinearGradient(0, 340, 0, 512)
  hazeGrad.addColorStop(0, 'rgba(15, 23, 42, 0)')
  hazeGrad.addColorStop(0.5, 'rgba(26, 24, 60, 0.45)')
  hazeGrad.addColorStop(0.85, 'rgba(40, 30, 75, 0.85)')
  hazeGrad.addColorStop(1.0, 'rgba(28, 24, 55, 1.0)')
  g.fillStyle = hazeGrad
  g.fillRect(0, 340, 2048, 172)

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Sun Heights Residential Facade Tile Texture
 * Architectural dark charcoal ribbed concrete tiles with horizontal floor slab reveals.
 */
export function sunHeightsFacadeTexture(): THREE.CanvasTexture {
  const key = 'sun-heights-facade-tile'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Deep matte dark slate base
  g.fillStyle = '#171c26'
  g.fillRect(0, 0, 512, 512)

  // Architectural vertical fluted tile courses
  const colW = 16
  for (let x = 0; x < 512; x += colW) {
    const toneVar = ((x * 13) % 19) - 9
    const r = Math.min(255, Math.max(0, 28 + toneVar))
    const gr = Math.min(255, Math.max(0, 34 + toneVar))
    const b = Math.min(255, Math.max(0, 46 + toneVar))

    g.fillStyle = `rgb(${r},${gr},${b})`
    g.fillRect(x + 1, 0, colW - 2, 512)

    // Shadow groove
    g.fillStyle = '#0f121a'
    g.fillRect(x, 0, 1, 512)
  }

  // Horizontal concrete floor reveal joints
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
 * Translucent embossed composite board with dark bronze frame and authentic evacuation notice.
 */
export function frostedGlassPartitionTexture(): THREE.CanvasTexture {
  const key = 'balcony-privacy-partition'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Frosted semi-translucent board base
  g.fillStyle = '#475569'
  g.fillRect(0, 0, 256, 512)

  // Subtle stipple / fiberglass texture
  for (let i = 0; i < 600; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 512
    g.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.12)'
    g.fillRect(x, y, 2, 2)
  }

  // Dark bronze perimeter aluminum frame
  g.lineWidth = 12
  g.strokeStyle = '#1e1b18'
  g.strokeRect(6, 6, 244, 500)

  // Middle horizontal stiffener bar
  g.fillStyle = '#1e1b18'
  g.fillRect(0, 250, 256, 12)

  // Authentic Japanese emergency evacuation stamp in bottom half
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

  // Dark charcoal asphalt base
  g.fillStyle = '#181e28'
  g.fillRect(0, 0, 256, 256)

  // Scattered gravel flecks
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 256
    const brightness = 35 + Math.floor(Math.random() * 45)
    g.fillStyle = `rgb(${brightness},${brightness + 4},${brightness + 8})`
    g.fillRect(x, y, 2, 2)
  }

  // Tar seams
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

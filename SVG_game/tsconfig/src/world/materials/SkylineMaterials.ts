import * as THREE from 'three'
import { textureCache } from './TextureCache'

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

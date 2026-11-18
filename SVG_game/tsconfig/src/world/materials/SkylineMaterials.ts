import * as THREE from 'three'
import { textureCache } from './TextureCache'

/**
 * Optional external panorama image URL override.
 * When present, this texture is blended seamlessly into the horizon band of the sky dome.
 */
export const SKYLINE_TEXTURE_URL: string | null = null

/**
 * Custom Full-Sphere Shader Material for 600m Sky Dome.
 *
 * Renders a smooth vertical Tokyo night sky gradient:
 * - Zenith (top): #05070e (deep midnight black-blue)
 * - Mid-sky: #0f1526 (dark Tokyo night indigo)
 * - Horizon band: #1f1930 to #2b1d38 (subtle warm urban night glow)
 * - Below horizon: #121324 (smoothly blends with scene.fog)
 *
 * Supports dynamic 2D panorama texture loading (e.g. /textures/tokyo-skyline.jpg or .webp)
 * with a smoothstep vertical alpha fade at top and bottom edges so there is NEVER a hard cutoff.
 */
export function createSkySphereMaterial(): THREE.ShaderMaterial {
  const uniforms = {
    uPanorama: { value: null as THREE.Texture | null },
    uHasPanorama: { value: false },
    uColorZenith: { value: new THREE.Color(0x05070e) },
    uColorMid: { value: new THREE.Color(0x0f1526) },
    uColorHorizon1: { value: new THREE.Color(0x1f1930) },
    uColorHorizon2: { value: new THREE.Color(0x2b1d38) },
    uColorBase: { value: new THREE.Color(0x121324) },
  }

  const vertexShader = `
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `

  const fragmentShader = `
    uniform sampler2D uPanorama;
    uniform bool uHasPanorama;
    uniform vec3 uColorZenith;
    uniform vec3 uColorMid;
    uniform vec3 uColorHorizon1;
    uniform vec3 uColorHorizon2;
    uniform vec3 uColorBase;

    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      // Normalized altitude on sphere [-1.0, 1.0]
      // Sphere center is at y = 0, radius 600
      float h = normalize(vWorldPosition).y;

      // 4-stop vertical night sky gradient
      vec3 skyColor;
      if (h > 0.25) {
        float t = clamp((h - 0.25) / 0.75, 0.0, 1.0);
        skyColor = mix(uColorMid, uColorZenith, t);
      } else if (h > 0.0) {
        float t = clamp(h / 0.25, 0.0, 1.0);
        vec3 horizonGlow = mix(uColorHorizon2, uColorHorizon1, t);
        skyColor = mix(horizonGlow, uColorMid, t);
      } else {
        float t = clamp((h + 0.25) / 0.25, 0.0, 1.0);
        skyColor = mix(uColorBase, uColorHorizon2, t);
      }

      // Optional 2D panorama texture blending across the horizon band
      if (uHasPanorama) {
        // vUv.y on SphereGeometry is 1 at north pole (zenith), 0 at south pole
        // Equator/horizon is at vUv.y = 0.5.
        // Smoothstep vertical alpha fade at top and bottom edges (never a hard cutoff line)
        float vFade = smoothstep(0.32, 0.44, vUv.y) * (1.0 - smoothstep(0.56, 0.68, vUv.y));
        if (vFade > 0.001) {
          vec4 pano = texture2D(uPanorama, vUv);
          skyColor = mix(skyColor, pano.rgb, vFade * pano.a);
        }
      }

      gl_FragColor = vec4(skyColor, 1.0);
    }
  `

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  })

  // Check custom constant or search default panorama paths
  const loader = new THREE.TextureLoader()
  const candidateUrls = SKYLINE_TEXTURE_URL
    ? [SKYLINE_TEXTURE_URL]
    : [
        './textures/tokyo-skyline.webp',
        './textures/tokyo-skyline.jpg',
        '/textures/tokyo-skyline.webp',
        '/textures/tokyo-skyline.jpg',
      ]

  const tryLoad = (idx: number) => {
    if (idx >= candidateUrls.length) return
    loader.load(
      candidateUrls[idx],
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        tex.wrapS = THREE.RepeatWrapping
        tex.wrapT = THREE.ClampToEdgeWrapping
        uniforms.uPanorama.value = tex
        uniforms.uHasPanorama.value = true
        mat.needsUpdate = true
      },
      undefined,
      () => tryLoad(idx + 1),
    )
  }
  tryLoad(0)

  return mat
}

/**
 * Solid Dark Wet-Asphalt Ground Texture (512 x 512).
 * NO road stripes or dashed highway lines.
 * Only fine asphalt aggregate and soft, blurred radial pools of warm orange and cyan ambient city light.
 */
export function tokyoWetAsphaltTexture(): THREE.CanvasTexture {
  const key = 'tokyo-wet-asphalt-512'
  const cached = textureCache.get(key)
  if (cached) return cached as THREE.CanvasTexture

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Solid dark wet asphalt base (#06080d)
  g.fillStyle = '#06080d'
  g.fillRect(0, 0, 512, 512)

  // Fine asphalt aggregate speckling
  for (let i = 0; i < 1800; i++) {
    const x = Math.random() * 512
    const y = Math.random() * 512
    const b = 10 + Math.floor(Math.random() * 12)
    g.fillStyle = `rgb(${b},${b + 2},${b + 4})`
    g.fillRect(x, y, 1.5, 1.5)
  }

  // Soft, blurred radial pools of warm orange ambient sodium light
  const warmPools = [
    { x: 128, y: 140, r: 120 },
    { x: 384, y: 360, r: 140 },
    { x: 256, y: 460, r: 100 },
  ]
  for (const wp of warmPools) {
    const rad = g.createRadialGradient(wp.x, wp.y, 4, wp.x, wp.y, wp.r)
    rad.addColorStop(0, 'rgba(255, 150, 60, 0.22)')
    rad.addColorStop(0.4, 'rgba(230, 120, 40, 0.10)')
    rad.addColorStop(0.8, 'rgba(180, 80, 20, 0.03)')
    rad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    g.fillStyle = rad
    g.beginPath()
    g.arc(wp.x, wp.y, wp.r, 0, Math.PI * 2)
    g.fill()
  }

  // Soft, blurred radial pools of cool cyan reflection
  const cyanPools = [
    { x: 384, y: 120, r: 110 },
    { x: 140, y: 380, r: 130 },
  ]
  for (const cp of cyanPools) {
    const rad = g.createRadialGradient(cp.x, cp.y, 4, cp.x, cp.y, cp.r)
    rad.addColorStop(0, 'rgba(30, 180, 220, 0.16)')
    rad.addColorStop(0.4, 'rgba(20, 120, 160, 0.07)')
    rad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    g.fillStyle = rad
    g.beginPath()
    g.arc(cp.x, cp.y, cp.r, 0, Math.PI * 2)
    g.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(8, 8)
  textureCache.set(key, tex)
  return tex
}

/**
 * Procedural Balcony Teak Parquet Decking Texture
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

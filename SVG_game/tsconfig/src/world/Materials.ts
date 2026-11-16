import * as THREE from 'three'

export const opaqueMat = new THREE.MeshStandardMaterial({
  vertexColors: true,
  roughness: 0.86,
  metalness: 0.04,
})

export const glowMat = new THREE.MeshBasicMaterial({
  vertexColors: true,
  toneMapped: false,
})

export const darkGlassMat = new THREE.MeshStandardMaterial({
  color: 0x101820,
  roughness: 0.08,
  metalness: 0.45,
  transparent: true,
  opacity: 0.55,
  depthWrite: false,
})

export const shopGlassMat = new THREE.MeshStandardMaterial({
  color: 0xb7c9d4,
  roughness: 0.06,
  metalness: 0.05,
  transparent: true,
  opacity: 0.16,
  depthWrite: false,
  side: THREE.DoubleSide,
})

export const acMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.42,
  metalness: 0.62,
})

export const postMat = new THREE.MeshStandardMaterial({
  color: 0x2a2e33,
  roughness: 0.4,
  metalness: 0.72,
})

export const lampMat = new THREE.MeshBasicMaterial({
  color: 0xffe2b0,
  toneMapped: false,
})

// =========================================================================
// PROCEDURAL PBR TEXTURES & MATERIALS
// =========================================================================

// 1. WET ASPHALT WITH PUDDLES & PEBBLE GRAIN
function createAsphaltMaps(): { map: THREE.CanvasTexture; roughnessMap: THREE.CanvasTexture } {
  const canvasD = document.createElement('canvas')
  canvasD.width = 512
  canvasD.height = 512
  const ctxD = canvasD.getContext('2d')!

  const canvasR = document.createElement('canvas')
  canvasR.width = 512
  canvasR.height = 512
  const ctxR = canvasR.getContext('2d')!

  // Base asphalt color
  ctxD.fillStyle = '#161920'
  ctxD.fillRect(0, 0, 512, 512)

  // Dry asphalt is rough
  ctxR.fillStyle = '#b8b8b8'
  ctxR.fillRect(0, 0, 512, 512)

  // Add asphalt grain and micro-pebbles
  const imgDataD = ctxD.getImageData(0, 0, 512, 512)
  const imgDataR = ctxR.getImageData(0, 0, 512, 512)
  const dData = imgDataD.data
  const rData = imgDataR.data

  for (let i = 0; i < dData.length; i += 4) {
    const noise = (Math.random() - 0.5) * 18
    dData[i] = Math.max(10, Math.min(45, dData[i] + noise))
    dData[i + 1] = Math.max(12, Math.min(48, dData[i + 1] + noise))
    dData[i + 2] = Math.max(16, Math.min(54, dData[i + 2] + noise))

    const rNoise = (Math.random() - 0.5) * 25
    rData[i] = Math.max(120, Math.min(230, rData[i] + rNoise))
    rData[i + 1] = rData[i]
    rData[i + 2] = rData[i]
  }

  // Draw wet rain puddles with high reflectivity (low roughness)
  ctxD.putImageData(imgDataD, 0, 0)
  ctxR.putImageData(imgDataR, 0, 0)

  // Add dark wet puddles
  ctxD.fillStyle = 'rgba(8, 10, 14, 0.65)'
  ctxR.fillStyle = 'rgb(24, 24, 24)' // very smooth/glossy puddle

  const puddles = [
    { x: 140, y: 160, rx: 90, ry: 45, rot: 0.2 },
    { x: 380, y: 340, rx: 110, ry: 55, rot: -0.3 },
    { x: 260, y: 440, rx: 70, ry: 35, rot: 0.1 },
    { x: 100, y: 420, rx: 60, ry: 30, rot: -0.2 },
    { x: 420, y: 120, rx: 80, ry: 40, rot: 0.4 },
  ]
  for (const p of puddles) {
    ctxD.beginPath()
    ctxD.ellipse(p.x, p.y, p.rx, p.ry, p.rot, 0, Math.PI * 2)
    ctxD.fill()

    ctxR.beginPath()
    ctxR.ellipse(p.x, p.y, p.rx, p.ry, p.rot, 0, Math.PI * 2)
    ctxR.fill()
  }

  const map = new THREE.CanvasTexture(canvasD)
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.repeat.set(12, 1.5)
  map.colorSpace = THREE.SRGBColorSpace

  const roughnessMap = new THREE.CanvasTexture(canvasR)
  roughnessMap.wrapS = THREE.RepeatWrapping
  roughnessMap.wrapT = THREE.RepeatWrapping
  roughnessMap.repeat.set(12, 1.5)

  return { map, roughnessMap }
}

const asphaltMaps = createAsphaltMaps()

export const asphaltMat = new THREE.MeshStandardMaterial({
  map: asphaltMaps.map,
  roughnessMap: asphaltMaps.roughnessMap,
  roughness: 0.65,
  metalness: 0.22,
})

// 2. SIDEWALK CONCRETE PAVERS
function createSidewalkTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#2b3038'
  ctx.fillRect(0, 0, 256, 256)

  // Paving grid: 4x4 pavers per tile
  const size = 64
  ctx.strokeStyle = '#1b1e24'
  ctx.lineWidth = 3

  for (let y = 0; y < 256; y += size) {
    for (let x = 0; x < 256; x += size) {
      // Subtle block tone variation
      const v = Math.floor((Math.random() - 0.5) * 12)
      ctx.fillStyle = `rgb(${43 + v}, ${48 + v}, ${56 + v})`
      ctx.fillRect(x + 1.5, y + 1.5, size - 3, size - 3)
      ctx.strokeRect(x, y, size, size)
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(8, 2)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

const walkTex = createSidewalkTexture()

export const walkMat = new THREE.MeshStandardMaterial({
  map: walkTex,
  color: 0xc8cdd4,
  roughness: 0.88,
  metalness: 0.04,
})

export const alleyMat = new THREE.MeshStandardMaterial({
  color: 0x24221d,
  roughness: 0.92,
  metalness: 0.03,
})

export const parkMat = new THREE.MeshStandardMaterial({
  color: 0x18281e,
  roughness: 0.96,
  metalness: 0,
})

export const pathMat = new THREE.MeshStandardMaterial({
  color: 0x3a342c,
  roughness: 0.94,
  metalness: 0.02,
})

export const lineMat = new THREE.MeshStandardMaterial({
  color: 0xdce0e8,
  roughness: 0.42,
  metalness: 0.02,
})

export const yellowMat = new THREE.MeshStandardMaterial({
  color: 0xc9a34b,
  roughness: 0.65,
  metalness: 0.05,
  emissive: 0x3d3012,
  emissiveIntensity: 0.2,
})

export const barkMat = new THREE.MeshStandardMaterial({
  color: 0x3d2d1d,
  roughness: 0.9,
  metalness: 0.02,
})

export const leavesMat = new THREE.MeshStandardMaterial({
  color: 0x2e4a30,
  roughness: 0.85,
  metalness: 0.0,
})

export const sakuraMat = new THREE.MeshStandardMaterial({
  color: 0xd98ea2,
  roughness: 0.8,
  metalness: 0.0,
})

export const lanternRedMat = new THREE.MeshStandardMaterial({
  color: 0xd93829,
  emissive: 0xbd2415,
  emissiveIntensity: 0.85,
  roughness: 0.45,
})

// Highly polished convenience store & lobby vinyl tiles
export const tileMat = new THREE.MeshStandardMaterial({
  color: 0xe8e6df,
  roughness: 0.22,
  metalness: 0.12,
})

export const metalMat = new THREE.MeshStandardMaterial({
  color: 0x828a96,
  roughness: 0.28,
  metalness: 0.78,
})

// Japanese Kei-car materials
export const carPaintMat = new THREE.MeshStandardMaterial({
  color: 0x36485e,
  roughness: 0.2,
  metalness: 0.85,
})

export const carGlassMat = new THREE.MeshStandardMaterial({
  color: 0x141e28,
  roughness: 0.05,
  metalness: 0.9,
  transparent: true,
  opacity: 0.7,
})

export const mirrorOrangeMat = new THREE.MeshStandardMaterial({
  color: 0xf55a1e,
  roughness: 0.35,
  metalness: 0.1,
})

export const mirrorGlassMat = new THREE.MeshStandardMaterial({
  color: 0xeef4fa,
  roughness: 0.05,
  metalness: 0.95,
})

// Streetlamp volumetric light cone material (soft additive beam)
export const volumetricConeMat = new THREE.MeshBasicMaterial({
  color: 0xffe6b0,
  transparent: true,
  opacity: 0.07,
  side: THREE.DoubleSide,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
})

// Steam material for ramen soup
export const steamMat = new THREE.MeshBasicMaterial({
  color: 0xdddddd,
  transparent: true,
  opacity: 0.25,
  depthWrite: false,
})

// =========================================================================
// TEXTURE UTILITIES
// =========================================================================

const textureCache = new Map<string, THREE.CanvasTexture>()

export function signTexture(
  text: string,
  bg: string,
  fg: string,
  sub?: string,
  w = 512,
  h = 160,
): THREE.CanvasTexture {
  const key = `${text}|${bg}|${fg}|${sub ?? ''}|${w}|${h}`
  const cached = textureCache.get(key)
  if (cached) return cached
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const g = canvas.getContext('2d')!
  g.fillStyle = bg
  g.fillRect(0, 0, w, h)
  g.fillStyle = fg
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  const family = '"Yu Gothic UI", "Yu Gothic", Meiryo, "MS PGothic", sans-serif'
  if (sub) {
    g.font = `700 ${Math.floor(h * 0.36)}px ${family}`
    g.fillText(text, w / 2, h * 0.38)
    g.font = `500 ${Math.floor(h * 0.2)}px ${family}`
    g.fillText(sub, w / 2, h * 0.72)
  } else {
    g.font = `700 ${Math.floor(h * 0.42)}px ${family}`
    g.fillText(text, w / 2, h / 2)
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

export function signMaterial(text: string, bg: string, fg: string, sub?: string, w = 512, h = 160): THREE.MeshBasicMaterial {
  const map = signTexture(text, bg, fg, sub, w, h)
  return new THREE.MeshBasicMaterial({ map, toneMapped: false })
}

export function vendingTexture(variant: number): THREE.CanvasTexture {
  const key = `vend-${variant}`
  const cached = textureCache.get(key)
  if (cached) return cached
  const palettes = [
    { bg: '#0e3d3a', head: '#f2a65a', a: '#d84a3a', b: '#2f6fed', c: '#f2d15a', label: 'BOSS COFFEE' },
    { bg: '#3a1420', head: '#ff5a6a', a: '#7ad0c8', b: '#f2e27a', c: '#ffffff', label: 'POCARI SWEAT' },
    { bg: '#14243f', head: '#7eb6ff', a: '#ff7a45', b: '#6d8', c: '#ffe08a', label: 'GREEN TEA' },
  ]
  const p = palettes[variant % palettes.length]
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 512
  const g = canvas.getContext('2d')!
  g.fillStyle = p.bg
  g.fillRect(0, 0, 256, 512)
  g.fillStyle = p.head
  g.fillRect(16, 18, 224, 64)
  g.fillStyle = '#102028'
  g.font = '700 32px "Yu Gothic UI", Meiryo, sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText(p.label, 128, 50)
  const rows = [p.a, p.b, p.c]
  rows.forEach((color, i) => {
    const y = 110 + i * 96
    g.fillStyle = '#071016'
    g.fillRect(28, y, 200, 78)
    g.fillStyle = color
    g.fillRect(40, y + 12, 36, 54)
    g.fillRect(86, y + 12, 36, 54)
    g.fillRect(132, y + 12, 36, 54)
    g.fillRect(178, y + 12, 36, 54)
  })
  g.fillStyle = '#05070a'
  g.fillRect(48, 430, 160, 48)
  g.strokeStyle = 'rgba(255,255,255,0.35)'
  g.strokeRect(48, 430, 160, 48)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

// Emergency exit green running man sign (非常口)
export function emergencyExitTexture(): THREE.CanvasTexture {
  const key = 'emergency-exit'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const g = canvas.getContext('2d')!

  g.fillStyle = '#0a7844'
  g.fillRect(0, 0, 256, 128)
  g.strokeStyle = '#ffffff'
  g.lineWidth = 6
  g.strokeRect(8, 8, 240, 112)

  g.fillStyle = '#ffffff'
  g.font = 'bold 36px "Yu Gothic UI", sans-serif'
  g.textAlign = 'center'
  g.fillText('非常口 EXIT', 128, 74)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

// Authentic Tokyo Cast-iron Sakura Manhole Cover
export function manholeTexture(): THREE.CanvasTexture {
  const key = 'manhole-cover'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Cast iron dark metallic gray
  g.fillStyle = '#22262c'
  g.beginPath()
  g.arc(128, 128, 124, 0, Math.PI * 2)
  g.fill()
  g.strokeStyle = '#3d444e'
  g.lineWidth = 6
  g.stroke()

  // Inner rings
  g.strokeStyle = '#485260'
  g.lineWidth = 3
  g.beginPath()
  g.arc(128, 128, 96, 0, Math.PI * 2)
  g.stroke()
  g.beginPath()
  g.arc(128, 128, 54, 0, Math.PI * 2)
  g.stroke()

  // Sakura petal radial patterns
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
    g.save()
    g.translate(128, 128)
    g.rotate(a)
    g.fillStyle = '#3a424e'
    g.beginPath()
    g.ellipse(0, 75, 12, 18, 0, 0, Math.PI * 2)
    g.fill()
    g.restore()
  }

  // Tokyo crest / kanji in center
  g.fillStyle = '#505a68'
  g.font = 'bold 24px sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText('下水', 128, 128)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

// ---------------------------------------------------------
// KONBINI INTERIOR TEXTURES
// ---------------------------------------------------------

export function konbiniCounterFrontTexture(): THREE.CanvasTexture {
  const key = 'konbini-counter-front'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Clean white glossy counter base
  g.fillStyle = '#f8f9fa'
  g.fillRect(0, 0, 512, 256)

  // Iconic Green & Blue stripes
  g.fillStyle = '#0d7a46'
  g.fillRect(0, 48, 512, 28)
  g.fillStyle = '#ffffff'
  g.fillRect(0, 76, 512, 8)
  g.fillStyle = '#0080cc'
  g.fillRect(0, 84, 512, 16)

  // Subtle vertical panel divide grooves
  g.strokeStyle = '#e2e6ea'
  g.lineWidth = 2
  for (let x = 128; x < 512; x += 128) {
    g.beginPath()
    g.moveTo(x, 100)
    g.lineTo(x, 230)
    g.stroke()
  }

  // Dark metallic base kickplate
  g.fillStyle = '#3a3f47'
  g.fillRect(0, 230, 512, 26)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

export function konbiniWallTexture(): THREE.CanvasTexture {
  const key = 'konbini-wall-stripes'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Clean, bright off-white wall
  g.fillStyle = '#f4f6f9'
  g.fillRect(0, 0, 512, 512)

  // Subtle wall panel joints
  g.strokeStyle = '#e1e5eb'
  g.lineWidth = 2
  g.strokeRect(0, 0, 512, 512)

  // FamilyMart brand green & blue accent frieze along the top
  g.fillStyle = '#0d7a46'
  g.fillRect(0, 18, 512, 36)
  g.fillStyle = '#ffffff'
  g.fillRect(0, 54, 512, 8)
  g.fillStyle = '#0080cc'
  g.fillRect(0, 62, 512, 22)

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 1)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

export function konbiniCoolerDoorsTexture(): THREE.CanvasTexture {
  const key = 'konbini-cooler-doors'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Deep dark interior background
  g.fillStyle = '#0a1016'
  g.fillRect(0, 0, 1024, 512)

  // 4 Reach-in Cooler Doors
  const doorW = 256
  const beverages = [
    // Door 1: Green Teas & Oolong (Greens and golds)
    [
      { color: '#2b7835', label: 'お〜いお茶' },
      { color: '#388a44', label: '生茶' },
      { color: '#1f5e28', label: '伊右衛門' },
      { color: '#665522', label: '烏龍茶' },
    ],
    // Door 2: Sports drinks & Water (Blues and whites)
    [
      { color: '#0088dd', label: 'POCARI' },
      { color: '#00b4d8', label: 'AQUARIUS' },
      { color: '#e8f4ff', label: 'いろはす' },
      { color: '#0066aa', label: 'DAKARA' },
    ],
    // Door 3: Canned Coffee & Milks (Golds, reds, dark browns)
    [
      { color: '#d4af37', label: 'BOSS GOLD' },
      { color: '#1c1c1c', label: 'BLACK COFFEE' },
      { color: '#8b0000', label: 'GEORGIA' },
      { color: '#f5deb3', label: 'MILK TEA' },
    ],
    // Door 4: Sodas, Juices & Calpis (Reds, yellows, polka dots)
    [
      { color: '#cc0000', label: 'COCA-COLA' },
      { color: '#ffd700', label: 'C.C.LEMON' },
      { color: '#00aa55', label: 'MELON SODA' },
      { color: '#ffffff', label: 'CALPIS' },
    ],
  ]

  for (let d = 0; d < 4; d++) {
    const x = d * doorW
    const bevList = beverages[d]

    // 5 Shelf Tiers per door
    for (let shelf = 0; shelf < 5; shelf++) {
      const y = 30 + shelf * 95

      // Glowing shelf roller rack
      g.fillStyle = '#e8f4fa'
      g.fillRect(x + 12, y + 68, doorW - 24, 6)

      // Price tag strip
      g.fillStyle = '#ff4444'
      g.fillRect(x + 12, y + 74, doorW - 24, 12)
      g.fillStyle = '#ffffff'
      g.font = 'bold 9px sans-serif'
      g.textAlign = 'center'
      g.fillText('¥140 ~ ¥160', x + doorW / 2, y + 83)

      // Bottles on this shelf
      const numBottles = 5
      for (let b = 0; b < numBottles; b++) {
        const bx = x + 24 + b * 44
        const bev = bevList[b % bevList.length]

        // Bottle glow
        g.fillStyle = 'rgba(255, 255, 255, 0.15)'
        g.fillRect(bx - 2, y + 8, 32, 58)

        // Bottle body
        g.fillStyle = bev.color
        g.fillRect(bx, y + 10, 28, 56)

        // Cap
        g.fillStyle = '#ffffff'
        g.fillRect(bx + 6, y + 4, 16, 6)

        // Bottle label stripe
        g.fillStyle = '#ffffff'
        g.fillRect(bx + 2, y + 26, 24, 22)
        g.fillStyle = '#111111'
        g.font = 'bold 8px sans-serif'
        g.fillText(bev.label.substring(0, 4), bx + 14, y + 38)
      }
    }

    // Aluminum door frame
    g.strokeStyle = '#8a929c'
    g.lineWidth = 8
    g.strokeRect(x + 4, 8, doorW - 8, 496)

    // Vertical stainless steel handle
    g.fillStyle = '#cfd4dc'
    g.fillRect(x + doorW - 22, 180, 10, 150)
    g.fillStyle = '#222222'
    g.fillRect(x + doorW - 20, 182, 6, 146)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

export function hotSnacksDisplayTexture(): THREE.CanvasTexture {
  const key = 'hot-snacks-display'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const g = canvas.getContext('2d')!

  // Red/Orange glowing header
  g.fillStyle = '#d92c18'
  g.fillRect(0, 0, 256, 128)
  g.fillStyle = '#ff7700'
  g.fillRect(4, 4, 248, 42)

  g.fillStyle = '#ffffff'
  g.font = 'bold 22px "Yu Gothic UI", sans-serif'
  g.textAlign = 'center'
  g.fillText('HOT SNACKS', 128, 30)

  g.fillStyle = '#ffffff'
  g.font = 'bold 15px "Yu Gothic UI", sans-serif'
  g.fillText('ファミチキ ¥220 / 肉まん ¥160', 128, 76)
  g.font = '12px "Yu Gothic UI", sans-serif'
  g.fillText('できたて あつあつ！揚げたて', 128, 104)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  textureCache.set(key, tex)
  return tex
}

// =========================================================================
// APARTMENT LOBBY TEXTURES
// =========================================================================

export function apartmentLobbyWallTexture(): THREE.CanvasTexture {
  const key = 'apt-lobby-wall'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Warm cream/ivory limestone base
  g.fillStyle = '#eee9e0'
  g.fillRect(0, 0, 512, 512)

  // Horizontal stone courses with alternating joints
  const courseH = 64
  for (let y = 0; y < 512; y += courseH) {
    const shift = (y / courseH) % 2 === 0 ? 0 : 128
    for (let x = -128; x < 512 + 128; x += 256) {
      // Subtle stone tone variation
      const toneVar = Math.floor((Math.sin(x * 12.3 + y * 4.5) + 1) * 6)
      const r = 238 + toneVar
      const gr = 233 + toneVar
      const b = 224 + toneVar
      g.fillStyle = `rgb(${r},${gr},${b})`
      g.fillRect(x + shift + 2, y + 2, 252, courseH - 4)

      // Very fine stone flecks
      for (let dot = 0; dot < 12; dot++) {
        g.fillStyle = 'rgba(160, 150, 135, 0.15)'
        g.fillRect(
          x + shift + Math.random() * 240,
          y + Math.random() * (courseH - 6),
          2,
          2
        )
      }
    }
    // Grout line
    g.fillStyle = '#cfc6b8'
    g.fillRect(0, y, 512, 2)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 2)
  textureCache.set(key, tex)
  return tex
}

export function apartmentLobbyFloorTexture(): THREE.CanvasTexture {
  const key = 'apt-lobby-floor'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Warm taupe polished marble base
  g.fillStyle = '#ded7cc'
  g.fillRect(0, 0, 512, 512)

  // 4 large 256x256 floor slabs
  for (let tileX = 0; tileX < 2; tileX++) {
    for (let tileY = 0; tileY < 2; tileY++) {
      const tx = tileX * 256
      const ty = tileY * 256

      // Base tile color
      g.fillStyle = (tileX + tileY) % 2 === 0 ? '#e4ded4' : '#dfd9cf'
      g.fillRect(tx + 2, ty + 2, 252, 252)

      // Elegant marble veins
      g.strokeStyle = 'rgba(255, 255, 255, 0.45)'
      g.lineWidth = 3
      g.beginPath()
      g.moveTo(tx + 20, ty + 220)
      g.bezierCurveTo(tx + 90, ty + 160, tx + 140, ty + 200, tx + 230, ty + 40)
      g.stroke()

      g.strokeStyle = 'rgba(160, 145, 130, 0.22)'
      g.lineWidth = 2
      g.beginPath()
      g.moveTo(tx + 40, ty + 240)
      g.bezierCurveTo(tx + 120, ty + 170, tx + 170, ty + 120, tx + 240, ty + 80)
      g.stroke()
    }
  }

  // Fine bronze inlay / grout border
  g.strokeStyle = '#b8ad9e'
  g.lineWidth = 3
  g.strokeRect(0, 0, 512, 512)
  g.beginPath()
  g.moveTo(256, 0)
  g.lineTo(256, 512)
  g.moveTo(0, 256)
  g.lineTo(512, 256)
  g.stroke()

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 4)
  textureCache.set(key, tex)
  return tex
}

export function woodSlatTexture(): THREE.CanvasTexture {
  const key = 'wood-slats'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Deep recessed groove background
  g.fillStyle = '#22150c'
  g.fillRect(0, 0, 256, 256)

  // Vertical natural oak slats
  const slatW = 24
  const gap = 8
  const total = slatW + gap

  for (let x = 0; x < 256; x += total) {
    // Warm natural Japanese oak
    g.fillStyle = '#b8834a'
    g.fillRect(x, 0, slatW, 256)

    // Wood grain lines
    g.strokeStyle = 'rgba(120, 70, 30, 0.25)'
    g.lineWidth = 1.5
    for (let l = 0; l < 3; l++) {
      const lx = x + 4 + l * 7
      g.beginPath()
      g.moveTo(lx, 0)
      g.bezierCurveTo(lx + 2, 80, lx - 2, 160, lx + 1, 256)
      g.stroke()
    }

    // Bevel highlights on slat edges
    g.fillStyle = 'rgba(255, 230, 190, 0.35)'
    g.fillRect(x, 0, 2, 256)
    g.fillStyle = 'rgba(40, 20, 10, 0.45)'
    g.fillRect(x + slatW - 2, 0, 2, 256)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 1)
  textureCache.set(key, tex)
  return tex
}

export function apartmentMailboxTexture(): THREE.CanvasTexture {
  const key = 'apt-mailboxes'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Brushed stainless steel base
  g.fillStyle = '#8f96a0'
  g.fillRect(0, 0, 1024, 512)

  // Horizontal brush lines
  for (let y = 0; y < 512; y += 3) {
    g.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
    g.fillRect(0, y, 1024, 2)
  }

  // Header band
  g.fillStyle = '#222830'
  g.fillRect(16, 12, 1024 - 32, 44)
  g.fillStyle = '#d4af37'
  g.font = 'bold 20px "Yu Gothic UI", sans-serif'
  g.textAlign = 'left'
  g.fillText('SUN HEIGHTS  |  集合郵便受箱 (MAIL BOXES)', 36, 41)
  g.textAlign = 'right'
  g.font = '15px sans-serif'
  g.fillStyle = '#a0aec0'
  g.fillText('ROOMS 101 - 406', 1024 - 36, 41)

  // 4 Rows x 6 Columns of Mailbox Doors
  const cols = 6
  const rows = 4
  const startX = 20
  const startY = 68
  const boxW = Math.floor((1024 - 40) / cols)
  const boxH = Math.floor((512 - 80) / rows)

  const roomNumbers = [
    ['401', '402', '403', '404', '405', '406'],
    ['301', '302', '303', '304', '305', '306'],
    ['201', '202', '203', '204', '205', '206'],
    ['101', '102', '103', '104', '105', '106'],
  ]

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const bx = startX + c * boxW
      const by = startY + r * boxH

      // Mailbox door panel
      g.fillStyle = '#a8b0ba'
      g.fillRect(bx + 3, by + 3, boxW - 6, boxH - 6)

      // Outer bevel
      g.strokeStyle = '#4e5560'
      g.lineWidth = 2
      g.strokeRect(bx + 3, by + 3, boxW - 6, boxH - 6)

      // Upper Mail Slot Flap
      g.fillStyle = '#68707a'
      g.fillRect(bx + 12, by + 12, boxW - 24, 18)
      g.fillStyle = '#242a32'
      g.fillRect(bx + 16, by + 27, boxW - 32, 3)

      // Room Number Plate (Black acrylic plate with gold numbers)
      const numStr = roomNumbers[r][c]
      g.fillStyle = '#11161d'
      g.fillRect(bx + 14, by + 40, 56, 26)
      g.strokeStyle = '#d4af37'
      g.lineWidth = 1.5
      g.strokeRect(bx + 14, by + 40, 56, 26)

      g.fillStyle = '#ffffff'
      g.font = 'bold 16px "Yu Gothic UI", monospace'
      g.textAlign = 'center'
      g.fillText(numStr, bx + 42, by + 59)

      // Dial Combination Lock (ダイヤル錠)
      const dialX = bx + boxW - 34
      const dialY = by + 53
      g.fillStyle = '#1a1f26'
      g.beginPath()
      g.arc(dialX, dialY, 15, 0, Math.PI * 2)
      g.fill()
      g.strokeStyle = '#c5ccd6'
      g.lineWidth = 2
      g.stroke()

      // Dial tick marks
      g.fillStyle = '#ffffff'
      for (let a = 0; a < 8; a++) {
        const rad = (a * Math.PI) / 4
        g.fillRect(dialX + Math.cos(rad) * 11 - 1, dialY + Math.sin(rad) * 11 - 1, 2, 2)
      }

      // Name label holder (空欄 / 氏名札)
      g.fillStyle = '#e8ecf0'
      g.fillRect(bx + 14, by + 72, boxW - 28, 14)
      g.strokeStyle = '#7c8694'
      g.lineWidth = 1
      g.strokeRect(bx + 14, by + 72, boxW - 28, 14)
      g.fillStyle = '#44505f'
      g.font = '10px sans-serif'
      g.textAlign = 'left'
      g.fillText(numStr === '304' ? 'RELZZY (304)' : 'RESIDENT', bx + 20, by + 83)
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function apartmentDeliveryLockerTexture(): THREE.CanvasTexture {
  const key = 'apt-delivery-lockers'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Charcoal/Slate locker base
  g.fillStyle = '#262d36'
  g.fillRect(0, 0, 512, 512)

  // Header band
  g.fillStyle = '#151a22'
  g.fillRect(10, 10, 492, 42)
  g.fillStyle = '#38e59e'
  g.font = 'bold 18px "Yu Gothic UI", sans-serif'
  g.textAlign = 'left'
  g.fillText('宅配ロッカー TAKUHAIBOX', 26, 37)
  g.fillStyle = '#a0aec0'
  g.font = '12px sans-serif'
  g.textAlign = 'right'
  g.fillText('24H PARCEL SYSTEM', 486, 37)

  // Central Touchscreen Control Panel
  g.fillStyle = '#1a202c'
  g.fillRect(160, 68, 192, 210)
  g.strokeStyle = '#4a5568'
  g.lineWidth = 2
  g.strokeRect(160, 68, 192, 210)

  // Glowing LCD UI
  g.fillStyle = '#0f2942'
  g.fillRect(172, 80, 168, 90)
  g.fillStyle = '#38bdf8'
  g.font = 'bold 13px "Yu Gothic UI", sans-serif'
  g.textAlign = 'center'
  g.fillText('荷物のお受け取り', 256, 106)
  g.fillStyle = '#e2e8f0'
  g.font = '11px sans-serif'
  g.fillText('部屋番号を入力してください', 256, 128)
  g.fillStyle = '#22c55e'
  g.fillText('[304: 1個のお届け物]', 256, 150)

  // Keypad buttons
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) {
      const kx = 184 + c * 48
      const ky = 182 + r * 22
      g.fillStyle = '#334155'
      g.fillRect(kx, ky, 40, 18)
      g.fillStyle = '#f8fafc'
      g.font = 'bold 10px monospace'
      g.fillText(`${r * 3 + c + 1}`, kx + 20, ky + 13)
    }
  }

  // Left & Right parcel lockers
  const lockerDefs = [
    // Left column: 3 small lockers
    { x: 16, y: 68, w: 132, h: 64, label: 'BOX 01', inUse: false },
    { x: 16, y: 140, w: 132, h: 64, label: 'BOX 02', inUse: true },
    { x: 16, y: 212, w: 132, h: 64, label: 'BOX 03', inUse: true }, // Your package!

    // Right column: 3 small/medium lockers
    { x: 364, y: 68, w: 132, h: 96, label: 'BOX 04', inUse: false },
    { x: 364, y: 172, w: 132, h: 104, label: 'BOX 05', inUse: false },

    // Bottom row: 2 large suitcases / golf bag lockers
    { x: 16, y: 288, w: 236, h: 208, label: 'LARGE BOX 06', inUse: false },
    { x: 260, y: 288, w: 236, h: 208, label: 'LARGE BOX 07', inUse: false },
  ]

  for (const box of lockerDefs) {
    g.fillStyle = '#3a4454'
    g.fillRect(box.x, box.y, box.w, box.h)
    g.strokeStyle = '#1a222e'
    g.lineWidth = 2
    g.strokeRect(box.x, box.y, box.w, box.h)

    // Locker handle
    g.fillStyle = '#8a94a4'
    g.fillRect(box.x + box.w - 18, box.y + box.h / 2 - 16, 8, 32)

    // Label
    g.fillStyle = '#ffffff'
    g.font = 'bold 11px sans-serif'
    g.textAlign = 'left'
    g.fillText(box.label, box.x + 10, box.y + 22)

    // Status LED light (Green = vacant, Amber = holding package)
    g.fillStyle = box.inUse ? '#f59e0b' : '#10b981'
    g.beginPath()
    g.arc(box.x + box.w - 14, box.y + 16, 5, 0, Math.PI * 2)
    g.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function receptionNoticeBoardTexture(): THREE.CanvasTexture {
  const key = 'reception-notice-board'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Natural Cork board texture
  g.fillStyle = '#c8955a'
  g.fillRect(0, 0, 512, 256)
  for (let i = 0; i < 400; i++) {
    g.fillStyle = Math.random() > 0.5 ? 'rgba(90, 50, 20, 0.15)' : 'rgba(255, 230, 180, 0.15)'
    g.fillRect(Math.random() * 512, Math.random() * 256, 3, 3)
  }

  // Wooden frame
  g.strokeStyle = '#6b401e'
  g.lineWidth = 10
  g.strokeRect(5, 5, 502, 246)

  // Header
  g.fillStyle = '#2d1e12'
  g.fillRect(16, 14, 480, 28)
  g.fillStyle = '#ffffff'
  g.font = 'bold 15px "Yu Gothic UI", sans-serif'
  g.textAlign = 'center'
  g.fillText('サンハイツ管理組合 掲示板 (RESIDENTS NOTICE)', 256, 34)

  // Paper Notice 1 (Trash sorting)
  g.fillStyle = '#ffffff'
  g.fillRect(24, 52, 140, 186)
  g.strokeStyle = '#d4d4d4'
  g.lineWidth = 1
  g.strokeRect(24, 52, 140, 186)
  g.fillStyle = '#dc2626'
  g.fillRect(28, 56, 132, 22)
  g.fillStyle = '#ffffff'
  g.font = 'bold 11px sans-serif'
  g.fillText('ゴミ収集日程', 94, 72)
  g.fillStyle = '#1f2937'
  g.font = '10px sans-serif'
  g.textAlign = 'left'
  g.fillText('・可燃ゴミ: 月・木', 32, 98)
  g.fillText('・資源ゴミ: 水曜日', 32, 116)
  g.fillText('・不燃ゴミ: 第2火曜', 32, 134)
  g.fillText('※朝8時までに排出', 32, 158)

  // Pushpin (Red)
  g.fillStyle = '#ef4444'
  g.beginPath()
  g.arc(94, 56, 5, 0, Math.PI * 2)
  g.fill()

  // Paper Notice 2 (Fire Drill / Maintenance)
  g.fillStyle = '#f8fafc'
  g.fillRect(182, 52, 150, 186)
  g.strokeRect(182, 52, 150, 186)
  g.fillStyle = '#2563eb'
  g.fillRect(186, 56, 142, 22)
  g.fillStyle = '#ffffff'
  g.textAlign = 'center'
  g.font = 'bold 11px sans-serif'
  g.fillText('消防設備定期点検', 257, 72)
  g.fillStyle = '#1e293b'
  g.font = '10px sans-serif'
  g.textAlign = 'left'
  g.fillText('今週土曜日 10:00~', 190, 98)
  g.fillText('各戸火災報知器テスト', 190, 116)
  g.fillText('インターホン点検実施', 190, 134)
  g.fillText('ご在宅をお願いします', 190, 158)

  // Pushpin (Blue)
  g.fillStyle = '#3b82f6'
  g.beginPath()
  g.arc(257, 56, 5, 0, Math.PI * 2)
  g.fill()

  // Paper Notice 3 (Rules & Pets)
  g.fillStyle = '#fffbeb'
  g.fillRect(350, 52, 138, 186)
  g.strokeRect(350, 52, 138, 186)
  g.fillStyle = '#059669'
  g.fillRect(354, 56, 130, 22)
  g.fillStyle = '#ffffff'
  g.textAlign = 'center'
  g.font = 'bold 11px sans-serif'
  g.fillText('共用部利用マナー', 419, 72)
  g.fillStyle = '#1f2937'
  g.font = '10px sans-serif'
  g.textAlign = 'left'
  g.fillText('・駐輪場シール貼付', 358, 98)
  g.fillText('・共用廊下置配禁止', 358, 116)
  g.fillText('・夜間静粛のお願い', 358, 134)

  // Red Japanese Inkan Hanko Stamp (印鑑)
  g.strokeStyle = '#dc2626'
  g.lineWidth = 2
  g.strokeRect(436, 180, 42, 42)
  g.fillStyle = '#dc2626'
  g.font = 'bold 9px serif'
  g.textAlign = 'center'
  g.fillText('管理', 457, 198)
  g.fillText('組合印', 457, 214)

  // Pushpin (Green)
  g.fillStyle = '#10b981'
  g.beginPath()
  g.arc(419, 56, 5, 0, Math.PI * 2)
  g.fill()

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function apartmentDirectoryTexture(): THREE.CanvasTexture {
  const key = 'apt-directory-board'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 384
  const g = canvas.getContext('2d')!

  // Dark slate acrylic panel
  g.fillStyle = '#161d26'
  g.fillRect(0, 0, 512, 384)

  // Brushed gold metal border
  g.strokeStyle = '#d4af37'
  g.lineWidth = 6
  g.strokeRect(6, 6, 500, 372)

  // Inner subtle border
  g.strokeStyle = '#4a5568'
  g.lineWidth = 1.5
  g.strokeRect(16, 16, 480, 352)

  // Header
  g.fillStyle = '#d4af37'
  g.font = 'bold 22px "Yu Gothic UI", serif'
  g.textAlign = 'center'
  g.fillText('SUN HEIGHTS KANAMECHO', 256, 54)
  g.font = '14px "Yu Gothic UI", sans-serif'
  g.fillStyle = '#e2e8f0'
  g.fillText('サンハイツ要町 総合案内', 256, 78)

  // Gold divider
  g.fillStyle = '#d4af37'
  g.fillRect(40, 92, 432, 2)

  // Directory entries
  const floors = [
    { floor: '4F', desc: '401 - 406  RESIDENCE / ルーフバルコニー' },
    { floor: '3F', desc: '301 - 306  RESIDENCE (Relzzy #304)' },
    { floor: '2F', desc: '201 - 206  RESIDENCE' },
    { floor: '1F', desc: '管理事務室 / エントランス / 集合受箱 / 宅配BOX' },
  ]

  for (let f = 0; f < floors.length; f++) {
    const y = 138 + f * 50
    // Floor badge
    g.fillStyle = '#2a3442'
    g.fillRect(44, y - 24, 60, 34)
    g.strokeStyle = '#d4af37'
    g.lineWidth = 1.5
    g.strokeRect(44, y - 24, 60, 34)

    g.fillStyle = '#d4af37'
    g.font = 'bold 18px monospace'
    g.textAlign = 'center'
    g.fillText(floors[f].floor, 74, y)

    // Floor description
    g.fillStyle = '#ffffff'
    g.font = '14px "Yu Gothic UI", sans-serif'
    g.textAlign = 'left'
    g.fillText(floors[f].desc, 120, y)

    // Divider line
    if (f < 3) {
      g.fillStyle = 'rgba(255, 255, 255, 0.12)'
      g.fillRect(44, y + 20, 424, 1)
    }
  }

  // Footer
  g.fillStyle = '#718096'
  g.font = '11px sans-serif'
  g.textAlign = 'center'
  g.fillText('管理人常駐: 平日 9:00 ~ 17:00 | 管理会社コールセンター 24H', 256, 346)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

// =========================================================================
// RAMEN SHOP (MENYA TOKYO) TEXTURES
// =========================================================================

export function ramenSignTexture(): THREE.CanvasTexture {
  const key = 'ramen-shop-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Deep dark charred cedar wood background (焼杉)
  g.fillStyle = '#1c1510'
  g.fillRect(0, 0, 512, 256)

  // Natural horizontal wood grain lines
  for (let y = 0; y < 256; y += 4) {
    g.fillStyle = Math.random() > 0.5 ? 'rgba(70, 45, 25, 0.25)' : 'rgba(10, 8, 6, 0.35)'
    g.fillRect(0, y, 512, 3)
  }

  // Heavy carved wood border
  g.strokeStyle = '#3d2616'
  g.lineWidth = 12
  g.strokeRect(6, 6, 500, 244)
  g.strokeStyle = '#5a3820'
  g.lineWidth = 3
  g.strokeRect(14, 14, 484, 228)

  // Subtitle header
  g.fillStyle = '#e2c595'
  g.font = 'bold 16px "Yu Gothic UI", sans-serif'
  g.textAlign = 'center'
  g.fillText('自家製麺・濃厚豚骨スープ', 256, 48)

  // Main Carved Kanji: 麺処 (Large engraved gold leaf)
  g.fillStyle = '#f8e4b8'
  g.font = 'bold 52px serif'
  g.shadowColor = '#000000'
  g.shadowBlur = 6
  g.shadowOffsetX = 3
  g.shadowOffsetY = 3
  g.fillText('らーめん 麺処', 256, 116)
  g.shadowColor = 'transparent'

  // Romanized Subtitle
  g.fillStyle = '#d4af37'
  g.font = 'bold 22px "Yu Gothic UI", sans-serif'
  g.fillText('MENYA TOKYO', 256, 160)

  // Bottom Japanese details
  g.fillStyle = '#b89d78'
  g.font = '14px sans-serif'
  g.fillText('創業 昭和六十二年  |  特製チャーシュー・煮玉子', 256, 196)

  // Traditional Red Seal Stamps (印鑑)
  g.strokeStyle = '#c42012'
  g.lineWidth = 2.5
  g.strokeRect(38, 92, 42, 42)
  g.fillStyle = '#c42012'
  g.font = 'bold 11px serif'
  g.textAlign = 'center'
  g.fillText('味', 59, 110)
  g.fillText('自慢', 59, 126)

  g.strokeStyle = '#c42012'
  g.strokeRect(432, 92, 42, 42)
  g.fillText('秘', 453, 110)
  g.fillText('伝', 453, 126)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function ramenLanternTexture(text: string): THREE.CanvasTexture {
  const key = `ramen-lantern-${text}`
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Vermilion red Japanese lantern paper
  const grad = g.createLinearGradient(0, 0, 512, 0)
  grad.addColorStop(0, '#9a160c')
  grad.addColorStop(0.3, '#d8281a')
  grad.addColorStop(0.5, '#f03a28')
  grad.addColorStop(0.7, '#d8281a')
  grad.addColorStop(1, '#9a160c')
  g.fillStyle = grad
  g.fillRect(0, 0, 512, 512)

  // Horizontal bamboo wire ribbing (竹ひご)
  for (let y = 40; y < 470; y += 22) {
    g.fillStyle = 'rgba(70, 8, 4, 0.4)'
    g.fillRect(0, y, 512, 3)
    g.fillStyle = 'rgba(255, 180, 160, 0.25)'
    g.fillRect(0, y + 3, 512, 1.5)
  }

  // Top and bottom black wooden collar bands (黒漆の枠)
  g.fillStyle = '#141416'
  g.fillRect(0, 0, 512, 42)
  g.fillRect(0, 470, 512, 42)

  // Gold trim band on collars
  g.fillStyle = '#d4af37'
  g.fillRect(0, 38, 512, 4)
  g.fillRect(0, 470, 512, 4)

  // Bold Japanese brush calligraphy in center
  g.fillStyle = '#101012'
  g.font = '900 84px serif'
  g.textAlign = 'center'

  // Vertical text rendering
  const chars = text.split('')
  const startY = 256 - ((chars.length - 1) * 90) / 2
  chars.forEach((ch, idx) => {
    // Slight shadow for ink depth
    g.shadowColor = 'rgba(0, 0, 0, 0.6)'
    g.shadowBlur = 4
    g.shadowOffsetX = 2
    g.shadowOffsetY = 2
    g.fillText(ch, 256, startY + idx * 95)
  })
  g.shadowColor = 'transparent'

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function ramenNorenTexture(): THREE.CanvasTexture {
  const key = 'ramen-noren'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Deep indigo blue dyed Japanese cotton (藍染め)
  g.fillStyle = '#162234'
  g.fillRect(0, 0, 512, 256)

  // Cotton weave fabric texture
  for (let y = 0; y < 256; y += 3) {
    g.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.08)'
    g.fillRect(0, y, 512, 2)
  }

  // 4 Split Noren Panels (Slits between panels)
  const panelW = 512 / 4
  for (let p = 1; p < 4; p++) {
    const sx = p * panelW
    // Slit gap
    g.fillStyle = '#080c14'
    g.fillRect(sx - 3, 40, 6, 216)
  }

  // Top hanging hem band
  g.fillStyle = '#0f1722'
  g.fillRect(0, 0, 512, 38)
  g.strokeStyle = '#2d3b4e'
  g.lineWidth = 2
  g.strokeRect(0, 0, 512, 38)

  // Fabric loops for dowel rod
  for (let l = 0; l < 8; l++) {
    const lx = 28 + l * 64
    g.fillStyle = '#223044'
    g.fillRect(lx, 2, 24, 34)
  }

  // Crisp White Calligraphy across panels: ら - ー - め - ん
  const kanji = ['ら', 'ー', 'め', 'ん']
  g.fillStyle = '#f8fafc'
  g.font = 'bold 64px "Yu Gothic UI", serif'
  g.textAlign = 'center'
  for (let i = 0; i < 4; i++) {
    const cx = i * panelW + panelW / 2
    g.fillText(kanji[i], cx, 155)
  }

  // White crest circle above the middle slit
  g.strokeStyle = '#f8fafc'
  g.lineWidth = 3
  g.beginPath()
  g.arc(256, 75, 22, 0, Math.PI * 2)
  g.stroke()
  g.font = 'bold 22px serif'
  g.fillText('麺', 256, 83)

  // Small corner badge: 営業中 (OPEN)
  g.fillStyle = '#f8fafc'
  g.font = 'bold 13px sans-serif'
  g.fillText('営 業 中', 450, 220)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function ramenKenbaikiTexture(): THREE.CanvasTexture {
  const key = 'ramen-kenbaiki'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Warm cream/beige ticket machine housing
  g.fillStyle = '#e8e2d8'
  g.fillRect(0, 0, 512, 512)

  // Inner dark gray control panel
  g.fillStyle = '#262d36'
  g.fillRect(16, 16, 480, 480)
  g.strokeStyle = '#4a5568'
  g.lineWidth = 3
  g.strokeRect(16, 16, 480, 480)

  // Top Illuminated Header
  g.fillStyle = '#111822'
  g.fillRect(28, 28, 456, 48)
  g.fillStyle = '#f59e0b'
  g.font = 'bold 20px "Yu Gothic UI", sans-serif'
  g.textAlign = 'center'
  g.fillText('食券をお買い求めください', 256, 56)
  g.font = '11px sans-serif'
  g.fillStyle = '#94a3b8'
  g.fillText('PLEASE PURCHASE TICKET FIRST  |  千円札・二千円札・硬貨対応', 256, 70)

  // Digital Amount LED Display
  g.fillStyle = '#06101a'
  g.fillRect(320, 88, 160, 36)
  g.strokeStyle = '#1e293b'
  g.strokeRect(320, 88, 160, 36)
  g.fillStyle = '#22c55e'
  g.font = 'bold 18px monospace'
  g.textAlign = 'right'
  g.fillText('¥1,000', 470, 113)

  // Category Banner
  g.fillStyle = '#dc2626'
  g.fillRect(28, 92, 280, 28)
  g.fillStyle = '#ffffff'
  g.font = 'bold 13px sans-serif'
  g.textAlign = 'center'
  g.fillText('★ 当店おすすめ 定番らーめん ★', 168, 111)

  // Grid of 4 rows x 3 columns of Meal Ticket Buttons
  const buttons = [
    { title: '特製豚骨らーめん', price: '¥980', color: '#f59e0b' },
    { title: 'チャーシュー麺', price: '¥1,100', color: '#ef4444' },
    { title: '濃厚魚介味噌', price: '¥950', color: '#d97706' },
    { title: '味玉豚骨らーめん', price: '¥880', color: '#f59e0b' },
    { title: '辛味噌らーめん', price: '¥920', color: '#dc2626' },
    { title: 'あっさり魚介醤油', price: '¥850', color: '#3b82f6' },
    { title: '替玉 (一玉)', price: '¥150', color: '#10b981' },
    { title: '博多一口餃子(5個)', price: '¥380', color: '#10b981' },
    { title: '炙りチャーシュー丼', price: '¥350', color: '#f97316' },
    { title: '追加トッピング 煮玉子', price: '¥120', color: '#64748b' },
    { title: '追加 メンマ/白ネギ', price: '¥120', color: '#64748b' },
    { title: 'アサヒ スーパードライ', price: '¥550', color: '#eab308' },
  ]

  const bW = 144
  const bH = 58
  const startX = 28
  const startY = 132

  for (let i = 0; i < buttons.length; i++) {
    const col = i % 3
    const row = Math.floor(i / 3)
    const bx = startX + col * 156
    const by = startY + row * 66
    const btn = buttons[i]

    // Button body
    g.fillStyle = '#1e2632'
    g.fillRect(bx, by, bW, bH)
    g.strokeStyle = btn.color
    g.lineWidth = 2
    g.strokeRect(bx, by, bW, bH)

    // Color banner on button
    g.fillStyle = btn.color
    g.fillRect(bx + 4, by + 4, bW - 8, 16)
    g.fillStyle = '#ffffff'
    g.font = 'bold 9.5px sans-serif'
    g.textAlign = 'center'
    g.fillText(btn.title, bx + bW / 2, by + 16)

    // Price
    g.fillStyle = '#ffffff'
    g.font = 'bold 15px monospace'
    g.fillText(btn.price, bx + bW / 2, by + 42)

    // LED indicator
    g.fillStyle = '#22c55e'
    g.beginPath()
    g.arc(bx + 12, by + 47, 3.5, 0, Math.PI * 2)
    g.fill()
  }

  // Bill slot & Coin slot
  g.fillStyle = '#111822'
  g.fillRect(28, 404, 210, 42)
  g.strokeStyle = '#334155'
  g.strokeRect(28, 404, 210, 42)
  g.fillStyle = '#38bdf8'
  g.font = 'bold 11px sans-serif'
  g.textAlign = 'left'
  g.fillText('紙幣投入口 (1000/2000円)', 42, 428)
  g.fillStyle = '#0284c7'
  g.fillRect(170, 418, 56, 12)

  g.fillStyle = '#111822'
  g.fillRect(256, 404, 228, 42)
  g.strokeStyle = '#334155'
  g.strokeRect(256, 404, 228, 42)
  g.fillStyle = '#f59e0b'
  g.fillText('硬貨投入口 (500/100/50/10)', 270, 428)
  g.fillStyle = '#d97706'
  g.fillRect(432, 416, 38, 16)

  // Ticket dispenser exit tray at bottom
  g.fillStyle = '#0b0f14'
  g.fillRect(28, 454, 456, 36)
  g.strokeStyle = '#22c55e'
  g.lineWidth = 1.5
  g.strokeRect(28, 454, 456, 36)
  g.fillStyle = '#22c55e'
  g.font = 'bold 12px sans-serif'
  g.textAlign = 'center'
  g.fillText('▼ おつり・食券 口 (TICKET / CHANGE)', 256, 477)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function ramenWallTexture(): THREE.CanvasTexture {
  const key = 'ramen-shop-wall'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Upper section (Y: 0 to 320): Warm Japanese textured plaster / diatomaceous earth (珪藻土)
  g.fillStyle = '#e8dcc8'
  g.fillRect(0, 0, 512, 320)
  for (let i = 0; i < 600; i++) {
    g.fillStyle = Math.random() > 0.5 ? 'rgba(180, 160, 130, 0.18)' : 'rgba(255, 245, 230, 0.25)'
    g.fillRect(Math.random() * 512, Math.random() * 320, 2, 2)
  }

  // Vertical dark timber stud battens (柱・付柱)
  const timberW = 20
  for (let x = 0; x < 512; x += 128) {
    g.fillStyle = '#3a2416'
    g.fillRect(x, 0, timberW, 320)
    g.fillStyle = '#543622'
    g.fillRect(x + 2, 0, timberW - 4, 320)
  }

  // Horizontal timber dividing rail (長押 / なげし)
  g.fillStyle = '#3a2416'
  g.fillRect(0, 312, 512, 16)
  g.fillStyle = '#543622'
  g.fillRect(0, 314, 512, 12)

  // Lower section (Y: 328 to 512): Dark Cedar Wainscot Planks (腰壁)
  g.fillStyle = '#2a1a10'
  g.fillRect(0, 328, 512, 184)

  const plankW = 42
  for (let x = 0; x < 512; x += plankW) {
    g.fillStyle = x % (plankW * 2) === 0 ? '#382216' : '#2e1c12'
    g.fillRect(x + 2, 328, plankW - 4, 184)
    g.fillStyle = '#160d08'
    g.fillRect(x, 328, 2, 184)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 1)
  textureCache.set(key, tex)
  return tex
}

export function ramenFloorTexture(): THREE.CanvasTexture {
  const key = 'ramen-shop-floor'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Dark slate/charcoal ceramic floor tile
  g.fillStyle = '#22262c'
  g.fillRect(0, 0, 512, 512)

  // Tile grid: 128x128 tiles
  const tSize = 128
  for (let x = 0; x < 512; x += tSize) {
    for (let y = 0; y < 512; y += tSize) {
      const v = Math.floor((Math.sin(x * 3 + y * 7) + 1) * 8)
      g.fillStyle = `rgb(${34 + v},${38 + v},${44 + v})`
      g.fillRect(x + 3, y + 3, tSize - 6, tSize - 6)

      // Fine flecks for stone grip
      for (let f = 0; f < 8; f++) {
        g.fillStyle = 'rgba(255, 255, 255, 0.08)'
        g.fillRect(x + Math.random() * (tSize - 6), y + Math.random() * (tSize - 6), 2, 2)
      }
    }
  }

  // Dark mortar joints
  g.strokeStyle = '#121519'
  g.lineWidth = 4
  g.strokeRect(0, 0, 512, 512)
  for (let x = tSize; x < 512; x += tSize) {
    g.beginPath()
    g.moveTo(x, 0)
    g.lineTo(x, 512)
    g.stroke()
  }
  for (let y = tSize; y < 512; y += tSize) {
    g.beginPath()
    g.moveTo(0, y)
    g.lineTo(512, y)
    g.stroke()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 3)
  textureCache.set(key, tex)
  return tex
}

// =========================================================================
// 8. STOREFRONT FACADES & WINDOW DISPLAY PROCEDURAL TEXTURES
// =========================================================================

const JP_FONT_FAMILY = '"Yu Gothic UI", "Yu Gothic", Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif'

// 1. DENTAL CLINIC WINDOW DISPLAY
export function dentalClinicWindowTexture(): THREE.CanvasTexture {
  const key = 'storefront-dental-window'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Soft frosted medical glass background gradient
  const grad = g.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, '#eaf5f7')
  grad.addColorStop(0.55, '#dbeff2')
  grad.addColorStop(1, '#cde6ea')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 512)

  // Subtle frosted noise grain
  const imgData = g.getImageData(0, 0, 1024, 512)
  const d = imgData.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 8
    d[i] = Math.min(255, Math.max(0, d[i] + n))
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n))
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n))
  }
  g.putImageData(imgData, 0, 0)

  // Top branding banner
  g.fillStyle = '#175261'
  g.fillRect(0, 0, 1024, 88)

  // Tooth icon inside shield
  g.fillStyle = '#2db8aa'
  g.beginPath()
  g.arc(68, 44, 28, 0, Math.PI * 2)
  g.fill()

  // Tooth glyph
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.moveTo(60, 32)
  g.bezierCurveTo(54, 24, 68, 22, 68, 34)
  g.bezierCurveTo(68, 22, 82, 24, 76, 32)
  g.bezierCurveTo(82, 48, 76, 60, 72, 60)
  g.bezierCurveTo(69, 60, 68, 46, 68, 46)
  g.bezierCurveTo(68, 46, 67, 60, 64, 60)
  g.bezierCurveTo(60, 60, 54, 48, 60, 32)
  g.fill()

  // Clinic title
  g.fillStyle = '#ffffff'
  g.font = `700 36px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('パークサイド歯科', 114, 34)

  g.fillStyle = '#a6e2ec'
  g.font = `500 17px ${JP_FONT_FAMILY}`
  g.fillText('PARKSIDE DENTAL CLINIC', 116, 64)

  // Department specialties banner
  g.fillStyle = '#e2f7fa'
  g.font = `600 18px ${JP_FONT_FAMILY}`
  g.textAlign = 'right'
  g.fillText('一般歯科 ・ 小児歯科 ・ 矯正歯科 ・ 口腔外科 ・ 予防定期検診', 990, 44)

  // LEFT CARD: Consultation hours grid (診療時間表)
  g.fillStyle = 'rgba(255, 255, 255, 0.92)'
  g.strokeStyle = '#bedee3'
  g.lineWidth = 2
  g.beginPath()
  g.roundRect(36, 110, 460, 270, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#175261'
  g.font = `700 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('【 診療時間のご案内 】', 56, 138)

  // Table header
  const tableX = 56
  const tableY = 165
  const colW = 48
  const days = ['月', '火', '水', '木', '金', '土', '日/祝']
  g.fillStyle = '#edf7f9'
  g.fillRect(tableX + 90, tableY, colW * 7, 28)
  g.fillStyle = '#175261'
  g.font = `700 15px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  days.forEach((day, i) => {
    if (day === '木' || day.includes('日')) g.fillStyle = '#d94b4b'
    else g.fillStyle = '#175261'
    g.fillText(day, tableX + 90 + i * colW + colW / 2, tableY + 14)
  })

  // Table rows
  const rows = [
    { label: '09:30 - 13:00', marks: ['●', '●', '●', '休', '●', '●', '休'] },
    { label: '14:30 - 19:30', marks: ['●', '●', '●', '休', '●', '▲', '休'] },
  ]
  rows.forEach((row, ri) => {
    const ry = tableY + 28 + ri * 34
    g.fillStyle = ri % 2 === 0 ? '#ffffff' : '#f8fcfd'
    g.fillRect(tableX, ry, 90 + colW * 7, 34)
    g.strokeStyle = '#d7eaee'
    g.strokeRect(tableX, ry, 90 + colW * 7, 34)

    g.fillStyle = '#2a3b40'
    g.font = `600 13px ${JP_FONT_FAMILY}`
    g.textAlign = 'center'
    g.fillText(row.label, tableX + 45, ry + 17)

    row.marks.forEach((m, ci) => {
      if (m === '休') {
        g.fillStyle = '#b84242'
        g.font = `700 14px ${JP_FONT_FAMILY}`
      } else if (m === '▲') {
        g.fillStyle = '#e07d10'
        g.font = `700 15px ${JP_FONT_FAMILY}`
      } else {
        g.fillStyle = '#1d788a'
        g.font = `700 16px ${JP_FONT_FAMILY}`
      }
      g.fillText(m, tableX + 90 + ci * colW + colW / 2, ry + 17)
    })
  })

  g.fillStyle = '#57727a'
  g.font = `500 13px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('▲ 土曜午後は 14:30〜17:00 まで診療', 56, 290)
  g.fillText('休診日：木曜日・日曜日・祝祭日', 56, 312)
  g.fillStyle = '#1e7587'
  g.font = `600 13px ${JP_FONT_FAMILY}`
  g.fillText('各種健康保険取扱 ・ 労災保険指定医療機関', 56, 345)

  // RIGHT CARD: Appointments & Features
  g.fillStyle = 'rgba(255, 255, 255, 0.92)'
  g.beginPath()
  g.roundRect(524, 110, 464, 270, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#175261'
  g.font = `700 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('【 ご予約・急患随時受付 】', 546, 138)

  g.fillStyle = '#41575f'
  g.font = `500 15px ${JP_FONT_FAMILY}`
  g.fillText('当院は患者様をお待たせしない予約優先制です。', 546, 172)
  g.fillText('急な歯の痛み・詰め物の脱落は当日診療いたします。', 546, 198)

  // Phone Callout Box
  g.fillStyle = '#edf8fa'
  g.strokeStyle = '#3296a6'
  g.lineWidth = 1.5
  g.beginPath()
  g.roundRect(546, 222, 420, 72, 6)
  g.fill()
  g.stroke()

  g.fillStyle = '#175261'
  g.font = `600 14px ${JP_FONT_FAMILY}`
  g.fillText('ご予約・お問い合わせダイヤル', 566, 242)

  g.fillStyle = '#134e5c'
  g.font = `800 32px ${JP_FONT_FAMILY}`
  g.fillText('TEL 03-3456-7890', 566, 274)

  g.fillStyle = '#4a6870'
  g.font = `500 14px ${JP_FONT_FAMILY}`
  g.fillText('● 痛みの少ない麻酔治療　● デジタルCT完備　● 完全滅菌対応', 546, 326)
  g.fillText('● 院内バリアフリー設計　● ベビーカー・車椅子そのまま入室可', 546, 352)

  // BOTTOM SECTION: Frosted Privacy Film & Sliding Door Decals
  g.fillStyle = 'rgba(255, 255, 255, 0.55)'
  g.fillRect(0, 400, 1024, 112)

  // Privacy striped frosted pattern
  g.fillStyle = 'rgba(255, 255, 255, 0.65)'
  for (let x = 0; x < 1024; x += 16) {
    g.fillRect(x, 405, 8, 95)
  }

  // Automatic door sticker
  g.fillStyle = '#1c783c'
  g.beginPath()
  g.roundRect(420, 425, 184, 52, 6)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('自動ドア / AUTOMATIC', 512, 446)
  g.font = `600 12px ${JP_FONT_FAMILY}`
  g.fillText('TOUCH 押してください', 512, 465)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 2. DENTAL CLINIC ROOFTOP / FASCIA ILLUMINATED SIGN
export function dentalClinicSignTexture(): THREE.CanvasTexture {
  const key = 'storefront-dental-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Deep marine clinic gradient
  const grad = g.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, '#154a57')
  grad.addColorStop(0.5, '#1b5969')
  grad.addColorStop(1, '#113e4a')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 256)

  // Border frame
  g.strokeStyle = '#47a8bc'
  g.lineWidth = 6
  g.strokeRect(6, 6, 1012, 244)

  // Tooth icon badge
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(110, 128, 64, 0, Math.PI * 2)
  g.fill()

  g.fillStyle = '#1b5969'
  g.beginPath()
  g.moveTo(96, 100)
  g.bezierCurveTo(84, 82, 110, 78, 110, 104)
  g.bezierCurveTo(110, 78, 136, 82, 124, 100)
  g.bezierCurveTo(138, 134, 126, 158, 118, 158)
  g.bezierCurveTo(112, 158, 110, 130, 110, 130)
  g.bezierCurveTo(110, 130, 108, 158, 102, 158)
  g.bezierCurveTo(94, 158, 82, 134, 96, 100)
  g.fill()

  // Clinic title
  g.fillStyle = '#ffffff'
  g.font = `800 68px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('パークサイド歯科', 205, 105)

  g.fillStyle = '#9fe1ee'
  g.font = `600 24px ${JP_FONT_FAMILY}`
  g.fillText('PARKSIDE DENTAL CLINIC  ・  TEL 03-3456-7890', 210, 172)

  // Right pill badge
  g.fillStyle = '#2db8aa'
  g.beginPath()
  g.roundRect(790, 80, 190, 96, 12)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `700 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('夜7時半まで', 885, 115)
  g.font = `600 16px ${JP_FONT_FAMILY}`
  g.fillText('急患随時受付', 885, 146)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 3. DRY CLEANERS WINDOW DISPLAY
export function dryCleanerWindowTexture(): THREE.CanvasTexture {
  const key = 'storefront-cleaners-window'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Clean laundry store interior gradient
  const grad = g.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, '#f0f5fb')
  grad.addColorStop(1, '#dfeaf5')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 512)

  // Top banner
  g.fillStyle = '#1e3f7a'
  g.fillRect(0, 0, 1024, 88)

  // Hanger emblem
  g.strokeStyle = '#ffd84d'
  g.lineWidth = 4
  g.beginPath()
  g.arc(68, 30, 12, 0, Math.PI, true)
  g.moveTo(40, 58)
  g.lineTo(68, 42)
  g.lineTo(96, 58)
  g.closePath()
  g.stroke()

  g.fillStyle = '#ffffff'
  g.font = `800 38px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('白金クリーニング', 120, 36)

  g.fillStyle = '#ffd84d'
  g.font = `600 17px ${JP_FONT_FAMILY}`
  g.fillText('SHIROKANE DRY CLEANING & LAUNDRY', 122, 66)

  g.fillStyle = '#ffffff'
  g.font = `700 18px ${JP_FONT_FAMILY}`
  g.textAlign = 'right'
  g.fillText('朝10時お預かり ➡ 夕方5時お渡し！ スピード即日仕上げ', 990, 44)

  // LEFT CARD: Price List (料金表)
  g.fillStyle = '#ffffff'
  g.strokeStyle = '#bed1e8'
  g.lineWidth = 2
  g.beginPath()
  g.roundRect(36, 110, 460, 270, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#1e3f7a'
  g.font = `800 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('【 白金クリーニング 料金表 】', 56, 138)

  const prices = [
    { name: 'ワイシャツ (立体抗菌消臭仕上)', price: '¥220〜' },
    { name: 'スーツ上下 (汗抜きプレス付)', price: '¥1,280〜' },
    { name: 'ジャケット・ブレザー', price: '¥780〜' },
    { name: 'スラックス・スカート', price: '¥550〜' },
    { name: 'ダウンジャケット・コート', price: '¥1,980〜' },
    { name: '毛布・羽毛ふとん丸洗い', price: '¥1,800〜' },
  ]

  prices.forEach((item, i) => {
    const y = 172 + i * 32
    g.fillStyle = '#2d3b4d'
    g.font = `600 15px ${JP_FONT_FAMILY}`
    g.textAlign = 'left'
    g.fillText(item.name, 56, y)

    // Dotted leader
    g.fillStyle = '#a0b3cb'
    for (let dotX = 295; dotX < 400; dotX += 8) {
      g.fillRect(dotX, y - 2, 3, 3)
    }

    g.fillStyle = '#d63429'
    g.font = `800 17px ${JP_FONT_FAMILY}`
    g.textAlign = 'right'
    g.fillText(item.price, 470, y)
  })

  // RIGHT CARD: Clean Garments Polybag Display & Coin Laundry
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.roundRect(524, 110, 464, 270, 8)
  g.fill()
  g.stroke()

  // Hanging garment rack illustration
  g.fillStyle = '#3a4b60'
  g.fillRect(550, 130, 412, 6) // rail

  // Clean suits in polybags
  const suitColors = ['#1d2430', '#3b4352', '#263347', '#4b5563', '#1e2838']
  suitColors.forEach((color, i) => {
    const sx = 560 + i * 80
    // hanger
    g.strokeStyle = '#8d99ae'
    g.lineWidth = 2
    g.beginPath()
    g.moveTo(sx + 35, 136)
    g.lineTo(sx + 15, 155)
    g.lineTo(sx + 55, 155)
    g.closePath()
    g.stroke()

    // Suit inside clear plastic bag
    g.fillStyle = color
    g.fillRect(sx + 15, 155, 40, 75)

    // Polybag sheen reflection
    g.fillStyle = 'rgba(255, 255, 255, 0.45)'
    g.fillRect(sx + 10, 150, 50, 95)
    g.strokeStyle = 'rgba(180, 210, 240, 0.7)'
    g.strokeRect(sx + 10, 150, 50, 95)

    // Quality check tag
    g.fillStyle = i % 2 === 0 ? '#ff4d4d' : '#3385ff'
    g.fillRect(sx + 42, 160, 14, 20)
  })

  // Coin Laundry 24H Promo Box
  g.fillStyle = '#eef5fc'
  g.strokeStyle = '#296ed6'
  g.lineWidth = 1.5
  g.beginPath()
  g.roundRect(546, 260, 420, 100, 6)
  g.fill()
  g.stroke()

  g.fillStyle = '#1e3f7a'
  g.font = `800 18px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('★ 24時間コインランドリー併設 ★', 566, 285)

  g.fillStyle = '#3f536e'
  g.font = `500 14px ${JP_FONT_FAMILY}`
  g.fillText('大型洗濯乾燥機・スニーカーウォッシャー完備！', 566, 312)
  g.fillText('営業時間: 本店 8:00〜20:00 (水曜定休) / コインランドリー 24時間', 566, 338)

  // BOTTOM SECTION: Automatic doors & stickers
  g.fillStyle = 'rgba(235, 243, 252, 0.75)'
  g.fillRect(0, 400, 1024, 112)

  g.fillStyle = '#1e3f7a'
  g.beginPath()
  g.roundRect(420, 425, 184, 52, 6)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('自動ドア / AUTOMATIC', 512, 446)
  g.font = `600 12px ${JP_FONT_FAMILY}`
  g.fillText('TOUCH 押してください', 512, 465)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 4. DRY CLEANERS FASCIA SIGN
export function dryCleanerSignTexture(): THREE.CanvasTexture {
  const key = 'storefront-cleaners-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const g = canvas.getContext('2d')!

  const grad = g.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, '#1c3e78')
  grad.addColorStop(0.5, '#255099')
  grad.addColorStop(1, '#173466')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 256)

  g.strokeStyle = '#ffd84d'
  g.lineWidth = 5
  g.strokeRect(6, 6, 1012, 244)

  // Coat hanger emblem
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(105, 128, 62, 0, Math.PI * 2)
  g.fill()

  g.strokeStyle = '#1c3e78'
  g.lineWidth = 5
  g.beginPath()
  g.arc(105, 105, 15, 0, Math.PI, true)
  g.moveTo(75, 142)
  g.lineTo(105, 120)
  g.lineTo(135, 142)
  g.closePath()
  g.stroke()

  g.fillStyle = '#ffffff'
  g.font = `800 68px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('白金クリーニング', 200, 102)

  g.fillStyle = '#ffd84d'
  g.font = `700 24px ${JP_FONT_FAMILY}`
  g.fillText('SHIROKANE DRY CLEANING  ・  24H コインランドリー併設', 205, 168)

  // Speed Badge
  g.fillStyle = '#e63946'
  g.beginPath()
  g.roundRect(790, 75, 190, 105, 10)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `800 24px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('即日仕上げ', 885, 114)
  g.font = `600 15px ${JP_FONT_FAMILY}`
  g.fillText('朝10時➡夕方5時', 885, 150)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 5. TRADITIONAL IZAKAYA FACADE & NOREN TEXTURE
export function izakayaFacadeTexture(): THREE.CanvasTexture {
  const key = 'storefront-izakaya-facade'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Charred dark cedarwood planks (焼杉 - Yakisugi)
  g.fillStyle = '#261e19'
  g.fillRect(0, 0, 1024, 512)

  // Vertical wood plank grain lines
  for (let x = 0; x < 1024; x += 32) {
    g.fillStyle = x % 64 === 0 ? '#1f1814' : '#2d231d'
    g.fillRect(x, 0, 31, 512)
    g.fillStyle = '#140f0c'
    g.fillRect(x + 31, 0, 1, 512)
  }

  // TOP SECTION: Indigo Noren Curtain (暖簾)
  const norenW = 600
  const norenX = 212
  const norenH = 150
  const norenPanels = 5
  const panelW = norenW / norenPanels

  for (let p = 0; p < norenPanels; p++) {
    const px = norenX + p * panelW
    g.fillStyle = '#1c283f' // Deep Japanese indigo
    g.fillRect(px + 2, 0, panelW - 4, norenH)

    // Panel hem crease
    g.fillStyle = '#141e30'
    g.fillRect(px + 2, norenH - 12, panelW - 4, 12)
  }

  // White family crest (家紋) on center noren panel
  const centerX = norenX + norenW / 2
  g.strokeStyle = '#f4eedb'
  g.lineWidth = 4
  g.beginPath()
  g.arc(centerX, 65, 34, 0, Math.PI * 2)
  g.stroke()

  g.fillStyle = '#f4eedb'
  g.font = `800 48px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText('魚', centerX, 64)

  // Kanji on side panels
  g.font = `800 36px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.fillText('和', norenX + panelW * 0.5, 75)
  g.fillText('食', norenX + panelW * 1.5, 75)
  g.fillText('酒', norenX + panelW * 3.5, 75)
  g.fillText('処', norenX + panelW * 4.5, 75)

  // CENTER-LEFT: Traditional Shoji Lattice Window (格子窓) with Warm Amber Backlight
  const winX = 40
  const winY = 175
  const winW = 440
  const winH = 290

  // Warm glowing washi paper interior
  const paperGrad = g.createRadialGradient(winX + winW / 2, winY + winH / 2, 40, winX + winW / 2, winY + winH / 2, 280)
  paperGrad.addColorStop(0, '#ffe49e')
  paperGrad.addColorStop(0.7, '#ffaa44')
  paperGrad.addColorStop(1, '#c96a1a')
  g.fillStyle = paperGrad
  g.fillRect(winX, winY, winW, winH)

  // Dark timber lattice grid (Koushi)
  g.fillStyle = '#261b14'
  g.lineWidth = 6
  g.strokeRect(winX, winY, winW, winH)

  // Grid vertical slats
  for (let gx = winX; gx < winX + winW; gx += 36) {
    g.fillRect(gx, winY, 6, winH)
  }
  // Grid horizontal slats
  for (let gy = winY; gy < winY + winH; gy += 42) {
    g.fillRect(winX, gy, winW, 6)
  }

  // CENTER-RIGHT: Traditional Wooden Menu Placards (木札メニュー)
  const menuPlacards = [
    { title: '名物 もつ煮込み', price: '四八〇円' },
    { title: '本日のお造り盛合', price: '一二八〇円' },
    { title: '炭火串焼き盛合せ', price: '八五〇円' },
    { title: '旬魚 塩焼き各種', price: '六八〇円' },
    { title: '全国厳選 地酒一合', price: '七五〇円' },
  ]

  menuPlacards.forEach((item, i) => {
    const mx = 530 + i * 92
    const my = 175
    // Cedar wood plank
    g.fillStyle = '#9e6e43'
    g.fillRect(mx, my, 76, 285)
    g.strokeStyle = '#5a3d24'
    g.lineWidth = 3
    g.strokeRect(mx, my, 76, 285)

    // Vertical Japanese calligraphy text
    g.fillStyle = '#170e08'
    g.font = `700 17px "Hiragino Mincho ProN", "Yu Mincho", serif`
    g.textAlign = 'center'
    const chars = item.title.split('')
    chars.forEach((c, ci) => {
      g.fillText(c, mx + 38, my + 30 + ci * 24)
    })

    // Red accent seal at bottom of placard
    g.fillStyle = '#9e241b'
    g.fillRect(mx + 26, my + 215, 24, 24)
    g.fillStyle = '#ffffff'
    g.font = `700 12px serif`
    g.fillText('極', mx + 38, my + 231)

    // Price in kanji
    g.fillStyle = '#2a1a10'
    g.font = `600 13px "Hiragino Mincho ProN", "Yu Mincho", serif`
    g.fillText(item.price, mx + 38, my + 265)
  })

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 6. TRADITIONAL IZAKAYA SIGN
export function izakayaSignTexture(): THREE.CanvasTexture {
  const key = 'storefront-izakaya-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const g = canvas.getContext('2d')!

  const grad = g.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, '#5a1910')
  grad.addColorStop(0.5, '#7a2016')
  grad.addColorStop(1, '#4a120b')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 256)

  // Gold border
  g.strokeStyle = '#dfa84a'
  g.lineWidth = 6
  g.strokeRect(6, 6, 1012, 244)

  // Traditional Chochin lantern graphic
  g.fillStyle = '#d93829'
  g.beginPath()
  g.ellipse(110, 128, 48, 62, 0, 0, Math.PI * 2)
  g.fill()
  g.strokeStyle = '#220805'
  g.lineWidth = 3
  g.stroke()

  g.fillStyle = '#ffffff'
  g.font = `900 36px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText('酒', 110, 128)

  // Izakaya title
  g.fillStyle = '#ffeed0'
  g.font = `900 72px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.textAlign = 'left'
  g.fillText('和食 酒処 魚河岸', 200, 104)

  g.fillStyle = '#dfa84a'
  g.font = `700 24px ${JP_FONT_FAMILY}`
  g.fillText('TRADITIONAL IZAKAYA UOGASHI  ・  旬魚 炭火串焼 厳選銘酒', 205, 172)

  // Seal stamp
  g.fillStyle = '#b32215'
  g.fillRect(860, 80, 96, 96)
  g.strokeStyle = '#ffd875'
  g.lineWidth = 2
  g.strokeRect(862, 82, 92, 92)

  g.fillStyle = '#ffffff'
  g.font = `700 20px serif`
  g.textAlign = 'center'
  g.fillText('商売', 908, 114)
  g.fillText('繁盛', 908, 148)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 7. PHARMACY & CLINIC WINDOW DISPLAY
export function pharmacyWindowTexture(): THREE.CanvasTexture {
  const key = 'storefront-pharmacy-window'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  const grad = g.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, '#f2faf8')
  grad.addColorStop(1, '#ddf1ec')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 512)

  // Top banner
  g.fillStyle = '#0f6150'
  g.fillRect(0, 0, 1024, 88)

  // Green Cross Emblem (緑十字)
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(68, 44, 28, 0, Math.PI * 2)
  g.fill()

  g.fillStyle = '#00a86b'
  g.fillRect(60, 26, 16, 36)
  g.fillRect(50, 36, 36, 16)

  g.fillStyle = '#ffffff'
  g.font = `800 36px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('森クリニック / 森薬局', 114, 34)

  g.fillStyle = '#9ee8d7'
  g.font = `600 17px ${JP_FONT_FAMILY}`
  g.fillText('MORI CLINIC & DISPENSING PHARMACY', 116, 64)

  g.fillStyle = '#ffffff'
  g.font = `700 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'right'
  g.fillText('【保険調剤】 全国の処方せん受け付けます', 990, 44)

  // LEFT CARD: Clinic Hours
  g.fillStyle = '#ffffff'
  g.strokeStyle = '#b6e0d5'
  g.lineWidth = 2
  g.beginPath()
  g.roundRect(36, 110, 460, 270, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#0f6150'
  g.font = `800 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('【 森クリニック 診療時間 】', 56, 138)

  g.fillStyle = '#2e4741'
  g.font = `600 15px ${JP_FONT_FAMILY}`
  g.fillText('診療科目：内科 ・ 消化器科 ・ 呼吸器科 ・ 小児科', 56, 172)
  g.fillText('午前診療：09:00 〜 12:30 （月・火・木・金・土）', 56, 206)
  g.fillText('午後診療：15:00 〜 18:30 （月・火・木・金）', 56, 238)
  g.fillStyle = '#b83b3b'
  g.fillText('休診日：水曜午後・土曜午後・日曜・祝祭日', 56, 272)

  g.fillStyle = '#376b5f'
  g.font = `500 14px ${JP_FONT_FAMILY}`
  g.fillText('● 各種健康診断・予防接種 随時受付', 56, 316)
  g.fillText('● 在宅医療・訪問診療対応クリニック', 56, 344)

  // RIGHT CARD: Prescription Pharmacy
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.roundRect(524, 110, 464, 270, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#0f6150'
  g.font = `800 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('【 調剤薬局 サービス案内 】', 546, 138)

  // Pill icon & prescription callout
  g.fillStyle = '#e8f7f3'
  g.strokeStyle = '#28a687'
  g.lineWidth = 1.5
  g.beginPath()
  g.roundRect(546, 160, 420, 85, 6)
  g.fill()
  g.stroke()

  g.fillStyle = '#0f6150'
  g.font = `800 22px ${JP_FONT_FAMILY}`
  g.fillText('処方せん受付中', 566, 188)
  g.fillStyle = '#31544c'
  g.font = `500 14px ${JP_FONT_FAMILY}`
  g.fillText('大学病院・総合病院・地域の診療所すべての処方せん調剤可', 566, 222)

  g.fillStyle = '#2f4b44'
  g.font = `500 14px ${JP_FONT_FAMILY}`
  g.fillText('● 電子お薬手帳アプリ対応', 546, 276)
  g.fillText('● お薬の飲み合わせ・健康相談 随時受付', 546, 304)
  g.fillText('● 一般用医薬品(OTC)・衛生材料・マスク・消毒液完備', 546, 332)
  g.fillText('● 各種クレジットカード・電子マネー対応', 546, 360)

  // Bottom frosted door
  g.fillStyle = 'rgba(230, 245, 240, 0.75)'
  g.fillRect(0, 400, 1024, 112)

  g.fillStyle = '#0f6150'
  g.beginPath()
  g.roundRect(420, 425, 184, 52, 6)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('自動ドア / AUTOMATIC', 512, 446)
  g.font = `600 12px ${JP_FONT_FAMILY}`
  g.fillText('TOUCH 押してください', 512, 465)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 8. PHARMACY SIGN
export function pharmacySignTexture(): THREE.CanvasTexture {
  const key = 'storefront-pharmacy-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const g = canvas.getContext('2d')!

  const grad = g.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, '#0c4d40')
  grad.addColorStop(0.5, '#136b58')
  grad.addColorStop(1, '#093a30')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 256)

  g.strokeStyle = '#43d9b5'
  g.lineWidth = 5
  g.strokeRect(6, 6, 1012, 244)

  // Green Cross
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(105, 128, 62, 0, Math.PI * 2)
  g.fill()

  g.fillStyle = '#00a86b'
  g.fillRect(90, 88, 30, 80)
  g.fillRect(65, 113, 80, 30)

  g.fillStyle = '#ffffff'
  g.font = `800 66px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('森クリニック / 薬局', 195, 102)

  g.fillStyle = '#9fe9d8'
  g.font = `600 24px ${JP_FONT_FAMILY}`
  g.fillText('MORI CLINIC & PHARMACY  ・  処方せん受付・内科・小児科', 200, 168)

  // Cross mark badge
  g.fillStyle = '#00a86b'
  g.beginPath()
  g.roundRect(810, 75, 175, 105, 10)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `800 22px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('保険調剤', 897, 114)
  g.font = `600 16px ${JP_FONT_FAMILY}`
  g.fillText('処方せん受付', 897, 150)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 9. BOOKSTORE & MANGA WINDOW DISPLAY
export function bookstoreWindowTexture(): THREE.CanvasTexture {
  const key = 'storefront-bookstore-window'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Warm golden lit bookstore interior
  const grad = g.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, '#f9f5ed')
  grad.addColorStop(1, '#ecdfcd')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 512)

  // Top header
  g.fillStyle = '#542617'
  g.fillRect(0, 0, 1024, 88)

  g.fillStyle = '#ffffff'
  g.font = `800 38px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('東書店 本屋', 48, 36)

  g.fillStyle = '#e8c9b5'
  g.font = `600 18px ${JP_FONT_FAMILY}`
  g.fillText('HIGASHI BOOKSTORE & COMICS', 50, 66)

  g.fillStyle = '#ffffff'
  g.font = `700 18px ${JP_FONT_FAMILY}`
  g.textAlign = 'right'
  g.fillText('話題のベストセラー・新刊コミック・文庫・雑誌 豊富に取り揃えております', 990, 44)

  // Bookshelves stacked with books
  const shelfY1 = 115
  const shelfY2 = 250
  const bookSpineColors = [
    '#b83328', '#254b85', '#247a46', '#87428f', '#d97d21', '#1f2937', '#b5832a',
    '#326b78', '#a82c4e', '#4f46e5', '#0d9488', '#ea580c', '#15803d', '#4338ca',
    '#be185d', '#b45309', '#1e40af', '#065f46', '#831843', '#701a75', '#1e3a8a',
  ]

  // Row 1
  g.fillStyle = '#402619'
  g.fillRect(36, shelfY1 + 95, 952, 10)
  for (let bx = 45; bx < 970; bx += 18) {
    const col = bookSpineColors[(bx * 7) % bookSpineColors.length]
    const h = 75 + ((bx * 13) % 20)
    g.fillStyle = col
    g.fillRect(bx, shelfY1 + 95 - h, 15, h)
  }

  // Row 2
  g.fillStyle = '#402619'
  g.fillRect(36, shelfY2 + 105, 952, 10)
  for (let bx = 45; bx < 970; bx += 22) {
    const col = bookSpineColors[(bx * 11) % bookSpineColors.length]
    const h = 85 + ((bx * 17) % 20)
    g.fillStyle = col
    g.fillRect(bx, shelfY2 + 105 - h, 18, h)
  }

  // Promotional posters on front window glass
  // Poster 1: Bestseller
  g.fillStyle = 'rgba(255, 255, 255, 0.94)'
  g.strokeStyle = '#c9542a'
  g.lineWidth = 3
  g.beginPath()
  g.roundRect(80, 150, 260, 210, 6)
  g.fill()
  g.stroke()

  g.fillStyle = '#c9542a'
  g.font = `800 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('【 今週のベストセラー 】', 210, 185)

  g.fillStyle = '#261b16'
  g.font = `700 15px ${JP_FONT_FAMILY}`
  g.fillText('1位 直木賞受賞 話題の巨編', 210, 222)
  g.fillText('2位 週刊少年コミック 最新巻', 210, 254)
  g.fillText('3位 ビジネス実践名著', 210, 286)
  g.fillText('4位 東京下町 街歩きガイド', 210, 318)

  // Poster 2: Comic / Manga release
  g.fillStyle = 'rgba(255, 255, 255, 0.94)'
  g.strokeStyle = '#2b63ab'
  g.lineWidth = 3
  g.beginPath()
  g.roundRect(680, 150, 260, 210, 6)
  g.fill()
  g.stroke()

  g.fillStyle = '#2b63ab'
  g.font = `800 20px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('★ コミック新刊 入荷 ★', 810, 185)

  g.fillStyle = '#1c2838'
  g.font = `700 15px ${JP_FONT_FAMILY}`
  g.fillText('週刊ジャンプ系 コミックス', 810, 222)
  g.fillText('少年マガジン系 コミックス', 810, 254)
  g.fillText('青年コミック・名作復刻版', 810, 286)
  g.fillText('図書カードNEXT 取扱店', 810, 318)

  // Bottom glass bar
  g.fillStyle = 'rgba(240, 230, 218, 0.75)'
  g.fillRect(0, 400, 1024, 112)

  g.fillStyle = '#542617'
  g.beginPath()
  g.roundRect(420, 425, 184, 52, 6)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('自動ドア / AUTOMATIC', 512, 446)
  g.font = `600 12px ${JP_FONT_FAMILY}`
  g.fillText('東書店 入口', 512, 465)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 10. BOOKSTORE SIGN
export function bookstoreSignTexture(): THREE.CanvasTexture {
  const key = 'storefront-bookstore-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const g = canvas.getContext('2d')!

  const grad = g.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, '#4a2013')
  grad.addColorStop(0.5, '#632e1c')
  grad.addColorStop(1, '#3b180d')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 256)

  g.strokeStyle = '#e0a96d'
  g.lineWidth = 5
  g.strokeRect(6, 6, 1012, 244)

  // Book emblem
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(105, 128, 62, 0, Math.PI * 2)
  g.fill()

  g.strokeStyle = '#4a2013'
  g.lineWidth = 4
  g.beginPath()
  g.moveTo(75, 110)
  g.quadraticCurveTo(105, 120, 105, 150)
  g.quadraticCurveTo(105, 120, 135, 110)
  g.lineTo(135, 145)
  g.quadraticCurveTo(105, 155, 105, 155)
  g.quadraticCurveTo(105, 155, 75, 145)
  g.closePath()
  g.stroke()

  g.fillStyle = '#ffeedb'
  g.font = `900 74px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('書店 本屋', 195, 102)

  g.fillStyle = '#dfaf85'
  g.font = `700 24px ${JP_FONT_FAMILY}`
  g.fillText('HIGASHI BOOKSTORE & COMICS  ・  本・雑誌・コミック・文具', 200, 168)

  // Badge
  g.fillStyle = '#8f3c20'
  g.beginPath()
  g.roundRect(810, 75, 175, 105, 10)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `800 24px "Hiragino Mincho ProN", serif`
  g.textAlign = 'center'
  g.fillText('本・コミック', 897, 114)
  g.font = `600 16px ${JP_FONT_FAMILY}`
  g.fillText('新刊続々入荷', 897, 150)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 11. CAFE MAME STOREFRONT WINDOW & CHALKBOARD
export function cafeStorefrontTexture(): THREE.CanvasTexture {
  const key = 'storefront-cafe-window'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Warm dark walnut and amber cafe glow
  const grad = g.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, '#2d1f18')
  grad.addColorStop(1, '#1b120d')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 512)

  // Warm amber ambient back window
  const amberGrad = g.createRadialGradient(720, 220, 40, 720, 220, 320)
  amberGrad.addColorStop(0, '#ffbf66')
  amberGrad.addColorStop(0.7, '#d47d22')
  amberGrad.addColorStop(1, '#5e2e05')
  g.fillStyle = amberGrad
  g.fillRect(480, 80, 500, 320)

  // Coffee burlap sacks silhouette
  g.fillStyle = '#8c5e37'
  g.beginPath()
  g.roundRect(520, 250, 100, 140, 10)
  g.roundRect(640, 260, 100, 130, 10)
  g.roundRect(760, 240, 110, 150, 10)
  g.fill()

  g.fillStyle = '#26150b'
  g.font = `800 15px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('BRAZIL', 570, 310)
  g.fillText('ETHIOPIA', 690, 320)
  g.fillText('COLOMBIA', 815, 305)

  // Hanging pendant lamps
  for (const lx of [600, 740, 870]) {
    g.strokeStyle = '#2b1b11'
    g.lineWidth = 2
    g.beginPath()
    g.moveTo(lx, 80)
    g.lineTo(lx, 140)
    g.stroke()

    g.fillStyle = '#fff4cc'
    g.beginPath()
    g.arc(lx, 145, 12, 0, Math.PI * 2)
    g.fill()
  }

  // LEFT: Chalkboard Menu (黒板メニュー)
  g.fillStyle = '#212726'
  g.strokeStyle = '#855938'
  g.lineWidth = 6
  g.beginPath()
  g.roundRect(40, 50, 400, 370, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#fceecb'
  g.font = `800 24px "Hiragino Mincho ProN", serif`
  g.textAlign = 'center'
  g.fillText('CAFE MAME  珈琲豆', 240, 90)

  g.strokeStyle = '#e0c99f'
  g.lineWidth = 1.5
  g.beginPath()
  g.moveTo(100, 105)
  g.lineTo(380, 105)
  g.stroke()

  const cafeMenu = [
    { name: 'Tokyo Blend (深煎り)', price: '¥480' },
    { name: 'Ethiopia Yirgacheffe (浅煎り)', price: '¥550' },
    { name: 'Cafe Latte (Hot/Iced)', price: '¥520' },
    { name: 'Cold Brew Nitro Coffee', price: '¥550' },
    { name: '自家製 バスクチーズケーキ', price: '¥500' },
    { name: 'クラシック カスタードプリン', price: '¥450' },
  ]

  cafeMenu.forEach((item, i) => {
    const my = 145 + i * 36
    g.fillStyle = '#ffffff'
    g.font = `600 15px ${JP_FONT_FAMILY}`
    g.textAlign = 'left'
    g.fillText(item.name, 65, my)

    g.fillStyle = '#ffd680'
    g.font = `700 16px ${JP_FONT_FAMILY}`
    g.textAlign = 'right'
    g.fillText(item.price, 415, my)
  })

  g.fillStyle = '#dfba87'
  g.font = `500 13px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('自家焙煎 厳選シングルオリジン豆販売 100g〜', 240, 385)

  // Bottom glass bar
  g.fillStyle = 'rgba(40, 26, 18, 0.85)'
  g.fillRect(0, 430, 1024, 82)

  g.fillStyle = '#e8be8b'
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('OPEN 8:30 〜 19:30  /  TAKE OUT OK', 512, 475)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 12. CAFE MAME SIGN
export function cafeSignTexture(): THREE.CanvasTexture {
  const key = 'storefront-cafe-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const g = canvas.getContext('2d')!

  const grad = g.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, '#361e12')
  grad.addColorStop(0.5, '#4a2b1b')
  grad.addColorStop(1, '#2a160c')
  g.fillStyle = grad
  g.fillRect(0, 0, 1024, 256)

  g.strokeStyle = '#d4a36a'
  g.lineWidth = 5
  g.strokeRect(6, 6, 1012, 244)

  // Steaming coffee mug
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(105, 128, 62, 0, Math.PI * 2)
  g.fill()

  g.fillStyle = '#361e12'
  g.beginPath()
  g.roundRect(82, 110, 46, 38, 4)
  g.fill()
  g.strokeStyle = '#361e12'
  g.lineWidth = 4
  g.beginPath()
  g.arc(130, 126, 10, -Math.PI / 2, Math.PI / 2)
  g.stroke()

  g.fillStyle = '#ffeed9'
  g.font = `900 70px "Hiragino Mincho ProN", serif`
  g.textAlign = 'left'
  g.textBaseline = 'middle'
  g.fillText('喫茶 TOKYO CAFE', 195, 102)

  g.fillStyle = '#d4a36a'
  g.font = `700 24px ${JP_FONT_FAMILY}`
  g.fillText('CAFE MAME  ・  ROASTERY & SPECIALTY BEANS', 200, 168)

  // Badge
  g.fillStyle = '#6e3c23'
  g.beginPath()
  g.roundRect(810, 75, 175, 105, 10)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `800 24px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('自家焙煎', 897, 114)
  g.font = `600 16px ${JP_FONT_FAMILY}`
  g.fillText('珈琲豆販売', 897, 150)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 13. SIDEWALK A-FRAME SIGN TEXTURES (立て看板)
export type AFrameSignType = 'dental' | 'cleaners' | 'izakaya' | 'pharmacy' | 'bookstore' | 'cafe'

export function aFrameSignTexture(type: AFrameSignType): THREE.CanvasTexture {
  const key = `aframe-sign-${type}`
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 768
  const g = canvas.getContext('2d')!

  if (type === 'dental') {
    // White & mint dental clinic board
    g.fillStyle = '#f0f8fa'
    g.fillRect(0, 0, 512, 768)
    g.strokeStyle = '#1b5b6b'
    g.lineWidth = 14
    g.strokeRect(7, 7, 498, 754)

    g.fillStyle = '#1b5b6b'
    g.fillRect(14, 14, 484, 140)

    g.fillStyle = '#ffffff'
    g.font = `800 42px ${JP_FONT_FAMILY}`
    g.textAlign = 'center'
    g.fillText('パークサイド歯科', 256, 75)
    g.font = `600 20px ${JP_FONT_FAMILY}`
    g.fillText('PARKSIDE DENTAL', 256, 120)

    g.fillStyle = '#1b5b6b'
    g.font = `800 32px ${JP_FONT_FAMILY}`
    g.fillText('【 本日診療中 】', 256, 210)

    g.fillStyle = '#2a444c'
    g.font = `600 24px ${JP_FONT_FAMILY}`
    g.fillText('午前  09:30 〜 13:00', 256, 270)
    g.fillText('午後  14:30 〜 19:30', 256, 320)

    g.fillStyle = '#d94b4b'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('初診・急患 随時受付', 256, 390)

    g.fillStyle = '#32707e'
    g.font = `600 21px ${JP_FONT_FAMILY}`
    g.fillText('歯のクリーニング・定期検診', 256, 445)
    g.fillText('ホワイトニング・小児歯科', 256, 485)
    g.fillText('保険証をご持参ください', 256, 540)

    g.fillStyle = '#134754'
    g.font = `800 32px ${JP_FONT_FAMILY}`
    g.fillText('TEL 03-3456-7890', 256, 620)

    g.fillStyle = '#e85d04'
    g.fillRect(40, 670, 432, 50)
    g.fillStyle = '#ffffff'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('お気軽にご来院ください', 256, 702)

  } else if (type === 'cleaners') {
    // Royal blue & yellow dry cleaners board
    g.fillStyle = '#f0f5fc'
    g.fillRect(0, 0, 512, 768)
    g.strokeStyle = '#1e3f7a'
    g.lineWidth = 14
    g.strokeRect(7, 7, 498, 754)

    g.fillStyle = '#1e3f7a'
    g.fillRect(14, 14, 484, 140)

    g.fillStyle = '#ffffff'
    g.font = `800 42px ${JP_FONT_FAMILY}`
    g.textAlign = 'center'
    g.fillText('白金クリーニング', 256, 75)
    g.fillStyle = '#ffd84d'
    g.font = `700 20px ${JP_FONT_FAMILY}`
    g.fillText('SHIROKANE CLEANING', 256, 120)

    g.fillStyle = '#e63946'
    g.fillRect(30, 180, 452, 65)
    g.fillStyle = '#ffffff'
    g.font = `800 32px ${JP_FONT_FAMILY}`
    g.fillText('★ 本日ポイント2倍DAY ★', 256, 224)

    g.fillStyle = '#1e3f7a'
    g.font = `800 26px ${JP_FONT_FAMILY}`
    g.fillText('ワイシャツ 抗菌仕上  ¥220', 256, 300)
    g.fillText('スーツ上下 汗抜き付  ¥1,280', 256, 350)
    g.fillText('ダウン・コート類   ¥1,980', 256, 400)

    g.fillStyle = '#324a6d'
    g.font = `600 22px ${JP_FONT_FAMILY}`
    g.fillText('朝10時お預かり ➡ 夕方5時お渡し', 256, 475)
    g.fillText('スピード即日仕上げ可能！', 256, 520)

    g.fillStyle = '#1e3f7a'
    g.fillRect(30, 570, 452, 130)
    g.fillStyle = '#ffd84d'
    g.font = `800 26px ${JP_FONT_FAMILY}`
    g.fillText('24時間コインランドリー', 256, 615)
    g.fillStyle = '#ffffff'
    g.font = `600 20px ${JP_FONT_FAMILY}`
    g.fillText('大型洗濯乾燥機 好評稼働中！', 256, 660)

  } else if (type === 'izakaya') {
    // Dark chalkboard izakaya special board
    g.fillStyle = '#211c19'
    g.fillRect(0, 0, 512, 768)
    g.strokeStyle = '#85512b'
    g.lineWidth = 14
    g.strokeRect(7, 7, 498, 754)

    g.fillStyle = '#94291e'
    g.fillRect(14, 14, 484, 130)

    g.fillStyle = '#fff0d9'
    g.font = `900 44px "Hiragino Mincho ProN", serif`
    g.textAlign = 'center'
    g.fillText('和食・酒処 魚河岸', 256, 75)
    g.fillStyle = '#ffd580'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('元気に営業中！', 256, 120)

    g.fillStyle = '#ffd875'
    g.font = `800 28px "Hiragino Mincho ProN", serif`
    g.fillText('〜 本日のおすすめ 〜', 256, 195)

    g.fillStyle = '#ffffff'
    g.font = `700 24px "Hiragino Mincho ProN", serif`
    g.fillText('● 本日の刺身三種盛り   九八〇円', 256, 255)
    g.fillText('● 特製 名物もつ煮込み   四八〇円', 256, 310)
    g.fillText('● 備長炭 串焼き五本盛   八五〇円', 256, 365)
    g.fillText('● 本日の地酒 純米大吟醸 七五〇円', 256, 420)

    g.fillStyle = '#94291e'
    g.fillRect(30, 480, 452, 100)
    g.fillStyle = '#fff4de'
    g.font = `800 26px ${JP_FONT_FAMILY}`
    g.fillText('【 晩酌セット 1,000円 】', 256, 522)
    g.font = `600 18px ${JP_FONT_FAMILY}`
    g.fillText('生ビール ＋ 小鉢 ＋ 串焼き3本！', 256, 558)

    g.fillStyle = '#e8a84a'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('お一人様大歓迎！ カウンター席有', 256, 650)
    g.fillText('いらっしゃいませ！', 256, 695)

  } else if (type === 'pharmacy') {
    // Teal & green pharmacy board
    g.fillStyle = '#f0faf6'
    g.fillRect(0, 0, 512, 768)
    g.strokeStyle = '#0f6150'
    g.lineWidth = 14
    g.strokeRect(7, 7, 498, 754)

    g.fillStyle = '#0f6150'
    g.fillRect(14, 14, 484, 140)

    g.fillStyle = '#ffffff'
    g.font = `800 42px ${JP_FONT_FAMILY}`
    g.textAlign = 'center'
    g.fillText('森クリニック / 薬局', 256, 75)
    g.fillStyle = '#9fe8d7'
    g.font = `600 20px ${JP_FONT_FAMILY}`
    g.fillText('PHARMACY & CLINIC', 256, 120)

    g.fillStyle = '#00a86b'
    g.fillRect(30, 180, 452, 70)
    g.fillStyle = '#ffffff'
    g.font = `800 28px ${JP_FONT_FAMILY}`
    g.fillText('【 保険調剤 処方せん受付 】', 256, 225)

    g.fillStyle = '#21423a'
    g.font = `600 22px ${JP_FONT_FAMILY}`
    g.fillText('全国どちらの医療機関の処方せんも', 256, 300)
    g.fillText('受け付けております', 256, 335)

    g.fillStyle = '#0f6150'
    g.font = `700 24px ${JP_FONT_FAMILY}`
    g.fillText('森クリニック 診療時間', 256, 410)
    g.fillStyle = '#31544c'
    g.font = `600 21px ${JP_FONT_FAMILY}`
    g.fillText('午前 9:00〜12:30 / 午後 15:00〜18:30', 256, 450)
    g.fillText('内科・小児科・呼吸器科', 256, 490)

    g.fillStyle = '#0f6150'
    g.fillRect(30, 560, 452, 140)
    g.fillStyle = '#ffffff'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('お薬のご相談・在宅医療対応', 256, 605)
    g.fillText('電子お薬手帳アプリ対応', 256, 645)
    g.fillText('各種キャッシュレス決済可', 256, 680)

  } else if (type === 'bookstore') {
    // Bookish kraft brown A-frame board
    g.fillStyle = '#faf4ec'
    g.fillRect(0, 0, 512, 768)
    g.strokeStyle = '#542617'
    g.lineWidth = 14
    g.strokeRect(7, 7, 498, 754)

    g.fillStyle = '#542617'
    g.fillRect(14, 14, 484, 140)

    g.fillStyle = '#ffffff'
    g.font = `900 44px "Hiragino Mincho ProN", serif`
    g.textAlign = 'center'
    g.fillText('東書店 本屋', 256, 75)
    g.fillStyle = '#dfaf85'
    g.font = `600 20px ${JP_FONT_FAMILY}`
    g.fillText('HIGASHI BOOKSTORE', 256, 120)

    g.fillStyle = '#c94a28'
    g.fillRect(30, 180, 452, 65)
    g.fillStyle = '#ffffff'
    g.font = `800 28px ${JP_FONT_FAMILY}`
    g.fillText('★ 今週のコミック新刊 入荷！ ★', 256, 224)

    g.fillStyle = '#261b16'
    g.font = `700 24px ${JP_FONT_FAMILY}`
    g.fillText('話題の直木賞・芥川賞 受賞作', 256, 300)
    g.fillText('週刊・月刊 雑誌最新号 発売中', 256, 350)
    g.fillText('文庫・新書・文具・万年筆', 256, 400)

    g.fillStyle = '#542617'
    g.fillRect(30, 470, 452, 110)
    g.fillStyle = '#ffd8a8'
    g.font = `800 26px ${JP_FONT_FAMILY}`
    g.fillText('図書カード NEXT 取扱店', 256, 515)
    g.fillStyle = '#ffffff'
    g.font = `600 20px ${JP_FONT_FAMILY}`
    g.fillText('全国共通 図書カードご贈答にどうぞ', 256, 555)

    g.fillStyle = '#542617'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('営業時間 10:00 〜 21:00', 256, 640)
    g.fillText('どうぞお気軽にお立ち寄りください', 256, 685)

  } else {
    // Cafe chalkboard A-frame board
    g.fillStyle = '#1f1a17'
    g.fillRect(0, 0, 512, 768)
    g.strokeStyle = '#6e3c23'
    g.lineWidth = 14
    g.strokeRect(7, 7, 498, 754)

    g.fillStyle = '#4a2b1b'
    g.fillRect(14, 14, 484, 140)

    g.fillStyle = '#ffffff'
    g.font = `900 42px "Hiragino Mincho ProN", serif`
    g.textAlign = 'center'
    g.fillText('CAFE MAME 喫茶', 256, 75)
    g.fillStyle = '#e0a96d'
    g.font = `700 20px ${JP_FONT_FAMILY}`
    g.fillText('SPECIALTY COFFEE ROASTERY', 256, 120)

    g.fillStyle = '#ffd875'
    g.font = `800 28px ${JP_FONT_FAMILY}`
    g.fillText('〜 TODAY’S DRIP 〜', 256, 195)

    g.fillStyle = '#ffffff'
    g.font = `700 23px ${JP_FONT_FAMILY}`
    g.fillText('Ethiopia Yirgacheffe G1', 256, 245)
    g.fillStyle = '#d4a36a'
    g.font = `500 18px ${JP_FONT_FAMILY}`
    g.fillText('フローラルな香りと華やかな柑橘の酸味', 256, 278)

    g.fillStyle = '#ffffff'
    g.font = `700 22px ${JP_FONT_FAMILY}`
    g.fillText('自家製バスクチーズケーキ  ¥500', 256, 340)
    g.fillText('クラシックカスタードプリン  ¥450', 256, 385)

    g.fillStyle = '#4a2b1b'
    g.fillRect(30, 450, 452, 100)
    g.fillStyle = '#ffd875'
    g.font = `800 26px ${JP_FONT_FAMILY}`
    g.fillText('自家焙煎 珈琲豆販売', 256, 492)
    g.fillStyle = '#ffffff'
    g.font = `600 18px ${JP_FONT_FAMILY}`
    g.fillText('お好みに合わせてお挽きいたします', 256, 528)

    g.fillStyle = '#e0a96d'
    g.font = `700 24px ${JP_FONT_FAMILY}`
    g.fillText('テイクアウト OK！', 256, 610)
    g.fillStyle = '#ffffff'
    g.font = `600 20px ${JP_FONT_FAMILY}`
    g.fillText('OPEN 8:30 〜 19:30', 256, 660)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 14. RESIDENTIAL ENTRANCE / AUTO-LOCK FOYER TEXTURE
export function residentialEntranceTexture(): THREE.CanvasTexture {
  const key = 'storefront-residential-foyer'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Polished dark granite / slate foyer background
  g.fillStyle = '#1c2026'
  g.fillRect(0, 0, 512, 512)

  // Stainless steel panel border
  g.strokeStyle = '#434b57'
  g.lineWidth = 4
  g.strokeRect(10, 10, 492, 492)

  // Title plaque
  g.fillStyle = '#2a313d'
  g.fillRect(30, 30, 452, 70)
  g.fillStyle = '#d4dbe6'
  g.font = `700 26px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('RESIDENCE ENTRANCE', 256, 65)
  g.font = `500 16px ${JP_FONT_FAMILY}`
  g.fillText('居住者専用 ・ オートロックシステム', 256, 88)

  // Japanese Intercom / Auto-lock Keypad unit (集合玄関機)
  g.fillStyle = '#10141a'
  g.beginPath()
  g.roundRect(136, 130, 240, 320, 10)
  g.fill()
  g.strokeStyle = '#5a6575'
  g.lineWidth = 3
  g.stroke()

  // Camera lens
  g.fillStyle = '#06090c'
  g.beginPath()
  g.arc(256, 175, 24, 0, Math.PI * 2)
  g.fill()
  g.strokeStyle = '#404c5c'
  g.stroke()
  g.fillStyle = '#3a86ff'
  g.beginPath()
  g.arc(256, 175, 8, 0, Math.PI * 2)
  g.fill()

  // Small digital LCD screen
  g.fillStyle = '#1d3328'
  g.fillRect(176, 215, 160, 40)
  g.fillStyle = '#4ade80'
  g.font = `700 16px monospace`
  g.textAlign = 'center'
  g.fillText('ROOM No. _ _ _', 256, 240)

  // 10-key numpad
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '消', '0', '呼']
  keys.forEach((k, idx) => {
    const col = idx % 3
    const row = Math.floor(idx / 3)
    const kx = 180 + col * 52
    const ky = 275 + row * 40
    g.fillStyle = k === '呼' ? '#2563eb' : k === '消' ? '#dc2626' : '#2b3340'
    g.beginPath()
    g.roundRect(kx, ky, 44, 32, 4)
    g.fill()

    g.fillStyle = '#ffffff'
    g.font = `700 15px ${JP_FONT_FAMILY}`
    g.fillText(k, kx + 22, ky + 21)
  })

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 15. JAPANESE MANDARIN ORANGE CARDBOARD BOX (愛媛みかん箱)
export function mikanBoxTexture(): THREE.CanvasTexture {
  const key = 'cardboard-mikan-box'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Kraft corrugated cardboard base color
  g.fillStyle = '#c79862'
  g.fillRect(0, 0, 512, 512)

  // Cardboard fibrous grain
  const imgData = g.getImageData(0, 0, 512, 512)
  const d = imgData.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 14
    d[i] = Math.min(255, Math.max(0, d[i] + n))
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n))
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n))
  }
  g.putImageData(imgData, 0, 0)

  // Cardboard tape crease along top flap
  g.fillStyle = '#b3834e'
  g.fillRect(0, 0, 512, 28)
  g.fillStyle = 'rgba(0, 0, 0, 0.15)'
  g.fillRect(0, 26, 512, 2)

  // Mandarin Orange Logo (Orange fruit + 2 green leaves)
  g.fillStyle = '#f97316'
  g.beginPath()
  g.arc(120, 160, 56, 0, Math.PI * 2)
  g.fill()

  // Leaves
  g.fillStyle = '#15803d'
  g.beginPath()
  g.ellipse(120, 96, 26, 12, Math.PI / 4, 0, Math.PI * 2)
  g.ellipse(135, 98, 22, 10, -Math.PI / 4, 0, Math.PI * 2)
  g.fill()

  // Main Japanese title
  g.fillStyle = '#1e140a'
  g.font = `900 52px "Hiragino Mincho ProN", "Yu Mincho", serif`
  g.textAlign = 'left'
  g.fillText('愛媛みかん', 195, 145)

  g.fillStyle = '#85200c'
  g.font = `800 22px ${JP_FONT_FAMILY}`
  g.fillText('極上特選  完熟太陽のめぐみ', 198, 185)

  g.fillStyle = '#2b1b0d'
  g.font = `700 18px monospace`
  g.fillText('EHIME MIKAN  L SIZE  10KG', 198, 215)

  // Red circular inspection quality stamp
  g.strokeStyle = '#c2291d'
  g.lineWidth = 3
  g.beginPath()
  g.arc(80, 310, 38, 0, Math.PI * 2)
  g.stroke()
  g.fillStyle = '#c2291d'
  g.font = `800 20px serif`
  g.textAlign = 'center'
  g.fillText('特選', 80, 305)
  g.font = `700 13px serif`
  g.fillText('農協保証', 80, 325)

  // Handle with care arrows and umbrella
  g.fillStyle = '#1f1309'
  g.textAlign = 'left'
  g.font = `800 32px monospace`
  g.fillText('↑↑', 150, 320)
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.fillText('取扱注意  水濡厳禁', 205, 315)

  // Barcode
  g.fillStyle = '#1e140a'
  const bcX = 350
  for (let x = bcX; x < bcX + 120; x += 4) {
    if (Math.sin(x * 9) > -0.2) {
      g.fillRect(x, 280, 2.5, 45)
    }
  }
  g.font = `600 10px monospace`
  g.fillText('4 901234 567890', bcX, 338)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 16. TOKYO RESIDENTIAL TRASH NOTICE SIGNBOARD (ごみ集積所 案内看板)
export function tokyoTrashNoticeTexture(): THREE.CanvasTexture {
  const key = 'tokyo-trash-notice-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Clean white weatherproof aluminum sign
  g.fillStyle = '#ffffff'
  g.fillRect(0, 0, 512, 512)

  // Outer border
  g.strokeStyle = '#15803d'
  g.lineWidth = 10
  g.strokeRect(5, 5, 502, 502)

  // Green header banner
  g.fillStyle = '#15803d'
  g.fillRect(10, 10, 492, 100)

  g.fillStyle = '#ffffff'
  g.font = `900 38px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('家庭ごみ集積所', 256, 58)
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.fillText('RESIDENTIAL WASTE COLLECTION POINT', 256, 92)

  // Waste Schedule Table
  const rows = [
    { type: '燃やすごみ', days: '毎週  月・木曜日', color: '#dc2626' },
    { type: '燃やさないごみ', days: '第２・第４水曜日', color: '#2563eb' },
    { type: '資源ごみ (缶・瓶・PET)', days: '毎週  火曜日', color: '#16a34a' },
  ]

  rows.forEach((r, i) => {
    const y = 135 + i * 62
    // Badge
    g.fillStyle = r.color
    g.beginPath()
    g.roundRect(30, y, 165, 48, 6)
    g.fill()

    g.fillStyle = '#ffffff'
    g.font = `800 17px ${JP_FONT_FAMILY}`
    g.textAlign = 'center'
    g.fillText(r.type, 112, y + 30)

    // Day
    g.fillStyle = '#1e293b'
    g.font = `800 24px ${JP_FONT_FAMILY}`
    g.textAlign = 'left'
    g.fillText(r.days, 215, y + 34)

    // Divider line
    g.strokeStyle = '#e2e8f0'
    g.lineWidth = 1.5
    g.beginPath()
    g.moveTo(30, y + 55)
    g.lineTo(482, y + 55)
    g.stroke()
  })

  // Rules Box
  g.fillStyle = '#fefce8'
  g.strokeStyle = '#eab308'
  g.lineWidth = 2
  g.beginPath()
  g.roundRect(30, 330, 452, 125, 8)
  g.fill()
  g.stroke()

  g.fillStyle = '#854d0e'
  g.font = `800 18px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('【 ごみ出しのルールとマナー 】', 45, 358)

  g.fillStyle = '#334155'
  g.font = `600 15px ${JP_FONT_FAMILY}`
  g.fillText('● ごみは収集日当日の朝8時までに出してください。', 45, 388)
  g.fillText('● カラス被害防止のため、ネットは隙間なく掛けてください。', 45, 414)
  g.fillText('● 粗大ごみ・家電リサイクル品は集積所に出せません。', 45, 440)

  // Municipal footer
  g.fillStyle = '#64748b'
  g.font = `700 14px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('東京都 清掃環境事務所  /  町内自治会', 256, 485)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 17. RECYCLING CAN / BOTTLE RECEPTACLE TEXTURE (自販機横 空き缶回収BOX)
export function canRecycleBoxTexture(): THREE.CanvasTexture {
  const key = 'can-recycle-box-texture'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Deep recycling blue background
  g.fillStyle = '#1d4ed8'
  g.fillRect(0, 0, 512, 512)

  // Border
  g.strokeStyle = '#ffffff'
  g.lineWidth = 6
  g.strokeRect(12, 12, 488, 488)

  // Title
  g.fillStyle = '#ffffff'
  g.font = `900 42px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('空き缶 ・ ペットボトル', 256, 85)

  g.fillStyle = '#bfdbfe'
  g.font = `700 20px ${JP_FONT_FAMILY}`
  g.fillText('CANS & PLASTIC BOTTLES ONLY', 256, 125)

  // Recycling mobius loop icon
  g.strokeStyle = '#22c55e'
  g.lineWidth = 14
  g.beginPath()
  g.arc(256, 235, 65, 0, Math.PI * 2)
  g.stroke()

  g.fillStyle = '#ffffff'
  g.font = `900 36px ${JP_FONT_FAMILY}`
  g.fillText('リサイクル', 256, 246)

  // Dual drop hole graphics
  g.fillStyle = '#0f172a'
  g.beginPath()
  g.arc(140, 360, 48, 0, Math.PI * 2)
  g.arc(372, 360, 48, 0, Math.PI * 2)
  g.fill()

  g.fillStyle = '#ffffff'
  g.font = `800 26px ${JP_FONT_FAMILY}`
  g.fillText('缶', 140, 368)
  g.fillText('ボトル', 372, 368)

  // Bottom warning
  g.fillStyle = '#fef08a'
  g.font = `700 16px ${JP_FONT_FAMILY}`
  g.fillText('※ タバコ・一般ゴミの投げ入れ厳禁', 256, 455)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  textureCache.set(key, tex)
  return tex
}

// 18. FINE GREEN CROW-PROTECTION NET TEXTURE (カラスよけネット)
export function crowNetTexture(): THREE.CanvasTexture {
  const key = 'crow-net-fine-texture'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Semi-transparent fine green mesh
  g.fillStyle = 'rgba(14, 76, 52, 0.45)'
  g.fillRect(0, 0, 256, 256)

  // Diamond weave lines
  g.strokeStyle = '#10b981'
  g.lineWidth = 2.5

  const step = 16
  for (let x = -256; x < 512; x += step) {
    g.beginPath()
    g.moveTo(x, 0)
    g.lineTo(x + 256, 256)
    g.stroke()

    g.beginPath()
    g.moveTo(x, 256)
    g.lineTo(x + 256, 0)
    g.stroke()
  }

  // Border reinforced rope edge
  g.strokeStyle = '#047857'
  g.lineWidth = 8
  g.strokeRect(0, 0, 256, 256)

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 4)
  textureCache.set(key, tex)
  return tex
}




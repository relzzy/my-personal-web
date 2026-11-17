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

function createParkGroundTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!

  // Warm fine gravel & earthen clay base (真砂土)
  ctx.fillStyle = '#2c271f'
  ctx.fillRect(0, 0, 256, 256)

  // Grain noise and micro-pebbles
  const imgData = ctx.getImageData(0, 0, 256, 256)
  const d = imgData.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 22
    d[i] = Math.max(25, Math.min(65, d[i] + n))
    d[i + 1] = Math.max(22, Math.min(58, d[i + 1] + n * 0.9))
    d[i + 2] = Math.max(16, Math.min(48, d[i + 2] + n * 0.75))
  }
  ctx.putImageData(imgData, 0, 0)

  // Subtle scattered small stones / gravel flecks
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 256
    const r = 0.8 + Math.random() * 1.6
    ctx.fillStyle = Math.random() > 0.4 ? 'rgba(78, 70, 58, 0.6)' : 'rgba(28, 24, 18, 0.7)'
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(10, 10)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function createParkPaverTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#1c1b18'
  ctx.fillRect(0, 0, 256, 256)

  // Interlocking paving bricks (runner bond)
  const rows = 8
  const h = 256 / rows
  const w = 64
  ctx.strokeStyle = '#141310'
  ctx.lineWidth = 2

  for (let r = 0; r < rows; r++) {
    const y = r * h
    const offset = (r % 2) * (w / 2)
    for (let x = -w; x < 256 + w; x += w) {
      const bx = x + offset
      const shade = Math.floor((Math.random() - 0.5) * 16)
      ctx.fillStyle = `rgb(${54 + shade}, ${50 + shade}, ${44 + shade})`
      ctx.fillRect(bx + 1, y + 1, w - 2, h - 2)
      ctx.strokeRect(bx, y, w, h)
    }
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(4, 4)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

const parkGroundTex = createParkGroundTexture()
const parkPaverTex = createParkPaverTexture()

export const parkMat = new THREE.MeshStandardMaterial({
  map: parkGroundTex,
  color: 0xc4bcaf,
  roughness: 0.94,
  metalness: 0.02,
})

export const pathMat = new THREE.MeshStandardMaterial({
  map: parkPaverTex,
  color: 0xcdc5b9,
  roughness: 0.88,
  metalness: 0.04,
})

export const parkGrassMat = new THREE.MeshStandardMaterial({
  color: 0x1d3621,
  roughness: 0.92,
  metalness: 0.01,
})

export const hedgeMat = new THREE.MeshStandardMaterial({
  color: 0x162f1a,
  roughness: 0.95,
  metalness: 0.0,
})

export const pineLeavesMat = new THREE.MeshStandardMaterial({
  color: 0x132717,
  roughness: 0.95,
  metalness: 0.0,
})

export const flowerMatPink = new THREE.MeshStandardMaterial({
  color: 0xe86e96,
  roughness: 0.72,
  metalness: 0.0,
})

export const flowerMatWhite = new THREE.MeshStandardMaterial({
  color: 0xf5f3ee,
  roughness: 0.72,
  metalness: 0.0,
})

export const flowerMatPurple = new THREE.MeshStandardMaterial({
  color: 0x8a62c4,
  roughness: 0.72,
  metalness: 0.0,
})

// Playground equipment materials
export const swingTealMat = new THREE.MeshStandardMaterial({
  color: 0x1da594,
  roughness: 0.35,
  metalness: 0.35,
})

export const swingYellowMat = new THREE.MeshStandardMaterial({
  color: 0xe5b824,
  roughness: 0.32,
  metalness: 0.25,
})

export const swingRedMat = new THREE.MeshStandardMaterial({
  color: 0xd63426,
  roughness: 0.35,
  metalness: 0.25,
})

export const rubberSeatMat = new THREE.MeshStandardMaterial({
  color: 0x1c1e22,
  roughness: 0.95,
  metalness: 0.04,
})

export const slideChuteMat = new THREE.MeshStandardMaterial({
  color: 0xd8dee9,
  roughness: 0.16,
  metalness: 0.88,
})

export const sandboxWoodMat = new THREE.MeshStandardMaterial({
  color: 0x543c26,
  roughness: 0.88,
  metalness: 0.02,
})

export const sandMat = new THREE.MeshStandardMaterial({
  color: 0x9e8c6c,
  roughness: 0.96,
  metalness: 0.01,
})

export const springMat = new THREE.MeshStandardMaterial({
  color: 0x2e333a,
  roughness: 0.3,
  metalness: 0.85,
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

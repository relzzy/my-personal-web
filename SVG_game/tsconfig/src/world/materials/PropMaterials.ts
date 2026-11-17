import * as THREE from 'three'
import { textureCache, JP_FONT_FAMILY } from './TextureCache'

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

export function signMaterial(
  text: string,
  bg: string,
  fg: string,
  sub?: string,
  w = 512,
  h = 160,
): THREE.MeshBasicMaterial {
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

export function corridorRefuseChuteTexture(): THREE.CanvasTexture {
  const key = 'corridor-refuse-chute'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 320
  const g = canvas.getContext('2d')!

  // Brushed steel background
  g.fillStyle = '#64748b'
  g.fillRect(0, 0, 256, 320)

  // Stainless grain lines
  g.fillStyle = '#475569'
  for (let y = 10; y < 310; y += 6) {
    g.fillRect(10, y, 236, 2)
  }

  // Label banner
  g.fillStyle = '#0f172a'
  g.fillRect(20, 30, 216, 48)
  g.fillStyle = '#94a3b8'
  g.font = 'bold 20px sans-serif'
  g.textAlign = 'center'
  g.fillText('REFUSE CHUTE', 128, 62)

  // Pull handle
  g.fillStyle = '#1e293b'
  g.fillRect(60, 130, 136, 24)
  g.strokeStyle = '#cbd5e1'
  g.lineWidth = 3
  g.strokeRect(60, 130, 136, 24)

  // Green status LED
  g.fillStyle = '#22c55e'
  g.beginPath()
  g.arc(128, 220, 12, 0, Math.PI * 2)
  g.fill()

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

import * as THREE from 'three'
import { textureCache, JP_FONT_FAMILY } from './TextureCache'

// 19. PARK ENTRANCE STONE NAMEPLATE (公園入口銘板)
export function parkNameplateTexture(): THREE.CanvasTexture {
  const key = 'park-nameplate-stone'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const g = canvas.getContext('2d')!

  // Polished granite background
  g.fillStyle = '#22252a'
  g.fillRect(0, 0, 256, 128)

  // Subtle granite fleck texture
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 128
    g.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.25)'
    g.fillRect(x, y, 2, 2)
  }

  // Bronze / gold border
  g.strokeStyle = '#c5a059'
  g.lineWidth = 4
  g.strokeRect(8, 8, 240, 112)
  g.strokeStyle = '#8c6f36'
  g.lineWidth = 1.5
  g.strokeRect(14, 14, 228, 100)

  // Inscribed Kanji: 桜町児童遊園
  g.fillStyle = '#f0d8a0'
  g.font = `900 28px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText('桜町児童遊園', 128, 52)

  // Romanized subtitle: SAKURA POCKET PARK
  g.fillStyle = '#c5a059'
  g.font = '600 12px monospace'
  g.fillText('SAKURA POCKET PARK', 128, 86)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

// 20. TOKYO MUNICIPAL PARK RULES SIGNBOARD (利用案内板)
export function parkRulesBoardTexture(): THREE.CanvasTexture {
  const key = 'park-rules-board'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 320
  const g = canvas.getContext('2d')!

  // White baked enamel metal board
  g.fillStyle = '#eaedf1'
  g.fillRect(0, 0, 512, 320)

  // Dark green municipal header
  g.fillStyle = '#105238'
  g.fillRect(0, 0, 512, 64)

  // Municipal emblem circle
  g.strokeStyle = '#ffffff'
  g.lineWidth = 3
  g.beginPath()
  g.arc(42, 32, 18, 0, Math.PI * 2)
  g.stroke()

  // Header Title
  g.fillStyle = '#ffffff'
  g.font = `800 24px ${JP_FONT_FAMILY}`
  g.textAlign = 'left'
  g.fillText('公園の利用案内', 72, 36)

  g.font = '600 13px sans-serif'
  g.fillText('PARK REGULATIONS & MANNER', 72, 54)

  // Rule items with icon badges
  const rules = [
    { kanji: 'ゴミは持ち帰りましょう', sub: 'Please take your litter home with you', icon: '🗑️' },
    { kanji: 'たき火・花火など火気厳禁', sub: 'No fireworks or open flames permitted', icon: '🔥' },
    { kanji: '犬の散歩はリード着用・フン始末', sub: 'Keep dogs on leash and clean up after pets', icon: '🐕' },
    { kanji: '夜間はお静かに願いします', sub: 'Please be considerate and quiet at night', icon: '🌙' },
  ]

  let y = 100
  for (const r of rules) {
    // Bullet badge
    g.fillStyle = '#105238'
    g.beginPath()
    g.arc(36, y - 6, 12, 0, Math.PI * 2)
    g.fill()

    g.fillStyle = '#ffffff'
    g.font = 'bold 12px sans-serif'
    g.textAlign = 'center'
    g.fillText('!', 36, y - 2)

    // Japanese rule
    g.fillStyle = '#1a202c'
    g.font = `700 18px ${JP_FONT_FAMILY}`
    g.textAlign = 'left'
    g.fillText(r.kanji, 60, y - 4)

    // English sub
    g.fillStyle = '#4a5568'
    g.font = '500 12px sans-serif'
    g.fillText(r.sub, 60, y + 14)

    // Subtle divider
    g.fillStyle = 'rgba(0,0,0,0.08)'
    g.fillRect(20, y + 24, 472, 1)

    y += 50
  }

  // Footer: Minato Ward Office
  g.fillStyle = '#718096'
  g.font = `600 12px ${JP_FONT_FAMILY}`
  g.textAlign = 'right'
  g.fillText('東京都港区土木部公園緑地課　TEL 03-3578-2111', 492, 305)

  // Border frame
  g.strokeStyle = '#2d3748'
  g.lineWidth = 6
  g.strokeRect(0, 0, 512, 320)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

// 21. COMMUNITY BULLETIN BOARD (町内会掲示板)
export function parkNoticeBoardTexture(): THREE.CanvasTexture {
  const key = 'park-community-notice'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 300
  const g = canvas.getContext('2d')!

  // Natural cork board background
  g.fillStyle = '#9b764d'
  g.fillRect(0, 0, 512, 300)

  // Cork noise
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * 512
    const y = Math.random() * 300
    g.fillStyle = Math.random() > 0.5 ? 'rgba(74, 50, 26, 0.2)' : 'rgba(180, 145, 100, 0.25)'
    g.fillRect(x, y, 3, 3)
  }

  // Poster 1: Spring Cherry Blossom Matsuri (Pink Flyer)
  g.fillStyle = '#fce7f3'
  g.fillRect(24, 25, 140, 190)
  g.strokeStyle = '#f472b6'
  g.lineWidth = 2
  g.strokeRect(24, 25, 140, 190)

  g.fillStyle = '#db2777'
  g.font = `800 16px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('桜まつり', 94, 58)
  g.font = `600 10px ${JP_FONT_FAMILY}`
  g.fillText('春の夜桜ライトアップ', 94, 78)
  g.fillStyle = '#4a044e'
  g.font = `500 9px ${JP_FONT_FAMILY}`
  g.fillText('日時: 4月上旬 18:00~', 94, 110)
  g.fillText('場所: 桜町児童遊園', 94, 130)
  g.fillText('主催: 桜町自治会', 94, 150)
  g.fillStyle = '#f43f5e'
  g.fillText('🌸🏮🌸', 94, 185)

  // Pushpin for poster 1
  g.fillStyle = '#ef4444'
  g.beginPath()
  g.arc(94, 28, 4, 0, Math.PI * 2)
  g.fill()

  // Poster 2: Disaster Evacuation Assembly Point (Yellow Flyer)
  g.fillStyle = '#fef9c3'
  g.fillRect(184, 25, 140, 190)
  g.strokeStyle = '#eab308'
  g.lineWidth = 2
  g.strokeRect(184, 25, 140, 190)

  g.fillStyle = '#854d0e'
  g.font = `800 15px ${JP_FONT_FAMILY}`
  g.fillText('広域避難場所', 254, 58)
  g.font = `600 10px ${JP_FONT_FAMILY}`
  g.fillText('防災・安全マップ', 254, 78)
  g.fillStyle = '#1c1917'
  g.font = `500 9px ${JP_FONT_FAMILY}`
  g.fillText('一時集合場所:', 254, 108)
  g.fillText('当公園グラウンド', 254, 126)
  g.fillText('AED設置: 管理所横', 254, 146)
  g.fillText('給水拠点指定場所', 254, 166)
  g.fillStyle = '#eab308'
  g.fillText('🔰 非常口 ⛑️', 254, 192)

  // Pushpin for poster 2
  g.fillStyle = '#3b82f6'
  g.beginPath()
  g.arc(254, 28, 4, 0, Math.PI * 2)
  g.fill()

  // Poster 3: Lost Calico Cat Notice (White paper with drawing)
  g.fillStyle = '#ffffff'
  g.fillRect(344, 25, 144, 190)
  g.strokeStyle = '#94a3b8'
  g.lineWidth = 1.5
  g.strokeRect(344, 25, 144, 190)

  g.fillStyle = '#dc2626'
  g.font = `800 15px ${JP_FONT_FAMILY}`
  g.fillText('迷子ねこ', 416, 54)
  g.font = `600 10px ${JP_FONT_FAMILY}`
  g.fillStyle = '#334155'
  g.fillText('探しています！', 416, 72)

  // Cat silhouette / face drawing
  g.fillStyle = '#1e293b'
  g.beginPath()
  g.arc(416, 110, 18, 0, Math.PI * 2)
  g.fill()
  // Ears
  g.beginPath()
  g.moveTo(402, 98)
  g.lineTo(396, 82)
  g.lineTo(410, 93)
  g.fill()
  g.beginPath()
  g.moveTo(430, 98)
  g.lineTo(436, 82)
  g.lineTo(422, 93)
  g.fill()
  // Collar
  g.fillStyle = '#ef4444'
  g.fillRect(408, 124, 16, 4)

  g.fillStyle = '#475569'
  g.font = `500 9px ${JP_FONT_FAMILY}`
  g.fillText('名前: ミケ (黒多め)', 416, 146)
  g.fillText('赤い首輪・鈴付き', 416, 162)
  g.fillText('見かけた方はご連絡を', 416, 178)

  // Pushpin for poster 3
  g.fillStyle = '#10b981'
  g.beginPath()
  g.arc(416, 28, 4, 0, Math.PI * 2)
  g.fill()

  // Header wooden plaque
  g.fillStyle = '#3b2716'
  g.fillRect(0, 0, 512, 18)
  g.fillStyle = '#fef08a'
  g.font = `800 12px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('桜町町内会　広報掲示板', 256, 14)

  // Aluminum weatherized frame
  g.strokeStyle = '#475569'
  g.lineWidth = 8
  g.strokeRect(0, 0, 512, 300)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

// 22. PARK ANALOG CLOCK FACE (公園時計塔)
export function parkClockTexture(): THREE.CanvasTexture {
  const key = 'park-analog-clock-face'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const g = canvas.getContext('2d')!

  // Clock dial background (off-white / cream, gently illuminated)
  g.fillStyle = '#faf8f2'
  g.fillRect(0, 0, 256, 256)

  // Outer dark rim
  g.strokeStyle = '#1e242b'
  g.lineWidth = 8
  g.beginPath()
  g.arc(128, 128, 120, 0, Math.PI * 2)
  g.stroke()

  // Inner track
  g.strokeStyle = '#64748b'
  g.lineWidth = 1.5
  g.beginPath()
  g.arc(128, 128, 114, 0, Math.PI * 2)
  g.stroke()

  // Hour and minute tick marks
  for (let i = 0; i < 60; i++) {
    const angle = (i * Math.PI) / 30
    const isHour = i % 5 === 0
    const len = isHour ? 14 : 6
    const r1 = 114
    const r2 = r1 - len
    g.strokeStyle = isHour ? '#0f172a' : '#94a3b8'
    g.lineWidth = isHour ? 3.5 : 1.5
    g.beginPath()
    g.moveTo(128 + Math.cos(angle) * r1, 128 + Math.sin(angle) * r1)
    g.lineTo(128 + Math.cos(angle) * r2, 128 + Math.sin(angle) * r2)
    g.stroke()
  }

  // Hour numbers 1 to 12
  g.fillStyle = '#0f172a'
  g.font = 'bold 22px "Plus Jakarta Sans", sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  for (let num = 1; num <= 12; num++) {
    const angle = (num * Math.PI) / 6 - Math.PI / 2
    const r = 86
    g.fillText(num.toString(), 128 + Math.cos(angle) * r, 128 + Math.sin(angle) * r)
  }

  // Brand / city mark
  g.fillStyle = '#64748b'
  g.font = '600 9px monospace'
  g.fillText('TOKYO PARKS', 128, 160)

  // Clock hands: pointing to 11:50 PM
  // Hour hand: 11:50 is roughly 355 degrees
  const hAngle = ((11 + 50 / 60) * Math.PI) / 6 - Math.PI / 2
  g.strokeStyle = '#0f172a'
  g.lineWidth = 5
  g.lineCap = 'round'
  g.beginPath()
  g.moveTo(128, 128)
  g.lineTo(128 + Math.cos(hAngle) * 52, 128 + Math.sin(hAngle) * 52)
  g.stroke()

  // Minute hand: 50 minutes is 300 degrees
  const mAngle = (50 * Math.PI) / 30 - Math.PI / 2
  g.lineWidth = 3.5
  g.beginPath()
  g.moveTo(128, 128)
  g.lineTo(128 + Math.cos(mAngle) * 78, 128 + Math.sin(mAngle) * 78)
  g.stroke()

  // Red second hand
  const sAngle = (22 * Math.PI) / 30 - Math.PI / 2
  g.strokeStyle = '#dc2626'
  g.lineWidth = 1.5
  g.beginPath()
  g.moveTo(128 - Math.cos(sAngle) * 16, 128 - Math.sin(sAngle) * 16)
  g.lineTo(128 + Math.cos(sAngle) * 88, 128 + Math.sin(sAngle) * 88)
  g.stroke()

  // Center cap
  g.fillStyle = '#0f172a'
  g.beginPath()
  g.arc(128, 128, 6, 0, Math.PI * 2)
  g.fill()

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

// 23. PARK PUBLIC RESTROOM PICTOGRAM SIGN (公衆トイレ表示)
export function parkToiletSignTexture(): THREE.CanvasTexture {
  const key = 'park-toilet-sign-picto'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const g = canvas.getContext('2d')!

  // Clean stainless steel / white acrylic plaque
  g.fillStyle = '#ffffff'
  g.fillRect(0, 0, 256, 128)

  // Border
  g.strokeStyle = '#cbd5e1'
  g.lineWidth = 3
  g.strokeRect(4, 4, 248, 120)

  // Gents (Blue)
  g.fillStyle = '#0284c7'
  g.beginPath()
  g.arc(56, 36, 10, 0, Math.PI * 2) // head
  g.fill()
  g.fillRect(46, 50, 20, 28) // torso
  g.fillRect(48, 80, 7, 24) // leg L
  g.fillRect(57, 80, 7, 24) // leg R

  // Ladies (Red/Magenta)
  g.fillStyle = '#e11d48'
  g.beginPath()
  g.arc(128, 36, 10, 0, Math.PI * 2) // head
  g.fill()
  g.beginPath() // skirt/torso
  g.moveTo(128, 50)
  g.lineTo(142, 78)
  g.lineTo(114, 78)
  g.closePath()
  g.fill()
  g.fillRect(121, 80, 6, 24)
  g.fillRect(129, 80, 6, 24)

  // Accessible / Universal (Green)
  g.fillStyle = '#16a34a'
  g.beginPath()
  g.arc(200, 36, 10, 0, Math.PI * 2)
  g.fill()
  // Wheelchair wheel
  g.strokeStyle = '#16a34a'
  g.lineWidth = 4
  g.beginPath()
  g.arc(196, 76, 14, 0, Math.PI * 2)
  g.stroke()
  g.fillRect(194, 52, 6, 22)
  g.fillRect(194, 66, 16, 5)

  // Label
  g.fillStyle = '#334155'
  g.font = `bold 12px ${JP_FONT_FAMILY}`
  g.textAlign = 'center'
  g.fillText('公衆トイレ  TOILETS', 128, 118)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

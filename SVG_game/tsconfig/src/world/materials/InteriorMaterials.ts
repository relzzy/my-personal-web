import * as THREE from 'three'
import { textureCache } from './TextureCache'

// =========================================================================
// 1. APARTMENT LOBBY TEXTURES
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
          2,
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
    { x: 16, y: 68, w: 132, h: 64, label: 'BOX 01', inUse: false },
    { x: 16, y: 140, w: 132, h: 64, label: 'BOX 02', inUse: true },
    { x: 16, y: 212, w: 132, h: 64, label: 'BOX 03', inUse: true },
    { x: 364, y: 68, w: 132, h: 96, label: 'BOX 04', inUse: false },
    { x: 364, y: 172, w: 132, h: 104, label: 'BOX 05', inUse: false },
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
// 2. SUITE 402 (EXECUTIVE BEDROOM) PROCEDURAL TEXTURES
// =========================================================================

export function suiteHardwoodFloorTexture(): THREE.CanvasTexture {
  const key = 'suite-hardwood-floor'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Base dark wood tone
  g.fillStyle = '#1c1511'
  g.fillRect(0, 0, 512, 512)

  // Draw 8 horizontal planks
  const plankH = 64
  const plankColors = ['#1d1612', '#221a15', '#1a130f', '#251c17', '#1f1713', '#241b16', '#1b1410', '#231b15']

  for (let i = 0; i < 8; i++) {
    const y = i * plankH
    g.fillStyle = plankColors[i % plankColors.length]
    g.fillRect(0, y + 2, 512, plankH - 4)

    // Wood grain lines
    g.strokeStyle = 'rgba(0, 0, 0, 0.28)'
    g.lineWidth = 1.2
    for (let k = 0; k < 6; k++) {
      const lineY = y + 8 + k * 8 + Math.sin(k * 2) * 3
      g.beginPath()
      g.moveTo(0, lineY)
      g.bezierCurveTo(128, lineY + (k % 2 === 0 ? 3 : -3), 384, lineY + (k % 2 === 0 ? -3 : 3), 512, lineY)
      g.stroke()
    }

    // Wood highlight sheen
    g.strokeStyle = 'rgba(212, 175, 55, 0.04)'
    g.lineWidth = 1
    g.beginPath()
    g.moveTo(0, y + 4)
    g.lineTo(512, y + 4)
    g.stroke()

    // Plank seam shadow
    g.fillStyle = '#0e0a07'
    g.fillRect(0, y + plankH - 2, 512, 2)
  }

  // Staggered vertical end joints
  const joints = [
    { x: 140, y: 0 }, { x: 380, y: 0 },
    { x: 260, y: 64 },
    { x: 120, y: 128 }, { x: 420, y: 128 },
    { x: 310, y: 192 },
    { x: 180, y: 256 }, { x: 440, y: 256 },
    { x: 280, y: 320 },
    { x: 160, y: 384 }, { x: 390, y: 384 },
    { x: 240, y: 448 },
  ]
  g.fillStyle = '#0e0a07'
  for (const j of joints) {
    g.fillRect(j.x, j.y + 2, 2, plankH - 4)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 3)
  textureCache.set(key, tex)
  return tex
}

export function suiteLuxuryRugTexture(): THREE.CanvasTexture {
  const key = 'suite-luxury-rug'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  const cx = 512
  const cy = 256

  // Transparent clear canvas
  g.clearRect(0, 0, 1024, 512)

  // 1. Base Navy Woven Oval
  g.save()
  g.beginPath()
  g.ellipse(cx, cy, 480, 235, 0, 0, Math.PI * 2)
  g.fillStyle = '#121722'
  g.fill()

  // Fine woven textile noise
  const imgData = g.getImageData(0, 0, 1024, 512)
  const d = imgData.data
  for (let y = 30; y < 482; y += 2) {
    for (let x = 40; x < 984; x += 2) {
      const idx = (y * 1024 + x) * 4
      if (d[idx + 3] > 0) {
        const noise = (Math.random() - 0.5) * 16
        d[idx] = Math.max(10, Math.min(35, d[idx] + noise))
        d[idx + 1] = Math.max(15, Math.min(42, d[idx + 1] + noise))
        d[idx + 2] = Math.max(25, Math.min(58, d[idx + 2] + noise))
      }
    }
  }
  g.putImageData(imgData, 0, 0)
  g.restore()

  // 2. Solid Gold Outer Piping
  g.strokeStyle = '#d4af37'
  g.lineWidth = 10
  g.beginPath()
  g.ellipse(cx, cy, 470, 225, 0, 0, Math.PI * 2)
  g.stroke()

  // 3. Stitched Dashed Gold Oval Ring
  g.strokeStyle = '#d4af37'
  g.lineWidth = 4
  g.setLineDash([20, 12])
  g.beginPath()
  g.ellipse(cx, cy, 390, 175, 0, 0, Math.PI * 2)
  g.stroke()
  g.setLineDash([])

  // 4. Inner Fine Gold Oval Ring
  g.strokeStyle = 'rgba(212, 175, 55, 0.65)'
  g.lineWidth = 2.5
  g.beginPath()
  g.ellipse(cx, cy, 260, 105, 0, 0, Math.PI * 2)
  g.stroke()

  // 5. Classic Center Diamond Emblems
  g.strokeStyle = '#d4af37'
  g.fillStyle = 'rgba(212, 175, 55, 0.12)'
  g.lineWidth = 5
  g.beginPath()
  g.moveTo(cx, cy - 65)
  g.lineTo(cx + 60, cy)
  g.lineTo(cx, cy + 65)
  g.lineTo(cx - 60, cy)
  g.closePath()
  g.fill()
  g.stroke()

  // Inner nested diamond
  g.lineWidth = 2
  g.beginPath()
  g.moveTo(cx, cy - 35)
  g.lineTo(cx + 32, cy)
  g.lineTo(cx, cy + 35)
  g.lineTo(cx - 32, cy)
  g.closePath()
  g.stroke()

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function suiteCurvedMonitorTexture(): THREE.CanvasTexture {
  const key = 'suite-curved-monitor'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Deep IDE background
  g.fillStyle = '#070b12'
  g.fillRect(0, 0, 1024, 512)

  // Glowing cyan bezel border
  g.strokeStyle = '#00ffff'
  g.lineWidth = 3
  g.strokeRect(4, 4, 1016, 504)

  // Title bar
  g.fillStyle = '#0f1724'
  g.fillRect(6, 6, 1012, 42)

  // Window dots
  g.fillStyle = '#ff5f56'
  g.beginPath(); g.arc(26, 27, 7, 0, Math.PI * 2); g.fill()
  g.fillStyle = '#ffbd2e'
  g.beginPath(); g.arc(46, 27, 7, 0, Math.PI * 2); g.fill()
  g.fillStyle = '#27c93f'
  g.beginPath(); g.arc(66, 27, 7, 0, Math.PI * 2); g.fill()

  // Tab
  g.fillStyle = '#182438'
  g.fillRect(90, 12, 220, 36)
  g.fillStyle = '#00ffff'
  g.font = 'bold 16px monospace'
  g.fillText('Suite402.ts • relzzy', 106, 36)

  // Right System telemetry
  g.fillStyle = '#10b981'
  g.font = '14px monospace'
  g.fillText('SYS: 120 FPS // RTX 3060 ONLINE // LAT: 0.8ms', 600, 32)

  // Left Sidebar
  g.fillStyle = '#0a0f18'
  g.fillRect(6, 48, 140, 458)
  g.fillStyle = '#64748b'
  g.font = '13px monospace'
  const files = ['EXPLORER', '▶ src', '  ▼ world', '    Suite402.ts', '    Audio.ts', '    Props.ts', '  ▶ game', '  ▶ ui', '  package.json']
  files.forEach((f, idx) => {
    g.fillStyle = f.includes('Suite402') ? '#00ffff' : f.startsWith('▶') || f.startsWith('▼') ? '#94a3b8' : '#64748b'
    g.fillText(f, 16, 78 + idx * 24)
  })

  // Code Area
  g.fillStyle = '#070b12'
  g.fillRect(146, 48, 872, 458)

  const codeLines: { num: string; text: string; color: string }[] = [
    { num: '01', text: 'import { Scene, PerspectiveCamera } from "three";', color: '#e2e8f0' },
    { num: '02', text: 'import { Suite402 } from "./world/Suite402";', color: '#38ef7d' },
    { num: '03', text: '', color: '#e2e8f0' },
    { num: '04', text: '// EXECUTIVE SUITE 402 — CYBER WORKSTATION INITIALIZED', color: '#64748b' },
    { num: '05', text: 'export async function launchTokyoNight(): Promise<void> {', color: '#00ffff' },
    { num: '06', text: '  const district = await buildMidnightTokyo({', color: '#f8fafc' },
    { num: '07', text: '    location: "Sun Heights Mansion // Suite 402",', color: '#ffd166' },
    { num: '08', text: '    lighting: "Ultra PBR Dynamic Pool",', color: '#ffd166' },
    { num: '09', text: '    atmosphere: "Cyber Midnight Twilight (東京の夜)",', color: '#ffd166' },
    { num: '10', text: '    fpsTarget: 120, status: "READY"', color: '#38ef7d' },
    { num: '11', text: '  });', color: '#f8fafc' },
    { num: '12', text: '  district.igniteAtmosphere();', color: '#00ffff' },
    { num: '13', text: '  console.log("Welcome home to Tokyo, Relzzy.");', color: '#f472b6' },
    { num: '14', text: '}', color: '#00ffff' },
  ]

  codeLines.forEach((line, idx) => {
    const y = 84 + idx * 26
    g.fillStyle = '#334155'
    g.font = '14px monospace'
    g.fillText(line.num, 160, y)
    g.fillStyle = line.color
    g.font = '15px monospace'
    g.fillText(line.text, 195, y)
  })

  // Pulsing terminal cursor
  g.fillStyle = '#00ffff'
  g.fillRect(360, 84 + 13 * 26 - 13, 10, 16)

  // Bottom Terminal output box
  g.fillStyle = '#04070c'
  g.fillRect(146, 440, 872, 66)
  g.strokeStyle = '#1e293b'
  g.strokeRect(146, 440, 872, 66)
  g.fillStyle = '#10b981'
  g.font = 'bold 13px monospace'
  g.fillText('TERMINAL: build succeeded in 1.10s — 0 errors — All 43 point lights synchronized.', 160, 470)
  g.fillStyle = '#38bdf8'
  g.fillText('relzzy@tokyo-rig:~/project$ █', 160, 492)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function suiteAlarmClockTexture(): THREE.CanvasTexture {
  const key = 'suite-alarm-clock'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const g = canvas.getContext('2d')!

  // Matte dark casing
  g.fillStyle = '#080a0f'
  g.fillRect(0, 0, 256, 128)

  // Inner bevel bezel
  g.strokeStyle = '#1b2230'
  g.lineWidth = 4
  g.strokeRect(8, 8, 240, 112)

  // Dim ghost segments
  g.fillStyle = 'rgba(0, 255, 255, 0.08)'
  g.font = 'bold 64px monospace'
  g.textAlign = 'center'
  g.fillText('88:88', 128, 88)

  // Bright glowing cyan active time
  g.shadowColor = '#00ffff'
  g.shadowBlur = 14
  g.fillStyle = '#00ffff'
  g.font = 'bold 64px monospace'
  g.fillText('11:42', 128, 88)
  g.shadowBlur = 0

  // PM indicator and ALARM indicator
  g.fillStyle = '#00ffff'
  g.font = 'bold 12px monospace'
  g.fillText('PM', 214, 50)
  g.fillStyle = '#10b981'
  g.fillText('● ALARM ON', 128, 112)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function suiteLivingRoomDoorMatTexture(): THREE.CanvasTexture {
  const key = 'suite-living-room-mat'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Dark charcoal luxury threshold base
  g.fillStyle = '#141822'
  g.fillRect(0, 0, 256, 512)

  // Polished brass perimeter frame
  g.strokeStyle = '#d4af37'
  g.lineWidth = 8
  g.strokeRect(8, 8, 240, 496)

  // Inner dashed line
  g.strokeStyle = 'rgba(212, 175, 55, 0.6)'
  g.lineWidth = 3
  g.setLineDash([12, 8])
  g.strokeRect(20, 20, 216, 472)
  g.setLineDash([])

  // Gold indicator dots at top and bottom
  g.fillStyle = '#d4af37'
  g.beginPath(); g.arc(128, 48, 6, 0, Math.PI * 2); g.fill()
  g.beginPath(); g.arc(128, 464, 6, 0, Math.PI * 2); g.fill()

  // Vertical embossed text rotated 90 degrees
  g.save()
  g.translate(128, 256)
  g.rotate(-Math.PI / 2)
  g.fillStyle = '#d4af37'
  g.font = '900 28px sans-serif'
  g.textAlign = 'center'
  g.letterSpacing = '6px'
  g.fillText('LIVING ROOM', 0, 8)
  g.font = 'bold 13px monospace'
  g.fillStyle = 'rgba(212, 175, 55, 0.75)'
  g.fillText('SUITE 402 // TOKYO', 0, 32)
  g.restore()

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

// =========================================================================
// 3. 4F CORRIDOR & ELEVATOR LOUNGE PROCEDURAL TEXTURES
// =========================================================================

export function corridorCarpetRunnerTexture(): THREE.CanvasTexture {
  const key = 'corridor-carpet-runner'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const g = canvas.getContext('2d')!

  // Deep midnight navy base
  g.fillStyle = '#0b111c'
  g.fillRect(0, 0, 1024, 512)

  // Woven carpet fabric noise
  const imgData = g.getImageData(0, 0, 1024, 512)
  const d = imgData.data
  for (let y = 0; y < 512; y += 2) {
    for (let x = 0; x < 1024; x += 2) {
      const idx = (y * 1024 + x) * 4
      const noise = (Math.random() - 0.5) * 14
      d[idx] = Math.max(10, Math.min(32, d[idx] + noise))
      d[idx + 1] = Math.max(14, Math.min(38, d[idx + 1] + noise))
      d[idx + 2] = Math.max(24, Math.min(52, d[idx + 2] + noise))
    }
  }
  g.putImageData(imgData, 0, 0)

  // Double Polished Gold Borders at Top & Bottom (Ribbons)
  // Top ribbons
  g.strokeStyle = '#d4af37'
  g.lineWidth = 8
  g.beginPath()
  g.moveTo(0, 20); g.lineTo(1024, 20)
  g.stroke()

  g.strokeStyle = 'rgba(212, 175, 55, 0.55)'
  g.lineWidth = 3
  g.beginPath()
  g.moveTo(0, 34); g.lineTo(1024, 34)
  g.stroke()

  // Bottom ribbons
  g.strokeStyle = 'rgba(212, 175, 55, 0.55)'
  g.lineWidth = 3
  g.beginPath()
  g.moveTo(0, 478); g.lineTo(1024, 478)
  g.stroke()

  g.strokeStyle = '#d4af37'
  g.lineWidth = 8
  g.beginPath()
  g.moveTo(0, 492); g.lineTo(1024, 492)
  g.stroke()

  // Woven Diamond Lattice Pattern
  g.strokeStyle = 'rgba(212, 175, 55, 0.28)'
  g.lineWidth = 2
  const diamondW = 128
  for (let x = 0; x <= 1024; x += diamondW) {
    // Upper to center
    g.beginPath()
    g.moveTo(x, 40)
    g.lineTo(x + diamondW / 2, 256)
    g.lineTo(x, 472)
    g.stroke()

    // Downward diagonal
    g.beginPath()
    g.moveTo(x + diamondW / 2, 256)
    g.lineTo(x + diamondW, 40)
    g.moveTo(x + diamondW / 2, 256)
    g.lineTo(x + diamondW, 472)
    g.stroke()

    // Center accent diamond
    g.fillStyle = 'rgba(212, 175, 55, 0.12)'
    g.beginPath()
    g.moveTo(x + diamondW / 2, 220)
    g.lineTo(x + diamondW / 2 + 25, 256)
    g.lineTo(x + diamondW / 2, 292)
    g.lineTo(x + diamondW / 2 - 25, 256)
    g.closePath()
    g.fill()
    g.stroke()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  tex.repeat.set(4, 1)
  textureCache.set(key, tex)
  return tex
}

export function corridorElevatorDisplayTexture(type: 'left' | 'right'): THREE.CanvasTexture {
  const key = `corridor-elev-disp-${type}`
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 96
  const g = canvas.getContext('2d')!

  // Black display casing
  g.fillStyle = '#060810'
  g.fillRect(0, 0, 256, 96)

  // Gold border
  g.strokeStyle = '#d4af37'
  g.lineWidth = 4
  g.strokeRect(4, 4, 248, 88)

  // Amber glowing LED readout
  g.shadowColor = '#f59e0b'
  g.shadowBlur = 12
  g.fillStyle = '#f59e0b'
  g.font = 'bold 36px monospace'
  g.textAlign = 'center'

  if (type === 'left') {
    g.fillText('▲ 4', 128, 60)
  } else {
    g.font = 'bold 28px monospace'
    g.fillText('4 - IDLE', 128, 58)
  }

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function corridorFireStairsSignTexture(): THREE.CanvasTexture {
  const key = 'corridor-fire-stairs-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 96
  const g = canvas.getContext('2d')!

  // Emergency exit green background
  g.fillStyle = '#15803d'
  g.fillRect(0, 0, 256, 96)

  // Bright green border
  g.strokeStyle = '#22c55e'
  g.lineWidth = 6
  g.strokeRect(4, 4, 248, 88)

  // Running man icon
  g.fillStyle = '#ffffff'
  g.beginPath()
  g.arc(60, 36, 9, 0, Math.PI * 2)
  g.fill()
  g.fillRect(56, 48, 8, 24)
  g.fillRect(44, 54, 32, 6)

  // Text
  g.font = '900 32px monospace'
  g.fillStyle = '#ffffff'
  g.fillText('STAIRS', 110, 58)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function corridorWayfindingTexture(): THREE.CanvasTexture {
  const key = 'corridor-wayfinding-sign'
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const g = canvas.getContext('2d')!

  // Dark slate plate
  g.fillStyle = '#0f172a'
  g.fillRect(0, 0, 512, 128)

  // Gold border
  g.strokeStyle = '#d4af37'
  g.lineWidth = 4
  g.strokeRect(6, 6, 500, 116)

  // Gold text
  g.fillStyle = '#f1f5f9'
  g.font = 'bold 26px monospace'
  g.textAlign = 'center'
  g.fillText('◄ 401-404 | LIFTS | STAIRS ►', 256, 68)

  // Floor subtext
  g.font = 'bold 14px monospace'
  g.fillStyle = '#d4af37'
  g.fillText('4TH FLOOR RESIDENTIAL WING', 256, 96)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

export function corridorSuitePlaqueTexture(num: string): THREE.CanvasTexture {
  const key = `corridor-suite-plaque-${num}`
  const cached = textureCache.get(key)
  if (cached) return cached

  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 96
  const g = canvas.getContext('2d')!

  // Brushed brass background
  g.fillStyle = '#d4af37'
  g.fillRect(0, 0, 128, 96)

  // Bevel border
  g.strokeStyle = '#854d0e'
  g.lineWidth = 4
  g.strokeRect(3, 3, 122, 90)

  // Engraved suite number
  g.fillStyle = '#000000'
  g.font = '900 44px monospace'
  g.textAlign = 'center'
  g.fillText(num, 64, 64)

  const tex = new THREE.CanvasTexture(canvas)
  textureCache.set(key, tex)
  return tex
}

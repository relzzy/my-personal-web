import { NEIGHBORHOOD_BUILDINGS } from '../world/Layout'
import type { Player } from '../game/Player'

export class Minimap {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private readonly outdoorScale = 3.2 // pixels per world meter outdoors
  private readonly interiorScale = 11.5 // pixels per world meter inside 4F lounge
  private readonly suiteScale = 12.0 // pixels per world meter inside Suite 402
  private lastX = -9999
  private lastZ = -9999
  private lastYaw = -9999
  private lastTime = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvas.width = 256
    this.canvas.height = 256
    this.ctx = canvas.getContext('2d')!
  }

  update(player: Player, force = false): void {
    const now = performance.now()
    // Throttle minimap repaints to max 20 FPS (50ms interval) to save significant CPU cycles
    if (!force && now - this.lastTime < 50) {
      return
    }

    if (
      !force &&
      Math.abs(player.x - this.lastX) < 0.04 &&
      Math.abs(player.z - this.lastZ) < 0.04 &&
      Math.abs(player.yaw - this.lastYaw) < 0.02
    ) {
      return
    }
    this.lastTime = now
    this.lastX = player.x
    this.lastZ = player.z
    this.lastYaw = player.yaw

    const cw = this.canvas.width
    const ch = this.canvas.height
    const cx = cw / 2
    const cy = ch / 2

    // Zone detection
    const isLounge = player.x >= -9.0 && player.x <= 9.0 && player.z >= 58 && player.z <= 73
    const isSuite402 = player.x >= -6.5 && player.x <= 6.5 && player.z >= 76 && player.z <= 93

    if (isLounge) {
      this.drawLoungeMap(player, cw, ch, cx, cy)
    } else if (isSuite402) {
      this.drawSuite402Map(player, cw, ch, cx, cy)
    } else {
      this.drawOutdoorMap(player, cw, ch, cx, cy)
    }

    // Shared: Player marker at center
    this.drawPlayerMarker(player, cx, cy)

    // Shared: North Compass Indicator (Top Right)
    this.drawCompass(cw)
  }

  // =========================================================================
  // 1. DEDICATED 4F ELEVATOR LOUNGE ARCHITECTURAL FLOOR PLAN
  // =========================================================================
  private drawLoungeMap(
    player: Player,
    cw: number,
    ch: number,
    cx: number,
    cy: number,
  ): void {
    const ctx = this.ctx
    const s = this.interiorScale

    // Dark luxury slate background
    ctx.fillStyle = '#0c1017'
    ctx.fillRect(0, 0, cw, ch)

    ctx.save()
    ctx.translate(cx, cy)

    const toScreenX = (wx: number) => (wx - player.x) * s
    const toScreenY = (wz: number) => (wz - player.z) * s

    // Lounge Bounds: X [-7.2, 7.2], Z [62.4, 67.6] (Center: cx=0, cz=65)
    const lxMin = -7.2
    const lxMax = 7.2
    const lzMin = 62.4
    const lzMax = 67.6
    const lw = lxMax - lxMin
    const ld = lzMax - lzMin

    // 1. Hardwood Perimeter Floor
    ctx.fillStyle = '#1c1511'
    ctx.fillRect(toScreenX(lxMin), toScreenY(lzMin), lw * s, ld * s)

    // 2. Center Diamond Patterned Carpet Runner: X [-7.0, 7.0], Z [63.2, 66.8]
    const rxMin = -7.0
    const rxMax = 7.0
    const rzMin = 63.2
    const rzMax = 66.8
    ctx.fillStyle = '#142136'
    ctx.fillRect(toScreenX(rxMin), toScreenY(rzMin), (rxMax - rxMin) * s, (rzMax - rzMin) * s)

    // Gold borders along runner edges
    ctx.strokeStyle = '#d4af37'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(toScreenX(rxMin), toScreenY(rzMin))
    ctx.lineTo(toScreenX(rxMax), toScreenY(rzMin))
    ctx.moveTo(toScreenX(rxMin), toScreenY(rzMax))
    ctx.lineTo(toScreenX(rxMax), toScreenY(rzMax))
    ctx.stroke()

    // Decorative diamond markers along center runner
    ctx.fillStyle = 'rgba(212, 175, 55, 0.28)'
    for (let dx = -6.0; dx <= 6.0; dx += 1.5) {
      const sx = toScreenX(dx)
      const sy = toScreenY(65.0)
      ctx.beginPath()
      ctx.moveTo(sx, sy - 5)
      ctx.lineTo(sx + 6, sy)
      ctx.lineTo(sx, sy + 5)
      ctx.lineTo(sx - 6, sy)
      ctx.closePath()
      ctx.fill()
    }

    // 3. ELEVATOR BANK (North Wall, Z: 62.4)
    // Lift 1 Cab (Left, Active elevator to 1F)
    const l1x = -1.35
    const l1w = 1.5
    const l1d = 1.9
    ctx.fillStyle = '#1e385c'
    ctx.strokeStyle = '#38bdf8'
    ctx.lineWidth = 1.5
    ctx.fillRect(toScreenX(l1x - l1w / 2), toScreenY(lzMin - l1d), l1w * s, l1d * s)
    ctx.strokeRect(toScreenX(l1x - l1w / 2), toScreenY(lzMin - l1d), l1w * s, l1d * s)

    // Lift 1 Door threshold
    ctx.fillStyle = '#38bdf8'
    ctx.fillRect(toScreenX(l1x - l1w / 2), toScreenY(lzMin - 0.1), l1w * s, 0.2 * s)

    // Lift 2 Cab (Right, Standby elevator)
    const l2x = 1.35
    const l2w = 1.5
    const l2d = 1.9
    ctx.fillStyle = '#172233'
    ctx.strokeStyle = '#64748b'
    ctx.lineWidth = 1.5
    ctx.fillRect(toScreenX(l2x - l2w / 2), toScreenY(lzMin - l2d), l2w * s, l2d * s)
    ctx.strokeRect(toScreenX(l2x - l2w / 2), toScreenY(lzMin - l2d), l2w * s, l2d * s)

    // Center Call Station Column
    ctx.fillStyle = '#221913'
    ctx.strokeStyle = '#d4af37'
    ctx.lineWidth = 1.2
    ctx.fillRect(toScreenX(-0.45), toScreenY(lzMin - 0.2), 0.9 * s, 0.3 * s)
    ctx.strokeRect(toScreenX(-0.45), toScreenY(lzMin - 0.2), 0.9 * s, 0.3 * s)
    // Glowing call button dot
    ctx.fillStyle = '#fbbf24'
    ctx.beginPath()
    ctx.arc(toScreenX(0), toScreenY(lzMin), 3, 0, Math.PI * 2)
    ctx.fill()

    // 4. SUITE ENTRANCE DOORS & STAIRS (North Wall)
    // Suite 401 Door (West of Lifts)
    ctx.fillStyle = '#2b1d14'
    ctx.fillRect(toScreenX(-4.3), toScreenY(lzMin - 0.15), 1.0 * s, 0.25 * s)
    // Refuse Chute
    ctx.fillStyle = '#475569'
    ctx.fillRect(toScreenX(-2.9), toScreenY(lzMin - 0.1), 0.6 * s, 0.15 * s)
    // Suite 403 Door (East of Lifts)
    ctx.fillStyle = '#2b1d14'
    ctx.fillRect(toScreenX(2.9), toScreenY(lzMin - 0.15), 1.0 * s, 0.25 * s)
    // Emergency Fire Stairs (Green exit)
    ctx.fillStyle = '#065f46'
    ctx.strokeStyle = '#10b981'
    ctx.lineWidth = 1.2
    ctx.fillRect(toScreenX(4.6), toScreenY(lzMin - 1.2), 1.2 * s, 1.2 * s)
    ctx.strokeRect(toScreenX(4.6), toScreenY(lzMin - 1.2), 1.2 * s, 1.2 * s)

    // 5. SUITE 402 ENTRANCE (West Wall, X: -7.2, Z: 64.3 to 65.7)
    ctx.fillStyle = '#d4af37'
    ctx.fillRect(toScreenX(lxMin - 0.2), toScreenY(64.3), 0.3 * s, 1.4 * s)
    // Suite 402 Doormat
    ctx.fillStyle = '#241a14'
    ctx.fillRect(toScreenX(lxMin + 0.1), toScreenY(64.4), 0.8 * s, 1.2 * s)

    // 6. LOUNGE SEATING & CONSOLE (South Wall, Z: 67.6)
    // Cognac Leather Lounge Sofa
    ctx.fillStyle = '#7c3f1d'
    ctx.strokeStyle = '#d4af37'
    ctx.lineWidth = 1
    ctx.fillRect(toScreenX(-0.6), toScreenY(66.7), 2.2 * s, 0.8 * s)
    ctx.strokeRect(toScreenX(-0.6), toScreenY(66.7), 2.2 * s, 0.8 * s)

    // Low Marble Coffee Table
    ctx.fillStyle = '#e2e8f0'
    ctx.fillRect(toScreenX(-0.1), toScreenY(65.8), 1.2 * s, 0.6 * s)

    // Walnut Console Credenza
    ctx.fillStyle = '#231812'
    ctx.fillRect(toScreenX(-4.2), toScreenY(67.1), 1.8 * s, 0.45 * s)

    // Potted Architectural Plants
    const drawPlant = (px: number, pz: number) => {
      ctx.fillStyle = '#166534'
      ctx.beginPath()
      ctx.arc(toScreenX(px), toScreenY(pz), 4.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = '#86efac'
      ctx.lineWidth = 1
      ctx.stroke()
    }
    drawPlant(-1.2, 67.0)
    drawPlant(2.2, 67.0)
    drawPlant(-6.5, 63.0)

    // 7. OUTER ARCHITECTURAL WALL BOUNDARIES (Thick lines)
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 2.5
    // South Wall
    ctx.beginPath()
    ctx.moveTo(toScreenX(lxMin), toScreenY(lzMax))
    ctx.lineTo(toScreenX(lxMax), toScreenY(lzMax))
    ctx.stroke()

    // East Wall
    ctx.beginPath()
    ctx.moveTo(toScreenX(lxMax), toScreenY(lzMax))
    ctx.lineTo(toScreenX(lxMax), toScreenY(lzMin))
    ctx.stroke()

    // North Wall Sections
    ctx.beginPath()
    // West to Lift 1
    ctx.moveTo(toScreenX(lxMin), toScreenY(lzMin))
    ctx.lineTo(toScreenX(l1x - l1w / 2), toScreenY(lzMin))
    // Between Lifts (Center Pier)
    ctx.moveTo(toScreenX(l1x + l1w / 2), toScreenY(lzMin))
    ctx.lineTo(toScreenX(l2x - l2w / 2), toScreenY(lzMin))
    // East of Lift 2 to East wall
    ctx.moveTo(toScreenX(l2x + l2w / 2), toScreenY(lzMin))
    ctx.lineTo(toScreenX(lxMax), toScreenY(lzMin))
    ctx.stroke()

    // West Wall (Split by Suite 402 Entrance)
    ctx.beginPath()
    ctx.moveTo(toScreenX(lxMin), toScreenY(lzMin))
    ctx.lineTo(toScreenX(lxMin), toScreenY(64.3))
    ctx.moveTo(toScreenX(lxMin), toScreenY(65.7))
    ctx.lineTo(toScreenX(lxMin), toScreenY(lzMax))
    ctx.stroke()

    // 8. TEXT LABELS & ICONS
    ctx.font = 'bold 9px "Yu Gothic UI", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // Elevators
    ctx.fillStyle = '#38bdf8'
    ctx.fillText('🛗 LIFT 1 [1F]', toScreenX(l1x), toScreenY(lzMin - l1d / 2))
    ctx.fillStyle = '#94a3b8'
    ctx.fillText('LIFT 2', toScreenX(l2x), toScreenY(lzMin - l2d / 2))

    // Stairs
    ctx.fillStyle = '#34d399'
    ctx.fillText('STAIRS 🚪', toScreenX(5.2), toScreenY(lzMin - 0.6))

    // Suite 402 Entrance
    ctx.fillStyle = '#fbbf24'
    ctx.fillText('402号室 ▶', toScreenX(lxMin + 1.2), toScreenY(65.0))

    // Suite 401 & 403
    ctx.fillStyle = '#e2e8f0'
    ctx.fillText('401', toScreenX(-3.8), toScreenY(lzMin + 0.4))
    ctx.fillText('403', toScreenX(3.4), toScreenY(lzMin + 0.4))

    // Lounge
    ctx.fillStyle = '#cbd5e1'
    ctx.fillText('🛋️ LOUNGE', toScreenX(0.5), toScreenY(66.2))

    ctx.restore()

    // Top Header Badge
    this.drawHeaderBadge('🏠 SUN HEIGHTS // 4F LOUNGE', '#38bdf8')
  }

  // =========================================================================
  // 2. SUITE 402 BEDROOM ARCHITECTURAL FLOOR PLAN
  // =========================================================================
  private drawSuite402Map(
    player: Player,
    cw: number,
    ch: number,
    cx: number,
    cy: number,
  ): void {
    const ctx = this.ctx
    const s = this.suiteScale

    ctx.fillStyle = '#0a0d14'
    ctx.fillRect(0, 0, cw, ch)

    ctx.save()
    ctx.translate(cx, cy)

    const toScreenX = (wx: number) => (wx - player.x) * s
    const toScreenY = (wz: number) => (wz - player.z) * s

    // Room Bounds: X [-5.3, 5.3], Z [81.3, 88.7]
    const rxMin = -5.3
    const rxMax = 5.3
    const rzMin = 81.3
    const rzMax = 88.7
    const rw = rxMax - rxMin
    const rd = rzMax - rzMin

    // Floor
    ctx.fillStyle = '#17120e'
    ctx.fillRect(toScreenX(rxMin), toScreenY(rzMin), rw * s, rd * s)

    // Balcony Deck: X [-2.4, 2.4], Z [78.7, 81.3]
    ctx.fillStyle = '#1c1712'
    ctx.strokeStyle = '#38bdf8'
    ctx.lineWidth = 1.2
    ctx.fillRect(toScreenX(-2.4), toScreenY(78.7), 4.8 * s, 2.6 * s)
    ctx.strokeRect(toScreenX(-2.4), toScreenY(78.7), 4.8 * s, 2.6 * s)

    // Center Luxury Rug: X [-2.0, 2.8], Z [83.6, 86.4]
    ctx.fillStyle = '#131e30'
    ctx.strokeStyle = '#d4af37'
    ctx.lineWidth = 1.2
    ctx.fillRect(toScreenX(-2.0), toScreenY(83.6), 4.8 * s, 2.8 * s)
    ctx.strokeRect(toScreenX(-2.0), toScreenY(83.6), 4.8 * s, 2.8 * s)

    // Master Platform Bed: X [-5.3, -3.0], Z [85.2, 87.2]
    ctx.fillStyle = '#182236'
    ctx.strokeStyle = '#d4af37'
    ctx.lineWidth = 1.2
    ctx.fillRect(toScreenX(-5.25), toScreenY(85.2), 2.3 * s, 2.0 * s)
    ctx.strokeRect(toScreenX(-5.25), toScreenY(85.2), 2.3 * s, 2.0 * s)
    // Pillows
    ctx.fillStyle = '#f8fafc'
    ctx.fillRect(toScreenX(-5.15), toScreenY(85.35), 0.45 * s, 0.7 * s)
    ctx.fillRect(toScreenX(-5.15), toScreenY(86.15), 0.45 * s, 0.7 * s)

    // Dual Nightstands
    ctx.fillStyle = '#221813'
    ctx.fillRect(toScreenX(-5.25), toScreenY(84.1), 0.75 * s, 0.65 * s)
    ctx.fillRect(toScreenX(-5.25), toScreenY(87.65), 0.75 * s, 0.65 * s)

    // Cyber Battlestation Desk: X [-5.25, -4.35], Z [81.7, 83.7]
    ctx.fillStyle = '#221813'
    ctx.strokeStyle = '#00ffff'
    ctx.lineWidth = 1
    ctx.fillRect(toScreenX(-5.25), toScreenY(81.7), 0.9 * s, 2.0 * s)
    ctx.strokeRect(toScreenX(-5.25), toScreenY(81.7), 0.9 * s, 2.0 * s)
    // Curved Monitor cyan line
    ctx.strokeStyle = '#00ffff'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(toScreenX(-4.95), toScreenY(82.3))
    ctx.lineTo(toScreenX(-4.95), toScreenY(83.1))
    ctx.stroke()
    // Chair facing West
    ctx.fillStyle = '#334155'
    ctx.beginPath()
    ctx.arc(toScreenX(-3.85), toScreenY(82.7), 4, 0, Math.PI * 2)
    ctx.fill()

    // Grand Luxury Wardrobe: X [4.5, 5.25], Z [82.1, 84.3]
    ctx.fillStyle = '#1f1611'
    ctx.strokeStyle = '#d4af37'
    ctx.lineWidth = 1
    ctx.fillRect(toScreenX(4.5), toScreenY(82.1), 0.76 * s, 2.2 * s)
    ctx.strokeRect(toScreenX(4.5), toScreenY(82.1), 0.76 * s, 2.2 * s)

    // Manga Bookshelf & TV Credenza: South Wall
    ctx.fillStyle = '#221813'
    ctx.fillRect(toScreenX(-1.4), toScreenY(88.15), 1.6 * s, 0.45 * s)
    ctx.fillRect(toScreenX(0.5), toScreenY(88.15), 2.0 * s, 0.45 * s)

    // Lounge Armchair: X [3.2, 4.0], Z [86.4, 87.2]
    ctx.fillStyle = '#162238'
    ctx.fillRect(toScreenX(3.2), toScreenY(86.4), 0.8 * s, 0.8 * s)

    // Walls
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 2.5
    // South Wall
    ctx.beginPath(); ctx.moveTo(toScreenX(rxMin), toScreenY(rzMax)); ctx.lineTo(toScreenX(rxMax), toScreenY(rzMax)); ctx.stroke()
    // West Wall
    ctx.beginPath(); ctx.moveTo(toScreenX(rxMin), toScreenY(rzMax)); ctx.lineTo(toScreenX(rxMin), toScreenY(rzMin)); ctx.stroke()
    // North Wall (Balcony opening at X: [-1.5, 1.5])
    ctx.beginPath()
    ctx.moveTo(toScreenX(rxMin), toScreenY(rzMin))
    ctx.lineTo(toScreenX(-1.5), toScreenY(rzMin))
    ctx.moveTo(toScreenX(1.5), toScreenY(rzMin))
    ctx.lineTo(toScreenX(rxMax), toScreenY(rzMin))
    ctx.stroke()
    // East Wall (Door opening at Z: [85.4, 87.0])
    ctx.beginPath()
    ctx.moveTo(toScreenX(rxMax), toScreenY(rzMin))
    ctx.lineTo(toScreenX(rxMax), toScreenY(85.4))
    ctx.moveTo(toScreenX(rxMax), toScreenY(87.0))
    ctx.lineTo(toScreenX(rxMax), toScreenY(rzMax))
    ctx.stroke()

    // Labels
    ctx.font = 'bold 9px "Yu Gothic UI", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#38bdf8'
    ctx.fillText('BALCONY (TOKYO SKYLINE)', toScreenX(0), toScreenY(79.9))
    ctx.fillStyle = '#fbbf24'
    ctx.fillText('🛏️ BED', toScreenX(-4.1), toScreenY(86.2))
    ctx.fillStyle = '#00ffff'
    ctx.fillText('PC', toScreenX(-4.8), toScreenY(82.7))
    ctx.fillStyle = '#d4af37'
    ctx.fillText('WARDROBE', toScreenX(4.88), toScreenY(83.2))
    ctx.fillStyle = '#94a3b8'
    ctx.fillText('◀ 4F LOUNGE', toScreenX(rxMax - 0.8), toScreenY(86.2))

    ctx.restore()

    this.drawHeaderBadge('🛏️ SUITE 402 // YOUR ROOM', '#fbbf24')
  }

  // =========================================================================
  // 3. OUTDOOR NEIGHBORHOOD MAP (SHIBUYA STREETS & PARK)
  // =========================================================================
  private drawOutdoorMap(
    player: Player,
    cw: number,
    ch: number,
    cx: number,
    cy: number,
  ): void {
    const ctx = this.ctx
    const s = this.outdoorScale

    // Clear background (Dark Tokyo Night)
    ctx.fillStyle = '#0a0e14'
    ctx.fillRect(0, 0, cw, ch)

    ctx.save()
    ctx.translate(cx, cy)

    const toScreenX = (wx: number) => (wx - player.x) * s
    const toScreenY = (wz: number) => (wz - player.z) * s

    // 1. ROADS (Asphalt)
    ctx.fillStyle = '#181e28'
    ctx.fillRect(toScreenX(-55), toScreenY(-3.5), 110 * s, 7 * s)
    ctx.fillRect(toScreenX(13.5), toScreenY(3.5), 5 * s, 38.5 * s)
    ctx.fillRect(toScreenX(-16.5), toScreenY(-42), 5 * s, 38.5 * s)

    // Sidewalks & Alleys
    ctx.fillStyle = '#222834'
    ctx.fillRect(toScreenX(-55), toScreenY(3.5), 110 * s, 4 * s)
    ctx.fillRect(toScreenX(-55), toScreenY(-7.5), 110 * s, 4 * s)
    ctx.fillRect(toScreenX(10.5), toScreenY(3.5), 3 * s, 38.5 * s)
    ctx.fillRect(toScreenX(18.5), toScreenY(3.5), 3 * s, 38.5 * s)
    ctx.fillRect(toScreenX(-19.5), toScreenY(-42), 3 * s, 38.5 * s)
    ctx.fillRect(toScreenX(-11.5), toScreenY(-42), 3 * s, 38.5 * s)
    ctx.fillRect(toScreenX(4), toScreenY(19.5), 9.5 * s, 3 * s)
    ctx.fillRect(toScreenX(-4), toScreenY(21.5), 8 * s, 3 * s)

    // Pocket Park Base Ground
    ctx.fillStyle = '#222920'
    ctx.fillRect(toScreenX(-8.5), toScreenY(-36.5), 18 * s, 29 * s)
    ctx.strokeStyle = '#2d5a3c'
    ctx.lineWidth = 1.5
    ctx.strokeRect(toScreenX(-8.5), toScreenY(-36.5), 18 * s, 29 * s)

    // Paved Walkways
    ctx.fillStyle = '#343836'
    ctx.fillRect(toScreenX(-1.6), toScreenY(-18.6), 3.2 * s, 11.1 * s)
    ctx.fillRect(toScreenX(-3.1), toScreenY(-24.4), 6.2 * s, 5.8 * s)
    ctx.fillRect(toScreenX(-8.5), toScreenY(-23.3), 5.4 * s, 2.6 * s)
    ctx.fillRect(toScreenX(-0.5), toScreenY(-30.7), 3.0 * s, 6.5 * s)

    // Green Lawn Islands
    ctx.fillStyle = '#1a3d24'
    ctx.fillRect(toScreenX(2.3), toScreenY(-19.6), 5.8 * s, 7.2 * s)
    ctx.fillRect(toScreenX(-7.4), toScreenY(-17.6), 4.8 * s, 6.2 * s)

    // Restroom building
    ctx.fillStyle = '#475569'
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 1
    ctx.fillRect(toScreenX(4.1), toScreenY(-34.1), 4.2 * s, 3.2 * s)
    ctx.strokeRect(toScreenX(4.1), toScreenY(-34.1), 4.2 * s, 3.2 * s)

    // Road Centerlines & Crosswalks
    ctx.fillStyle = '#ffffff'
    const cwList = [
      { x: 16, z: 0, w: 4, d: 7 },
      { x: -14, z: 0, w: 4, d: 7 },
      { x: 0, z: 0, w: 3.5, d: 7 },
      { x: 16, z: 5.5, w: 5, d: 3 },
      { x: -14, z: -5.5, w: 5, d: 3 },
    ]
    for (const cwItem of cwList) {
      ctx.globalAlpha = 0.4
      ctx.fillRect(
        toScreenX(cwItem.x - cwItem.w / 2),
        toScreenY(cwItem.z - cwItem.d / 2),
        cwItem.w * s,
        cwItem.d * s,
      )
      ctx.globalAlpha = 1.0
    }

    // 2. BUILDINGS
    for (const b of NEIGHBORHOOD_BUILDINGS) {
      const bx = toScreenX(b.x - b.w / 2)
      const by = toScreenY(b.z - b.d / 2)
      const bw = b.w * s
      const bd = b.d * s

      if (b.id === 'b-sunheights') {
        ctx.fillStyle = '#1e384d'
        ctx.strokeStyle = '#4da2d6'
      } else if (b.id === 'b-konbini') {
        ctx.fillStyle = '#14422e'
        ctx.strokeStyle = '#32b87a'
      } else if (b.id === 'b-ramen') {
        ctx.fillStyle = '#4a201c'
        ctx.strokeStyle = '#e04c3e'
      } else if (b.id === 'b-cafe') {
        ctx.fillStyle = '#3d2b1c'
        ctx.strokeStyle = '#c4894d'
      } else {
        ctx.fillStyle = '#262d38'
        ctx.strokeStyle = '#3d485a'
      }

      ctx.lineWidth = 1.5
      ctx.fillRect(bx, by, bw, bd)
      ctx.strokeRect(bx, by, bw, bd)

      ctx.font = '10px "Yu Gothic UI", sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      if (b.id === 'b-sunheights') {
        ctx.fillStyle = '#78c6f7'
        ctx.fillText('🏠 サンハイツ', toScreenX(b.x), toScreenY(b.z))
      } else if (b.id === 'b-konbini') {
        ctx.fillStyle = '#5ee6a2'
        ctx.fillText('🏪 コンビニ', toScreenX(b.x), toScreenY(b.z))
      } else if (b.id === 'b-ramen') {
        ctx.fillStyle = '#ff8878'
        ctx.fillText('🍜 麺処', toScreenX(b.x), toScreenY(b.z))
      } else if (b.id === 'b-cafe') {
        ctx.fillStyle = '#f0b878'
        ctx.fillText('☕ 喫茶', toScreenX(b.x), toScreenY(b.z))
      }
    }

    // Park label & icons
    ctx.font = '10px "Yu Gothic UI", sans-serif'
    ctx.fillStyle = '#f472b6'
    ctx.fillText('🌸 桜公園', toScreenX(0.5), toScreenY(-19))
    ctx.fillStyle = '#38bdf8'
    ctx.fillText('🛝 遊具', toScreenX(-2.5), toScreenY(-29))
    ctx.fillStyle = '#94a3b8'
    ctx.font = '8px "Yu Gothic UI", sans-serif'
    ctx.fillText('🚻', toScreenX(6.2), toScreenY(-32.5))

    ctx.restore()
  }

  // =========================================================================
  // 4. SHARED OVERLAYS: PLAYER MARKER, COMPASS, HEADER BADGE
  // =========================================================================
  private drawPlayerMarker(player: Player, cx: number, cy: number): void {
    const ctx = this.ctx
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(-player.yaw)

    // Vision FOV Cone
    const fovGradient = ctx.createRadialGradient(0, 0, 2, 0, 0, 36)
    fovGradient.addColorStop(0, 'rgba(80, 210, 255, 0.45)')
    fovGradient.addColorStop(1, 'rgba(80, 210, 255, 0.0)')

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.arc(0, 0, 36, -Math.PI / 2 - 0.45, -Math.PI / 2 + 0.45)
    ctx.closePath()
    ctx.fillStyle = fovGradient
    ctx.fill()

    // Directional Arrow Triangle
    ctx.beginPath()
    ctx.moveTo(0, -9)
    ctx.lineTo(6, 6)
    ctx.lineTo(0, 3)
    ctx.lineTo(-6, 6)
    ctx.closePath()
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = '#00aaff'
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.restore()
  }

  private drawCompass(cw: number): void {
    const ctx = this.ctx
    ctx.fillStyle = 'rgba(15, 20, 28, 0.75)'
    ctx.fillRect(cw - 28, 6, 22, 22)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.strokeRect(cw - 28, 6, 22, 22)
    ctx.font = 'bold 11px sans-serif'
    ctx.fillStyle = '#e85d4d'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('N', cw - 17, 17)
  }

  private drawHeaderBadge(label: string, dotColor: string): void {
    const ctx = this.ctx
    ctx.fillStyle = 'rgba(12, 16, 24, 0.85)'
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.roundRect(8, 8, 145, 22, 4)
    ctx.fill()
    ctx.stroke()

    // Status Dot
    ctx.fillStyle = dotColor
    ctx.beginPath()
    ctx.arc(18, 19, 3.5, 0, Math.PI * 2)
    ctx.fill()

    // Text
    ctx.font = 'bold 9px sans-serif'
    ctx.fillStyle = '#f1f5f9'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(label, 26, 19)
  }
}

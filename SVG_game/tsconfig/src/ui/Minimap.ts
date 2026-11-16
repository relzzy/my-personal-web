import { NEIGHBORHOOD_BUILDINGS } from '../world/Layout'
import type { Player } from '../game/Player'

export class Minimap {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private readonly scale = 3.2 // pixels per world meter
  private lastX = -9999
  private lastZ = -9999
  private lastYaw = -9999

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvas.width = 256
    this.canvas.height = 256
    this.ctx = canvas.getContext('2d')!
  }

  update(player: Player, force = false): void {
    if (
      !force &&
      Math.abs(player.x - this.lastX) < 0.012 &&
      Math.abs(player.z - this.lastZ) < 0.012 &&
      Math.abs(player.yaw - this.lastYaw) < 0.008
    ) {
      return
    }
    this.lastX = player.x
    this.lastZ = player.z
    this.lastYaw = player.yaw

    const ctx = this.ctx
    const cw = this.canvas.width
    const ch = this.canvas.height
    const cx = cw / 2
    const cy = ch / 2

    // Clear background (Dark Tokyo Night)
    ctx.fillStyle = '#0a0e14'
    ctx.fillRect(0, 0, cw, ch)

    ctx.save()
    // Center map on player position
    ctx.translate(cx, cy)

    // Helper: World (X, Z) to screen (sx, sy) relative to player
    const toScreenX = (wx: number) => (wx - player.x) * this.scale
    const toScreenY = (wz: number) => (wz - player.z) * this.scale

    // 1. ROADS (Asphalt)
    ctx.fillStyle = '#181e28'
    // Main Street: X [-55, 55], Z [-3.5, 3.5]
    ctx.fillRect(toScreenX(-55), toScreenY(-3.5), 110 * this.scale, 7 * this.scale)
    // North Street: X [13.5, 18.5], Z [3.5, 42]
    ctx.fillRect(toScreenX(13.5), toScreenY(3.5), 5 * this.scale, 38.5 * this.scale)
    // South Street: X [-16.5, -11.5], Z [-42, -3.5]
    ctx.fillRect(toScreenX(-16.5), toScreenY(-42), 5 * this.scale, 38.5 * this.scale)

    // Sidewalks & Alleys (Slightly lighter slate)
    ctx.fillStyle = '#222834'
    // Main St Sidewalks
    ctx.fillRect(toScreenX(-55), toScreenY(3.5), 110 * this.scale, 4 * this.scale)
    ctx.fillRect(toScreenX(-55), toScreenY(-7.5), 110 * this.scale, 4 * this.scale)
    // North St Sidewalks
    ctx.fillRect(toScreenX(10.5), toScreenY(3.5), 3 * this.scale, 38.5 * this.scale)
    ctx.fillRect(toScreenX(18.5), toScreenY(3.5), 3 * this.scale, 38.5 * this.scale)
    // South St Sidewalks
    ctx.fillRect(toScreenX(-19.5), toScreenY(-42), 3 * this.scale, 38.5 * this.scale)
    ctx.fillRect(toScreenX(-11.5), toScreenY(-42), 3 * this.scale, 38.5 * this.scale)
    // Residential Alley
    ctx.fillRect(toScreenX(4), toScreenY(19.5), 9.5 * this.scale, 3 * this.scale)
    ctx.fillRect(toScreenX(-4), toScreenY(21.5), 8 * this.scale, 3 * this.scale)

    // Pocket Park
    ctx.fillStyle = '#142a1e'
    ctx.fillRect(toScreenX(-8.5), toScreenY(-36), 16.5 * this.scale, 24 * this.scale)
    ctx.strokeStyle = '#2d5a3c'
    ctx.lineWidth = 1
    ctx.strokeRect(toScreenX(-8.5), toScreenY(-36), 16.5 * this.scale, 24 * this.scale)

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
        cwItem.w * this.scale,
        cwItem.d * this.scale,
      )
      ctx.globalAlpha = 1.0
    }

    // 2. BUILDINGS
    for (const b of NEIGHBORHOOD_BUILDINGS) {
      const bx = toScreenX(b.x - b.w / 2)
      const by = toScreenY(b.z - b.d / 2)
      const bw = b.w * this.scale
      const bd = b.d * this.scale

      // Building category colors
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

      // Landmark Icons & Text on Map
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

    // Park label
    ctx.font = '10px "Yu Gothic UI", sans-serif'
    ctx.fillStyle = '#65d48a'
    ctx.fillText('🌸 桜公園', toScreenX(-0.25), toScreenY(-24))

    ctx.restore()

    // 3. PLAYER MARKER AT CENTER
    // Facing Vision Cone
    ctx.save()
    ctx.translate(cx, cy)
    // In Three.js: looking forward at yaw=0 is (0, 0, -1), meaning negative Z!
    // Screen Y maps to positive world Z, so forward is negative Y on screen.
    // Rotate by -yaw
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

    // 4. NORTH COMPASS INDICATOR (Top Right)
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
}

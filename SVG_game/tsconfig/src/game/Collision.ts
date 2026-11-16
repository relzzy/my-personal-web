import type { AABB } from '../types'

export const PLAYER_RADIUS = 0.28
export const PLAYER_HEIGHT = 1.75
const STEP = 0.24
const SKIN = 0.015

export class CollisionWorld {
  readonly boxes: AABB[] = []

  add(box: AABB): AABB {
    this.boxes.push(box)
    return box
  }

  remove(box: AABB): void {
    const i = this.boxes.indexOf(box)
    if (i >= 0) this.boxes.splice(i, 1)
  }

  move(
    x: number,
    z: number,
    dx: number,
    dz: number,
    feetY: number,
  ): { x: number; z: number } {
    const freed = this.pushOut(x, z, feetY)
    x = freed.x
    z = freed.z
    const nx = x + dx
    if (!this.blocked(nx, z, feetY)) x = nx
    const nz = z + dz
    if (!this.blocked(x, nz, feetY)) z = nz
    return { x, z }
  }

  blocked(x: number, z: number, feetY: number): boolean {
    return this.hits(x, z, feetY, PLAYER_RADIUS)
  }

  private hits(x: number, z: number, feetY: number, radius: number): boolean {
    const head = feetY + PLAYER_HEIGHT
    for (const b of this.boxes) {
      if (b.maxY <= feetY + 0.04) continue
      if (b.minY >= head) continue
      if (b.maxY <= feetY + STEP) continue
      if (circleAabb(x, z, radius, b)) return true
    }
    return false
  }

  private pushOut(x: number, z: number, feetY: number): { x: number; z: number } {
    const head = feetY + PLAYER_HEIGHT
    for (let pass = 0; pass < 4; pass++) {
      let hit = false
      for (const b of this.boxes) {
        if (b.maxY <= feetY + 0.04) continue
        if (b.minY >= head) continue
        if (b.maxY <= feetY + STEP) continue
        if (!circleAabb(x, z, PLAYER_RADIUS, b)) continue
        hit = true
        const left = x + PLAYER_RADIUS - b.minX
        const right = b.maxX - (x - PLAYER_RADIUS)
        const south = z + PLAYER_RADIUS - b.minZ
        const north = b.maxZ - (z - PLAYER_RADIUS)
        const m = Math.min(left, right, south, north)
        if (m > 0.6) continue
        if (m === left) x = b.minX - PLAYER_RADIUS - SKIN
        else if (m === right) x = b.maxX + PLAYER_RADIUS + SKIN
        else if (m === south) z = b.minZ - PLAYER_RADIUS - SKIN
        else z = b.maxZ + PLAYER_RADIUS + SKIN
      }
      if (!hit) break
    }
    return { x, z }
  }
}

export function circleAabb(x: number, z: number, radius: number, b: AABB): boolean {
  const cx = clamp(x, b.minX, b.maxX)
  const cz = clamp(z, b.minZ, b.maxZ)
  const dx = x - cx
  const dz = z - cz
  return dx * dx + dz * dz < radius * radius
}

export function pointInAabb(x: number, z: number, b: AABB, pad = 0): boolean {
  return x >= b.minX - pad && x <= b.maxX + pad && z >= b.minZ - pad && z <= b.maxZ + pad
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

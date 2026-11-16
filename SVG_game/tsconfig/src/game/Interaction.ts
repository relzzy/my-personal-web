import { CollisionWorld, pointInAabb } from './Collision'
import type { Player } from './Player'

export interface Interactable {
  id: string
  x: number
  z: number
  radius: number
  prompt: string | (() => string)
  onInteract: () => void
}

const look = { x: 0, z: 0 }

export class InteractionSystem {
  readonly items: Interactable[] = []
  current: Interactable | null = null

  add(item: Interactable): Interactable {
    this.items.push(item)
    return item
  }

  update(player: Player, colliders: CollisionWorld): void {
    const facing = player.lookFlat()
    look.x = facing.x
    look.z = facing.z
    let best: Interactable | null = null
    let bestDist = Infinity
    for (const item of this.items) {
      const dx = item.x - player.x
      const dz = item.z - player.z
      const dist = Math.hypot(dx, dz)
      if (dist > item.radius || dist >= bestDist) continue
      const dot = dist < 0.001 ? 1 : (dx * look.x + dz * look.z) / dist
      if (dot < 0.2) continue
      if (this.occluded(player.x, player.z, item.x, item.z, colliders)) continue
      best = item
      bestDist = dist
    }
    this.current = best
  }

  prompt(): string {
    if (!this.current) return ''
    const p = this.current.prompt
    return typeof p === 'function' ? p() : p
  }

  use(): void {
    this.current?.onInteract()
  }

  private occluded(px: number, pz: number, ix: number, iz: number, world: CollisionWorld): boolean {
    const samples = [
      [px * 0.65 + ix * 0.35, pz * 0.65 + iz * 0.35],
      [px * 0.35 + ix * 0.65, pz * 0.35 + iz * 0.65],
    ]
    for (const b of world.boxes) {
      if (b.maxY < 1.1) continue
      if (pointInAabb(ix, iz, b, 0.05)) continue
      for (const [sx, sz] of samples) {
        if (pointInAabb(sx, sz, b)) return true
      }
    }
    return false
  }
}

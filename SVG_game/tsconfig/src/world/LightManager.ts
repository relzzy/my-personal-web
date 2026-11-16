import * as THREE from 'three'

export interface LightDef {
  id?: string
  x: number
  y: number
  z: number
  color: number
  intensity: number
  distance: number
  decay?: number
  zone?: string // e.g. 'Lobby', 'Ramen', 'Konbini', 'Cafe', 'Park', 'Street'
  dynamicIntensity?: () => number
}

export class LightManager {
  private readonly defs: LightDef[] = []
  private readonly pool: THREE.PointLight[] = []
  public readonly POOL_SIZE = 7 // Optimal limit for WebGL / integrated GPU performance

  private updateTimer = 0
  private lastUpdatePos = new THREE.Vector3(-9999, -9999, -9999)

  constructor(scene: THREE.Scene) {
    // Allocate fixed pool of PointLights into the scene once.
    // Fixed count means WebGL shaders NEVER recompile during gameplay.
    for (let i = 0; i < this.POOL_SIZE; i++) {
      const pl = new THREE.PointLight(0xffffff, 0, 10, 1.2)
      pl.position.set(0, -999, 0)
      scene.add(pl)
      this.pool.push(pl)
    }
  }

  register(def: LightDef): LightDef {
    this.defs.push(def)
    return def
  }

  update(dt: number, cameraPos: THREE.Vector3, currentZone: string, force = false): void {
    this.updateTimer += dt

    // Throttle light sorting to every ~35ms unless camera moved significantly
    const moved = cameraPos.distanceToSquared(this.lastUpdatePos) > 0.16
    if (!force && !moved && this.updateTimer < 0.035) {
      return
    }

    this.updateTimer = 0
    this.lastUpdatePos.copy(cameraPos)

    // Calculate score for each registered light
    const scored: { def: LightDef; score: number; curIntensity: number }[] = []

    for (let i = 0; i < this.defs.length; i++) {
      const d = this.defs[i]
      const dx = d.x - cameraPos.x
      const dy = d.y - cameraPos.y
      const dz = d.z - cameraPos.z
      const distSq = dx * dx + dy * dy + dz * dz

      // Effective range cutoff
      const maxRange = d.distance * 1.55
      if (distSq > maxRange * maxRange) {
        continue
      }

      const dist = Math.sqrt(distSq)
      const curIntensity = d.dynamicIntensity ? d.dynamicIntensity() : d.intensity
      if (curIntensity <= 0.01) continue

      // Attenuation score
      const att = 1 / (1 + (dist / d.distance) ** 2)
      let score = curIntensity * (1 - dist / maxRange) * att

      // Boost priority for lights in the player's immediate zone / interior
      if (d.zone && currentZone.includes(d.zone)) {
        score *= 3.0
      }

      scored.push({ def: d, score, curIntensity })
    }

    // Sort descending by score
    scored.sort((a, b) => b.score - a.score)

    // Assign top POOL_SIZE lights to the scene pool
    for (let i = 0; i < this.POOL_SIZE; i++) {
      const pl = this.pool[i]
      if (i < scored.length && scored[i].score > 0.005) {
        const item = scored[i]
        pl.position.set(item.def.x, item.def.y, item.def.z)
        pl.color.setHex(item.def.color)
        pl.intensity = item.curIntensity
        pl.distance = item.def.distance
        pl.decay = item.def.decay ?? 1.2
      } else {
        pl.intensity = 0
        pl.position.set(0, -999, 0)
      }
    }
  }
}

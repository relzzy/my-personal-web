import * as THREE from 'three'
import type { GraphicsQuality } from '../game/Settings'

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
  private readonly scene: THREE.Scene
  private readonly defs: LightDef[] = []
  private readonly lowPool: THREE.PointLight[] = []
  private readonly highLights: { def: LightDef; light: THREE.PointLight }[] = []
  public readonly POOL_SIZE = 7 // Optimal limit for WebGL / integrated GPU performance

  private quality: GraphicsQuality = 'low'
  private updateTimer = 0
  private lastUpdatePos = new THREE.Vector3(-9999, -9999, -9999)

  constructor(scene: THREE.Scene, initialQuality: GraphicsQuality = 'low') {
    this.scene = scene
    this.quality = initialQuality

    // Allocate fixed pool of PointLights into the scene once for low-power mode.
    for (let i = 0; i < this.POOL_SIZE; i++) {
      const pl = new THREE.PointLight(0xffffff, 0, 10, 1.2)
      pl.position.set(0, -999, 0)
      pl.visible = this.quality === 'low'
      scene.add(pl)
      this.lowPool.push(pl)
    }
  }

  getQuality(): GraphicsQuality {
    return this.quality
  }

  setQuality(q: GraphicsQuality): void {
    if (this.quality === q) return
    this.quality = q

    if (q === 'high') {
      // Deactivate low pool
      for (const pl of this.lowPool) {
        pl.intensity = 0
        pl.visible = false
        pl.position.set(0, -999, 0)
      }
      // Activate all high lights
      for (const item of this.highLights) {
        item.light.visible = true
        item.light.position.set(item.def.x, item.def.y, item.def.z)
        item.light.color.setHex(item.def.color)
        item.light.distance = item.def.distance
        item.light.decay = item.def.decay ?? 1.2
        item.light.intensity = item.def.dynamicIntensity ? item.def.dynamicIntensity() : item.def.intensity
      }
    } else {
      // Deactivate high lights
      for (const item of this.highLights) {
        item.light.visible = false
      }
      // Re-enable low pool
      for (const pl of this.lowPool) {
        pl.visible = true
      }
      this.lastUpdatePos.set(-9999, -9999, -9999) // force refresh next update
    }
  }

  register(def: LightDef): LightDef {
    this.defs.push(def)

    // Dedicated PointLight for High Graphics mode
    const pl = new THREE.PointLight(def.color, def.intensity, def.distance, def.decay ?? 1.2)
    pl.position.set(def.x, def.y, def.z)
    pl.visible = this.quality === 'high'
    this.scene.add(pl)
    this.highLights.push({ def, light: pl })

    return def
  }

  update(dt: number, cameraPos: THREE.Vector3, currentZone: string, force = false): void {
    if (this.quality === 'high') {
      // In high mode, all lights are on. Just update any dynamic lights (like flickering lantern)
      for (let i = 0; i < this.highLights.length; i++) {
        const item = this.highLights[i]
        if (item.def.dynamicIntensity) {
          item.light.intensity = item.def.dynamicIntensity()
        }
      }
      return
    }

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
      const pl = this.lowPool[i]
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

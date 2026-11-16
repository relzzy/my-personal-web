export type GraphicsQuality = 'low' | 'high'

class SettingsManager {
  private quality: GraphicsQuality = 'low'
  private listeners: ((quality: GraphicsQuality) => void)[] = []

  constructor() {
    try {
      const saved = localStorage.getItem('tokyo_graphics_quality')
      if (saved === 'high' || saved === 'low') {
        this.quality = saved
      } else {
        this.quality = 'low'
      }
    } catch {
      this.quality = 'low'
    }
  }

  getQuality(): GraphicsQuality {
    return this.quality
  }

  isHigh(): boolean {
    return this.quality === 'high'
  }

  setQuality(q: GraphicsQuality): void {
    this.quality = q
    try {
      localStorage.setItem('tokyo_graphics_quality', q)
    } catch (_) {}
    for (const cb of this.listeners) {
      cb(q)
    }
  }

  toggleQuality(): GraphicsQuality {
    const next = this.quality === 'low' ? 'high' : 'low'
    this.setQuality(next)
    return next
  }

  onChange(cb: (quality: GraphicsQuality) => void): () => void {
    this.listeners.push(cb)
    return () => {
      const idx = this.listeners.indexOf(cb)
      if (idx >= 0) this.listeners.splice(idx, 1)
    }
  }
}

export const Settings = new SettingsManager()

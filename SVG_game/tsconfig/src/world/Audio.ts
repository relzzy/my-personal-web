export class AudioManager {
  private ctx: AudioContext | null = null
  private ambientNode: GainNode | null = null
  private stepTimer = 0
  private stepInterval = 0.44

  init(): void {
    if (this.ctx) return
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AudioContextClass) return
    this.ctx = new AudioContextClass()

    // Start background city ambience
    this.startAmbience()
  }

  resume(): void {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  private startAmbience(): void {
    if (!this.ctx) return

    // Distant Tokyo night hum: Brown noise filtered through lowpass
    const bufferSize = this.ctx.sampleRate * 2
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const output = buffer.getChannelData(0)
    let lastOut = 0.0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      output[i] = (lastOut + 0.02 * white) / 1.02
      lastOut = output[i]
      output[i] *= 3.5
    }

    const whiteNoise = this.ctx.createBufferSource()
    whiteNoise.buffer = buffer
    whiteNoise.loop = true

    const filter = this.ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(140, this.ctx.currentTime)

    this.ambientNode = this.ctx.createGain()
    this.ambientNode.gain.setValueAtTime(0.18, this.ctx.currentTime)

    whiteNoise.connect(filter)
    filter.connect(this.ambientNode)
    this.ambientNode.connect(this.ctx.destination)

    whiteNoise.start()
  }

  updateFootsteps(dt: number, isMoving: boolean, surface: 'road' | 'walk' | 'tile' | 'park'): void {
    if (!isMoving) {
      this.stepTimer = this.stepInterval * 0.75
      return
    }

    this.stepTimer += dt
    if (this.stepTimer >= this.stepInterval) {
      this.stepTimer = 0
      this.playFootstep(surface)
    }
  }

  playFootstep(surface: 'road' | 'walk' | 'tile' | 'park'): void {
    if (!this.ctx) return

    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    const now = this.ctx.currentTime

    if (surface === 'tile') {
      osc.frequency.setValueAtTime(320, now)
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.045)
      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045)
    } else if (surface === 'walk') {
      osc.frequency.setValueAtTime(240, now)
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.055)
      gain.gain.setValueAtTime(0.1, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055)
    } else if (surface === 'road') {
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.065)
      gain.gain.setValueAtTime(0.12, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.065)
    } else {
      // Grass / Park
      osc.frequency.setValueAtTime(140, now)
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.05)
      gain.gain.setValueAtTime(0.06, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)
    }

    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.07)
  }

  playVendingSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Coin insert click
    const osc1 = this.ctx.createOscillator()
    const gain1 = this.ctx.createGain()
    osc1.frequency.setValueAtTime(2400, now)
    osc1.frequency.exponentialRampToValueAtTime(800, now + 0.03)
    gain1.gain.setValueAtTime(0.15, now)
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.03)
    osc1.connect(gain1)
    gain1.connect(this.ctx.destination)
    osc1.start(now)
    osc1.stop(now + 0.04)

    // Motorized dispense whir
    const osc2 = this.ctx.createOscillator()
    const gain2 = this.ctx.createGain()
    osc2.frequency.setValueAtTime(280, now + 0.08)
    osc2.frequency.linearRampToValueAtTime(320, now + 0.25)
    gain2.gain.setValueAtTime(0.08, now + 0.08)
    gain2.gain.linearRampToValueAtTime(0.001, now + 0.28)
    osc2.connect(gain2)
    gain2.connect(this.ctx.destination)
    osc2.start(now + 0.08)
    osc2.stop(now + 0.29)

    // Heavy can drop thump
    const osc3 = this.ctx.createOscillator()
    const gain3 = this.ctx.createGain()
    osc3.frequency.setValueAtTime(180, now + 0.32)
    osc3.frequency.exponentialRampToValueAtTime(40, now + 0.45)
    gain3.gain.setValueAtTime(0.35, now + 0.32)
    gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.45)
    osc3.connect(gain3)
    gain3.connect(this.ctx.destination)
    osc3.start(now + 0.32)
    osc3.stop(now + 0.46)
  }

  playElevatorChime(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // 2-tone melodic chime: High tone then lower tone
    const t1 = this.ctx.createOscillator()
    const g1 = this.ctx.createGain()
    t1.frequency.setValueAtTime(880, now) // A5
    g1.gain.setValueAtTime(0.2, now)
    g1.gain.exponentialRampToValueAtTime(0.001, now + 0.6)
    t1.connect(g1)
    g1.connect(this.ctx.destination)
    t1.start(now)
    t1.stop(now + 0.65)

    const t2 = this.ctx.createOscillator()
    const g2 = this.ctx.createGain()
    t2.frequency.setValueAtTime(659.25, now + 0.22) // E5
    g2.gain.setValueAtTime(0.25, now + 0.22)
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.95)
    t2.connect(g2)
    g2.connect(this.ctx.destination)
    t2.start(now + 0.22)
    t2.stop(now + 1.0)
  }

  playCatMeow(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.frequency.setValueAtTime(550, now)
    osc.frequency.linearRampToValueAtTime(820, now + 0.18)
    osc.frequency.linearRampToValueAtTime(620, now + 0.42)

    gain.gain.setValueAtTime(0.01, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.08)
    gain.gain.linearRampToValueAtTime(0.12, now + 0.28)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45)

    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.46)
  }

  playCatPurr(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Low rumbly feline purr: 85 Hz carrier modulated by 26 Hz LFO
    const carrier = this.ctx.createOscillator()
    carrier.type = 'triangle'
    carrier.frequency.setValueAtTime(85, now)

    const lfo = this.ctx.createOscillator()
    lfo.type = 'sine'
    lfo.frequency.setValueAtTime(26, now)

    const lfoGain = this.ctx.createGain()
    lfoGain.gain.setValueAtTime(35, now)

    const purrGain = this.ctx.createGain()
    purrGain.gain.setValueAtTime(0.01, now)
    purrGain.gain.linearRampToValueAtTime(0.22, now + 0.15)
    purrGain.gain.setValueAtTime(0.22, now + 1.2)
    purrGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6)

    lfo.connect(lfoGain)
    lfoGain.connect(carrier.frequency)
    carrier.connect(purrGain)
    purrGain.connect(this.ctx.destination)

    lfo.start(now)
    carrier.start(now)
    lfo.stop(now + 1.65)
    carrier.stop(now + 1.65)
  }

  playCrosswalkChime(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Classic Tokyo "Piyo-Piyo" acoustic signal
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.frequency.setValueAtTime(1800, now)
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.12)
    gain.gain.setValueAtTime(0.15, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14)
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.15)
  }

  playFamilyMartChime(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Iconic Japanese Konbini Doorbell Chime
    const notes = [
      { f: 739.99, t: 0.0, d: 0.18 },  // F#5
      { f: 587.33, t: 0.18, d: 0.18 }, // D5
      { f: 440.0, t: 0.36, d: 0.18 },  // A4
      { f: 587.33, t: 0.54, d: 0.18 }, // D5
      { f: 659.25, t: 0.72, d: 0.18 }, // E5
      { f: 880.0, t: 0.90, d: 0.40 },  // A5
      { f: 659.25, t: 1.35, d: 0.18 }, // E5
      { f: 739.99, t: 1.53, d: 0.18 }, // F#5
      { f: 659.25, t: 1.71, d: 0.18 }, // E5
      { f: 440.0, t: 1.89, d: 0.18 },  // A4
      { f: 587.33, t: 2.07, d: 0.45 }, // D5
    ]

    for (const n of notes) {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(n.f, now + n.t)
      gain.gain.setValueAtTime(0.16, now + n.t)
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d)
      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start(now + n.t)
      osc.stop(now + n.t + n.d + 0.05)
    }
  }

  playSlidingDoorSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Soft pneumatic hiss of motorized glass doors
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.4)
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
    }

    const noise = this.ctx.createBufferSource()
    noise.buffer = buffer

    const filter = this.ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(800, now)
    filter.Q.setValueAtTime(2.0, now)

    const gain = this.ctx.createGain()
    gain.gain.setValueAtTime(0.08, now)
    gain.gain.linearRampToValueAtTime(0.001, now + 0.38)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(this.ctx.destination)

    noise.start(now)
  }

  playSipWaterSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.frequency.setValueAtTime(600, now)
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.14)
    gain.gain.setValueAtTime(0.12, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14)
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.15)
  }

  playDeskBellSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const osc2 = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(2093, now) // C7 crisp high chime
    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(3135, now) // G7 overtone

    gain.gain.setValueAtTime(0.22, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1)

    osc.connect(gain)
    osc2.connect(gain)
    gain.connect(this.ctx.destination)

    osc.start(now)
    osc2.start(now)
    osc.stop(now + 1.1)
    osc2.stop(now + 1.1)
  }

  playRamenTicketSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // 1. Dual-tone button press chime (D5 then A5)
    const osc1 = this.ctx.createOscillator()
    const gain1 = this.ctx.createGain()
    osc1.frequency.setValueAtTime(587.33, now)
    gain1.gain.setValueAtTime(0.15, now)
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12)
    osc1.connect(gain1)
    gain1.connect(this.ctx.destination)
    osc1.start(now)
    osc1.stop(now + 0.12)

    const osc2 = this.ctx.createOscillator()
    const gain2 = this.ctx.createGain()
    osc2.frequency.setValueAtTime(880.0, now + 0.1)
    gain2.gain.setValueAtTime(0.18, now + 0.1)
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35)
    osc2.connect(gain2)
    gain2.connect(this.ctx.destination)
    osc2.start(now + 0.1)
    osc2.stop(now + 0.35)

    // 2. Ticket thermal printer mechanism buzz (fast bandpass noise)
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.25)
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI * 40)
    }
    const noise = this.ctx.createBufferSource()
    noise.buffer = buffer
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(1400, now + 0.25)
    const noiseGain = this.ctx.createGain()
    noiseGain.gain.setValueAtTime(0.08, now + 0.25)
    noiseGain.gain.linearRampToValueAtTime(0.001, now + 0.5)

    noise.connect(filter)
    filter.connect(noiseGain)
    noiseGain.connect(this.ctx.destination)
    noise.start(now + 0.25)
  }

  playBikeBellSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Classic thumb-lever bicycle bell (two rapid bright dings)
    for (let d = 0; d < 2; d++) {
      const t = now + d * 0.12
      const osc = this.ctx.createOscillator()
      const osc2 = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(2637, t) // E7
      osc2.type = 'sine'
      osc2.frequency.setValueAtTime(4186, t) // C8 harmonic

      gain.gain.setValueAtTime(0.18, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35)

      osc.connect(gain)
      osc2.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start(t)
      osc2.start(t)
      osc.stop(t + 0.36)
      osc2.stop(t + 0.36)
    }
  }

  playFountainDrinkSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // 1. Water bubbling trickle (frequency modulated short bubbles)
    for (let i = 0; i < 4; i++) {
      const t = now + i * 0.08
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      const freq = 600 + Math.random() * 400
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, t)
      osc.frequency.exponentialRampToValueAtTime(freq + 250, t + 0.06)

      gain.gain.setValueAtTime(0.08, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06)

      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start(t)
      osc.stop(t + 0.07)
    }

    // 2. Refreshing gulp / swallow sound
    const gulp = this.ctx.createOscillator()
    const gulpGain = this.ctx.createGain()
    gulp.frequency.setValueAtTime(260, now + 0.35)
    gulp.frequency.exponentialRampToValueAtTime(110, now + 0.5)
    gulpGain.gain.setValueAtTime(0.12, now + 0.35)
    gulpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.52)
    gulp.connect(gulpGain)
    gulpGain.connect(this.ctx.destination)
    gulp.start(now + 0.35)
    gulp.stop(now + 0.53)
  }

  playSwingCreakSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Metallic chain link creak / friction squeak
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(980, now)
    osc.frequency.linearRampToValueAtTime(1420, now + 0.08)
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.22)

    gain.gain.setValueAtTime(0.05, now)
    gain.gain.linearRampToValueAtTime(0.08, now + 0.08)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24)

    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.25)
  }

  playSpringRockerSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Heavy coiled spring "boing" oscillation
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(180, now)
    osc.frequency.linearRampToValueAtTime(320, now + 0.06)
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.38)

    gain.gain.setValueAtTime(0.16, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4)

    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.42)
  }

  playSlideSound(): void {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    // Whoosh / friction sweep down a smooth metal slide
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(420, now)
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.45)

    gain.gain.setValueAtTime(0.12, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.1)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.48)

    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start(now)
    osc.stop(now + 0.5)
  }
}


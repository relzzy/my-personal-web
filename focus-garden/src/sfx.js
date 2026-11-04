// Web Audio notification: a soft three-note chime, no audio assets needed.

export class Sound {
  #ctx = null;

  ensure(ctx) {
    if (this.#ctx) return this.#ctx;
    const AC = (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext)) ||
               (typeof globalThis !== "undefined" && (globalThis.AudioContext || globalThis.webkitAudioContext));
    if (!AC) return null;
    try {
      this.#ctx = new AC();
    } catch {
      return null;
    }
    return this.#ctx;
  }

  playChime({ ctx, volume = 0.5 } = {}) {
    const ac = this.ensure(ctx);
    if (!ac || volume <= 0) return;
    if (ac.state === "suspended") {
      ac.resume().catch(() => {});
    }
    const t0 = ac.currentTime + 0.02;
    const freqs = [659.26, 831.78, 1046.5]; // E5 G5 B5 — warm ascending triad
    freqs.forEach((f, i) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const dur = 0.5 + i * 0.12;
      const amp = volume * 0.18 * (1 - i * 0.2);
      osc.type = "sine";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0, t0 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(amp, t0 + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.08 + dur);
      osc.connect(gain).connect(ac.destination);
      osc.start(t0 + i * 0.08);
      osc.stop(t0 + i * 0.08 + dur + 0.1);
    });
  }

  // Tiny "leaf" blip used for quick UI feedback (optional).
  blip({ ctx, volume = 0.3, freq = 1200 } = {}) {
    const ac = this.ensure(ctx);
    if (!ac || volume <= 0) return;
    if (ac.state === "suspended") {
      ac.resume().catch(() => {});
    }
    const t0 = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume * 0.1, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);
    osc.connect(gain).connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + 0.15);
  }
}

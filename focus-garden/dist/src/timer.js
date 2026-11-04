// Pomodoro timer driven by wall clock (Date.now()), so pauses, drift and
// background tab visibility always resolve accurately.
// Exposes:
//  - setDurations({ focus, short, long, cycles })   (minutes; read live)
//  - start() / pause() / reset()
//  - onTick(remainingMs, totalMs)          called periodically and on rAF
//  - onFinish(mode, minutes)               once per completed round (minutes, not seconds)
//  - onPhaseChange({ from, to })           phase switches

export const MODE_LABELS = {
  focus: "Focus",
  short_break: "Short break",
  long_break: "Long break",
};

export function getModeLabel(mode) {
  return MODE_LABELS[mode] ?? "Focus";
}

export class PomodoroTimer {
  constructor({ clock = {} } = {}) {
    this._durations = { focus: 25, short: 5, long: 15, cycles: 4 };
    this._mode = "focus";
    this._running = false;
    this._sessionsInCycle = 0;
    this._remainingMs = this._dur("focus") * 60 * 1000;
    this._targetEndTime = null;

    // Clock hooks (injectable for testing)
    this._now = clock.now ? clock.now : () => Date.now();
    this._intervalId = null;
    this._rafId = null;

    this._onTick = null;
    this._onFinish = null;
    this._onPhaseChange = null;

    const d = typeof window !== "undefined" ? window : globalThis;
    if (d && typeof d.addEventListener === "function") {
      d.addEventListener("visibilitychange", () => this._onVisibility());
    }
  }

  // ---- public API ----------------------------------------------------
  get isRunning() {
    return this._running;
  }

  get mode() {
    return this._mode;
  }

  get remainingMs() {
    return Math.max(0, Math.ceil(this._remainingMs));
  }

  get totalMs() {
    return this._dur(this._mode) * 60 * 1000;
  }

  get sessionsInCycle() {
    return this._sessionsInCycle;
  }

  get durations() {
    return { ...this._durations };
  }

  set onTick(cb) { this._onTick = cb; }
  set onFinish(cb) { this._onFinish = cb; }
  set onPhaseChange(cb) { this._onPhaseChange = cb; }

  _dur(key) {
    const normKey = key === "short_break" ? "short" : key === "long_break" ? "long" : "focus";
    const d = this._durations?.[normKey] ?? (normKey === "focus" ? 25 : normKey === "short" ? 5 : 15);
    return Math.max(1, Number(d) || 25);
  }

  setDurations(d) {
    if (d && typeof d === "object") {
      this._durations = { ...this._durations, ...d };
    }
    // Re-anchor remaining time if not running
    if (!this._running) {
      this._remainingMs = this._dur(this._mode) * 60 * 1000;
      this._notifyTick();
    }
  }

  start() {
    if (this._running) return;
    this._running = true;
    this._targetEndTime = this._now() + this._remainingMs;
    this._startLoop();
    this._onPhaseChange?.({ from: this._mode, to: this._mode });
    this._notifyTick();
  }

  pause() {
    if (!this._running) return;
    if (this._targetEndTime !== null) {
      this._remainingMs = Math.max(0, this._targetEndTime - this._now());
    }
    this._running = false;
    this._stopLoop();
    this._notifyTick();
  }

  reset() {
    this.pause();
    this._mode = "focus";
    this._sessionsInCycle = 0;
    this._remainingMs = this._dur("focus") * 60 * 1000;
    this._targetEndTime = null;
    this._onPhaseChange?.({ from: this._mode, to: this._mode });
    this._notifyTick();
  }

  // ---- internals -------------------------------------------------------
  _startLoop() {
    this._stopLoop();

    // 1) Interval runs reliably in background tabs (even when rAF throttles)
    if (typeof setInterval !== "undefined") {
      this._intervalId = setInterval(() => {
        this._advance();
      }, 200);
      if (this._intervalId && typeof this._intervalId.unref === "function") {
        this._intervalId.unref();
      }
    }

    // 2) rAF gives smooth 60fps ring animation when tab is active
    if (typeof requestAnimationFrame !== "undefined") {
      const step = () => {
        if (!this._running) return;
        this._advance();
        this._rafId = requestAnimationFrame(step);
      };
      this._rafId = requestAnimationFrame(step);
    }
  }

  _stopLoop() {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
    if (this._rafId !== null) {
      if (typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this._rafId);
      }
      this._rafId = null;
    }
  }

  _advance() {
    if (!this._running || this._targetEndTime === null) return;

    const remaining = this._targetEndTime - this._now();
    this._remainingMs = Math.max(0, remaining);

    if (this._remainingMs <= 0) {
      this._stopLoop();
      this._running = false;
      this._finish();
      return;
    }

    this._notifyTick();
  }

  _onVisibility() {
    if (this._running) {
      // Re-evaluate immediately from wall-clock target time
      this._advance();
    }
  }

  _finish() {
    const fromMode = this._mode;
    const mins = this._dur(fromMode); // exact minutes configured for this mode
    this._remainingMs = 0;
    this._notifyTick();

    this._onFinish?.(fromMode, mins);

    if (fromMode === "focus") {
      this._sessionsInCycle++;
      const cycleLimit = this._durations?.cycles ?? 4;
      const next = this._sessionsInCycle >= cycleLimit ? "long_break" : "short_break";
      this.#set(next);
      this.start(); // auto-advance into the break
    } else if (fromMode === "long_break") {
      // Full cycle finished -> reset cycle count and prepare focus
      this._sessionsInCycle = 0;
      this.#set("focus");
    } else {
      // Short break finished -> prepare focus without resetting cycle count!
      this.#set("focus");
    }

    this._onPhaseChange?.({ from: fromMode, to: this._mode });
    this._notifyTick();
  }

  #set(mode) {
    const from = this._mode;
    this._mode = mode;
    this._remainingMs = this._dur(mode) * 60 * 1000;
    this._targetEndTime = this._running ? this._now() + this._remainingMs : null;
    if (from !== mode) {
      this._onPhaseChange?.({ from, to: mode });
    }
  }

  _notifyTick() {
    this._onTick?.(this.remainingMs, this.totalMs);
  }
}

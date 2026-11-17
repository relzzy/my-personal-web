/**
 * Cinematic Screen Fade Transition Utility
 * Provides smooth blackout transitions for floor elevator rides and room transitions.
 */
let faderEl: HTMLElement | null = null

function getFader(): HTMLElement | null {
  if (!faderEl) {
    faderEl = document.getElementById('screen-fader')
  }
  return faderEl
}

export function screenFade(onBlack: () => void, durationMs = 350): void {
  const el = getFader()
  if (!el) {
    onBlack()
    return
  }

  el.classList.add('active')

  setTimeout(() => {
    try {
      onBlack()
    } finally {
      setTimeout(() => {
        el.classList.remove('active')
      }, 120)
    }
  }, durationMs)
}

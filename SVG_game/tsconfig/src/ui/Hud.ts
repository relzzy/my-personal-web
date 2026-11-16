export class Hud {
  private locEl: HTMLElement | null
  private crosshairEl: HTMLElement | null
  private promptEl: HTMLElement | null
  private toastEl: HTMLElement | null
  private overlayEl: HTMLElement | null

  constructor() {
    this.locEl = document.getElementById('location')
    this.crosshairEl = document.getElementById('crosshair')
    this.promptEl = document.getElementById('prompt')
    this.toastEl = document.getElementById('toast')
    this.overlayEl = document.getElementById('overlay')
  }

  update(locationText: string, promptText: string, toastText: string): void {
    if (this.locEl && this.locEl.textContent !== locationText) {
      this.locEl.textContent = locationText
    }

    if (this.promptEl) {
      if (promptText) {
        this.promptEl.innerHTML = `<kbd>E</kbd> ${promptText}`
        this.crosshairEl?.classList.add('active')
      } else {
        this.promptEl.innerHTML = ''
        this.crosshairEl?.classList.remove('active')
      }
    }

    if (this.toastEl) {
      this.toastEl.textContent = toastText
    }
  }

  showOverlay(): void {
    this.overlayEl?.classList.remove('hidden')
  }

  hideOverlay(): void {
    this.overlayEl?.classList.add('hidden')
  }

  isOverlayVisible(): boolean {
    return !this.overlayEl?.classList.contains('hidden')
  }
}

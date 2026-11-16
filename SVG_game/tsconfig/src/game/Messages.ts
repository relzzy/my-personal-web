export class MessageBus {
  text = ''
  private timer = 0

  show(text: string, seconds = 3.6): void {
    this.text = text
    this.timer = seconds
  }

  update(dt: number): void {
    if (this.timer <= 0) return
    this.timer -= dt
    if (this.timer <= 0) this.text = ''
  }
}

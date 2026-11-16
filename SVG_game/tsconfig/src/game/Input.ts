const held = new Set<string>()

const blocked = new Set([
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Space',
])

export function installInput(): void {
  window.addEventListener('keydown', (e) => {
    held.add(e.code)
    if (blocked.has(e.code)) e.preventDefault()
  })
  window.addEventListener('keyup', (e) => {
    held.delete(e.code)
  })
  window.addEventListener('blur', () => held.clear())
}

export function key(code: string): boolean {
  return held.has(code)
}

export function axis(neg: string[], pos: string[]): number {
  let v = 0
  for (const c of neg) if (held.has(c)) v -= 1
  for (const c of pos) if (held.has(c)) v += 1
  return Math.max(-1, Math.min(1, v))
}

import * as THREE from 'three'

const unit = new THREE.BoxGeometry(1, 1, 1)
const quat = new THREE.Quaternion()
const pos = new THREE.Vector3()
const scl = new THREE.Vector3()
const matrix = new THREE.Matrix4()

export function coloredBox(
  w: number,
  h: number,
  d: number,
  color: THREE.Color,
  x: number,
  y: number,
  z: number,
): THREE.BufferGeometry {
  const g = unit.clone()
  paint(g, color)
  pos.set(x, y, z)
  scl.set(w, h, d)
  matrix.compose(pos, quat, scl)
  g.applyMatrix4(matrix)
  return g
}

export function paint(g: THREE.BufferGeometry, color: THREE.Color): THREE.BufferGeometry {
  const count = g.getAttribute('position').count
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    arr[i * 3] = color.r
    arr[i * 3 + 1] = color.g
    arr[i * 3 + 2] = color.b
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3))
  return g
}

export function mergeParts(parts: THREE.BufferGeometry[]): THREE.BufferGeometry | null {
  if (parts.length === 0) return null
  const { mergeGeometries } = requireMerge()
  const merged = mergeGeometries(parts, false)
  for (const p of parts) p.dispose()
  return merged
}

let mergeFn: ((g: THREE.BufferGeometry[], useGroups?: boolean) => THREE.BufferGeometry | null) | null = null

function requireMerge(): {
  mergeGeometries: (g: THREE.BufferGeometry[], useGroups?: boolean) => THREE.BufferGeometry | null
} {
  if (!mergeFn) throw new Error('Geometry merger is not ready')
  return { mergeGeometries: mergeFn }
}

export async function loadMerger(): Promise<void> {
  const mod = await import('three/addons/utils/BufferGeometryUtils.js')
  mergeFn = mod.mergeGeometries
}

export function addMesh(
  parent: THREE.Object3D,
  geo: THREE.BufferGeometry | null,
  material: THREE.Material,
  opts?: { cast?: boolean; receive?: boolean },
): THREE.Mesh | null {
  if (!geo) return null
  const mesh = new THREE.Mesh(geo, material)
  mesh.castShadow = opts?.cast ?? false
  mesh.receiveShadow = opts?.receive ?? false
  mesh.updateMatrix()
  mesh.matrixAutoUpdate = false
  parent.add(mesh)
  return mesh
}

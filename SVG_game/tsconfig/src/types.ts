export interface AABB {
  minX: number
  minY: number
  minZ: number
  maxX: number
  maxY: number
  maxZ: number
}

export interface Tickable {
  update(dt: number, player: { x: number; z: number; feetY: number }): void
}

export type FaceId = 'n' | 's' | 'e' | 'w'
export type GroundKind = 'home' | 'lobby' | 'konbini' | 'ramen' | 'cafe'

export interface BuildingSpec {
  id: string
  name: string
  x: number
  z: number
  w: number
  d: number
  floors: number
  wall: string
  trim: string
  balcony: string
  bay: number
  front: FaceId
  open: FaceId[]
  balconyFaces: FaceId[]
  balconies: number[]
  ground: GroundKind
  enterable: boolean
  doorFace: FaceId
  doorAlong: number
  backDoor?: { face: FaceId; along: number }
  extraShop?: FaceId[]
  sign?: { text: string; sub?: string; bg: string; fg: string }
  awning?: string
  seed: number
}

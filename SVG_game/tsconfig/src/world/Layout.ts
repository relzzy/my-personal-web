import type { BuildingSpec } from '../types'

export interface Zone {
  name: string
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

// Elevation constants
export const ELEV_ROAD = 0.0
export const ELEV_SIDEWALK = 0.15
export const ELEV_INTERIOR = 0.15

export function isRoad(x: number, z: number): boolean {
  // Main Street (Chuo-dori): E-W road between Z = -3.5 and Z = 3.5
  if (z >= -3.5 && z <= 3.5 && x >= -55 && x <= 55) {
    return true
  }
  // North Street (Kita-gai): N-S road branching at X = [13.5, 18.5], Z from 3.5 to 40
  if (x >= 13.5 && x <= 18.5 && z >= 3.5 && z <= 40) {
    return true
  }
  // South Street (Minami-dori): N-S road branching at X = [-16.5, -11.5], Z from -40 to -3.5
  if (x >= -16.5 && x <= -11.5 && z >= -40 && z <= -3.5) {
    return true
  }
  return false
}

export function groundAt(x: number, z: number): number {
  if (isRoad(x, z)) {
    return ELEV_ROAD
  }
  return ELEV_SIDEWALK
}

export function getLocationName(x: number, z: number): string {
  // Sun Heights Suite 402 (Your Room)
  if (x >= -6 && x <= 6 && z >= 78 && z <= 92) {
    return 'Sun Heights — Suite 402 (Your Room)'
  }
  // Sun Heights 4F Elevator Lounge & Corridor
  if (x >= -8.5 && x <= 8.5 && z >= 60 && z <= 72) {
    return 'Sun Heights — 4F Elevator Lounge'
  }
  // Apartment Lobby & Interior
  if (x >= -4.5 && x <= 4.5 && z >= 12.8 && z <= 22) {
    return 'Sun Heights — Entrance Lobby'
  }
  // Konbini Interior
  if (x >= 21.8 && x <= 33 && z >= 9 && z <= 22) {
    return 'FamilyKonbini — Store'
  }
  // Ramen Shop
  if (x >= 1.5 && x <= 10.5 && z >= 7.5 && z <= 18) {
    return 'Menya Tokyo — Ramen Bar'
  }
  // Cafe Terrace / Shop
  if (x >= -3 && x <= 10.5 && z >= 24 && z <= 36) {
    return 'Kissaten Mame — Cafe'
  }
  // Pocket Park
  if (x >= -8.5 && x <= 9.5 && z >= -36.5 && z <= -7.5) {
    return 'Sakura Pocket Park (桜公園)'
  }
  // Residential Alley
  if ((x >= 4.5 && x <= 13.5 && z >= 16 && z <= 24) || (x >= -5 && x <= 13.5 && z >= 21 && z <= 24)) {
    return 'Rojiura — Residential Alley'
  }
  // North Street
  if (x >= 10.5 && x <= 21.5 && z >= 3.5 && z <= 42) {
    return 'Kita-gai — Shopping Street'
  }
  // South Street
  if (x >= -19.5 && x <= -8.5 && z >= -42 && z <= -3.5) {
    return 'Minami-dori — Residential St'
  }
  // Main Street Crosswalks / Intersection
  if (Math.abs(z) <= 5) {
    if (x >= 11 && x <= 21) return 'Chuo-dori — North Crosswalk'
    if (x >= -19 && x <= -9) return 'Chuo-dori — South Crosswalk'
    return 'Chuo-dori — Central Avenue'
  }
  // Default to neighborhood
  return 'Tokyo — Residential District'
}

// Building Specifications for the neighborhood
export const NEIGHBORHOOD_BUILDINGS: BuildingSpec[] = [
  // 1. Starting Apartment: Sun Heights (Enterable lobby)
  {
    id: 'b-sunheights',
    name: 'Sun Heights Mansion',
    x: 0,
    z: 17.5,
    w: 9,
    d: 10,
    floors: 4,
    wall: '#262d38',
    trim: '#3a4454',
    balcony: '#404c5e',
    bay: 3,
    front: 's',
    open: ['s'],
    balconyFaces: ['s'],
    balconies: [1, 2, 3],
    ground: 'lobby',
    enterable: true,
    doorFace: 's',
    doorAlong: 0,
    seed: 101,
  },
  // 2. Ramen Shop: Menya Tokyo (North of Main St, west of North St)
  {
    id: 'b-ramen',
    name: 'Menya Tokyo (Ramen)',
    x: 6,
    z: 12.5,
    w: 7,
    d: 9,
    floors: 3,
    wall: '#2b2622',
    trim: '#423a32',
    balcony: '#383028',
    bay: 2,
    front: 's',
    open: ['s'],
    balconyFaces: ['s'],
    balconies: [1, 2],
    ground: 'ramen',
    enterable: true,
    doorFace: 's',
    doorAlong: 0.2,
    sign: { text: 'らーめん 麺処', sub: 'MENYA TOKYO', bg: '#8a1f18', fg: '#ffebc4' },
    awning: '#8a1f18',
    seed: 202,
  },
  // 3. Convenience Store: FamilyKonbini (East side of North St)
  {
    id: 'b-konbini',
    name: 'FamilyKonbini Store',
    x: 27,
    z: 15.5,
    w: 11,
    d: 13,
    floors: 3,
    wall: '#282d34',
    trim: '#3c4550',
    balcony: '#333b47',
    bay: 3,
    front: 'w',
    open: ['w'],
    balconyFaces: ['w'],
    balconies: [1, 2],
    ground: 'konbini',
    enterable: true,
    doorFace: 'w',
    doorAlong: 0,
    sign: { text: 'CONVENIENCE STORE', sub: '24H コンビニエンス', bg: '#0d6b42', fg: '#ffffff' },
    awning: '#0d6b42',
    seed: 303,
  },
  // 4. Cafe Mame (West side of North St, north of alley)
  {
    id: 'b-cafe',
    name: 'Cafe Mame',
    x: 3.5,
    z: 30,
    w: 11,
    d: 10,
    floors: 3,
    wall: '#2a2723',
    trim: '#453c33',
    balcony: '#3e352b',
    bay: 3,
    front: 'e',
    open: ['e'],
    balconyFaces: ['e'],
    balconies: [1, 2],
    ground: 'cafe',
    enterable: true,
    doorFace: 'e',
    doorAlong: 0,
    sign: { text: '喫茶 TOKYO CAFE', sub: 'ROASTERY & BEANS', bg: '#4a2f1c', fg: '#f4ebd8' },
    awning: '#4a2f1c',
    seed: 404,
  },
  // 5. Kita-gai Commercial/Res North-East (North of Konbini)
  {
    id: 'b-ne-apartments',
    name: 'Mori Building',
    x: 27,
    z: 32,
    w: 11,
    d: 14,
    floors: 5,
    wall: '#232a35',
    trim: '#384355',
    balcony: '#2e3848',
    bay: 3,
    front: 'w',
    open: ['w'],
    balconyFaces: ['w'],
    balconies: [1, 2, 3, 4],
    ground: 'home',
    enterable: false,
    doorFace: 'w',
    doorAlong: 0,
    sign: { text: '森クリニック / 薬局', sub: 'PHARMACY & CLINIC', bg: '#1c4a5c', fg: '#e8f4f8' },
    seed: 505,
  },
  // 6. Main Street North-West Mansion (Corner of Main & North side)
  {
    id: 'b-nw-mansion',
    name: 'Chuo Grand Residence',
    x: -24,
    z: 15.5,
    w: 22,
    d: 13,
    floors: 5,
    wall: '#222830',
    trim: '#343e4c',
    balcony: '#2b3340',
    bay: 6,
    front: 's',
    open: ['s'],
    balconyFaces: ['s'],
    balconies: [1, 2, 3, 4],
    ground: 'home',
    enterable: false,
    doorFace: 's',
    doorAlong: -0.3,
    sign: { text: '白金クリーニング', sub: 'DRY CLEANERS & LAUNDRY', bg: '#25447a', fg: '#eef4ff' },
    awning: '#25447a',
    seed: 606,
  },
  // 7. Main Street Far-East North Block
  {
    id: 'b-fe-north',
    name: 'Higashi Heights',
    x: 43,
    z: 15.5,
    w: 15,
    d: 13,
    floors: 4,
    wall: '#26292e',
    trim: '#3a3f47',
    balcony: '#31363e',
    bay: 4,
    front: 's',
    open: ['s'],
    balconyFaces: ['s'],
    balconies: [1, 2, 3],
    ground: 'home',
    enterable: false,
    doorFace: 's',
    doorAlong: 0,
    sign: { text: '書店 本屋', sub: 'BOOKSTORE & CAFE', bg: '#6b301e', fg: '#fbece2' },
    seed: 707,
  },
  // 8. South-West Corner Commercial Block (Corner of Main & Minami-dori)
  {
    id: 'b-sw-commercial',
    name: 'Minami Square',
    x: -27,
    z: -15.5,
    w: 15,
    d: 13,
    floors: 4,
    wall: '#2c2925',
    trim: '#443f38',
    balcony: '#37322c',
    bay: 4,
    front: 'n',
    open: ['n', 'e'],
    balconyFaces: ['n'],
    balconies: [1, 2, 3],
    ground: 'home',
    enterable: false,
    doorFace: 'n',
    doorAlong: 0,
    sign: { text: '和食 酒処 居酒屋', sub: 'TRADITIONAL IZAKAYA', bg: '#8a331a', fg: '#ffeeda' },
    awning: '#8a331a',
    seed: 808,
  },
  // 9. South-West Residential Houses (Along Minami-dori)
  {
    id: 'b-sw-houses',
    name: 'Minami Residences',
    x: -27,
    z: -32,
    w: 15,
    d: 14,
    floors: 3,
    wall: '#282b2d',
    trim: '#3c4145',
    balcony: '#32363a',
    bay: 4,
    front: 'e',
    open: ['e'],
    balconyFaces: ['e'],
    balconies: [1, 2],
    ground: 'home',
    enterable: false,
    doorFace: 'e',
    doorAlong: 0,
    seed: 909,
  },
  // 10. South-East Main Street Mansion (East of Park)
  {
    id: 'b-se-mansion',
    name: 'Parkside Court',
    x: 23,
    z: -15.5,
    w: 22,
    d: 13,
    floors: 5,
    wall: '#212630',
    trim: '#323a48',
    balcony: '#29303c',
    bay: 6,
    front: 'n',
    open: ['n'],
    balconyFaces: ['n', 'w'],
    balconies: [1, 2, 3, 4],
    ground: 'home',
    enterable: false,
    doorFace: 'n',
    doorAlong: 0.2,
    sign: { text: 'パークサイド歯科', sub: 'DENTAL CLINIC', bg: '#1f5263', fg: '#e8f7fa' },
    seed: 1010,
  },
  // 11. Far East South Block
  {
    id: 'b-fe-south',
    name: 'Taito Mansion',
    x: 43,
    z: -15.5,
    w: 15,
    d: 13,
    floors: 4,
    wall: '#27292c',
    trim: '#3d4045',
    balcony: '#33363a',
    bay: 4,
    front: 'n',
    open: ['n'],
    balconyFaces: ['n'],
    balconies: [1, 2, 3],
    ground: 'home',
    enterable: false,
    doorFace: 'n',
    doorAlong: 0,
    seed: 1111,
  },
  // 12. Far West North Block
  {
    id: 'b-fw-north',
    name: 'Nishi Heights',
    x: -44,
    z: 15.5,
    w: 14,
    d: 13,
    floors: 4,
    wall: '#242a32',
    trim: '#363f4b',
    balcony: '#2d3540',
    bay: 4,
    front: 's',
    open: ['s'],
    balconyFaces: ['s'],
    balconies: [1, 2, 3],
    ground: 'home',
    enterable: false,
    doorFace: 's',
    doorAlong: 0,
    seed: 1212,
  },
  // 13. Far West South Block
  {
    id: 'b-fw-south',
    name: 'Nishi Court',
    x: -44,
    z: -15.5,
    w: 14,
    d: 13,
    floors: 4,
    wall: '#2a2725',
    trim: '#403b38',
    balcony: '#35312e',
    bay: 4,
    front: 'n',
    open: ['n'],
    balconyFaces: ['n'],
    balconies: [1, 2, 3],
    ground: 'home',
    enterable: false,
    doorFace: 'n',
    doorAlong: 0,
    seed: 1313,
  },
]

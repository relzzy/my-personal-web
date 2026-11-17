import * as THREE from 'three'
import type { BuildingSpec } from '../../types'
import { CollisionWorld } from '../../game/Collision'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import { Settings } from '../../game/Settings'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
  ramenSignTexture,
  ramenLanternTexture,
  ramenNorenTexture,
  ramenKenbaikiTexture,
  ramenWallTexture,
  ramenFloorTexture,
  steamMat,
  metalMat,
  postMat,
  shopGlassMat,
  signMaterial,
} from '../Materials'

export function buildRamenShop(
  group: THREE.Group,
  spec: BuildingSpec,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
  _wallMat: THREE.Material,
  trimMat: THREE.Material,
  audio?: AudioManager,
  lightManager?: LightManager,
): { light: THREE.PointLight; update: (dt: number, p: { x: number; z: number }) => void } {
  const floorH = 3.2
  const innerW = 5.8
  const innerD = 7.4
  const floorY = 0.15
  const wallH = floorH - floorY
  const wallThick = 0.35

  const interiorGroup = new THREE.Group()
  interiorGroup.name = 'ramen-interior-props'
  group.add(interiorGroup)

  // 1. FLOOR (Non-slip Charcoal Japanese Ceramic Restaurant Tiles)
  const floorMat = new THREE.MeshStandardMaterial({
    map: ramenFloorTexture(),
    roughness: 0.45,
    metalness: 0.08,
  })
  const floorGeo = new THREE.BoxGeometry(innerW, 0.05, innerD)
  const floorMesh = new THREE.Mesh(floorGeo, floorMat)
  floorMesh.position.set(spec.x, floorY + 0.025, spec.z)
  floorMesh.receiveShadow = true
  group.add(floorMesh)

  // 2. CEILING (Warm Cedar Timber Planks with Exposed Beams)
  const ceilMat = new THREE.MeshStandardMaterial({ color: 0x24160c, roughness: 0.7 })
  const ceilGeo = new THREE.BoxGeometry(innerW, 0.2, innerD)
  const ceilMesh = new THREE.Mesh(ceilGeo, ceilMat)
  ceilMesh.position.set(spec.x, floorH - 0.1, spec.z)
  group.add(ceilMesh)

  // Transverse Cedar Beams across ceiling
  const beamMat = new THREE.MeshStandardMaterial({ color: 0x3d2414, roughness: 0.6 })
  for (const bz of [-1.8, 0, 1.8]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(innerW, 0.16, 0.18), beamMat)
    beam.position.set(spec.x, floorH - 0.16, spec.z + bz)
    group.add(beam)
  }

  // 3. INTERIOR WALLS (Warm Plaster Stucco with Dark Cedar Wainscot & Battens)
  const ramenWallMat = new THREE.MeshStandardMaterial({
    map: ramenWallTexture(),
    roughness: 0.6,
    metalness: 0.02,
  })

  // North (Back) Wall
  const backGeo = new THREE.BoxGeometry(innerW, wallH, wallThick)
  const backMesh = new THREE.Mesh(backGeo, ramenWallMat)
  backMesh.position.set(spec.x, floorY + wallH / 2, spec.z + innerD / 2 - wallThick / 2)
  group.add(backMesh)
  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z + innerD / 2 - wallThick,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z + spec.d / 2 + 1,
  })

  // West Wall
  const westGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const westMesh = new THREE.Mesh(westGeo, ramenWallMat)
  westMesh.position.set(spec.x - innerW / 2 + wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(westMesh)
  colliders.add({
    minX: spec.x - spec.w / 2 - 1,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x - innerW / 2 + wallThick,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // East Wall
  const eastGeo = new THREE.BoxGeometry(wallThick, wallH, innerD)
  const eastMesh = new THREE.Mesh(eastGeo, ramenWallMat)
  eastMesh.position.set(spec.x + innerW / 2 - wallThick / 2, floorY + wallH / 2, spec.z)
  group.add(eastMesh)
  colliders.add({
    minX: spec.x + innerW / 2 - wallThick,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + spec.w / 2 + 1,
    maxY: floorH,
    maxZ: spec.z + innerD / 2,
  })

  // 4. SOUTH (FRONT) FACADE & STOREFRONT
  const doorW = 2.0
  const sideW = (innerW - doorW) / 2

  // Exterior charred timber wall finish
  const yakisugiMat = new THREE.MeshStandardMaterial({ color: 0x1c1713, roughness: 0.85 })

  // Left Front Wall
  const lfGeo = new THREE.BoxGeometry(sideW, wallH, wallThick)
  const lfMesh = new THREE.Mesh(lfGeo, yakisugiMat)
  lfMesh.position.set(spec.x - innerW / 2 + sideW / 2, floorY + wallH / 2, spec.z - innerD / 2 + wallThick / 2)
  group.add(lfMesh)
  colliders.add({
    minX: spec.x - innerW / 2,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x - doorW / 2,
    maxY: floorH,
    maxZ: spec.z - innerD / 2 + wallThick,
  })

  // Right Front Wall
  const rfGeo = new THREE.BoxGeometry(sideW, wallH, wallThick)
  const rfMesh = new THREE.Mesh(rfGeo, yakisugiMat)
  rfMesh.position.set(spec.x + innerW / 2 - sideW / 2, floorY + wallH / 2, spec.z - innerD / 2 + wallThick / 2)
  group.add(rfMesh)
  colliders.add({
    minX: spec.x + doorW / 2,
    minY: 0,
    minZ: spec.z - innerD / 2,
    maxX: spec.x + innerW / 2,
    maxY: floorH,
    maxZ: spec.z - innerD / 2 + wallThick,
  })

  // Entrance Lintel
  const lintelMesh = new THREE.Mesh(new THREE.BoxGeometry(doorW, 0.45, wallThick), trimMat)
  lintelMesh.position.set(spec.x, floorH - 0.225, spec.z - innerD / 2 + wallThick / 2)
  group.add(lintelMesh)

  // Traditional Japanese Roof Tile Awning (瓦庇 Kawara Awning) above entrance
  const eaveW = 4.8
  const eaveD = 0.65
  const eaveGeo = new THREE.BoxGeometry(eaveW, 0.08, eaveD)
  const eaveMat = new THREE.MeshStandardMaterial({ color: 0x22262d, roughness: 0.5, metalness: 0.2 })
  const eave = new THREE.Mesh(eaveGeo, eaveMat)
  eave.rotateX(0.18) // angled roof tiles
  eave.position.set(spec.x, floorH + 0.05, spec.z - innerD / 2 - 0.25)
  group.add(eave)

  // Wood Corbel Support Brackets under awning
  for (const bx of [-1.9, -0.6, 0.6, 1.9]) {
    const corbel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.35), beamMat)
    corbel.position.set(spec.x + bx, floorH - 0.12, spec.z - innerD / 2 - 0.15)
    group.add(corbel)
  }

  // =========================================================================
  // 5. CARVED WOODEN STORE SIGNBOARD (NO GLITCHES / OVERLAPS)
  // =========================================================================
  const signMat = new THREE.MeshStandardMaterial({
    map: ramenSignTexture(),
    roughness: 0.4,
    metalness: 0.05,
  })
  const signMesh = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.82, 0.1), signMat)
  signMesh.position.set(spec.x, floorH - 0.45, spec.z - innerD / 2 - 0.08)
  group.add(signMesh)

  // Two Swan-Neck Brass Spotlights illuminating the Signboard
  for (const sx of [-1.3, 1.3]) {
    const lampArm = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.25, 8), metalMat)
    lampArm.rotateX(Math.PI / 4)
    lampArm.position.set(spec.x + sx, floorH - 0.05, spec.z - innerD / 2 - 0.18)
    const lampHood = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.08, 10), metalMat)
    lampHood.rotateX(-Math.PI / 3)
    lampHood.position.set(spec.x + sx, floorH - 0.12, spec.z - innerD / 2 - 0.26)
    group.add(lampArm, lampHood)

    const signSpot = new THREE.PointLight(0xfffae0, 1.2, 2.5)
    signSpot.position.set(spec.x + sx, floorH - 0.16, spec.z - innerD / 2 - 0.25)
    if (lightManager) {
      lightManager.register({
        x: spec.x + sx,
        y: floorH - 0.16,
        z: spec.z - innerD / 2 - 0.25,
        color: 0xfffae0,
        intensity: 1.2,
        distance: 2.5,
        zone: 'Street',
      })
    } else {
      group.add(signSpot)
    }
  }

  // =========================================================================
  // 6. AUTHENTIC RED CHOCHIN LANTERNS (PROPERLY PLACED FLANKING DOORWAY)
  // =========================================================================
  // Left: 'らーめん' (Ramen) | Right: '味自慢' (Pride in Flavor)
  // Positioned lower and wider so they NEVER cover the sign!
  const lanternY = floorH - 1.25 // Y = 1.95m (well below the 2.32m sign bottom!)
  const lanternZ = spec.z - innerD / 2 - 0.38

  const createLantern = (x: number, text: string): THREE.Group => {
    const lGroup = new THREE.Group()
    lGroup.position.set(x, lanternY, lanternZ)

    // Forged black iron wall bracket arm
    const bracketPole = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.38, 8), postMat)
    bracketPole.rotateX(Math.PI / 2)
    bracketPole.position.set(0, 0.38, 0.18)
    const hangerRing = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.006, 6, 12), postMat)
    hangerRing.position.set(0, 0.38, 0)
    lGroup.add(bracketPole, hangerRing)

    // Hanging chain
    const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.14, 6), metalMat)
    chain.position.set(0, 0.31, 0)
    lGroup.add(chain)

    // Top black wooden collar
    const topCap = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.05, 16), postMat)
    topCap.position.set(0, 0.22, 0)
    lGroup.add(topCap)

    // Ribbed Japanese Vermilion Red Paper Lantern Body
    const bodyMat = new THREE.MeshStandardMaterial({
      map: ramenLanternTexture(text),
      roughness: 0.5,
      metalness: 0.05,
      emissive: new THREE.Color(0xd82618),
      emissiveIntensity: 0.35,
    })
    const bodyGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.44, 16)
    const body = new THREE.Mesh(bodyGeo, bodyMat)
    lGroup.add(body)

    // Bottom black wooden collar
    const btmCap = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.05, 16), postMat)
    btmCap.position.set(0, -0.22, 0)
    lGroup.add(btmCap)

    // Warm inner amber paper glow
    const lanternInnerLight = new THREE.PointLight(0xff5522, 1.4, 4.2)
    lanternInnerLight.position.set(0, 0, 0)
    if (lightManager) {
      lightManager.register({
        x: x,
        y: lanternY,
        z: lanternZ,
        color: 0xff5522,
        intensity: 1.4,
        distance: 4.2,
        zone: 'Street',
      })
    } else {
      lGroup.add(lanternInnerLight)
    }

    return lGroup
  }

  const l1 = createLantern(spec.x - 1.45, 'らーめん')
  const l2 = createLantern(spec.x + 1.45, '味自慢')
  group.add(l1, l2)

  // =========================================================================
  // 7. AUTHENTIC NOREN ENTRANCE CURTAIN (SPLIT FABRIC DRAPERY)
  // =========================================================================
  // Wooden dowel rod
  const rodGeo = new THREE.CylinderGeometry(0.016, 0.016, doorW + 0.15, 8)
  rodGeo.rotateZ(Math.PI / 2)
  const rod = new THREE.Mesh(rodGeo, beamMat)
  rod.position.set(spec.x, floorH - 0.72, spec.z - innerD / 2 - 0.06)
  group.add(rod)

  // Indigo blue dyed fabric with white crest & 'らーめん'
  const norenMat = new THREE.MeshStandardMaterial({
    map: ramenNorenTexture(),
    roughness: 0.85,
    side: THREE.DoubleSide,
  })
  const norenMesh = new THREE.Mesh(new THREE.PlaneGeometry(doorW * 0.96, 0.72), norenMat)
  norenMesh.position.set(spec.x, floorH - 1.1, spec.z - innerD / 2 - 0.07)
  group.add(norenMesh)

  // =========================================================================
  // 8. TICKET VENDING MACHINE (券売機 KENBAIKI) OUTSIDE
  // =========================================================================
  const kenW = 0.68
  const kenH = 1.62
  const kenD = 0.52
  const kenX = spec.x - 1.78
  const kenZ = spec.z - innerD / 2 - 0.28

  const kenHousing = new THREE.Mesh(
    new THREE.BoxGeometry(kenW, kenH, kenD),
    new THREE.MeshStandardMaterial({ color: 0xd8d4cc, roughness: 0.4, metalness: 0.2 }),
  )
  kenHousing.position.set(kenX, floorY + kenH / 2, kenZ)
  group.add(kenHousing)

  // Detailed front control panel with buttons, slots, and LED display
  const kenFrontMat = new THREE.MeshStandardMaterial({
    map: ramenKenbaikiTexture(),
    roughness: 0.35,
    metalness: 0.1,
  })
  const kenFront = new THREE.Mesh(new THREE.PlaneGeometry(kenW * 0.95, kenH * 0.95), kenFrontMat)
  kenFront.position.set(kenX, floorY + kenH / 2, kenZ - kenD / 2 - 0.005)
  kenFront.rotateY(Math.PI)
  group.add(kenFront)

  colliders.add({
    minX: kenX - kenW / 2 - 0.05,
    minY: 0,
    minZ: kenZ - kenD / 2,
    maxX: kenX + kenW / 2 + 0.05,
    maxY: kenH,
    maxZ: kenZ + kenD / 2 + 0.1,
  })

  interactions.add({
    id: 'ramen-kenbaiki',
    x: kenX,
    z: kenZ - 0.6,
    radius: 1.8,
    prompt: 'Buy Ramen Ticket at Kenbaiki [¥980]',
    onInteract: () => {
      audio?.playRamenTicketSound()
      messages.show(
        '*Chink! Zzzzt!* Purchased [Special Tonkotsu Ramen ¥980]. Step inside and hand your ticket to Master at the counter!',
      )
    },
  })

  // =========================================================================
  // 9. DINING BAR COUNTER & STOOLS (POLISHED HINOKI WOOD)
  // =========================================================================
  const barW = 4.2
  const barH = 0.98
  const barD = 0.72
  const barX = spec.x
  const barZ = spec.z + 0.1

  // Lower counter body (Dark cedar slats)
  const cBodyGeo = new THREE.BoxGeometry(barW, barH, barD)
  const cBodyMat = new THREE.MeshStandardMaterial({ color: 0x2b1c12, roughness: 0.6 })
  const cBody = new THREE.Mesh(cBodyGeo, cBodyMat)
  cBody.position.set(barX, floorY + barH / 2, barZ)
  interiorGroup.add(cBody)

  // Polished Hinoki Wood Countertop (Customer dining surface)
  const topGeo = new THREE.BoxGeometry(barW + 0.12, 0.06, barD + 0.08)
  const topMat = new THREE.MeshStandardMaterial({ color: 0xad7542, roughness: 0.28, metalness: 0.05 })
  const topSlab = new THREE.Mesh(topGeo, topMat)
  topSlab.position.set(barX, floorY + barH + 0.03, barZ)
  interiorGroup.add(topSlab)

  // Raised Upper Server Ledge (Where chef places steaming ramen bowls)
  const ledgeGeo = new THREE.BoxGeometry(barW + 0.12, 0.18, 0.24)
  const ledgeMat = new THREE.MeshStandardMaterial({ color: 0x8a542a, roughness: 0.35 })
  const ledge = new THREE.Mesh(ledgeGeo, ledgeMat)
  ledge.position.set(barX, floorY + barH + 0.12, barZ + barD / 2 - 0.12)
  interiorGroup.add(ledge)

  // 4 Bar Stools (Turned dark wood with padded black leather swivel cushion)
  const stoolMat = new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.5 })
  const stoolWood = new THREE.MeshStandardMaterial({ color: 0x3d2414, roughness: 0.5 })
  for (let i = 0; i < 4; i++) {
    const sx = spec.x - 1.5 + i * 1.0
    const sz = barZ - barD / 2 - 0.38

    // Central wood post & base
    const sBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.03, 12), metalMat)
    sBase.position.set(sx, floorY + 0.015, sz)
    const sPost = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.48, 8), stoolWood)
    sPost.position.set(sx, floorY + 0.255, sz)

    // Brass footrest ring
    const footring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.01, 6, 12), metalMat)
    footring.rotateX(Math.PI / 2)
    footring.position.set(sx, floorY + 0.18, sz)

    // Padded seat cushion
    const sCushion = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.08, 14), stoolMat)
    sCushion.position.set(sx, floorY + 0.53, sz)

    interiorGroup.add(sBase, sPost, footring, sCushion)
  }

  // =========================================================================
  // 10. DINING COUNTER PLACESETTINGS (STEAMING RAMEN BOWL & CONDIMENTS)
  // =========================================================================
  // Steaming Donburi Bowl (Special Tonkotsu Ramen)
  const bowlW = 0.28
  const bowlH = 0.14
  const bowlX = spec.x - 0.5
  const bowlZ = barZ - 0.08
  const bowlY = floorY + barH + 0.06

  // Ceramic Bowl (Black exterior, red inner lip)
  const bMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(bowlW / 2, bowlW * 0.28, bowlH, 16, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.15, side: THREE.DoubleSide }),
  )
  bMesh.position.set(bowlX, bowlY + bowlH / 2, bowlZ)
  interiorGroup.add(bMesh)

  // Rich Tonkotsu Broth surface
  const broth = new THREE.Mesh(
    new THREE.CircleGeometry(bowlW * 0.46, 16),
    new THREE.MeshStandardMaterial({ color: 0xd4a055, roughness: 0.25 }), // Creamy tonkotsu!
  )
  broth.rotateX(-Math.PI / 2)
  broth.position.set(bowlX, bowlY + bowlH - 0.015, bowlZ)
  interiorGroup.add(broth)

  // Wavy yellow noodles
  const noodleMesh = new THREE.Mesh(
    new THREE.TorusGeometry(0.065, 0.012, 6, 12),
    new THREE.MeshStandardMaterial({ color: 0xf5d061, roughness: 0.6 }),
  )
  noodleMesh.rotateX(Math.PI / 2)
  noodleMesh.position.set(bowlX + 0.02, bowlY + bowlH - 0.008, bowlZ)
  interiorGroup.add(noodleMesh)

  // Two Braised Chashu Pork Slices
  for (let c = 0; c < 2; c++) {
    const chashu = new THREE.Mesh(
      new THREE.CylinderGeometry(0.038, 0.038, 0.01, 10),
      new THREE.MeshStandardMaterial({ color: 0x9b4625, roughness: 0.7 }),
    )
    chashu.position.set(bowlX - 0.04 + c * 0.05, bowlY + bowlH, bowlZ - 0.03 + c * 0.04)
    interiorGroup.add(chashu)
  }

  // Soft-boiled Ajitama (Halved egg with golden yolk)
  const eggWhite = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.01, 10),
    new THREE.MeshStandardMaterial({ color: 0xfbfbf6, roughness: 0.5 }),
  )
  eggWhite.position.set(bowlX + 0.05, bowlY + bowlH, bowlZ - 0.04)
  const eggYolk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 0.012, 8),
    new THREE.MeshStandardMaterial({ color: 0xffa500, roughness: 0.3 }),
  )
  eggYolk.position.set(bowlX + 0.05, bowlY + bowlH + 0.002, bowlZ - 0.04)
  interiorGroup.add(eggWhite, eggYolk)

  // Crispy Nori Seaweed Sheet standing up
  const nori = new THREE.Mesh(
    new THREE.PlaneGeometry(0.065, 0.09),
    new THREE.MeshStandardMaterial({ color: 0x141814, roughness: 0.9, side: THREE.DoubleSide }),
  )
  nori.rotateY(-0.3)
  nori.position.set(bowlX - 0.07, bowlY + bowlH + 0.04, bowlZ - 0.05)
  interiorGroup.add(nori)

  // Chopped Green Scallions / Negi
  const negi = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.025, 0.008, 8),
    new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.8 }),
  )
  negi.position.set(bowlX, bowlY + bowlH + 0.002, bowlZ + 0.04)
  interiorGroup.add(negi)

  // Animated Rising Steam Quads from Ramen Bowl
  const steamPuffs: THREE.Mesh[] = []
  for (let sp = 0; sp < 4; sp++) {
    const sQuad = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), steamMat)
    sQuad.position.set(bowlX + (Math.random() - 0.5) * 0.08, bowlY + 0.12 + sp * 0.16, bowlZ)
    interiorGroup.add(sQuad)
    steamPuffs.push(sQuad)
  }

  // Condiment Set on Counter
  const cruetGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.12, 10)
  // Shoyu (Soy Sauce) Cruet
  const shoyu = new THREE.Mesh(
    cruetGeo,
    new THREE.MeshStandardMaterial({ color: 0x11161d, roughness: 0.2, metalness: 0.1 }),
  )
  shoyu.position.set(spec.x + 0.9, bowlY + 0.06, barZ)
  // Rayu (Chili Oil) Cruet
  const rayu = new THREE.Mesh(
    cruetGeo,
    new THREE.MeshStandardMaterial({ color: 0xc42012, roughness: 0.3 }),
  )
  rayu.position.set(spec.x + 1.05, bowlY + 0.06, barZ)
  // Stainless Pepper Shaker
  const pepper = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.09, 8), metalMat)
  pepper.position.set(spec.x + 1.18, bowlY + 0.045, barZ)
  interiorGroup.add(shoyu, rayu, pepper)

  // Wooden Box of Disposable Chopsticks (割り箸 Waribashi)
  const chopBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.18, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x5a341e, roughness: 0.6 }),
  )
  chopBox.position.set(spec.x + 1.4, bowlY + 0.09, barZ)
  // White paper wrapped chopsticks protruding
  const chopsticks = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.08, 0.1),
    new THREE.MeshStandardMaterial({ color: 0xf5f5ee, roughness: 0.8 }),
  )
  chopsticks.position.set(spec.x + 1.4, bowlY + 0.2, barZ)
  interiorGroup.add(chopBox, chopsticks)

  // Stainless Cold Water Pitcher & Drinking Glasses
  const pitcher = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.07, 0.22, 10),
    new THREE.MeshStandardMaterial({ color: 0xd8e0e8, roughness: 0.2, metalness: 0.8 }),
  )
  pitcher.position.set(spec.x - 1.4, bowlY + 0.11, barZ)
  const glassCup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.032, 0.028, 0.09, 8),
    shopGlassMat,
  )
  glassCup.position.set(spec.x - 1.22, bowlY + 0.045, barZ)
  interiorGroup.add(pitcher, glassCup)

  // =========================================================================
  // 11. KITCHEN BEHIND COUNTER (STAINLESS COOKING VATS, BROTH POTS & STEAM)
  // =========================================================================
  const kitZ = spec.z + 1.7
  const kitW = 4.2
  const kitH = 0.92

  // Stainless Steel Kitchen Prep Counter
  const kitCounter = new THREE.Mesh(
    new THREE.BoxGeometry(kitW, kitH, 0.85),
    new THREE.MeshStandardMaterial({ color: 0x8a929c, roughness: 0.35, metalness: 0.75 }),
  )
  kitCounter.position.set(spec.x, floorY + kitH / 2, kitZ)
  interiorGroup.add(kitCounter)

  // Commercial Stainless Exhaust Hood (レンジフード) above kitchen
  const hood = new THREE.Mesh(
    new THREE.BoxGeometry(kitW * 0.9, 0.45, 0.95),
    new THREE.MeshStandardMaterial({ color: 0x6e7682, roughness: 0.3, metalness: 0.8 }),
  )
  hood.position.set(spec.x, floorH - 0.45, kitZ)
  interiorGroup.add(hood)

  // Task light inside exhaust hood
  const hoodLight = new THREE.PointLight(0xfff0dd, 2.2, 5.5)
  hoodLight.position.set(spec.x, floorH - 0.65, kitZ)
  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorH - 0.65,
      z: kitZ,
      color: 0xfff0dd,
      intensity: 2.2,
      distance: 5.5,
      zone: 'Ramen',
    })
  } else {
    interiorGroup.add(hoodLight)
  }

  // Two Large Boiling Tonkotsu Broth Stockpots (寸胴鍋 Zundo-nabe)
  const potGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.48, 14)
  for (let p = 0; p < 2; p++) {
    const px = spec.x - 0.9 + p * 0.58
    const zundo = new THREE.Mesh(potGeo, metalMat)
    zundo.position.set(px, floorY + kitH + 0.24, kitZ - 0.05)

    // Rich bubbling broth inside pot
    const pBroth = new THREE.Mesh(
      new THREE.CircleGeometry(0.22, 12),
      new THREE.MeshStandardMaterial({ color: 0xc88f42, roughness: 0.4 }),
    )
    pBroth.rotateX(-Math.PI / 2)
    pBroth.position.set(px, floorY + kitH + 0.46, kitZ - 0.05)

    // Pot loop handles
    const h1 = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 4, 8), metalMat)
    h1.position.set(px - 0.25, floorY + kitH + 0.4, kitZ - 0.05)
    const h2 = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 4, 8), metalMat)
    h2.position.set(px + 0.25, floorY + kitH + 0.4, kitZ - 0.05)

    interiorGroup.add(zundo, pBroth, h1, h2)

    // Billowing steam from boiling stockpots
    for (let s = 0; s < 3; s++) {
      const pSteam = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), steamMat)
      pSteam.position.set(px + (Math.random() - 0.5) * 0.1, floorY + kitH + 0.55 + s * 0.25, kitZ - 0.05)
      interiorGroup.add(pSteam)
      steamPuffs.push(pSteam)
    }
  }

  // Noodle Boiler Vat with Tebo Strainer Baskets (ゆで麺機 & テボ)
  const vatGeo = new THREE.BoxGeometry(0.55, 0.35, 0.48)
  const vat = new THREE.Mesh(vatGeo, metalMat)
  vat.position.set(spec.x + 0.7, floorY + kitH + 0.18, kitZ - 0.05)
  interiorGroup.add(vat)

  // 2 Tebo noodle strainers hanging on vat rim
  for (let t = 0; t < 2; t++) {
    const teboHandle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.24, 6),
      new THREE.MeshStandardMaterial({ color: 0x5a341e }),
    )
    teboHandle.rotateX(0.3)
    teboHandle.position.set(spec.x + 0.6 + t * 0.18, floorY + kitH + 0.42, kitZ - 0.2)
    interiorGroup.add(teboHandle)
  }

  // Stack of Clean Donburi Ramen Bowls on Back Shelf
  for (let b = 0; b < 4; b++) {
    const sBowl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.08, 0.08, 12, 1, true),
      new THREE.MeshStandardMaterial({ color: b % 2 === 0 ? 0xd82618 : 0xf8f8f8, roughness: 0.2 }),
    )
    sBowl.position.set(spec.x + 1.5, floorY + kitH + 0.04 + b * 0.05, kitZ)
    interiorGroup.add(sBowl)
  }

  // =========================================================================
  // 12. WALL MENU PLAQUES (木札 KIFUDA) ON TIMBER RAIL
  // =========================================================================
  const menuItems = [
    '特製豚骨 ¥980',
    'チャーシュー麺 ¥1100',
    '濃厚魚介味噌 ¥950',
    '辛味噌らーめん ¥920',
    '替玉(一玉) ¥150',
    '博多一口餃子 ¥380',
  ]
  menuItems.forEach((label, idx) => {
    const tagMat = signMaterial(label, '#e2caa0', '#1c1208', undefined, 256, 64)
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.85), tagMat)
    tag.position.set(spec.x - 1.6 + idx * 0.64, floorY + 2.05, spec.z + innerD / 2 - wallThick - 0.02)
    interiorGroup.add(tag)
  })

  // Colliders for Counter and Kitchen
  colliders.add({
    minX: barX - barW / 2 - 0.1,
    minY: 0,
    minZ: barZ - barD / 2,
    maxX: barX + barW / 2 + 0.1,
    maxY: 1.5,
    maxZ: spec.z + innerD / 2,
  })

  interactions.add({
    id: 'ramen-counter',
    x: spec.x - 0.5,
    z: barZ - 0.8,
    radius: 1.8,
    prompt: 'Sit at Ramen Bar & Order Special Chashu Tonkotsu [¥980]',
    onInteract: () => {
      audio?.playRamenTicketSound()
      messages.show(
        '"Hai, irasshai!" Master presents a steaming bowl of rich garlic tonkotsu ramen with tender chashu, soft-boiled ajitama, and wavy handmade noodles. It smells incredible!',
      )
    },
  })

  // =========================================================================
  // 13. WARM ATMOSPHERIC LIGHTING & PENDANT LAMPS
  // =========================================================================
  // Two Warm Conical Pendant Lamps hanging over Counter
  for (const px of [-1.0, 1.0]) {
    // Hanging cord
    const cord = new THREE.Mesh(
      new THREE.CylinderGeometry(0.004, 0.004, 0.75, 6),
      postMat,
    )
    cord.position.set(spec.x + px, floorH - 0.45, barZ)
    // Conical lamp shade
    const shade = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.14, 12, 1, true),
      new THREE.MeshStandardMaterial({ color: 0x18241a, roughness: 0.4 }),
    )
    shade.position.set(spec.x + px, floorH - 0.82, barZ)
    interiorGroup.add(cord, shade)

    // Warm downlight pool
    const pLight = new THREE.PointLight(0xffa544, 1.8, 6.5, 1.2)
    pLight.position.set(spec.x + px, floorH - 0.9, barZ)
    if (lightManager) {
      lightManager.register({
        x: spec.x + px,
        y: floorH - 0.9,
        z: barZ,
        color: 0xffa544,
        intensity: 1.8,
        distance: 6.5,
        decay: 1.2,
        zone: 'Ramen',
      })
    } else {
      interiorGroup.add(pLight)
    }
  }

  // Central Store Warm Ambient Light
  const light = new THREE.PointLight(0xff9944, 2.2, 14, 1.1)
  light.position.set(spec.x, floorH - 0.35, spec.z)
  if (lightManager) {
    lightManager.register({
      x: spec.x,
      y: floorH - 0.35,
      z: spec.z,
      color: 0xff9944,
      intensity: 2.2,
      distance: 14,
      decay: 1.1,
      zone: 'Ramen',
    })
  } else {
    group.add(light)
  }

  let time = 0

  const update = (dt: number, p: { x: number; z: number }): void => {
    // Distance culling: hide interior props when player is more than 28m away (in low graphics mode)
    const distSq = (p.x - spec.x) ** 2 + (p.z - spec.z) ** 2
    interiorGroup.visible = Settings.isHigh() || distSq < 784

    time += dt

    // Gentle lantern sway in night breeze
    const sway = Math.sin(time * 2.0) * 0.05
    l1.rotation.z = sway
    l2.rotation.z = -sway

    // Animate rising steam particles only when visible
    if (interiorGroup.visible) {
      steamPuffs.forEach((puff, i) => {
        const cycle = (time * 0.55 + i * 0.18) % 1.0
        puff.position.y += dt * 0.25
        puff.scale.setScalar(0.75 + cycle * 0.85)
        puff.rotation.z += dt * 0.15
      })
    }
  }

  return { light, update }
}

// =========================================================================
// 4. STANDARD GROUND STOREFRONTS & EXTERIORS (AUTHENTIC TOKYO SHOPFRONTS)
// =========================================================================


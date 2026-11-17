import * as THREE from 'three'
import { CollisionWorld } from '../../game/Collision'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
  postMat,
  lampMat,
  metalMat,
  yellowMat,
  carPaintMat,
  carGlassMat,
  mirrorOrangeMat,
  mirrorGlassMat,
  volumetricConeMat,
} from '../Materials'

export function buildUtilityPole(
  x: number,
  z: number,
  streetLights: THREE.PointLight[],
  lightManager?: LightManager,
): THREE.Group {
  const pole = new THREE.Group()
  pole.position.set(x, 0, z)

  const poleH = 9.2
  // Concrete cylindrical pole
  const pGeo = new THREE.CylinderGeometry(0.18, 0.24, poleH, 12)
  const pMat = new THREE.MeshStandardMaterial({ color: 0x5a5f66, roughness: 0.88, metalness: 0.05 })
  const pMesh = new THREE.Mesh(pGeo, pMat)
  pMesh.position.set(0, poleH / 2, 0)
  pMesh.castShadow = true
  pole.add(pMesh)

  // Metal crossarms
  const arm1Geo = new THREE.BoxGeometry(2.2, 0.1, 0.1)
  const arm1 = new THREE.Mesh(arm1Geo, postMat)
  arm1.position.set(0, poleH - 0.6, 0)
  pole.add(arm1)

  const arm2Geo = new THREE.BoxGeometry(1.6, 0.1, 0.1)
  const arm2 = new THREE.Mesh(arm2Geo, postMat)
  arm2.position.set(0, poleH - 1.4, 0)
  pole.add(arm2)

  // Insulator pegs
  const insGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.14, 8)
  const insMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.2 })
  for (const ox of [-0.95, -0.45, 0.45, 0.95]) {
    const ins = new THREE.Mesh(insGeo, insMat)
    ins.position.set(ox, poleH - 0.5, 0)
    pole.add(ins)
  }

  // Cylindrical Transformer Drum (柱上変圧器)
  const transGeo = new THREE.CylinderGeometry(0.32, 0.32, 1.1, 12)
  const transMat = new THREE.MeshStandardMaterial({ color: 0x485058, roughness: 0.5, metalness: 0.4 })
  const trans = new THREE.Mesh(transGeo, transMat)
  trans.position.set(0.35, poleH - 2.2, 0)
  pole.add(trans)

  // Climbing step pegs
  const pegGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.28, 6)
  pegGeo.rotateZ(Math.PI / 2)
  for (let y = 1.8; y < poleH - 2.5; y += 0.55) {
    const peg = new THREE.Mesh(pegGeo, metalMat)
    const side = Math.sin(y * 4) > 0 ? 0.2 : -0.2
    peg.position.set(side, y, 0)
    pole.add(peg)
  }

  // Attached Streetlamp
  const lampArmGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.1, 8)
  lampArmGeo.rotateZ(Math.PI / 3)
  const lampArm = new THREE.Mesh(lampArmGeo, postMat)
  lampArm.position.set(0.45, 5.2, 0)
  pole.add(lampArm)

  // Lamp shade
  const shadeGeo = new THREE.ConeGeometry(0.25, 0.15, 12)
  const shade = new THREE.Mesh(shadeGeo, postMat)
  shade.position.set(0.85, 4.8, 0)
  pole.add(shade)

  // Glowing bulb
  const bulbGeo = new THREE.SphereGeometry(0.1, 12, 12)
  const bulb = new THREE.Mesh(bulbGeo, lampMat)
  bulb.position.set(0.85, 4.72, 0)
  pole.add(bulb)

  // Volumetric streetlamp light cone
  const coneGeo = new THREE.ConeGeometry(2.4, 4.6, 16, 1, true)
  coneGeo.translate(0, -2.3, 0)
  const cone = new THREE.Mesh(coneGeo, volumetricConeMat)
  cone.position.set(0.85, 4.7, 0)
  pole.add(cone)

  // Dynamic warm streetlight point light (shadow pass disabled for high performance)
  if (lightManager) {
    lightManager.register({
      x: x + 0.85,
      y: 4.65,
      z,
      color: 0xffe4b5,
      intensity: 1.6,
      distance: 16,
      decay: 1.5,
      zone: 'Street',
    })
  } else {
    const light = new THREE.PointLight(0xffe4b5, 1.6, 16, 1.5)
    light.position.set(0.85, 4.65, 0)
    streetLights.push(light)
    pole.add(light)
  }

  return pole
}

export function buildOverheadCables(group: THREE.Group, polePositions: { x: number; z: number }[]): void {
  const cableMat = new THREE.LineBasicMaterial({ color: 0x1a1e24, linewidth: 1.5 })

  for (let i = 0; i < polePositions.length; i++) {
    for (let j = i + 1; j < polePositions.length; j++) {
      const p1 = polePositions[i]
      const p2 = polePositions[j]
      const dist = Math.hypot(p2.x - p1.x, p2.z - p1.z)
      if (dist < 26) {
        for (const wireOffset of [-0.45, 0, 0.45]) {
          const y1 = 8.6 + wireOffset * 0.4
          const y2 = 8.6 + wireOffset * 0.4
          const midX = (p1.x + p2.x) / 2
          const midZ = (p1.z + p2.z) / 2
          const sag = Math.min(1.2, dist * 0.045)

          const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(p1.x, y1, p1.z),
            new THREE.Vector3(midX, (y1 + y2) / 2 - sag, midZ),
            new THREE.Vector3(p2.x, y2, p2.z),
          )
          const points = curve.getPoints(12)
          const geo = new THREE.BufferGeometry().setFromPoints(points)
          const line = new THREE.Line(geo, cableMat)
          group.add(line)
        }
      }
    }
  }
}

// =========================================================================
// 2. VENDING MACHINE (自動販売機)
// =========================================================================


export function buildBicycle(
  x: number,
  z: number,
  rotY: number,
  frameColor = 0x1f3b58,
  id = 'bike',
  interactions?: InteractionSystem,
  messages?: MessageBus,
  audio?: AudioManager,
): THREE.Group {
  const bike = new THREE.Group()
  bike.position.set(x, 0.15, z)
  bike.rotateY(rotY)
  bike.rotateZ(-0.06) // Realistic 3.5° parked lean on side kickstand

  // Materials
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.9 })
  const frameMat = new THREE.MeshStandardMaterial({ color: frameColor, roughness: 0.35, metalness: 0.4 })
  const saddleMat = new THREE.MeshStandardMaterial({ color: 0x241812, roughness: 0.5 })
  const gripMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.85 })
  const bellMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.2, metalness: 0.85 })
  const reflectorRedMat = new THREE.MeshBasicMaterial({ color: 0xdd1818 })
  const reflectorAmberMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b })

  const wheelR = 0.32
  const wheelPositions = [
    { x: 0.55, isFront: true },
    { x: -0.55, isFront: false },
  ]

  // 1. WHEELS (Tires, Chrome Rims, Center Axles, Spokes & Fenders)
  for (const wp of wheelPositions) {
    const wGroup = new THREE.Group()
    wGroup.position.set(wp.x, wheelR, 0)

    // Outer rubber tire
    const tire = new THREE.Mesh(new THREE.TorusGeometry(wheelR, 0.024, 8, 24), rubberMat)
    wGroup.add(tire)

    // Shiny chrome rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(wheelR - 0.02, 0.012, 6, 24), metalMat)
    wGroup.add(rim)

    // Center axle hub
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.07, 8), metalMat)
    hub.rotateX(Math.PI / 2)
    wGroup.add(hub)

    // Crossed spokes
    for (let s = 0; s < 4; s++) {
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, (wheelR - 0.02) * 2, 4), metalMat)
      spoke.rotateZ((s * Math.PI) / 4)
      wGroup.add(spoke)
    }

    // Curved Mudguards / Fenders (泥除け)
    const fenderGeo = new THREE.TorusGeometry(wheelR + 0.022, 0.016, 6, 18, Math.PI * (wp.isFront ? 0.72 : 0.85))
    const fender = new THREE.Mesh(fenderGeo, frameMat)
    fender.rotateZ(wp.isFront ? -Math.PI * 0.58 : -Math.PI * 0.42)
    wGroup.add(fender)

    // Rear red reflector on back fender
    if (!wp.isFront) {
      const ref = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.01, 8), reflectorRedMat)
      ref.position.set(-wheelR - 0.015, -0.05, 0)
      ref.rotateZ(Math.PI / 2)
      wGroup.add(ref)
    }

    bike.add(wGroup)
  }

  // 2. JAPANESE MAMACHARI FRAME (Low-Step Curved Step-Through Tubes)
  // Bottom bracket shell
  const bb = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.08, 8), frameMat)
  bb.rotateX(Math.PI / 2)
  bb.position.set(-0.06, 0.28, 0)
  bike.add(bb)

  // Head tube
  const ht = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8), frameMat)
  ht.position.set(0.42, 0.7, 0)
  ht.rotateZ(-0.28)
  bike.add(ht)

  // Twin curved step-through down-tubes (Easy step-over for shopping)
  for (const side of [-0.018, 0.018]) {
    const downTube = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.65, 8), frameMat)
    downTube.position.set(0.18, 0.46, side)
    downTube.rotateZ(0.72)
    bike.add(downTube)
  }

  // Seat tube rising to saddle
  const st = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.46, 8), frameMat)
  st.position.set(-0.16, 0.48, 0)
  st.rotateZ(-0.25)
  bike.add(st)

  // Front chrome fork blades
  for (const side of [-0.038, 0.038]) {
    const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.009, 0.45, 8), metalMat)
    fork.position.set(0.48, 0.51, side)
    fork.rotateZ(-0.28)
    bike.add(fork)
  }

  // Rear chainstays connecting BB to rear axle
  for (const side of [-0.038, 0.038]) {
    const cs = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.52, 6), frameMat)
    cs.position.set(-0.31, 0.3, side)
    cs.rotateZ(-0.09)
    bike.add(cs)
  }

  // Rear seatstays connecting seat cluster to rear axle
  for (const side of [-0.038, 0.038]) {
    const ss = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.55, 6), frameMat)
    ss.position.set(-0.38, 0.52, side)
    ss.rotateZ(0.78)
    bike.add(ss)
  }

  // 3. HANDLEBARS, STEM & BRASS BELL (プロムナードハンドル)
  // Chrome quill stem
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.22, 8), metalMat)
  stem.position.set(0.44, 0.82, 0)
  bike.add(stem)

  // Swept-back cruiser handlebar
  const barArc = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.011, 6, 16, Math.PI * 0.8), metalMat)
  barArc.rotateX(Math.PI / 2)
  barArc.rotateZ(Math.PI * 0.6)
  barArc.position.set(0.4, 0.92, 0)
  bike.add(barArc)

  // Left & right rubber handgrips
  for (const gz of [-0.22, 0.22]) {
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.09, 8), gripMat)
    grip.position.set(0.29, 0.91, gz)
    grip.rotateZ(Math.PI / 6)
    bike.add(grip)
  }

  // Brass bicycle bell on left handlebar
  const bellDome = new THREE.Mesh(new THREE.SphereGeometry(0.024, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), bellMat)
  bellDome.position.set(0.35, 0.94, -0.16)
  const bellThumb = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.005, 0.012), metalMat)
  bellThumb.position.set(0.33, 0.94, -0.18)
  bike.add(bellDome, bellThumb)

  // 4. FRONT WIRE SHOPPING BASKET (前カゴ)
  const basketW = 0.32
  const basketD = 0.22
  const basketH = 0.2
  const bX = 0.58
  const bY = 0.76

  // Wire basket rim & cage
  const bRim = new THREE.Mesh(new THREE.BoxGeometry(basketD, 0.016, basketW), metalMat)
  bRim.position.set(bX, bY + basketH / 2, 0)
  const bFloor = new THREE.Mesh(new THREE.BoxGeometry(basketD - 0.02, 0.012, basketW - 0.02), metalMat)
  bFloor.position.set(bX, bY - basketH / 2, 0)
  bike.add(bRim, bFloor)

  // Wire mesh side struts
  for (const cx of [-basketD / 2 + 0.01, basketD / 2 - 0.01]) {
    for (const cz of [-basketW / 2 + 0.01, basketW / 2 - 0.01]) {
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, basketH, 4), metalMat)
      strut.position.set(bX + cx, bY, cz)
      bike.add(strut)
    }
  }

  // Inside basket: Convenience store bag / tote
  const bag = new THREE.Mesh(
    new THREE.BoxGeometry(basketD * 0.75, basketH * 0.65, basketW * 0.75),
    new THREE.MeshStandardMaterial({ color: 0xf5f8fa, roughness: 0.8 }),
  )
  bag.position.set(bX, bY - 0.02, 0)
  bike.add(bag)

  // Chrome bullet dynamo headlight under basket
  const headLight = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.018, 0.06, 10), metalMat)
  headLight.rotateZ(-Math.PI / 2)
  headLight.position.set(0.66, 0.62, 0)
  const lampLens = new THREE.Mesh(new THREE.CircleGeometry(0.022, 10), lampMat)
  lampLens.rotateY(Math.PI / 2)
  lampLens.position.set(0.691, 0.62, 0)
  bike.add(headLight, lampLens)

  // 5. ERGONOMIC SPRUNG SADDLE (サドル)
  const sPost = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.16, 8), metalMat)
  sPost.position.set(-0.19, 0.73, 0)
  sPost.rotateZ(-0.25)

  // Contoured saddle cushion
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.055, 0.17), saddleMat)
  saddle.position.set(-0.2, 0.81, 0)

  // Dual chrome coil springs under seat
  for (const sz of [-0.045, 0.045]) {
    const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.04, 8), metalMat)
    spring.position.set(-0.26, 0.77, sz)
    bike.add(spring)
  }
  bike.add(sPost, saddle)

  // 6. REAR CARGO LUGGAGE RACK (リアキャリア)
  const rackPlat = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.14), metalMat)
  rackPlat.position.set(-0.5, 0.73, 0)
  bike.add(rackPlat)

  // Rack support struts down to rear axle
  for (const rz of [-0.05, 0.05]) {
    const rStrut = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.44, 4), metalMat)
    rStrut.position.set(-0.52, 0.52, rz)
    rStrut.rotateZ(0.2)
    bike.add(rStrut)
  }

  // 7. DRIVETRAIN, PEDALS & KICKSTAND
  // Chaincase cover
  const chaincase = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.11, 0.03), frameMat)
  chaincase.position.set(-0.28, 0.28, 0.04)
  bike.add(chaincase)

  // Crank arms & pedals with yellow reflectors
  for (const side of [-1, 1]) {
    const crank = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.14, 6), metalMat)
    crank.position.set(-0.06, 0.28 + side * 0.06, side * 0.07)
    const pedal = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.06), gripMat)
    pedal.position.set(-0.06, 0.28 + side * 0.12, side * 0.1)
    const refA = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.01, 0.01), reflectorAmberMat)
    refA.position.set(-0.06, 0.28 + side * 0.12, side * 0.13)
    bike.add(crank, pedal, refA)
  }

  // Steel kickstand (holding bike upright with slight lean)
  const kickstand = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.32, 6), metalMat)
  kickstand.position.set(-0.46, 0.16, -0.1)
  kickstand.rotateX(0.38)
  bike.add(kickstand)

  // Municipal parking registration sticker (防犯登録) on seat tube
  const regDecal = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.03, 8), reflectorAmberMat)
  regDecal.position.set(-0.16, 0.52, 0)
  bike.add(regDecal)

  // Interactive Bicycle Bell
  if (interactions) {
    interactions.add({
      id: `${id}-bell`,
      x,
      z,
      radius: 1.8,
      prompt: 'Ring Bicycle Bell',
      onInteract: () => {
        audio?.playBikeBellSound()
        messages?.show('*Riing-riing!* Japanese city commuter bicycle (Mamachari) with front grocery basket.')
      },
    })
  }

  return bike
}

// =========================================================================
// 5. POTTED PLANTS & RESIDENTIAL ALLEY GARDENING (軒先ガーデン)
// =========================================================================


export function buildKeiCar(x: number, y: number, z: number, rotY: number, colliders: CollisionWorld): THREE.Group {
  const car = new THREE.Group()
  car.position.set(x, y, z)
  car.rotateY(rotY)

  const w = 1.48
  const l = 3.35
  const h = 1.62

  // Body
  const bodyGeo = new THREE.BoxGeometry(w, 0.75, l)
  const body = new THREE.Mesh(bodyGeo, carPaintMat)
  body.position.set(0, 0.55, 0)
  body.castShadow = true
  car.add(body)

  // Cabin
  const cabGeo = new THREE.BoxGeometry(w - 0.08, 0.72, l * 0.72)
  const cab = new THREE.Mesh(cabGeo, carPaintMat)
  cab.position.set(0, 1.25, -0.15)
  car.add(cab)

  // Windshield
  const windGeo = new THREE.BoxGeometry(w - 0.04, 0.62, 0.06)
  windGeo.rotateX(0.2)
  const wind = new THREE.Mesh(windGeo, carGlassMat)
  wind.position.set(0, 1.22, (l * 0.72) / 2 - 0.12)
  car.add(wind)

  const rearWindGeo = new THREE.BoxGeometry(w - 0.04, 0.58, 0.06)
  const rearWind = new THREE.Mesh(rearWindGeo, carGlassMat)
  rearWind.position.set(0, 1.25, (-l * 0.72) / 2 - 0.16)
  car.add(rearWind)

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.18, 12)
  wheelGeo.rotateZ(Math.PI / 2)
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1b1b1b, roughness: 0.9 })
  for (const wx of [-w / 2, w / 2]) {
    for (const wz of [-l * 0.32, l * 0.32]) {
      const wh = new THREE.Mesh(wheelGeo, wheelMat)
      wh.position.set(wx, 0.26, wz)
      car.add(wh)
    }
  }

  // Headlights
  const hlGeo = new THREE.BoxGeometry(0.25, 0.18, 0.06)
  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffae8 })
  const hl1 = new THREE.Mesh(hlGeo, hlMat)
  hl1.position.set(-w / 2 + 0.24, 0.65, l / 2 + 0.01)
  const hl2 = new THREE.Mesh(hlGeo, hlMat)
  hl2.position.set(w / 2 - 0.24, 0.65, l / 2 + 0.01)
  car.add(hl1, hl2)

  // Taillights
  const tlGeo = new THREE.BoxGeometry(0.2, 0.24, 0.06)
  const tlMat = new THREE.MeshBasicMaterial({ color: 0xdd1818 })
  const tl1 = new THREE.Mesh(tlGeo, tlMat)
  tl1.position.set(-w / 2 + 0.2, 0.75, -l / 2 - 0.01)
  const tl2 = new THREE.Mesh(tlGeo, tlMat)
  tl2.position.set(w / 2 - 0.2, 0.75, -l / 2 - 0.01)
  car.add(tl1, tl2)

  // Yellow Japanese License Plates
  const plateGeo = new THREE.BoxGeometry(0.35, 0.18, 0.02)
  const pFront = new THREE.Mesh(plateGeo, yellowMat)
  pFront.position.set(0, 0.38, l / 2 + 0.02)
  const pRear = new THREE.Mesh(plateGeo, yellowMat)
  pRear.position.set(0, 0.42, -l / 2 - 0.02)
  car.add(pFront, pRear)

  colliders.add({
    minX: x - l / 2 - 0.1,
    minY: y,
    minZ: z - w / 2 - 0.1,
    maxX: x + l / 2 + 0.1,
    maxY: y + h,
    maxZ: z + w / 2 + 0.1,
  })

  return car
}

// =========================================================================
// 7. CONVEX INTERSECTION TRAFFIC MIRRORS (カーブミラー)
// =========================================================================
export function buildConvexMirror(x: number, z: number, rotY: number, colliders: CollisionWorld): THREE.Group {
  const mGroup = new THREE.Group()
  mGroup.position.set(x, 0.15, z)
  mGroup.rotateY(rotY)

  const postH = 3.4
  const postMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, postH, 10), postMat)
  postMesh.position.set(0, postH / 2, 0)
  mGroup.add(postMesh)

  const hoodGeo = new THREE.CylinderGeometry(0.48, 0.52, 0.12, 24)
  hoodGeo.rotateX(Math.PI / 2)
  const hood = new THREE.Mesh(hoodGeo, mirrorOrangeMat)
  hood.position.set(0.35, postH - 0.2, 0)
  mGroup.add(hood)

  const faceGeo = new THREE.SphereGeometry(0.44, 24, 12, 0, Math.PI * 2, 0, Math.PI / 3)
  faceGeo.rotateX(Math.PI / 2)
  const face = new THREE.Mesh(faceGeo, mirrorGlassMat)
  face.position.set(0.35, postH - 0.2, 0.04)
  mGroup.add(face)

  colliders.add({
    minX: x - 0.25,
    minY: 0,
    minZ: z - 0.25,
    maxX: x + 0.25,
    maxY: 3.8,
    maxZ: z + 0.25,
  })

  return mGroup
}

// =========================================================================
// 8. NEIGHBORHOOD TRASH & RECYCLING STATION (ゴミ集積所)
// =========================================================================


export function buildCrossingSignals(
  group: THREE.Group,
  colliders: CollisionWorld,
  interactions: InteractionSystem,
  messages: MessageBus,
): void {
  const signals = [
    { x: 13.8, z: 3.8 },
    { x: 18.2, z: -3.8 },
  ]

  for (const s of signals) {
    const post = new THREE.Group()
    post.position.set(s.x, 0.15, s.z)

    const pMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 8), postMat)
    pMesh.position.set(0, 1.6, 0)
    post.add(pMesh)

    const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.14), yellowMat)
    boxMesh.position.set(0, 1.25, 0.08)
    post.add(boxMesh)

    const btnMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 10), metalMat)
    btnMesh.rotateX(Math.PI / 2)
    btnMesh.position.set(0, 1.25, 0.16)
    post.add(btnMesh)

    const sigHead = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.65, 0.22), postMat)
    sigHead.position.set(0, 2.8, 0)
    post.add(sigHead)

    const greenLight = new THREE.Mesh(
      new THREE.CircleGeometry(0.1, 12),
      new THREE.MeshBasicMaterial({ color: 0x44ffaa }),
    )
    greenLight.position.set(0, 2.65, 0.12)
    post.add(greenLight)

    group.add(post)

    colliders.add({
      minX: s.x - 0.2,
      minY: 0,
      minZ: s.z - 0.2,
      maxX: s.x + 0.2,
      maxY: 3.5,
      maxZ: s.z + 0.2,
    })

    interactions.add({
      id: `signal-${s.x}`,
      x: s.x,
      z: s.z + 0.4,
      radius: 1.6,
      prompt: 'Push Pedestrian Crossing Button [押ボタン式]',
      onInteract: () => {
        messages.show('*Beep-Boop* "Omachi kudasai" (Please wait). Signal chime activates: *Piyo-piyo*')
      },
    })
  }
}

// =========================================================================
// 10. NEIGHBORHOOD STRAY CAT (KURO-CHAN) & MIKAN BOX BED
// =========================================================================

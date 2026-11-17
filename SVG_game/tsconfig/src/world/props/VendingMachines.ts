import * as THREE from 'three'
import { CollisionWorld } from '../../game/Collision'
import { InteractionSystem } from '../../game/Interaction'
import { MessageBus } from '../../game/Messages'
import type { AudioManager } from '../Audio'
import type { LightManager } from '../LightManager'
import {
  vendingTexture,
  canRecycleBoxTexture,
} from '../Materials'

export function buildVendingMachine(
  x: number,
  z: number,
  rotY: number,
  variant: number,
  drinkName: string,
  interactions: InteractionSystem,
  messages: MessageBus,
  colliders: CollisionWorld,
  lightManager?: LightManager,
): THREE.Group {
  const vm = new THREE.Group()
  const w = 1.05
  const h = 1.95
  const d = 0.82

  const bodyGeo = new THREE.BoxGeometry(w, h, d)
  const bodyMat = new THREE.MeshStandardMaterial({
    color: variant === 0 ? 0x1b3b38 : variant === 1 ? 0x5a1824 : 0x1a2e54,
    roughness: 0.35,
    metalness: 0.65,
  })
  const body = new THREE.Mesh(bodyGeo, bodyMat)
  body.position.set(0, h / 2, 0)
  body.castShadow = true
  vm.add(body)

  const dispGeo = new THREE.PlaneGeometry(0.92, 1.75)
  const tex = vendingTexture(variant)
  const dispMat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
  const dispMesh = new THREE.Mesh(dispGeo, dispMat)
  dispMesh.position.set(0, h / 2 + 0.04, d / 2 + 0.01)
  vm.add(dispMesh)

  const vColor = variant === 0 ? 0x7affd4 : variant === 1 ? 0xff8899 : 0x88ccff
  if (lightManager) {
    const forwardOffset = d / 2 + 0.45
    lightManager.register({
      x: x + Math.sin(rotY) * forwardOffset,
      y: 0.15 + 1.2,
      z: z + Math.cos(rotY) * forwardOffset,
      color: vColor,
      intensity: 0.9,
      distance: 4.0,
      decay: 1.2,
      zone: 'Street',
    })
  } else {
    const vLight = new THREE.PointLight(vColor, 0.9, 4)
    vLight.position.set(0, 1.2, d / 2 + 0.45)
    vm.add(vLight)
  }

  const binGeo = new THREE.BoxGeometry(0.42, 0.85, 0.42)
  const binMat = new THREE.MeshStandardMaterial({ color: 0x3d444d, roughness: 0.4 })
  const bin = new THREE.Mesh(binGeo, binMat)
  bin.position.set(w / 2 + 0.32, 0.425, 0)
  vm.add(bin)

  const holeGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 12)
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x111111 })
  const h1 = new THREE.Mesh(holeGeo, holeMat)
  h1.position.set(w / 2 + 0.24, 0.86, 0)
  const h2 = new THREE.Mesh(holeGeo, holeMat)
  h2.position.set(w / 2 + 0.4, 0.86, 0)
  vm.add(h1, h2)

  vm.position.set(x, 0.15, z)
  vm.rotateY(rotY)

  colliders.add({
    minX: x - 0.9,
    minY: 0,
    minZ: z - 0.7,
    maxX: x + 0.9,
    maxY: 2.2,
    maxZ: z + 0.7,
  })

  interactions.add({
    id: `vending-${x}-${z}`,
    x,
    z,
    radius: 1.8,
    prompt: `Buy ${drinkName}`,
    onInteract: () => {
      messages.show(`*Clink-clatter-thump!* You bought a ${drinkName}. It feels warm and soothing in your hands.`)
    },
  })

  return vm
}

// =========================================================================
// 3. POCKET PARK PROPS (AUTHENTIC TOKYO SAKURA POCKET PARK)
// =========================================================================


export function buildRecycleCanReceptacle(
  x: number,
  z: number,
  interactions: InteractionSystem,
  messages: MessageBus,
  audio?: AudioManager,
): THREE.Group {
  const g = new THREE.Group()
  g.position.set(x, 0.15, z)

  const boxW = 0.46
  const boxH = 0.95
  const boxD = 0.4

  const bodyMat = new THREE.MeshStandardMaterial({
    map: canRecycleBoxTexture(),
    roughness: 0.4,
    metalness: 0.2,
  })
  const body = new THREE.Mesh(new THREE.BoxGeometry(boxW, boxH, boxD), bodyMat)
  body.position.set(0, boxH / 2, 0)
  g.add(body)

  const lidMat = new THREE.MeshStandardMaterial({ color: 0x172554, roughness: 0.4 })
  const lid = new THREE.Mesh(new THREE.BoxGeometry(boxW + 0.03, 0.06, boxD + 0.03), lidMat)
  lid.position.set(0, boxH + 0.03, 0)
  g.add(lid)

  const holeMat = new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.8 })
  for (const hx of [-0.12, 0.12]) {
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12), holeMat)
    hole.position.set(hx, boxH + 0.065, 0)
    g.add(hole)
  }

  interactions.add({
    id: 'alley-can-recycle',
    x,
    z,
    radius: 1.8,
    prompt: 'Recycle Can / Bottle [空き缶・ボトル回収]',
    onInteract: () => {
      if (audio) audio.playDeskBellSound()
      messages.show('空き缶・ペットボトル回収BOX: You recycle an empty canned drink with a satisfying *Clatter-clink!*')
    },
  })

  return g
}

// Vintage Gooseneck Japanese Alley Wall Lamp (路地裏の街灯)

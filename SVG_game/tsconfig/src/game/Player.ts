import * as THREE from 'three'
import { axis } from './Input'
import { CollisionWorld } from './Collision'
import { groundAt } from '../world/Layout'

const WALK = 3.65
const ACCEL = 18
const BRAKE = 24
const MOUSE = 0.0022

export class Player {
  x: number
  z: number
  yaw: number
  pitch = 0
  feetY: number
  eye = 1.62
  seated = false

  private vx = 0
  private vz = 0
  private readonly forward = new THREE.Vector3()
  private readonly right = new THREE.Vector3()
  private readonly euler = new THREE.Euler(0, 0, 0, 'YXZ')
  private readonly quat = new THREE.Quaternion()

  constructor(x: number, z: number, yaw: number) {
    this.x = x
    this.z = z
    this.yaw = yaw
    this.feetY = groundAt(x, z)
  }

  applyMouse(dx: number, dy: number): void {
    this.yaw -= dx * MOUSE
    this.pitch -= dy * MOUSE
    this.pitch = Math.max(-1.25, Math.min(1.25, this.pitch))
  }

  update(dt: number, playing: boolean, colliders: CollisionWorld): void {
    // Forward and Right vectors on the horizontal plane
    this.forward.set(0, 0, -1)
    this.euler.set(0, this.yaw, 0, 'YXZ')
    this.forward.applyEuler(this.euler)
    this.forward.y = 0
    if (this.forward.lengthSq() > 1e-6) this.forward.normalize()

    // Perpendicular right vector on X-Z plane
    this.right.set(-this.forward.z, 0, this.forward.x)

    // WASD / Arrow Keys: W/S forward/back, A/D strafe left/right
    const wishForward = playing && !this.seated ? axis(['KeyS', 'ArrowDown'], ['KeyW', 'ArrowUp']) : 0
    const wishRight = playing && !this.seated ? axis(['KeyA', 'ArrowLeft'], ['KeyD', 'ArrowRight']) : 0

    // Combine into planar direction
    let moveX = this.forward.x * wishForward + this.right.x * wishRight
    let moveZ = this.forward.z * wishForward + this.right.z * wishRight
    const moveLen = Math.hypot(moveX, moveZ)
    if (moveLen > 1) {
      moveX /= moveLen
      moveZ /= moveLen
    }

    const targetVx = moveX * WALK
    const targetVz = moveZ * WALK

    // Acceleration and braking
    const targetSpeed = Math.hypot(targetVx, targetVz)
    const currentSpeed = Math.hypot(this.vx, this.vz)
    const rate = targetSpeed > currentSpeed ? ACCEL : BRAKE
    const step = rate * dt

    const diffX = targetVx - this.vx
    const diffZ = targetVz - this.vz
    const diffLen = Math.hypot(diffX, diffZ)

    if (diffLen <= step) {
      this.vx = targetVx
      this.vz = targetVz
    } else {
      this.vx += (diffX / diffLen) * step
      this.vz += (diffZ / diffLen) * step
    }

    if (!playing || this.seated) {
      this.vx = 0
      this.vz = 0
    }

    // Apply movement with collision
    const dx = this.vx * dt
    const dz = this.vz * dt
    if (Math.abs(dx) > 1e-5 || Math.abs(dz) > 1e-5) {
      const next = colliders.move(this.x, this.z, dx, dz, this.feetY)
      this.x = next.x
      this.z = next.z
    }

    // Follow terrain height
    const gy = groundAt(this.x, this.z)
    const follow = 1 - Math.exp(-14 * dt)
    this.feetY += (gy - this.feetY) * follow

    // Eye height adjustment for standing vs seated on bench
    const eyeTarget = this.seated ? 1.05 : 1.62
    this.eye += (eyeTarget - this.eye) * (1 - Math.exp(-8 * dt))
  }

  moving(): boolean {
    return Math.hypot(this.vx, this.vz) > 0.15
  }

  applyCamera(camera: THREE.PerspectiveCamera): void {
    camera.position.set(this.x, this.feetY + this.eye, this.z)
    camera.rotation.order = 'YXZ'
    camera.rotation.y = this.yaw
    camera.rotation.x = this.pitch
    camera.rotation.z = 0
  }

  look(target: THREE.Vector3): THREE.Vector3 {
    this.euler.set(0, this.yaw, 0, 'YXZ')
    this.quat.setFromEuler(this.euler)
    return target.set(0, 0, -1).applyQuaternion(this.quat)
  }

  lookFlat(): { x: number; z: number } {
    const v = this.look(this.forward)
    return { x: v.x, z: v.z }
  }
}

import * as THREE from 'three'
import './style.css'
import { installInput } from './game/Input'
import { CollisionWorld } from './game/Collision'
import { InteractionSystem } from './game/Interaction'
import { MessageBus } from './game/Messages'
import { Player } from './game/Player'
import { getLocationName, isRoad } from './world/Layout'
import { buildStreets } from './world/Streets'
import { buildBuildings } from './world/Buildings'
import { buildProps } from './world/Props'
import { AudioManager } from './world/Audio'
import { Minimap } from './ui/Minimap'
import { Hud } from './ui/Hud'

async function init(): Promise<void> {
  // 1. SETUP THREE.JS SCENE & RENDERER
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0c1017)
  scene.fog = new THREE.FogExp2(0x0c1017, 0.022)

  const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 180)

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.shadowMap.autoUpdate = false // Static demand-driven shadows: zero per-frame shadow overhead

  const appEl = document.getElementById('app')
  if (appEl) {
    appEl.appendChild(renderer.domElement)
  } else {
    document.body.appendChild(renderer.domElement)
  }

  // 2. ATMOSPHERIC NIGHT LIGHTING
  const hemiLight = new THREE.HemisphereLight(0x283850, 0x0a0d14, 0.75)
  scene.add(hemiLight)

  const moonLight = new THREE.DirectionalLight(0x82a4d4, 0.55)
  moonLight.position.set(24, 45, 18)
  moonLight.castShadow = true
  moonLight.shadow.mapSize.width = 1024
  moonLight.shadow.mapSize.height = 1024
  moonLight.shadow.camera.near = 0.5
  moonLight.shadow.camera.far = 120
  moonLight.shadow.camera.left = -50
  moonLight.shadow.camera.right = 50
  moonLight.shadow.camera.top = 50
  moonLight.shadow.camera.bottom = -50
  moonLight.shadow.bias = -0.0006
  scene.add(moonLight)

  let shadowNeedsUpdate = true

  // 3. CORE GAME SYSTEMS
  installInput()
  const colliders = new CollisionWorld()
  const interactions = new InteractionSystem()
  const messages = new MessageBus()
  const audio = new AudioManager()
  const hud = new Hud()

  // STARTING POSITION: Inside Sun Heights Apartment Lobby (X: 0, Z: 18.2)
  // Yaw = Math.PI means facing South towards the front glass exit doors leading out to the street!
  const player = new Player(0, 18.2, Math.PI)
  player.applyCamera(camera)

  // 4. BUILD THE 3D WORLD
  buildStreets(scene, colliders)
  const buildingsRes = buildBuildings(scene, colliders, interactions, messages, audio)
  const propsRes = buildProps(scene, colliders, interactions, messages, player, audio)

  // 5. MINIMAP SETUP
  const mapCanvas = document.getElementById('minimap') as HTMLCanvasElement
  const minimap = mapCanvas ? new Minimap(mapCanvas) : null

  // 6. POINTER LOCK & INTERACTION EVENTS
  let playing = false

  const onPointerLockChange = () => {
    if (document.pointerLockElement === document.body) {
      playing = true
      hud.hideOverlay()
      audio.init()
      audio.resume()
    } else {
      playing = false
      hud.showOverlay()
    }
  }
  document.addEventListener('pointerlockchange', onPointerLockChange)

  const startPlaying = () => {
    audio.init()
    audio.resume()
    document.body.requestPointerLock()
  }

  const overlayEl = document.getElementById('overlay')
  if (overlayEl) {
    overlayEl.addEventListener('click', startPlaying)
  }
  window.addEventListener('click', () => {
    if (!playing) startPlaying()
  })

  window.addEventListener('mousemove', (e) => {
    if (playing) {
      player.applyMouse(e.movementX, e.movementY)
    }
  })

  // Keyboard interaction (E key)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyE') {
      const prompt = interactions.prompt().toLowerCase()
      if (prompt.includes('buy') || prompt.includes('coffee') || prompt.includes('tea')) {
        audio.playVendingSound()
      } else if (prompt.includes('famichiki') || prompt.includes('chicken')) {
        audio.playVendingSound()
      } else if (prompt.includes('water') || prompt.includes('drink park')) {
        audio.playSipWaterSound()
      } else if (prompt.includes('elevator')) {
        audio.playElevatorChime()
      } else if (prompt.includes('cat') || prompt.includes('pet')) {
        audio.playCatMeow()
      } else if (prompt.includes('signal') || prompt.includes('crossing') || prompt.includes('button')) {
        audio.playCrosswalkChime()
      }
      interactions.use()
    }
  })

  // Window resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    shadowNeedsUpdate = true
  })

  // Initial welcome message
  messages.show('Welcome home to Tokyo. Walk through the front glass doors to explore the neighbourhood.', 6.0)

  // 7. MAIN GAME LOOP WITH EXACT 120 FPS LOCK & FRAME PACING
  const clock = new THREE.Clock()
  const TARGET_FPS = 120
  const FRAME_INTERVAL = 1000 / TARGET_FPS // 8.333 ms
  let lastFrameTime = performance.now()

  // Real-time FPS telemetry
  let frameCount = 0
  let fpsTimer = performance.now()
  let currentFps = 120
  const fpsEl = document.getElementById('fps-badge')

  function animate(now: number): void {
    requestAnimationFrame(animate)

    // Sleep when tab is hidden to eliminate background GPU compute
    if (document.hidden) return

    // Throttle frame rate:
    // 120 FPS during gameplay, 30 FPS when paused on overlay
    const targetInterval = !playing ? 1000 / 30 : FRAME_INTERVAL
    const elapsed = now - lastFrameTime

    if (elapsed < targetInterval - 1.0) {
      return // Lock strictly to 120 FPS (skips 144Hz/165Hz/240Hz frame saturation)
    }
    lastFrameTime = now - (elapsed % targetInterval)

    // FPS readout calculation
    frameCount++
    if (now - fpsTimer >= 1000) {
      currentFps = Math.round((frameCount * 1000) / (now - fpsTimer))
      frameCount = 0
      fpsTimer = now
      if (fpsEl) {
        fpsEl.textContent = `${currentFps} FPS`
      }
    }

    const dt = Math.min(clock.getDelta(), 0.05)

    // Player Movement and Camera
    player.update(dt, playing, colliders)
    player.applyCamera(camera)

    // Environmental Animations (Sliding Doors, Steam, Lanterns, Petals, Cat)
    buildingsRes.update(dt, player)
    propsRes.update(dt)

    // Interaction Detection
    interactions.update(player, colliders)
    messages.update(dt)

    // Surface & Footsteps Sound
    const isMoving = playing && !player.seated && player.moving()

    let surface: 'road' | 'walk' | 'tile' | 'park' = 'walk'
    const loc = getLocationName(player.x, player.z)
    if (loc.includes('Lobby') || loc.includes('Store') || loc.includes('Ramen')) {
      surface = 'tile'
    } else if (loc.includes('Park')) {
      surface = 'park'
    } else if (isRoad(player.x, player.z)) {
      surface = 'road'
    }

    audio.updateFootsteps(dt, isMoving, surface)

    // HUD Update
    hud.update(loc, interactions.prompt(), messages.text)

    // Minimap Update (smart dirty check avoids redundant 2D canvas draws)
    if (minimap) {
      minimap.update(player)
    }

    // Static demand-driven shadow map pass
    if (shadowNeedsUpdate) {
      renderer.shadowMap.needsUpdate = true
      shadowNeedsUpdate = false
    }

    // Render Scene
    renderer.render(scene, camera)
  }

  requestAnimationFrame(animate)
}

window.addEventListener('DOMContentLoaded', () => {
  init().catch((err) => console.error('Initialization error:', err))
})

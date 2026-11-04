/**
 * RELZZY ARCADE // RETRO SOUND SYSTEM v1.0
 * Persistent Old-School Arcade Cabinet MP3 Player
 * Features:
 *  - Old-school arcade cabinet styling & pure SVG controls
 *  - Persistent state across all pages via localStorage (track, time, volume, play state)
 *  - Interactive scrubbable progression bar
 *  - +10s Forward, -10s Reverse, Next, Prev, Volume, Playlist drawer
 *  - Built-in Web Audio synth fallback when local MP3s are pending
 */

(() => {
    'use strict';

    // Prevent player from initializing inside embedded iframes (e.g. Focus Garden pavilion)
    try {
        if (window.self !== window.top) {
            return;
        }
    } catch (e) {
        return;
    }

    // -------------------------------------------------------------------------
    // 1. PLAYLIST CONFIGURATION
    // Drop your copyright-free MP3 files into assets/audio/ and list them here:
    // -------------------------------------------------------------------------
    const PLAYLIST = [
        {
            title: "Neon Horizon // Cyber Highway",
            artist: "Relzzy Arcade (Chiptune)",
            src: "assets/audio/neon-horizon.mp3",
            duration: 174,
            synthPreset: "synthwave"
        },
        {
            title: "Midnight Quest // 8-Bit Dungeon",
            artist: "Pixel Master (Retro Chiptune)",
            src: "assets/audio/midnight-quest.mp3",
            duration: 148,
            synthPreset: "chiptune"
        },
        {
            title: "Ethereal Rain // Cyber Sanctuary",
            artist: "Lofi Dreamer (Ambient)",
            src: "assets/audio/ethereal-rain.mp3",
            duration: 192,
            synthPreset: "ambient"
        }
    ];

    const STORAGE_KEY = 'relzzy_arcade_player_state';

    // -------------------------------------------------------------------------
    // 2. SVG ICON DEFINITIONS
    // -------------------------------------------------------------------------
    const ICONS = {
        token: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v8h-4zm5 0h2v8h-2z"/></svg>`,
        play: `<svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"/></svg>`,
        pause: `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
        prev: `<svg viewBox="0 0 24 24"><polygon points="6 6 6 18 8 18 8 6 6 6"/><polygon points="18 6 9 12 18 18 18 6"/></svg>`,
        next: `<svg viewBox="0 0 24 24"><polygon points="6 18 15 12 6 6 6 18"/><polygon points="16 6 18 6 18 18 16 18 16 6"/></svg>`,
        rewind10: `<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/><text x="12" y="15" font-size="7" font-weight="bold" text-anchor="middle" fill="currentColor" font-family="sans-serif">-10</text></svg>`,
        forward10: `<svg viewBox="0 0 24 24"><path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/><text x="12" y="15" font-size="7" font-weight="bold" text-anchor="middle" fill="currentColor" font-family="sans-serif">+10</text></svg>`,
        volumeHigh: `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        volumeMute: `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`,
        expand: `<svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`,
        minimize: `<svg viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`
    };

    // -------------------------------------------------------------------------
    // 3. RETRO CHIPTUNE / SYNTH ENGINE (FALLBACK WHEN MP3 IS NOT FOUND)
    // -------------------------------------------------------------------------
    class ArcadeSynth {
        constructor() {
            this.ctx = null;
            this.active = false;
            this.timer = null;
            this.step = 0;
            this.tempo = 125;
            this.preset = 'synthwave';
        }

        init() {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) this.ctx = new AudioCtx();
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
            }
        }

        start(preset = 'synthwave') {
            this.init();
            if (!this.ctx || this.active) return;
            this.active = true;
            this.preset = preset;
            this.step = 0;

            const synthPatterns = {
                synthwave: [
                    220.00, 261.63, 329.63, 261.63, 220.00, 196.00, 246.94, 293.66,
                    329.63, 392.00, 440.00, 392.00, 329.63, 261.63, 220.00, 164.81
                ],
                chiptune: [
                    440.00, 523.25, 659.25, 880.00, 783.99, 659.25, 587.33, 523.25,
                    440.00, 659.25, 523.25, 440.00, 349.23, 392.00, 440.00, 493.88
                ],
                ambient: [
                    164.81, 196.00, 220.00, 246.94, 220.00, 196.00, 164.81, 146.83,
                    130.81, 164.81, 196.00, 220.00, 261.63, 220.00, 196.00, 164.81
                ]
            };

            const notes = synthPatterns[preset] || synthPatterns.synthwave;
            const stepDuration = (60 / this.tempo) / 2;

            const tick = () => {
                if (!this.active) return;
                const freq = notes[this.step % notes.length];
                this.playNote(freq, stepDuration * 0.9);
                this.step++;
                this.timer = setTimeout(tick, stepDuration * 1000);
            };
            tick();
        }

        playNote(freq, dur) {
            try {
                if (!this.ctx) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();

                osc.type = this.preset === 'chiptune' ? 'square' : 'sawtooth';
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(this.preset === 'chiptune' ? 2400 : 1200, this.ctx.currentTime);
                filter.Q.setValueAtTime(4, this.ctx.currentTime);

                gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + dur);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + dur);
            } catch (e) {}
        }

        stop() {
            this.active = false;
            if (this.timer) clearTimeout(this.timer);
            this.timer = null;
        }
    }

    // -------------------------------------------------------------------------
    // 4. MAIN ARCADE PLAYER CONTROLLER
    // -------------------------------------------------------------------------
    class ArcadePlayer {
        constructor() {
            this.playlist = PLAYLIST;
            this.trackIndex = 0;
            this.audio = new Audio();
            this.synth = new ArcadeSynth();
            this.isUsingSynth = false;

            this.isPlaying = false;
            this.isExpanded = false;
            this.currentTime = 0;
            this.duration = 0;
            this.volume = 0.8;
            this.isMuted = false;
            this.isScrubbing = false;

            this.syncTimer = null;

            this.loadState();
            this.buildDOM();
            this.bindEvents();
            this.setupNavigationPersistence();

            // Setup track from saved state
            this.setTrack(this.trackIndex, false);

            // Attempt resume if it was actively playing before page reload
            if (this.savedWasPlaying) {
                this.resumePlayback();
            }
        }

        // --- State Management via localStorage ---
        loadState() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const data = JSON.parse(raw);
                    if (Number.isInteger(data.trackIndex) && data.trackIndex >= 0 && data.trackIndex < this.playlist.length) {
                        this.trackIndex = data.trackIndex;
                    }
                    if (Number.isFinite(data.currentTime) && data.currentTime >= 0) {
                        this.currentTime = data.currentTime;
                    }
                    this.savedWasPlaying = !!data.isPlaying;
                    this.isExpanded = !!data.isExpanded;
                    if (Number.isFinite(data.volume)) {
                        this.volume = Math.max(0, Math.min(1, data.volume));
                    }
                    this.isMuted = !!data.isMuted;
                }
            } catch (e) {
                console.warn('[ArcadePlayer] Error loading state:', e);
            }
        }

        saveState() {
            try {
                const state = {
                    trackIndex: this.trackIndex,
                    currentTime: this.currentTime,
                    isPlaying: this.isPlaying,
                    volume: this.volume,
                    isMuted: this.isMuted,
                    isExpanded: this.isExpanded,
                    timestamp: Date.now()
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (e) {}
        }

        setupNavigationPersistence() {
            // Save state rapidly while playing
            this.syncTimer = setInterval(() => {
                if (this.isPlaying) {
                    this.saveState();
                }
            }, 350);

            // Save on beforeunload / pagehide
            window.addEventListener('beforeunload', () => this.saveState());
            window.addEventListener('pagehide', () => this.saveState());

            // Intercept internal link clicks to grab the exact audio timestamp right before navigation
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a');
                if (link && link.href) {
                    const isInternal = link.href.startsWith(window.location.origin) || !link.href.includes('://');
                    if (isInternal && !link.target && !link.href.includes('#')) {
                        if (!this.isUsingSynth && this.audio) {
                            this.currentTime = this.audio.currentTime;
                        }
                        this.saveState();
                    }
                }
            }, { capture: true });
        }

        // --- Build DOM Elements ---
        buildDOM() {
            let container = document.getElementById('arcade-player');
            if (!container) {
                container = document.createElement('div');
                container.id = 'arcade-player';
                document.body.appendChild(container);
            }

            if (this.isExpanded) {
                container.classList.add('is-expanded');
            }

            container.innerHTML = `
                <!-- 1. Collapsed Mini Bar -->
                <div class="arc-mini-bar" id="arc-mini-bar" title="Click to Expand Arcade Sound Deck">
                    <div class="arc-mini-token" title="Relzzy Arcade Audio">
                        ${ICONS.token}
                    </div>
                    <div class="arc-mini-info">
                        <span class="arc-mini-label">ARCADE SOUND</span>
                        <span class="arc-mini-title" id="arc-mini-title">Track Title</span>
                    </div>
                    <div class="arc-mini-eq">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div class="arc-mini-controls">
                        <button class="arc-mini-btn" id="arc-mini-prev" type="button" aria-label="Previous Track" title="Previous Track">
                            ${ICONS.prev}
                        </button>
                        <button class="arc-mini-btn arc-mini-play-btn" id="arc-mini-play" type="button" aria-label="Play/Pause" title="Play/Pause">
                            ${ICONS.play}
                        </button>
                        <button class="arc-mini-btn" id="arc-mini-next" type="button" aria-label="Next Track" title="Next Track">
                            ${ICONS.next}
                        </button>
                    </div>
                    <button class="arc-expand-btn" id="arc-expand-btn" type="button" aria-label="Expand Controls" title="Expand Sound Console">
                        ${ICONS.expand} <span>DECK</span>
                    </button>
                </div>

                <!-- 2. Expanded Arcade Console Deck -->
                <div class="arc-console arc-scanlines" id="arc-console">
                    <!-- Console Header -->
                    <div class="arc-console-header">
                        <div class="arc-header-brand">
                            <span class="arc-header-dot"></span>
                            <span class="arc-header-title">RELZZY ARCADE // SOUND SYSTEM</span>
                        </div>
                        <button class="arc-close-btn" id="arc-minimize-btn" type="button" title="Minimize Deck">
                            ${ICONS.minimize}
                        </button>
                    </div>

                    <!-- CRT Display Screen -->
                    <div class="arc-screen">
                        <div class="arc-screen-top">
                            <span class="arc-badge-mode" id="arc-badge-mode">CH-01 // STEREO</span>
                            <span id="arc-time-display">00:00 / 00:00</span>
                        </div>
                        <div class="arc-track-title" id="arc-full-title">Loading track...</div>
                        <div class="arc-track-artist" id="arc-full-artist">Artist</div>

                        <!-- 8-Column Spectrum Visualizer -->
                        <div class="arc-spectrum" aria-hidden="true">
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                            <div class="arc-spectrum-bar"></div>
                        </div>
                    </div>

                    <!-- Interactive Progress Scrubber Bar -->
                    <div class="arc-progress-wrap">
                        <div class="arc-progress-bar-container" id="arc-progress-container" role="slider" aria-label="Track Progress" tabindex="0">
                            <div class="arc-progress-fill" id="arc-progress-fill">
                                <span class="arc-progress-thumb"></span>
                            </div>
                        </div>
                        <div class="arc-time-row">
                            <span class="arc-time-current" id="arc-time-current">00:00</span>
                            <span class="arc-time-total" id="arc-time-total">00:00</span>
                        </div>
                    </div>

                    <!-- Arcade Button Bank -->
                    <div class="arc-controls-bank">
                        <button class="arc-btn" id="arc-btn-prev" type="button" title="Previous Track">
                            ${ICONS.prev}
                            <span class="arc-btn-tag">PREV</span>
                        </button>

                        <button class="arc-btn arc-btn-skip" id="arc-btn-rewind" type="button" title="Rewind 10 Seconds">
                            ${ICONS.rewind10}
                            <span class="arc-btn-tag">-10s</span>
                        </button>

                        <button class="arc-btn arc-btn-play" id="arc-btn-play" type="button" title="Play / Pause">
                            ${ICONS.play}
                        </button>

                        <button class="arc-btn arc-btn-skip" id="arc-btn-forward" type="button" title="Forward 10 Seconds">
                            ${ICONS.forward10}
                            <span class="arc-btn-tag">+10s</span>
                        </button>

                        <button class="arc-btn" id="arc-btn-next" type="button" title="Next Track">
                            ${ICONS.next}
                            <span class="arc-btn-tag">NEXT</span>
                        </button>
                    </div>

                    <!-- Volume & Track Drawer Footer -->
                    <div class="arc-footer-row">
                        <div class="arc-vol-wrap">
                            <button class="arc-vol-btn" id="arc-vol-btn" type="button" title="Toggle Mute">
                                ${ICONS.volumeHigh}
                            </button>
                            <input class="arc-vol-slider" id="arc-vol-slider" type="range" min="0" max="1" step="0.05" value="${this.volume}" aria-label="Volume">
                        </div>

                        <select class="arc-playlist-select" id="arc-playlist-select" aria-label="Select Track">
                            ${this.playlist.map((t, idx) => `<option value="${idx}">${idx + 1}. ${t.title.split('//')[0].trim()}</option>`).join('')}
                        </select>
                    </div>
                </div>
            `;

            this.dom = {
                container,
                miniBar: container.querySelector('#arc-mini-bar'),
                miniTitle: container.querySelector('#arc-mini-title'),
                miniPrev: container.querySelector('#arc-mini-prev'),
                miniPlay: container.querySelector('#arc-mini-play'),
                miniNext: container.querySelector('#arc-mini-next'),
                expandBtn: container.querySelector('#arc-expand-btn'),
                minimizeBtn: container.querySelector('#arc-minimize-btn'),
                badgeMode: container.querySelector('#arc-badge-mode'),
                timeDisplay: container.querySelector('#arc-time-display'),
                fullTitle: container.querySelector('#arc-full-title'),
                fullArtist: container.querySelector('#arc-full-artist'),
                progressContainer: container.querySelector('#arc-progress-container'),
                progressFill: container.querySelector('#arc-progress-fill'),
                timeCurrent: container.querySelector('#arc-time-current'),
                timeTotal: container.querySelector('#arc-time-total'),
                btnPrev: container.querySelector('#arc-btn-prev'),
                btnRewind: container.querySelector('#arc-btn-rewind'),
                btnPlay: container.querySelector('#arc-btn-play'),
                btnForward: container.querySelector('#arc-btn-forward'),
                btnNext: container.querySelector('#arc-btn-next'),
                volBtn: container.querySelector('#arc-vol-btn'),
                volSlider: container.querySelector('#arc-vol-slider'),
                playlistSelect: container.querySelector('#arc-playlist-select')
            };
        }

        // --- Bind User Interactions ---
        bindEvents() {
            // Expand / Minimize
            this.dom.miniBar.addEventListener('click', (e) => {
                if (e.target.closest('.arc-mini-btn') || e.target.closest('.arc-expand-btn')) return;
                this.setExpanded(true);
            });
            this.dom.expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.setExpanded(true);
            });
            this.dom.minimizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.setExpanded(false);
            });

            // Mini Bar Prev & Next
            this.dom.miniPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                this.prevTrack();
            });
            this.dom.miniNext.addEventListener('click', (e) => {
                e.stopPropagation();
                this.nextTrack();
            });

            // Play / Pause Buttons
            const togglePlay = () => this.togglePlay();
            this.dom.miniPlay.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });
            this.dom.btnPlay.addEventListener('click', togglePlay);

            // Previous / Next Track
            this.dom.btnPrev.addEventListener('click', () => this.prevTrack());
            this.dom.btnNext.addEventListener('click', () => this.nextTrack());

            // Skip +10s / Rewind -10s
            this.dom.btnRewind.addEventListener('click', () => this.skip(-10));
            this.dom.btnForward.addEventListener('click', () => this.skip(10));

            // Volume Control
            this.dom.volSlider.addEventListener('input', (e) => {
                this.setVolume(parseFloat(e.target.value));
            });
            this.dom.volBtn.addEventListener('click', () => {
                this.toggleMute();
            });

            // Playlist Selection
            this.dom.playlistSelect.addEventListener('change', (e) => {
                this.setTrack(parseInt(e.target.value, 10), true);
            });

            // Scrubber Click & Drag
            this.setupScrubber();

            // Native HTML5 Audio Events
            this.audio.addEventListener('loadedmetadata', () => {
                if (Number.isFinite(this.audio.duration)) {
                    this.duration = this.audio.duration;
                }
                if (this.currentTime > 0 && Number.isFinite(this.audio.duration)) {
                    this.audio.currentTime = Math.min(this.currentTime, this.audio.duration);
                }
                this.updateUI();
            });

            this.audio.addEventListener('timeupdate', () => {
                if (!this.isScrubbing && !this.isUsingSynth) {
                    this.currentTime = this.audio.currentTime;
                    this.duration = this.audio.duration || this.playlist[this.trackIndex].duration || 180;
                    this.updateUI();
                }
            });

            this.audio.addEventListener('ended', () => {
                this.nextTrack(true);
            });

            this.audio.addEventListener('error', () => {
                // Audio file not found or unplayable -> fallback to retro chiptune synth!
                console.log('[ArcadePlayer] MP3 file not found or unplayable. Activating retro arcade synthesizer fallback.');
                this.isUsingSynth = true;
                this.dom.badgeMode.textContent = `SYNTH // ${this.playlist[this.trackIndex].synthPreset.toUpperCase()}`;
                if (this.isPlaying) {
                    this.synth.start(this.playlist[this.trackIndex].synthPreset);
                }
            });
        }

        // --- Scrubbing Logic ---
        setupScrubber() {
            const container = this.dom.progressContainer;

            const seekFromEvent = (e) => {
                const rect = container.getBoundingClientRect();
                const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const targetTime = pos * (this.duration || 180);
                this.seekTo(targetTime);
            };

            container.addEventListener('mousedown', (e) => {
                this.isScrubbing = true;
                seekFromEvent(e);

                const onMouseMove = (ev) => seekFromEvent(ev);
                const onMouseUp = () => {
                    this.isScrubbing = false;
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                };

                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            });

            // Touch scrubbing for mobile
            container.addEventListener('touchstart', (e) => {
                this.isScrubbing = true;
                const touch = e.touches[0];
                seekFromEvent(touch);

                const onTouchMove = (ev) => seekFromEvent(ev.touches[0]);
                const onTouchEnd = () => {
                    this.isScrubbing = false;
                    window.removeEventListener('touchmove', onTouchMove);
                    window.removeEventListener('touchend', onTouchEnd);
                };

                window.addEventListener('touchmove', onTouchMove, { passive: true });
                window.addEventListener('touchend', onTouchEnd);
            }, { passive: true });
        }

        // --- Playback Controls ---
        setTrack(index, autoPlay = false) {
            this.trackIndex = (index + this.playlist.length) % this.playlist.length;
            const track = this.playlist[this.trackIndex];

            this.dom.playlistSelect.value = this.trackIndex;
            this.dom.miniTitle.textContent = track.title;
            this.dom.fullTitle.textContent = track.title;
            this.dom.fullArtist.textContent = track.artist;
            this.dom.badgeMode.textContent = `CH-0${this.trackIndex + 1} // STEREO`;

            this.isUsingSynth = false;
            this.synth.stop();

            this.duration = track.duration || 180;
            const isSubdir = window.location.pathname.includes('/focus-garden');
            this.audio.src = isSubdir ? ('../' + track.src) : track.src;
            this.audio.volume = this.isMuted ? 0 : this.volume;

            if (autoPlay) {
                this.currentTime = 0;
                this.play();
            } else {
                this.updateUI();
            }
            this.saveState();
        }

        togglePlay() {
            if (this.isPlaying) {
                this.pause();
            } else {
                this.play();
            }
        }

        play() {
            this.isPlaying = true;
            this.dom.container.classList.add('arc-playing');
            this.dom.miniPlay.innerHTML = ICONS.pause;
            this.dom.btnPlay.innerHTML = ICONS.pause;

            if (this.isUsingSynth) {
                this.synth.start(this.playlist[this.trackIndex].synthPreset);
                this.startSynthTimer();
            } else {
                const playPromise = this.audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch((err) => {
                        console.warn('[ArcadePlayer] Autoplay or playback restricted:', err.message);
                        // If error is source error, it triggers 'error' event; if autoplay policy:
                        this.isPlaying = false;
                        this.dom.container.classList.remove('arc-playing');
                        this.dom.miniPlay.innerHTML = ICONS.play;
                        this.dom.btnPlay.innerHTML = ICONS.play;
                    });
                }
            }
            this.saveState();
        }

        pause() {
            this.isPlaying = false;
            this.dom.container.classList.remove('arc-playing');
            this.dom.miniPlay.innerHTML = ICONS.play;
            this.dom.btnPlay.innerHTML = ICONS.play;

            if (this.isUsingSynth) {
                this.synth.stop();
                this.stopSynthTimer();
            } else {
                this.audio.pause();
            }
            this.saveState();
        }

        resumePlayback() {
            // Attempt autoplay resume across pages
            const resumeAttempt = () => {
                if (this.savedWasPlaying) {
                    this.play();
                }
            };
            // Try immediately, or on first interaction if blocked by policy
            resumeAttempt();
            const onFirstGesture = () => {
                if (this.savedWasPlaying && !this.isPlaying) {
                    this.play();
                }
                window.removeEventListener('click', onFirstGesture);
                window.removeEventListener('keydown', onFirstGesture);
            };
            window.addEventListener('click', onFirstGesture, { once: true });
            window.addEventListener('keydown', onFirstGesture, { once: true });
        }

        seekTo(seconds) {
            const target = Math.max(0, Math.min(seconds, this.duration || 180));
            this.currentTime = target;
            if (!this.isUsingSynth && this.audio) {
                try {
                    this.audio.currentTime = target;
                } catch (e) {}
            }
            this.updateUI();
            this.saveState();
        }

        skip(deltaSeconds) {
            this.seekTo(this.currentTime + deltaSeconds);
        }

        prevTrack() {
            this.setTrack(this.trackIndex - 1, this.isPlaying);
        }

        nextTrack(fromEnded = false) {
            this.setTrack(this.trackIndex + 1, fromEnded || this.isPlaying);
        }

        setVolume(val) {
            this.volume = Math.max(0, Math.min(1, val));
            this.isMuted = false;
            this.audio.volume = this.volume;
            this.dom.volSlider.value = this.volume;
            this.dom.volBtn.innerHTML = this.volume === 0 ? ICONS.volumeMute : ICONS.volumeHigh;
            this.saveState();
        }

        toggleMute() {
            this.isMuted = !this.isMuted;
            this.audio.volume = this.isMuted ? 0 : this.volume;
            this.dom.volBtn.innerHTML = this.isMuted ? ICONS.volumeMute : ICONS.volumeHigh;
            this.saveState();
        }

        setExpanded(expanded) {
            this.isExpanded = !!expanded;
            if (this.isExpanded) {
                this.dom.container.classList.add('is-expanded');
            } else {
                this.dom.container.classList.remove('is-expanded');
            }
            this.saveState();
        }

        // --- Synthetic Time Advancement (when using Synth fallback) ---
        startSynthTimer() {
            this.stopSynthTimer();
            this.synthClock = setInterval(() => {
                if (this.isPlaying && this.isUsingSynth) {
                    this.currentTime++;
                    if (this.currentTime >= (this.duration || 180)) {
                        this.nextTrack(true);
                    } else {
                        this.updateUI();
                    }
                }
            }, 1000);
        }

        stopSynthTimer() {
            if (this.synthClock) clearInterval(this.synthClock);
            this.synthClock = null;
        }

        // --- Time Format & UI Refresh ---
        formatTime(sec) {
            if (!Number.isFinite(sec) || sec < 0) return '00:00';
            const m = Math.floor(sec / 60);
            const s = Math.floor(sec % 60);
            return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
        }

        updateUI() {
            const currentStr = this.formatTime(this.currentTime);
            const totalStr = this.formatTime(this.duration || 180);

            this.dom.timeCurrent.textContent = currentStr;
            this.dom.timeTotal.textContent = totalStr;
            this.dom.timeDisplay.textContent = `${currentStr} / ${totalStr}`;

            const percent = Math.max(0, Math.min(100, (this.currentTime / (this.duration || 180)) * 100));
            this.dom.progressFill.style.width = `${percent}%`;
        }
    }

    // -------------------------------------------------------------------------
    // 5. INITIALIZE ON DOM READY
    // -------------------------------------------------------------------------
    function init() {
        if (window.__relzzyArcadePlayer) return;
        window.__relzzyArcadePlayer = new ArcadePlayer();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

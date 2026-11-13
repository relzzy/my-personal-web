/**
 * RELZZY ARCADE // SOUND SYSTEM v2.0
 * Futuristic Retro-Arcade Cabinet Music Player
 * 
 * Features:
 *  - Dual playback modes:
 *      * LOCAL MODE: Plays hosted MP3 files with built-in retro chiptune synth fallback
 *      * YOUTUBE MODE: Streams personal YouTube playlist using official YouTube IFrame Player API
 *  - Pure SVG arcade micro-switch controls with neon glow styling
 *  - Two-way playback, seeking, volume, and track metadata synchronization
 *  - Strictly complies with YouTube Terms of Service & minimum 200x200 viewport requirements
 *  - Zero overlapping audio when switching modes
 *  - Persistent state across all pages via localStorage
 *  - Central configuration via assets/js/arcade-config.js (or inline fallback)
 */

(() => {
    'use strict';

    // Prevent player from initializing inside embedded iframes (e.g. Focus Garden pavilion)
    try {
        if (window.self !== window.top) {
            return;
        }
    } catch (e) {
        // Do not abort if window.top access was restricted by browser security
    }

    const STORAGE_KEY = 'relzzy_arcade_player_state';

    // -------------------------------------------------------------------------
    // 1. CONFIGURATION FALLBACK & URL PARSER
    // -------------------------------------------------------------------------
    const DEFAULT_CONFIG = {
        defaultMode: 'youtube',
        youtube: {
            playlistId: "https://www.youtube.com/watch?v=VgPo3q01kbg&list=PLJP99BZ60TE4",
            tracks: [
                { videoId: "VgPo3q01kbg", title: "R O U N D 5 ｜ Alien Stage", artist: "VIVINOS" },
                { videoId: "ZSLmP-af8W0", title: "燈 - 崎山蒼志 (呪術廻戦 第2期 ED)", artist: "TOHO animation" },
                { videoId: "ED1zGslwM8o", title: "【MAD】呪術廻戦 懐玉・玉折 (青のすみか)", artist: "a_mi" },
                { videoId: "zsBBWBEZkFQ", title: "【Ado】MIRROR", artist: "Ado" },
                { videoId: "NahQKl3z3mg", title: "PnB Rock - Unforgettable (Freestyle)", artist: "PnB Rock" },
                { videoId: "x47TgeRJtH0", title: "The Neighbourhood - Reflections", artist: "The Neighbourhood" }
            ],
            apiKey: ""
        },
        localPlaylist: [
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
        ]
    };

    function getPlayerConfig() {
        if (window.ARCADE_CONFIG && typeof window.ARCADE_CONFIG === 'object') {
            return window.ARCADE_CONFIG;
        }
        return DEFAULT_CONFIG;
    }

    /**
     * Extracts YouTube playlist ID from raw ID or various YouTube URL formats.
     */
    function extractPlaylistId(input) {
        if (!input || typeof input !== 'string') return '';
        const trimmed = input.trim();
        try {
            if (trimmed.includes('http://') || trimmed.includes('https://') || trimmed.includes('youtube.com') || trimmed.includes('youtu.be')) {
                const url = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
                const listParam = url.searchParams.get('list');
                if (listParam) return listParam;
            }
        } catch (e) {}

        const match = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
        if (match && match[1]) return match[1];

        const rawMatch = trimmed.match(/^[a-zA-Z0-9_-]+$/);
        if (rawMatch) return trimmed;

        return trimmed;
    }

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
    // 3. RETRO CHIPTUNE / SYNTH ENGINE (FALLBACK WHEN LOCAL MP3 IS MISSING)
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
    // 4. YOUTUBE IFRAME API LOADER (SINGLETON ASYNC PROMISE)
    // -------------------------------------------------------------------------
    let ytApiLoadingPromise = null;
    function loadYouTubeIframeApi() {
        if (window.YT && window.YT.Player) {
            return Promise.resolve(window.YT);
        }
        if (ytApiLoadingPromise) {
            return ytApiLoadingPromise;
        }

        ytApiLoadingPromise = new Promise((resolve, reject) => {
            const previousCallback = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                if (typeof previousCallback === 'function') {
                    try { previousCallback(); } catch (e) {}
                }
                resolve(window.YT);
            };

            const existing = document.querySelector('script[src*="youtube.com/iframe_api"]');
            if (!existing) {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                tag.async = true;
                tag.onerror = () => {
                    reject(new Error('Failed to load YouTube IFrame API (Network error or Adblocker)'));
                };
                const firstScript = document.getElementsByTagName('script')[0];
                if (firstScript && firstScript.parentNode) {
                    firstScript.parentNode.insertBefore(tag, firstScript);
                } else {
                    document.head.appendChild(tag);
                }
            }
        });

        return ytApiLoadingPromise;
    }

    // -------------------------------------------------------------------------
    // 5. YOUTUBE AUDIO CONTROLLER
    // -------------------------------------------------------------------------
    class YouTubeAudioController {
        constructor(options = {}) {
            this.containerId = options.containerId || 'arc-yt-player';
            this.presetTracks = options.presetTracks || [];
            this.onStateChange = options.onStateChange || (() => {});
            this.onTrackUpdate = options.onTrackUpdate || (() => {});
            this.onTimeUpdate = options.onTimeUpdate || (() => {});
            this.onError = options.onError || (() => {});
            this.onReady = options.onReady || (() => {});

            this.player = null;
            this.isReady = false;
            this.isPlaying = false;
            this.playlistId = '';
            this.playlistItems = [];
            this.pendingTrackIndex = null;
            this.trackIndex = 0;
            this.currentTime = 0;
            this.duration = 0;
            this.pollTimer = null;
            this.skipTimeout = null;

            if (Array.isArray(this.presetTracks) && this.presetTracks.length > 0) {
                this.playlistItems = this.presetTracks.map((item, idx) => ({
                    index: idx,
                    videoId: item.videoId || item.id || '',
                    title: item.title || `Track ${idx + 1}`,
                    artist: item.artist || 'YouTube'
                }));
            }
        }

        init(playlistRawId, apiKey = '', presetTracks = []) {
            this.playlistId = extractPlaylistId(playlistRawId);
            if (!this.playlistId) {
                console.warn('[ArcadePlayer] No valid YouTube playlist ID specified.');
                this.onError('ERR // NO PLAYLIST ID');
                return Promise.reject(new Error('Invalid Playlist ID'));
            }

            if (Array.isArray(presetTracks) && presetTracks.length > 0) {
                this.presetTracks = presetTracks;
                this.playlistItems = presetTracks.map((item, idx) => ({
                    index: idx,
                    videoId: item.videoId || item.id || '',
                    title: item.title || `Track ${idx + 1}`,
                    artist: item.artist || 'YouTube'
                }));
            }

            // Optional: If an API key is provided, prefetch full playlist item titles
            if (apiKey && apiKey.trim() && apiKey !== 'YOUR_API_KEY_HERE') {
                this.prefetchPlaylistMetadata(this.playlistId, apiKey.trim());
            }

            return loadYouTubeIframeApi()
                .then((YT) => {
                    return new Promise((resolve) => {
                        this.player = new YT.Player(this.containerId, {
                            width: '100%',
                            height: '200',
                            playerVars: {
                                listType: 'playlist',
                                list: this.playlistId,
                                autoplay: 0,
                                controls: 1, // Native YouTube controls remain fully accessible
                                modestbranding: 1,
                                playsinline: 1, // Plays inline on mobile browsers
                                rel: 0,
                                enablejsapi: 1,
                                origin: window.location.origin
                            },
                            events: {
                                onReady: (event) => {
                                    this.isReady = true;
                                    if (typeof this.pendingTrackIndex === 'number') {
                                        const pending = this.pendingTrackIndex;
                                        this.pendingTrackIndex = null;
                                        try {
                                            this.player.playVideoAt(pending);
                                        } catch (e) {}
                                    }
                                    this.syncPlaylistFromPlayer();
                                    this.syncTrackInfo();
                                    this.onReady();
                                    resolve(event);
                                },
                                onStateChange: (event) => {
                                    this.handleStateChange(event);
                                },
                                onError: (event) => {
                                    this.handleError(event);
                                }
                            }
                        });
                    });
                })
                .catch((err) => {
                    console.error('[ArcadePlayer] YouTube API initialization failed:', err);
                    this.onError('ERR // YT OFFLINE');
                });
        }

        prefetchPlaylistMetadata(playlistId, apiKey) {
            try {
                const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${encodeURIComponent(playlistId)}&key=${encodeURIComponent(apiKey)}`;
                const self = this;
                fetch(endpoint)
                    .then((res) => {
                        if (res && res.ok) return res.json();
                        return null;
                    })
                    .then((data) => {
                        if (data && data.items && Array.isArray(data.items)) {
                            self.playlistItems = data.items.map((item, idx) => {
                                const snippet = (item && item.snippet) ? item.snippet : {};
                                const resId = snippet.resourceId || {};
                                return {
                                    index: idx,
                                    videoId: resId.videoId || '',
                                    title: snippet.title || `Track ${idx + 1}`,
                                    artist: snippet.videoOwnerChannelTitle || snippet.channelTitle || 'YouTube'
                                };
                            });
                            self.onTrackUpdate(self.getCurrentTrackInfo());
                        }
                    })
                    .catch((e) => {
                        console.warn('[ArcadePlayer] YouTube Data API v3 prefetch error:', e);
                    });
            } catch (e) {
                console.warn('[ArcadePlayer] YouTube Data API v3 prefetch skipped:', e);
            }
        }

        syncPlaylistFromPlayer() {
            if (!this.player || typeof this.player.getPlaylist !== 'function') return;
            try {
                const ids = this.player.getPlaylist();
                if (Array.isArray(ids) && ids.length > 0) {
                    let updated = false;

                    if (this.playlistItems.length !== ids.length) {
                        this.playlistItems = ids.map((id, idx) => {
                            const existing = this.playlistItems[idx];
                            if (existing && existing.videoId === id && existing.title && !existing.title.startsWith('Track ')) {
                                return existing;
                            }
                            const preset = (this.presetTracks || []).find(p => (p.videoId === id || p.id === id));
                            if (preset) {
                                return { index: idx, videoId: id, title: preset.title, artist: preset.artist || 'YouTube' };
                            }
                            return { index: idx, videoId: id, title: `Track ${idx + 1}`, artist: 'YouTube' };
                        });
                        updated = true;
                    }

                    const currentIdx = typeof this.player.getPlaylistIndex === 'function' ? this.player.getPlaylistIndex() : this.trackIndex;
                    if (currentIdx >= 0 && typeof this.player.getVideoData === 'function') {
                        const data = this.player.getVideoData();
                        if (data && data.title && this.playlistItems[currentIdx]) {
                            if (this.playlistItems[currentIdx].title !== data.title) {
                                this.playlistItems[currentIdx].title = data.title;
                                if (data.author) this.playlistItems[currentIdx].artist = data.author;
                                updated = true;
                            }
                        }
                    }

                    this.fetchMissingOEmbedTitles();

                    if (updated && typeof this.onTrackUpdate === 'function') {
                        this.onTrackUpdate(this.getCurrentTrackInfo());
                    }
                }
            } catch (e) {}
        }

        fetchMissingOEmbedTitles() {
            if (!Array.isArray(this.playlistItems)) return;
            this.playlistItems.forEach((item) => {
                if (item.videoId && (!item.title || item.title.startsWith('Track ') || item.title === 'Current Stream')) {
                    if (item._fetching) return;
                    item._fetching = true;
                    try {
                        fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${encodeURIComponent(item.videoId)}&format=json`)
                            .then(r => (r && r.ok) ? r.json() : null)
                            .then(data => {
                                if (data && data.title) {
                                    item.title = data.title;
                                    if (data.author_name) item.artist = data.author_name;
                                    if (typeof this.onTrackUpdate === 'function') {
                                        this.onTrackUpdate(this.getCurrentTrackInfo());
                                    }
                                }
                            })
                            .catch(() => {});
                    } catch (e) {}
                }
            });
        }

        handleStateChange(event) {
            const YTState = window.YT ? window.YT.PlayerState : {
                ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5
            };

            switch (event.data) {
                case YTState.PLAYING:
                    this.isPlaying = true;
                    this.startPolling();
                    this.syncPlaylistFromPlayer();
                    this.syncTrackInfo();
                    this.onStateChange(true);
                    break;

                case YTState.PAUSED:
                    this.isPlaying = false;
                    this.stopPolling();
                    this.onStateChange(false);
                    break;

                case YTState.BUFFERING:
                    this.syncPlaylistFromPlayer();
                    this.syncTrackInfo();
                    break;

                case YTState.CUED:
                    this.isPlaying = false;
                    this.stopPolling();
                    this.syncPlaylistFromPlayer();
                    this.syncTrackInfo();
                    this.onStateChange(false);
                    break;

                case YTState.ENDED:
                    // Playlist naturally transitions, but ensure UI tracks advance
                    this.syncPlaylistFromPlayer();
                    this.syncTrackInfo();
                    break;
            }
        }

        handleError(event) {
            const code = event.data;
            console.warn('[ArcadePlayer] YouTube Player Error:', code);

            let msg = 'ERR // STREAM';
            if (code === 2) msg = 'ERR // INVALID ID';
            else if (code === 5) msg = 'ERR // HTML5 ERROR';
            else if (code === 100) msg = 'ERR // NOT FOUND';
            else if (code === 101 || code === 150) msg = 'ERR // RESTRICTED';

            this.onError(msg);

            // If video is restricted or deleted, gracefully auto-skip to the next video
            if (code === 100 || code === 101 || code === 150) {
                if (this.skipTimeout) clearTimeout(this.skipTimeout);
                this.skipTimeout = setTimeout(() => {
                    this.nextTrack();
                }, 1500);
            }
        }

        syncTrackInfo() {
            if (!this.player || typeof this.player.getVideoData !== 'function') return;

            try {
                const data = this.player.getVideoData();
                const index = typeof this.player.getPlaylistIndex === 'function' ? this.player.getPlaylistIndex() : -1;
                if (index >= 0) this.trackIndex = index;

                this.syncPlaylistFromPlayer();

                let activeTitle = (data && data.title) ? data.title : '';
                let activeArtist = (data && data.author) ? data.author : '';

                if (!activeTitle && this.playlistItems[this.trackIndex]) {
                    activeTitle = this.playlistItems[this.trackIndex].title;
                    activeArtist = this.playlistItems[this.trackIndex].artist;
                }

                if (!activeTitle) {
                    activeTitle = `Track ${this.trackIndex + 1}`;
                    activeArtist = 'YouTube Stream';
                }

                const trackInfo = {
                    title: activeTitle,
                    artist: activeArtist,
                    index: this.trackIndex,
                    items: this.playlistItems
                };
                this.onTrackUpdate(trackInfo);
            } catch (e) {}
        }

        startPolling() {
            this.stopPolling();
            this.pollTimer = setInterval(() => {
                if (!this.player || !this.isPlaying) return;
                try {
                    const curr = this.player.getCurrentTime();
                    const dur = this.player.getDuration();
                    if (Number.isFinite(curr)) this.currentTime = curr;
                    if (Number.isFinite(dur) && dur > 0) this.duration = dur;
                    this.onTimeUpdate(this.currentTime, this.duration);
                } catch (e) {}
            }, 250);
        }

        stopPolling() {
            if (this.pollTimer) {
                clearInterval(this.pollTimer);
                this.pollTimer = null;
            }
        }

        getCurrentTrackInfo() {
            if (this.playlistItems[this.trackIndex]) {
                return {
                    title: this.playlistItems[this.trackIndex].title,
                    artist: this.playlistItems[this.trackIndex].artist,
                    index: this.trackIndex,
                    items: this.playlistItems
                };
            }
            return {
                title: 'Loading YouTube Track...',
                artist: 'YouTube Audio Stream',
                index: this.trackIndex,
                items: this.playlistItems
            };
        }

        play() {
            if (!this.player || !this.isReady) return;
            try {
                this.player.playVideo();
            } catch (e) {}
        }

        pause() {
            if (!this.player || !this.isReady) return;
            try {
                this.player.pauseVideo();
            } catch (e) {}
        }

        togglePlay() {
            if (this.isPlaying) {
                this.pause();
            } else {
                this.play();
            }
        }

        nextTrack() {
            if (!this.player || !this.isReady) return;
            try {
                this.player.nextVideo();
            } catch (e) {}
        }

        prevTrack() {
            if (!this.player || !this.isReady) return;
            try {
                this.player.previousVideo();
            } catch (e) {}
        }

        playTrackAt(index) {
            this.trackIndex = index;
            if (!this.player || !this.isReady) {
                this.pendingTrackIndex = index;
                return;
            }
            try {
                this.player.playVideoAt(index);
            } catch (e) {}
        }

        seekTo(seconds) {
            if (!this.player || !this.isReady) return;
            try {
                this.player.seekTo(seconds, true);
                this.currentTime = seconds;
                this.onTimeUpdate(this.currentTime, this.duration);
            } catch (e) {}
        }

        skip(deltaSeconds) {
            this.seekTo(Math.max(0, this.currentTime + deltaSeconds));
        }

        setVolume(fraction) {
            if (!this.player || !this.isReady) return;
            try {
                const vol = Math.max(0, Math.min(100, Math.round(fraction * 100)));
                this.player.setVolume(vol);
            } catch (e) {}
        }

        setMuted(isMuted) {
            if (!this.player || !this.isReady) return;
            try {
                if (isMuted) {
                    this.player.mute();
                } else {
                    this.player.unMute();
                }
            } catch (e) {}
        }

        destroy() {
            this.stopPolling();
            if (this.skipTimeout) clearTimeout(this.skipTimeout);
            if (this.player && typeof this.player.destroy === 'function') {
                try {
                    this.player.destroy();
                } catch (e) {}
            }
            this.player = null;
            this.isReady = false;
        }
    }

    // -------------------------------------------------------------------------
    // 6. MAIN ARCADE PLAYER CONTROLLER (DUAL MODE ORCHESTRATOR)
    // -------------------------------------------------------------------------
    class ArcadePlayer {
        constructor() {
            this.config = getPlayerConfig();
            this.mode = this.config.defaultMode || 'local'; // 'local' | 'youtube'

            // Local Audio & Synth instances
            this.localPlaylist = this.config.localPlaylist || DEFAULT_CONFIG.localPlaylist;
            this.localTrackIndex = 0;
            this.audio = new Audio();
            this.synth = new ArcadeSynth();
            this.isUsingSynth = false;

            // YouTube Controller instance
            this.ytController = null;
            this.ytInitialized = false;

            // Shared Playback State
            this.isPlaying = false;
            this.isExpanded = false;
            this.currentTime = 0;
            this.duration = 0;
            this.volume = 0.8;
            this.isMuted = false;
            this.isScrubbing = false;

            this.syncTimer = null;
            this.savedWasPlaying = false;

            this.loadState();
            this.buildDOM();
            this.bindEvents();
            this.setupNavigationPersistence();

            // Setup initial playback state
            if (this.mode === 'youtube') {
                this.initYouTubeMode(false);
            } else {
                this.setLocalTrack(this.localTrackIndex, false);
            }

            // Attempt resume if it was actively playing before page reload
            if (this.savedWasPlaying) {
                this.resumePlayback();
            }
        }

        // --- State Persistence via localStorage ---
        loadState() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const data = JSON.parse(raw);
                    if (data.mode === 'local' || data.mode === 'youtube') {
                        this.mode = data.mode;
                    }
                    if (Number.isInteger(data.trackIndex) && data.trackIndex >= 0) {
                        this.localTrackIndex = data.trackIndex % this.localPlaylist.length;
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
                    mode: this.mode,
                    trackIndex: this.mode === 'youtube' && this.ytController ? this.ytController.trackIndex : this.localTrackIndex,
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
            this.syncTimer = setInterval(() => {
                if (this.isPlaying) {
                    this.saveState();
                }
            }, 350);

            window.addEventListener('beforeunload', () => this.saveState());
            window.addEventListener('pagehide', () => this.saveState());

            // Intercept internal link clicks to grab the exact timestamp right before navigation
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a');
                if (link && link.href) {
                    const isInternal = link.href.startsWith(window.location.origin) || !link.href.includes('://');
                    if (isInternal && !link.target && !link.href.includes('#')) {
                        if (this.mode === 'local' && !this.isUsingSynth && this.audio) {
                            this.currentTime = this.audio.currentTime;
                        } else if (this.mode === 'youtube' && this.ytController) {
                            this.currentTime = this.ytController.currentTime;
                        }
                        this.saveState();
                    }
                }
            }, { capture: true });
        }

        // --- DOM Construction ---
        buildDOM() {
            let container = document.getElementById('arcade-player');
            if (!container) {
                container = document.createElement('div');
                container.id = 'arcade-player';
                document.body.appendChild(container);
            }

            container.className = `mode-${this.mode}` + (this.isExpanded ? ' is-expanded' : '');

            container.innerHTML = `
                <!-- 1. Collapsed Mini Bar -->
                <div class="arc-mini-bar" id="arc-mini-bar" title="Click to Expand Arcade Sound Deck">
                    <div class="arc-mini-token" title="Relzzy Arcade Audio">
                        ${ICONS.token}
                    </div>
                    <div class="arc-mini-info">
                        <span class="arc-mini-label">
                            <span class="arc-mini-mode-tag" id="arc-mini-mode-tag">${this.mode.toUpperCase()}</span>ARCADE SOUND
                        </span>
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

                    <!-- Dual Mode Selector Deck: [ LOCAL ] [ YOUTUBE ] -->
                    <div class="arc-mode-switch-wrap">
                        <div class="arc-mode-selector" role="tablist" aria-label="Audio Playback Source">
                            <button class="arc-mode-btn ${this.mode === 'local' ? 'is-active' : ''}" id="arc-mode-local" data-mode="local" type="button" role="tab" aria-selected="${this.mode === 'local'}" title="Switch to Local MP3 / Retro Synth Player">
                                <span class="arc-mode-indicator"></span>
                                <span>LOCAL</span>
                            </button>
                            <button class="arc-mode-btn ${this.mode === 'youtube' ? 'is-active' : ''}" id="arc-mode-youtube" data-mode="youtube" type="button" role="tab" aria-selected="${this.mode === 'youtube'}" title="Switch to YouTube Playlist Stream">
                                <span class="arc-mode-indicator"></span>
                                <span>YOUTUBE</span>
                            </button>
                        </div>
                    </div>

                    <!-- CRT Display Screen -->
                    <div class="arc-screen" id="arc-screen">
                        <div class="arc-screen-top">
                            <span class="arc-badge-mode" id="arc-badge-mode">CH-01 // STEREO</span>
                            <span id="arc-time-display">00:00 / 00:00</span>
                        </div>
                        <div class="arc-track-title" id="arc-full-title">Loading track...</div>
                        <div class="arc-track-artist" id="arc-full-artist">Artist</div>

                        <!-- Official YouTube Embedded Video Viewport (Strictly >= 200x200) -->
                        <div class="arc-yt-screen" id="arc-yt-screen">
                            <div class="arc-yt-wrapper" id="arc-yt-wrapper">
                                <div id="arc-yt-player"></div>
                                <div class="arc-yt-overlay" id="arc-yt-loading">
                                    <div class="arc-yt-spinner"></div>
                                    <span id="arc-yt-status-text">CONNECTING YOUTUBE STREAM...</span>
                                </div>
                            </div>
                        </div>

                        <!-- 8-Column Spectrum Visualizer -->
                        <div class="arc-spectrum" id="arc-spectrum" aria-hidden="true">
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
                            <!-- Populated dynamically based on active mode -->
                        </select>
                    </div>
                </div>
            `;

            this.dom = {
                container,
                miniBar: container.querySelector('#arc-mini-bar'),
                miniModeTag: container.querySelector('#arc-mini-mode-tag'),
                miniTitle: container.querySelector('#arc-mini-title'),
                miniPrev: container.querySelector('#arc-mini-prev'),
                miniPlay: container.querySelector('#arc-mini-play'),
                miniNext: container.querySelector('#arc-mini-next'),
                expandBtn: container.querySelector('#arc-expand-btn'),
                minimizeBtn: container.querySelector('#arc-minimize-btn'),
                modeBtnLocal: container.querySelector('#arc-mode-local'),
                modeBtnYoutube: container.querySelector('#arc-mode-youtube'),
                badgeMode: container.querySelector('#arc-badge-mode'),
                timeDisplay: container.querySelector('#arc-time-display'),
                fullTitle: container.querySelector('#arc-full-title'),
                fullArtist: container.querySelector('#arc-full-artist'),
                ytScreen: container.querySelector('#arc-yt-screen'),
                ytLoadingOverlay: container.querySelector('#arc-yt-loading'),
                ytStatusText: container.querySelector('#arc-yt-status-text'),
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

            const initialYtTrack = (this.config.youtube && this.config.youtube.tracks && this.config.youtube.tracks[0])
                ? this.config.youtube.tracks[0]
                : ((DEFAULT_CONFIG.youtube && DEFAULT_CONFIG.youtube.tracks) ? DEFAULT_CONFIG.youtube.tracks[0] : null);
            if (this.mode === 'youtube' && initialYtTrack) {
                this.dom.miniTitle.textContent = initialYtTrack.title;
                this.dom.fullTitle.textContent = initialYtTrack.title;
                this.dom.fullArtist.textContent = initialYtTrack.artist;
            }

            this.updatePlaylistDropdown();
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

            // Mode Selector Switches: [ LOCAL ] [ YOUTUBE ]
            this.dom.modeBtnLocal.addEventListener('click', () => {
                this.switchMode('local');
            });
            this.dom.modeBtnYoutube.addEventListener('click', () => {
                this.switchMode('youtube');
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
            const togglePlayHandler = () => this.togglePlay();
            this.dom.miniPlay.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlayHandler();
            });
            this.dom.btnPlay.addEventListener('click', togglePlayHandler);

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

            // Playlist Selection Dropdown
            this.dom.playlistSelect.addEventListener('change', (e) => {
                const idx = parseInt(e.target.value, 10);
                if (this.mode === 'local') {
                    this.setLocalTrack(idx, true);
                } else if (this.mode === 'youtube' && this.ytController) {
                    this.ytController.playTrackAt(idx);
                }
            });

            // Scrubber Click & Drag
            this.setupScrubber();

            // Native HTML5 Audio Events (Local Mode)
            this.audio.addEventListener('loadedmetadata', () => {
                if (this.mode !== 'local') return;
                if (Number.isFinite(this.audio.duration)) {
                    this.duration = this.audio.duration;
                }
                if (this.currentTime > 0 && Number.isFinite(this.audio.duration)) {
                    this.audio.currentTime = Math.min(this.currentTime, this.audio.duration);
                }
                this.updateUI();
            });

            this.audio.addEventListener('timeupdate', () => {
                if (this.mode === 'local' && !this.isScrubbing && !this.isUsingSynth) {
                    this.currentTime = this.audio.currentTime;
                    this.duration = this.audio.duration || this.localPlaylist[this.localTrackIndex].duration || 180;
                    this.updateUI();
                }
            });

            this.audio.addEventListener('ended', () => {
                if (this.mode === 'local') {
                    this.nextTrack(true);
                }
            });

            this.audio.addEventListener('error', () => {
                if (this.mode !== 'local') return;
                // MP3 file not found or unplayable -> fallback to retro chiptune synth!
                console.log('[ArcadePlayer] Local MP3 pending/unplayable. Activating retro arcade synthesizer fallback.');
                this.isUsingSynth = true;
                this.dom.badgeMode.className = 'arc-badge-mode';
                this.dom.badgeMode.textContent = `SYNTH // ${this.localPlaylist[this.localTrackIndex].synthPreset.toUpperCase()}`;
                if (this.isPlaying) {
                    this.synth.start(this.localPlaylist[this.localTrackIndex].synthPreset);
                }
            });
        }

        // --- Mode Switching Logic (Zero Audio Overlap Guarantee) ---
        switchMode(targetMode, autoPlay = false) {
            if (this.mode === targetMode && this.ytInitialized) return;

            // 1. Immediately pause and stop the existing mode's audio
            if (this.mode === 'local') {
                this.audio.pause();
                this.synth.stop();
                this.stopSynthTimer();
            } else if (this.mode === 'youtube' && this.ytController) {
                this.ytController.pause();
            }

            this.isPlaying = false;
            this.currentTime = 0;
            this.setPlayVisuals(false);

            // 2. Switch mode identifier and CSS classes
            this.mode = targetMode;
            this.dom.container.className = `mode-${this.mode}` + (this.isExpanded ? ' is-expanded' : '');
            this.dom.miniModeTag.textContent = this.mode.toUpperCase();

            // 3. Update Mode Switch Deck buttons
            if (this.mode === 'local') {
                this.dom.modeBtnLocal.classList.add('is-active');
                this.dom.modeBtnLocal.setAttribute('aria-selected', 'true');
                this.dom.modeBtnYoutube.classList.remove('is-active');
                this.dom.modeBtnYoutube.setAttribute('aria-selected', 'false');
                this.updatePlaylistDropdown();
                this.setLocalTrack(this.localTrackIndex, autoPlay);
            } else {
                this.dom.modeBtnYoutube.classList.add('is-active');
                this.dom.modeBtnYoutube.setAttribute('aria-selected', 'true');
                this.dom.modeBtnLocal.classList.remove('is-active');
                this.dom.modeBtnLocal.setAttribute('aria-selected', 'false');
                this.initYouTubeMode(autoPlay);
            }

            this.saveState();
        }

        // --- YouTube Mode Initialization ---
        initYouTubeMode(autoPlay = false) {
            this.dom.badgeMode.className = 'arc-badge-mode is-yt';
            this.dom.badgeMode.textContent = 'YT // CONNECTING';
            this.dom.ytLoadingOverlay.classList.remove('is-hidden');
            this.dom.ytStatusText.textContent = 'CONNECTING YOUTUBE STREAM...';

            if (!this.ytController) {
                const presetTracks = (this.config.youtube && this.config.youtube.tracks) ? this.config.youtube.tracks : DEFAULT_CONFIG.youtube.tracks;
                this.ytController = new YouTubeAudioController({
                    containerId: 'arc-yt-player',
                    presetTracks: presetTracks,
                    onReady: () => {
                        this.ytInitialized = true;
                        this.dom.ytLoadingOverlay.classList.add('is-hidden');
                        this.dom.badgeMode.className = 'arc-badge-mode is-yt';
                        this.dom.badgeMode.textContent = 'YT // READY';
                        this.ytController.setVolume(this.isMuted ? 0 : this.volume);
                        this.updatePlaylistDropdown();
                        if (autoPlay) {
                            this.play();
                        }
                    },
                    onStateChange: (isPlaying) => {
                        this.isPlaying = isPlaying;
                        this.setPlayVisuals(isPlaying);
                        if (isPlaying) {
                            this.dom.badgeMode.className = 'arc-badge-mode is-yt';
                            this.dom.badgeMode.textContent = `YT // CH-0${(this.ytController.trackIndex % 99) + 1}`;
                            this.dom.ytLoadingOverlay.classList.add('is-hidden');
                        }
                        this.saveState();
                    },
                    onTrackUpdate: (trackInfo) => {
                        this.dom.miniTitle.textContent = trackInfo.title;
                        this.dom.fullTitle.textContent = trackInfo.title;
                        this.dom.fullArtist.textContent = trackInfo.artist;
                        if (this.isPlaying) {
                            this.dom.badgeMode.className = 'arc-badge-mode is-yt';
                            this.dom.badgeMode.textContent = `YT // CH-0${(trackInfo.index % 99) + 1}`;
                        }
                        this.updatePlaylistDropdown();
                        this.dom.playlistSelect.value = trackInfo.index;
                    },
                    onTimeUpdate: (curr, dur) => {
                        if (!this.isScrubbing) {
                            this.currentTime = curr;
                            this.duration = dur;
                            this.updateUI();
                        }
                    },
                    onError: (msg) => {
                        this.dom.badgeMode.className = 'arc-badge-mode is-error';
                        this.dom.badgeMode.textContent = msg;
                        this.dom.ytStatusText.textContent = msg;
                    }
                });

                const playlistId = (this.config.youtube && this.config.youtube.playlistId) ? this.config.youtube.playlistId : DEFAULT_CONFIG.youtube.playlistId;
                const apiKey = (this.config.youtube && this.config.youtube.apiKey) ? this.config.youtube.apiKey : '';
                this.ytController.init(playlistId, apiKey, presetTracks);
            } else {
                this.dom.ytLoadingOverlay.classList.add('is-hidden');
                this.dom.badgeMode.className = 'arc-badge-mode is-yt';
                this.dom.badgeMode.textContent = `YT // CH-0${(this.ytController.trackIndex % 99) + 1}`;
                const info = this.ytController.getCurrentTrackInfo();
                this.dom.miniTitle.textContent = info.title;
                this.dom.fullTitle.textContent = info.title;
                this.dom.fullArtist.textContent = info.artist;
                this.updatePlaylistDropdown();
                if (autoPlay) {
                    this.play();
                } else {
                    this.updateUI();
                }
            }
        }

        // --- Local Track Management ---
        setLocalTrack(index, autoPlay = false) {
            this.localTrackIndex = (index + this.localPlaylist.length) % this.localPlaylist.length;
            const track = this.localPlaylist[this.localTrackIndex];

            this.dom.playlistSelect.value = this.localTrackIndex;
            this.dom.miniTitle.textContent = track.title;
            this.dom.fullTitle.textContent = track.title;
            this.dom.fullArtist.textContent = track.artist;
            this.dom.badgeMode.className = 'arc-badge-mode';
            this.dom.badgeMode.textContent = `CH-0${this.localTrackIndex + 1} // STEREO`;

            this.isUsingSynth = false;
            this.synth.stop();
            this.stopSynthTimer();

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

        updatePlaylistDropdown() {
            if (this.mode === 'local') {
                this.dom.playlistSelect.innerHTML = this.localPlaylist
                    .map((t, idx) => `<option value="${idx}">${idx + 1}. ${t.title.split('//')[0].trim()}</option>`)
                    .join('');
                this.dom.playlistSelect.value = this.localTrackIndex;
            } else {
                let tracks = [];
                if (this.ytController && Array.isArray(this.ytController.playlistItems) && this.ytController.playlistItems.length > 0) {
                    tracks = this.ytController.playlistItems;
                } else if (this.config.youtube && Array.isArray(this.config.youtube.tracks) && this.config.youtube.tracks.length > 0) {
                    tracks = this.config.youtube.tracks;
                } else if (DEFAULT_CONFIG.youtube && Array.isArray(DEFAULT_CONFIG.youtube.tracks)) {
                    tracks = DEFAULT_CONFIG.youtube.tracks;
                }

                if (tracks.length > 0) {
                    const activeIndex = (this.ytController && Number.isInteger(this.ytController.trackIndex))
                        ? this.ytController.trackIndex
                        : 0;

                    this.dom.playlistSelect.innerHTML = tracks
                        .map((item, idx) => {
                            const rawTitle = item.title || `Track ${idx + 1}`;
                            const displayTitle = rawTitle.length > 32 ? rawTitle.substring(0, 30) + '…' : rawTitle;
                            return `<option value="${idx}">${idx + 1}. ${displayTitle}</option>`;
                        })
                        .join('');
                    this.dom.playlistSelect.value = activeIndex;
                } else {
                    const currTitle = (this.dom.fullTitle && this.dom.fullTitle.textContent && this.dom.fullTitle.textContent !== 'Loading track...')
                        ? this.dom.fullTitle.textContent
                        : 'YouTube Stream';
                    this.dom.playlistSelect.innerHTML = `<option value="0">1. ${currTitle.substring(0, 30)}</option>`;
                    this.dom.playlistSelect.value = 0;
                }
            }
        }

        // --- Scrubbing Controls ---
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

        // --- Playback Commands ---
        togglePlay() {
            if (this.isPlaying) {
                this.pause();
            } else {
                this.play();
            }
        }

        play() {
            this.isPlaying = true;
            this.setPlayVisuals(true);

            if (this.mode === 'local') {
                if (this.isUsingSynth) {
                    this.synth.start(this.localPlaylist[this.localTrackIndex].synthPreset);
                    this.startSynthTimer();
                } else {
                    const playPromise = this.audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch((err) => {
                            console.warn('[ArcadePlayer] Local audio autoplay restricted:', err.message);
                            this.isPlaying = false;
                            this.setPlayVisuals(false);
                        });
                    }
                }
            } else if (this.mode === 'youtube' && this.ytController) {
                this.ytController.play();
            }

            this.saveState();
        }

        pause() {
            this.isPlaying = false;
            this.setPlayVisuals(false);

            if (this.mode === 'local') {
                if (this.isUsingSynth) {
                    this.synth.stop();
                    this.stopSynthTimer();
                } else {
                    this.audio.pause();
                }
            } else if (this.mode === 'youtube' && this.ytController) {
                this.ytController.pause();
            }

            this.saveState();
        }

        setPlayVisuals(playing) {
            if (playing) {
                this.dom.container.classList.add('arc-playing');
                this.dom.miniPlay.innerHTML = ICONS.pause;
                this.dom.btnPlay.innerHTML = ICONS.pause;
            } else {
                this.dom.container.classList.remove('arc-playing');
                this.dom.miniPlay.innerHTML = ICONS.play;
                this.dom.btnPlay.innerHTML = ICONS.play;
            }
        }

        resumePlayback() {
            const resumeAttempt = () => {
                if (this.savedWasPlaying) {
                    this.play();
                }
            };
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

            if (this.mode === 'local') {
                if (!this.isUsingSynth && this.audio) {
                    try {
                        this.audio.currentTime = target;
                    } catch (e) {}
                }
            } else if (this.mode === 'youtube' && this.ytController) {
                this.ytController.seekTo(target);
            }

            this.updateUI();
            this.saveState();
        }

        skip(deltaSeconds) {
            this.seekTo(this.currentTime + deltaSeconds);
        }

        prevTrack() {
            if (this.mode === 'local') {
                this.setLocalTrack(this.localTrackIndex - 1, this.isPlaying);
            } else if (this.mode === 'youtube' && this.ytController) {
                this.ytController.prevTrack();
            }
        }

        nextTrack(fromEnded = false) {
            if (this.mode === 'local') {
                this.setLocalTrack(this.localTrackIndex + 1, fromEnded || this.isPlaying);
            } else if (this.mode === 'youtube' && this.ytController) {
                this.ytController.nextTrack();
            }
        }

        setVolume(val) {
            this.volume = Math.max(0, Math.min(1, val));
            this.isMuted = false;

            this.audio.volume = this.volume;
            if (this.ytController) {
                this.ytController.setVolume(this.volume);
            }

            this.dom.volSlider.value = this.volume;
            this.dom.volBtn.innerHTML = this.volume === 0 ? ICONS.volumeMute : ICONS.volumeHigh;
            this.saveState();
        }

        toggleMute() {
            this.isMuted = !this.isMuted;
            this.audio.volume = this.isMuted ? 0 : this.volume;
            if (this.ytController) {
                this.ytController.setMuted(this.isMuted);
            }
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
    // 7. INITIALIZE ON DOM READY
    // -------------------------------------------------------------------------
    function init() {
        if (window.__relzzyArcadePlayer) return;
        if (!document.body) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                window.addEventListener('load', init);
            }
            return;
        }
        try {
            window.__relzzyArcadePlayer = new ArcadePlayer();
        } catch (err) {
            console.error('[ArcadePlayer] Initialization error:', err);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

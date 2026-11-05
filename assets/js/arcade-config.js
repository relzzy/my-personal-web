/**
 * =============================================================================
 * RELZZY ARCADE // SOUND SYSTEM CONFIGURATION
 * =============================================================================
 * Edit this central configuration file to customize your sound deck settings,
 * YouTube playlist, playback modes, and local audio tracks.
 * You do NOT need to modify any other file to update your music playlist!
 */

const ARCADE_CONFIG = {
    // -------------------------------------------------------------------------
    // 1. DEFAULT PLAYBACK MODE
    // Options:
    //  - 'local'   : Plays local MP3 tracks hosted in assets/audio/ (with retro synth fallback)
    //  - 'youtube' : Plays songs from your YouTube playlist using the official YouTube Player
    // -------------------------------------------------------------------------
    defaultMode: 'youtube',

    // -------------------------------------------------------------------------
    // 2. YOUTUBE CONFIGURATION
    // -------------------------------------------------------------------------
    youtube: {
        // Your YouTube playlist ID or full playlist URL.
        // Both raw IDs and full YouTube URLs are automatically supported:
        // Examples:
        //   - "PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D"
        //   - "https://www.youtube.com/playlist?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D"
        //   - "https://www.youtube.com/watch?v=xxx&list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D"
        playlistId: "https://www.youtube.com/watch?v=VgPo3q01kbg&list=PLJP99BZ60TE4",

        // Optional: YouTube Data API v3 key
        // Core YouTube playlist playback works 100% WITHOUT an API key.
        // Never commit secret API keys to public repositories.
        apiKey: (typeof window !== 'undefined' && window.ARCADE_LOCAL_KEY) || ""
    },

    // -------------------------------------------------------------------------
    // 3. LOCAL MP3 PLAYLIST
    // Drop your MP3 files into assets/audio/ and configure them here.
    // Includes an automatic Web Audio chiptune synthesizer fallback if any
    // MP3 file is not found on the server.
    // -------------------------------------------------------------------------
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

// Expose configuration globally on window object
if (typeof window !== 'undefined') {
    window.ARCADE_CONFIG = ARCADE_CONFIG;
}

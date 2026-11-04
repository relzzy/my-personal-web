# Arcade Audio Directory

Drop your copyright-free MP3 files into this folder (`assets/audio/`).

### How to configure tracks:
Open `assets/js/arcade-player.js` and edit the `PLAYLIST` array near the top of the file:

```javascript
const PLAYLIST = [
  {
    title: "Your Song Name",
    artist: "Artist Name",
    src: "assets/audio/your-song.mp3",
    duration: 180 // optional estimated duration in seconds
  },
  // Add as many songs as you like!
];
```

The arcade player includes an automatic retro synthesizer fallback that generates nostalgic arcade melodies if an MP3 file is not found, so you will always hear music even before adding custom files.

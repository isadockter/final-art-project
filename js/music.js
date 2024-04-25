var musicFiles = [
    { src: "audio/sorry-bro.mp3", artist: "SALES", title: "Sorry Bro" },
    { src: "audio/backwards.mp3", artist: "SALES", title: "Moving by Backwards" },
    { src: "audio/off-on.mp3", artist: "SALES", title: "Off n On" }
]; // Array of music file paths, artists, and titles
var currentMusicIndex = 0; // Index of the currently playing music file
var music = document.getElementById("music");
var musicInfo = document.getElementById("music-info");
var playPauseIcon = document.getElementById("playPauseIcon");

function togglePlayPause() {
    if (music.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

function playMusic() {
    var currentMusic = musicFiles[currentMusicIndex];
    music.src = currentMusic.src;
    music.play();
    updateMusicInfo(currentMusic.artist, currentMusic.title);
    playPauseIcon.setAttribute("name", "pause-outline");
}

function pauseMusic() {
    music.pause();
    playPauseIcon.setAttribute("name", "play-outline");
}

function skip() {
    currentMusicIndex++;
    if (currentMusicIndex >= musicFiles.length) {
        currentMusicIndex = 0; // Loop back to the beginning if we reach the end
    }
    playMusic(); // Play the next music file
}

function updateMusicInfo(artist, title) {
    musicInfo.innerHTML = artist + " - " + title;
}
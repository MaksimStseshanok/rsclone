const sounds = {
  currentSound: null,
  sound: false,
};

function checkSound(sound, track, stop) {
  if (stop) {
    stopSound(sounds.currentSound);
    return;
  }
  if (track === 'homeSound' && !sounds.sound) {
    sounds.currentSound = sound;
    playSound(sound);
  } else if (track === 'homeSound' && sounds.sound) {
    stopSound(sound);
  }
  if (track === 'levelSound' && sounds.sound) {
    stopSound(sounds.currentSound);
    playSound(sound);
    sounds.currentSound = sound;
  }
  if (track === 'animateSound' && sounds.sound) {
    stopSound(sounds.currentSound);
    playSound(sound);
    sounds.currentSound = sound;
  }
}

function playSound(playMusic) {
  sounds.sound = true;
  playMusic.play();
  playMusic.loop = true;
}

function stopSound(playMusic) {
  sounds.sound = false;
  playMusic.pause();
}

export default checkSound;

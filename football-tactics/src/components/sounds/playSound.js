let flag = true;
let playMusic;

function playSound() {
  flag = false;
  playMusic.play();
  playMusic.loop = true;
}

function stopSound() {
  flag = true;
  playMusic.pause();
}

function checkSound(sound) {
  playMusic = new Audio(sound);
  if (flag) {
    playSound();
  } else stopSound();
}

export default checkSound;

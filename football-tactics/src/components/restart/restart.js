import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';
import levelSound from '../../assets/sounds/levelSound.mp3';
import checkSound from '../sounds/sounds';

const restart = (level) => {
  const playMusic = new Audio(levelSound);
  checkSound(playMusic, 'levelSound');
  const spinner = document.querySelector('span');
  spinner.classList.add('material-icons-rotate');
  setTimeout(() => {
    cleanPage();
    createGamePage(level);
  }, 500);
};

export default restart;

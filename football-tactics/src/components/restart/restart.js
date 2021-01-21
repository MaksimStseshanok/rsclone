import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';

const restart = (level) => {
  const spinner = document.querySelector('span');
  spinner.classList.add('material-icons-rotate');
  setTimeout(() => {
    cleanPage();
    createGamePage(level);
  }, 500);
};

export default restart;

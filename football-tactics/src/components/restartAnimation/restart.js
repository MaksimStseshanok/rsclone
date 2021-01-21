import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';

const restart = (spanWrapper, span, level) => {
  spanWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    span.classList.add('material-icons-rotate');
    setTimeout(() => {
      cleanPage();
      createGamePage(level);
    }, 500);
  });
};

export default restart;

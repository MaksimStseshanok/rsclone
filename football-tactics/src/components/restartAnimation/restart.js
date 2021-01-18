import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';

const restart = (spanWrapper, span) => {
  spanWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    span.classList.add('material-icons-rotate');
    setTimeout(() => {
      cleanPage();
      createGamePage();
    }, 1000);
  });
};

export default restart;

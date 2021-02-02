import ball from '../assets/images/football.png';
import levels from './levels/levels';

const createCellsField = (level) => {
  const field = document.querySelector('.inner__wrapper');

  for (let i = 1; i < 105; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-cell-id', i);

    if (i === levels[level].startCellId) {
      const imgWrapper = document.createElement('div');
      const img = document.createElement('img');
      img.classList.add('ball');
      imgWrapper.classList.add('wrapper__ball');
      img.setAttribute('draggable', false);
      cell.classList.add('cell__start');
      // img.src = ball;
      img.src = 'http://upload.wikimedia.org/wikipedia/en/e/ec/Soccer_ball.svg';
      imgWrapper.append(img);
      cell.append(imgWrapper);
    }
    if (i === levels[level].finishCellId) {
      cell.classList.add('cell__finish');
    }
    if (levels[level].defs.includes(i)) {
      cell.classList.add('defender__cell', 'play__cell');
    }

    field.append(cell);
  }
};

export default createCellsField;

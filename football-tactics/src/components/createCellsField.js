import ball from '../assets/images/football.png';
import levels from './levels/levels';

const createCellsField = (level) => {
  const field = document.querySelector('.inner__wrapper');

  for (let i = 1; i < 104; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-cell-id', i);

    if (i === levels[level].startCellId) {
      const img = document.createElement('img');
      img.classList.add('ball');
      img.setAttribute('draggable', false);
      cell.classList.add('start__cell');
      img.src = ball;
      cell.append(img);
    }
    if (levels[level].defs.includes(i)) {
      cell.classList.add('defender__cell');
    }

    field.append(cell);
  }
};

export default createCellsField;

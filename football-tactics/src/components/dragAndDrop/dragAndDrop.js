import matrix from '../matrix/getMatrix';
import getCellById from '../matrix/getCellById';
import getAroundCells from '../matrix/getAroundCells';
import levels from '../levels/levels';
import animate from '../animate/animate';
import gameData from '../gameData/gameData';

const dragAndDrop = (level) => {
  const cards = document.querySelectorAll('.players__wrapper-img');
  const cells = document.querySelectorAll('.cell');
  const ball = document.querySelector('.ball');
  const startCell = levels[level].startCellId;
  const defsId = levels[level].defs;

  matrix.map((item) => {
    item.forEach((cell) => {
      cell.player = false;
      if (defsId.includes(cell.id)) {
        cell.player = true;
      }
    });
    return item;
  });

  let card;
  let cardCounter = cards.length;

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add('hide');
      card = this;
    }, 0);
  };

  const dragEnd = function () {
    this.classList.remove('hide');
  };

  const dragOver = function (event) {
    event.preventDefault();
  };

  const dragEnter = function (event) {
    event.preventDefault();
    this.classList.add('hovered');
  };

  const dragLeave = function () {
    this.classList.remove('hovered');
  };

  const dragDrop = function (event) {
    const element = event.target;
    const cellId = parseInt(element.getAttribute('data-cell-id'));
    const cell = getCellById(matrix, cellId);

    if (cell.player || cell.player === undefined || cell.id === startCell) {
      this.classList.remove('hovered');
      return;
    }

    if (getAroundCells(matrix, cell.x, cell.y)) {
      this.append(card);
      cell.player = true;
      this.classList.add('drop', 'play__cell');

      card.setAttribute('draggable', false);
      cardCounter -= 1;
      if (!cardCounter) {
        ball.classList.add('active');
        animate(gameData);
      }
    }
    this.classList.remove('hovered');
  };

  cards.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  cells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDrop);
  });
};

export default dragAndDrop;

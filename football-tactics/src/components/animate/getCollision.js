console.log(startData);

import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';
import checkLocalStorage from '../storage';

const level = checkLocalStorage();
const startData = {
  cell: document.querySelector('.ball'),
  rectX: cell.offsetWidth,
  rectY: cell.offsetHeight,
  outputDirection: 'right',
  entryDirection: 'down',
  prevOutputDirection: null,
  start: 0,
  flag: true,
  defCells: [],
};

// let rectX = 0;
// let startData.rectY = 0;
// let cell;
// let outputDirection = 'right';
// let entryDirection = 'down';
// let prevOutputDirection;
// let start = 0;
// let flag = true;
// let defCells = [];

function gameLoop(timeStamp) {
  console.log(rectY);
  const fieldWidth = document.querySelector('.inner__wrapper').offsetWidth;
  if (fieldWidth < startData.rectX + 50) {
    // startData = {
    //   rectX: 0,
    //   rectY: 0,
    //   cell: document.querySelector('.ball'),
    //   outputDirection: 'right',
    //   entryDirection: 'down',
    //   prevOutputDirection: null,
    //   start: 0,
    //   flag: true,
    //   defCells: [],
    // };
    cleanPage();
    createGamePage(level.currentlevel);
    return;
  } else {
    requestAnimationFrame(gameLoop);
    let timeFraction = (timeStamp - startData.start) / 1000;
    if (timeFraction < 1 / 100) return;

    startData.start = timeStamp;

    if (startData.flag) {
      update();
    } else return;
  }
}

function update() {
  // if (!startData.cell) {
  //   startData.cell = document.querySelector('.ball');
  // }

  isCollision(startData.cell);
  if (startData.prevOutputDirection !== startData.outputDirection) {
    draw(startData.outputDirection);
  } else {
    return;
  }
}

function draw(direction) {
  switch (direction) {
    case 'right':
      startData.rectX += 2;
      startData.cell.style.left = `${startData.rectX}px`;
      break;
    case 'down':
      startData.rectY += 2;
      startData.cell.style.top = `${startData.rectY}px`;
      break;
    case 'left':
      startData.rectX -= 2;
      startData.cell.style.left = `${startData.rectX}px`;
      break;
    case 'up':
      startData.rectY -= 2;
      startData.cell.style.top = `${startData.rectY}px`;
      break;
  }
}

function getDirection(direction) {
  startData.prevOutputDirection = startData.outputDirection;
  startData.entryDirection = direction.firstChild.getAttribute(
    'data-cell-entry'
  );
  startData.outputDirection = direction.firstChild.getAttribute(
    'data-cell-output'
  );
  checkPrevDirection(startData.prevOutputDirection, startData.entryDirection);
}

function checkPrevDirection(output, entry) {
  if (
    (output === 'down' && entry === 'up') ||
    (output === 'left' && entry === 'right') ||
    (output === 'up' && entry === 'down') ||
    (output === 'right' && entry === 'left')
  ) {
    return true;
  } else startData.prevOutputDirection = startData.outputDirection;
}

function isCollision(obj) {
  const cells = document.querySelectorAll('.play__cell');
  for (let i = 0; i < cells.length; i++) {
    if (getCollision(obj, cells[i])) {
      if (cells[i].classList.contains('drop')) {
        getDirection(cells[i]);
        cells[i].firstChild.style = `display: none`;
        cells[i].classList.remove('drop');
        cells[i].classList.add('defender__cell');

        setTimeout(() => {
          startData.defCells.push(cells[i]);
        }, 1000);
      } else if (
        startData.defCells.includes(cells[i]) ||
        !cells[i].firstChild
      ) {
        console.log(1);

        startData.flag = false;
      }
    }
  }
  return null;
}

function getCollision(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  if (startData.outputDirection === 'right') {
    if (
      aRect.left + aRect.width / 2 > bRect.left + bRect.width / 2 &&
      aRect.right < bRect.right &&
      aRect.top > bRect.top &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
  if (startData.outputDirection === 'left') {
    if (
      aRect.left > bRect.left &&
      aRect.right - aRect.width / 2 < bRect.right - bRect.width / 2 &&
      aRect.top > bRect.top &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
  if (startData.outputDirection === 'up') {
    if (
      aRect.left > bRect.left &&
      aRect.right < bRect.right &&
      aRect.top > bRect.top &&
      aRect.bottom - aRect.height / 2 < bRect.bottom - bRect.height / 2
    ) {
      return true;
    } else return false;
  }
  if (startData.outputDirection === 'down') {
    if (
      aRect.left > bRect.left &&
      aRect.right < bRect.right &&
      aRect.top + aRect.height / 2 > bRect.top + bRect.height / 2 &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
}

export default gameLoop;

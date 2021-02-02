import openModal from '../modal/openModal';
import checkLocalStorage from '../checkLocalStorage';
import saveCompleteLevel from '../saveCompleteLevel';

let startData = {};
let requestId;
let numberOfCells;

function animate(gameData, number) {
  cancelAnimationFrame(requestId);
  numberOfCells = number;
  for (let key in gameData) {
    startData[key] = gameData[key];
  }
  gameLoop();
}

function gameLoop(timeStamp) {
  if (getWallCollision() === 'goal') {
    const level = checkLocalStorage();
    saveCompleteLevel(level);
    openModal('goal');
    return;
  } else if (getWallCollision() === 'players') {
    openModal('players');
    return;
  } else if (
    getWallCollision() === 'no goal' ||
    !startData.flag ||
    startData.prevOutputDirection === startData.outputDirection
  ) {
    openModal('no goal');
    return;
  } else {
    requestId = requestAnimationFrame(gameLoop);
    let timeFraction = (timeStamp - startData.start) / 1000;
    if (timeFraction < 1 / 100) return;

    startData.start = timeStamp;

    update();
  }
}

function update() {
  if (!startData.cell) {
    startData.cell = document.querySelector('.ball');
  }

  isCollision(startData.cell);
  draw(startData.outputDirection);
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
        --numberOfCells;

        setTimeout(() => {
          startData.defCells.push(cells[i]);
        }, 1000);
      } else if (
        startData.defCells.includes(cells[i]) ||
        !cells[i].firstChild
      ) {
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

function getWallCollision() {
  const field = document
    .querySelector('.inner__wrapper')
    .getBoundingClientRect();
  const ball = document.querySelector('.ball').getBoundingClientRect();
  const finish = document
    .querySelector('.cell__finish')
    .getBoundingClientRect();
  if (
    field.right < ball.right &&
    ball.top > finish.top &&
    ball.bottom < finish.bottom
  ) {
    return numberOfCells ? 'players' : 'goal';
  } else if (
    field.right < ball.right ||
    ball.x < field.left ||
    field.top > ball.top ||
    field.bottom < ball.bottom
  ) {
    return 'no goal';
  } else return false;
}

export default animate;

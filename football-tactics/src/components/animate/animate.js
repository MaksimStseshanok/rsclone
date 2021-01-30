let rectX = 0;
let rectY = 0;
let cell;

let outputDirection = 'right';
let entryDirection = 'down';
let prevOutputDirection;
let prevEntryDirection;
let start = 0;
let flag = true;
const defCells = [];

function gameLoop(timeStamp) {
  requestAnimationFrame(gameLoop);
  let timeFraction = (timeStamp - start) / 1000;
  if (timeFraction < 1 / 100) return;

  start = timeStamp;

  if (flag) {
    update();
  } else return;
}

function update() {
  if (!cell) {
    cell = document.querySelector('.ball');
  }

  isCollision(cell);
  if (prevOutputDirection !== outputDirection) {
    draw(outputDirection);
  } else {
    return;
  }
}

function draw(direction) {
  switch (direction) {
    case 'right':
      rectX += 2;
      cell.style.left = `${rectX}px`;
      break;
    case 'down':
      rectY += 2;
      cell.style.top = `${rectY}px`;
      break;
    case 'left':
      rectX -= 2;
      cell.style.left = `${rectX}px`;
      break;
    case 'up':
      rectY -= 2;
      cell.style.top = `${rectY}px`;
      break;
  }
}

function getDirection(direction) {
  prevOutputDirection = outputDirection;
  entryDirection = direction.firstChild.getAttribute('data-cell-entry');
  outputDirection = direction.firstChild.getAttribute('data-cell-output');
  checkPrevDirection(prevOutputDirection, entryDirection);
}

function checkPrevDirection(output, entry) {
  if (
    (output === 'down' && entry === 'up') ||
    (output === 'left' && entry === 'right') ||
    (output === 'up' && entry === 'down') ||
    (output === 'right' && entry === 'left')
  ) {
    return true;
  } else prevOutputDirection = outputDirection;
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
          defCells.push(cells[i]);
        }, 1000);
      } else if (defCells.includes(cells[i]) || !cells[i].firstChild) {
        console.log(1);

        flag = false;
      }
    }
  }
  return null;
}

function getCollision(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  if (outputDirection === 'right') {
    if (
      aRect.left + aRect.width / 2 > bRect.left + bRect.width / 2 &&
      aRect.right < bRect.right &&
      aRect.top > bRect.top &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
  if (outputDirection === 'left') {
    if (
      aRect.left > bRect.left &&
      aRect.right - aRect.width / 2 < bRect.right - bRect.width / 2 &&
      aRect.top > bRect.top &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
  if (outputDirection === 'up') {
    if (
      aRect.left > bRect.left &&
      aRect.right < bRect.right &&
      aRect.top > bRect.top &&
      aRect.bottom - aRect.height / 2 < bRect.bottom - bRect.height / 2
    ) {
      return true;
    } else return false;
  }
  if (outputDirection === 'down') {
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

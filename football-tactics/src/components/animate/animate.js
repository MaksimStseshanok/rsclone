let rectX = 0;
let rectY = 0;
let cell;
let cellDirection = 'right';

function gameLoop(timeStamp) {
  window.requestAnimationFrame(gameLoop);
  update();
}

function update() {
  cell = document.querySelector('.ball');
  isCollision(cell);
  // if (cellDirection) {
  draw(cellDirection);
  // } else {
  //   cellDirection = 'right';
  //   draw(cellDirection);
  // }
}

function draw(direction) {
  switch (direction) {
    case 'right':
      rectX += 4;
      cell.style.left = `${rectX}px`;
      break;
    case 'down':
      rectY += 4;
      cell.style.top = `${rectY}px`;
      break;
    case 'left':
      rectX -= 4;
      cell.style.left = `${rectX}px`;
      break;
    case 'up':
      rectY -= 4;
      cell.style.top = `${rectY}px`;
      break;
  }
}

function getDirection(direction) {
  cellDirection = direction.firstChild.getAttribute('data-cell-direction');
}

function isCollision(obj) {
  const cells = document.querySelectorAll('.drop');
  for (let i = 0; i < cells.length; i++) {
    if (getCollision(obj, cells[i])) {
      return getDirection(cells[i]);
    }
  }
  return null;
}

function getCollision(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  if (cellDirection === 'right') {
    if (
      aRect.left + aRect.width / 2 > bRect.left + bRect.width / 2 &&
      aRect.right < bRect.right &&
      aRect.top > bRect.top &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
  if (cellDirection === 'left') {
    if (
      aRect.left > bRect.left &&
      aRect.right - aRect.width / 2 < bRect.right - bRect.width / 2 &&
      aRect.top > bRect.top &&
      aRect.bottom < bRect.bottom
    ) {
      return true;
    } else return false;
  }
  if (cellDirection === 'up') {
    if (
      aRect.left > bRect.left &&
      aRect.right < bRect.right &&
      aRect.top > bRect.top &&
      aRect.bottom - aRect.height / 2 < bRect.bottom - bRect.height / 2
    ) {
      return true;
    } else return false;
  }
  if (cellDirection === 'down') {
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

// import isCollision from './isCollision';

// const getDirection = (direction) => {
//   if (direction) {
//     return (direction = direction.firstChild.getAttribute(
//       'data-cell-direction'
//     ));
//   }
// };

// export default getDirection;

let rectX = 0;
let rectY = 0;
let cell;
let cellDirection = 'right';
let prevCellDirection;
let start = 0;

function gameLoop(timeStamp) {
  requestAnimationFrame(gameLoop);
  let timeFraction = (timeStamp - start) / 1000;
  if (timeFraction < 1 / 100) return;

  start = timeStamp;
  update();
}

function update() {
  if (!cell) {
    cell = document.querySelector('.ball');
  }

  isCollision(cell);
  if (prevCellDirection !== cellDirection) {
    draw(cellDirection);
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
  prevCellDirection = cellDirection;
  cellDirection = direction.firstChild.getAttribute('data-cell-direction');
  console.log(direction);
}

function isCollision(obj) {
  const cells = document.querySelectorAll('.drop');
  // const defCells = document.querySelectorAll('.defender__cell');
  for (let i = 0; i < cells.length; i++) {
    if (getCollision(obj, cells[i])) {
      const direction = getDirection(cells[i]);

      cells[i].firstChild.style = `display: none`;
      // cells[i].classList.remove('drop');
      cells[i].classList.add('defender__cell');

      return direction;
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

// let rectX = 0;
// let rectY = 0;
// let cell;
// let cellDirection = 'right';
// let prevCellDirection;
// let start = 0;

// function gameLoop(timeStamp) {
//   requestAnimationFrame(gameLoop);
//   let timeFraction = (timeStamp - start) / 1000;
//   if (timeFraction < 1 / 100) return;

//   start = timeStamp;
//   update();
// }

// function update() {
//   if (!cell) {
//     cell = document.querySelector('.ball');
//   }

//   isCollision(cell);

//   if (prevCellDirection !== cellDirection) {
//     draw(cellDirection);
//   } else {
//     return;
//   }
// }

// function draw(direction) {
//   switch (direction) {
//     case 'right':
//       rectX += 2;
//       cell.style.left = `${rectX}px`;
//       break;
//     case 'down':
//       rectY += 2;
//       cell.style.top = `${rectY}px`;
//       break;
//     case 'left':
//       rectX -= 2;
//       cell.style.left = `${rectX}px`;
//       break;
//     case 'up':
//       rectY -= 2;
//       cell.style.top = `${rectY}px`;
//       break;
//   }
// }

// function getDirection(direction) {
//   prevCellDirection = cellDirection;
//   cellDirection = direction.firstChild.getAttribute('data-cell-direction');
// }

// function isCollision(obj) {
//   const cells = document.querySelectorAll('.drop');
//   for (let i = 0; i < cells.length; i++) {
//     if (getCollision(obj, cells[i])) {
//       const direction = getDirection(cells[i]);
//       // cells[i].firstChild.style = `display: none`;
//       cells[i].classList.remove('drop');
//       // cells[i].classList.add('defender__cell');

//       return direction;
//     }
//   }
//   return null;
// }

// function getCollision(a, b) {
//   const aRect = a.getBoundingClientRect();
//   const bRect = b.getBoundingClientRect();

//   if (cellDirection === 'right') {
//     if (
//       aRect.left + aRect.width / 2 > bRect.left + bRect.width / 2 &&
//       aRect.right < bRect.right &&
//       aRect.top > bRect.top &&
//       aRect.bottom < bRect.bottom
//     ) {
//       return true;
//     } else return false;
//   }
//   if (cellDirection === 'left') {
//     if (
//       aRect.left > bRect.left &&
//       aRect.right - aRect.width / 2 < bRect.right - bRect.width / 2 &&
//       aRect.top > bRect.top &&
//       aRect.bottom < bRect.bottom
//     ) {
//       return true;
//     } else return false;
//   }
//   if (cellDirection === 'up') {
//     if (
//       aRect.left > bRect.left &&
//       aRect.right < bRect.right &&
//       aRect.top > bRect.top &&
//       aRect.bottom - aRect.height / 2 < bRect.bottom - bRect.height / 2
//     ) {
//       return true;
//     } else return false;
//   }
//   if (cellDirection === 'down') {
//     if (
//       aRect.left > bRect.left &&
//       aRect.right < bRect.right &&
//       aRect.top + aRect.height / 2 > bRect.top + bRect.height / 2 &&
//       aRect.bottom < bRect.bottom
//     ) {
//       return true;
//     } else return false;
//   }
// }

// export default gameLoop;

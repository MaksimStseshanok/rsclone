import ball from '../assets/images/football.png';

const createCellsField = (matrix) => {
  const field = document.querySelector('.inner__wrapper');

  for (let y = 0; y < matrix.length; y++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row__cell');
    field.append(rowElement);

    for (let x = 0; x < matrix[y].length; x++) {
      const cell = matrix[y][x];
      const cellElement = document.createElement('div');
      cellElement.classList.add('collumn__cell');
      cellElement.setAttribute('data-cell-id', cell.id);
      rowElement.append(cellElement);

      if (cell.id === 53) {
        const img = document.createElement('img');
        img.src = ball;
        img.style = 'width: 70%';
        cellElement.append(img);
      }
    }
  }
};

export default createCellsField;

// const getRandomFreefSell = (matrix) => {
//   const freeCells = [];

//   for (let y = 0; y < matrix.length; y++) {
//     for (let x = 0; x < matrix[y].length; x++) {
//       const cell = matrix[y][x];

//       if (!cell.mine) {
//         freeCells.push(cell);
//       }
//     }
//   }
//   const index = Math.floor(Math.random() * freeCells.length);
//   return freeCells[index];
// };

// const setRandomMine = (matrix) => {
//   const cell = getRandomFreefSell(matrix);
//   const cells = getAroundCells(matrix, cell.x, cell.y);
//   cell.mine = true;

//   for (const cell of cells) {
//     cell.number += 1;
//   }
// };

// const getCell = (matrix, x, y) => {
//   if (!matrix[y] || !matrix[y][x]) {
//     return false;
//   }
//   return matrix[y][x];
// };

// const getAroundCells = (matrix, x, y) => {
//   const cells = [];

//   for (let dx = -1; dx <= 1; dx++) {
//     for (let dy = -1; dy <= 1; dy++) {
//       if (dx === 0 && dy === 0) {
//         continue;
//       }
//       const cell = getCell(matrix, x + dx, y + dy);

//       if (cell) {
//         cells.push(cell);
//       }
//     }
//   }
//   return cells;
// };

// const matrix = createCellsField(10, 10);

// function matrixToHTML(matrix) {
//   const field = document.querySelector('.inner__wrapper');
//   console.log(field);

//   for (let y = 0; y < matrix.length; y++) {
//     const rowElement = document.createElement('div');
//     rowElement.classList.add('field_cell');
//     field.append(rowElement);

//     for (let x = 0; x < matrix[y].length; x++) {
//       const cellElement = document.createElement('div');

//       rowElement.append(cellElement);
//     }
//   }

//   return field;
// }

// const game = matrixToHTML(matrix);

// // export default game;

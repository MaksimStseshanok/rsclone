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

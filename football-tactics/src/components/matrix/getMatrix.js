// import levels from '../levels/levels';

const getMatrix = (rows, collumns, level) => {
  const matrix = [];
  let idCounter = 1;

  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < collumns; x++) {
      row.push({
        id: idCounter++,
        x,
        y,
      });
    }
    matrix.push(row);
  }
  return matrix;
};

const matrix = getMatrix(8, 13);

export default matrix;

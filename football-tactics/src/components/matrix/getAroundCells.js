const getAroundCells = (matrix, x, y) => {
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) {
        continue;
      }
      const cell = getCell(matrix, x + dx, y + dy);
      if (cell.player) {
        return false;
      }
    }
  }
  return true;
};

const getCell = (matrix, x, y) => {
  if (!matrix[y] || !matrix[y][x]) {
    return false;
  }
  return matrix[y][x];
};

export default getAroundCells;

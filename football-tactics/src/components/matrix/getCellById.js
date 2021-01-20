const getCellById = (matrix, id) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const cell = matrix[y][x];

      if (cell.id === id) {
        return cell;
      }
    }
  }
  return false;
};

export default getCellById;

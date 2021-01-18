const createCellsField = () => {
  const field = document.querySelector('.inner__wrapper');

  for (let i = 0; i < 104; i++) {
    const cell = document.createElement('div');
    field.append(cell);
  }
};

export default createCellsField;

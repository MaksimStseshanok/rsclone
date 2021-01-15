const createCellsField = () => {
  const field = document.querySelector('.inner__wrapper');
  const width = field.offsetWidth / 8;
  const height = field.offsetHeight / 5;

  for (let i = 0; i < 104; i++) {
    const cell = document.createElement('div');
    field.append(cell);
  }
};

export default createCellsField;

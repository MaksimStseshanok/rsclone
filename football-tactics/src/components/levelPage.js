import cleanPage from './cleanPageFunction/cleanPage';
import createGamePage from './createGamePage';

const createLevelPage = () => {
  const cells = [];
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table__wrapper');

  for (let i = 0; i < 15; i++) {
    const cell = document.createElement('button');
    cell.textContent = i + 1;
    cell.classList.add('table__cell');
    tableWrapper.append(cell);
    cells.push(cell);
  }

  tableWrapper.addEventListener('click', (event) => {
    // console.log(event.target.textContent);
    cleanPage();
    createGamePage(event.target.textContent - 1);
  });
  return tableWrapper;
};

export default createLevelPage;

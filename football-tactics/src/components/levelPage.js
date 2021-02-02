import cleanPage from './cleanPageFunction/cleanPage';
import createGamePage from './createGamePage';
import levels from './levels/levels';

const createLevelPage = (obj) => {
  const cells = [];
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table__wrapper');

  for (let i = 0; i < levels.length; i++) {
    const cell = document.createElement('button');
    cell.textContent = i + 1;
    cell.classList.add('table__cell');
    tableWrapper.append(cell);
    if (i < obj.completeLevels) {
      cell.classList.add('active');
      cells.push(cell);
    }
  }

  cells.forEach((button) => {
    button.addEventListener('click', (event) => {
      // console.log(event.target.textContent);
      // saveGame(event.target.textContent);
      cleanPage();
      createGamePage(event.target.textContent - 1);
    });
  });
  return tableWrapper;
};

export default createLevelPage;

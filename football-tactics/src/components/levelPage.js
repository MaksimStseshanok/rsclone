import createGamePage from './gamePage';
import cleanPage from '../cleanPageFunction/cleanPage';
import createCellsField from './createCellsField';

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
    cleanPage();
    const root = document.querySelector('#root');
    const canvas = document.createElement('canvas');
    const wrapper = document.createElement('div');
    const innerWrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    innerWrapper.classList.add('inner__wrapper');
    wrapper.append(canvas, innerWrapper);
    canvas.classList.add('field');
    root.append(wrapper);
    createGamePage();
    createCellsField();
  });
  return tableWrapper;
};

export default createLevelPage;

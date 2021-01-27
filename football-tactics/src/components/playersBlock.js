import levels from './levels/levels';
import restart from './restart/restart';
const createPlayersBlock = (level) => {
  const wrapper = document.createElement('div');
  const spanWrapper = document.createElement('div');
  const span = document.createElement('span');

  wrapper.classList.add('players');
  span.classList.add('material-icons');
  spanWrapper.classList.add('restart');

  const createBlock = (block, side) => {
    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('players__wrapper');
    block.forEach((item, index) => {
      const img = document.createElement('img');
      const imgBlock = document.createElement('div');

      img.classList.add('players__wrapper-img');
      imgBlock.classList.add('players__wrapper-block');
      img.setAttribute('draggable', true);
      addCellDirection(img, index, side);
      img.src = item;
      imgBlock.append(img);
      innerWrapper.append(imgBlock);

      wrapper.append(innerWrapper);
    });
  };

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      createBlock(levels[level].leftBlock, 'left');
    } else if (i === 1) {
      span.textContent = 'loop';
      spanWrapper.append(span);
      wrapper.append(spanWrapper);
      spanWrapper.addEventListener('click', (event) => {
        event.preventDefault();
        restart(level);
      });
    } else {
      createBlock(levels[level].rightBlock, 'right');
    }
  }
  return wrapper;
};

function addCellDirection(cell, index, side) {
  if (side === 'left') {
    if (index === 0) {
      cell.setAttribute('data-cell-direction', 'right');
    }
    if (index === 1) {
      cell.setAttribute('data-cell-direction', 'down');
    }
    if (index === 2) {
      cell.setAttribute('data-cell-direction', 'up');
    }
    if (index === 3) {
      cell.setAttribute('data-cell-direction', 'left');
    }
  } else {
    if (index === 0) {
      cell.setAttribute('data-cell-direction', 'down');
    }
    if (index === 1) {
      cell.setAttribute('data-cell-direction', 'left');
    }
    if (index === 2) {
      cell.setAttribute('data-cell-direction', 'right');
    }
    if (index === 3) {
      cell.setAttribute('data-cell-direction', 'up');
    }
  }
}

export default createPlayersBlock;

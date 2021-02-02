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
      addCellDirection(img, item);
      img.src = item.img;
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

function addCellDirection(element, obj) {
  element.setAttribute('data-cell-output', obj.output);
  element.setAttribute('data-cell-entry', obj.entry);
}

export default createPlayersBlock;

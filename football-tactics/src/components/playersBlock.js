import levels from './levels/levels';
import cleanPage from './cleanPageFunction/cleanPage';
import createGamePage from './createGamePage';
const createPlayersBlock = (level) => {
  const wrapper = document.createElement('div');
  const button = document.createElement('button');
  wrapper.classList.add('players');

  button.addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    createGamePage();
  });
  const createBlock = (block) => {
    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('players__wrapper');
    block.forEach((item) => {
      const img = document.createElement('img');
      const imgBlock = document.createElement('div');
      img.classList.add('players__wrapper-img');
      imgBlock.classList.add('players__wrapper-block');
      img.setAttribute('draggable', true);
      img.src = item;
      imgBlock.append(img);
      innerWrapper.append(imgBlock);

      wrapper.append(innerWrapper);
    });
  };

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      createBlock(levels[level].leftBlock);
    } else if (i === 1) {
      wrapper.append(button);
    } else {
      createBlock(levels[level].rightBlock);
    }
  }
  return wrapper;
};

export default createPlayersBlock;

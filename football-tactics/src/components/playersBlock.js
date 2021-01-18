import levels from '../levels/levels';
const createPlayersBlock = (level) => {
  // const canvas = document.createElement('canvas');
  const wrapper = document.createElement('div');
  // const innerWrapper = document.createElement('div');
  // const ctx = canvas.getContext('2d');

  wrapper.classList.add('players');
  // innerWrapper.classList.add('players__wrapper');

  // canvas.width = 107;
  // canvas.height = 101;

  // (function draw() {
  //   ctx.beginPath();
  //   ctx.rect(0, 0, 107, 101);
  //   ctx.stroke();
  // })();

  for (let i = 0; i < 2; i++) {
    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('players__wrapper');
    if (i === 0) {
      levels[level].leftBlock.forEach((item) => {
        const img = document.createElement('img');
        img.classList.add('players__wrapper-img');
        img.src = item;
        innerWrapper.append(img);
      });
    } else {
      levels[level].rightBlock.forEach((item) => {
        const img = document.createElement('img');
        img.classList.add('players__wrapper-img');
        img.src = item;
        innerWrapper.append(img);
      });
    }
    wrapper.append(innerWrapper);
  }

  return wrapper;
};

export default createPlayersBlock;

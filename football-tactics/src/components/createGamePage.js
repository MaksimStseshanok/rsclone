import createField from './createField';
import createPlayersBlock from './playersBlock';

const createGamePage = () => {
  const root = document.querySelector('#root');
  const canvas = document.createElement('canvas');
  const wrapper = document.createElement('div');
  const innerWrapper = document.createElement('div');

  wrapper.classList.add('wrapper');
  innerWrapper.classList.add('inner__wrapper');
  canvas.classList.add('field');

  wrapper.append(canvas, innerWrapper);
  root.append(wrapper, createPlayersBlock(0));

  createField();
};

export default createGamePage;

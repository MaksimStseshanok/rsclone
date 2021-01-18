import createField from './createField';
import createPlayersBlock from './playersBlock';
import dragAndDrop from './dragAndDrop/dragAndDrop';

const createGamePage = () => {
  const root = document.querySelector('#root');
  const container = document.createElement('div');
  const canvas = document.createElement('canvas');
  const wrapper = document.createElement('div');
  const innerWrapper = document.createElement('div');

  wrapper.classList.add('wrapper');
  innerWrapper.classList.add('inner__wrapper');
  canvas.classList.add('field');

  wrapper.append(canvas, innerWrapper);
  container.append(wrapper, createPlayersBlock(0));
  root.append(container);

  createField();
  dragAndDrop();
};

export default createGamePage;

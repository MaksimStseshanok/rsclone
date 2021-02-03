import createField from './createField';
import createPlayersBlock from './playersBlock';
import createCellsField from './createCellsField';
import dragAndDrop from './dragAndDrop/dragAndDrop';
import createModal from './modal/modal';
import levels from './levels/levels';
import createHomePage from './homePage';

const createGamePage = (level) => {
  const root = document.querySelector('#root');
  const container = document.createElement('div');
  const canvas = document.createElement('canvas');
  const wrapper = document.createElement('div');
  const innerWrapper = document.createElement('div');

  wrapper.classList.add('wrapper');
  innerWrapper.classList.add('inner__wrapper');
  canvas.classList.add('field');

  if (level === levels.length) {
    alert('game over');
    root.append(createHomePage());
    return;
  }

  wrapper.append(canvas, innerWrapper);
  container.append(wrapper, createPlayersBlock(level));
  root.append(container, createModal());
  console.log(levels.length);

  createField();
  createCellsField(level);
  dragAndDrop(level);
};

export default createGamePage;

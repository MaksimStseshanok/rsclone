import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';
import checkLocalStorage from '../checkLocalStorage';
import createHomePage from '../homePage';

const createModal = () => {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const head = document.createElement('div');
  const content = document.createElement('div');
  const resultText = document.createElement('div');
  const menu = document.createElement('ul');

  modalWrapper.classList.add('modal-wrapper');
  modal.classList.add('modal');
  head.classList.add('head');
  content.classList.add('content');
  resultText.classList.add('result');
  menu.classList.add('menu');

  menu.addEventListener('click', (event) => {
    event.preventDefault();
    const level = checkLocalStorage();
    const menuText = event.target.textContent;
    if (menuText === 'next level') {
      cleanPage();
      createGamePage(level.currentlevel);
    } else if (menuText === 'restart') {
      cleanPage();
      createGamePage(level.currentlevel);
    } else {
      cleanPage();
      const root = document.querySelector('#root');
      root.append(createHomePage());
    }
  });

  content.append(resultText, menu);
  modal.append(head, content);
  modalWrapper.append(modal);

  return modalWrapper;
};

export default createModal;

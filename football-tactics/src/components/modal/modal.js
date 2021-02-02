import cleanPage from '../cleanPageFunction/cleanPage';
import createGamePage from '../createGamePage';
import checkLocalStorage from '../storage';
import createHomePage from '../homePage';

const level = checkLocalStorage();

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

  for (let i = 0; i < 2; i++) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');
    if (i === 0) {
      menuItem.textContent = 'restart';
    } else {
      menuItem.textContent = 'back to home';
    }
    menu.append(menuItem);
  }

  menu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.textContent === 'restart') {
      cleanPage();
      createGamePage(level.currentlevel);
    } else {
      cleanPage();
      const root = document.querySelector('#root');
      root.append(createHomePage());
    }
  });

  // modal.innerHTML = `
  //   <div class="modal-wrapper">
  //     <div class="modal">
  //       <div class="head">
  //       </div>
  //       <div class="content">
  //           <div class="result">
  //             ${result}
  //           </div>
  //           <ul class="menu">
  //             <li class="menu__item">restart</li>
  //             <li class="menu__item">back to menu</li>
  //           </ul>
  //       </div>
  //     </div>
  //   </div>
  // `;

  content.append(resultText, menu);
  modal.append(head, content);
  modalWrapper.append(modal);

  return modalWrapper;
};

export default createModal;

const openModal = (result) => {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const resultText = document.querySelector('.result');
  const menu = document.querySelector('.menu');
  const blur = document.querySelector('#root').firstChild;

  for (let i = 0; i < 2; i++) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');
    if (i === 0 && result === 'goal') {
      menuItem.textContent = 'next level';
      resultText.innerHTML = `
      <i class="goal fa fa-thumbs-o-up" aria-hidden="true"></i>
      <h1 class="goal">Goal!</h1>
      <h2 class="goal">Congratulations</h2>`;
    } else if (i === 0 && result === 'no goal') {
      menuItem.textContent = 'restart';
      resultText.innerHTML = `
      <i class="no-goal fa fa-thumbs-o-down" aria-hidden="true"></i>
      <h1 class="no-goal">No goal</h1>
      <h2 class="no-goal">You miss</h2>`;
    } else if (i === 0 && result === 'players') {
      menuItem.textContent = 'restart';
      resultText.innerHTML = `
      <i class="no-goal fa fa-thumbs-o-down" aria-hidden="true"></i>
      <h1 class="no-goal">No goal</h1>
      <h2 class="no-goal">Use all players</h2>`;
    } else {
      menuItem.textContent = 'back to home';
    }
    menu.append(menuItem);
  }

  modalWrapper.classList.toggle('open');
  blur.classList.toggle('blur-it');
  return false;
};

export default openModal;

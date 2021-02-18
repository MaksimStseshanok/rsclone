const openModal = (result) => {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const resultText = document.querySelector('.result');
  const menu = document.querySelector('.menu');
  const blur = document.querySelector('#root').firstChild;

  for (let i = 0; i < 2; i++) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');
    if (i === 0 && result === 'goal') {
      menuItem.textContent = 'дальше';
      resultText.innerHTML = `
      <i class="goal fa fa-thumbs-o-up" aria-hidden="true"></i>
      <h1 class="goal">Гол!</h1>
      <h2 class="goal">Поздравляю</h2>`;
    } else if (i === 0 && result === 'no goal') {
      menuItem.textContent = 'повторить';
      resultText.innerHTML = `
      <i class="no-goal fa fa-thumbs-o-down" aria-hidden="true"></i>
      <h1 class="no-goal">Нет гола</h1>
      <h2 class="no-goal">Очень жаль</h2>`;
    } else if (i === 0 && result === 'players') {
      menuItem.textContent = 'повторить';
      resultText.innerHTML = `
      <i class="no-goal fa fa-thumbs-o-down" aria-hidden="true"></i>
      <h1 class="no-goal">Нет гола</h1>
      <h2 class="no-goal">Используй всех игроков</h2>`;
    } else {
      menuItem.textContent = 'на главную';
    }
    menu.append(menuItem);
  }

  modalWrapper.classList.toggle('open');
  blur.classList.toggle('blur-it');
  return false;
};

export default openModal;

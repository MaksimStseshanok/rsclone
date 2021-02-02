const openModal = (result) => {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const resultText = document.querySelector('.result');
  const blur = document.querySelector('#root').firstChild;
  if (result) {
    resultText.innerHTML = `<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>;
    <h1>Goal</h1>`;
  } else {
    resultText.innerHTML = `<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
    <h1>No goal</h1>`;
  }
  modalWrapper.classList.toggle('open');
  blur.classList.toggle('blur-it');
  return false;
};

export default openModal;

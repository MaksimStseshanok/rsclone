const dragAndDrop = () => {
  const cards = document.querySelectorAll('.players__wrapper-img');
  const cells = document.querySelectorAll('.field_cell');
  let card;

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add('hide');
      card = this;
    }, 0);
  };

  const dragEnd = function () {
    this.classList.remove('hide');
    this.classList.add('drop');
    this.setAttribute('draggable', false);
  };

  const dragOver = function (event) {
    event.preventDefault();
  };

  const dragEnter = function (event) {
    event.preventDefault();
    this.classList.add('hovered');
  };
  const dragLeave = function () {
    this.classList.remove('hovered');
  };
  const dragDrop = function () {
    this.append(card);
    this.classList.remove('hovered');
  };

  cards.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  cells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDrop);
  });
};

export default dragAndDrop;

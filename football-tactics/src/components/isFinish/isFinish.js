let lastRenderTime = 0;
let rectX = 0;
const speed = 24;

function animate(currentTime) {
  window.requestAnimationFrame(animate);
  const secondsSinseLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinseLastRender < 1 / speed) return;

  lastRenderTime = currentTime;

  if (update()) draw('up');
}

function update() {
  const elem = document.querySelector('.start__cell');
  const cells = document.querySelectorAll('.drop');
  cells.forEach((element) => {
    if (!isCollide(elem, element)) {
      // update();
      draw('up');
    } else {
      console.log(element.getBoundingClientRect());
      return;
    }
  });
}
function draw(direction) {
  const elem = document.querySelector('.start__cell');
  switch (direction) {
    case 'up':
      rectX += 1;
      elem.style.left = `${rectX}px`;
      break;
    case 'down':
      rectY += 1;
      elem.style.bottom = `${rectY}px`;
      break;
    case 'left':
      elem.style.left = `right:${rectX}px`;
      break;
    case 'right':
      elem.style.left = `left:${rectX}px`;
      break;
  }
}

function isCollide(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

export default animate;

import getCollision from './getCollision';
import getDirection from './getDirection';

export default function isCollision(obj) {
  const cells = document.querySelectorAll('.drop');
  for (let i = 0; i < cells.length; i++) {
    if (getCollision(obj, cells[i])) {
      const cellDirection = getDirection(cells[i]);
      return cellDirection;
    }
    return false;
  }
}

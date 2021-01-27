import isCollision from './isCollision';

const getDirection = (direction) => {
  if (direction) {
    return (direction = direction.firstChild.getAttribute(
      'data-cell-direction'
    ));
  }
};

export default getDirection;

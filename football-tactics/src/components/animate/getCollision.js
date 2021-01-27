export default function getCollision(aPoint, bPoint) {
  const a = aPoint.getBoundingClientRect();
  const b = bPoint.getBoundingClientRect();
  const aPoints = [
    { x: a.x, y: a.y },
    { x: a.x + a.width, y: a.y },
    { x: a.x, y: a.y + a.height },
    { x: a.x + a.width, y: a.y + a.height },
  ];

  for (const { x, y } of aPoints) {
    if (b.x < x && x < b.x + b.width && b.y < y && y < b.y + b.height) {
      console.log(1);
      return true;
    }
  }
  const bPoints = [
    { x: b.x, y: b.y },
    { x: b.x + b.width, y: b.y },
    { x: b.x, y: b.y + b.height },
    { x: b.x + b.width, y: b.y + b.height },
  ];

  for (const { x, y } of bPoints) {
    if (a.x < x && x < a.x + a.width && a.y < y && y < a.y + a.height) {
      return true;
    }
  }
  return false;
  // const aRect = a.getBoundingClientRect();
  // const bRect = b.getBoundingClientRect();

  // if (
  //   // aRect.left < bRect.left + bRect.width &&
  //   // aRect.left > bRect.left &&
  //   // aRect.top == bRect.top
  //   (aRect.x + aRect.width / 2 >= bRect.x + bRect.width / 2 &&
  //     aRect.x <= bRect.x + bRect.width) ||
  //   (aRect.y + aRect.height / 2 >= bRect.y + bRect.height / 2 &&
  //     aRect.y <= bRect.y + bRect.height)
  // ) {
  //   console.log(aRect.y + aRect.height / 2, bRect.y + bRect.height / 2);
  //   return true;
  // } else return false;
}

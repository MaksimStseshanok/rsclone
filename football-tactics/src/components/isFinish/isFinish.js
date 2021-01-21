import restart from '../restart/restart';

const isFinish = (counter, level) => {
  if (!counter) {
    const ball = document.querySelector('.start__cell');
    ball.classList.add('active');
  }
};

export default isFinish;

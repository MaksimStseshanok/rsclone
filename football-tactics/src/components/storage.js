import levels from './levels/levels';

const checkLocalStorage = () => {
  let game = JSON.parse(localStorage.getItem('game'));

  if (!game) {
    game = {
      completeLevels: 1,
      currentlevel: 0,
    };
  }
  return game;
};

const saveCompleteLevel = (completeLevels) => {
  const game = {
    completeLevels: completeLevels,
    // level: ++currentLevel,
  };
  localStorage.setItem('game', JSON.stringify(game));
};

export default checkLocalStorage;

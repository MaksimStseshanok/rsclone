const saveLevel = (level) => {
  const game = JSON.parse(localStorage.getItem('game'));

  if (game.completeLevels <= level) {
    game.completeLevels = level;
  }

  game.currentlevel = level;
  localStorage.setItem('game', JSON.stringify(game));
};

export default saveLevel;

const checkLocalStorage = () => {
  let game = JSON.parse(localStorage.getItem('game'));
  if (!game) {
    game = {
      completeLevels: 0,
      currentlevel: 0,
    };
    localStorage.setItem('game', JSON.stringify(game));
  }
  return game;
};

export default checkLocalStorage;

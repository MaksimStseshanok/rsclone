const saveCompleteLevel = (obj) => {
  const game = {
    completeLevels: ++obj.completeLevels,
    currentlevel: obj.currentlevel,
  };
  localStorage.setItem('game', JSON.stringify(game));
};

export default saveCompleteLevel;

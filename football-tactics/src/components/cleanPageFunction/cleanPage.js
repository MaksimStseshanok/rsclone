const cleanPage = () => {
  const root = document.getElementById('root');
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
};

export default cleanPage;

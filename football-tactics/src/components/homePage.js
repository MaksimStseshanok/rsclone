import image from '../assets/images/icon.png';
import createLevelPage from './levelPage';
import cleanPage from './cleanPageFunction/cleanPage';
import checkLocalStorage from './checkLocalStorage';
import checkSound from './sounds/playSound';
import soundHome from '../assets/sounds/homeSound.mp3';

const createHomePage = () => {
  const homePage = document.createDocumentFragment();
  const title = document.createElement('h1');
  const img = document.createElement('img');
  const playBtn = document.createElement('button');
  const soundBtnWrapper = document.createElement('div');
  const soundPlay = document.createElement('i');
  const soundStop = document.createElement('div');

  title.classList.add('title');
  img.classList.add('icon');
  playBtn.classList.add('btn');
  soundBtnWrapper.classList.add('sound__wrapper');
  soundPlay.classList.add('fa', 'fa-volume-up', 'sound');
  soundStop.classList.add('sound__inactive');

  title.textContent = 'Football tactics';
  playBtn.textContent = 'Play';
  img.src = image;

  soundBtnWrapper.append(soundStop, soundPlay);
  homePage.append(title, img, playBtn, soundBtnWrapper);

  soundBtnWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('sound__active')) {
      checkSound(soundHome);
      soundPlay.classList.toggle('sound__active');
    } else {
      checkSound(soundHome);
      soundPlay.classList.toggle('sound__active');
    }
  });

  // soundPlay.addEventListener('click', () => {
  //   playSound(soundHome);
  // });

  playBtn.addEventListener('click', () => {
    const root = document.querySelector('#root');
    cleanPage();

    root.append(createLevelPage(checkLocalStorage()));
  });

  return homePage;
};

export default createHomePage;

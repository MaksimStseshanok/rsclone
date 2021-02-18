import image from '../assets/images/icon.png';
import createLevelPage from './levelPage';
import cleanPage from './cleanPageFunction/cleanPage';
import checkLocalStorage from './checkLocalStorage';
import checkSound from './sounds/sounds';
import homeSound from '../assets/sounds/homeSound.mp3';

const createHomePage = () => {
  const homePage = document.createDocumentFragment();
  const title = document.createElement('h1');
  const info = document.createElement('div');
  const img = document.createElement('img');
  const playBtn = document.createElement('button');
  const soundBtnWrapper = document.createElement('div');
  const soundPlay = document.createElement('i');

  title.classList.add('title');
  img.classList.add('icon');
  playBtn.classList.add('btn');
  soundBtnWrapper.classList.add('sound__wrapper');
  soundPlay.classList.add('fa', 'fa-volume-up', 'sound');
  info.classList.add('info');

  title.textContent = 'Football tactics';
  playBtn.textContent = 'Играть';
  img.src = image;

  info.textContent =
    'Football tactics - логическая игра в которой Вы играете в абстрактный футбол.Вам нужно построить маршрут мяча и правильно расставить игроков на футбольном поле.Каждый игрок может принять и отбить мяч один раз и только в одну сторону, нельзя ставить игроков рядом друг с другом или соперником. Важно - игра начнётся автоматически, после того, как вы расставите всех игроков, каждый из которых должен коснуться мяча';

  soundBtnWrapper.append(soundPlay);
  homePage.append(title, img, playBtn, info, soundBtnWrapper);

  const playMusic = new Audio(homeSound);

  soundBtnWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('sound__active')) {
      checkSound(playMusic, 'homeSound');
      soundPlay.classList.toggle('sound__active');
    } else {
      checkSound(playMusic, 'homeSound');
      soundPlay.classList.toggle('sound__active');
    }
  });

  playBtn.addEventListener('click', () => {
    const root = document.querySelector('#root');
    cleanPage();

    root.append(createLevelPage(checkLocalStorage()));
  });

  return homePage;
};

export default createHomePage;

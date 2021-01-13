import image from '../assets/images/icon.png';

const homePage = document.createDocumentFragment();
const title = document.createElement('h1');
const img = document.createElement('img');
const playBtn = document.createElement('button');

title.classList.add('title');
img.classList.add('icon');
playBtn.classList.add('btn');

title.textContent = 'Football tactics';
playBtn.textContent = 'Play';
img.src = image;

homePage.append(title, img, playBtn);

export default homePage;

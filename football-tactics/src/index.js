import './styles/style.scss';
import createHomePage from './components/homePage';

const root = document.querySelector('#root');
root.append(createHomePage());

export default root;

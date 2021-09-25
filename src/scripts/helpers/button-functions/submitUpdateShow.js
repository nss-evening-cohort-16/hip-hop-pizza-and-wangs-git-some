import showUpcomingShows from '../../components/showUpcomingShows';
import { updateShow } from '../data/upcoming-show-data';
import submitNewShow from './submitNewShow';

const submitUpdateShow = (showKey, isAdmin) => {
  const showObj = {
    name: document.querySelector('#showName').value,
    genre: document.querySelector('#showGenre').value,
    showDate: document.querySelector('#showDate').value,
    showType: document.querySelector('#showType').value,
    img: document.querySelector('#showImg').value,
    firebaseKey: showKey
  };
  if (showKey) updateShow(showObj).then((showArr) => showUpcomingShows(showArr, isAdmin)); else submitNewShow(showObj).then((showArr) => showUpcomingShows(showArr, isAdmin));
};

export default submitUpdateShow;

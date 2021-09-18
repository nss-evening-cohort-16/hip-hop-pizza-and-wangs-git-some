import showUpcomingShows from '../../components/showUpcomingShows';
import { updateShow } from '../data/upcoming-show-data';

const submitUpdateShow = (showKey) => {
  const showObj = {
    name: document.querySelector('#showName').value,
    genre: document.querySelector('#showGenre').value,
    showDate: document.querySelector('#showDate').value,
    showType: document.querySelector('#showType').value,
    img: document.querySelector('#showImg').value,
    firebaseKey: showKey
  };
  updateShow(showObj).then(showUpcomingShows);
};

export default submitUpdateShow;

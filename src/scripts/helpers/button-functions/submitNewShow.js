import showUpcomingShows from '../../components/showUpcomingShows';
import { createShow } from '../data/upcoming-show-data';

const submitNewShow = (uid, isAdmin) => {
  const newShow = {
    name: document.querySelector('#showName').value,
    genre: document.querySelector('#showGenre').value,
    showDate: document.querySelector('#showDate').value,
    showType: document.querySelector('#showType').value,
    img: document.querySelector('#showImg').value,
    uid
  };
  createShow(newShow, uid, isAdmin).then(showUpcomingShows);
};

export default submitNewShow;

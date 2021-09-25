import clearDom from '../helpers/clearDom';
import addShowButton from './addShowButton';

const showUpcomingShows = (showArr, isAdmin) => {
  clearDom();
  let domString = '<div id="showContainer"><div id="showBtnContainer"></div>';
  showArr.forEach((show) => {
    domString += `<div class="card order-card">
    <div class="card-body show-card-inner">
      <h4 class="card-title">${show.name}</h4>
      <img src=${show.img} alt=${show.name} style="width: 250px; height: 200px;">
      <ul id="show info">
         <li>Show Date: ${show.showDate}</li><hr>
         <li>Genre: ${show.genre}</li><hr>
         <li>Type of Show: ${show.showType}</li><hr>
      </ul>
      <div id="order-buttons">
         ${isAdmin === true ? `<i class="btn btn-success far fa-edit" id="show-edit-btn--${show.firebaseKey}"></i>
         <i class="btn btn-danger fa fa-trash-alt" id="show-delete-btn--${show.firebaseKey}"></i>` : ''}
    </div>
  </div>
  </div>`;
  });
  domString += '</div>';
  document.querySelector('#upcomingShowContainer').innerHTML = domString;
  addShowButton(isAdmin);
};

export default showUpcomingShows;

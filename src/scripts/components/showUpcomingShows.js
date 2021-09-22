import clearDom from '../helpers/clearDom';

const showUpcomingShows = (showArr) => {
  clearDom();
  let domString = '';
  showArr.forEach((show) => {
    domString += `<div class="card show-card">
    <div class="card-body show-card-inner">
      <h4 class="card-title">${show.name}</h4>
      <img src=${show.img} alt=${show.name} style="width: 250px; height: 200px;">
      <ul id="show info">
         <li>Show Date: ${show.showDate}</li><hr>
         <li>Genre: ${show.genre}</li><hr>
         <li>Type of Show: ${show.showType}</li><hr>
      </ul>
      <div id="order-buttons">
         <i class="btn btn-success far fa-edit" id="show-edit-btn--${show.firebaseKey}"></i>
         <i class="btn btn-danger fa fa-trash-alt" id="show-delete-btn--${show.firebaseKey}"></i>
    </div>
  </div>
  </div>`;
  });
  document.querySelector('#upcomingShowContainer').innerHTML = domString;
};

export default showUpcomingShows;

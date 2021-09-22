import clearDom from '../helpers/clearDom';
import menuOrderFilter from './menuOrderFilter';

const showMenu = (menuArr, isAdmin) => {
  clearDom();
  let domString = '<div id="menuContainer"><div id="menuFilterContainer"></div>';
  menuArr.forEach((item) => {
    domString += `<div class="card order-card">
      <div class="card-body">
        <h4 class="card-title">${item.title}</h4>
        <img src=${item.image} alt="${item.title}" style="width: 250px; height: 200px;">
        <ul id="menu item info">
          <li>Price: $${item.price}</li><hr>
          <li>Description: ${item.description}</li><hr>
          ${item.onSale ? '<li><span class="on-sale-tag">On Sale!</span></li><hr>' : ''}
        </ul>
         <div id="menu-buttons">
          <i class ="btn btn-success far fa-plus-square" id="menu-item-add-btn--${item.firebaseKey}">${' Add to order'}</i>
          ${isAdmin === true ? `<i class="btn btn-success far fa-edit" id="menu-item-edit-btn--${item.firebaseKey}"></i>
          <i class="btn btn-danger fa fa-trash-alt" id="menu-item-delete-btn--${item.firebaseKey}"></i>` : ''}
        </div>
    </div>
  </div>
    `;
  });
  domString += '</div>';
  document.querySelector('#cardContainer').innerHTML = domString;
  menuOrderFilter(isAdmin);
};

export default showMenu;

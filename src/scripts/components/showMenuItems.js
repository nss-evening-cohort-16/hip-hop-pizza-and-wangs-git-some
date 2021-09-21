import clearDom from '../helpers/clearDom';

const showMenu = (menuArr) => {
  clearDom();
  let domString = '<div id="menuContainer">;
  menuArr.forEach((item) => {
    domString += `<div class="card order-card">
      <div class="card-body">
        <h4 class="card-title">${item.title}</h4>
        <img src=${item.image} alt="${item.title}" style="width: 250px; height: 200px;">
        <ul id="menu item info">
          <li>Price: ${item.price}</li><hr>
          <li>Description: ${item.description}</li><hr>
          <li>On Sale?: ${item.onSale}</li><hr>
        </ul>
         <div id="menu-buttons">
          <i class ="btn btn-success fa fa-list-alt" id="menu-item-add-btn--${item.firebaseKey}"></i>
          <i class="btn btn-success far fa-edit" id="menu-item-edit-btn--${item.firebaseKey}"></i>
          <i class="btn btn-danger fa fa-trash-alt" id="menu-item-delete-btn--${item.firebaseKey}"></i>
        </div>
    </div>
  </div>
    `;
  });
  document.querySelector('#cardContainer').innerHTML = domString;
};

export default showMenu;

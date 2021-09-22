import clearDom from '../helpers/clearDom';

const filterDropdown = () => {
  document.querySelector('#dropdownContainer').style.display = 'block';
};

const showOrders = (orderArr) => {
  clearDom();
  let domString = '';
  filterDropdown();
  orderArr.forEach((order) => {
    const date = `${new Date(order.date).toDateString()}<br>(${new Date(order.date).toLocaleTimeString()})`;
    domString += `<div class="card order-card">
   <div class="card-body">
     <h4 class="card-title">${order.name}</h4>
     <ul id="order info">
        <li>${order.isOpen === 'open' ? 'Order Status: Open' : 'Order Status: Closed'}</li><hr>
        <li>Phone: ${order.phone || 'no phone provided'}</li><hr>
        <li>Email: ${order.email || 'no email provided'}</li><hr>
        <li>Order Type: ${order.orderType}</li><hr>
        <li>Time placed: ${date}</li>
     </ul>
     <div id="order-buttons">
        <i class="btn btn-primary fa fa-list-alt" id="order-detail-btn--${order.firebaseKey}"></i>
        <i class="btn btn-success far fa-edit" id="order-edit-btn--${order.firebaseKey}"></i>
        <i class="btn btn-danger fa fa-trash-alt" id="order-delete-btn--${order.firebaseKey}"></i>
   </div>
 </div>
 </div>`;
  });
  document.querySelector('#cardContainer').innerHTML = domString;
};

export default showOrders;

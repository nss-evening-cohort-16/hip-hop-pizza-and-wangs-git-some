import clearDom from '../helpers/clearDom';

const showOrders = (orderArr) => {
  clearDom();
  let domString = '';
  orderArr.forEach((order) => {
    domString += `<div class="card order-card">
   <div class="card-body">
     <h4 class="card-title">${order.name}</h4>
     <ul id="order info">
        <li>${order.isOpen}</li>
        <li>${order.phone} || 'no phone provided'</li>
        <li>${order.email || 'no email provided'}</li>
        <li>${order.type}</li>
     </ul>
     <div id="order-buttons">
        <a href="#" class="order-detail-btn">Details</a>
        <a href="#" class="order-edit-btn">Edit</a>
        ${order.isOpen ? '<a href="#" class="order-delete-btn">Delete</a>' : ''}
   </div>
 </div>`;
  });
  document.querySelector('#cardContainer').innerHTML = domString;
};

export default showOrders;

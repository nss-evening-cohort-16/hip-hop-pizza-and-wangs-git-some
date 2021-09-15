import clearDom from '../helpers/clearDom';
import { getOrderItems } from '../helpers/data/item-data';

const orderTotal = (orderItems) => {
  let total = 0;
  orderItems.forEach((item) => { total += item.price; });
  return total;
};

const showOrderDetails = async (orderId) => {
  clearDom();
  const orderItems = await getOrderItems(orderId);
  let domString = `<div class="order-total">TOTAL: $${orderTotal(orderItems)}</div>`;
  orderItems.forEach((item) => {
    domString += `
      <div class="card item-card">
        <div class="card-body">
          <h4 class="card-item">${item.name}</h4>
          <h4 class="card-price">PRICE: $${item.price}</h4>
          <div id="item-buttons">
            <a href="#" class="item-edit-btn--${item.firebaseKey}">Edit</a>
            <a href="#" class="item-delete-btn--${item.firebaseKey}">Delete</a>
          </div>
        </div>`;

    domString += `
        <div class="order-detail-buttons">
          <button type="button" class="btn btn-secondary" id="add-item--${orderId}">Add Item</button>
          <button type="button" class="btn btn-primary" id="payment--${orderId}>Go To Payment</button>
        </div>
      </div>`;
  });

  document.querySelector('#cardContainer').innerHTML = domString;
};

export default showOrderDetails;

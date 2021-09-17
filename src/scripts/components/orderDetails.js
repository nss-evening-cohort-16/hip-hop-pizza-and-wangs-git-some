import clearDom from '../helpers/clearDom';
import { getOrderItems } from '../helpers/data/item-data';
import { getSingleOrder } from '../helpers/data/order-data';

const orderTotal = (orderItems) => {
  let total = 0;
  orderItems.forEach((item) => { total += item.price; });
  return total;
};

const showOrderDetails = async (orderId) => {
  clearDom();
  const orderItems = await getOrderItems(orderId);
  let domString = '<div class="order-details-container">';
  orderItems.forEach((item) => {
    domString += `
      <div class="card item-card">
        <div class="card-body">
          <h4 class="card-item">${item.name}</h4>
          <h4 class="card-price">PRICE: $${item.price}</h4>
          <div id="item-buttons">
            <i class="btn btn-success far fa-edit" id="item-edit-btn--${item.firebaseKey}"></i>
            <i class="btn btn-danger fa fa-trash-alt" id="item-delete-btn--${item.firebaseKey}"></i>
          </div>
        </div>
      </div>`;
  });

  domString += `<div class="order-total"><b>TOTAL:</b> $${orderTotal(orderItems)}</div>`;

  const orderInfo = await getSingleOrder(orderId);
  if (orderInfo.isOpen) {
    domString += `
      <div class="order-detail-buttons">
        <button type="button" class="btn btn-secondary" id="add-item--${orderId}">Add Item</button>
        <button type="button" class="btn btn-primary" id="payment--${orderId}">Go To Payment</button>
      </div>`;
  }
  domString += '</div>';

  document.querySelector('#cardContainer').innerHTML = domString;
};

export default showOrderDetails;

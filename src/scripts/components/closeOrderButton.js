import { getSingleOrder, updateOrder } from '../helpers/orders';
import { getOrderItems } from '../helpers/data/item-data';
import { createRecord } from '../helpers/data/sales-data';

const closeOrder = (orderKey) => {
  const orderPatch = {
    firebaseKey: orderKey,
    isOpen: false
  };
  updateOrder(orderPatch);
};

const closeOrderConfirm = (orderKey) => {
  getSingleOrder(orderKey).then((order) => {
    getOrderItems(orderKey).then((items) => {
      let orderTotal = 0;
      items.forEach((item) => {
        orderTotal += item.price;
      });
      const tip = document.querySelector('#tip-input').valueAsNumber;
      const paymentType = document.querySelector('#payment-type').value;

      const newRecord = {
        date: order.date,
        orderTotal,
        tip,
        paymentType,
        orderType: order.orderType
      };
      createRecord(newRecord);
      closeOrder(orderKey);
    });
  });
};

export default closeOrderConfirm;

import { getSingleOrder, updateOrder } from '../data/order-data';
import { getOrderItems } from '../data/item-data';
import { createRecord } from '../data/sales-data';
import showOrders from '../../components/orders';

const closeOrder = (orderKey, uid, isAdmin) => {
  const orderPatch = {
    firebaseKey: orderKey,
    isOpen: false
  };
  updateOrder(orderPatch, uid, isAdmin).then(showOrders);
};

const closeOrderConfirm = (orderKey, uid, isAdmin) => {
  getSingleOrder(orderKey).then((order) => {
    getOrderItems(orderKey).then((items) => {
      let orderTotal = 0;
      items.forEach((item) => {
        orderTotal += item.price;
      });
      const tip = document.querySelector('#tipAmount').valueAsNumber;
      const paymentType = document.querySelector('#paymentType').value;

      const newRecord = {
        date: order.date,
        orderTotal,
        tip,
        paymentType,
        orderType: order.orderType
      };
      createRecord(newRecord).then(() => closeOrder(orderKey, uid, isAdmin));
    });
  });
};

export default closeOrderConfirm;

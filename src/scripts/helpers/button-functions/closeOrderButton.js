import { getSingleOrder, updateOrder } from '../data/order-data';
import { getOrderItems } from '../data/item-data';
import { createRecord } from '../data/sales-data';
import showOrders from '../../components/orders';

const closeOrder = (orderKey, uid, isAdmin) => {
  const orderPatch = {
    firebaseKey: orderKey,
    isOpen: 'closed'
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
        date: new Date(order.date).toLocaleDateString('en-US'),
        orderTotal,
        tip,
        paymentType,
        orderType: order.orderType,
        uid
      };
      createRecord(newRecord, uid, isAdmin).then(() => closeOrder(orderKey, uid, isAdmin));
    });
  });
};

export default closeOrderConfirm;

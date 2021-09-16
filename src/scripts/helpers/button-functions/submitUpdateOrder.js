import showOrders from '../../components/orders';
import { updateOrder } from '../data/order-data';

const submitUpdateOrder = (orderKey) => {
  const orderObj = {
    name: document.querySelector('#customerName').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    orderType: document.querySelector('#orderType').value,
    firebaseKey: orderKey
  };
  updateOrder(orderObj).then(showOrders);
};

export default submitUpdateOrder;

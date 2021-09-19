import showOrders from '../../components/orders';
import { createOrder } from '../data/order-data';

const submitNewOrder = () => {
  const newOrder = {
    name: document.querySelector('#customerName').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    orderType: document.querySelector('#orderType').value,
    date: new Date().toUTCString(),
    isOpen: true
  };
  createOrder(newOrder).then(showOrders);
};

export default submitNewOrder;

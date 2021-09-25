import showOrders from '../../components/orders';
import { createOrder } from '../data/order-data';

const submitNewOrder = (uid, isAdmin) => {
  const newOrder = {
    name: document.querySelector('#customerName').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    orderType: isAdmin ? document.querySelector('#orderType').value : 'online',
    date: new Date().toUTCString(),
    isOpen: 'open',
    uid
  };
  createOrder(newOrder, uid, isAdmin).then(showOrders);
};

export default submitNewOrder;

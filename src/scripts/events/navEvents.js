import addOrderForm from '../components/addOrderForm';
import landingPage from '../components/landingPage';
import showOrders from '../components/orders';
import { getOrders } from '../helpers/data/order-data';

const navEvents = () => {
  document.querySelector('#createOrder').addEventListener('click', addOrderForm);

  document.querySelector('#home').addEventListener('click', landingPage);

  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
};

export default navEvents;

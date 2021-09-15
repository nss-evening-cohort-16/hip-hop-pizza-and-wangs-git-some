import addOrderForm from '../components/addOrderForm';
// import showOrders from '../components/orders';

const navEvents = () => {
  document.querySelector('#createOrder').addEventListener('click', addOrderForm);

//   document.querySelector('#viewOrders').addEventListener('click', () => {
//     getOrders.then(showOrders);
//   });
};

export default navEvents;

// TODO: update after getOrders API call is created

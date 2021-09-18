import addOrderForm from '../components/addOrderForm';
import landingPage from '../components/landingPage';
import showOrders from '../components/orders';
import { getOrders, searchOrders } from '../helpers/data/order-data';
import { getAllShows } from '../helpers/data/upcoming-show-data';
import showUpcomingShows from '../components/showUpcomingShows';

const navEvents = (user) => {
  document.querySelector('#createOrder').addEventListener('click', addOrderForm);

  document.querySelector('#home').addEventListener('click', () => landingPage(user));

  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });

  document.querySelector('#viewShows').addEventListener('click', () => {
    getAllShows().then(showUpcomingShows);
  });

  document.querySelector('#searchBar').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = (document.querySelector('#searchInput').value).toLowerCase();
    searchOrders(searchValue).then(showOrders);
    document.querySelector('#searchBar').reset();
  });
};

export default navEvents;

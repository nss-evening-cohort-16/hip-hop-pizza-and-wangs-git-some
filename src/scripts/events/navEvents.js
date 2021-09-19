import addOrderForm from '../components/addOrderForm';
import landingPage from '../components/landingPage';
import showOrders from '../components/orders';
import { getAllShows } from '../helpers/data/upcoming-show-data';
import showUpcomingShows from '../components/showUpcomingShows';
import newShowForm from '../components/newShowForm';
import { getFilteredOrders, searchOrders } from '../helpers/data/order-data';

const navEvents = (user) => {
  document.querySelector('#createOrder').addEventListener('click', addOrderForm);

  document.querySelector('#home').addEventListener('click', () => landingPage(user));

  document.querySelector('#viewOrders').addEventListener('click', () => {
    const selectedFilter = document.querySelector('#orderStatusFilter').value;
    getFilteredOrders(selectedFilter).then(showOrders);
  });

  document.querySelector('#viewShows').addEventListener('click', () => {
    getAllShows().then(showUpcomingShows);
  });

  document.querySelector('#createNewShow').addEventListener('click', () => {
    newShowForm();
  });

  document.querySelector('#searchBar').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = (document.querySelector('#searchInput').value).toLowerCase();
    searchOrders(searchValue).then(showOrders);
    document.querySelector('#searchBar').reset();
  });

  document.querySelector('#dropdownContainer').addEventListener('change', () => {
    const selectedFilter = document.querySelector('#orderStatusFilter').value;
    getFilteredOrders(selectedFilter).then(showOrders);
  });
};

export default navEvents;

import addOrderForm from '../components/addOrderForm';
import landingPage from '../components/landingPage';
import showOrders from '../components/orders';
import { getAllShows } from '../helpers/data/upcoming-show-data';
import showUpcomingShows from '../components/showUpcomingShows';
import newShowForm from '../components/newShowForm';
import { getFilteredOrders, searchOrders } from '../helpers/data/order-data';
import { getAllItems } from '../helpers/data/item-data';
import showMenu from '../components/showMenuItems';

const navEvents = (user, isAdmin) => {
  document.querySelector('#createOrder').addEventListener('click', addOrderForm);

  document.querySelector('#home').addEventListener('click', () => landingPage(user));

  document.querySelector('#viewOrders').addEventListener('click', () => {
    getFilteredOrders(user.uid, isAdmin).then(showOrders);
  });

  document.querySelector('#viewMenu').addEventListener('click', () => {
    getAllItems().then(showMenu);
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
    searchOrders(searchValue, user.uid, isAdmin).then(showOrders);
    document.querySelector('#searchBar').reset();
  });

  document.querySelector('#dropdownContainer').addEventListener('change', () => {
    getFilteredOrders(user.uid, isAdmin).then(showOrders);
  });
};

export default navEvents;

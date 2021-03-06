import addOrderForm from '../components/addOrderForm';
import landingPage from '../components/landingPage';
import showOrders from '../components/orders';
import { getAllShows } from '../helpers/data/upcoming-show-data';
import showUpcomingShows from '../components/showUpcomingShows';
import { getFilteredOrders, getOrders, searchOrders } from '../helpers/data/order-data';
import showMenu from '../components/showMenuItems';
import { getAllMenuItems } from '../helpers/data/menu-item-data';

const navEvents = (user, isAdmin) => {
  document.querySelector('#createOrder').addEventListener('click', async () => {
    if (isAdmin !== true) {
      const userOrders = await getOrders(user.uid, isAdmin);
      const openUserOrders = userOrders.filter((order) => order.isOpen === 'open');
      // eslint-disable-next-line no-alert
      if (openUserOrders.length > 0) window.alert('Please finish your current order.');
      else addOrderForm(isAdmin);
    } else addOrderForm(isAdmin);
  });

  document.querySelector('#home').addEventListener('click', () => landingPage(user));

  document.querySelector('#viewOrders').addEventListener('click', () => {
    getFilteredOrders(user.uid, isAdmin).then(showOrders);
  });

  document.querySelector('#viewMenu').addEventListener('click', () => {
    getAllMenuItems().then((menuArr) => showMenu(menuArr, isAdmin));
  });

  document.querySelector('#viewShows').addEventListener('click', () => {
    getAllShows().then((showArr) => showUpcomingShows(showArr, isAdmin));
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

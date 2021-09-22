import addOrderForm from '../components/addOrderForm';
import closeOrderPage from '../components/closeOrderPage';
import newItemForm from '../components/newItemForm';
import showOrderDetails from '../components/orderDetails';
import showOrders from '../components/orders';
import addNewItem from '../helpers/button-functions/addNewItem';
import closeOrderConfirm from '../helpers/button-functions/closeOrderButton';
import submitNewOrder from '../helpers/button-functions/submitNewOrder';
import updateItemConfirm from '../helpers/button-functions/updateItem';
import { deleteItem, getItem } from '../helpers/data/item-data';
import {
  getSingleOrder,
  deleteOrderWithItems,
  getFilteredOrders,
} from '../helpers/data/order-data';
import { showRevenue } from '../components/revenue';
import submitUpdateOrder from '../helpers/button-functions/submitUpdateOrder';
import filterRevenue from '../helpers/button-functions/filterRevenue';
import submitNewShow from '../helpers/button-functions/submitNewShow';
import submitUpdateShow from '../helpers/button-functions/submitUpdateShow';
import newShowForm from '../components/newShowForm';
import { deleteShow, getOneShow } from '../helpers/data/upcoming-show-data';
import showUpcomingShows from '../components/showUpcomingShows';
import addToCart from '../helpers/button-functions/addToCart';
import showMenu from '../components/showMenuItems';
import { deleteMenuItem, getAllMenuItems, getSingleMenuItem } from '../helpers/data/menu-item-data';
import newMenuItemForm from '../components/newMenuItemForm';
import submitUpdateMenuItem from '../helpers/button-functions/submitUpdateMenuItem';

const clickListener = (uid, isAdmin) => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    const [targetID, targetKey] = e.target.id.split('--');
    console.warn(`ID: ${targetID}, Key: ${targetKey}`);

    switch (targetID) {
      // View Orders Page
      case 'order-detail-btn':
        showOrderDetails(targetKey, isAdmin);
        break;

      case 'order-edit-btn':
        getSingleOrder(targetKey).then(addOrderForm);
        break;

      case 'order-delete-btn':
        // eslint-disable-next-line no-alert
        if (window.confirm('Are you sure you want to delete this order?')) {
          deleteOrderWithItems(targetKey, uid, isAdmin);
        }
        break;

      // Order Details Page
      case 'add-item':
        getAllMenuItems().then((menuArr) => showMenu(menuArr, isAdmin));
        break;

      case 'payment':
        closeOrderPage(targetKey);
        break;

      case 'item-edit-btn':
        getItem(targetKey).then((item) => newItemForm(item));
        break;

      case 'item-delete-btn':
        deleteItem(targetKey).then(showOrderDetails);
        break;

      case 'landingViewMenu':
        getAllMenuItems().then((menuArr) => showMenu(menuArr, isAdmin));
        break;

      case 'landingViewOrders':
        getFilteredOrders(uid, isAdmin).then(showOrders);
        break;

      case 'landingCreateOrder':
        addOrderForm();
        break;

      case 'landingRevenue':
        showRevenue();
        break;

        // ADMIN DELETE MENU ITEM FROM MENU
      case 'menu-item-delete-btn':
        deleteMenuItem(targetKey).then(showMenu);
        break;

        // ADMIN EDIT MENU ITEM
      case 'menu-item-edit-btn':
        getSingleMenuItem(targetKey).then((item) => newMenuItemForm(item));
        break;

      case 'show-edit-btn':
        getOneShow(targetKey).then((show) => newShowForm(show));
        break;

      case 'show-delete-btn':
        deleteShow(targetKey).then(showUpcomingShows);
        break;

      case 'menu-item-add-btn':
        addToCart(targetKey, uid, isAdmin);
        break;

      case 'addNewMenuItem':
        newMenuItemForm();
        break;

      default: break;
    }
  });
};

const submitListener = (uid, isAdmin) => {
  document.querySelector('#mainContainer').addEventListener('submit', (e) => {
    const [targetID, targetKey] = e.target.id.split('--');

    console.warn(`ID: ${targetID}, Key: ${targetKey}`);

    switch (targetID) {
      // Add Item Form
      case 'submitItem':
        addNewItem(targetKey);
        break;

      case 'updateItem':
        updateItemConfirm(targetKey);
        break;

      // Close Order Page
      case 'closeOrderForm':
        e.preventDefault();
        closeOrderConfirm(targetKey, uid, isAdmin);
        break;

        // CREATE ORDER
      case 'submitOrder':
        e.preventDefault();
        submitNewOrder(uid, isAdmin);
        break;

      case 'updateOrder':
        e.preventDefault();
        submitUpdateOrder(targetKey, uid, isAdmin);
        break;

      // Revenue page
      case 'revenueDateSelect':
        e.preventDefault();
        filterRevenue();
        break;

      case 'submitShow':
        e.preventDefault();
        submitNewShow();
        break;

      case 'updateShow':
        e.preventDefault();
        submitUpdateShow(targetKey);
        break;

        // ADMIN EDIT MENU ITEM
      case 'updateMenuItem':
        e.preventDefault();
        submitUpdateMenuItem(targetKey, isAdmin);
        break;

      case 'submitMenuItem':
        e.preventDefault();
        submitUpdateMenuItem(null, isAdmin);
        break;

      default: break;
    }
  });
};

export { clickListener, submitListener };

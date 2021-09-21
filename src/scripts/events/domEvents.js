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
import { getAllMenuItems } from '../helpers/data/menu-item-data';

const clickListener = (uid, isAdmin) => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    const [targetID, targetKey] = e.target.id.split('--');
    console.warn(`ID: ${targetID}, Key: ${targetKey}`);

    switch (targetID) {
      // View Orders Page
      case 'order-detail-btn':
        showOrderDetails(targetKey);
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
        newItemForm(targetKey);
        break;

      case 'payment':
        closeOrderPage(targetKey);
        break;

      case 'item-edit-btn':
        getItem(targetKey).then((item) => newItemForm(item.orderKey, item));
        break;

      case 'item-delete-btn':
        deleteItem(targetKey).then(showOrderDetails);
        break;

      case 'landingViewMenu':
        getAllMenuItems().then(showMenu);
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

      case 'show-edit-btn':
        getOneShow(targetKey).then((show) => newShowForm(show));
        break;

      case 'show-delete-btn':
        deleteShow(targetKey).then(showUpcomingShows);
        break;

      case 'addToCart':
        addToCart(targetKey);
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

      default: break;
    }
  });
};

export { clickListener, submitListener };

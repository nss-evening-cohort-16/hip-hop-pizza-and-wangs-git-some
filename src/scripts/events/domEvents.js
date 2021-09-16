import addOrderForm from '../components/addOrderForm';
import closeOrderPage from '../components/closeOrderPage';
import newItemForm from '../components/newItemForm';
import showOrderDetails from '../components/orderDetails';
import showOrders from '../components/orders';
import addNewItem from '../helpers/button-functions/addNewItem';
import closeOrderConfirm from '../helpers/button-functions/closeOrderButton';
import updateItemConfirm from '../helpers/button-functions/updateItem';
import { deleteItem, getItem } from '../helpers/data/item-data';
import { getSingleOrder, getOrders, deleteOrderWithItems } from '../helpers/data/order-data';

const clickListener = () => {
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
          deleteOrderWithItems(targetKey);
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

      // Add Item Form
      case 'submitItem':
        addNewItem(targetKey);
        break;

      case 'updateItem':
        updateItemConfirm(targetKey);
        break;

      // Close Order Page
      case 'close-order-btn':
        e.preventDefault();
        closeOrderConfirm(targetKey);
        break;

      case 'landingViewOrders':
        getOrders().then(showOrders);
        break;

      case 'landingCreateOrder':
        addOrderForm();
        break;

      case 'landingRevenue':
        break;

      default: break;
    }
  });
};

export default clickListener;

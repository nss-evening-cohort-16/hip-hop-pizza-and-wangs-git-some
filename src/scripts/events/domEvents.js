import addOrderForm from '../components/addOrderForm';
import closeOrderPage from '../components/closeOrderPage';
import newItemForm from '../components/newItemForm';
import showOrderDetails from '../components/orderDetails';
import showOrders from '../components/orders';
import closeOrderConfirm from '../helpers/closeOrderButton';
import { deleteOrder, getSingleOrder } from '../helpers/data/order-data';

const clickListener = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
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
          deleteOrder(targetKey).then(showOrders);
        }
        break;

      // Order Details Page
      case 'add-item':
        newItemForm(targetKey);
        break;

      case 'payment':
        closeOrderPage(targetKey);
        break;

      // Close Order Page
      case 'close-order-btn':
        e.preventDefault();
        closeOrderConfirm(targetKey);
        break;

      default: break;
    }
  });
};

export default clickListener;

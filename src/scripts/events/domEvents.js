import addOrderForm from '../components/addOrderForm';
import closeOrderPage from '../components/closeOrderPage';
import newItemForm from '../components/newItemForm';
import showOrderDetails from '../components/orderDetails';
import closeOrderConfirm from '../helpers/closeOrderButton';
import { getSingleOrder } from '../helpers/data/order-data';

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

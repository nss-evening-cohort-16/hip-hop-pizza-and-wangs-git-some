import { getOrders } from '../data/order-data';
import { addItemFromMenu } from '../data/item-data';

const addToCart = async (itemKey, uid, isAdmin) => {
  if (isAdmin) {
    const orderId = document.querySelector('#menuOrderFilter').value;
    // eslint-disable-next-line no-alert
    if (orderId) addItemFromMenu(itemKey, orderId); else window.alert('Please select an order to add item to');
  } else {
    const orderId = ((await getOrders(uid, isAdmin))[0]).firebaseKey;
    // eslint-disable-next-line no-alert
    if (orderId === undefined) { window.alert('Please create an order.'); }
    addItemFromMenu(itemKey, orderId);
  }
};

export default addToCart;

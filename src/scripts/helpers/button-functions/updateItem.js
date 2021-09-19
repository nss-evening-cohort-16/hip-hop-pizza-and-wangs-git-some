import showOrderDetails from '../../components/orderDetails';
import { getItem, updateItem } from '../data/item-data';

const updateItemConfirm = (itemKey) => {
  const name = document.querySelector('#itemName').value;
  const price = document.querySelector('#itemPrice').valueAsNumber;

  const newItemObj = {
    name,
    price
  };

  getItem(itemKey).then((item) => {
    updateItem(itemKey, newItemObj).then(() => {
      showOrderDetails(item.orderKey);
    });
  });
};

export default updateItemConfirm;

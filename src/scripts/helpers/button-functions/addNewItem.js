import showOrderDetails from '../../components/orderDetails';
import { createItem } from '../data/item-data';

const addNewItem = (orderKey) => {
  const name = document.querySelector('#itemName').value;
  const price = document.querySelector('#itemPrice').valueAsNumber;

  const newItemObj = {
    name,
    price,
    orderKey
  };

  createItem(newItemObj).then(() => {
    showOrderDetails(orderKey);
  });
};

export default addNewItem;

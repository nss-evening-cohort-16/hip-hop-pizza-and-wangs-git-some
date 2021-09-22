import { updateMenuItem } from '../data/menu-item-data';
import showMenu from '../../components/showMenuItems';

const submitUpdateMenuItem = (itemKey) => {
  const itemObj = {
    title: document.querySelector('#menuTitle').value,
    image: document.querySelector('#menuImage').value,
    price: document.querySelector('#menuPrice').value,
    description: document.querySelector('#menuDesc').value,
    firebaseKey: itemKey
  };
  updateMenuItem(itemObj).then(showMenu);
};

export default submitUpdateMenuItem;

import { updateMenuItem, createMenuItem } from '../data/menu-item-data';
import showMenu from '../../components/showMenuItems';

const submitUpdateMenuItem = (itemKey, isAdmin) => {
  const itemObj = {
    title: document.querySelector('#menuTitle').value,
    image: document.querySelector('#menuImage').value,
    price: document.querySelector('#menuPrice').value,
    description: document.querySelector('#menuDesc').value,
    onSale: document.querySelector('#menuOnSale').checked,
    firebaseKey: itemKey
  };
  if (itemKey) updateMenuItem(itemObj).then((menuArr) => showMenu(menuArr, isAdmin)); else createMenuItem(itemObj).then((menuArr) => showMenu(menuArr, isAdmin));
};

export default submitUpdateMenuItem;

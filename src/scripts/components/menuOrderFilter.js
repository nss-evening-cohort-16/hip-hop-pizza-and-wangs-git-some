import { getOrders } from '../helpers/data/order-data';

const menuOrderFilter = async (isAdmin) => {
  if (isAdmin === true) {
    const orders = await getOrders('', isAdmin);
    const openOrders = orders.filter((order) => order.isOpen === 'open');
    let domString = `<select class="form-select" aria-label="Menu Order Filter" id="menuOrderFilter">
  <option selected value="">Please select order to add item to</option>`;

    openOrders.forEach((order) => {
      domString
    += `<option value="${order.firebaseKey}">${order.name}</option>`;
    });
    domString += '</select><button type="button" class="btn btn-success" id="addNewMenuItem">Add new menu item</button>';

    document.querySelector('#menuFilterContainer').innerHTML = domString;
  }
};

export default menuOrderFilter;

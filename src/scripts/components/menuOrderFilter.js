import { getOrders } from '../helpers/data/order-data';

const menuOrderFilter = async (isAdmin) => {
  if (isAdmin === true) {
    const orders = await getOrders('', isAdmin);
    const openOrders = orders.filter((order) => order.isOpen === 'open');
    let domString = `<select class="form-select" aria-label="Menu Order Filter" id="menuOrderFilter">
  <option selected>Open this select menu</option>`;

    openOrders.forEach((order) => {
      domString
    += `<option value="${order.firebaseKey}">${order.name}</option>`;
    });
    domString += '</select>';

    document.querySelector('#menuFilterContainer').innerHTML = domString;
  }
};

export default menuOrderFilter;

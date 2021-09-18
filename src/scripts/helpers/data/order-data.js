import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import showOrders from '../../components/orders';
import { deleteItem, getOrderItems } from './item-data';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL ORDERS
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE ORDER
const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, patchPayload)
        .then(() => {
          getOrders().then(resolve);
        });
    }).catch(reject);
});

// GET A SINGLE ORDER
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE ORDER
const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then(resolve);
    })
    .catch(reject);
});

// DELETE ORDER AND ALL ITS ITEMS
const deleteOrderWithItems = async (firebaseKey) => {
  const orderItems = await getOrderItems(firebaseKey);
  const deleteItemPromises = [];
  orderItems.forEach((item) => {
    deleteItemPromises.push(deleteItem(item.firebaseKey));
  });
  Promise.all(deleteItemPromises).then(() => {
    deleteOrder(firebaseKey).then(showOrders);
  });
};

// UPDATE ORDER
const updateOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders().then(resolve))
    .catch(reject);
});

// GET OPEN ORDERS
const getFilteredOrders = async (selectedFilter) => {
  const orders = await getOrders();
  if (selectedFilter === 'open') return orders.filter((order) => order.isOpen);
  if (selectedFilter === 'closed') return orders.filter((order) => order.isOpen === false);
  return orders;
};

// SEARCH ORDERS BY NAME
const searchOrders = async (searchValue) => {
  const orders = await getOrders();
  const searchedOrders = (orders).filter((order) => ((order.name).toLowerCase().includes(searchValue)) || ((order.phone).toLowerCase().includes(searchValue)));
  return searchedOrders;
};

export {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  deleteOrderWithItems,
  getSingleOrder,
  getFilteredOrders,
  searchOrders,
};

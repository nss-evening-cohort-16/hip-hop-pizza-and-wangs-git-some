import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import showOrders from '../../components/orders';
import { deleteItem, getOrderItems } from './item-data';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL ORDERS
const getOrders = (uid, isAdmin) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/${isAdmin ? 'orders.json' : `orders.json?orderBy="uid"&equalTo="${uid}"`}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET OPEN ORDERS
const getFilteredOrders = async (uid, isAdmin) => {
  const selectedFilter = document.querySelector('#orderStatusFilter').value;
  const orders = await getOrders(uid, isAdmin);
  if (selectedFilter === 'open') return orders.filter((order) => order.isOpen === 'open');
  if (selectedFilter === 'closed') return orders.filter((order) => order.isOpen === 'closed');
  return orders;
};

// CREATE ORDER
const createOrder = (orderObj, uid, isAdmin) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, patchPayload)
        .then(() => {
          getFilteredOrders(uid, isAdmin).then(resolve);
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
const deleteOrder = (firebaseKey, uid, isAdmin) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getFilteredOrders(uid, isAdmin).then(resolve);
    })
    .catch(reject);
});

// DELETE ORDER AND ALL ITS ITEMS
const deleteOrderWithItems = async (firebaseKey, uid, isAdmin) => {
  const orderItems = await getOrderItems(firebaseKey);
  const deleteItemPromises = [];
  orderItems.forEach((item) => {
    deleteItemPromises.push(deleteItem(item.firebaseKey));
  });
  Promise.all(deleteItemPromises).then(() => {
    deleteOrder(firebaseKey, uid, isAdmin).then(showOrders);
  });
};

// UPDATE ORDER
const updateOrder = (orderObj, uid, isAdmin) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getFilteredOrders(uid, isAdmin).then(resolve))
    .catch(reject);
});

// SEARCH ORDERS BY NAME
const searchOrders = async (searchValue, uid, isAdmin) => {
  const orders = await getOrders(uid, isAdmin);
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
  searchOrders
};

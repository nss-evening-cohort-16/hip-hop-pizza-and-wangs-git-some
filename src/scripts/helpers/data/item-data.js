import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { getSingleMenuItem } from './menu-item-data';

const dbURL = firebaseConfig.databaseURL;

// Get all items
const getAllItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single item
const getItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Get all items on specified Order
const getOrderItems = (orderKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json?orderBy="orderKey"&equalTo="${orderKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Create item
const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orderItems.json`, itemObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/items/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllItems().then(resolve);
        });
    }).catch(reject);
});

// Delete item
const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  getItem(firebaseKey).then((item) => {
    axios.delete(`${dbURL}/orderItems/${firebaseKey}.json`)
      .then(() => {
        resolve(item.orderKey);
      }).catch(reject);
  });
});

// Update item
const updateItem = (firebaseKey, payload) => new Promise((resolve, reject) => {
  getItem(firebaseKey).then((item) => {
    axios.patch(`${dbURL}/orderItems/${firebaseKey}.json`, payload)
      .then(() => {
        resolve(item.orderKey);
      }).catch(reject);
  });
});

const createOrderItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orderItems.json`, itemObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/orderItems/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllItems().then(resolve);
        });
    }).catch(reject);
});

const addItemFromMenu = async (itemKey, orderKey) => {
  const itemToAdd = await getSingleMenuItem(itemKey);
  const item = {
    title: itemToAdd.title,
    price: itemToAdd.price,
    image: itemToAdd.image,
    onSale: itemToAdd.onSale,
    description: itemToAdd.description,
    orderKey
  };
  createOrderItem(item);
};

export {
  getAllItems,
  getItem,
  getOrderItems,
  createItem,
  deleteItem,
  updateItem,
  addItemFromMenu,
};

import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get all items
const getAllItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single item
const getItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Get all items on specified Order
const getOrderItems = (orderKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items.json?orderBy="orderKey"&equalTo="${orderKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Create item
const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/items.json`, itemObj)
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
  axios.delete(`${dbURL}/items/${firebaseKey}.json`)
    .then(() => {
      getAllItems().then(resolve);
    }).catch(reject);
});

// Update item
const updateItem = (firebaseKey, payload) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/items/${firebaseKey}.json`, payload)
    .then(() => getAllItems().then(resolve))
    .catch(reject);
});

export {
  getAllItems,
  getItem,
  getOrderItems,
  createItem,
  deleteItem,
  updateItem
};

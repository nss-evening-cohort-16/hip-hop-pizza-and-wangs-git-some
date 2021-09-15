import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL ORDERS
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json"`)
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

// UPDATE ORDER
const updateOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders().then(resolve))
    .catch(reject);
});

// GET OPEN ORDERS
const getOpenOrders = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const openOrders = ordersArray.filter((order) => order.isOpen);
      resolve(openOrders);
    }).catch(reject);
});

// SEARCH ORDERS BY NAME
const searchOrdersByName = (searchValue) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/.json?orderBy="name"&equalTo="${searchValue}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// SEARCH ORDERS BY PHONE NUMBER
const searchOrdersByPhone = (searchValue) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/.json?orderBy="phone"&equalTo="${searchValue}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  getOpenOrders,
  searchOrdersByName,
  searchOrdersByPhone
};

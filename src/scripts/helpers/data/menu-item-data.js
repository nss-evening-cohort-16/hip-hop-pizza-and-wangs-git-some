import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL MENU ITEMS
const getAllMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET A SINGLE MENU ITEM
const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE A MENU ITEM - ADMIN
const createMenuItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllMenuItems().then(resolve);
        });
    }).catch(reject);
});

// DELETE A MENU ITEM - ADMIN
const deleteMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getAllMenuItems().then(resolve);
    }).catch(reject);
});

// UPDATE A MENU ITEM - ADMIN
const updateMenuItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getAllMenuItems().then(resolve))
    .catch(reject);
});

export {
  updateMenuItem,
  deleteMenuItem,
  createMenuItem,
  getAllMenuItems,
  getSingleMenuItem
};

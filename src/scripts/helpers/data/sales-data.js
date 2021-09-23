import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get all Records
const getAllSalesRecords = (uid, isAdmin) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/${isAdmin ? 'records.json' : `records.json?orderBy="uid"&equalTo="${uid}"`}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single Record
const getSalesRecord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/records/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Create Record
const createRecord = (recordObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/records.json`, recordObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/records/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllSalesRecords().then(resolve);
        });
    }).catch(reject);
});

// Delete Record
const deleteRecord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/records/${firebaseKey}.json`)
    .then(() => {
      getAllSalesRecords().then(resolve);
    }).catch(reject);
});

// Update Record
const updateRecord = (firebaseKey, payload) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/records/${firebaseKey}.json`, payload)
    .then(() => getAllSalesRecords().then(resolve))
    .catch(reject);
});

export {
  getAllSalesRecords,
  getSalesRecord,
  createRecord,
  deleteRecord,
  updateRecord
};

import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get all Records
const getAllSalesRecords = (uid, isAdmin) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/${isAdmin ? 'records.json' : `records.json?orderBy="uid"&equalTo="${uid}"`}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Create Record
const createRecord = (recordObj, uid, isAdmin) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/records.json`, recordObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/records/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllSalesRecords(uid, isAdmin).then(resolve);
        });
    }).catch(reject);
});

export {
  getAllSalesRecords,
  createRecord
};

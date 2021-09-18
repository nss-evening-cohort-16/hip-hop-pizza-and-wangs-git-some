import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL UPCOMING SHOWS
const getAllShows = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/upcoming-shows.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET A SINGLE SHOW
const getOneShow = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/upcoming-shows/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE A SHOW
const createShow = (showObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/upcoming-shows.json`, showObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/upcoming-shows/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllShows().then(resolve);
        });
    }).catch(reject);
});

// DELETE SHOW
const deleteShow = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/upcoming-shows/${firebaseKey}.json`)
    .then(() => {
      getAllShows().then(resolve);
    })
    .catch(reject);
});

export {
  getAllShows,
  createShow,
  getOneShow,
  deleteShow
};

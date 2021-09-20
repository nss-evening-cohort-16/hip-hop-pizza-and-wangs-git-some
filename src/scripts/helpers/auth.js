import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';
import loginPage from '../components/loginPage';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // person is logged in do something...
      const isAdmin = await user.getIdTokenResult().then((idTokenResult) => idTokenResult.claims);
      startApp(user, isAdmin);
    } else {
      // person is NOT logged in
      loginPage();
    }
  });
};

export default checkLoginStatus;

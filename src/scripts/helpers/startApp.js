import buildDom from '../components/buildDom';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/navbar';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  buildDom();
  renderNavbar();
  logoutButton(user.displayName);
  navEvents();
};

export default startApp;

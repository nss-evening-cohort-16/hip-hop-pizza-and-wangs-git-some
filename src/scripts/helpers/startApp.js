import buildDom from '../components/buildDom';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/navbar';
import clickListener from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  buildDom();
  renderNavbar();
  logoutButton(user.displayName);
  navEvents();
  clickListener();
};

export default startApp;

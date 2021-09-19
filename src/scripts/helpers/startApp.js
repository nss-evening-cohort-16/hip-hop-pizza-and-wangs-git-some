import buildDom from '../components/buildDom';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/navbar';
import { clickListener, submitListener } from '../events/domEvents';
import navEvents from '../events/navEvents';
import landingPage from '../components/landingPage';

const startApp = (user) => {
  buildDom();
  renderNavbar();
  logoutButton(user);
  navEvents(user);
  clickListener();
  submitListener();
  landingPage(user);
};

export default startApp;

import clearDom from '../helpers/clearDom';

const landingPage = (user) => {
  clearDom();
  document.querySelector('#landingContainer').innerHTML = `
    <h2>Welcome, ${user.displayName}!</h2>
    <button type="button" class="btn btn-primary" id="landingViewOrders">View Orders</button>
    <button type="button" class="btn btn-success" id="landingCreateOrder">Create Order</button>
    <button type="button" class="btn btn-warning" id="landingRevenue">View Revenue</button>`;
};

export default landingPage;

import clearDom from '../helpers/clearDom';

const landingPage = (user) => {
  clearDom();
  document.querySelector('#landingContainer').innerHTML = `
    <div class="landingBtnContainer">
      <h2>Welcome, ${user.displayName}!</h2>
      <button type="button" class="btn btn-info" id="landingViewOrders">View Orders</button>
      <button type="button" class="btn btn-info" id="landingViewMenu">View Menu</button>
      <button type="button" class="btn btn-primary" id="landingCreateOrder">Create Order</button>
      <button type="button" class="btn btn-success" id="landingRevenue">View Revenue</button>
    </div>`;
};

export default landingPage;

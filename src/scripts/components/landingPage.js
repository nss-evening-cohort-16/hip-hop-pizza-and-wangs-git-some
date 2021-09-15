import clearDom from '../helpers/clearDom';

const landingPage = () => {
  clearDom();
  document.querySelector('#landingContainer').innerHTML = `
    <button type="button" class="btn btn-primary">View Orders</button>
    <button type="button" class="btn btn-success">Create Order</button>
    <button type="button" class="btn btn-warning">View Revenue</button>`;
};

export default landingPage;

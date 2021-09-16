import clearDom from '../helpers/clearDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `<form id="${obj.firebaseKey ? `updateOrder--${obj.firebaseKey}` : `submitOrder--${obj.firebaseKey}`}">
    <div class="mb-3">
      <label for="customerName" class="form-label">Order Name<span class="requiredItem">*</span></label>
      <input type="text" required class="form-control" id="customerName" aria-describedby="Order Name" value="${obj.name || ''}" placeholder="Enter term name">
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Customer Phone<span class="requiredItem">*</span></label>
      <input type="tel" required class="form-control" id="phone" aria-describedby="Phone" placeholder="Phone Number" value="${obj.phone || ''}">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Customer Email<span class="requiredItem">*</span></label>
      <input type="email" required class="form-control" id="email" aria-describedby="Email" placeholder="Email" value="${obj.email || ''}">
    </div>
    <label for="orderType" class="form-label">Order Type<span class="requiredItem">*</span></label>
    <select class="form-select" id="orderType" aria-label="Order Type" required>
        <option selected value=''>Please select order type</option>
        <option value="phone" ${obj.orderType === 'phone' ? 'selected' : ''}>Phone</option>
        <option value="email" ${obj.orderType === 'email' ? 'selected' : ''}>Email</option>
    </select>
    <button type="submit" class="btn btn-primary" id="orderFormBtn">${obj.firebaseKey ? 'Update Order' : 'Submit Order'}</button>
  </form>`;
};

export default addOrderForm;

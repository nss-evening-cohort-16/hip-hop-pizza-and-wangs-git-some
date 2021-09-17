import clearDom from '../helpers/clearDom';

const closeOrderPage = (orderKey) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
    <form id="closeOrderForm--${orderKey}">
      <div class="mb-3">
        <label for="tipAmount" class="form-label">Tip Amount<span class="requiredItem">*</span></label>
        <input type="number" required class="form-control" id="tipAmount" aria-describedby="Tip" placeholder="Tip">
      </div>
      <label for="paymentType" class="form-label">Payment Type<span class="requiredItem">*</span></label>
      <select class="form-select" id="paymentType" aria-label="Payment Type" required>
        <option selected value=''>Please select payment type</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
      </select>
      <button id="close-order-btn--${orderKey}" class="btn btn-danger">Close Order</button>
    </form>`;
};

export default closeOrderPage;

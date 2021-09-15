import clearDom from '../helpers/clearDom';

const closeOrderPage = (order) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `<form id="closeOrderForm--${order.firebaseKey}">
  <div class="mb-3">
    <label for="tipAmount" class="form-label">Tip Amount</label>
    <input type="tipAmount" required class="form-control" id="tipAmount" aria-describedby="Tip" placeholder="Tip">
  </div>
  <label for="paymentType" class="form-label">Payment Type<span class="requiredItem">*</span></label>
    <select class="form-select" id="paymentType" aria-label="Payment Type">
        <option selected>Please select payment type</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
    </select>
    </form>`;
};

export default closeOrderPage();

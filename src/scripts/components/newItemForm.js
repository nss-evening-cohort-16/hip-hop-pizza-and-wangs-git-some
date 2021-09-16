import clearDom from '../helpers/clearDom';

const newItemForm = (orderId = '', item = {}) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
    <form id="${item.firebaseKey ? `updateItem--${item.firebaseKey}` : `submitItem--${orderId}`}">
      <div class="mb-3">
        <label for="itemName" class="form-label">Item Name<span class="requiredItem">*</span></label>
        <input type="text" required class="form-control" id="itemName" aria-describedby="itemName" value="${item.name || ''}" placeholder="Enter Item name" required>
      </div>
      <div class="mb-3">
        <label for="itemPrice" class="form-label">Item Price</label>
        <input type="number" required class="form-control" id="itemPrice" aria-describedby="Item Price" value="${item.price || ''}" placeholder="Enter price" required>
      </div>
      <button type="submit" class="btn btn-success" id="itemFormBtn">${item.firebaseKey ? 'Edit Item' : 'Submit Item'}</button>
    </form>`;
};

export default newItemForm;

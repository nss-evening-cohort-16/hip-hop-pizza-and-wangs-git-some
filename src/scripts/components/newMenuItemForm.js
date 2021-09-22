import clearDom from '../helpers/clearDom';

const newMenuItemForm = (obj = {}) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
  <form id="${obj.firebaseKey ? `updateMenuItem--${obj.firebaseKey}` : `submitMenuItem--${obj.firebaseKey}`}">
  <div class="mb-3">
    <label for="menuTitle" class="form-label">Menu Item:<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="menuTitle" aria-describedby="menuTitle" value="${obj.title || ''}" placeholder="Enter Menu Item Name" required>
  </div>
  <div class="mb-3">
    <label for="menuImage" class="form-label">Menu Image Link:<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="menuImage" aria-describedby="menuImage" value="${obj.image || ''}" placeholder="Enter Image Link" required>
  </div>
  <div class="mb-3">
    <label for="menuPrice" class="form-label">Price:<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="menuPrice" aria-describedby="menuPrice" value="${obj.price || ''}" placeholder="Enter Menu Item Price" required>
  </div>
  <div class="mb-3">
    <label for="menuDesc" class="form-label">Description:<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="menuDesc" aria-describedby="menuDesc" value="${obj.description || ''}" placeholder="Enter Item Description">
  </div>
  <button type="submit" class="btn btn-success" id="menuSubmitBtn">${obj.firebaseKey ? 'Edit Menu Item' : 'Submit Menu Item'}</button>
</form>
  `;
};

export default newMenuItemForm;

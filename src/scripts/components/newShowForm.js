import clearDom from '../helpers/clearDom';

const newShowForm = (obj = {}) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
  <form id="${obj.firebaseKey ? `updateShow--${obj.firebaseKey}` : `submitShow--${obj.firebaseKey}`}">
  <div class="mb-3">
    <label for="showName" class="form-label">Show Name<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="showName" aria-describedby="showName" value="${obj.name || ''}" placeholder="Enter Show Name" required>
  </div>
  <div class="mb-3">
    <label for="showGenre" class="form-label">Show Genre<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="showGenre" aria-describedby="showGenre" value="${obj.genre || ''}" placeholder="Enter Show Genre" required>
  </div>
  <div class="mb-3">
    <label for="showDate" class="form-label">Show Date<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="showDate" aria-describedby="showDate" value="${obj.showDate || ''}" placeholder="Enter Show Date" required>
  </div>
  <div class="mb-3">
    <label for="showType" class="form-label">Show Type</label>
    <input type="number" required class="form-control" id="showType" aria-describedby="showType" value="${obj.showType || ''}" placeholder="Enter Show Type" required>
  </div>
  <button type="submit" class="btn btn-success" id="showSubmitBtn">${obj.firebaseKey ? 'Edit Show' : 'Submit Show'}</button>
</form>
  `;
};

export default newShowForm;

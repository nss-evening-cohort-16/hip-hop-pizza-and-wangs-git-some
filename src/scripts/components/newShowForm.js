import clearDom from '../helpers/clearDom';
import selectShowType from './selectShowType';

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
    <label for="showImg" class="form-label">Show Picture<span class="requiredItem">*</span></label>
    <input type="text" required class="form-control" id="showImg" aria-describedby="showImg" value="${obj.img || ''}" placeholder="Enter Show Image Link" required>
  </div>
  <div class="mb-3">
    <label for="showDate" class="form-label">Show Date<span class="requiredItem">*</span></label>
    <input type="date" required class="form-control" id="showDate" aria-describedby="showDate" value="${obj.showDate || ''}" placeholder="Enter Show Date">
  </div>
  <div class="form-group" id="select-showType"></div>
  <button type="submit" class="btn btn-success" id="showSubmitBtn">${obj.firebaseKey ? 'Edit Show' : 'Submit Show'}</button>
</form>
  `;
  selectShowType(`${obj.showType || ''}`);
};

export default newShowForm;

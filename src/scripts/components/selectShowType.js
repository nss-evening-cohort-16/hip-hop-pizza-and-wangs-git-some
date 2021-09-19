import { getAllShows } from '../helpers/data/upcoming-show-data';

const selectShowType = () => {
  let domString = `<label for="showType">Select an Show Type</label>
  <select class="form-control" id="showType" required>
  <option value="">Select a Show Type</option>`;

  getAllShows().then((showArray) => {
    showArray.forEach((show) => {
      domString += `<option value="${show.showType}" ${show.showType ? 'selected' : ''}>${show.showType}</option>
      `;
    });
    domString += '</select>';

    document.querySelector('#select-showType').innerHTML = domString;
  });
};

export default selectShowType;

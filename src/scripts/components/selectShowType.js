// import { getAllShows } from '../helpers/data/upcoming-show-data';

const selectShowType = () => {
  const domString = `<label for="showType">Select an Show Type</label>
  <select class="form-control" id="showType" required>
    <option value="">Select a Show Type</option>;
    <option value="in-person">In person</option>;
    <option value="virtual">Virtual</option>
  </select>`;

  document.querySelector('#select-showType').innerHTML = domString;
};

export default selectShowType;

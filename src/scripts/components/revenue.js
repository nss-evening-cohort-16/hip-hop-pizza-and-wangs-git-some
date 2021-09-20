import clearDom from '../helpers/clearDom';
import { getAllSalesRecords } from '../helpers/data/sales-data';
import { getGrandTotal } from '../helpers/data/sales-records';

const showRevenue = async () => {
  clearDom();
  const salesRecords = await getAllSalesRecords();
  const grandTotal = getGrandTotal(salesRecords);
  const domString = `
    <div id="totalContainer"><h3>TOTAL REVENUE: $${grandTotal}</h3></div>
    <form id="revenueDateSelect">
      <p>Show revenue for selected dates</p>
      <label for="dateSelect1">Start Date:</label>
      <input type="date" id="dateSelect1" name="dateSelect1" required>
      <br><br>
      <label for="dateSelect2">End Date:</label>
      <input type="date" id="dateSelect2" name="dateSelect2" required>
      <br><br>
      <input type="submit" class="btn btn-primary" value="Submit">
      <div id="filteredRevenueContainer"></div>
    </form>
  `;

  document.querySelector('#revenueContainer').innerHTML = domString;
};

const showFilteredRevenue = (records) => {
  const filteredTotal = getGrandTotal(records);
  const domString = `<p id="filteredRevenueDisplay">Filtered Revenue: $${filteredTotal}</p>`;

  document.querySelector('#filteredRevenueContainer').innerHTML = domString;
};

export {
  showRevenue,
  showFilteredRevenue
};

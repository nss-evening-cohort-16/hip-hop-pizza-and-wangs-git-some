import clearDom from '../helpers/clearDom';
import { getAllSalesRecords } from '../helpers/data/sales-data';
import { getGrandTotal } from '../helpers/data/sales-records';

const showRevenue = async () => {
  clearDom();
  const salesRecords = await getAllSalesRecords();
  const grandTotal = getGrandTotal(salesRecords);
  console.log(grandTotal);
  const domString = `<div id="totalContainer"><h3>TOTAL REVENUE: $${grandTotal}</div>`;

  document.querySelector('#revenueContainer').innerHTML = domString;
};

export default showRevenue;

import { generateSalesGraph } from '../../components/revenue';
import { getRecordsByDateRange } from '../data/sales-records';

const getDatesArray = (start, end) => {
  const datesArray = [];
  for (let date = new Date(start); date <= new Date(end); date.setDate(date.getDate() + 1)) {
    datesArray.push(new Date(date).toLocaleDateString('en-US', { timeZone: 'Etc/GMT' }));
  }
  return datesArray;
};

const filterRevenue = () => {
  const date1 = document.querySelector('#dateSelect1').value;
  const date2 = document.querySelector('#dateSelect2').value;
  const dateRange = getDatesArray(date1, date2);

  getRecordsByDateRange(dateRange).then(generateSalesGraph);
};

export default filterRevenue;

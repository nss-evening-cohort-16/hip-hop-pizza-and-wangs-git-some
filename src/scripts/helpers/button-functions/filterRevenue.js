import { generateSalesGraph, getDatesArray, getRecordsByDateRange } from '../../components/revenue';

const filterRevenue = () => {
  const date1 = document.querySelector('#dateSelect1').value;
  const date2 = document.querySelector('#dateSelect2').value;
  const dateRange = getDatesArray(date1, date2);

  getRecordsByDateRange(dateRange).then(generateSalesGraph);
};

export default filterRevenue;

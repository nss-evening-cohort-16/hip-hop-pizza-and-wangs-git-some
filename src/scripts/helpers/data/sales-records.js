import { getAllSalesRecords } from './sales-data';

// Get Total Sales and Tips from all records in a given array
const getTotals = (recordArray) => {
  let sales = 0;
  let tips = 0;
  recordArray.forEach((record) => {
    sales += record.orderTotal;
    tips += record.tip;
  });
  return [sales, tips];
};

// Get Total Sales combined with Tips for a given array of sales records
const getGrandTotal = (recordArray) => {
  const [sales, tips] = getTotals(recordArray);
  return sales + tips;
};

// Get records from a date range
const getRecordsByDateRange = async (datesArray) => {
  const filteredRecords = await getAllSalesRecords().then((records) => records.filter((record) => datesArray.includes(record.date)));
  return filteredRecords;
};

export {
  getTotals,
  getGrandTotal,
  getRecordsByDateRange
};

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
  const outputArray = [];
  const allRecords = await getAllSalesRecords();
  console.warn(allRecords);

  datesArray.forEach((date) => {
    if (allRecords.map((r) => r.date).includes(date)) {
      console.warn(allRecords);
    } else {
      outputArray.push([0, date]);
    }
  });

  console.warn(outputArray);
  return outputArray;
};

export {
  getTotals,
  getGrandTotal,
  getRecordsByDateRange
};

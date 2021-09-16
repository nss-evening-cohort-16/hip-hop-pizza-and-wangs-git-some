import { getAllSalesRecords } from './sales-data';

// Get Total Sales and Tips from all records in a given array
const getTotals = (recordArray) => {
  let sales = 0;
  let tips = 0;
  recordArray.forEach((record) => {
    sales += record.orderTotal;
    tips += record.tip;
  });
  console.log(sales);
  return `${sales}--${tips}`;
};

// Get Total Sales combined with Tips for a given array or sales records
const getGrandTotal = (recordArray) => {
  const [sales, tips] = getTotals(recordArray).split('--');
  return Number(sales) + Number(tips);
};

// Get records from a certain date
const getRecordsByDate = (date) => {
  getAllSalesRecords().then((records) => records.filter((record) => record.date === date));
};

// Get all sales records of a certain payment type
const getRecordsByPaymentType = (paymentType) => {
  getAllSalesRecords().then((records) => records.filter((record) => record.paymentType === paymentType));
};

// Get all sales records of a certain order type
const getRecordsByOrderType = (orderType) => {
  getAllSalesRecords().then((records) => records.filter((record) => record.orderType === orderType));
};

export {
  getTotals,
  getGrandTotal,
  getRecordsByDate,
  getRecordsByPaymentType,
  getRecordsByOrderType
};

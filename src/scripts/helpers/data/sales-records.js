import { getAllSalesRecords } from './sales-data';

// Get Total Sales and Tips from all records in a given array
const getTotals = (recordArray) => {
  let revenue = 0;
  let tips = 0;
  recordArray.forEach((record) => {
    revenue += record.order_total;
    tips += record.tip;
  });

  return `${revenue}--${tips}`;
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
  getRecordsByDate,
  getRecordsByPaymentType,
  getRecordsByOrderType
};

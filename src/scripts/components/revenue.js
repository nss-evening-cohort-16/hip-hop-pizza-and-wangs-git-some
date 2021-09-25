import clearDom from '../helpers/clearDom';
import { getAllSalesRecords } from '../helpers/data/sales-data';

// Graph Settings
const graphMinHeight = 100;
const graphOffset = 1;
const barHeightMult = 1.5;
const barPadding = 5;

// Draw graph
const generateSalesGraph = (dataSet) => {
  let total = 0;
  dataSet.map((data) => data.dayTotal).forEach((sale) => { total += sale; });

  const graphContainer = document.querySelector('#revenueGraphContainer');
  graphContainer.innerHTML = `
    <h3 id="graphTitle">Revenue Graph</h3>
    <br><br>
    <svg id="revenueGraph"></svg>
    <br><br>
    <h3 id="totalContainer">TOTAL SALES: $${total}</h3>
  `;

  const graphHeight = Math.max(...dataSet.map((elem) => elem.dayTotal), graphMinHeight) * barHeightMult + graphOffset;
  const containerPadding = (Number(window.getComputedStyle(graphContainer).padding.replace('px', '')) * 2) - barPadding;
  const graphWidth = graphContainer.clientWidth - (containerPadding);
  const barWidth = graphWidth / dataSet.length;

  const graph = document.querySelector('#revenueGraph');
  graph.setAttribute('height', graphHeight);
  graph.setAttribute('width', graphWidth);

  for (let i = 0; i < dataSet.length; i++) {
    const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bar.setAttribute('y', (graphHeight - dataSet[i].dayTotal * barHeightMult) - graphOffset);
    bar.setAttribute('height', dataSet[i].dayTotal * barHeightMult);
    bar.setAttribute('width', barWidth - barPadding);
    bar.setAttribute('transform', `translate(${[barWidth * i + graphOffset, 0]})`);
    bar.classList.add('graphBar');
    bar.innerHTML = `<title>Sales: $${dataSet[i].dayTotal} | Date: ${dataSet[i].date.slice(0, -5)}</title>`;

    graph.appendChild(bar);
  }
};

// Generate array of selected dates
const getDatesArray = (start, end) => {
  const datesArray = [];
  for (let date = new Date(start); date <= new Date(end); date.setDate(date.getDate() + 1)) {
    datesArray.push(new Date(date).toLocaleDateString('en-US', { timeZone: 'Etc/GMT' }));
  }
  return datesArray;
};

// Get records from a date range
const getRecordsByDateRange = async (datesArray, uid, isAdmin) => {
  const outputArray = [];
  const dateRecords = [];
  const allRecords = await getAllSalesRecords(uid, isAdmin);

  datesArray.forEach((date) => {
    const recordsForDay = (allRecords.filter((r) => r.date === date));
    if (recordsForDay.length > 0) dateRecords.push(recordsForDay);
    if (recordsForDay.length === 0) dateRecords.push([{ date, orderTotal: 0, tip: 0 }]);
  });

  dateRecords.forEach((day) => {
    let dayTotal = 0;
    day.forEach((order) => { dayTotal += (Number(order.orderTotal) + Number(order.tip)); });
    const dailyRecord = {
      date: day[0].date,
      dayTotal,
    };
    outputArray.push(dailyRecord);
  });
  return outputArray;
};

// Show total revenue and date filter selection, generate graph of last 30 days
const viewRevenueGraph = async (uid, isAdmin) => {
  clearDom();

  const dateLastMonth = new Date().setDate(new Date().getDate() - 30);
  const date1 = new Date(dateLastMonth).toLocaleDateString('en-US');
  const date2 = new Date().toLocaleDateString('en-US');
  const dateRange = getDatesArray(date1, date2);

  const records = await getRecordsByDateRange(dateRange, uid, isAdmin);
  const domString = `
    <div id="revenueGraphContainer"></div>

    <form id="revenueDateSelect">
      <p>Show revenue between selected dates</p>
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

  generateSalesGraph(records);
};

export {
  generateSalesGraph,
  getDatesArray,
  getRecordsByDateRange,
  viewRevenueGraph
};

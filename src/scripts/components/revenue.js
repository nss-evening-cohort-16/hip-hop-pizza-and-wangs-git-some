import clearDom from '../helpers/clearDom';
import { getAllSalesRecords } from '../helpers/data/sales-data';

// Graph Settings
const graphMinHeight = 100;
const graphOffset = 1;
const barHeightMult = 2;
const barPadding = 5;

// Draw graph
const generateSalesGraph = (dataSet) => {
  let total = 0;
  dataSet.map((data) => data[0]).forEach((sale) => { total += sale; });

  const graphContainer = document.querySelector('#revenueGraphContainer');
  graphContainer.innerHTML = `
    <h3 id="graphTitle">Revenue Graph</h3>
    <br><br>
    <svg id="revenueGraph"></svg>
    <br><br>
    <h3 id="totalContainer">TOTAL SALES: $${total}</h3>
  `;

  const graphHeight = Math.max(...dataSet.map((elem) => elem[0]), graphMinHeight) * barHeightMult;
  const containerPadding = (Number(window.getComputedStyle(graphContainer).padding.replace('px', '')) * 2) - barPadding;
  const graphWidth = graphContainer.clientWidth - containerPadding;
  const barWidth = graphWidth / dataSet.length;

  const graph = document.querySelector('#revenueGraph');
  graph.setAttribute('height', graphHeight);
  graph.setAttribute('width', graphWidth);

  for (let i = 0; i < dataSet.length; i++) {
    const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bar.setAttribute('y', (graphHeight - dataSet[i][0] * barHeightMult) - graphOffset);
    bar.setAttribute('height', dataSet[i][0] * barHeightMult);
    bar.setAttribute('width', barWidth - barPadding);
    bar.setAttribute('transform', `translate(${[barWidth * i + graphOffset, 0]})`);
    bar.classList.add('graphBar');
    bar.innerHTML = `<title>Sales: $${dataSet[i][0]} | Date: ${dataSet[i][1].slice(0, -5)}</title>`;

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

// Show total revenue and date filter selection, generate graph of last 30 days
const viewRevenueGraph = async () => {
  clearDom();

  const dateLastMonth = new Date().setDate(new Date().getDate() - 30);
  const date1 = new Date(dateLastMonth).toLocaleDateString('en-US');
  const date2 = new Date().toLocaleDateString('en-US');
  const dateRange = getDatesArray(date1, date2);

  const records = await getRecordsByDateRange(dateRange);
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

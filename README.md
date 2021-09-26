# Hip Hop Pizza and Wangs [![Netlify Status](https://api.netlify.com/api/v1/badges/be269320-4f8f-4850-9853-0f597f4cf1d7/deploy-status)](https://app.netlify.com/sites/git-some-hiphop-pizza-wangs/deploys)

<img width="585" height="200" alt="site logo" src="https://user-images.githubusercontent.com/86667443/134515604-8f078c51-12d4-4331-9f23-e9dfd2a890c8.jpeg">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter), [Craig Wellspring](https://github.com/Craig-Wellspring), [Daniel Sitarek](https://github.com/dsitarek)

## [View Site](https://git-some-hiphop-pizza-wangs.netlify.app/#)
## Get Started:

```javascript
 $ git clone git@github.com:nss-evening-cohort-16/hip-hop-pizza-and-wangs-git-some.git
 $ cd hip-hop-pizza-and-wangs-git-some
```

## About the Users
* This app was created for a restaurant to use to create orders, display their menu, and keep track of revenue. The restaurant staff have administrative CRUD capabilities for all site features, while the customer (a non-admin user) has limited CRUD access to only their specific order and read-only access to the menu and upcoming show views.


## Features: 
#### **CRUD**: 
* Orders, upcoming shows, and menu items can be created, read, updated, and deleted by admins. Non-admins can create, update, and delete/close their specific orders but only read the upcoming show cards and menu items.
* Admins can view total revenue from all the orders and within a specified date range.
* The non-admin can create their own specific order, add menu items to it, and close out only their order. They can also see the total revenue from their own order history.
#### **Filtering**: 
* The order cards can be filtered by status: open or closed.
#### **Search**: 
* The orders can be searched via the searchbar by name or by phone number.
#### **Graphing**: 
* Revenue generated by total orders or orders within a specific date-range can be viewed graphically.
#### **Authentication**: 
* All users will have to log in to the app with Google. This is done through Google Firebase.

### [Loom video walkthrough](https://www.loom.com/share/d8ddcdcab2e2407a8b4337317a7a8fe5)

## Relevant Links:
* [Figma Wireframe](https://www.figma.com/file/4y3EZddALuBR3ouSEM57Np/MVP?node-id=2%3A2)
* [Technical Flowchart](https://docs.google.com/presentation/d/1FBtPDSC89h0kB46JiSY0YqJZHib9XMhPPOfmYogmC1g/edit?usp=sharing)
* [ERD](https://dbdiagram.io/d/613ffa93825b5b0146007cb4)

## Code Snippets:

```javascript
// GENERATE SALES GRAPH FOR REVENUE PAGE
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
  const barWidth = graphWidth / dataSet.length - 1;

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

// GET RECORDS FROM A DATE RANGE
const getRecordsByDateRange = async (datesArray) => {
  const outputArray = [];
  const allRecords = await getAllSalesRecords();
  const dateRecords = [];

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

// PROMISE GETTING ALL ORDERS - ADMIN OR NON-ADMIN
const getOrders = (uid, isAdmin) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/${isAdmin ? 'orders.json' : `orders.json?orderBy="uid"&equalTo="${uid}"`}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
```

## Screenshots:

<img width="957" alt="homepage" src="https://user-images.githubusercontent.com/86667443/134777281-f32a7c1a-d028-4f46-b566-48ae060a5260.png">
<img width="962" alt="orderpage" src="https://user-images.githubusercontent.com/86667443/134777285-e0e4a437-90b0-49c7-8eab-9e417ca0dd03.png">
<img width="947" alt="viewmenu" src="https://user-images.githubusercontent.com/86667443/134777289-63e41ed0-e26a-491d-8aa3-ca0d078d4ea8.png">
<img width="950" alt="viewgraph" src="https://user-images.githubusercontent.com/86667443/134777295-4243d14e-3d5d-49bb-b7e9-6a3f23f9a4a0.png">
<img width="951" alt="viewshows" src="https://user-images.githubusercontent.com/86667443/134777299-2b88f741-796d-4e8d-af54-19ec578c9b9d.png">

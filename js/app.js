'use strict';

/* --Global Variables */

var tableBodyEl = document.getElementById('sales-table'); // stores reference to table element id

/* --Global Arrays-- */

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; // array of times from 6am to 8pm
var allSales = []; // stores all cookie sold per hour from all stores into one array
var crossTotals = []; // stores totals per hour across stores

/* --Global Arrays-- */

/* --Functions-- */

function getSum(total, currentNum) { // gets sum from two numbers, used with reduce() to get total sum from an array
  var sumTotal = total + currentNum;
  return sumTotal;
}

// code from MDN: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
function makeRandom(minCust, maxCust) { // gets random number from a range of two numbers
  minCust = Math.ceil(minCust); // rounds minCust up to the nearest whole number
  maxCust = Math.floor(maxCust); // rounds maxCust down to the nearest whole number
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust; // generates random number based on minCust/maxCust
}

function renderTableHeader() { // renders table header to the DOM
  tableBodyEl; // gets the location of table body element by id
  var tableRowEl = document.createElement('tr'); // creates a table row
  tableBodyEl.appendChild(tableRowEl); // appends the table row to the table body
  var tableHeaderEl = document.createElement('th'); // creates a table header
  tableHeaderEl.textContent = 'Name'; // adds 'Name' to the table header
  tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
  for(var i = 0; i < times.length; i ++) { // a for loop that creates the bulk of the header columns
    var tableHeaderEl = document.createElement('th'); // creates a table header
    tableHeaderEl.textContent = times[i]; // adds time from times array to the table header
    tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
  }
  var tableHeaderEl = document.createElement('th'); // creates a table header
  tableHeaderEl.textContent = 'Total'; // adds 'Total' to the table header
  tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
}

function renderCrossTotals() {
  tableBodyEl; // gets the location of table body element by id
  var tableRowEl = document.createElement('tr'); // creates a table row
  tableBodyEl.appendChild(tableRowEl); // appends the table row to the table body
  var tableHeaderEl = document.createElement('th'); // creates a table header
  tableHeaderEl.textContent = 'Total'; // adds store name to the table data
  tableRowEl.appendChild(tableHeaderEl); // appends the table data to the table row
  var tableDataEl = document.createElement('th'); // creates a table header
  for(var column = 0; column < allSales[0].length; column ++) {
    var verticalArray = [];
    for(var i = 0; i < allSales.length; i ++) {
      verticalArray.push(allSales[i][column]);
    }
    var verticalTotal = verticalArray.reduce(getSum);
    crossTotals.push(verticalTotal);
    tableDataEl = document.createElement('td'); // creates a table data
    tableDataEl.textContent = verticalTotal; // adds cookiesSoldPerHour to table data
    tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  }
  var finalTotal = crossTotals.reduce(getSum);
  tableDataEl = document.createElement('td'); // creates a table data
  tableDataEl.textContent = finalTotal; // adds cookiesSoldPerHour to table data
  tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
}

function Store(nameLocation, minCustPerHour, maxCustPerHour, averageCookieSale) { // constructor function, acts as a template for each store
  this.nameLocation = nameLocation; // the name or location of each store
  this.minCustPerHour = minCustPerHour; // minimum customers per hour
  this.maxCustPerHour = maxCustPerHour; // maximum customers per hour
  this.averageCookieSale = averageCookieSale; // average cookie sales per customer
  this.cookiesSoldPerHour = []; // array that stores cookies sold per hour
}

/* --Functions-- */

/* --Prototypes-- */

Store.prototype.renderTableData = function() { // renders table data to the DOM
  console.log(`Name/Location: ${this.nameLocation}, minCustPerHour: ${this.minCustPerHour}, maxCustPerHour: ${this.maxCustPerHour}, averageCookieSale: ${this.averageCookieSale}`);
  var listTableHeaders = document.getElementsByTagName('th'); // returns a node list of table headers
  if(listTableHeaders.length < 1) { // checks to see if a header already exists
    renderTableHeader(); // renders a header if no header exists
  }
  tableBodyEl; // gets the location of table body element by id
  var tableRowEl = document.createElement('tr'); // creates a table row
  tableBodyEl.appendChild(tableRowEl); // appends the table row to the table body
  var tableDataEl = document.createElement('td'); // creates a table data
  tableDataEl.textContent = this.nameLocation; // adds store name to the table data
  tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  for(var i = 0; i < times.length; i ++) { // a for loop that generates simulated cookies sold and pushes these numbers into cookiesSoldPerHour array
    var randomNum = makeRandom(this.minCustPerHour, this.maxCustPerHour); // stores the generated random number from minCust and MaxCust into a variable
    this.cookiesSoldPerHour.push(Math.round(randomNum * this.averageCookieSale)); // multiplies the random number by the average CookieSale, pushes this number into the cookiesSoldPerHour array
    tableDataEl = document.createElement('td'); // creates a table data
    tableDataEl.textContent = this.cookiesSoldPerHour[i]; // adds cookiesSoldPerHour to table data
    tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
    console.log(`randomNum: ${randomNum}, cookiesSoldPerHour: ${this.cookiesSoldPerHour[i]}`);
  }
  var totalCookiesSold = this.cookiesSoldPerHour.reduce(getSum); // sums the total amount of cookiesSoldPerHour
  tableDataEl = document.createElement('td'); // creates a table data
  tableDataEl.textContent = totalCookiesSold; // adds totalCookiesSold to the table data
  tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  allSales.push(this.cookiesSoldPerHour); // stores cookiesSoldPerHour into a global sales array
  console.log(`totalCookiesSold: ${totalCookiesSold}`);
};

/* --Prototypes-- */

/* --Instances-- */

var firstAndPike = new Store('First and Pike', '23', '65', '6.3');
var seaTacAirport = new Store('Sea Tac Airport', '3', '24', '1.2');
var seattleCenter = new Store('Seattle Center', '11', '38', '3.7');
var capitolHill = new Store('Capitol Hill', '20', '38', '2.3');
var alki = new Store('Alki', '2', '16', '4.6');

/* --Instances-- */

/* --Method Calls-- */

firstAndPike.renderTableData();
seaTacAirport.renderTableData();
seattleCenter.renderTableData();
capitolHill.renderTableData();
alki.renderTableData();

/* --Method Calls-- */

/* --Function Calls-- */

renderCrossTotals();

/* --Function Calls-- */

console.log(allSales);
console.log(crossTotals);

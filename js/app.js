'use strict';

/* --Global Variables */

var tableBodyEl = document.getElementById('sales-table');

/* --Global Arrays-- */

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; // array of times from 6am to 8pm
var allSales = []; // stores all cookie sold per hour from all stores into one array

/* --Global Arrays-- */

/* --Functions-- */

function getSum(total, nextNum) { // gets sum from two numbers, used with reduce() to get total sum from an array
  var sumTotal = total + nextNum;
  return sumTotal;
}

// code from MDN: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
function makeRandom(minCust, maxCust) { // gets random number from a range of two numbers
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

function renderTableHeader() {
  tableBodyEl;
  var tableRowEl = document.createElement('tr');
  tableBodyEl.appendChild(tableRowEl);
  var tableHeaderEl = document.createElement('th');
  tableHeaderEl.textContent = 'Name';
  tableRowEl.appendChild(tableHeaderEl);
  for(var i = 0; i < times.length; i ++) {
    var tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = times[i];
    tableRowEl.appendChild(tableHeaderEl);
  }
  var tableHeaderEl = document.createElement('th');
  tableHeaderEl.textContent = 'Total';
  tableRowEl.appendChild(tableHeaderEl);
}

function Store(name, minCustPerHour, maxCustPerHour, averageCookieSale) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.averageCookieSale = averageCookieSale;
  this.cookiesSoldPerHour = []; // stores cookies sold per hour
}

/* --Functions-- */

/* --Prototypes-- */

Store.prototype.renderTableData = function() { // generates a list of random cookies based on a parent element ID and 3 numbers
  console.log(`elementId: ${this.storeLocation}, minCustPerHour: ${this.minCustPerHour}, maxCustPerHour: ${this.maxCustPerHour}, averageCookieSale: ${this.averageCookieSale}`);
  var listTableHeaders = document.getElementsByTagName('th');
  if(listTableHeaders.length < 1) {
    renderTableHeader();
  }
  tableBodyEl;
  var tableRowEl = document.createElement('tr');
  tableBodyEl.appendChild(tableRowEl);
  var tableDataEl = document.createElement('td');
  tableDataEl.textContent = this.name;
  tableRowEl.appendChild(tableDataEl);
  for(var i = 0; i < times.length; i ++) { // for loop that generates simulated sales and pushes into salesArray
    var randomNum = makeRandom(this.minCustPerHour, this.maxCustPerHour);
    this.cookiesSoldPerHour.push(Math.round(randomNum * this.averageCookieSale)); // gets randomly generated number from minCustPerHour and maxCustPerHour, multiplies this number by meanCookieSale, pushes number into salesArray
    tableDataEl = document.createElement('td');
    tableDataEl.textContent = this.cookiesSoldPerHour[i];
    tableRowEl.appendChild(tableDataEl);
    console.log(`randomNum: ${randomNum}, cookiesSoldPerHour: ${this.cookiesSoldPerHour[i]}`);
  }
  var total = this.cookiesSoldPerHour.reduce(getSum);
  tableDataEl = document.createElement('td');
  tableDataEl.textContent = total;
  tableRowEl.appendChild(tableDataEl);
  allSales.push(this.cookiesSoldPerHour); // stores salesArray into an array
  console.log(`listTotal: ${total}`);
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

console.log(allSales);

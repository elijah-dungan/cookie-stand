'use strict';

/* --Global Variables */

var tBodyEl = document.getElementById('sales-table');

/* --Global Arrays-- */

var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:']; // array of times from 6am to 8pm
var allStores = [];
var allSales = [];

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

function Store(name, minCustPerHour, maxCustPerHour, averageCookieSale) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.averageCookieSale = averageCookieSale;
  this.cookiesSoldPerHour = []; // stores cookies sold per hour
}

function renderTableHeader() {

  tBodyEl;
  var trEl = document.createElement('tr');
  tBodyEl.appendChild(trEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  for(var i = 0; i < times.length; i ++) {
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

}

/* --Functions-- */

/* --Prototypes-- */

Store.prototype.renderTableData = function() { // generates a list of random cookies based on a parent element ID and 3 numbers
  console.log(`elementId: ${this.storeLocation}, minCustPerHour: ${this.minCustPerHour}, maxCustPerHour: ${this.maxCustPerHour}, averageCookieSale: ${this.averageCookieSale}`);

  tBodyEl;
  var trEl = document.createElement('tr');
  tBodyEl.appendChild(trEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < times.length; i ++) { // for loop that generates simulated sales and pushes into salesArray
    var randomNum = makeRandom(this.minCustPerHour, this.maxCustPerHour);
    this.cookiesSoldPerHour.push(Math.round(randomNum * this.averageCookieSale)); // gets randomly generated number from minCustPerHour and maxCustPerHour, multiplies this number by meanCookieSale, pushes number into salesArray

    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHour[i];
    trEl.appendChild(tdEl);

    console.log(`randomNum: ${randomNum}, cookiesSoldPerHour: ${this.cookiesSoldPerHour[i]}`);
  }

  var total = this.cookiesSoldPerHour.reduce(getSum);

  tdEl = document.createElement('td');
  tdEl.textContent = total;
  trEl.appendChild(tdEl);

  allSales.push(this.cookiesSoldPerHour); // stores salesArray into an array
  allStores.push(this); // stores instance into an array

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

renderTableHeader();
firstAndPike.renderTableData();
seaTacAirport.renderTableData();
seattleCenter.renderTableData();
capitolHill.renderTableData();
alki.renderTableData();

/* --Method Calls-- */

console.log(allStores);
console.log(allSales);

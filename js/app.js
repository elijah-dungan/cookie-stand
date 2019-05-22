'use strict';

/* --Global Arrays-- */

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

function printList(inputParentEl, outputChildEl, inputTextContent) { // creates a child element and inputs text within the child element based on an element ID, tag name of child, and input text
  var getParentEl = document.getElementById(inputParentEl); // gets parent element by ID
  var newChildEl = document.createElement(outputChildEl); // creates child element
  newChildEl.textContent = inputTextContent; // adds text to the child element
  getParentEl.appendChild(newChildEl); // appends the child element to the parent
}

function StoreByLocation(elementId, minCustPerHour, maxCustPerHour, averageCookieSale) {
  this.elementId = elementId;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.averageCookieSale = averageCookieSale;
  this.times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:']; // array of times from 6am to 8pm
  this.cookiesSoldPerHour = []; // stores cookies sold per hour
  this.listPerHour = [];
}

/* --Functions-- */

/* --Prototypes-- */

StoreByLocation.prototype.render = function() { // generates a list of random cookies based on a parent element ID and 3 numbers
  console.log(`elementId: ${this.elementId}, minCustPerHour: ${this.minCustPerHour}, maxCustPerHour: ${this.maxCustPerHour}, averageCookieSale: ${this.averageCookieSale}`);
  for(var i = 0; i < this.times.length; i ++) { // for loop that generates simulated sales and pushes into salesArray
    var randomNum = makeRandom(this.minCustPerHour, this.maxCustPerHour);
    this.cookiesSoldPerHour.push(Math.round(randomNum * this.averageCookieSale)); // gets randomly generated number from minCustPerHour and maxCustPerHour, multiplies this number by meanCookieSale, pushes number into salesArray
    var salesList = `${this.times[i]} ${this.cookiesSoldPerHour[i]} cookies`; // creates string with time, number of sales, and number of cookies sold
    this.listPerHour.push(salesList);
    printList(this.elementId, 'li', salesList); // takes strings and displays it inside child li elements
    console.log(`randomNum: ${randomNum}, cookiesSoldPerHour: ${this.cookiesSoldPerHour[i]}`);
  }
  var listTotal = `Total: ${this.cookiesSoldPerHour.reduce(getSum)} cookies`; // creates string with total number of cookies sold
  printList(this.elementId, 'li', listTotal); // takes strings and displays it inside child li elements
  allSales.push(this.cookiesSoldPerHour); // stores salesArray into an array
  allStores.push(this); // stores instance into an array
  console.log(`listPerHour: ${this.listPerHour}`);
  console.log(`listTotal: ${listTotal}`);
};

/* --Prototypes-- */

/* --Instances-- */

var firstAndPike = new StoreByLocation('first-and-pike', '23', '65', '6.3');
var seaTacAirport = new StoreByLocation('sea-tac-airport', '3', '24', '1.2');
var seattleCenter = new StoreByLocation('seattle-center', '11', '38', '3.7');
var capitolHill = new StoreByLocation('capitol-hill', '20', '38', '2.3');
var alki = new StoreByLocation('alki', '2', '16', '4.6');

/* --Instances-- */

/* --Method Calls-- */

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

/* --Method Calls-- */

console.log(allStores);
console.log(allSales);

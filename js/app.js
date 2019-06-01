'use strict';

/* --Global Variables */

var tableBodyEl = document.getElementById('table-body'); // stores reference to table element id
var tableFootEl = document.getElementById('table-footer'); // stores reference to table element id
var formEl = document.getElementById('form'); // stores reference to form element id
var times = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; // array of times from 6am to 8pm
var allSales = []; // stores all cookies sold per hour by location (arrays within an array)
var hourlyTotals = []; // stores totals per hour across stores

/* --Constructor Functions-- */

function Store(nameLocation, minCustPerHour, maxCustPerHour, averageCookieSale) { // constructor function, acts as a template for each store
  this.nameLocation = nameLocation; // the name or location of each store
  this.minCustPerHour = minCustPerHour; // minimum customers per hour
  this.maxCustPerHour = maxCustPerHour; // maximum customers per hour
  this.averageCookieSale = averageCookieSale; // average cookie sales per customer
  this.cookiesSoldPerHour = []; // array that stores cookies sold per hour
}

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
  var tableDataEl = document.createElement('td'); // creates table data
  tableDataEl.textContent = this.nameLocation; // adds store name to the table data
  tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  for(var i = 0; i < times.length; i ++) { // a for loop that generates simulated cookies sold and pushes these numbers into cookiesSoldPerHour array
    var randomNum = makeRandom(this.minCustPerHour, this.maxCustPerHour); // stores the generated random number from minCust and MaxCust into a variable
    this.cookiesSoldPerHour.push(Math.round(randomNum * this.averageCookieSale)); // multiplies the random number by the average CookieSale, pushes this number into the cookiesSoldPerHour array
    tableDataEl = document.createElement('td'); // creates table data
    tableDataEl.textContent = this.cookiesSoldPerHour[i]; // adds cookiesSoldPerHour to the table data
    tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
    console.log(`randomNum: ${randomNum}, cookiesSoldPerHour: ${this.cookiesSoldPerHour[i]}`); // allows dev to check math in console log
  }
  var locationTotal = this.cookiesSoldPerHour.reduce(getSum); // sums the total amount of cookiesSoldPerHour
  tableDataEl = document.createElement('td'); // creates table data
  tableDataEl.textContent = locationTotal; // adds totalCookiesSold to the table data
  tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  allSales.push(this.cookiesSoldPerHour); // stores cookiesSoldPerHour into a global sales array
  console.log(`locationTotal: ${locationTotal}`); // allows dev to check math in console log
};

/* --Instances-- */

var firstAndPike = new Store('First and Pike', '23', '65', '6.3');
var seaTacAirport = new Store('Sea Tac Airport', '3', '24', '1.2');
var seattleCenter = new Store('Seattle Center', '11', '38', '3.7');
var capitolHill = new Store('Capitol Hill', '20', '38', '2.3');
var alkiBeach = new Store('Alki Beach', '2', '16', '4.6');

/* --Functions-- */

function getSum(total, currentNum) { // gets sum from two numbers, used with reduce() to get total sum from an array
  var sumTotal = total + currentNum; // simple addition equation
  return sumTotal; // returns the sum
}

// code from MDN: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random'
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
  tableHeaderEl.textContent = 'Store Name'; // adds 'Name' to the table header
  tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
  for(var i = 0; i < times.length; i ++) { // a for loop that creates the bulk of the header columns
    tableHeaderEl = document.createElement('th'); // creates a table header
    tableHeaderEl.textContent = times[i]; // adds time from times array to the table header
    tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
  }
  tableHeaderEl = document.createElement('th'); // creates a table header
  tableHeaderEl.textContent = 'Total'; // adds 'Total' to the table header
  tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
}

function renderTableFooter() { // renders the totals across stores using an array within an array
  tableFootEl; // gets the location of table body element by id
  if(hourlyTotals.length > 0) { // checks hourlyTotals array for values
    console.log(tableFootEl.firstElementChild); // allows dev to check correct child selection, should return '<tr>...</tr>'
    var removeEl = tableFootEl.firstElementChild; // gets the first <tr> from the table footer
    tableFootEl.removeChild(removeEl); // removes the first <tr> from the table footer
    for(var i = 0; i <= times.length; i++) { // a for loop that deletes all values based on the length of the times array
      hourlyTotals.pop(); // deletes values from hourlyTotals array
    }
  }
  var tableRowEl = document.createElement('tr'); // creates a table row
  tableFootEl.appendChild(tableRowEl); // appends the table row to the table body
  var tableHeaderEl = document.createElement('th'); // creates a table header
  tableHeaderEl.textContent = 'Hourly Total'; // adds store name to the table header
  tableRowEl.appendChild(tableHeaderEl); // appends the table header to the table row
  var tableDataEl = document.createElement('th'); // creates a table header
  for(var x = 0; x < allSales[0].length; x ++) { // a for loop that selects each column
    var columnArray = []; // stores numbers within each column
    for(var y = 0; y < allSales.length; y ++) { // a for loop that loops down the column
      columnArray.push(allSales[y][x]); // pushes the numbers from the column into columnArray
    }
    var columnTotal = columnArray.reduce(getSum); // gets sum from columnArray
    hourlyTotals.push(columnTotal); // pushes each sum into hourlyTotals global array
    tableDataEl = document.createElement('td'); // creates table data
    tableDataEl.textContent = columnTotal; // adds columnTotal to the table data
    tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  }
  var finalTotal = hourlyTotals.reduce(getSum); // gets the final combined total of all cookies sold
  tableDataEl = document.createElement('td'); // creates table data
  tableDataEl.textContent = finalTotal; // adds finalTotal to the table data
  tableRowEl.appendChild(tableDataEl); // appends the table data to the table row
  console.log(`finalTotal: ${finalTotal}`); // allows dev to check math in console log
}

function clear() {
  event.target.nameLoc.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.averageSale.value = null;
}

/* --Event Handler-- w/ IE Fallback */

function submitHandler(event) { // event handler that adds a new store
  if (!event) { // checks for browser support
    event = window.event; // --Fallback-- if browser is IE
  }
  formEl = event.target || event.srcElement; // gets target of event
  if (event.preventDefault) { // checks for browser support
    event.preventDefault(); // removes default form settings set by the browser
  } else { // --Fallback-- if browser is IE
    event.returnValue = false; // // removes default form settings set by the browser
  }
  if(event.target) { // checks if the event occured
    var formNameLocation = event.target.nameLoc.value; // stores input value entered by the user
    var formMinCustPerHour = event.target.minCust.value; // stores input value entered by the user
    var formMaxCustPerHour = event.target.maxCust.value; // stores input value entered by the user
    var formAverageCookieSale = event.target.averageSale.value; // stores input value entered by the user
    new Store(formNameLocation, formMinCustPerHour, formMaxCustPerHour, formAverageCookieSale).renderTableData();
    clear();
    renderTableFooter(); // renders a new footer
    console.log(`The form values are ${formNameLocation}, ${formMinCustPerHour}, ${formMaxCustPerHour}, and ${formAverageCookieSale}.`); // allows dev to check inputs in console log
  }
}

/* --Event Listener-- w/ IE Fallback*/

if(formEl.addEventListener) { // checks for browser support
  formEl.addEventListener('submit', submitHandler); // event handler that listens for submit from a button
} else { // --Fallback-- if browser is IE, listener will use attachEvent
  formEl.attachEvent('onSubmit', submitHandler); // event handler that listens for submit from a button
}

/* --Method Calls-- */

firstAndPike.renderTableData();
seaTacAirport.renderTableData();
seattleCenter.renderTableData();
capitolHill.renderTableData();
alkiBeach.renderTableData();

/* --Function Calls-- */

renderTableFooter(); // renders the table footer consisting of hourly totals
console.log(allSales); // allows dev to check math in console log
console.log(hourlyTotals); // allows dev to check math in console log

'use strict';

/* --Function Declarations-- */

function getSum(total, nextNum) { // gets sum from two numbers, used with reduce() to get total sum from an array
  var sumTotal = total + nextNum;
  return sumTotal;
}

//code from MDN: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
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

function generateList(inputElement, inputNum1, inputNum2, inputNum3) { // generates a list of random cookies based on an element ID and 3 integers
  var cookieArray = []; // stores cookies sold
  var timesArray = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:']; // array of times from 6am to 8pm
  for(var i = 0; i < timesArray.length; i ++) { // for loop that generates simulated sales and pushes into cookieArray
    cookieArray.push(Math.round(makeRandom(inputNum1, inputNum2) * inputNum3)); // gets average from inputNum 1 and 2, multiplies product by input 3, generates random number to create bell curve, rounds result to nearest whole number, pushes resulting number into cookieArray
    var salesList = `${timesArray[i]} ${cookieArray[i]} cookies`; // creates string with time, number of sales, and number of cookies sold
    printList(inputElement, 'li', salesList); // takes strings and displays it inside child li elements
    console.log(salesList);
  }
  var salesTotal = `Total: ${cookieArray.reduce(getSum)} cookies`; // creates string with total number of cookies sold
  printList(inputElement, 'li', salesTotal); // takes strings and displays it inside child li elements
  // wont work unless prototype and using constructor function // this.salesArray.push(cookieArray);
  console.log(salesTotal);
  console.log(cookieArray);
}

/* --Function Declarations-- */

/* --Object Literals-- */

var firstAndPike = {
  elementId: 'first-and-pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  meanCookieSale: 6.3,
  salesArray: [],
  render: function() {
    generateList(this.elementId, this.minCustPerHour, this.maxCustPerHour, this.meanCookieSale);
  }
};

var seaTacAirport = {
  elementId: 'sea-tac-airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  meanCookieSale: 1.2,
  salesArray: [],
  render: function() {
    generateList(this.elementId, this.minCustPerHour, this.maxCustPerHour, this.meanCookieSale);
  }
};

var seattleCenter = {
  elementId: 'seattle-center',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  meanCookieSale: 6.3,
  salesArray: [],
  render: function() {
    generateList(this.elementId, this.minCustPerHour, this.maxCustPerHour, this.meanCookieSale);
  }
};

var capitolHill = {
  elementId: 'capitol-hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  meanCookieSale: 2.3,
  salesArray: [],
  render: function() {
    generateList(this.elementId, this.minCustPerHour, this.maxCustPerHour, this.meanCookieSale);
  }
};

var alki = {
  elementId: 'alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  meanCookieSale: 4.6,
  salesArray: [],
  render: function() {
    generateList(this.elementId, this.minCustPerHour, this.maxCustPerHour, this.meanCookieSale);
  }
};

/* --Object Literals-- */

/* --Method Calls-- */

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

/* --Method Calls-- */




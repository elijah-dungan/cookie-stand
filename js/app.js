'use strict';

/* --Global Function Declarations-- */

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

/* --Global Function Declarations-- */

/* --Constructor Function-- */

function StoreLocation(elementId, minCustPerHour, maxCustPerHour, meanCookieSale) {
  this.elementId = elementId;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.meanCookieSale = meanCookieSale;
  this.salesArray = []; // stores cookies sold
  this.timesArray = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:']; // array of times from 6am to 8pm
  this.render = function() { // generates a list of random cookies based on a parent element ID and 3 numbers
    for(var i = 0; i < this.timesArray.length; i ++) { // for loop that generates simulated sales and pushes into salesArray
      this.salesArray.push(Math.round(makeRandom(this.minCustPerHour, this.maxCustPerHour) * this.meanCookieSale)); // gets randomly generated number from minCustPerHour and maxCustPerHour, multiplies this number by meanCookieSale, pushes number into salesArray
      var salesList = `${this.timesArray[i]} ${this.salesArray[i]} cookies`; // creates string with time, number of sales, and number of cookies sold
      printList(this.elementId, 'li', salesList); // takes strings and displays it inside child li elements
      console.log(salesList);
    }
    var salesTotal = `Total: ${this.salesArray.reduce(getSum)} cookies`; // creates string with total number of cookies sold
    printList(this.elementId, 'li', salesTotal); // takes strings and displays it inside child li elements
    // wont work unless prototype and using constructor function // this.salesArray.push(cookieArray);
    console.log(salesTotal);
    console.log(this.salesArray);
  };
}

/* --Constructor Function-- */

/* --Constructor Instances-- */

var firstAndPike = new StoreLocation('first-and-pike', '23', '65', '6.3');
var seaTacAirport = new StoreLocation('sea-tac-airport', '3', '24', '1.2');
var seattleCenter = new StoreLocation('seattle-center', '11', '38', '3.7');
var capitolHill = new StoreLocation('capitol-hill', '20', '38', '2.3');
var alki = new StoreLocation('alki', '2', '16', '4.6');

/* --Constructor Instances-- */

/* --Method Calls-- */

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();



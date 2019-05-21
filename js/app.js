'use strict';

/* --Function Declarations-- */

function getMean(a, b) { // gets average from 2 integers
  var sum = (a + b)/2;
  console.log(sum);
  return sum;
}

function getSum(total, nextNum) { // gets sum from two numbers, used with reduce() to get total sum from an array
  var sumTotal = total + nextNum;
  console.log(sumTotal);
  return sumTotal;
}

function makeRandom(inputInt) { // gets random number from 1 integer
  var num = Math.floor(Math.random() * Math.floor(inputInt));
  console.log(num);
  return num;
}

function printList(inputParentEl, outputChildEl, inputTextContent) { // creates a child element and inputs text within the child element based on an element ID, tag name of child, and input text
  var getParentEl = document.getElementById(inputParentEl); // gets parent element by ID
  var newChildEl = document.createElement(outputChildEl); // creates child element
  newChildEl.textContent = inputTextContent; // adds text to the child element
  getParentEl.appendChild(newChildEl); // appends the child element to the parent
  console.log(inputTextContent);
}

function generateList(inputElement, inputNum1, inputNum2, inputNum3) { // generates a list of random cookies based on an element ID and 3 integers
  var cookieArray = []; // stores cookies sold
  var timesArray = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:']; // array of times from 6am to 8pm
  for(var i = 0; i < timesArray.length; i ++) { // for loop that generates simulated sales and pushes into cookieArray
    cookieArray.push(Math.round(makeRandom(getMean(inputNum1, inputNum2)) * inputNum3)); // gets average from inputNum 1 and 2, multiplies product by input 3, generates random number to create bell curve, rounds result to nearest whole number, pushes resulting number into cookieArray
    var salesList = `${timesArray[i]} ${cookieArray[i]} cookies`; // creates string with time, number of sales, and number of cookies sold
    printList(inputElement, 'li', salesList); // takes strings and displays it inside child li elements
    console.log(salesList);
  }
  var salesTotal = `Total: ${cookieArray.reduce(getSum)} cookies`; // creates string with total number of cookies sold
  printList(inputElement, 'li', salesTotal); // takes strings and displays it inside child li elements
  console.log(salesTotal);
}

/* --Function Declarations-- */

/* --Object Literals-- */

var firstAndPike = {
  elementId: 'first-and-pike',
  minCust: 23,
  maxCust: 65,
  meanSale: 6.3,
  listSales: generateList('first-and-pike', 23, 65, 6.3)
};

var seaTacAirport = {
  elementId: 'sea-tac-airport',
  minCust: 3,
  maxCust: 24,
  meanSale: 1.2,
  listSales: generateList('sea-tac-airport', 3, 24, 1.2)
};

var seattleCenter = {
  elementId: 'seattle-center',
  minCust: 23,
  maxCust: 65,
  meanSale: 6.3,
  listSales: generateList('seattle-center', 23, 65, 6.3)
};

var capitolHill = {
  elementId: 'capitol-hill',
  minCust: 20,
  maxCust: 38,
  meanSale: 2.3,
  listSales: generateList('capitol-hill', 20, 38, 2.3)
};

var alki = {
  elementId: 'alki',
  minCust: 2,
  maxCust: 16,
  meanSale: 4.6,
  listSales: generateList('alki', 2, 16, 4.6)
};

/* --Object Literals-- */





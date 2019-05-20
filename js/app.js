'use strict';

/* --Function Declarations-- */

function getMean(a, b) { // gets mean from 2 input variables
  var sum = (a + b)/2;
  console.log(sum);
  return sum;
}

function getTotal(total, num) { // gets average from an array
  var sumTotal = total + num;
  console.log(sumTotal);
  return sumTotal;
}

function makeRandom(inputInt) { // gets random number from 1 input variable
  var num = Math.floor(Math.random() * Math.floor(inputInt));
  console.log(num);
  return num;
}

function printList(inputElement, generateEl, inputList) { // generates element using 3 variables
  var makeList = document.getElementById(inputElement);
  var liEl = document.createElement(generateEl);
  liEl.textContent = inputList;
  makeList.appendChild(liEl);
  console.log(inputList);
}

function generateList(inputElement, inputNum1, inputNum2, inputNum3) { // generates a list of random cookies based on 3 variables
  var cookieArray = []; // stores cookies sold
  var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
  for(var i = 0; i <= times.length; i ++) { // loop that generates simulated sales and pushes into cookieArray
    cookieArray.push(Math.round(makeRandom(getMean(inputNum1, inputNum2)) * inputNum3));
  }
  for(var j = 0; j <= times.length; j ++) { // loop that generates sales list
    var displayList = `${times[j]} ${cookieArray[j]} cookies`; // displays time, number of sales, and cookies sold in a string
    printList(inputElement, 'li', displayList);
    console.log(displayList);
  }
  var displayTotal = `Total: ${cookieArray.reduce(getTotal)} cookies`; // displays total number of cookies sold in a string
  printList(inputElement, 'li', displayTotal);
  console.log(displayTotal);
}

/* --Function Declarations-- */

/* --Object Literals-- */

var firstAndPike = {
  storeLocation: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  meanSale: 6.3,
  listSales: generateList('first-and-pike', 23, 65, 6.3)
};

var seaTacAirport = {
  storeLocation: 'Sea Tac Airport',
  minCust: 3,
  maxCust: 24,
  meanSale: 1.2,
  listSales: generateList('sea-tac-airport', 3, 24, 1.2)
};

var seattleCenter = {
  storeLocation: 'Seattle Center',
  minCust: 23,
  maxCust: 65,
  meanSale: 6.3,
  listSales: generateList('seattle-center', 23, 65, 6.3)
};

var capitolHill = {
  storeLocation: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  meanSale: 2.3,
  listSales: generateList('capitol-hill', 20, 38, 2.3)
};

var alki = {
  storeLocation: 'Alki',
  minCust: 2,
  maxCust: 16,
  meanSale: 4.6,
  listSales: generateList('alki', 2, 16, 4.6)
};

/* --Object Literals-- */

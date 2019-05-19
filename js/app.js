/* --Global Function Declarations-- */

function getMean(a, b) { // gets mean from 2 input variables
  var sum = (a + b)/2;
  //console.log(sum);
  return sum;
}

function getTotal(total, num) { // gets average from an array
  var sumTotal = total + num;
  //console.log(sumTotal);
  return sumTotal;
}

function makeRandom(inputInt) { // gets random number from 1 input variable
  var num = Math.floor(Math.random() * Math.floor(inputInt));
  //console.log(num);
  return num;
}

function generateList(inputElement, inputNum1, inputNum2, inputNum3) { // generates a list of random cookies based on 3 variables
  var mean = getMean(inputNum1, inputNum2);
  var cookieArray = [];
  var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
  for(var i = 0; i < times.length; i++) {
    cookieArray.push(Math.round(makeRandom(mean)*inputNum3)); // generates random numbers, and pushes into cookieArray
  }
  for(var j = 0; j < times.length; j++) { // loop for times array
    var time = times[j]; // loops through times array
    var randomSale = cookieArray[j]; // varable for getting cookies
    var string = 'cookies'; // stores string cookie for looping
    var displayList = `${time} ${randomSale} ${string}`;
    var makeList = document.getElementById(inputElement);
    var liEl = document.createElement('li');
    liEl.textContent = displayList;
    makeList.appendChild(liEl);
    //console.log(displayList);
  }
  var total = cookieArray.reduce(getTotal); // perform sum of array here
  var displayTotal = `Total: ${total} ${string}`;
  liEl.textContent = displayTotal;
  makeList.appendChild(liEl);
  //console.log(displayTotal);
}

/* --Global Function Declarations-- */

/* --Object Literals-- */

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  meanSale: 6.3,
  listSales: generateList('first-and-pike', 23, 65, 6.3)
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  meanSale: 1.2,
  listSales: generateList('sea-tac-airport', 3, 24, 1.2)
};

var seattleCenter = {
  minCust: 23,
  maxCust: 65,
  meanSale: 6.3,
  listSales: generateList('seattle-center', 23, 65, 6.3)
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  meanSale: 2.3,
  listSales: generateList('capitol-hill', 20, 38, 2.3)
};

var alki = {
  minCust: 2,
  maxCust: 16,
  meanSale: 4.6,
  listSales: generateList('alki', 2, 16, 4.6)
};

/* --Object Literals-- */

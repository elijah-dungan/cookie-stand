/*First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

Stores the min/max hourly customers, and the average cookies per customer, in object properties

Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location

Display the values of each array as unordered lists in the browser

Calculating the sum of these hourly totals; your output for each location should look like this:

1st and Pike

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
8pm: 29 cookies
Total: 657 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.

Here are the starting numbers that you'll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
1st and Pike	23	65	6.3
SeaTac Airport	3	24	1.2
Seattle Center	11	38	3.7
Capitol Hill	20	38	2.3
Alki	2	16	4.6
These numbers are simply Pat's estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we'll want the ability to update these numbers for each location, and to add/remove locations.*/


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
    var displayList = `${time} ${randomSale} ${string}.`;
    var makeList = document.getElementById(inputElement);
    var liEl = document.createElement('li');
    liEl.textContent = displayList;
    makeList.appendChild(liEl);
    //console.log(displayList);
  }
  var total = cookieArray.reduce(getTotal); // perform sum of array here
  var displayTotal = `Total: ${total} ${string}.`;
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

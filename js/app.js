'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allStores = [];

let tableElem = document.getElementById('tables');

//  HELPER FUNCTIONS - UTILITIES

function randomCustNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// #pragma: OBJECT LITERALS

function Store(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.total = 0;
  this.cookieNums = [];
  allStores.push(this);
}
Store.prototype.randomCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let custNum = randomCustNum(this.minCustomer, this.maxCustomer);
    let cookieNum = Math.round(custNum * this.avgCookie);
    this.total += cookieNum;
    this.cookieNums.push(cookieNum);
  }
};
Store.prototype.render = function () {
  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);
  let city = document.createElement('th');
  city.textContent = this.name;
  tableRow.appendChild(city);

  for (let i = 0; i < this.cookieNums.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookieNums[i];
    tableRow.appendChild(tableData);
  }
  let totalRow = document.createElement('td');
  totalRow.textContent = this.total;
  tableRow.appendChild(totalRow);
};
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);



function headerInfo() {

  let tableRow = document.createElement('tr');
 
  tableElem.appendChild(tableRow);

  let firstCell = document.createElement('td');
  firstCell.textContent = "Location"
  tableRow.appendChild(firstCell);
 
  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = hours[i];
    tableRow.appendChild(tableData);
    }
    let lastCell = document.createElement('td');
    lastCell.textContent = "Total/day"
    tableRow.appendChild(lastCell);
}

// tableRow.appendChild(lastCell);

function footerInfo() {
  let tableRow = document.createElement('tr');

  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Total/hour';
  tableRow.appendChild(tableHeader);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookieNums[i];
    }

    let tdElement = document.createElement('th');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);

    grandTotal += hourlyTotal;
  }

  let totalElement = document.createElement('th');
  totalElement.textContent = grandTotal;
  tableRow.appendChild(totalElement);

  tableElem.appendChild(tableRow);
}

headerInfo();

seattle.randomCookies();
seattle.render();


tokyo.randomCookies();
tokyo.render();

dubai.randomCookies();
dubai.render();

paris.randomCookies();
paris.render();

lima.randomCookies();
lima.render();

footerInfo();
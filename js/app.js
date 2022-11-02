let locationHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let initialNumStores = 0;


//Table for data
  
function renderTableHead(){
  let shopSection = document.getElementById('shopProfiles');
  
  let tableElement = document.createElement('table')
  tableElement.setAttribute('id', 'table');
  shopSection.appendChild(tableElement);

  let captionElement = document.createElement('caption');
  captionElement.textContent = 'Sales Data by Time and Location';
  tableElement.appendChild(captionElement);

  let tableHeadElement = document.createElement('thead');
  tableElement.appendChild(tableHeadElement);

  let tableRowElement = document.createElement('tr');
  tableHeadElement.appendChild(tableRowElement);

  let tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute ('scope', 'col');
  tableHeadingElement.textContent = 'Location';
  tableRowElement.appendChild(tableHeadingElement);

  for(let i = 0; i < locationHours.length; i++){
    tableHeadingElement = document.createElement('th');
    tableHeadingElement.textContent = `${locationHours[i]}`;
    tableRowElement.appendChild(tableHeadingElement);
}
  tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'col');
  tableHeadingElement.textContent = 'Daily Location Total:';
  tableRowElement.appendChild(tableHeadingElement);
}

function renderTableFooter() {
  let table = document.getElementById('table');

  let tfoot = document.createElement ('tfoot');
  table.appendChild(tfoot);

  let tr = document.createElement('tr');
  tr.setAttribute('id', 'totals');
  tfoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Hourly Total';
  th.setAttribute('scope', 'row');
  tr.appendChild(th);

  for(let i = 0; i < locationHours.length; i++) {
    let tdHourlyTotal = document.createElement('th');
    tdHourlyTotal.setAttribute('scope','col');
    tdHourlyTotal.textContent = ' ';
    tr.appendChild(tdHourlyTotal);
  }

  let tableHeadingElement = document.createElement('th');
  tableHeadingElement.textContent = 'Hourly Total: ';
  tableHeadingElement.setAttribute('scope', 'row');
  tableRowElement.appendChild(tableHeadingElement);
};





//Location object
function Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust, locationHours, hourlySalesArray, initialTotalSales) {
  this.locationcity = locationcity
  this.minCustHr = minCustHr
  this.maxCustHr = maxCustHr
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.locationHours = locationHours;
  this.hourlySalesArray = hourlySalesArray;
  this.initialTotalSales = initialTotalSales;
};

// Number generator functions
  Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

  Location.prototype.avgCookieSales = function() {
  let hourlySales = [];
  for (let i = 0; i < 14; i++) {
    hourlySales.push(Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust));
     }
      return hourlySales;
 };

  Location.prototype.totalCookieSales = function() {
    let cookieSalesSum = 0;
    for (let i = 0; i < 15; i++) {
    cookieSalesSum += this.avgCookieSales()[i];
  }
    return cookieSalesSum; 
};



Location.prototype.renderSalesData = function(){
  let table = document.getElementById('table');
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'row');
  tableHeadingElement.textContent = `${this.locationcity}:`;
  tr.appendChild(tableHeadingElement);

  for(let i = 0; i < locationHours.length; i++){
    let tableDataElement = document.createElement('td');
    tableDataElement.setAttribute('class', `${locationHours[i]}`);
    tableDataElement.textContent = (`${this.avgCookieSales()[i]}`);
    tr.appendChild(tableDataElement);
  }
  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.totalCookieSales()[i]}`;
  tr.appendChild(td);
  
}; 
  
renderTableHead(); 
   
let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.renderSalesData();

let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.renderSalesData();

let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.renderSalesData();

let paris = new Location('Paris', 20, 38, 2.3);
paris.renderSalesData();

let lima = new Location('Lima', 2, 16, 4.6);
lima.renderSalesData();
    

//Executing Code
  

renderTableFooter();


// 'use strict'

// //GLOBAL letIABLES + WINDOW INTO DOM

// let shopHours = [
//   '6am',
//   '7am',
//   '8am',
//   '9am',
//   '10am',
//   '11am',
//   '12am',
//   '1pm',
//   '2pm',
//   '3pm',
//   '4pm',
//   '5pm',
//   '6pm',
//   '7pm',
//   '8pm'
// ]

// //**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM

// // HELPER FUNCTIONS - UTILITIES

// // grabbed from MDN docs
// function randomCust (min, max) {
//   let customers = [];
//   for (let i = 0; i < shopHours.length; i++) {
//     let randomCustomers = Math.floor(Math.random() * (max - min + 1) + min)
//     customers.push(randomCustomers);
//   }
//   return customers;
// }

// function randomCookie (customersArr, cookiesSold) {
//   let cookieAvg = [];
//   console.log(customersArr);

//   for (let i = 0; i < customersArr.length; i++) {
//     let randomCookie = Math.ceil(customersArr[i] * cookiesSold);
//     cookieAvg.push(randomCookie);
//   }

//   return cookieAvg;
// }

// let shopSection = document.getElementById('shopProfiles');

// let storeData = [];

// function Store (
//   location,
//   minCustomer,
//   maxCustomer,
//   avgCookieSale
// ) {
//   this.location = location;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.avgCookieSale = avgCookieSale;
//   this.cust = randomCust(this.minCustomer, this.maxCustomer);
//   this.cookies = randomCookie(this.cust, this.avgCookieSale);

//   storeData.push(this);
// }

// Store.prototype.render = function () {
//   let articleElem = document.createElement('article')
//   shopSection.appendChild(articleElem)
//   shopSection.appendChild(articleElem)

//   let h2Elem = document.createElement('h2')
//   h2Elem.textContent = this.location
//   articleElem.appendChild(h2Elem)

//   let ulElem = document.createElement('ul')
//   articleElem.appendChild(ulElem)
//   for (let i = 0; i < shopHours.length; i++) {
//     let liElem = document.createElement('li') // <li></li>
//     liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//     ulElem.appendChild(liElem)
//   }
// }

// function renderAll () {
//   for (let i = 0; i < storeData.length; i++) {
//     // storeData[i].cust();
//     // storeData[i].cookies();
//     storeData[i].render();
    
//   }
// }

// new Store('Seattle', 23, 65, 6.3);

// renderAll();


/*********************************** */

// let seattleShop = {
//   location: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cust: [],
//   cookies: [],

//   render: function () {
//     this.cookies = randomCookie(this.cust, this.avgCookieSale);

//     shopSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li'); // <li></li>
//       liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

// ********* DOM MANIPULATION **********
// ** STEP 2: CREATE THE ELEMENT

// let articleElem = document.createElement('article');
// // ** STEP 3: GIVE CONTEXT IF NECESSARY
// // skip for articleElem

// // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
// shopSection.appendChild(articleElem);

//create h2 element

// let h2Elem = document.createElement('h2');
// h2Elem.textContent = this.location;
// articleElem.appendChild(h2Elem);
//create unordered list

// let ulElem = document.createElement('ul');
// articleElem.appendChild(ulElem);
//   for (let i = 0; i < shopHours.length; i++) {
//     let liElem = document.createElement('li'); // <li></li>
//     liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
// }
// };
// seattleShop.cust = randomCust(seattleShop.minCustomer, seattleShop.maxCustomer);
// seattleShop.render();

//**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM

// HELPER FUNCTIONS - UTILITIES

// OBJECT LITERALS

// let tokyoShop = {
//   location: 'Tokyo',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cust: [],
//   cookies: [],

//   render: function () {
//     this.cookies = randomCookie(this.cust, this.avgCookieSale);

//     // ********* DOM MANIPULATION **********
//     // ** STEP 2: CREATE THE ELEMENT

//     let articleElem = document.createElement('article');
//     // ** STEP 3: GIVE CONTEXT IF NECESSARY
//     // skip for articleElem

//     // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
//     shopSection.appendChild(articleElem);

//     //create h2 element

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     articleElem.appendChild(h2Elem);

//     //create unordered list

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li'); // <li></li>
//       liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };
// tokyoShop.cust = randomCust(tokyoShop.minCustomer, tokyoShop.maxCustomer);
// tokyoShop.render();

// let dubaiShop = {
//   location: 'Dubai',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cust: [],
//   cookies: [],

//   render: function () {
//     this.cookies = randomCookie(this.cust, this.avgCookieSale);

//     // ********* DOM MANIPULATION **********
//     // ** STEP 2: CREATE THE ELEMENT

//     let articleElem = document.createElement('article');
//     // ** STEP 3: GIVE CONTEXT IF NECESSARY
//     // skip for articleElem

//     // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
//     shopSection.appendChild(articleElem);

//     //create h2 element

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     articleElem.appendChild(h2Elem);

//     //create unordered list

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li'); // <li></li>
//       liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };
// dubaiShop.cust = randomCust(dubaiShop.minCustomer, dubaiShop.maxCustomer);
// dubaiShop.render();

// let parisShop = {
//   location: 'Paris',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cust: [],
//   cookies: [],

//   render: function () {
//     this.cookies = randomCookie(this.cust, this.avgCookieSale);

//     // ********* DOM MANIPULATION **********
//     // ** STEP 2: CREATE THE ELEMENT

//     let articleElem = document.createElement('article');
//     // ** STEP 3: GIVE CONTEXT IF NECESSARY
//     // skip for articleElem

//     // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
//     shopSection.appendChild(articleElem);

//     //create h2 element

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     articleElem.appendChild(h2Elem);

//     //create unordered list

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li'); // <li></li>
//       liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };
// parisShop.cust = randomCust(parisShop.minCustomer, parisShop.maxCustomer);
// parisShop.render();

// let limaShop = {
//   location: 'Lima',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cust: [],
//   cookies: [],

//   render: function () {
//     this.cookies = randomCookie(this.cust, this.avgCookieSale);

//     // ********* DOM MANIPULATION **********
//     // ** STEP 2: CREATE THE ELEMENT

//     let articleElem = document.createElement('article');
//     // ** STEP 3: GIVE CONTEXT IF NECESSARY
//     // skip for articleElem

//     // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
//     shopSection.appendChild(articleElem);

//     //create h2 element

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     articleElem.appendChild(h2Elem);

//     //create unordered list

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li'); // <li></li>
//       liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//   }
// };
// limaShop.cust = randomCust(limaShop.minCustomer, limaShop.maxCustomer);
// limaShop.render();

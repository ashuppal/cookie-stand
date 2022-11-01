'use strict';

// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM
// FOR LAB CREATE A GLOBAL ARRAY WITH SHOP HOURS

let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm','8pm'];

let cookieAvg = [];

function randomCookie(){
  for(let i = 0; i<shopHours.length; i++){
    let randomCookie = Math.floor(Math.random() *200);
    cookieAvg.push(randomCookie);
  }
}


//**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM

let shopSection = document.getElementById('shopProfiles');

console.dir(shopSection);


// #pragma: HELPER FUNCTIONS - UTILITIES

// grabbed from MDN docs
function randomMinCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomMaxCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// #pragma: OBJECT LITERALS

let seattleShop = {

  location: 'Seattle',
  minCustomer: 0,
  maxCustomer:0,
  avgCookieSale: 0,
  cust1: randomMinCust(1,100),
  cust2:randomMaxCust(1,100),

  render:function(){

    randomCookie();

    if(this.cust1 > this.cust2){
      this.maxCustomer = this.cust1;
      this.minCustomer = this.cust2;
    }
    else{
      this.maxCustomer = this.cust2;
      this.minCustomer = this.cust1;
    }
    // ********* DOM MANIPULATION **********
    // ** STEP 2: CREATE THE ELEMENT

    let articleElem = document.createElement('article');
    // ** STEP 3: GIVE CONTEXT IF NECESSARY
    // skip for articleElem

    // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)

    shopSection.appendChild(articleElem);


    //create h2 element

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);


    //create unordered list

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i<shopHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${cookieAvg[i]} cookies`;
      ulElem.appendChild(liElem);
    }


  }
};

seattleShop.render();

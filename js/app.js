'use strict';


function randomCoustomer(min , max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

///////////////////////////////////////////////////// Seattle
let Seattle = {
  location : 'Seattle',
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
  minCustomer : 23,
  maxCustomer : 65,
  avgCookieSales : 6.3,
  hourlyCustomer: [],
  avgCookiePerCoustomer :[],

  getHourlyCustomer: function () {
    for (let i = 0 ; i < this.workHour.length ; i++) {
      let random = randomCoustomer(this.minCustomer , this.maxCustomer);
      this.hourlyCustomer.push(random);
      console.log(this.hourlyCustomer);
    }
  },
  getAvgCoookiePerCustomer: function(){
    for (let i=0; i<this.hourlyCustomer.length; i++){
      let randomCookie = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
      this.avgCookiePerCoustomer.push(randomCookie);
      console.log(this.avgCookiePerCoustomer);
    }
  }
};

Seattle.getHourlyCustomer();
Seattle.getAvgCoookiePerCustomer();

let cookieParent =document.getElementById('cookie');
console.log(cookieParent);
let header2=document.createElement('h2');
cookieParent.appendChild(header2);
header2.textContent=Seattle.location;
let unOrdList = document.createElement('ul');
cookieParent.appendChild(unOrdList);

for (let i=0; i<Seattle.workHour.length ; i++ ) {
  let list =document.createElement('li');
  unOrdList.appendChild(list);
  list.textContent =Seattle.workHour[i] + ' ' + Seattle.avgCookiePerCoustomer[i];
}


////////////////////////////////////////////////// Tokyo

let Tokyo = {
  location : 'Tokyo',
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
  minCustomer : 3,
  maxCustomer : 24,
  avgCookieSales : 1.2,
  hourlyCustomer: [],
  avgCookiePerCoustomer :[],

  getHourlyCustomer: function () {
    for (let i = 0 ; i < this.workHour.length ; i++) {
      let random = randomCoustomer(this.minCustomer , this.maxCustomer);
      this.hourlyCustomer.push(random);
      console.log(this.hourlyCustomer);
    }
  },
  getAvgCoookiePerCustomer: function(){
    for (let i=0; i<this.hourlyCustomer.length; i++){
      let randomCookie = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
      this.avgCookiePerCoustomer.push(randomCookie);
      console.log(this.avgCookiePerCoustomer);
    }
  }
};

Tokyo.getHourlyCustomer();
Tokyo.getAvgCoookiePerCustomer();

let cookieParent2 =document.getElementById('cookie');
console.log(cookieParent2);
let header2Tokyo=document.createElement('h2');
cookieParent2.appendChild(header2Tokyo);
header2Tokyo.textContent=Tokyo.location;
let unOrdList2 = document.createElement('ul');
cookieParent2.appendChild(unOrdList2);

for (let i=0; i<Tokyo.workHour.length ; i++ ) {
  let list =document.createElement('li');
  unOrdList2.appendChild(list);
  list.textContent =Tokyo.workHour[i] + ' ' + Tokyo.avgCookiePerCoustomer[i];
}


////////////////////////////////////////////////////////////////////////////// Dubai
let Dubai = {
  location : 'Dubai',
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
  minCustomer : 11,
  maxCustomer : 38,
  avgCookieSales : 3.7,
  hourlyCustomer: [],
  avgCookiePerCoustomer :[],

  getHourlyCustomer: function () {
    for (let i = 0 ; i < this.workHour.length ; i++) {
      let random = randomCoustomer(this.minCustomer , this.maxCustomer);
      this.hourlyCustomer.push(random);
      console.log(this.hourlyCustomer);
    }
  },
  getAvgCoookiePerCustomer: function(){
    for (let i=0; i<this.hourlyCustomer.length; i++){
      let randomCookie = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
      this.avgCookiePerCoustomer.push(randomCookie);
      console.log(this.avgCookiePerCoustomer);
    }
  }
};

Dubai.getHourlyCustomer();
Dubai.getAvgCoookiePerCustomer();

let cookieParentDubai =document.getElementById('cookie');
console.log(cookieParentDubai);
let header2Dubai=document.createElement('h2');
cookieParentDubai.appendChild(header2Dubai);
header2Dubai.textContent=Dubai.location;
let unOrdListDubai = document.createElement('ul');
cookieParentDubai.appendChild(unOrdListDubai);

for (let i=0; i<Dubai.workHour.length ; i++ ) {
  let list =document.createElement('li');
  unOrdListDubai.appendChild(list);
  list.textContent =Dubai.workHour[i] + ' ' + Dubai.avgCookiePerCoustomer[i];
}

/////////////////////////////////////////////// Paris

let Paris = {
  location : 'Paris',
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
  minCustomer : 20,
  maxCustomer : 38,
  avgCookieSales : 2.3,
  hourlyCustomer: [],
  avgCookiePerCoustomer :[],

  getHourlyCustomer: function () {
    for (let i = 0 ; i < this.workHour.length ; i++) {
      let random = randomCoustomer(this.minCustomer , this.maxCustomer);
      this.hourlyCustomer.push(random);
      console.log(this.hourlyCustomer);
    }
  },
  getAvgCoookiePerCustomer: function(){
    for (let i=0; i<this.hourlyCustomer.length; i++){
      let randomCookie = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
      this.avgCookiePerCoustomer.push(randomCookie);
      console.log(this.avgCookiePerCoustomer);
    }
  }
};

Paris.getHourlyCustomer();
Paris.getAvgCoookiePerCustomer();

let cookieParentParis =document.getElementById('cookie');
console.log(cookieParentParis);
let header2Paris=document.createElement('h2');
cookieParentParis.appendChild(header2Paris);
header2Paris.textContent=Paris.location;
let unOrdListParis = document.createElement('ul');
cookieParentParis.appendChild(unOrdListParis);

for (let i=0; i<Paris.workHour.length ; i++ ) {
  let list =document.createElement('li');
  unOrdListParis.appendChild(list);
  list.textContent =Paris.workHour[i] + ' ' + Paris.avgCookiePerCoustomer[i];
}

///////////////////////////////////////////////////////// Lima

let Lima = {
  location : 'Lima',
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
  minCustomer : 2,
  maxCustomer : 16,
  avgCookieSales : 4.6,
  hourlyCustomer: [],
  avgCookiePerCoustomer :[],

  getHourlyCustomer: function () {
    for (let i = 0 ; i < this.workHour.length ; i++) {
      let random = randomCoustomer(this.minCustomer , this.maxCustomer);
      this.hourlyCustomer.push(random);
      console.log(this.hourlyCustomer);
    }
  },
  getAvgCoookiePerCustomer: function(){
    for (let i=0; i<this.hourlyCustomer.length; i++){
      let randomCookie = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
      this.avgCookiePerCoustomer.push(randomCookie);
      console.log(this.avgCookiePerCoustomer);
    }
  }
};

Lima.getHourlyCustomer();
Lima.getAvgCoookiePerCustomer();

let cookieParentLima =document.getElementById('cookie');
console.log(cookieParentLima);
let header2Lima=document.createElement('h2');
cookieParentLima.appendChild(header2Lima);
header2Lima.textContent=Lima.location;
let unOrdListLima = document.createElement('ul');
cookieParentLima.appendChild(unOrdListLima);

for (let i=0; i<Lima.workHour.length ; i++ ) {
  let list =document.createElement('li');
  unOrdListLima.appendChild(list);
  list.textContent =Lima.workHour[i] + ' ' + Lima.avgCookiePerCoustomer[i];
}

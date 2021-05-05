'use strict';

let workHour = ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let workHourHeader = ['' ,'6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Location Total'];
function randomCoustomer(min , max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let arrayTotal = [];

function Store (locationName , minCustomer , maxCustomer, avgCookieSales){
  this.locationName =locationName;
  this.minCustomer =minCustomer;
  this.maxCustomer =maxCustomer;
  this.avgCookieSales =avgCookieSales;
  this.locationTotal = 0;
  this.hourlyCustomer =[];
  this.avgCookiePerCoustomer =[];
  arrayTotal.push(this);
}

Store.prototype.getHourlyCustomer = function () {
  for (let i = 0 ; i < workHour.length ; i++) {
    this.hourlyCustomer[i] = randomCoustomer(this.minCustomer,this.maxCustomer);
  }
};
Store.prototype.getAvgCookiePerCoustomer = function (){
  for (let i=0; i<this.hourlyCustomer.length; i++){
    this.avgCookiePerCoustomer[i] = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
    this.locationTotal += this.avgCookiePerCoustomer[i];
  }
};
// table
let cookieParent=document.getElementById('cookie');
let table =document.createElement('table');
cookieParent.appendChild(table);
table.setAttribute('id','theTable');
// tr 1
let tr1=document.createElement('tr');
table.appendChild(tr1);
// head for hours
function headHours(){
  for (let i =0 ; i< workHourHeader.length ; i++) {
    let th1=document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent =workHourHeader[i];

  }
}

//////////////////////////////////////////// render constructor
Store.prototype.render = function(){
  this.getHourlyCustomer();
  this.getAvgCookiePerCoustomer();
  // data for every location
  let tr2=document.createElement('tr');
  table.appendChild(tr2);
  let td1 =document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent =this.locationName;
  ////////// avarage
  for (let i =0; i<workHour.length ; i++){
    let td2 =document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent =this.avgCookiePerCoustomer[i];
  }
  let td3 =document.createElement('td');
  tr2.appendChild(td3);
  td3.textContent =this.locationTotal;
};

headHours();

let Seattle = new Store ('Seattle' , 23 , 65 , 6.3 );
Seattle.render();
console.log(Seattle);


let Tokyo = new Store ('Tokyo' , 3 , 24 , 1.2 );
Tokyo.render();
console.log(Tokyo);

let Dubai = new Store ('Dubai' , 11 , 38 , 3.7);
Dubai.render();
console.log(Dubai);

let Paris = new Store ( 'Paris' , 20 , 38 , 2.3);
Paris.render();
console.log(Paris);

let Lima = new Store ('Lima' , 2 , 16 ,4.6);
Lima.render();
console.log(Lima);

// footer of total

function footerRow(){

  let tr2=document.createElement('tr');
  table.appendChild(tr2);
  let th2=document.createElement('th');
  tr2.appendChild(th2);
  th2.textContent ='Total';
  let dailyTotal = 0;
  for (let i = 0 ; i<workHour.length; i++){
    let hourlyTotal = 0;
    for (let j = 0 ; j < arrayTotal.length ; j++){
      hourlyTotal += arrayTotal[j].avgCookiePerCoustomer[i];
      dailyTotal += arrayTotal[j].avgCookiePerCoustomer[i];
    }
    let th3=document.createElement('th');
    tr2.appendChild(th3);
    th3.textContent=hourlyTotal;

  }
  let th3=document.createElement('th');
  tr2.appendChild(th3);
  th3.textContent =dailyTotal;
}
footerRow();


///////////////////////// form

function deleteRow() {
  let lastRow = table.rows.length;
  document.getElementById('theTable').deleteRow(lastRow - 1);
}

let cookieForm =document.getElementById('form');
cookieForm.addEventListener('submit',subEvent);

function subEvent(event){
  event.preventDefault();
  let locName = event.target.cityName.value;
  console.log(locName);
  let minCust =parseInt( event.target.minC.value);
  console.log(minCust);
  let maxCust =parseInt( event.target.maxC.value);
  console.log(maxCust);
  let avgC= parseInt(event.target.avg.value);
  console.log(avgC);
  deleteRow();
  let addNewlocation = new Store (locName , minCust , maxCust , avgC);
  addNewlocation.render();
  footerRow();
}


// ///////////////////////////////////////////////////// Seattle
// let Seattle = {
//   location : 'Seattle',
//   workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//   minCustomer : 23,
//   maxCustomer : 65,
//   avgCookieSales : 6.3,
//   total : 0 ,
//   hourlyCustomer: [],
//   avgCookiePerCoustomer :[],

//   getHourlyCustomer: function () {
//     for (let i = 0 ; i < this.workHour.length ; i++) {
//       this.hourlyCustomer[i] = randomCoustomer(this.minCustomer,this.maxCustomer);
//     }
//   },
//   getAvgCoookiePerCustomer: function(){
//     for (let i=0; i<this.hourlyCustomer.length; i++){
//       this.avgCookiePerCoustomer[i] = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
//       this.total += this.avgCookiePerCoustomer[i];
//     }
//   }
// };
// Seattle.getHourlyCustomer();
// Seattle.getAvgCoookiePerCustomer();
// console.log(Seattle);

// let cookieParent =document.getElementById('cookie');
// console.log(cookieParent);
// let header2=document.createElement('h2');
// cookieParent.appendChild(header2);
// header2.textContent=Seattle.location;
// let unOrdList = document.createElement('ul');
// cookieParent.appendChild(unOrdList);

// for (let i=0; i<Seattle.workHour.length ; i++ ) {
//   let list =document.createElement('li');
//   unOrdList.appendChild(list);
//   list.textContent =`${Seattle.workHour[i]} ${Seattle.avgCookiePerCoustomer[i]}`;
// }

// let list =document.createElement('li');
// unOrdList.appendChild(list);
// list.textContent =`Total = ${Seattle.total}`;


// ////////////////////////////////////////////////// Tokyo

// let Tokyo = {
//   location : 'Tokyo',
//   workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//   minCustomer : 3,
//   maxCustomer : 24,
//   avgCookieSales : 1.2,
//   total : 0 ,
//   hourlyCustomer: [],
//   avgCookiePerCoustomer :[],

//   getHourlyCustomer: function () {
//     for (let i = 0 ; i < this.workHour.length ; i++) {
//       this.hourlyCustomer[i] = randomCoustomer(this.minCustomer,this.maxCustomer);
//     }
//   },
//   getAvgCoookiePerCustomer: function(){
//     for (let i=0; i<this.hourlyCustomer.length; i++){
//       this.avgCookiePerCoustomer[i] = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
//       this.total += this.avgCookiePerCoustomer[i];
//     }
//   }
// };

// Tokyo.getHourlyCustomer();
// Tokyo.getAvgCoookiePerCustomer();
// console.log(Tokyo);

// let cookieParent2 =document.getElementById('cookie');
// console.log(cookieParent2);
// let header2Tokyo=document.createElement('h2');
// cookieParent2.appendChild(header2Tokyo);
// header2Tokyo.textContent=Tokyo.location;
// let unOrdList2 = document.createElement('ul');
// cookieParent2.appendChild(unOrdList2);

// for (let i=0; i<Tokyo.workHour.length ; i++ ) {
//   let list =document.createElement('li');
//   unOrdList2.appendChild(list);
//   list.textContent =`${Tokyo.workHour[i]}  ${Tokyo.avgCookiePerCoustomer[i]}`;
// }

// let list2 =document.createElement('li');
// unOrdList2.appendChild(list2);
// list2.textContent =`Total = ${Tokyo.total}`;


// ////////////////////////////////////////////////////////////////////////////// Dubai
// let Dubai = {
//   location : 'Dubai',
//   workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//   minCustomer : 11,
//   maxCustomer : 38,
//   avgCookieSales : 3.7,
//   total : 0 ,
//   hourlyCustomer: [],
//   avgCookiePerCoustomer :[],

//   getHourlyCustomer: function () {
//     for (let i = 0 ; i < this.workHour.length ; i++) {
//       this.hourlyCustomer[i] = randomCoustomer(this.minCustomer,this.maxCustomer);
//     }
//   },
//   getAvgCoookiePerCustomer: function(){
//     for (let i=0; i<this.hourlyCustomer.length; i++){
//       this.avgCookiePerCoustomer[i] = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
//       this.total += this.avgCookiePerCoustomer[i];
//     }
//   }
// };

// Dubai.getHourlyCustomer();
// Dubai.getAvgCoookiePerCustomer();
// console.log(Dubai);

// let cookieParentDubai =document.getElementById('cookie');
// console.log(cookieParentDubai);
// let header2Dubai=document.createElement('h2');
// cookieParentDubai.appendChild(header2Dubai);
// header2Dubai.textContent=Dubai.location;
// let unOrdListDubai = document.createElement('ul');
// cookieParentDubai.appendChild(unOrdListDubai);

// for (let i=0; i<Dubai.workHour.length ; i++ ) {
//   let list =document.createElement('li');
//   unOrdListDubai.appendChild(list);
//   list.textContent =`${Dubai.workHour[i]}  ${Dubai.avgCookiePerCoustomer[i]}`;
// }

// let list3 =document.createElement('li');
// unOrdListDubai.appendChild(list3);
// list3.textContent =`Total = ${Dubai.total}`;




// /////////////////////////////////////////////// Paris

// let Paris = {
//   location : 'Paris',
//   workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//   minCustomer : 20,
//   maxCustomer : 38,
//   avgCookieSales : 2.3,
//   total : 0 ,
//   hourlyCustomer: [],
//   avgCookiePerCoustomer :[],

//   getHourlyCustomer: function () {
//     for (let i = 0 ; i < this.workHour.length ; i++) {
//       this.hourlyCustomer[i] = randomCoustomer(this.minCustomer,this.maxCustomer);
//     }
//   },
//   getAvgCoookiePerCustomer: function(){
//     for (let i=0; i<this.hourlyCustomer.length; i++){
//       this.avgCookiePerCoustomer[i] = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
//       this.total += this.avgCookiePerCoustomer[i];
//     }
//   }
// };

// Paris.getHourlyCustomer();
// Paris.getAvgCoookiePerCustomer();
// console.log(Paris);

// let cookieParentParis =document.getElementById('cookie');
// console.log(cookieParentParis);
// let header2Paris=document.createElement('h2');
// cookieParentParis.appendChild(header2Paris);
// header2Paris.textContent=Paris.location;
// let unOrdListParis = document.createElement('ul');
// cookieParentParis.appendChild(unOrdListParis);

// for (let i=0; i<Paris.workHour.length ; i++ ) {
//   let list =document.createElement('li');
//   unOrdListParis.appendChild(list);
//   list.textContent =`${Paris.workHour[i]}  ${Paris.avgCookiePerCoustomer[i]}`;
// }

// let list4 =document.createElement('li');
// unOrdListParis.appendChild(list4);
// list4.textContent =`Total = ${Paris.total}`;

// ///////////////////////////////////////////////////////// Lima

// let Lima = {
//   location : 'Lima',
//   workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//   minCustomer : 2,
//   maxCustomer : 16,
//   avgCookieSales : 4.6,
//   total : 0 ,
//   hourlyCustomer: [],
//   avgCookiePerCoustomer :[],

//   getHourlyCustomer: function () {
//     for (let i = 0 ; i < this.workHour.length ; i++) {
//       this.hourlyCustomer[i] = randomCoustomer(this.minCustomer,this.maxCustomer);
//     }
//   },
//   getAvgCoookiePerCustomer: function(){
//     for (let i=0; i<this.hourlyCustomer.length; i++){
//       this.avgCookiePerCoustomer[i] = Math.floor(this.hourlyCustomer[i] * this.avgCookieSales);
//       this.total += this.avgCookiePerCoustomer[i];
//     }
//   }
// };

// Lima.getHourlyCustomer();
// Lima.getAvgCoookiePerCustomer();
// console.log(Lima);

// let cookieParentLima =document.getElementById('cookie');
// console.log(cookieParentLima);
// let header2Lima=document.createElement('h2');
// cookieParentLima.appendChild(header2Lima);
// header2Lima.textContent=Lima.location;
// let unOrdListLima = document.createElement('ul');
// cookieParentLima.appendChild(unOrdListLima);

// for (let i=0; i<Lima.workHour.length ; i++ ) {
//   let list =document.createElement('li');
//   unOrdListLima.appendChild(list);
//   list.textContent =`${Lima.workHour[i]}  ${Lima.avgCookiePerCoustomer[i]}`;
// }

// let list5 =document.createElement('li');
// unOrdListLima.appendChild(list5);
// list5.textContent =`Total = ${Tokyo.total}`;

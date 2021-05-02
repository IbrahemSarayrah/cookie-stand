'use strict';

let Seattle = {
  location : 'Seattle',
  minCustomer : 23,
  maxCustomer : 65,
  avgCookieSales : 6.3,
  hourlyCustomer: [],
  avgCookiePerCoustomer :[],
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am',],
  randomCoustomer: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  getHourlyCustomer: function () {
    for (let i = 0 ; i < this.workHour ; i++) {
   
    }

  }
};


console.log(Seattle.hourlyCustomer);
console.log(Seattle.randomCoustomer());


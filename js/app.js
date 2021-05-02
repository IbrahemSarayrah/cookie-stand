'use strict';


function randomCoustomer(min , max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
  location : 'Seattle',
  workHour : ['6am', '7am' ,'8am' ,'9am' ,'10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am',],
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



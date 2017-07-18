'use strict';
//1st location
// var storeDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function round(num, places) {
  return parseFloat(num.toFixed(places));
}


var pike = {

  name: '1st and Pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCustomers: 0,
  totalDailyCookies: 0,


  // var pikeUL = document.getElementById('pike');
  // for(var i = 0; i < this.storeHours.length; i++){
  // var liEl = document.createElement('li');
  // liEl.textContent = days[i] + ': ' + this.storeHours[i];
  // pikeUL.appendChild(liEl);

  randomNum: function (minCustPerHr, maxCustPerHr){
    return Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr);

  },

  generateCustPerHr: function() {
    for(var i = 0; i < storeHours.length; i++) {

      var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
      this.customersEachHour.push(tempCust);
      this.totalDailyCustomers += tempCust;
    }
    console.log(this.customersEachHour, 'Total Daily Customers Total');
  },

  randomCookiesPerHr: function(){
    for(var i = 0; i < this.customersEachHour.length; i++) {
      var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
      this.cookiesEachHour.push(tempCookies);
      this.totalDailyCookies += tempCookies;
    }

    console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
    console.log(this.cookiesEachHour);

  },
  render: function(){
    var pikelist = document.getElementById('pike');
    for(var i = 0; i < storeHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' +
      this.cookiesEachHour[i] + ' cookies';
      pikelist.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    pikelist.appendChild(totalLiEl);
  }

};

var tempCustHr = pike.generateCustPerHr();
var tempCookiesPerHour = pike.randomCookiesPerHr();
var callRender = pike.render();


//2nd location

var sta = {

  name: 'SeaTacAirport',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgCookiesPerCust: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCustomers: 0,
  totalDailyCookies: 0,

  randomNum: function (minCustPerHr, maxCustPerHr){
    return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
  },

  generateCustPerHr: function() {
    for(var i = 0; i < storeHours.length; i++) {

      var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
      this.customersEachHour.push(tempCust);
      this.totalDailyCustomers += tempCust;
    }
    console.log(this.customersEachHour, 'Total Daily Customers Total');
  },

  randomCookiesPerHr: function(){
    for(var i = 0; i < this.customersEachHour.length; i++) {
      var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
      this.cookiesEachHour.push(tempCookies);
      this.totalDailyCookies += tempCookies;
    }

    console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
    console.log(this.cookiesEachHour);
},

  render: function(){
    var stalist = document.getElementById('sta');
    for(var i = 0; i < storeHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' +
      this.cookiesEachHour[i] + ' cookies';
      stalist.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    stalist.appendChild(totalLiEl);
  }

  };

  var tempCustHr = sta.generateCustPerHr();
  var tempCookiesPerHour = sta.randomCookiesPerHr();
  var callRender = sta.render();


//3rd location

  var seaCenter = {

    name: 'Seattle Center',
    minCustPerHr: 11,
    maxCustPerHr: 38,
    avgCookiesPerCust: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCustomers: 0,
    totalDailyCookies: 0,

    randomNum: function (minCustPerHr, maxCustPerHr){
      return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
    },

    generateCustPerHr: function() {
      for(var i = 0; i < storeHours.length; i++) {

        var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
        this.customersEachHour.push(tempCust);
        this.totalDailyCustomers += tempCust;
      }
      console.log(this.customersEachHour, 'Total Daily Customers Total');
    },

    randomCookiesPerHr: function(){
      for(var i = 0; i < this.customersEachHour.length; i++) {
        var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
        this.cookiesEachHour.push(tempCookies);
        this.totalDailyCookies += tempCookies;
      }

      console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
      console.log(this.cookiesEachHour);
  },

    render: function(){
      var seaCenterlist = document.getElementById('seaCenter');
      for(var i = 0; i < storeHours.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' +
        this.cookiesEachHour[i] + ' cookies';
        seaCenterlist.appendChild(liEl);
      }
      var totalLiEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      seaCenterlist.appendChild(totalLiEl);
    }

    };

    var tempCustHr = seaCenter.generateCustPerHr();
    var tempCookiesPerHour = seaCenter.randomCookiesPerHr();
    var callRender = seaCenter.render();


//4th location

var cap = {

  name: 'Capitol Hill',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgCookiesPerCust: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCustomers: 0,
  totalDailyCookies: 0,

  randomNum: function (minCustPerHr, maxCustPerHr){
    return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
  },

  generateCustPerHr: function() {
    for(var i = 0; i < storeHours.length; i++) {

      var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
      this.customersEachHour.push(tempCust);
      this.totalDailyCustomers += tempCust;
    }
    console.log(this.customersEachHour, 'Total Daily Customers Total');
  },

  randomCookiesPerHr: function(){
    for(var i = 0; i < this.customersEachHour.length; i++) {
      var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
      this.cookiesEachHour.push(tempCookies);
      this.totalDailyCookies += tempCookies;
    }

    console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
    console.log(this.cookiesEachHour);
},

  render: function(){
    var caplist = document.getElementById('cap');
    for(var i = 0; i < storeHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' +
      this.cookiesEachHour[i] + ' cookies';
      caplist.appendChild(liEl);
    }
    var totalLiEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    caplist.appendChild(totalLiEl);
  }

  };

  var tempCustHr = cap.generateCustPerHr();
  var tempCookiesPerHour = cap.randomCookiesPerHr();
  var callRender = cap.render();


  //5

  var alki = {

    name: 'Alki',
    minCustPerHr: 20,
    maxCustPerHr: 38,
    avgCookiesPerCust: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCustomers: 0,
    totalDailyCookies: 0,

    randomNum: function (minCustPerHr, maxCustPerHr){
      return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
    },

    generateCustPerHr: function() {
      for(var i = 0; i < storeHours.length; i++) {

        var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
        this.customersEachHour.push(tempCust);
        this.totalDailyCustomers += tempCust;
      }
      console.log(this.customersEachHour, 'Total Daily Customers Total');
    },

    randomCookiesPerHr: function(){
      for(var i = 0; i < this.customersEachHour.length; i++) {
        var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
        this.cookiesEachHour.push(tempCookies);
        this.totalDailyCookies += tempCookies;
      }

      console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
      console.log(this.cookiesEachHour);
  },

    render: function(){
      var alkilist = document.getElementById('alki');
      for(var i = 0; i < storeHours.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = storeHours[i] + ': ' +
        this.cookiesEachHour[i] + ' cookies';
        alkilist.appendChild(liEl);
      }
      var totalLiEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      alkilist.appendChild(totalLiEl);
    }

    };

    var tempCustHr = alki.generateCustPerHr();
    var tempCookiesPerHour = alki.randomCookiesPerHr();
    var callRender = alki.render();

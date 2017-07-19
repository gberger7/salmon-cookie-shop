'use strict';

var allStores = [];

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function round(num,places) {
  return parseFloat(num.toFixed(places));
}

var storeTable = document.getElementById('stores');

function Store(name, minCustPerHr, maxCustPerHr, avgCookiesPerCust){
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCustomers = 0;
  this.totalDailyCookies = 0;
  allStores.push(this);
  this.randomNum = function (minCustPerHr, maxCustPerHr){
    return Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) +1) + minCustPerHr)
  };
  this.generateCustPerHr = function() {
    for(var i = 0; i < storeHours.length; i++) {

      var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
      this.customersEachHour.push(tempCust);
      this.totalDailyCustomers += tempCust;
    }
    console.log(this.customersEachHour, 'Total Daily Customers Total');
  };

  this.randomCookiesPerHr = function(){
    for(var i = 0; i < this.customersEachHour.length; i++) {
      var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
      this.cookiesEachHour.push(tempCookies);
      this.totalDailyCookies += tempCookies;
    }

    console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
    console.log(this.cookiesEachHour);
  };

  this.render = function() {

    for(var i = 0; i < allStores.length; i++) {

      var trEl = document.createElement('tr');

      var tdEl = document.createElement('td');
      tdEl.textContent = allStores[i].name;
      trEl.appendChild(tdEl);

      var totaltdEl = document.createElement('td');
      totaltdEl.textContent = allStores[i].totalDailyCookies;
      trEl.appendChild(totaltdEl);

      for(var j = 0; j < storeHours.length; j++) {
        var cookiestdEl = document.createElement('td');
        console.log(allStores, 'ALL STORES INSIIDE J LOOP');
        cookiestdEl.textContent = allStores[i].cookiesEachHour[j];
        trEl.appendChild(cookiestdEl);
      }
    }
    storeTable.appendChild(trEl);
  };

  this.generateCustPerHr();
  this.randomCookiesPerHr();
};


new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 37, 3.8);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function makeHeaderRow(){

  var trEl = document.createElement('tr');

  var emptythEl = document.createElement('th');
  emptythEl.textContent = '';
  trEl.appendChild(emptythEl);

  for(var i = 0; i < storeHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }

  var dailyLocationTotalthEl = document.createElement('th');
  dailyLocationTotalthEl.textContent = 'Daily Location Total';
  trEl.appendChild(dailyLocationTotalthEl);

  storeTable.appendChild(trEl);
}

makeHeaderRow();
// +++++++++++++++++

function renderShops() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}
renderShops();

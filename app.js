'use strict';

var allStores = [];

var submitButton = document.getElementById('cookieCounter');

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
    return Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr);
  };
  // console.log(allStores);
  this.generateCustPerHr = function() {
    for(var i = 0; i < storeHours.length; i++) {

      var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
      this.customersEachHour.push(tempCust);
      this.totalDailyCustomers += tempCust;
    }
    // console.log(this.customersEachHour, 'Total Daily Customers Total');
  };

  this.randomCookiesPerHr = function(){
    for(var i = 0; i < storeHours.length; i++) {
      var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
      this.cookiesEachHour.push(tempCookies);
      this.totalDailyCookies += tempCookies;
    }

    // console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
    // console.log(this.cookiesEachHour);
  };

  this.render = function() {

    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);


    for(var j = 0; j < storeHours.length; j++) {
      var cookiestdEl = document.createElement('td');
      cookiestdEl.textContent = this.cookiesEachHour[j];
      trEl.appendChild(cookiestdEl);
    }
    var totaltdEl = document.createElement('td');
    totaltdEl.textContent = this.totalDailyCookies;
    trEl.appendChild(totaltdEl);
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

function makeFooterRow(){

  var trEl = document.createElement('tr');

  // var footerRow = document.createElement('tr');
  // footerRow.textContent = 'Location';
  // trEl.appendChild(footerRow);


  var totalstdEl = document.createElement('td');
  totalstdEl.textContent = 'Totals';
  trEl.appendChild(totalstdEl);
  // var totalHourlySales = [];

  for(var i = 0; i < storeHours.length; i++){
    var hourlyTotal = 0;
    for(var j  = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesEachHour[i];
    }

    var hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    trEl.appendChild(hourlyTotalTd);
  }

  // table.appendChild(footer);
  // console.log(totalstdEl, 'Total');
  // storeTable.appendChild(trEl);
  var grandTotal = 0;
  for(var k = 0; k < allStores.length; k++){
    grandTotal += allStores[k].totalDailyCookies;
  }
  var grandTotaltd = document.createElement('td');
  grandTotaltd.textContent = grandTotal;
  trEl.appendChild(grandTotaltd);

  storeTable.appendChild(trEl);

}

makeHeaderRow();


function renderShops() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();

  }
}
renderShops();
makeFooterRow();



//creating form

function submitNew(event){
  event.preventDefault();
  if(!location === '' || !minC === '' || !maxC === '' || !avgCC === ''){
    alert('Boxes need to have some content');
    return;
  }
  // var cookieCounter = document.getElementById('cookie-counter');
  var location = (event.target.location.value);
  var minC = parseInt(event.target.min.value);
  var maxC = parseInt(event.target.max.value);
  var avgCC = parseInt(event.target.avg.value);

  new Store(location, minC, maxC,avgCC);
  // allLocations.push(newStore);

  stores.innerHTML = '';
  makeHeaderRow();
  renderShops();

}

cookieCounter.addEventListener('submit', submitNew);

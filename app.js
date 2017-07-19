'use strict';

var allStores = [];

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeTable = document.getElementById('stores');

function Store(name, minCustPerHr, maxCustPerHr, avgCookiesPerCust){
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersEachHour = [],
  this.cookiesEachHour = [],
  this.totalDailyCustomers = 0,
  this.totalDailyCookies = 0,

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

  // this.customersEachHour = []
  // this.cookiesEachHour = []
  // this.totalDailyCustomers = 0;
  // this.totalDailyCookies = 0;
  // storeLocations.push(this);
  //
  // this.render = function() {
  //   var trEl = document.createElement('tr');
  //
  //   var tdEl = document.createElement('td');
  //   tdEl.textContent = this.name;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.minCustPerHr;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.maxCustPerHr;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.avgCookiesPerCust;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.customersEachHour;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.cookiesEachHour;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.totalDailyCustomers;
  //   trEl.appendChild(tdEl);
  //
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = this.totalDailyCookies;
  //   trEl.appendChild(tdEl);
  //
  //   storeTable.appendChild(trEl);
  // };
  allStores.push(this);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 37, 3.8);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function makeHeaderRow(){
  for(var i = 0; i < hours.length; i++);

  var thEl = document.createElement('th');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeHours;
  trEl.appendChild(tdEl);


  storeTable.appendChild(trEl);
}

makeHeaderRow();
hourRows();


// IGNORE LINE 65; WE WILL TALK ABOUT IT WEDNESDAY
// Let's add a render() method to the constructor's prototype

// We need a separate function to make the table header

// function makeHeaderRow(){
//   for(var i = 0; i < hours.length, i++);
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Name';
//   trEl.appendChild(thEl);
//
//   thEl = document.createElement('th');
//   thEl.textContent = 'Color';
//   trEl.appendChild(thEl);
//
//   thEl = document.createElement('th');
//   thEl.textContent = 'Tail Size';
//   trEl.appendChild(thEl);
//
//   catTable.appendChild(trEl);
// }


// It would be nice to have a single function that renders all of the individual cat rows

// function hourRows() {
//   for(var i = 0; i < allCats.length; i++){
//     allCats[i].render();
//   }
// }

//1st location
// var storeDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// function round(num, places) {
//   return parseFloat(num.toFixed(places));
// }
//
//
// var pike = {
//
//   name: '1st and Pike',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgCookiesPerCust: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCustomers: 0,
//   totalDailyCookies: 0,
//
//
//   randomNum: function (minCustPerHr, maxCustPerHr){
//     return Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr);
//
//   },
//
//   generateCustPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//
//       var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
//       this.customersEachHour.push(tempCust);
//       this.totalDailyCustomers += tempCust;
//     }
//     console.log(this.customersEachHour, 'Total Daily Customers Total');
//   },
//
//   randomCookiesPerHr: function(){
//     for(var i = 0; i < this.customersEachHour.length; i++) {
//       var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
//       this.cookiesEachHour.push(tempCookies);
//       this.totalDailyCookies += tempCookies;
//     }
//
//     console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
//     console.log(this.cookiesEachHour);
//
//   },
//   render: function(){
//     var pikelist = document.getElementById('pike');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' +
//       this.cookiesEachHour[i] + ' cookies';
//       pikelist.appendChild(liEl);
//     }
//     var totalLiEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     pikelist.appendChild(totalLiEl);
//   }
//
// };
//
// var tempCustHr = pike.generateCustPerHr();
// var tempCookiesPerHour = pike.randomCookiesPerHr();
// var callRender = pike.render();
//
//
// //2nd location
//
// var sta = {
//
//   name: 'SeaTac Airport',
//   minCustPerHr: 3,
//   maxCustPerHr: 24,
//   avgCookiesPerCust: 1.2,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCustomers: 0,
//   totalDailyCookies: 0,
//
//   randomNum: function (minCustPerHr, maxCustPerHr){
//     return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
//   },
//
//   generateCustPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//
//       var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
//       this.customersEachHour.push(tempCust);
//       this.totalDailyCustomers += tempCust;
//     }
//     console.log(this.customersEachHour, 'Total Daily Customers Total');
//   },
//
//   randomCookiesPerHr: function(){
//     for(var i = 0; i < this.customersEachHour.length; i++) {
//       var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
//       this.cookiesEachHour.push(tempCookies);
//       this.totalDailyCookies += tempCookies;
//     }
//
//     console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
//     console.log(this.cookiesEachHour);
// },
//
//   render: function(){
//     var stalist = document.getElementById('sta');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' +
//       this.cookiesEachHour[i] + ' cookies';
//       stalist.appendChild(liEl);
//     }
//     var totalLiEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     stalist.appendChild(totalLiEl);
//   }
//
//   };
//
//   var tempCustHr = sta.generateCustPerHr();
//   var tempCookiesPerHour = sta.randomCookiesPerHr();
//   var callRender = sta.render();
//
//
// //3rd location
//
//   var seaCenter = {
//
//     name: 'Seattle Center',
//     minCustPerHr: 11,
//     maxCustPerHr: 38,
//     avgCookiesPerCust: 3.7,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCustomers: 0,
//     totalDailyCookies: 0,
//
//     randomNum: function (minCustPerHr, maxCustPerHr){
//       return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
//     },
//
//     generateCustPerHr: function() {
//       for(var i = 0; i < storeHours.length; i++) {
//
//         var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
//         this.customersEachHour.push(tempCust);
//         this.totalDailyCustomers += tempCust;
//       }
//       console.log(this.customersEachHour, 'Total Daily Customers Total');
//     },
//
//     randomCookiesPerHr: function(){
//       for(var i = 0; i < this.customersEachHour.length; i++) {
//         var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
//         this.cookiesEachHour.push(tempCookies);
//         this.totalDailyCookies += tempCookies;
//       }
//
//       console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
//       console.log(this.cookiesEachHour);
//   },
//
//     render: function(){
//       var seaCenterlist = document.getElementById('seaCenter');
//       for(var i = 0; i < storeHours.length; i++){
//         var liEl = document.createElement('li');
//         liEl.textContent = storeHours[i] + ': ' +
//         this.cookiesEachHour[i] + ' cookies';
//         seaCenterlist.appendChild(liEl);
//       }
//       var totalLiEl = document.createElement('li');
//       liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//       seaCenterlist.appendChild(totalLiEl);
//     }
//
//     };
//
//     var tempCustHr = seaCenter.generateCustPerHr();
//     var tempCookiesPerHour = seaCenter.randomCookiesPerHr();
//     var callRender = seaCenter.render();
//
//
// //4th location
//
// var cap = {
//
//   name: 'Capitol Hill',
//   minCustPerHr: 20,
//   maxCustPerHr: 38,
//   avgCookiesPerCust: 2.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCustomers: 0,
//   totalDailyCookies: 0,
//
//   randomNum: function (minCustPerHr, maxCustPerHr){
//     return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
//   },
//
//   generateCustPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//
//       var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
//       this.customersEachHour.push(tempCust);
//       this.totalDailyCustomers += tempCust;
//     }
//     console.log(this.customersEachHour, 'Total Daily Customers Total');
//   },
//
//   randomCookiesPerHr: function(){
//     for(var i = 0; i < this.customersEachHour.length; i++) {
//       var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
//       this.cookiesEachHour.push(tempCookies);
//       this.totalDailyCookies += tempCookies;
//     }
//
//     console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
//     console.log(this.cookiesEachHour);
// },
//
//   render: function(){
//     var caplist = document.getElementById('cap');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' +
//       this.cookiesEachHour[i] + ' cookies';
//       caplist.appendChild(liEl);
//     }
//     var totalLiEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     caplist.appendChild(totalLiEl);
//   }
//
//   };
//
//   var tempCustHr = cap.generateCustPerHr();
//   var tempCookiesPerHour = cap.randomCookiesPerHr();
//   var callRender = cap.render();
//
//
//   //5th location
//
//   var alki = {
//
//     name: 'Alki',
//     minCustPerHr: 2,
//     maxCustPerHr: 16,
//     avgCookiesPerCust: 4.6,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCustomers: 0,
//     totalDailyCookies: 0,
//
//     randomNum: function (minCustPerHr, maxCustPerHr){
//       return (Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) + 1) + minCustPerHr));
//     },
//
//     generateCustPerHr: function() {
//       for(var i = 0; i < storeHours.length; i++) {
//
//         var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
//         this.customersEachHour.push(tempCust);
//         this.totalDailyCustomers += tempCust;
//       }
//       console.log(this.customersEachHour, 'Total Daily Customers Total');
//     },
//
//     randomCookiesPerHr: function(){
//       for(var i = 0; i < this.customersEachHour.length; i++) {
//         var tempCookies = round((this.customersEachHour[i] * this.avgCookiesPerCust), 0);
//         this.cookiesEachHour.push(tempCookies);
//         this.totalDailyCookies += tempCookies;
//       }
//
//       console.log(this.totalDailyCookies, 'Total Daily Cookie Total');
//       console.log(this.cookiesEachHour);
//   },
//
//     render: function(){
//       var alkilist = document.getElementById('alki');
//       for(var i = 0; i < storeHours.length; i++){
//         var liEl = document.createElement('li');
//         liEl.textContent = storeHours[i] + ': ' +
//         this.cookiesEachHour[i] + ' cookies';
//         alkilist.appendChild(liEl);
//       }
//       var totalLiEl = document.createElement('li');
//       liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//       alkilist.appendChild(totalLiEl);
//     }
//
//     };
//
//     var tempCustHr = alki.generateCustPerHr();
//     var tempCookiesPerHour = alki.randomCookiesPerHr();
//     var callRender = alki.render();

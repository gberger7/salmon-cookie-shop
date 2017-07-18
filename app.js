'use strict';

// var storeDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



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
    return Math.floor(Math.random() * ((maxCustPerHr - minCustPerHr) +1) + minCustPerHr)
  },

  generateCustPerHr: function() {
    for(var i = 0; i < storeHours.length; i++) {

    var tempCust = this.randomNum(this.minCustPerHr, this.maxCustPerHr);
      this.customersEachHour.push(tempCust);
      this.totalDailyCustomers += tempCust;
    }
    console.log(this.customersEachHour);
  },

  randomCookiesPerHr: function(){
    for(var i = 0; i < this.customersEachHour.length; i++) {
    var tempCookies = this.customersEachHour[i] * this.avgCookiesPerCust;
    this.cookiesEachHour.push(tempCookies);
    this.totalDailyCookies += tempCookies;
    }

    console.log(this.totalDailyCookies);
    console.log(this.cookiesEachHour);

  },


};
console.log(generateCustPerHr());
var tempCustHr = pike.generateCustPerHr();
var tempCookiesPerHour = pike.randomCookiesPerHr();
// var tempcookies = pike.randomCookies(pike.minCustPerHr, pike.maxCustPerHr)
// console.log('average cookies', tempcookies);


// var  = {
//    minCustPerHr: 10,
//    maxCustPerHr: 100,
//    avgCookiesPerCust: 3.4,
//    customersEachHour: [],
//    cookiesEachHour: [],
//    totalCoookiesPerDay: 0;
//    (methods to calculate customer and cookie totals)
//    (method to calculate per hour)
//    (create sums)
//// 3. Append it to a certain place in the DOM
// parentElement.appendChild(childElement)
// }

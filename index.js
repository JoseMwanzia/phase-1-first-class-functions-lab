// Code your solution in this file!

const drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFistTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}
console.log(returnFistTwoDrivers(drivers));


const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice (0, 2)
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice (-2)
}
console.log(returnLastTwoDrivers(drivers));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(number) {
    return function(){
    return number ** 2;  
 };
}


const fare =function createFareMultiplier(number) {
    return function () { 
    return number ** 2;
 };
};




function fareDoubler (fare) {
    let doubled = fare * 2;
    return fare * 2;
}

function fareTripler(fare) {
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, myFunction) {
     if (myFunction==returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0, 2);
      }
    else if (myFunction==returnLastTwoDrivers) {
        return arrayOfDrivers.slice(-2);
    }
}

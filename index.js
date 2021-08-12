// Code your solution in this file!
function returnFirstTwoDrivers(){
        const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
        return drivers.slice(0,2);
}

function returnLastTwoDrivers(){
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int)
{
    return function(fare){
        return int*fare;
    }
}

const fareDoubler = function(double){
    return double * 2
}

const fareTripler = function(triple){
    return triple * 3
}

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}
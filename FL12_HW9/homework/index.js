// 1. convert('1', 2, 3, '4') // [1, '2', '3', 4]
function convert(val0, val1, val2, val3){
    let newArray = new Array(val0, val1, val2, val3);

    let i = 0;
    for (let element of newArray) {
        if (Number.isInteger(element)) {
            newArray[i] = '' + element;
        } else {
            newArray[i] = Number.parseInt(element);
        }
        i++;
    }
    return newArray;
}
convert('1', 2, 3, '4');


// 2.executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6
function executeForEach (array, callback) {
    for (let el in array) {
        callback(array[el]);
    }
}
executeForEach([1,2,3], function (el){
    console.log(el * 2)
});


// 3.mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]
function mapArray(array, callback){
    let result = [];
    let i = 0;
    executeForEach(array, function (element) {
        let res = Number.parseInt(element);
        result[i] = callback(res);
        i++;
    });
    return result;
}
mapArray([2, '5', 8], function(el) { 
    return el + 3
});


// 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
function filterArray (array){
    let i = 0;
    let result = [];
    executeForEach(array, function (el) {
        if (el % 2 === 0) {
            result[i] = el;
            i++;
        }
    });
    return result;
}
filterArray([2, 5, 8]);


// flipOver('hey world') // 'dlrow yeh'
function flipOver(str){ 
   return str.split('').reverse().join('') 
} 
flipOver('hey world');


// 6. Write a function which creates an array from the given range of numbers
function makeListFromRange (range){
    let result = [];
    let j = 0;
    for (let i = range[0]; i <= range[1]; i++) {
        result[j] = i;
        j++;
    }
    return result;
}
makeListFromRange([2, 7]);



// 7. Write a function that accepts an array of object and returns new array of values by passed key name.
function getArrayKeys(array, needle){
    let result = [];
    let i = 0;
    executeForEach(array, function (el) {
        result[i] = el[needle];
        i++;
    });
    console.log(result);
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
getArrayKeys(actors, 'name');




// 8. Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 30 with '*'. It should return a new array with numbers and '*' instead of numbers lowest from 30. Reuse function from task 3.
function substitute(numbers){
    let mapped = [];
    let i = 0;
    mapArray(numbers, function (el) {
        if (el > 30) {
            mapped[i] = el;
        } else {
            mapped[i] = '*';
        }
        i++;
    });
    return mapped;
}
substitute([58, 14, 48, 2, 31, 29]);


// 9. Write a function which returns a day number that was some amount of days ago from the passed date.
function getPastDay(date, daysPast){
    let oldDate = date.getDate() - daysPast;
    let newDate = new Date();
    newDate.setDate(oldDate);
    return newDate;
}
// const date = new Date(2019, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)



// 10. Write a function that formats a date in such format "YYYY/M/d HH:mm".
function formatDate(date){
    return date.getFullYear() + '/' 
    + date.getMonth() + '/'
    + date.getDay() + ' ' 
    + date.getHours() + ':' 
    + date.getMinutes();
}
// console.log(formatDate(new Date('6/15/2018 09:15:00')));

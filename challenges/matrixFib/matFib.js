'use strict';

let finMatValidator = module.exports = {};


finMatValidator.matrixSum = (arr) => {
    let newArr = [];
    for (let row = 0; row < arr.length; row++) {
        let sum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            sum += arr[row][col];
        }
        newArr.push(sum);
    }
    // console.log(`The summed array is [${sumArr}]`);
    return newArr;
}


// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = [];


finMatValidator.fibFun = (n) => {
    let arr = [0, 1];
    for (let i = arr.length; i < n + 1; i++) {
        let sumItem = arr[i - 2] + arr[i - 1];
        arr.push(sumItem)
        //   newArr.push(sumItem);
    }
    // console.log('arr : ', arr);
    return arr;
}

//   fibFun(10);

finMatValidator.isNumber = (num)=>
{
    return typeof num === 'number';
}
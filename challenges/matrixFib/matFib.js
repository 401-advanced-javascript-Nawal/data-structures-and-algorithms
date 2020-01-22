'use strict';

let finMatValidator = module.exports = {};


finMatValidator.matrixArrSum = (arr) => {
    let sumArr = [];
    for (let row = 0; row < arr.length; row++) {
        let sum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            sum += arr[row][col];
        }
        sumArr.push(sum);
    }
    // console.log(`The summed array is [${sumArr}]`);
    return sumArr;
}
//   matrixArrSum([[1,2,5],[3,5, 4]]);


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
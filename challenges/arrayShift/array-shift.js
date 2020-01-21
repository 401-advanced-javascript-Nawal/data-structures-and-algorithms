'use strict';

let shiftArr =[];
// Sorted before and after added 
function insertShiftArray(array) {
    
    shiftArr = array.sort((a,b) =>
    {
        return a>b;
    })
    console.log('shiftArr : ', shiftArr);
    return shiftArr;
}

// console.log('before push  : ', nomArray);
// insertShiftArray(nomArray);
// console.log('Before nomArray : ', nomArray.length);
// nomArray.push(4);
// console.log('after push  : ', nomArray);
// console.log(' After nomArray : ', nomArray.length);
// insertShiftArray(nomArray);
// insertShiftArray(nomArray);


let nomArray = [59,31,2,23,35,28,7,9,55];
let newArrShifted = [];

let newItem = 4;
nomArray.push(newItem);
console.log('newItem : ', newItem);
// sorted and put the new element in the middle 
function ShiftArray(array) {
    
    let arrIdx = Math.floor((array.length)/2);
    console.log('arrIdx : ', arrIdx);

    for (let i=0;i<arrIdx;i++)
    // console.log('array : ', array);
    // for (let i=0;i<array.length;i++)
    // {
    //      console.log('array[i]  ',array[i] );
    //     console.log('array[i+1]  ',array[i+1] );
    //     if (array[i]< array[i+1])
    //     {
           

    //     }
    // }
}

ShiftArray(nomArray);
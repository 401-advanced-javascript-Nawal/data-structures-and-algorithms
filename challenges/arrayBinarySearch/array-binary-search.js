'use strict';


let searchArr = [4, 8, 15, 16, 23, 42];
let searchKey = 23;

console.log('searchArr : ', searchArr);
console.log('searchKey : ', searchKey);

function binarySearch(array, key) {

    let intialIdx = 0;
    let endIdx = array.length;

    while (intialIdx < endIdx) {

        let middle = Math.floor((intialIdx + endIdx) / 2);
        // console.log('middle : ', middle);

        if (array[middle] === key)
            return middle;

        if (array[middle] < key) {
            intialIdx = middle + 1;
            console.log('intialIdx : ', intialIdx);
        }
        else {
            endIdx = middle - 1;
            console.log('endIdx : ', endIdx);
        }
    }
    return false;
}

binarySearch(searchArr, searchKey)
console.log('binarySearch(searchArr, searchKey) : ', binarySearch(searchArr, searchKey));
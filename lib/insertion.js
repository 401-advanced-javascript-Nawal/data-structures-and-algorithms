'use strict';

function insertion(arr){
    for (let i = 1; i < arr.length; i++) {
        //   console.log('i',i);
        let j = i - 1;
        //   console.log('j',j);
        let temp = arr[i];
        //   console.log('temp',temp)
        while (j >= 0 && temp < arr[j]) {
            // console.log('arr[j]',arr[j]);
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
        // console.log('arr in for', arr);
        // console.log('---------------------')
    }
    return arr;
}
// let array = [8, 4, 23, 42, 15, 16];
// insertion(array);


module.exports=insertion;
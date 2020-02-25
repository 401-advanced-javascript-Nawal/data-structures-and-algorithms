'use strict';

function QuickSort(arr, left, right){
  if(left < right){
    let position = Partition(arr, left, right);
    // console.log(' l r position', left,right,position);
     // Sort the left
      QuickSort(arr, left, position - 1);
      // Sort the right
      QuickSort(arr, position + 1, right);
  } // end of if 
    // console.log('arr in quick', arr);
  return arr;
}; // end of QuickSort function

function Partition(arr, left, right){
let pivot = arr[right];
console.log('pivot',pivot);
let low = left-1;
console.log('low',low);

for(let i=left;i<right;i++){
if(arr[i] <= pivot){
    low++;
    Swap(arr, i, low);
  }
}
    Swap(arr, right, low + 1);
   return low + 1;
}; // end of Partition function 

function Swap(arr, i, low){
let temp=arr[i];
  // // console.log('temp : ', temp);
  arr[i] = arr[low];
  arr[low] = temp;
  // // console.log('arr[low] : ', arr[low]);
  // return arr;
}; // end of Swap function

let array = [8,4,23,42,16,15];
let out= QuickSort(array,0,5);
console.log('out : ', out);

module.exports = QuickSort;
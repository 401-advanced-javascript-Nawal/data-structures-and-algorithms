# Merge Sort
- QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. 

## Challenge
- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Approach & Efficiency
- Time: O(n^2)
- Space: O(1)

## Pseudocode
```javascript 
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
## The Code 

```javascript 
function QuickSort(arr, left, right){
    if(left < right){
      let position = Partition(arr, left, right);
      console.log(' l r position', left,right,position);
       // Sort the left
        QuickSort(arr, left, position - 1);
        // Sort the right
        QuickSort(arr, position + 1, right);
    } // end of if 
    console.log('arr in quick', arr);
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
    arr[i] = arr[low];
    arr[low] = temp;
};

let array = [8,4,23,42,16,15];
QuickSort(array,0,5);

```

## Blog Article 

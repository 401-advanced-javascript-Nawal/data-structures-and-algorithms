# Merge Sort
- is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

## Challenge
- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Approach & Efficiency
- Time: O(n^2)
- Space: O(1)

## Pseudocode
```javascript 
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
## The Code 

```javascript 
function mergeSort(arr) {
    let n = arr.length;
    if (n > 1) {
      let mid = Math.floor(n / 2);
      console.log('mid',mid);
      let left = arr.slice(0,mid);
      console.log('left',left);
      let right = arr.slice(mid,arr.length);
      console.log('right',right);
        // return arr;
    mergeSort(left);
    mergeSort(right);
    return merge(left,right,arr)
    }
   
  }
  
  function merge(left,right,arr){
    let i = 0;
    let j = 0;
    let k = 0;
    while(i<left.length&&j<right.length){
      if(left[i]<=right[j]){
        arr[k]=left[i];
        i=i+1;
      }else{
        arr[k]=right[j];
        j=j+1;
      }
      k=k+1
    }
    if(i === left.length){
        arr[k]=right[j];
    }else{
        arr[k]=left[i];
    }
    console.log('arr after sort',arr);
    return arr;
  }
```

## Blog Article 

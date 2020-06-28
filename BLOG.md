# Insertion Sort
- Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.

## Challenge
- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Approach & Efficiency
- Time: O(n^2)
- Space: O(1)

## Pseudocode
```javascript 
InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
## The Code 

```javascript 
function insertion(arr){
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
```

## Testing 

```javascript 
const insertion = require('../../lib/insertion.js');


describe('Insertion Sort',()=>{
  it('Sort original array',()=>{
    let array=[8,4,23,42,16,15];
    expect(insertion(array)).toEqual([4,8,15,16,23,42]);
  });
  it('sort the Nearly-sorted array',()=>{
    let array=[2,3,5,7,13,11];
    expect(insertion(array)).toEqual([2,3,5,7,11,13]);
  });
  it('Few uniques:',()=>{
    let array=[5,12,7,5,5,7];
    expect(insertion(array)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('Reverse-sorted: ',()=>{
    let array=[20,18,12,8,5,-2];
    expect(insertion(array)).toEqual( [-2,5,8,12,18,20]);
  });
});
```

## Blog Article 
https://github.com/401-advanced-javascript-Nawal/data-structures-and-algorithms/blob/C26-insertion/20200223_163218.jpg

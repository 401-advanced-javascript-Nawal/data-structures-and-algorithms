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

## Blog Article 
https://github.com/401-advanced-javascript-Nawal/data-structures-and-algorithms/blob/C26-insertion/20200223_163218.jpg
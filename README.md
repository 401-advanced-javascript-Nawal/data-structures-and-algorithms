# data-structures-and-algorithms

# Hashtables
- A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched.

## Challenge
- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
- I took the linked list and array approch to implement this data structure .
- Big O ==> (No Collions) Time O(1) space O(n) , (Collions) time O(1-n) , Space O(n)

## API
- hash() : method takes a key as string (arg) and return a hashed key 
- addPair() : method to hash the key then add it to array as a node in linked list 
- get() : get an item from array of the hashtable
- contains() :  return true if the key exist and false if not

* Single HashTable 
- Big O ==> Space and time is O(1) , Find ==> BestCase O(1) ==> WorstCase O(n)

* Double HashTable 
- Big O ==> Space O(n) and time O(1) for each 
- Insert ==> BestCase O(1) ==> WorstCase O(n) for each 
- Search ==> BestCase O(1) ==> WorstCase O(n) for each 
- Delete ==> BestCase O(1) ==> WorstCase O(n) for each 
- Big O for Both ==> O(n^2)

## White-Board

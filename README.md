# data-structures-and-algorithms

# Hashtables
- A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched.

## Challenge
- Implement a Hashtable with the following methods:

* add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
* get: takes in the key and returns the value from the table.
* contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
* hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
- I took the linked list and array approch to implement this data structure .
- Big O ==> (No Collions) Time O(1) space O(1) , (Collions) time O(1-n) , Space O(1)

## API
- hash() : method takes a key as string (arg) and return a hashed key 
- addPair() : method to hash the key then add it to array as a node in linked list 
- get() : get an item from array of the hashtable
- contains() :  return true if the key exist and false if not

- Big O ==> Space and time is O(1)

## White-Board


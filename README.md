# data-structures-and-algorithms

# Singly Linked List
- Short brief how it's work and linked to each other as a object chain 

## Challenge
- Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.

## Approach & Efficiency
- used class and constructor format , while loop 

## API
- insert : append new node into linked list 
- includes : find certain node 
- to string : convert all list items to string 

# Big(O) efficiency
- insert : I need to insert it at the last of the linked list so, Big O is O(n) since I am not use the tail if I used Tail the Big O it will be O(1)
- Includes : I need to check each node till I got the excat node I need so, the big O notation is O(1-n) 
- Tostring : for each node I need to convert it to string so, big O is O(n) 
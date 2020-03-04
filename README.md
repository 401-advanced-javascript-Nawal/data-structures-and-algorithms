# data-structures-and-algorithms

# Trees
- A binary tree is a special type of tree in which every node or vertex has either no child node or one child node or two child nodes. A binary tree is an important class of a tree data structure in which a node can have at most two children.

## Challenge
1. Write a function called tree_intersection that takes two binary tree parameters.
2. Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
- preOrder() : Data => Left => Right => O(n) - need to iterate over all node and giit the value of it . 
- intersection_destructive() : find the intersections values between two BT ==> O(n) for each tree so, it will takes more times to be able to find the intersection between its . 
- insertion() : sort the arrays from BT ==> O(n) , iterate over all tree values so, it will takes n times 

## White-Board
https://github.com/401-advanced-javascript-Nawal/data-structures-and-algorithms/blob/C32-treeIntersection/20200302_154936.jpg
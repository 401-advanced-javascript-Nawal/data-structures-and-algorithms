'use strict';

const Node = require('./tree.js');

// class Node {
//     constructor(val, left = null, right = null){
//       this.value = val;
//       this.left = left;
//       this.right = right;
//     }
//   } // end of Node class


class BST {
  constructor() {
    this.root = null;
  }

  /**
     * add a node to the BST 
     * @param {number} value 
     */
  add(value) {

    // start with first node 
    const node = this.root;
    // if empty tree , make the root node equal to the new node 
    if (node === null) {
      this.root = new Node(value);
      return;
    } // end of null node 
    else {
      const stree = function (node) {
        // go through tree 
        if (value < node.value) {
          // need to check the left node 
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node !== null) {
            return stree(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node !== null) {
            return stree(node.right);
          }
        } else {
          return null;
        }
      }; // end of node function 
      stree(node);
    }

  } // end of add method 


  contains(value) {

    let curNode = this.root;
    while (curNode) {
      // if the root one equal to value 
      if (value === curNode.value) {
        return true;
      }
      // if the left one equal to value 
      if (value < curNode.value) {
        curNode = curNode.left;
      } else {
        // if the left one equal to value 
        curNode = curNode.right;
      }
    }
    // not exist 
    return false;

  } // end of contains method 

} // end of BST class 


const newNode1 = new Node(10);
const newNode2 = new Node(20);
const newNode3 = new Node(5);
const newNode4 = new Node(40);
const newTree = new BST();

newTree.add(newNode1.value);
newTree.add(newNode2.value);
newTree.add(newNode3.value);
newTree.add(newNode4.value);

console.log('newTree : ', newTree);

module.exports = BST;
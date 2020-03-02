'use strict';

const Node = require('./tree.js');

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
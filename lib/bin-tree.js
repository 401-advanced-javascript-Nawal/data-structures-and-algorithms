'use strict';

const Node = require('./tree.js');

class BinTree {
  constructor(root=null){
    this.root = root;
  }

  /**
     * DLR
     * _walk() recursive call 
     */
  preOrder(){
    let data = [];

    let _walk = (node) =>{
      data.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return data;
  } // end of preOrder method
    
  /**
     * LDR
     */
  inOrder(){
    let data = [];

    let _walk = (node) =>{
      if(node.left) _walk(node.left);
      data.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return data;
  } // end of preOrder method 

  /**
     * LRD
     */
  postOrder(){
    let data = [];

    let _walk = (node) =>{
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      data.push(node.value);
    };
    _walk(this.root);
    return data;
  } // end of preOrder method 


  FizzBuzzTree(tree){

    function fizzBuzzNode(node){

      if(!node){
        return null;
      }

      else if(node.value % 3 === 0 && node.value % 5 === 0 ){
        node.value = 'FizzBuzz';
      } else if(node.value % 3 === 0 ){
        node.value = 'Fuzz';
      } else if(node.value % 5 === 0){
        node.value = 'Buzz';
      } else {
        node.value = node.value.toString();
      }
      fizzBuzzNode(node.left);
      fizzBuzzNode(node.right);
    } // end of fizzBuzzNode function 

    return tree;
  } // end of FizzBuzzTree method 

} // end of bintree class 

// let node1 = new Node(40);
// let node2 = new Node(30);
// let node3 = new Node(20);
// let node4 = new Node(10);
// let newtree = new BinTree(node1);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// newtree.FizzBuzzTree();

// console.log('newtree : ', newtree);
module.exports = BinTree;
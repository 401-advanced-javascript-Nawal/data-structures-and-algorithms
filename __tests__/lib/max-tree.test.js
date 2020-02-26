'use strict';

const Bintree = require('../../lib/max-tree.js');
const Node = require('../../lib/node.js');

describe(' Binary Tree Modular , find-maximum-value' , () =>{
  let tree = [];
  let one = new Node(10);
  let two = new Node(20);
  let three = new Node(30);
  let four = new Node(40);

  one.left = three;
  one.right = two;
  two.left = four;

  tree = new Bintree(one);

  console.log('tree : ', tree);

  it('findMaximumValue()' , ()=>{
    // I couldn't write a test ,sorry 
  }); // end of preorder 


}); //  end of binary tree test 
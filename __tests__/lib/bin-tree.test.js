'use strict';

const Bintree = require('../../lib/bfs.js');
const Node = require('../../lib/tree.js');

describe(' Binary Tree Modular , breadth-first-search' , () =>{
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

  it('BFS()' , ()=>{
    expect().toEqual([10,30,20,40]); 
  }); // end of preorder 


}); //  end of binary tree test 


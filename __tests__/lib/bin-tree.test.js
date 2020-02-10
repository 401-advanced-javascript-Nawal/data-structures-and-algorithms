'use strict';

const Bintree = require('../../lib/bin-tree.js');
const Node = require('../../lib/tree.js');

describe(' Binary Tree Modular' , () =>{
  let tree = [];
  let one = new Node(10);
  let two = new Node(20);
  let three = new Node(30);
  let four = new Node(40);

  one.left = three;
  one.right = two;
  two.left = four;

  tree = new Bintree(one);

  it('PreOrder()' , ()=>{
    console.log('tree preOrder : ', tree.preOrder());
    expect(tree.preOrder()).toEqual([10,30,20,40]);
  }); // end of preorder 

  it('InOrder()' , ()=>{
    console.log('tree inOrder: ', tree.inOrder());
    expect(tree.inOrder()).toEqual([30,10,40,20]);
  }); // end of preorder 

  it('PostOrder()' , ()=>{
    console.log('tree postOrder : ', tree.postOrder());
    expect(tree.postOrder()).toEqual([30,40,20,10]);
  }); // end of preorder 

}); //  end of binary tree test 


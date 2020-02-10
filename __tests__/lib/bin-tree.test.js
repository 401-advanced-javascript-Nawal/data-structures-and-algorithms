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
        console.log('tree : ', tree);
        expect(tree.preOder()).toEqual(['one','three','four','two']);
    }); // end of preorder 

}) //  end of binary tree test 


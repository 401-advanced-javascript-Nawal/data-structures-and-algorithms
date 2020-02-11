'use strict';

const Node = require('../../lib/tree.js');
const BST = require('../../lib/bst.js');
// const BinTree = require('../../lib/bin-tree.js');

describe(' Binary Search Tree Modular', () => {


    const newNode1 = new Node(10);
    const newNode2 = new Node(20);
    const newNode3 = new Node(5);
    const newNode4 = new Node(40);
    const newNode5 = new Node(2);

    const newTree = new BST();

    newTree.add(newNode1.value);
    newTree.add(newNode2.value);
    newTree.add(newNode3.value);
    newTree.add(newNode4.value);



    it('ADD()', () => {
        newTree.add(newNode5.value);
        expect(newNode5.value).toEqual(2);
        console.log('newTree : ', newTree);
    }); // end of preorder

});

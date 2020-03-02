'use strict';

const Node = require('./tree.js');

class BinTree {
  constructor(root=null){
    this.root = root;
  }

  preOrder(){
    let data = [];
    let _read = (node)=>{
      data.push(node.value);
      if(node.leftChild) _read(node.leftChild);
      if(node.rightChild) _read(node.rightChild);
    };
    _read(this.root);
    return data;
  }

  intersection_destructive(a, b)
  {
    var result = [];
    while( a.length > 0 && b.length > 0 )
    {  
      if      (a[0] < b[0] ){ a.shift();
      }
      else if (a[0] > b[0] ){ b.shift(); 
      }
      else 
      {
         result.push(a.shift());
         b.shift();
       }
    }
  
    return result;
  }
  insertion(arr){
    for(let i = 1;i < arr.length;i++){
      let j = i - 1;
      let temp = arr[i];
      while(j >= 0 && temp < arr[j]){
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = temp;
    }
    return arr;
  }

} // end of bintree class 


module.exports = BinTree;

let tree = [];

let valueOne = new Node(1);
let valueTwo = new Node(2);
let valueThree = new Node(3);
let valueFour = new Node(4);
let valueFive = new Node(5);
let valueSix = new Node(6);
let valueSeven = new Node(7);
valueOne.leftChild = valueThree;
valueOne.rightChild = valueSix;
valueThree.leftChild = valueFour;
valueThree.rightChild = valueTwo;
valueSix.leftChild = valueSeven;
valueSix.rightChild = valueFive;
tree = new BinTree(valueOne);


let tree2 = [];

let value8 = new Node(8);
let value9 = new Node(9);
let value10 = new Node(10);
let value11 = new Node(11);
value8.leftChild = value10;
value8.rightChild = valueSix;
value10.leftChild = value11;
value10.rightChild = value9;
valueSix.leftChild = valueSeven;
valueSix.rightChild = valueFive;
tree2 = new BinTree(value8);
let array1=tree.preOrder()
let array2=tree2.preOrder()
console.log('array1',array1);
console.log('array2',array2);
let sortarray1= tree.insertion(array1)
let sortarray2= tree.insertion(array2)
console.log('intersection',tree.intersection_destructive(sortarray1,sortarray2))
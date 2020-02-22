'use strict';

class BinTree{
    constructor(root=null){
      this.root = root;
    }
  
    breathFirstSearch(root){
  
      // to store all node values inside of it 
      let nodesArr = [];
  
      // store first value which is the root value 
      nodesArr.push(root);
  
      // iterate over all binary tree 
      while(nodesArr.length > 0){
        let nodeValue = nodesArr.shift();
        console.log('nodeValue : ', nodeValue);
  
        if(nodeValue.left){
          nodesArr.push(nodeValue.left);
        }
  
        if(nodeValue.right){
          nodesArr.push(nodeValue.right);
        }
      } // end of while loop 
  
  
    } // end of bfs Method 
  
  } // end of BinTree Class
 

  module.exports = BinTree;
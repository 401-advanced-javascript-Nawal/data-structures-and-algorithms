'use strict'; 

class BinTree {
    constructor(){
        this.root =null;
    }

    findMaximumValue(root){
        if(root === null){
            return null;
        }

        let currentValue = root.data;
        let leftValue = findMaximumValue(root.left);
        let rightValue = findMaximumValue(root.right);

        if(leftValue > currentValue ){
            currentValue = leftValue;
        }
        if(rightValue > currentValue ){
            currentValue = rightValue;
        }
        return currentValue;

    } // end of findMaximumValue method 
} // end of BinTree class 

module.exports = BinTree;
'use strict';

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
        }
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
        }
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
        }
        _walk(this.root);
        return data;
    } // end of preOrder method 

} // end of bintree class 


module.exports = BinTree;
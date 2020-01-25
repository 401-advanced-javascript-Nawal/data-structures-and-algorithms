'use strict';

const Node = require('./node.js');

class linkedList {
    constructor() {
        this.head = null;
    }

    // create new node 
    append(value){
        let newNode = new Node(value);

        // if no head let the new  node be the head node 
        if (!this.head){
            this.head = newNode;
        }
        // this.head includes ( value , next )
        let currentNode = this.head;

        // if there are any more nodes 
        while(currentNode.next){
            currentNode = currentNode.next;
        } // end of while 

        // if no more nodes (false)
        currentNode.next = newNode;
        // this === newNode 
        return this;

    } // end of append method 

} // end of linkedList Class 


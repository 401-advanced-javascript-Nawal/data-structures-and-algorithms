'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // create new node 
    insert(value){
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

    } // end of insert method 

} // end of LinkedList Class 

module.exports = LinkedList;


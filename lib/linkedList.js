'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Create new Node 
     * @param {*} value 
     */
    insert(value) {
        this.head = new Node(value, this.head);
    }

    /**
     * Insert Node before another Node 
     * @param {*} valueN 
     * @param {*} newValue 
     */
    insertBefore(valueN, newValue) {
        let currentNode = new Node(valueN);
        console.log('currentNode : ', currentNode);
        if (currentNode.value === valueN) {
            this.head = new Node(newValue, currentNode);
        }
        
    }

} // end of LinkedList Class 


const ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insertBefore(20, 30);

console.log('ll : ', ll);

// ll.insertBefore(20,30);
// console.log('ll : ', ll);



module.exports = LinkedList;


'use strict';

const Node = require('./node.js');
let readArr = [];

// we will implement the data inside array(locations) as linked list to avoid the collions 
class LinkedList {
    constructor(){
        this.head = null;
    }

    /**
     * add node to linked list 
     * @param {object} data 
     */
    add(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
    } // end of add() method 

    /**
     * Read all node inside the linked list 
     */
    read(){
        if(!this.head){
            return null;
        }
        else {
            let currentNode = this.head;
            while(currentNode){
                // console.log('currentNode.data : ', currentNode.data);
                readArr.push(currentNode.data);
                currentNode = currentNode.next;
            }
        }
        return readArr;
    } // end of read() method

} // end of LinkedList Class

module.exports = LinkedList;
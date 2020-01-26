'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Create new Node and add it at first 
     * @param {*} value 
     */
    insert(value) {
        // to let the head equal the new node added since we add it at first 
        this.head = new Node(value, this.head);
        // increment the size of the list everytime we added new node 
        this.size++;
    } // end of insert method 

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
    }// end of insertBefore method 
    
    /**
     * add new node to the end of the list 
     * @param {*} value 
     */
    append(value){
        // create new node within the given value 
        let newNode = new Node(value);

        let currentNode;

        // check if the list is empty or not 
        if(this.head === null){
            this.head = newNode;
        } else {
            // if there is a head list 
            currentNode = this.head;

            // if there a nother node next 
            while(currentNode.next){
                currentNode = currentNode.next;
            }

            // add the new node 
            currentNode.next = newNode;
        }

        // increment the size by 1 after added the new node at the last of the list 
        this.size++;
    } // end of append method

    /**
     * print out the nodes to step up with output instead of console.log
     */
    printNodesOut(){
        // starting from the head of the list 
        let node = this.head;
        // while there's a node we will keep printing it out 
        while(node){
            console.log('node.value : ', node.value);
            // go to the next node to print 
            node = node.next;
        }
    } // end of printNodesOut method

} // end of LinkedList Class 


const ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.append(40);


// console.log('ll : ', ll);
ll.printNodesOut();



module.exports = LinkedList;


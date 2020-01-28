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

  includes(value) {

    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        currentNode = currentNode.next;
        return true;
      }
      return false;
    }
  } // end of includes method 

  /**
     * Insert Node before another Node 
     * @param {*} valueN 
     * @param {*} newValue 
     */
  insertBefore(valueN, newValue) {

    // check the node before and after 
    let currentNode, previousNode;

    // check if the list is empty or not , No head 
    if (this.size === 0 || this.head === null) {
      this.head = new Node(newValue, this.head);
    }

    let newNode = new Node(newValue);
    // go over all nodes 
    currentNode = this.head;
    while (currentNode.value !== valueN) {
      // to move to the next node 
      previousNode = currentNode;
      // console.log('previousNode : ', previousNode);
      currentNode = currentNode.next;
      // console.log('currentNode : ', currentNode);
    }
    newNode.next = currentNode;
    previousNode.next = newNode;

    this.size++;
  }// end of insertBefore method 

  /**
     * Insert node after given value 
     * @param {*} valueN 
     * @param {*} newValue 
     */
  insertAfter(valueN, newValue) {

    // check the node before and after 
    let currentNode, previousNode;

    // check if the list is empty or not , No head 
    if (this.size === 0 || this.head === null) {
      this.head = new Node(newValue, this.head);
    }

    let newNode = new Node(newValue);
    // go over all nodes 
    currentNode = this.head;
    while (currentNode.value !== valueN) {
      // to move to the next node 
      previousNode = currentNode;
      // console.log('previousNode : ', previousNode);
      currentNode = currentNode.next;
      // console.log('currentNode : ', currentNode);
    }
    currentNode.next = newNode;
    previousNode.next = currentNode;
        
    this.size++;
  }// end of insertAfter method 

  /**
     * add new node to the end of the list 
     * @param {*} value 
     */
  append(value) {
    // create new node within the given value 
    let newNode = new Node(value);
    let currentNode;

    // check if the list is empty or not 
    if (this.head === null) {
      this.head = newNode;
    } else {
      // if there is a head list 
      currentNode = this.head;
      // if there a nother node next 
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // add the new node 
      currentNode.next = newNode;
    }
    // increment the size by 1 after added the new node at the last of the list 
    this.size++;
    return newNode;
  } // end of append method

  /**
     * print out the nodes to step up with output instead of console.log
     */
  printNodesOut() {
    // starting from the head of the list 
    let node = this.head;
    // while there's a node we will keep printing it out 
    while (node) {
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
ll.append(60);
ll.insertBefore(20, 50);
// ll.insertAfter(40, 60);
ll.insertAfter(20, 70);


console.log('ll : ', ll);
ll.printNodesOut();



module.exports = LinkedList;


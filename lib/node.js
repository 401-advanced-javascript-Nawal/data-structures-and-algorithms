'use strict';

class Node {
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}


const node1 = new Node(10);
const node2 = new Node(20);

node1.next = node2;

console.log('node1 : ', node1);

module.exports = Node;


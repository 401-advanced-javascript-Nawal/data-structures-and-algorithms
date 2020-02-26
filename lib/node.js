'user strict';

class Node{
  constructor(data,left = null,right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
} // end of Node class

module.exports = Node;
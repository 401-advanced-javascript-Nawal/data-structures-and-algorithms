'use strict';

class PseudoQueue {
  constructor(){
    this.stackArr1 = new Array();
    this.stackArr2 = new Array();

  }

  /**
     * Add an item at the end of the stackArr1
     * @param {string} element 
     */
  enqueue(element){
    this.stackArr1.push(element);
  } // end of enqueue method 

  /**
     * remove an item from the front of the stackArr1 then add it to stackArr2
     * no param 
     */
  dequeue(){
    if(!this.stackArr1.length){
      if(!this.stackArr2.length ){
        return ' Empty Stack ';
      }
    }

    if(this.stackArr1.length > 0){
      let shiftElement = this.stackArr1.pop();
      this.stackArr2.push(shiftElement);
    } 

  } // end of dequeue method
} // end of PseudoQueue class 


let test = new PseudoQueue();
test.enqueue(10);
test.enqueue(20);
test.enqueue(30);

console.log('test : ', test);
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
console.log('test : ', test);

module.exports = PseudoQueue;
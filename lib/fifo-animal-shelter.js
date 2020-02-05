'use strict';

class AnimalShelter{
    constructor(){
        this.catArr = new Array();
        this.dogArr = new Array();
      }

     /**
     * Add an item at the end of the queue
     * @param {string} element 
     */
  enqueue(element){
    this.queueArr.push(element);
    if(this.queueArr.length === 1){
      this.front = this.rear = element;
    }else {
      this.rear = element;
    }
  } // end of enqueue method 

  /**
     * remove an item from the front of the queue 
     * no param 
     */
  dequeue(){
    if(!this.queueArr.length){
      return null;
    }

    let shiftElement = this.queueArr.shift();
    if(this.queueArr.length === 0){
      this.front = this.rear = null;
    }else {
      this.front = this.queueArr[0];
      this.rear = this.queueArr[this.queueArr.length-1];
    }

    return shiftElement;

  } // end of dequeue method

} // end of AnimalShelter class


module.exports = AnimalShelter;
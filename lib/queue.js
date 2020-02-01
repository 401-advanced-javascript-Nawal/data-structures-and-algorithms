'use strict';

class Queue {
    constructor(){
        this.queueArr = new Array();
        this.front = null;
        this.rear = null;
    }

    enqueue(element){
        this.queueArr.push(element);
        if(this.queueArr.length === 1){
            this.front = this.rear = element;
        }else {
            this.rear = element;
        }
    } // end of enqueue method 

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

} // end of queue class 

module.exports = Queue;
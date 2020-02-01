'use strict';

class Stack {
    constructor(){
        this.stackArr = new Array();
        this.top = null;
    }

    push(element){
        this.stackArr.push(element);
        this.top = element;
    } // end of push method 


    pop(){
        if(this.stackArr){
            let element = this.stackArr.pop();
            this.top = this.stackArr[this.stackArr.length-1];
            return element;
        }else {
            return 'No element Found';
        }
       
    } // end of pop method 


    peek(){

    } // end of peek method

} // end of Stack class 


module.exports = Stack;

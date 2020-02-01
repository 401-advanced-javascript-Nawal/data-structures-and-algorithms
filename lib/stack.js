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
            let element = this.stackArr.pop();
            this.top = this.stackArr[this.stackArr.length-1];
            return element;
    } // end of pop method 


    peek(){
        return this.top;
    } // end of peek method

    isEmpty(arrayS){
        if(arrayS.length === 0)
            return 'empty Stack';
    } // end of isEmpty method 

} // end of Stack class 


module.exports = Stack;

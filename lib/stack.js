'use strict';

class Stack {
  constructor(){
    this.stackArr = new Array();
    this.top = null;
  }

  /**
     * add item to stack using push()
     * @param {string} element 
     */
  push(element){
    this.stackArr.push(element);
    this.top = element;
  } // end of push method 

  /**
     * remove an item from stack using pop()
     * no params
     */
  pop(){
    let element = this.stackArr.pop();
    this.top = this.stackArr[this.stackArr.length-1];
    return element;
  } // end of pop method 

  /**
     * return the value( Top ) of the stack
     * no params
     */
  peek(){
    return this.top;
  } // end of peek method

  /**
     * check if the stack is empty or not
     * @param {array} arrayS 
     */
  isEmpty(arrayS){
    if(arrayS.length === 0)
      return 'empty Stack';
  } // end of isEmpty method 

} // end of Stack class 


module.exports = Stack;

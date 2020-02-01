'use strict';

const Stack = require('../../lib/stack.js');

describe(' Stack Module ', () => {
  it('Push(), add item to stack using push()', () => {
    // Can successfully instantiate an empty stack
    // Can successfully push onto a stack
    // Can successfully push multiple values onto a stack
    let newStack = new Stack();
    expect(newStack.stackArr).toEqual([]);
    newStack.push('Sally');
    expect(newStack.peek()).toEqual('Sally');
    newStack.push('jasmine');
    expect(newStack.peek()).toEqual('jasmine');
  }); // end of push method testing

  it('Pop() , remove an item from stack using pop()', () => {
    // Can successfully pop off the stack
    // Can successfully empty a stack after multiple pops
    let newStack = new Stack();
    newStack.push('Sally');
    newStack.push('jasmine');
    let popItem = newStack.pop();
    // check the popped element value returned 
    expect(popItem).toEqual('jasmine');
    // check the left element will be the top(peek)
    expect(newStack.peek()).toEqual('Sally');
    // check if there is no element to remove
    newStack.pop();
    expect(newStack.stackArr).toEqual([]);
    expect(newStack.top).toBeUndefined();
  }); // end of pop method testing 

  it('Peek() , return the value( Top ) of the stack', () => {
    //Can successfully peek the next item on the stack
    let newStack = new Stack();
    newStack.push('Sally');
    // check the top of the stack 
    expect(newStack.peek()).toEqual('Sally');
  }); // end of peek method testing 

  it('isEmpty() , check if the stack is empty or not ', () =>
  {
    let newStack = new Stack();
    expect(newStack.isEmpty(newStack.stackArr)).toEqual('empty Stack');
  });

}); // end of stack testing 
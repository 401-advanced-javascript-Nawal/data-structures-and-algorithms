'use strict';

const Queue = require('../../lib/queue.js');

describe(' Queue Module ', () => {

  it('enqueue() , Add an item at the end of the queue ', () => {
    // Can successfully enqueue into a queue
    // Can successfully enqueue multiple values into a queue

    let newQueue = new Queue();
    newQueue.enqueue('Sally');
    newQueue.enqueue('jasmine');
    expect(newQueue.front).toEqual('Sally');
    expect(newQueue.rear).toEqual('jasmine');
  }); // end of enqueue method test 

  it('dequeue() , remove an item from the front of the queue ', () => {
    // Can successfully empty a queue after multiple dequeues
    let newQueue = new Queue();
    // console.log('newQueue : ', newQueue);
    // expect(newQueue.queueArr.length).toBe(null);        
    newQueue.enqueue('Sally');
    newQueue.enqueue('jasmine');
    let deItem = newQueue.dequeue();
    expect(deItem).toEqual('Sally');
    expect(newQueue.front).toEqual('jasmine');
    expect(newQueue.rear).toEqual('jasmine');
    newQueue.dequeue();
    // Can successfully instantiate an empty queue
    expect(newQueue.queueArr.length).toBe(0);
    expect(newQueue.front).toBeNull();
    expect(newQueue.rear).toBeNull();

  }); // end of enqueue method test

  it('isEmpty() , check if the Queue is empty or not ', () =>
  {
    let newQueue = new Queue();
    expect(newQueue.isEmpty(newQueue.queueArr)).toEqual('Empty Queue');
  });

  it('Peek() , return the front value ', () =>
  {
    let newQueue = new Queue();
    newQueue.enqueue('Sally');
    newQueue.enqueue('jasmine');
    expect(newQueue.front).toEqual('Sally');
  });

}); // end of stack testing 
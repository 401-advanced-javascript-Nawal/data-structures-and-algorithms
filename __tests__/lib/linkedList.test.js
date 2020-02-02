'use strict';

const LinkedList = require('../../lib/linkedList.js');

describe(' LinkedList Module ', () => {
  let testLL = new LinkedList();
  it(' LinkedList Constructor ', () => {
    expect(testLL.head).toEqual(null);
  });

  it(' Insert() new node with value ', () => {
    let value = 'Nawal';
    testLL.insert(value);
    expect(testLL.head.value).toEqual(value);
    expect(typeof (testLL.head.next)).toEqual('object');
  });

  it(' Includes() node\'s value if exist ', () => {
    let value = 'Nawal';
    testLL.includes(value);
    expect(testLL.head.value).toEqual(value);
  });

  // it(' ToString nodes ', () => {
  //     let value = 'Nawal' ;
  //     let testLL = new LinkedList();
  //     testLL.toStringType();
  //     expect(String(testLL.head)).toEqual('string');      
  // });

  it(' append() add new node at the end of the list ', () => {
    let value = 'Nawal';
    testLL.insert(value);
    expect(testLL.head.value).toEqual('Nawal');
    expect(testLL.head.value).toEqual(value);
  });

  it(' insertBefore() Insert Node before another Node ', () => {
    let value1 = 'N1';
    let value2 = 'N2';
    testLL.insert(value1);
    testLL.insert(value2);
    testLL.insertBefore(value1, value2);
    expect(testLL.head.value).toEqual(value2);
    // expect(testLL.head.next).toEqual(value2)
  });

  it(' insertAfter() Insert node after given value ', () => {
    let value1 = 'N1';
    let value2 = 'N2';
    testLL.insert(value1);
    testLL.insert(value2);
    testLL.insertAfter(value1, value2);
    expect(testLL.head.value).toEqual(value2);
  });

  it('llkthFromEnd(k) return the node’s value that is k from the end of the linked list.  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X  k=0  output=2
    let testLL = new LinkedList();
    testLL.insert('10');
    testLL.insert('30');
    testLL.insert('50');
    testLL.insert('70');
    expect(testLL.llkthFromEnd(0)).toEqual('10');
    expect(testLL.llkthFromEnd(1)).toEqual('30');
    expect(testLL.llkthFromEnd(6)).toEqual('Exception');
  });

  it('llkthFromEnd(k) return k negative number since K < 0  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X  k=0  output=2
    let testLL = new LinkedList();
    testLL.insert('10');
    testLL.insert('30');
    testLL.insert('50');
    testLL.insert('70');
    expect(testLL.llkthFromEnd(-1)).toEqual('K negative Number');
  });

  it('llkthFromEnd(k) if LL.size === 1 ,return currentNode.value  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X  k=0  output=2
    let testLL = new LinkedList();
    testLL.insert('10');
    expect(testLL.llkthFromEnd(0)).toEqual('10');
    
  });


}); // end of LinkedList Module

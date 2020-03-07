'use strict';

const Hashmap = require('../../lib/left-join.js');
const Linkedlist = require('../../lib/linkedList.js');
const Node = require('../../lib/node.js');

describe (' HashTable Testing ' , () => {

  let hashmap = new Hashmap(1024);
    
  // hashmap.addPair('age', 32);
  // hashmap.get('age');
  // hashmap.contains('name');
    
    
  it('addPair() , Get() , it should add pair to hashmap and read it from linked list ' , () => {
    hashmap.addPair1('name', 'nawal');
    console.log('hashmap : ', hashmap);
    expect(hashmap.size).toEqual(1024);
    expect(hashmap.map).toBeDefined();
    let arr1 = hashmap.get('name');
    console.log('arr1 : ', arr1);
    // expect(arr1).toEqual([['name','nawal']]);
  }); // end of it test

  it('addPair() , it should add pair to hashmap ' , () => {
    hashmap.addPair1('name', 'nawal');
    console.log('hashmap : ', hashmap);
    expect(hashmap.size).toEqual(1024);
    expect(hashmap.map).toBeDefined();
    let arr1 = hashmap.contains('name');
    console.log('arr1 : ', arr1);
    // expect(tpyeof(arr1)).toEqual('object');
  }); // end of it test

}); // end of hashtable test
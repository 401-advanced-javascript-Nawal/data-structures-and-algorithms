'use strict';

let mergeSort = require('../../lib/mergeSort.js');

describe('Merge Sort',()=>{

  it('it should sort the array',()=>{
    let array =[8,4,23,42,16,15];
    expect(mergeSort(array)).toEqual([4,8,15,16,23,42]);
  });
});
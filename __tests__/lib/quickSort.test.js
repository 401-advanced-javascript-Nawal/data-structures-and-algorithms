'use strict';

let quickSort = require('../../lib/quickSort.js');

describe('QuickSort',()=>{

  it('it should sort the array',()=>{
    let array =[8,4,23,42,16,15];
    let out = quickSort(array,0,5);
    expect(out).toEqual([4,8,15,16,23,42]);
  });

  it('it should sort the array , Reverse-sorted',()=>{
    let array =[20,18,12,8,5,-2];
    let out = quickSort(array,0,5);
    expect(out).toEqual([-2,5,8,12,18,20]);
  });

  it('it should sort the array , Few uniques: ',()=>{
    let array =[5,12,7,5,5,7];
    let out = quickSort(array,0,5);
    expect(out).toEqual([5,5,5,7,7,12]);
  });

  it('it should sort the array , Nearly-sorted:',()=>{
    let array =[2,3,5,7,13,11];
    let out = quickSort(array,0,5);
    expect(out).toEqual([2,3,5,7,11,13]);
  });

});
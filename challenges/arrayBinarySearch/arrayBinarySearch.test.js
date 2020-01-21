'use strict';


const validator = require('./arrayBinarySearch.js');



describe('validator module performs basic validation of', () => {

it('Binary Search for key  ', () => {
    let arr = [4, 8, 15, 16, 23, 42];
    let key = 23;
    expect(validator.binarySearch(arr,key)).toEqual(4);
  });

  it('Binary Search if the key not exist ', () => {
    let arr = [4, 8, 15, 16, 23, 42];
    let key = 31;
    expect(validator.binarySearch(arr,key)).toBeFalsy();
  });

});
'use strict';

const validator = require('./matFib.js');

describe('validator module performs basic validation of', () => {

    it('Summation Matrix Array  ', () => {
        let arr = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];4
        let output = [6, 15, 18];
        expect(validator.matrixSum(arr)).toEqual(output);
      });
    
      it(' n must be Number ', () => {
          let n =5;
        expect(validator.isNumber(n)).toBeTruthy();
      });

      it('Fibonacci Sequence ', () => {
        let arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
        let n = 10;
        expect(validator.fibFun(n)).toEqual(arr[n]);
      });
    
    });

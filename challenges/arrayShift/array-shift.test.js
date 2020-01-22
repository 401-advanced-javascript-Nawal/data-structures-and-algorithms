'use strict';

const validator = require('./array-shift.js');

describe('validator module performs basic validation of', () => {

    it('insert a value into the middle of sorted array  ', () => {

        let array = [4, 8, 15, 23, 42];
        let value = 16;
        expect(validator.insertShiftArray(array, value)).toEqual(6);
    });
});
'use strict';

const PseudoQueue = require('../../lib/pseudoQueue.js');

describe(' PseudoQueue Module ', () => {

    it('enqueue() , Add an item at the end of the PseudoQueue ', () => {

        let test = new PseudoQueue();
        expect(test.stackArr1.length).toBeNull();
        expect(test.stackArr2.length).toBeNull();
        test.enqueue(10);
        test.enqueue(20);
        test.enqueue(30);

    });

}); // end of PseudoQueue Module


'use strict';

const PseudoQueue = require('../../lib/pseudoQueue.js');

describe(' PseudoQueue Module ', () => {

    it('enqueue() , Add an item at the end of the PseudoQueue ', () => {

        let test = new PseudoQueue();
        expect(test.stackArr1.length).toEqual(0);
        expect(test.stackArr2.length).toEqual(0);
        test.enqueue(10);
        test.enqueue(20);
        test.enqueue(30);
        console.log('test enqueue : ', test);
        expect(test.stackArr1).toEqual([10,20,30]);
    });

    it('dequeue() , remove an item at the end of the stackArr1 then add it to stackArr2  ', () => {

        let test = new PseudoQueue();
        expect(test.stackArr1.length).toEqual(0);
        expect(test.stackArr2.length).toEqual(0);
        test.enqueue(10);
        test.enqueue(20);
        test.enqueue(30);
        expect(test.stackArr1).toEqual([10,20,30]);
        test.dequeue();
        console.log('test dequeue : ', test);
        expect(test.stackArr1).toEqual([10,20]);
        expect(test.stackArr2).toEqual([30]);
    });

}); // end of PseudoQueue Module


'use strict';

const LinkedList = require('../../lib/linkedList.js');


describe(' LinkedList Module ', () => {

    it(' LinkedList Constructor ', () => {

        let testLL = new LinkedList();
        expect(testLL.head).toEqual(null);
    });

    it(' Insert new node with value ', () => {

        let value = 'Nawal' ;
        let testLL = new LinkedList();
        testLL.insert(value);
        expect(testLL.head.value).toEqual(value);
        expect(typeof(testLL.head.next)).toEqual('object');
    });

    it(' Includes node\'s value if exist ', () => {

        let value = 'Nawal' ;
        let testLL = new LinkedList();
        testLL.includes(value);
        expect(testLL.head.value).toEqual(value);      
    });

    // it(' ToString nodes ', () => {
    //     let value = 'Nawal' ;
    //     let testLL = new LinkedList();
    //     testLL.toStringType();
    //     expect(String(testLL.head)).toEqual('string');      
    // });



}); // end of LinkedList Module

'use strict';

const LinkedList = require('../../lib/linkedList.js');
const Node = require('../../lib/node.js');


describe(' LinkedList Module ', () => {

    it(' LinkedList Constructor ', () => {

        let testLL = new LinkedList();
        expect(testLL.head).toEqual(null);
    });

    it(' Insert new node with value ', () => {

        let value = 'Nawal' ;
        let testLL = new LinkedList();
        expect(testLL.insert(value)).toEqual(testLL);
    });

}); // end of LinkedList Module

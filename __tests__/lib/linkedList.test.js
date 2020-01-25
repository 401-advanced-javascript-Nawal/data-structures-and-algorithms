'use strict';

const LinkedList = require('../../lib/linkedList.js');

describe(' LinkedList Module ', () => {

    it(' LinkedList Constructor ', () => {

        let testLL = new LinkedList();
        expect(testLL.head).toEqual(null);
    });

    
}); // end of LinkedList Module

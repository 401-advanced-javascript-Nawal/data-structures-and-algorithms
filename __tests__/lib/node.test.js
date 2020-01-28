'use strict';

const Node = require('../../lib/node.js');

describe(' Node Module ' , () =>
{
  it(' Node Constructor ' , () =>
  {
    let value = 'Nawal' ;
    let testNode = new Node(value);

    expect(testNode.value).toEqual(value);
    expect(testNode.next).toEqual(null);

  }); // end of node constructor 

}); // end of node describe 
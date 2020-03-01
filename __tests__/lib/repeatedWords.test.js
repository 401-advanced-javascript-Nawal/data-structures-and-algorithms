'use strict';

const repeatedWordInStr = require('../../lib/repeatedWords.js');

describe(' repeatedWordInStr() , Find the repeated word in a string ' , () => {

  it('Test 1 , Should return "a" char ' , () =>{
    let str = 'Once upon a time, there was a brave princess who...';
    let word = repeatedWordInStr(str);
    console.log('word in test : ', word);
    expect(word).toEqual('a');
  });

  it('Test 2 , Should return "it" word ' , () =>{
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let word = repeatedWordInStr(str);
    console.log('word in test : ', word);
    expect(word).toEqual('it');

  });

  it('Test 3 , Should return "was" word ' , () =>{
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    let word = repeatedWordInStr(str);
    console.log('word in test : ', word);
    expect(word).toEqual('was');
  });

}) ; // end of repeatedWordInStr describe
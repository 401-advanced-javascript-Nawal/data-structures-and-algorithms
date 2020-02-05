'use strict';

const AnimalShelter = require('../../lib/fifo-animal-shelter.js');

let aniSh = new AnimalShelter();

describe(' Animal Shelter Module ', () => {
  let animal1 = ['Luna','cat'] ;
  let animal2 = ['Cooper','dog'];
  let anyth = { name: 'ala bali', type: 'song' };


  it(' Add animal when it\'s cat ', () => {
    // console.log('aniSh : ', aniSh);
    expect(aniSh.enqueue(anyth)).toEqual('Not Animal');     
    aniSh.enqueue(animal1);
    // console.log('animal1 : ', animal1);
    expect(aniSh.catArr[0][0]).toBe('Luna');
    expect(aniSh.catArr[0][1]).toBe('cat');
  });

  it(' Add animal when it\'s dog ', () => {
    aniSh.enqueue(animal2);
    expect(aniSh.dogArr[0][0]).toBe('Cooper');
    expect(aniSh.dogArr[0][1]).toBe('dog');
  });

  it(' remove pref when it\'s cat ', () => {
    let animal3 = ['rain','cat'] ;
    aniSh.enqueue(animal3);
    // console.log('aniSh Cat : ', aniSh);
    let shiftAnim = aniSh.dequeue(animal1);
    console.log('shiftAnim Cat : ', shiftAnim);
    expect(shiftAnim[0]).toBe('Luna');
    expect(shiftAnim[1]).toBe('cat');
    aniSh.dequeue(animal3);
    expect(aniSh.catArr.length).toEqual(0);

  });

  it(' remove pref when it\'s dog ', () => {
    let animal4 = ['wolf','dog'] ;
    aniSh.enqueue(animal4);
    console.log('aniSh Dog : ', aniSh);
    let shiftAnim = aniSh.dequeue(animal2);
    console.log('shiftAnim Dog : ', shiftAnim);
    expect(shiftAnim[0]).toBe('Cooper');
    expect(shiftAnim[1]).toBe('dog');
    aniSh.dequeue(animal4);
    expect(aniSh.dogArr.length).toEqual(0);
  });

  it(' Return Null when pref is not an animal ', () => {
    expect(aniSh.dequeue(anyth)).toBeNull();
  });

}); // end of AnimalShelter test 
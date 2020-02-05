'use strict';

const AnimalShelter = require('../../lib/fifo-animal-shelter.js');

let aniSh = new AnimalShelter();

describe(' Animal Shelter Module ', () => {
    let animal1 = { name: 'Luna', type: 'cat' };
    let animal2 = { name: 'Cooper', type: 'dog' };
    let anyth = { name: 'ala bali', type: 'song' };


    it(' Add animal when it\'s cat ', () => {
        aniSh.enqueue(animal1);
        // expect(aniSh.n)
    });

    it(' Add animal when it\'s dog ', () => {

    });

    it(' remove pref when it\'s cat ', () => {

    });

    it(' remove pref when it\'s dog ', () => {

    });

    it(' Return Null when pref is not an animal ', () => {

    });

}); // end of AnimalShelter test 
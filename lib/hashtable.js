'use strict';

require('./node.js');
require('./linkedList.js');

class Hashmap{
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }

    /**
     * method takes a key as string (arg) and return a hashed key 
     * @param {string} key 
     */
    hash(key){
        // hashed the key by divding it to array of char and calculate the ASCII code for each one then sum the value of it then return it
        let hashedKey = key.split('').reduce((acc,val,idx) =>{

        console.log('val inside reduce : ', val);
        console.log('acc + val.charCodeAt(0) : ', acc + val.charCodeAt(0));
            return acc + val.charCodeAt(0);
        }, 0); // end of reduce method 

        hashedKey = hashedKey * 15;
        console.log('hashedKey * 15 : ', hashedKey );
        hashedKey = hashedKey % this.size;
        console.log('hashedKey % size : ', hashedKey);
        return hashedKey;
    }
} // end of hashmap method 

let hashmap = new Hashmap(1024);
console.log('hashmap : ', hashmap.hash('nawal'));
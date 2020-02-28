'use strict';

const Node = require('./node.js');
const LinkedList = require('./linkedList.js');

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

        // console.log('val inside reduce : ', val);
        // console.log('acc + val.charCodeAt(0) : ', acc + val.charCodeAt(0));
            return acc + val.charCodeAt(0);
        }, 0); // end of reduce method 

        hashedKey = hashedKey * 15;
        // console.log('hashedKey * 15 : ', hashedKey );
        hashedKey = hashedKey % this.size;
        // console.log('hashedKey % size : ', hashedKey);
        return hashedKey;
    } // end of hash() method 

    addPair(key,value){
        // to hash the  key then add it to array as a node in linked list 
        let hashedKey = this.hash(key);
        // console.log('hashedKey in add() : ', hashedKey);
        if(!this.map[hashedKey]) {
            let linkedL = new LinkedList();
            linkedL.add([key,value]);
            this.map[hashedKey] = linkedL;
        }
        else {
            this.map[this.hash(key)] = this.map[hashedKey].add([key,value]);
            // console.log('this.map[this.hash(key) : ', this.map[this.hash(key)]);
            // console.log('this.map[hashedKey].add([key,value] : ', this.map[hashedKey].add([key,value]));
        }

    } // end of add() method 

} // end of hashmap method 

/************** Hashmap ***************/
let hashmap = new Hashmap(1024);
console.log('hashmap : ', hashmap);
// console.log('hashmap : ', hashmap.hash('nawal'));

/************** addPair ***************/
hashmap.addPair('name','nawal');
hashmap.addPair('age',32);

console.log('hashmap.map : ', hashmap.map);

hashmap.map.forEach((data,i) =>{
    console.log('I : ', i);
    console.log('data : ', data);
});

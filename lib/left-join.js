'use strict';

const LinkedList = require('./linkedList.js');
let linkedLH1 = new LinkedList();
let linkedLH2 = new LinkedList();

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }


  /**
     * method takes a key as string (arg) and return a hashed key 
     * @param {string} key 
     */
  hash(key) {
    // hashed the key by divding it to array of char and calculate the ASCII code for each one then sum the value of it then return it
    let hashedKey = key.split('').reduce((acc, val, idx) => {

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

  /**
     * Add new value pair as an array to the hashtable
     * @param {string} key 
     * @param {string} value 
     */
  addPair1(key, value) {
    // to hash the  key then add it to array as a node in linked list 
    let hashedKey = this.hash(key);
    // console.log('hashedKey in add() : ', hashedKey);
    if (!this.map[hashedKey]) {
      linkedLH1.add([key, value]);
      this.map[hashedKey] = linkedLH1;
    }
    else {
      this.map[this.hash(key)] = this.map[hashedKey].add([key, value]);
      // console.log('this.map[this.hash(key) : ', this.map[this.hash(key)]);
      // console.log('this.map[hashedKey].add([key,value] : ', this.map[hashedKey].add([key,value]));
    }
  } // end of add() method 

  addPair2(key, value) {
    // to hash the  key then add it to array as a node in linked list 
    let hashedKey = this.hash(key);
    // console.log('hashedKey in add() : ', hashedKey);
    if (!this.map[hashedKey]) {
      linkedLH2.add([key, value]);
      this.map[hashedKey] = linkedLH2;
    }
    else {
      this.map[this.hash(key)] = this.map[hashedKey].add([key, value]);
      // console.log('this.map[this.hash(key) : ', this.map[this.hash(key)]);
      // console.log('this.map[hashedKey].add([key,value] : ', this.map[hashedKey].add([key,value]));
    }
  } // end of add() method

  /**
     * get an item from array of the hashtable
     * @param {String} key 
     */
  get(key) {

    // let hashedKey = this.hash(key);

    // if(!this.map[hashedKey]){
    //     return null;
    // }
    // console.log('this.map[hashedKey]',this.map[hashedKey].read(key));
    // return this.map[hashedKey].read(key);

    // // First simple way 
    let arr = linkedLH1.read();
    // console.log('arr : ', arr);

    arr.forEach(data => {
      // console.log('data : ', data);
      if(key === data[0]){
        console.log(' item ',data[1]);
      }
      else {
        console.log('Item Not Found');
      }
    });
    return arr;
  } // end of get() method 

  /**
     * return true if the key exist and false if not 
     * @param {string} key 
     */
  contains(key) {
    let arr = linkedLH1.read();
    // console.log('arr : ', arr);
    for(let i = 0;i<arr.length;i++){
      // console.log('arr[i]',arr[i]);
      if(arr[i][0] == key){
        // console.log('true : ', true);
        return true;
      }
      else {
        console.log('false : ', false);    
      }
    }
    //  arr.forEach(data => {
    //     // console.log('data : ', data);
    //     if( ){
    //         console.log(' item exist',data[1] , true);
    //     }
    //     else{
    //         console.log('Item Not Exist',false);
    //     }
    // });
  } // end of contains() method 

  getArr(ll){
    return ll.read();
  }


} // end of hashmap method 

let joinArr = [];

function leftJoins(h1,h2){
  let hashArr1 = h1.getArr(linkedLH1);
  let hashArr2 = h2.getArr(linkedLH2);
  console.log('hashArr1 : ', hashArr1);
  console.log('hashArr2 : ', hashArr2);
  
  for(let i =0;i<hashArr1.length;i++){
    console.log('hashArr1[i] : ', hashArr1[i]);
    for(let j =0;j<hashArr2.length;j++){
      console.log('hashArr2[i] : ', hashArr2[i]);
      if(hashArr1[i][0] === hashArr2[j][0]){
        if(hashArr1[i][1] === hashArr2[j][1]){
          console.log('same key and value')
          joinArr.push(hashArr1[i]);
        } else {
          joinArr.push(hashArr2[j]);
        }
      }
    }
  }

  
  // while(hashArr1.length >0 && hashArr2.length >0){
  //   console.log('hashArr1[0] : ', hashArr1[4]);
  //   console.log('hashArr2[0]  : ', hashArr1[3] );
  //   if      (hashArr1[0] < hashArr2[1] ){ hashArr1.shift();
  //   }
  //   else if (hashArr1[0] > hashArr2[0] ){ hashArr2.shift(); 
  //   }
  //   else 
  //   {
  //     joinArr.push(hashArr1.shift());
  //     hashArr2.shift();
  //   }
  // }
}

/************** Hashmap ***************/
let hashmap1 = new Hashmap(1024);
let hashmap2 = new Hashmap(1024);

// console.log('hashmap : ', hashmap.hash('nawal'));

/************** addPair ***************/
hashmap1.addPair1('name', 'nawal');
hashmap1.addPair1('age', 32);
hashmap1.addPair1('status', 'single');

// hashmap.get('age');
// hashmap.contains('name');

hashmap2.addPair2('name', 'dania');
hashmap2.addPair2('age', 27);
hashmap2.addPair2('hoppy', 'sleeping');


// console.log('hashmap : ', hashmap.map);
// console.log('hashmap.map : ', hashmap.map);

// hashmap.map.forEach((data,i) =>{
//     console.log('I : ', i);
//     console.log('data : ', data);
// });

console.log('hashmap1 : ', hashmap1.map);
console.log('hashmap2 : ', hashmap2.map);

leftJoins(hashmap1,hashmap2);
console.log('joinArr : ', joinArr);

module.exports = Hashmap;
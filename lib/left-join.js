'use strict';

class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
  } // end of Node class 
  
  class LinkedList {
    constructor(){
      this.head = null;
    }
  
    add(data){
      let node = new Node(data);
      if(!this.head){
        this.head = node;
      }
      else{
        node.next = this.head;
        this.head = node;
      }
    } // end of add() method 
  
    read(){
      if(!this.head){
        return null;
      }
      else {
        let currentNode = this.head;
        while(currentNode){
          // console.log('currentNode.data : ', currentNode.data);
          readArr.push(currentNode.data);
          currentNode = currentNode.next;
        }
    //   return currentNode.data;
        return readArr;
      }
    } // end of read() method
  } // end of LinkedList Class
  let linkedL = new LinkedList();
  let readArr = [];
  
  class HashTable {
    constructor(size) {
      this.table  = new Array(137);
      // this.values = [];
      this.size = size;
    }
    
    // Defining the hashing function which allows a sting to be used as a key
    hash(key) {
     let hashedKey = key.split('').reduce((acc, val, idx) => {
        return acc + val.charCodeAt(0);
      }, 0); // end of reduce method 
  
      hashedKey = hashedKey * 15;
      // console.log('hashedKey * 15 : ', hashedKey );
      hashedKey = hashedKey % this.size;
      // console.log('hashedKey % size : ', hashedKey);
    //   console.log('hashedKey',hashedKey);
      return hashedKey;
    }
  
    showDistro() {
      for (const key in this.table) {
        if(this.table[key] !== undefined) {
          console.log(key, ' : ', this.table[key]);
        }
      }
    }
  
    // put(key,val) {
    //   // console.log('key',key);
    //   const pos = this.hash(key);
    //   // console.log('pos',pos);
    //   this.table[pos] = val;
    // }
  
    put(key,val){
      let hashedKey = this.hash(key);
    //   console.log('hashedKey in put() : ', hashedKey);
      if (!this.table[hashedKey]) {
        linkedL.add([key, val]);
        this.table[hashedKey] = linkedL;
        // linkedL.read();
      }
      else {
        this.table[this.hash(key)] = this.table[hashedKey].add([key, val]);
        
      }
    }
  
    get(key) {
      // console.log('hashtable : ',this.table[this.hash(key)]);
      let linkedArr = linkedL.read();
      console.log('linkedArr : ', linkedArr);
      return this.table[this.hash(key)];
    }
  }
  
  let hashmap1 = new HashTable(1024);
  
  hashmap1.put('age',32)
  hashmap1.put('status','single')
  hashmap1.put('name','dania')
//   hashmap1.put('name','nawal')
  hashmap1.get('age');
  hashmap1.showDistro();
  
//   console.log('hashmap1',hashmap1);
  
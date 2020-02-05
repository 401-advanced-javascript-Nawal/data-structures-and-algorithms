'use strict';

class AnimalShelter{
    constructor(){
        this.catArr = new Array();
        this.dogArr = new Array();
      }

     /**
     * Add an item at the end of the queue
     * @param {string} anim 
     */
  enqueue(anim){

    // console.log('anim : ', anim);
    if( anim.name === 'cat' )
    this.catArr.push(anim);
    else if( anim.name === 'dog' ){
      this.dogArr.push(anim);
    }
    else {
      return ' Not Animal'; 
    }
  } // end of enqueue method 

  /**
     * remove an item from the front of the queue 
     * no param 
     */
  dequeue(pref){
    if(!this.catArr.length || !this.dogArr.length ){
      return null;
    }

    if(pref.name === 'cat'){
      let shiftElement = this.catArr.shift();
      return shiftElement;
    } else if(pref.name === 'dog'){
      let shiftElement = this.dogArr.shift();
      return shiftElement;
    } else {
      return null;
    }
  } // end of dequeue method

} // end of AnimalShelter class


module.exports = AnimalShelter;
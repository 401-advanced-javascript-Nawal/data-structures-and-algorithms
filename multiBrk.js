'use strict';


// let stringBr = '{}{Code}[Fellows](())';

class Multi {
  constructor(stringBr){
    this.stringBr = stringBr;
  }

  multiBraket(str){

    let spiltStr = str.split('');
    // console.log('spiltStr : ', spiltStr);
    let braketStrCount = 0;
    spiltStr.forEach(element => {
      // console.log('element : ', element);
      if(element === '(' || element === ')')
      {
        braketStrCount++;
      } else if(element === '{' || element === '}')
      {
        braketStrCount++;
      } else if(element === '[' || element === ']')
      {
        braketStrCount++;
      }
    });
    console.log('braketStrCount : ', braketStrCount);
    if(braketStrCount%2 === 0)
    {
      return true;
    }else {
      return false;
    }
  } // end of multi function

}
 
module.exports = Multi;
// multiBraket(stringBr);

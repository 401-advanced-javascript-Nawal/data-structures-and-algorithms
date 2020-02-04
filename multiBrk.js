'use strict';


let stringBr = '{}{Code}[Fellows](())';
function multiBraket(str){

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
        return 'even';
    }else {
        return 'odd';
    }
} // end of multi function 

multiBraket(stringBr);
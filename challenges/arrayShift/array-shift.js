'use strict';

let shiftArray = module.exports = {};

shiftArray.insertShiftArray = (array,value) =>
{
    let middleIdx = array.length /2 ;

    array.insert(middleIdx,value);
}
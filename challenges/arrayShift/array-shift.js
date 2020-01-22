'use strict';

let shiftArray = module.exports = {};

shiftArray.insertShiftArray = (array,value) =>
{
    let middleIdx = Math.floor(array.length /2);
    array.splice(middleIdx,0,value);
    return array.length;
}


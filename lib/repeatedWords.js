'use strict';

let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

//Converts the string into lowercase  
//Split the string into words using built-in function  
function repeatedWordInStr(string) {

    let splitstr = string.toLowerCase().split(' ');

// console.log('splitstr = ', splitstr);
let count;

for (let i = 0; i < splitstr.length; i++) {
    // console.log('splitstr[i] 11' , splitstr[i]);
    count = 1;
    for (let j = i + 1; j < splitstr.length; j++) {
        if (splitstr[i] === splitstr[j]) {
            count++;
            // set the word to 0 to avoid repeated comparison 
            splitstr[j] = '0';
        }
    }
    //Displays the duplicate word if count is greater than 1  
    if (count > 1 && splitstr[i] !== '0') {
        // console.log('word ', splitstr[i]);
        return splitstr[i];
    }
}

} // end of repeatedWordInStr function 

let word = repeatedWordInStr(str);
console.log('Repeated Word Is : ', word);
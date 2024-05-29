/**
 * Write a function to check if a number is even or odd.
 * @param {number} num The number to check.
 * @return {boolean} True if the number is even, false if it is odd.
 */



function numCheck(num) {
    if( num % 2 == 0 ){
        return console.log( `The number ${num} is even.` );
    } else {
        return console.log( `The number ${num} is odd.`);
    }
}

const oddNum = numCheck(3);
const evenNum = numCheck(10);
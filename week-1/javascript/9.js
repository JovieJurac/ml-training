/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

function isLower(num){
    try {
        
        if ( num < 0 ){
            throw `The number ${num} is not a positive integer` ;
        } else {
            throw `The number ${num} is a positive number`
        }
    } catch (error) {
        return console.log(error);
    }
}

isLower(-10);
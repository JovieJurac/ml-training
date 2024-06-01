/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function checkInteger(num:number) {
    try {
      if (!Number.isInteger(num)) {
        throw "The inputted value ain't an integer!";
      } else {
        console.log(`The inputted value is ${num}`);
      }
    } catch (error) {
      return console.log(error);
    }
  }
  
  checkInteger(-2);
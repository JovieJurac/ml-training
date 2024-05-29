/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

function isZero(num1, num2){
    if (num2 == 0){
        console.log( "The second value is equal to 0.");
    } else {
        console.log(` The 1st value is ${num1} and the 2nd value is ${num2}, respectively.`)
    }
}

isZero(1,-2)
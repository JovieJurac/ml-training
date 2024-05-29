/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function sumArray(...numbers){
    console.log(numbers)
    let total = 0;

    for (const num of numbers){
        console.log(num);
        total += num;
    }
    return console.log(total);
}

const number = sumArray(1,2,3);
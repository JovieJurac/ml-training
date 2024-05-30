/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */

function finder(...arr){
    const newArr = arr.sort();
    console.log(`The lowest value in the array is ${newArr[0]} while the highest is ${newArr[arr.length - 1]}.`);
}
finder(5,4,2,8,1,7);
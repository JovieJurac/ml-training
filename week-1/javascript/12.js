/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */


function emptyCheck(...arr){
    if(arr.length == 0){
        console.log("The array is empty");
    } else {
        console.log(arr);
    }
}

emptyCheck(1,2,3,4,5);
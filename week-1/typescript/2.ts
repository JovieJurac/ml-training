/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function sumArray(...numbers: number[]): number {
  let total: number = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumArray(1, 2, 3));

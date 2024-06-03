/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function mergeArray(arr1: number[], arr2: number[]):void{
    const merged: number[] = [...arr1, ...arr2];
    const uniqueMerged : number[] = [...new Set(merged)];
    return console.log(uniqueMerged);
}

mergeArray([1,2,3,4],[2,3,4,5]);
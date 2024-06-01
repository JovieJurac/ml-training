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

function mergeArray(arr1, arr2){
    const merged = [...arr1, ...arr2];
    const uniqueMerged = [... new Set(merged)];
    return console.log(uniqueMerged);
}

mergeArray([23,25,234,1,3,45,6,6],[5,1,53,23,5,3,1]);

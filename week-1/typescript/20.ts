/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */

function switcher(str: string):void {
    let switched: string = str
      .split("")
      .map((char: string) => {
        return char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase();
      })
      .join("");
  
    return console.log(switched);
  }
  
  switcher("Hello World!");
  
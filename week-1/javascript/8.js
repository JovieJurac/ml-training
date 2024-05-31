/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */

function fetchVowel(str) {
  const vowels = "aeiouAEIOU";
  let collect = [];

  for (let char of str) {
    if (vowels.includes(char)) {
      collect.push(char);
    }
  }
  return console.log(collect);
}

fetchVowel("I Love You!");

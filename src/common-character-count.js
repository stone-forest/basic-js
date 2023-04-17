const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(/* s1, s2 */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr = s2.split('');

  for (char of s1) {
    const elemIndex = arr.findIndex((s) => s === char);

    if (elemIndex >= 0) {
      count++;
      arr.splice(elemIndex, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};

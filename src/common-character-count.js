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
function getCommonCharacterCount(s1, s2) {
  const s1Arr = new Array(26).fill(0);
  const s2Arr = new Array(26).fill(0);
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < s2.length; i++) {
    s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    count += Math.min(s1Arr[i], s2Arr[i]);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};

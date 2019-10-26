/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const map = {};
  let start = 0;
  let end = 0;
  let maxLength = 0;
  while (end < s.length - maxLength) {
    const lettle = s[end];
    if (map[lettle] >= start) {
      maxLength = Math.max(maxLength, end - start);
      start = map[lettle] + 1;
      continue;
    }
    map[lettle] = end;
    end += 1;
  }
  maxLength = Math.max(maxLength, end - start);
  return maxLength;
};

const param = ' ';
console.log(lengthOfLongestSubstring(param));

/**
 * @param {string} s
 * @return {string}
 */

const expandAroundCenter = (s, left, right) => {
  let start = left;
  let end = right;
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start -= 1;
    end += 1;
  }
  return end - start - 1;
};

const longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i += 1) {
    const oddLength = expandAroundCenter(s, i, i);
    const evenLength = expandAroundCenter(s, i, i + 1);
    // console.log(oddLength);
    // console.log(evenLength);
    const maxLength = Math.max(oddLength, evenLength);
    if (maxLength > end - start + 1) {
      if (maxLength === oddLength) {
        start = i - (oddLength - 1) / 2;
        end = i + (oddLength - 1) / 2;
      } else {
        start = i - (evenLength / 2 - 1);
        end = i + 1 + (evenLength / 2 - 1);
      }
    }
  }
  return s.slice(start, end + 1);
};

console.log(longestPalindrome('bb'));

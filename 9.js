/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const xStr = x.toString();
  return xStr === xStr.split('').reverse().join('');
};

console.log(isPalindrome(-121));

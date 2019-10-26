/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let num = x;
  let reverseNum = 0;
  while (num > 0) {
    // console.log(num, reverseNum);
    reverseNum = (reverseNum * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return x === reverseNum;
};

console.log(isPalindrome(121));

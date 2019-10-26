/**
 * @param {number} x
 * @return {number}
 */

const max = 2 ** 31;

const reverse = function (x) {
  const prefix = x < 0 ? '-' : '';
  const num = x > 0 ? x : -x;
  const reverseNumber = Number(`${prefix}${num.toString().split('').reverse().join('')}`);
  if (reverseNumber > max - 1 || reverseNumber < -max) {
    return 0;
  }
  return reverseNumber;
};

console.log(reverse(-123));

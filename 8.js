/* eslint-disable linebreak-style */
/**
 * @param {string} str
 * @return {number}
 */
const maxInt = (2 ** 31) - 1;
const minusMaxInt = -(2 ** 31);

const myAtoi = function (str) {
  let allSpace = true;
  let meetNum = false;
  let minus = false;
  let num = 0;
  for (let i = 0; i < str.length; i += 1) {
    const lettle = str[i];
    console.log(lettle);
    console.log(num);
    // 一直是空格
    if (allSpace) {
      if (lettle === ' ') {
        continue;
      }
      allSpace = false;
      if (!/[0-9-+]/.test(lettle)) {
        break;
      }
      meetNum = true;
      if (lettle === '+') {
        num = 0;
        continue;
      } else if (lettle === '-') {
        minus = true;
        num = 0;
      } else {
        num = Number(lettle);
      }
    } else {
      allSpace = false;
      if (!/[0-9]/.test(lettle)) {
        break;
      } else {
        const thisNum = Number(lettle);
        if (!minus && num > (maxInt - thisNum) / 10) {
          return maxInt;
        }
        if (minus && num < (minusMaxInt + thisNum) / 10) {
          return minusMaxInt;
        }
        num = (num * 10) + (thisNum * (minus ? -1 : 1));
      }
    }
  }

  if (allSpace) {
    return str;
  }
  if (!meetNum) {
    return 0;
  }
  return num;
};

// console.log(myAtoi('4193 with words'));
console.log(myAtoi('-91283472332'));
// console.log(myAtoi('42'));
// console.log(myAtoi('words and 987'));

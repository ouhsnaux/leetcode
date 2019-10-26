const maxInt = (2 ** 31) - 1;
const minusMaxInt = -(2 ** 31);

const myAtoi = (str) => {
  const newStr = str.trimStart();
  // if (newStr === '' || /[^+\-0-9]/.test(newStr[0])) {
  //   return str;
  // }
  const numStr = newStr.match(/^[+-]?\d+/);
  if (numStr) {
    if (numStr.length > 12) {
      return 0;
    }
    const num = Number(numStr);
    if (num > maxInt) {
      return maxInt;
    }
    if (num < minusMaxInt) {
      return minusMaxInt;
    }
    return num;
  }
  return 0;
};

console.log(myAtoi('4193 with words'));

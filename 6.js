/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const resultArrs = new Array(numRows).fill('');
  let i = 0;
  let flag = -1;
  for (let index = 0; index < s.length; index += 1) {
    const str = s[index];
    if (i === 0 || i === numRows - 1) {
      flag = -flag;
    }
    resultArrs[i] = resultArrs[i].concat(str);
    i += flag;
  }
  const result = resultArrs.join('');
  return result;
};

console.log(convert('A', 1));

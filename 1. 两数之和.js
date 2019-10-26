var twoSum = function (nums, target) {
  const newNumbers = [...nums].sort((a, b) => a - b);
  let firstIndex = 0;
  let secondIndex = nums.length - 1;
  while (true) {
    if (firstIndex >= secondIndex) {
      break;
    }
    const sum = newNumbers[firstIndex] + newNumbers[secondIndex];
    if (sum > target) {
      secondIndex -= 1;
    } else if (sum < target) {
      firstIndex += 1;
    } else {
      const realFirstIndex = nums.indexOf(newNumbers[firstIndex]);
      const realSecondIndex = nums.indexOf(newNumbers[secondIndex], newNumbers[secondIndex] === newNumbers[firstIndex] ? realFirstIndex + 1 : 0);
      return [realFirstIndex, realSecondIndex];
    }
  }
};
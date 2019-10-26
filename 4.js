const getMaxorMin = (num1, num2, max = true) => {
  if (num1 == null) {
    return num2;
  }
  if (num2 == null) {
    return num1;
  }
  const func = max ? 'max' : 'min';
  return Math[func](num1, num2);
};

const findMedianSortedArrays = function (nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  if (length1 > length2) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let startIndex = 0;
  let endIndex = nums1.length;
  let index1;
  let index2;
  while (endIndex >= startIndex) {
    index1 = Math.ceil((startIndex + endIndex) / 2);
    index2 = Math.ceil((length1 + length2) / 2) - index1;
    if (nums1[index1 - 1] > nums2[index2]) {
      endIndex = index1 - 1;
      continue;
    }
    if (nums2[index2 - 1] > nums1[index1]) {
      startIndex = index1 + 1;
      continue;
    }
    break;
  }
  // console.log(endIndex < startIndex);
  // console.log(index1);
  // console.log(index2);
  const leftMax = getMaxorMin(nums1[index1 - 1], nums2[index2 - 1]);
  if ((length1 + length2) % 2 === 0) {
    const rightMin = getMaxorMin(nums1[index1], nums2[index2], false);
    return (leftMax + rightMin) / 2;
  }
  return leftMax;
};

console.log(findMedianSortedArrays(
  [4],
  [1, 2, 3, 5],
));

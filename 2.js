const addTwoNumbers = function (l1, l2) {
  let flag = 0;
  let result;
  let lastNode;
  let node1 = l1;
  let node2 = l2;
  while (node1 !== null || node2 !== null) {
    let sum = ((node1 && node1.val) || 0) + ((node2 && node2.val) || 0) + flag;
    if (sum > 9) {
      flag = 1;
      sum -= 10;
    } else {
      flag = 0;
    }
    const node = {
      val: sum,
      next: null,
    };
    if (result) {
      lastNode.next = node;
      lastNode = node;
    } else {
      result = node;
      lastNode = node;
    }
    node1 = (node1 && node1.next) || null;
    node2 = (node2 && node2.next) || null;
  }
  if (flag === 1) {
    lastNode.next = {
      val: 1,
      next: null,
    };
  }
  return result;
};

let numSum = num => {
  let result = 0;
  while (num > 0) {
    result += num--;
  }
  return result;
};

console.log(numSum(4));
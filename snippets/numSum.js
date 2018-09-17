let numSum1 = num => {
  let result = 0;
  while (num > 0) {
    result += num--;
  }
  return result;
};

let numSum2 = num => num * (num + 1) / 2;

console.log(numSum1(4));
console.log(numSum2(4));
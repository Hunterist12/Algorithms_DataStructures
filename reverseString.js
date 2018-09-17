let reverse1 = str => str.split('').reverse().join('');

let reverse2 = str => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverse1('hello'));
console.log(reverse2('hello'));
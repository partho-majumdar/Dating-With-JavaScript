function sample(a, b, callBack) {
  let c = a + b;
  let d = a - b;

  let result = callBack(c, d);
  return result;
}

// subtraction of 2 number
let result3 = sample(9, 6, function (c, d) {
  return c - d;
});
console.log(result3);

// multiply 2 number
let result4 = sample(6, 9, function (c, d) {
  return c * d;
});
console.log(result4);

// sum of 2 number using callback
function sum(x, y) {
  return x + y;
}

let result2 = sample(4, 5, sum);
console.log(result2);

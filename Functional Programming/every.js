// akta condition fail korle false

let arr = [5, 6, 7, 8, 9, 1, 2, 3, -69];

let result1 = arr.every(function (value) {
  return value % 2 === 0;
});

console.log(result1);

let result2 = arr.every(function (value) {
  return value >= 0;
});

console.log(result2);

// akta condition pass korle e true

let result3 = arr.some(function (value) {
  return value % 2 === 1;
});

console.log(result3);

let result4 = arr.some(function (value) {
  return value < 0;
});

console.log(result4);

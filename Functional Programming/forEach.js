let arr = [3, 5, 7, 9, 1, 2, 6];

arr.forEach(function (value, index, array) {
  console.log(value, index, array);
});

/* sum of array */

let arr2 = [5, 9, 2, 8, 3, 6, 7];

let sum = 0;
arr2.forEach(function (value) {
  sum += value;
});

console.log(sum);


let arr = [39, 28, 19, 13, 69, 34, 47, 55];

let sum = arr.reduce(function (previous, current) {
  return previous + current;
}, 0);

let maxValue = arr.reduce(function (previous, current) {
  return Math.max(previous, current);
});

console.log(sum);
console.log(maxValue);

/* max value of the array */

var arr3 = [8, 1, 28, 5, 3, 9, 7, 2, 4];

// R-01

var max = 0;
function maxValue2(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue2(arr3));

// R-02

let output = arr3.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }

  return max;
}, 0);

console.log(output);

// Nice example ==> puro array use kore 2 ta value find korte hobe tai reduce method

const users = [
  { firstName: "John", lastName: "ray", age: 36 },
  { firstName: "Chinku", lastName: "kumar", age: 19 },
  { firstName: "Peaky", lastName: "blinders", age: 32 },
  { firstName: "Minku", lastName: "singh", age: 25 },
  { firstName: "Tomas", lastName: "shelby", age: 36 },
];

/* How many users have particular age  ==> prev = {36:2, 19:1, 32:1, 25:1} */

const output2 = users.reduce(function (prev, curr) {
  if (prev[curr.age]) {
    prev[curr.age] = ++prev[curr.age];
  } else {
    prev[curr.age] = 1;
  }

  return prev;
}, {});

console.log(output2);

function add(x, y) {
  console.log(x + y);
}

add(5, 28);

/* Juicy Formula  */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = [11, 24, 35, 28, 5, 69];

/* Rule-01 */

let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);

/* Rule-02 */

function sumOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumOfArr(arr1);
sumOfArr(arr2);
sumOfArr(arr3);
sumOfArr(arr4);

function test() {
  console.log(arguments);
}

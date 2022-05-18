//Example-01

function recursion(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  recursion(n - 1);
}

recursion(9);

//Example-02

function sum(n) {
  if (n === 1) {
    return 1;
  }

  console.log(n);
  console.log(n - 1);

  return n + sum(n - 1);
}

console.log(sum(5));

//Example-03

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Example-04

let arr = [1, 2, 3, 4, 5, 6];

function sumOfArray(array, lastIndex) {
  if (lastIndex === 0) {
    return 0;
  }

  return array[lastIndex] + sumOfArray(array, lastIndex - 1);
}

console.log(sumOfArray(arr, arr.length - 1));

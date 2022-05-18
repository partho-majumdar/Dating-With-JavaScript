function add(a, b) {
  return a + b;
}

// 1. A function can be stored in an variable.
let sum = add;
console.log(sum(3, 4));

// 2. A function can be stored in an array.
let arr = [];
arr.push(add);
console.log(arr[0](5, 4));

// 3. A function can be stored in an object
let obj = {
  sum: add,
};
console.log(sum);
console.log(obj.sum(6, 9));

// 4. We can create function as we need.
setTimeout(function () {
  console.log("This function is call after 2 second");
}, 2000);

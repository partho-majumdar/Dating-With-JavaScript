var arr = [7, 1, 9, 3, 6, 4, 5, 2, 8];

let findNine = arr.find(function (value) {
  return value === 9;
});

console.log(findNine);

let findIndexSix = arr.findIndex(function (value) {
  return value === 6;
});

console.log(findIndexSix);

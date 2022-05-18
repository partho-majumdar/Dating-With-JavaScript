let arr = [2, 1, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = arr.filter(function (value) {
  // return value % 2 === 0;
  return value > 5;
});

console.log(filteredArray);

/* 1st example */

let arr = [4, 8, 1, -3, 6, 7, -1, 9, 4, 0, 3, -8, 5, 6, 8, 2, 1, 7];

let ascendingOrderArr = arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(ascendingOrderArr);

/* 2nd example */

let persons = [
  {
    name: "A",
    age: 23,
  },
  {
    name: "B",
    age: 18,
  },
  {
    name: "C",
    age: 25,
  },
  {
    name: "D",
    age: 17,
  },
];

let ascendingOrderPersons = persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(ascendingOrderPersons);

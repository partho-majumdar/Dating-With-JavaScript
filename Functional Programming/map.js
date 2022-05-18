let arr = [1, 2, 3, 4, 5, 6];

let sqrArr = arr.map(function (value) {
  return value * value;
});

console.log(arr);
console.log(sqrArr);

const users = [
  { firstName: "John", lastName: "ray", age: 36 },
  { firstName: "Chinku", lastName: "kumar", age: 19 },
  { firstName: "Peaky", lastName: "blinders", age: 32 },
  { firstName: "Minku", lastName: "singh", age: 25 },
  { firstName: "Tomas", lastName: "shelby", age: 36 },
];

/* list of full name */

const output = users.map(function (value) {
  return value.firstName + " " + value.lastName;
});

console.log(output);


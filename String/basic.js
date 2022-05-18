let date = new Date();

console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.getDay());

const result = date.getDay() === 0 ? "Today is sunday" : "Today is others day";

console.log(result);

const myString = "today Is Sunday";

console.log(myString.substring(0, 5));
console.log(myString.substring(5, 8));
console.log(myString.substring(8, 15));

console.log(myString.charAt(5));

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.split(""));
console.log(myString.split(" ")[0]);

console.log(Array.from(myString));

var array = [5, 4, 3, 2, 6, 8, 9];

var sum = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);

var arr = [4, 7, 69, 2, 6, 8, 4, 28, 5];

console.log(arr.reverse());
console.log(arr.concat("d", 3, 4, 5));
console.log(Array.isArray(arr));

// console.log(arr.fill(69));

let object = {
  x: 4,
  y: 5,
  z: 6,
};

for (let value in object) {
  console.log(object[value]);
}

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

var global = 10;

function functional() {
  console.log(global);
}

functional();

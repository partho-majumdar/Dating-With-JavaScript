const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(fruits1);

// pair add

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("2800", 200);

console.log(fruits);

// get value form map
console.log(fruits.get("apples"));
console.log(fruits.size);
console.log(fruits.delete("apples"));
console.log(fruits);
console.log(fruits.has("oranges"));

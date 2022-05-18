let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };

/* Rule-01 */

// let newObj1 = JSON.stringify(obj1);
// let newObj2 = JSON.stringify(obj2);

// if (newObj1 === newObj2) {
//   console.log("Both are same");
// } else {
//   console.log("Botha are not same");
// }

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log("Both are same");
} else {
  console.log("Botha are not same");
}

/* Rule-02 */

if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log("Both are same");
} else {
  console.log("BOth are not same");
}

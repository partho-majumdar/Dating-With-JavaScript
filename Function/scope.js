/* Global scope */

var a = "Jhinku";

if (true) {
  console.log(a);
}

/* Block scope ---> function */

/* Rule-01 */
function scope() {
  console.log("This is block scope");
}
scope();

/* Rule-02 */
let parent = "Dada ji";
let child = "Nati ji";

function parent2() {
  let child = "Puti ji";
  function child2() {
    let child = "block child";
    console.log(child);
  }
  child2();
  console.log(child);
}
parent2();

/* Sexy example */

function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n + " " + "is divisible by both 3 and 5");
  } else {
    console.log("Please enter a valid number");
  }
}

test(15);

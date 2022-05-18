// function expresion
const a = function () {
  console.log("I am a function");
};

a();

// self invoking function -> IIFE (Immediate Invoked Function Expression)
(function () {
  console.log("Hei i am self invoked function");
})();

// function use as value
function myFunc(a, b) {
  return a * b; // kono kichu return na korle return undefined
}

let ab = myFunc(3, 4);
console.log(ab);

// arrow function
const x = function (y, z) {
  return y * z;
};

const X = (y, z) => y * z;
const X2 = (y, z) => {
  console.log("I am X");
  return y * z;
};

// function parameter
// function a parameter call kore argument a value na dile oi parameter = undefined

// function default value
function A(p, q = 6) {
  return p % q;
}
console.log(A(9));

// arguments ==> passed by value

function P(a, b) {
  a = a + 6; // a = 6 + 6 = 12 // b = 9
  return a * b;
}
const m = 6;
const n = 9;

console.log(P(m, n));

console.log(m, n); // m, n ar shudhu value e jabe parameter ar moddhe m ar location jacche na

// object ar time a value impact kore

function Q(x) {
  x.one = 10;
  return x.one * x.two;
}

const arr = {
  one: 6,
  two: 9,
};

console.log(Q(arr));

console.log(arr);

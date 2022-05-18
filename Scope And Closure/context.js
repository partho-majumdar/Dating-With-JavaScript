// Execution context

function a() {
  b();
  console.log("This is function A");
}

function b() {
  d();
  console.log("This is function B");
}

function c() {
  console.log("This is function C");
}

function d() {
  c();
  console.log("This is function D");
}

let x = 69;
a()
console.log("I am global");

// a() k jotokhon na call korche totokhon kono code execute hobe na kintu code gulo kothao akta store hobe 

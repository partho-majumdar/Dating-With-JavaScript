let b = 22;

function a() {
  console.log(b);
}

a();

/* 2nd example all code chrome dev tool a  paste korbo */

function c() {
  let x = 69;

  return function () {
    console.log(x);
  };
}

var abc = c();
console.dir(abc);

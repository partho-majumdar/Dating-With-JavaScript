/* This is pure function */

function sqr(n) {
  return n * n;
}

console.log(sqr(5));
console.log(sqr(5));
console.log(sqr(5));

/* This is not a pure function cause it has side effect it change the original point object value */

let point = {
  x: 10,
  y: 20,
};

function printPoint(point) {
  point.x = 100;
  point.y = 200;

  console.log(point);
}
printPoint(point);

console.log(point);

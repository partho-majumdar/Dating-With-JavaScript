/* We can pass function as an argument */
/* We can return function from another function */

function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  console.log(c, d);

  function multiply() {
    var m = func(a, b);

    console.log(m);

    return c * d * m;
  }

  return multiply; // manipulate function theke multiply function return korlam
}

var multiply = manipulate(5, 4, add); // add function k manipulate function ar arguments akare pass korlam
console.log(multiply());

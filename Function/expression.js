var addition = function (a, b) {
  return a + b;
};

var another = addition;
console.log(another(2, 3));

/* Set time out */

setTimeout(function () {
  console.log("This will call after 3 second");
}, 3000);

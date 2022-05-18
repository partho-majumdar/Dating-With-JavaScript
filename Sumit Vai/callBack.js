// jokhon akta function onno function ar argument akare pass kora hoy tokhon ta callback function
function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);
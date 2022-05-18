// function clickMe() {
//   var p = document.getElementById("takeClick");
//   p.innerHTML = "Why you click 'Click Me' button?";
// }

// syntax
/* element.addEventListener(event, function, useCapture); */

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  let p = document.querySelector("#takeClick");
  p.innerHTML = "Button clicked";
});

button.addEventListener("mouseover", function () {
  let p = document.querySelector("#takeClick");
  p.innerHTML = "Mouse over in button";
});

button.addEventListener("mouseout", function () {
  let p = document.querySelector("#takeClick");
  p.innerHTML = "Mouse out form button";
});

// if we want to pass parameter in function

function myFunc(text) {
  console.log(text);
}

const btn = document.querySelector("#ppBtn");
btn.addEventListener("click", function () {
  myFunc("Hello World");
});

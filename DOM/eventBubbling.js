const container = document.getElementById("container");
container.addEventListener(
  "click",
  function () {
    console.log("Container Clicked");
  },
  true
);

const button = document.getElementById("btn");
button.addEventListener(
  "click",
  function () {
    console.log("Button Clicked");
  },
  true
);

// true ==> here use true for event capturing but by default it is false 

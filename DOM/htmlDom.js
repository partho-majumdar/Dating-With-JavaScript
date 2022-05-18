const element = document.querySelector("#myImage");

console.dir(element);

element.src = "test.jpg";

const date = document.getElementById("demo");

function btn() {
  date.innerHTML = "Today's date is : " + new Date();
}

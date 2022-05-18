const para = document.createElement("p");
const node = document.createTextNode("This p is create using node");

para.appendChild(node);

const div = document.getElementById("div1");
// div.appendChild(para);

// ami jodi p1 ar age ai element bosate chai ==> insertBefore

const p1 = document.getElementById("p1");
div.insertBefore(para, p1);

/* for remove element  */
const parentDiv = document.getElementById("div1");
const p2 = document.getElementById("p2");
parentDiv.removeChild(p2);

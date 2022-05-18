/* 
https://youtu.be/Fnlnw8uY6jo

2 Golden Rules:
1. Variable declarations are scanned and are made undefined
2. Function declarations are scanned and are made available 
*/

/*===> This is ultimate example of javascript hoisting <===*/

// Step-01

var x = 5;

function getFunc() {
  console.log("This is getFunc function");
}

getFunc(); // This is getFunc function
console.log(x); // 5
console.log(getFunc); // puro function k e console korbe

// Step-02

getFunc(); // This is getFunc function
console.log(x); // undefined
console.log(getFunc);

var x = 5;

function getFunc() {
  console.log("This is getFunc function");
}

// Step-o3

console.log(getFunc); // ii. akhane o puro function k e console korbe

function getFunc() {
  console.log("This is getFunc function");
}

console.log(getFunc); // i. puro function k e console korbe

var myFunc = function () {}; // ai 2 ta e error dibe cause ai function gulo variable ar moto behave korbe
var myFunc2 = () => {}; // ai 2 ta e error dibe cause ai function gulo variable ar moto behave korbe

/* 

1. step-01 a code execute howar age sob variable and function a r jonno memory allocate hobe console ar source a giye first line k debug korle scope ar moddhe dekhbo x=undefined

2. getFunc ar jonno kono undefined pabo na but actual getFunc function ar copy pabo.

3. step-02 tay getFunc a debug korle console a x=undefined kintu getFunc ar console oi function ta e

4. step-02 theke jodi x k remove kore dai tokhon memory tay x ar jonno kono reserve value e nai tai reference error dibe
*/

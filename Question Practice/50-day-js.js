const num = -1002;

function reverseGivenInteger(num) {
  // write your solution here

  let numbers = Math.abs(num);

  let reversed = numbers.toString().split("").reverse().join("");

  if (num < 0) {
    return reversed * -1;
  }

  return reversed;
} 

// 

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);


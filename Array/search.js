let arr = [7, 2, 8, 9, 4, 5, 28];

let find = 218;
let isFound = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === find) {
//     console.log("Data found: " + arr[i]);
//     isFound = true;
//     break;
//   }
// }

for (data of arr) {
  if (data === find) {
    console.log("Data found: " + data);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data not found");
}

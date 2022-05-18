let arr = [
  [61, 66, 69, 65, 62],
  [79, 72, 78, 74, 75],
  [88, 81, 86, 89, 84],
];

// console.log(arr[0][4]);

for (var i = 0; i < arr.length; i++){
    for (var j = 0; j <arr[i].length; j++){
        console.log("Element" + i,j + ": " + arr[i][j])
    }
}
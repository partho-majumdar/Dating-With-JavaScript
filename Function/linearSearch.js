function linearSearch(arr, key) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, , 4, 5];
linearSearch(arr);

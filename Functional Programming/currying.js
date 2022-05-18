function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var finalResult = currying(4)(5)(6);
console.log(finalResult);

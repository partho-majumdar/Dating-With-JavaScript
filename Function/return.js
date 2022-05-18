function person(name, gender) {
  return {
    fullName: name,
    sex: gender,
  };
}

let p1 = person("Abc", "Male");
console.log(p1);

function addAll() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

let result = addAll
console.log(result(1,2,3))

// call method is ==> function borrowing

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  ); // here this indicate person1
};

let person1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

printFullName.call(person1, "Mumbai", "India");

let person2 = {
  firstName: "Peaky",
  lastName: "Blinders",
};

printFullName.call(person2, "Birmingham", "Irish");

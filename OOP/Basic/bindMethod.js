let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

let person1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

let myName = printFullName.bind(person1, "Mumbai", "India");
myName();

// Bind method gives me copy of a function which i can use(invoke/call) letter

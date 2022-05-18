let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

let person1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

printFullName.apply(person1, ["Mumbai", "India"]);

let person2 = {
  firstName: "Peaky",
  lastName: "Blinders",
};

printFullName.apply(person2, ["Birmingham", "Irish"]);

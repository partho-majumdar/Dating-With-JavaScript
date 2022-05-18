class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

console.log(Car());

const test = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

console.log(JSON.parse(test));

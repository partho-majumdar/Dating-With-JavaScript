function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const person1 = new Person("AR", "Rahman", 43);
const person2 = new Person("Kunal", "Kushwaha", 22);
const person3 = new Person("William", "Lin", 18);

person2.country = "India";

console.log(person1, person2, person3);

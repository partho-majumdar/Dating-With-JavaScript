// according to w3school function invok !== function call cause javascript a .call() name akta function e ache tai normal function call ke invok bole //

const a = {
  firstName: "Pappu",
  sleep: function () {
    console.log(`${this.firstName} is sleeping`);
  },
};

a.sleep();

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person2));

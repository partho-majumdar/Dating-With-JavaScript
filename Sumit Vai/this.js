const person = {
  firstName: "John",
  lastName: "Doe",
  id: 69,
  fullName: function () {
    return this.firstName + " " + this.lastName; // akhane this mane ami jei object ar moddhe achi
  },
};

console.log(person.fullName());

// this always object ke denote kore

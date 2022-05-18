function first(greet, name) {
  function second() {
    console.log(greet, name);
  }
  second();
}

first("Good Night", "Partho Majumdar");

/* Full content */

function something(greet, name) {
  function firstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "please enter name";
    }
  }
  let message = greet + " " + firstName();
  console.log(message);
}

something("Good morning", "Partho Protim Majumdar");

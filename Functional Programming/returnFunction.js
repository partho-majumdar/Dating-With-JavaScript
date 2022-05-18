function greet(msg) {
  function greetings(name) {
    return msg + " " + name;
  }
  return greetings;
}

let gn = greet("Good Night");

let message = gn("Jhinku");

console.log(message);

function x() {

  var a = 5;
  function y() {
    console.log(a);
  }

  return y;

}

var z = x();
console.log(z);

// thousands line of code then call z()

z(); // akhane toh function deyar kotha cilo kintu ta na kore 5 output dibe 

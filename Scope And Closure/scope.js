// block ==> it also use in loops

if (true) {
  var a = 10;
  console.log(a);
}

// block scope

{
  var x = 10;
  let y = 20;
  const z = 30;
}

/* aita console ar source a debug korle dekhbo let and const block but var global vabe hoisted hobe tai let and const block scope tai shei block ar bahire let and const ke access kora jabe na */

// lexical scope ==> one inside another and console hobe nearest value

const u = 15;
{
  const u = 25;
  {
    const u = 35;
    console.log(u); // 35
  }
  console.log(u); // 25
}
console.log(u); // 15

// shadowing

var p = 11;

{
  var p = 22;
  let q = 33;
  const r = 44;

  console.log(p, q, r);
}

console.log(p); // answer 22 hobe aita e shadowing 11 ke replace korche 22 and 2 p e global scope

// illegal shadowing

var s = 45;
{
  let s = 46;
}

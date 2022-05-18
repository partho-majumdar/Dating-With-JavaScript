/* 01. nicher sentence a "sumit" word ti koybar use kora hoiche? 1st "sumit" koto number position a paowa geche */

const sentence =
  "Learn with sumit is all about teaching web development skills and technique in an efficient and practical manner. If you are just getting started in web development. Learn with sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer.Learn with sumit also deep drives into advanced topics using the latest best practices for you seasoned web developers";

// regular expression

const matches = sentence.match(/sumit/gi);
console.log(matches);

const howMany = matches ? matches.length : 0;
console.log(howMany);

// jodi sumit na diye sumits ditam tokhon "null" petam tokhon ternary operator use korbo

// position search method==> kichu na pele -1 return korbe tai check

let position = sentence.search(/sumit/i);
position = position >= 0 ? position : "not found";

console.log(position);

/* 02. input: linerSearch(["a","b","c","d","c"],"c")
       output: "c" ar position koto => 2 or not found!
       problem: linearSearch() function implement korte hobe

*/

function linearSearch(arr, val) {
  const length = arr.length; // for performance

  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
    // console.log(arr[i]);
    // console.log(val);
  }
  return "not found!";
}

console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));

/* 03. kono array theke kivabe sobcheye "boro string" khuje ber korbo and tar index koto */

const myArr = ["Sumit Saha", "Learn With Sumit", "Saad", "Akash", "Daiyan"];

function largeString(names) {
  let maxWord = "";

  for (let value of names) {
    console.log(value.length);

    if (value.length > maxWord.length) {
      maxWord = value;
    }
  }
  return [maxWord, names.indexOf(maxWord)];
}

console.log(largeString(myArr));

/* 04. 1-100 porjonto kon number gulo 3,5 and both 3 and 5 dhara bibajho */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is foobar`);
  } else if (i % 5 === 0) {
    console.log(`${i} is bar`);
  } else if (i % 3 === 0) {
    console.log(`${i} is foo`);
  } else {
    console.log(`${i}`);
  }
}

/* 05. Array theke kivabe falsyValue(false, undefined, null, "", 0) khuje bad dite pari */

const mixedArr = [
  "lws",
  undefined,
  "learn with sumit",
  false,
  "",
  "apple",
  69,
  "k",
  true,
  "Thanks all",
  NaN,
];

/* Rule-01 */
let trueArray = mixedArr.filter(function (value) {
  if (value) {
    return true;
  } else {
    return false;
  }
});
console.log(trueArray);

/* Rule-02 */
const trueArray2 = mixedArr.filter(Boolean);
console.log(trueArray2);

/* 06. Object theke kivabe falsyValue(false, undefined, null, "", 0) khuje bad dite pari */

const mixedObj = {
  a: "lws",
  b: undefined,
  c: "learn with sumit",
  d: false,
  e: "",
  f: "apple",
  g: 69,
  h: "k",
  i: true,
  j: "Thanks all ",
  k: NaN,
};

const truthyObject = function (mixedObj) {
  for (let value in mixedObj) {
    if (!mixedObj[value]) {
      delete mixedObj[value];
    }
  }

  return mixedObj;
};

console.log(truthyObject(mixedObj));

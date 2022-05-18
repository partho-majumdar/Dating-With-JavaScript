/* 01. ludo khelay 1-6 porjonto random number print */

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(1, 6));

/* 02. nicher nam gulo alphabetically (a=>z) sajate hobe */

const students = [
  "Monir",
  "Bukka",
  "Prodip",
  "Anando",
  "Sagor",
  "Ajay",
  "Hridoy",
];

console.log(students.sort());

/* 03. Roll number ascending akare sajate hobe */

let rollNum = [9, 12, 15, 2, 7, 3, 1, 8, 4, 6, 5, 11, 15, 0, 10];

console.log(
  rollNum.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  })
);

/* 04. kono year leap-year kina ta ber korte hobe if this year either divisible by 4000 |or| this year divisible by 4 and not divisible by 1000  */

//Rule-01
let year = 2028;

if (year % 4000 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

//Rule-02
function isLeapYear(year) {
  if (year % 4000 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2028);
isLeapYear(2018);

/* 05. kono sentence a koto gulo vowel ache ta kivabe ber korbo */

let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

function countVowels(sentence) {
  // const letters = Array.from(sentence);
  const letters = sentence.split("");

  let count = 0;
  letters.forEach(function (value) {
    // console.log(value);

    if (vowels.includes(value)) {
      count++;
    }
  });

  return count;
}

console.log(countVowels("I Love Bangladesh"));

/* 06. kono array theke kivabe duplicate number ber kore ante pari */

const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

let duplicates = numbers.filter(function (value, index, array) {
  // find duplicates value from an array
  console.log(index);
  console.log(array.indexOf(value));

  return array.indexOf(value) !== index;
});

console.log(duplicates);

// find unique value from an array
let unique = numbers.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(unique);

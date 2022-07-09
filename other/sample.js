
const firstName = "Denis";
const lastName = "Mescheryakov";
const age = 30;

let str;

str = "Hello my name is " + firstName + " " + lastName + " i'm " + age + " old";

str = `
<ul>
  <li>First Name: ${ firstName }</li>
  <li>last Name: ${ lastName }</li>
  <li>age: ${ age }</li>
  <li>Math.random ${ Math.round(Math.random() * 100) }</li>
  <li>5 + 5 = ${5+5}</li>
</ul>
`;

console.log(str);

document.body.innerHTML = str;
console.clear();


var person = 'Mike';
var ages = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // Технически, в конце итогового выражения
  // (в нашем примере) есть ещё одна строка,
  // но она пустая (""), так что пропустим её.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // Мы даже можем вернуть строку, построенную другим шаблонным литералом
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ ages }`;

console.log(output);


let string = "some test string";
let firstCharacter;
let lastCharacter;
let slicedSentence;
let value;
let firstSpace;
let firstNumber;
let secondNumber;



// 1 sentece
firstCharacter = string[0];
lastCharacter = string[string.length - 1];

value = firstCharacter + ' ' + lastCharacter
console.log(value);

// 2 sentece
firstCharacter = firstCharacter.toUpperCase();
lastCharacter = lastCharacter.toUpperCase();
slicedSentence = string.slice(1, -1);
value = firstCharacter + slicedSentence + lastCharacter

/*
const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);
 */

// 3 sentece
value = string.indexOf('string'); //10

// 4 sentece
firstSpace = string.indexOf(' ');
value = string.indexOf(' ', (firstSpace + 1))

// 5 sentece
value = string.slice(5, 9)

// 6 sentece
value = string.slice(5, 9)

// 7 sentece
value = string.slice(0, -6)

// 7 sentece
firstNumber = 20
secondNumber = 16
value = firstNumber.toString() + secondNumber



console.log(value);


// let string = "some test string";
// let firstCharacter;
// let lastCharacter;
// let slicedSentence;
// let value;

// firstCharacter = string[0].toUpperCase() ;
// lastCharacter = string[string.length - 1].toUpperCase();
// slicedSentence = string.slice(1, -1);

// value = firstCharacter + slicedSentence + lastCharacter


// console.log(value);
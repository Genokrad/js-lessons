/*
// Numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
// value = 5 % 2;
value++;
value--;
++value;
--value;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
value = ( 0.6 * 10 + 0.7 * 10 ) / 10;

// Math
value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.1);
value = Math.floor(2.9);
value = Math.min(2, 12, 15, 0, 12);

value = Math.floor(Math.random() * 10 + 1);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

console.log(value, arr[value]);

*/

// 1
let x = Math.PI;
x = parseFloat(x.toFixed(2));
console.log(x);
// 2/a
let mathMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(mathMin);
// 2/b
let mathMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(mathMax);
// 3/a
let mathRandom = Math.random();
mathRandom = parseFloat(mathRandom.toFixed(2));
console.log(mathRandom);
// 3/b
let mathRandomRound = Math.random();
mathRandomRound = parseFloat((mathRandomRound * 100000).toFixed());
console.log(mathRandomRound);
// 4
let value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1));
console.log(value);
// 5
let oneHundred = "100$";
let correctValue = parseInt(oneHundred);
console.log(correctValue);

const X = 20;
const randomX = Math.round(Math.random() * X);
console.log(randomX);




// let rundomNumber = [15, 11, 16, 12, 51, 12, 13, 51]

// console.log()





// let x = 23e6;
// console.log(x);

// let y = 1e-2;
// console.log(y);

// const NUM1 = 10;
// const NUM2 = 20;
// let value;

// + * / - %
// value = NUM1 + NUM2;
// value += 100; /* value = value + 100; */
// value = 5 % 2; /* 1 */
// value++ /* ++value  перед переменной - значение меняется в тойже строке, после переменной - значение меняется на следующей строке*/
// value-- /* --value */

// value = 0.6 + 0.7;
// console.log(Math.round(value * 100) / 100);/* 1.3 */
// value = +value.toFixed(1);
// value = parseFloat(value.toFixed(1));
// value = (0.6 * 10  + 0.7 * 10) / 10;

// value = Math;
// console.log(value);
// console.log(typeof value);

// math!!!!!!!!!!!!!!!!!!!!

// value = Math.random();
// console.log(value);








// let x = Math.PI;
// x = parseFloat(x.toFixed(2))
// console.log(x);


// let z = Math.PI;
// console.log(z);
// let numberPi = parseFloat(z.toFixed(2));
// console.log(numberPi);



/*
let z = Math.PI;
console.log(z);
let value = Math.floor(z * 100) / 100;
console.log(value);
*/
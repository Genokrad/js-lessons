const firstName = 'Denis';
const lastName = 'Petrov';
const age = 30;
const str = 'hello My name is Denis';

let value;

value = firstName + " " + lastName
value += " I am " + age;

value = firstName.length;
value = firstName[2];
value = firstName[firstName.length - 1]; /*получение последнего символа в строке */

value = firstName.toUpperCase();
value = firstName.toLowerCase();
value = firstName.concat(' ', lastName);
value = firstName.indexOf('n'); /*возвращает цифру обозначающую расположение первого вхождения при поиске внутри переменной в виде порядкового номера */

value = str.indexOf('n', 10); /*цифра 10 обозначает начиная с какого символа начнется поиск */

value = str.indexOf('my');
value = str.includes('my'); /*выводит булевое значение находится ли эллемент в строке , метод чувствутелен к регистру*/
value = (str.toLowerCase()).includes('my');
value = str.slice(0, 5); /*Вырезал с 0 по 5 символ строки и вевел то что вырезал */
value = str.slice(5); /* вырезал по 5 символ и вывел оставшийся кусок сроки */
value = str.slice(0, -3); /* вывел всю строку и отрезал от нее 3 последние символа */
// для substring эти два примера — одинаковы/ slice работает только в одну сторону , но не в обратную.
value = str.substring(2, 6) ; //"stringify" / "ring"
value = str.substring(6, 2) ; //"stringify" / "ring"
value = str.substr(2, 4); //"stringify" / ring // работает только в Annex
value = str.substr(-4, 2); //"stringify" / gi // работает только в Annex
value = str.replace('Denis', 'Den');


console.log(value);

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList2);


let str1 = "Hello\nWorld\nword\nward";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World
ghr
dbr
gdr`;

console.log(str2);
console.log(str1);
console.log(str1 == str2); // true

console.log( 'I\'m the Walrus!' ); // I'm the Walrus! Все спецсимволы начинаются с обратного слеша, \ — так называемого «символа экранирования». Он также используется, если необходимо вставить в строку кавычку.

for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}



let a = 'a'
let b = 'b'
if (a > b) { // true
  console.log(a + ' is less than ' + b)
} else if (a < b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}
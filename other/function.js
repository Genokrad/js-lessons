// function declaration , function expression
/*
function sayHello(/*параметры которые будет принимать эта функция ) {
  console.log('Hello warld');
}




sayHello();
*/

//FUNCTION DECLARATION

// function sayHello(firstName, lastName) {
//   console.log(firstName, lastName);
//   console.log('Hello world');
// }

// sayHello('Erick', 'Vasin');

// function sayHello(firstName, lastName) {
//   console.log(firstName, lastName); // Erick Vasin
//   console.log('Hello world'); //Hello world
// }

// let res = sayHello('Erick', 'Vasin');

// console.log(res); //undefined
//после ретерна функция прекращает свое действие если нет (ифелс)
// function sayHello(firstName, lastName) {
//   if (!firstName) return console.error("Some error");
//   console.log(firstName, lastName);
//   console.log('Hello world');
//   return `Hello ${firstName} ${lastName}`;
// }

// let res = sayHello('Erick', 'Vasin');
// let res2 = sayHello('Tania', 'Vovk') + '!';
// let res3 = sayHello(); //undefined
// console.log(res);
// console.log(res2);
// console.log(res3);

//значение по умолчанию
// function sayHello(firstName = 'defoult', lastName = 'defoult') {
//   if (!firstName) return console.error("Some error");
//   console.log(firstName, lastName);
//   console.log('Hello world');
//   return `Hello ${firstName} ${lastName}`;
// }

// let res = sayHello('Erick', 'Vasin');
// let res2 = sayHello('Tania', 'Vovk') + '!';
// let res3 = sayHello(); //undefined
// console.log(res);
// console.log(res2);
// console.log(res3);

// let x = 10;

// В данном случае будет использоваться глобальная переменная Х, так как мі не обьявляли новой переменной, и тогда машина начинает искать данную переменную в коде 
// function foo() {
//   x = 20;
//   console.log(x);
// }

//в таком случае Х используется локальній так как мі обьявили локальную переменную Х внутри функции
// function foo() {
//   let x = 20;
//   console.log(x);
//   return x;
// }

// несмотря на то что мы не обьявляли переменнкю, мы объявили У как параметр и вернули его ретерном 
// function foo2(y) {
//   y = 20;
//   console.log(y);
//   return y;
// }

// foo();
// foo2();
// console.log(x);


//работа с обьектами
// const user = {
//   name: 'Denis',
//   age: 31
// }

// function getObj(obj) {
//   console.log(obj);
//   obj.name = 'Den';
// }

// getObj(user)
// console.log(user);


//FUNCTION EXPRESSION

// мы не можем выхвать эту функцию до ее фактического присвоения в переменную
// const square = function(x) {
//  return x * x;
// }

// Самовызывающиеся функции - данный вид функцию делает для того чтобы как только приложение или страница была загружена функция сразу выполнилась. Также в эту функцию можно заварачивать часть основного кода 

// (function (msg){
// console.log(msg);
// })( 'Hello world'  /*сюда передаем памраметры*/);


//вызов псевдообьект который можно перебирать циклами
// function foo(x) {
//   console.log(x);
//   console.log(arguments[1]);
//   for (let i = 0; i < arguments.length; i++)
//     {
//       console.log(arguments[0])
//     }
// }

// foo(11, 'some string', [1, 2, 3])

// var cat = "I'm a global cat!" // 3. потом ищет в глобальном окружении

// function findCat(cat) { // 2. потом она ищет внутри аргументов
//     var cat = 'I am a local cat!'; // 1. сначала функция ищет переменную внутри себя
//     console.log(cat)
//     return cat;
// }
// findCat()
// console.log(cat)
// console.log(findCat())

function calc(a, b) {
  if (typeof a !== 'number' || isNaN(a)) return console.log('error');
  if (typeof b !== 'number' || isNaN(b)) return console.log('error');

  return a + b;
}

calc(); // error
calc(23) // error
console.log(calc(23, 15)) // 38
calc("sdfsdf", "dsfsdf");

let text = "HELLO WORLD";
let code = text.charCodeAt(10);
console.log(code)


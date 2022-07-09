// не сторогое равенство ==, строгое равенство ===, не строгое не равенство !=, строгое не равенство !==

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == "1"; //true
value = 1 === '1'; //false
value = 1 == true; // true
value = 1 !== '1'; // false
value = 'a' > 'a'; //false
value = 'a' > 'A' ;//true
value = 'a' > 'ab'; //false
value = 'a'.charCodeAt() //97

// console.log(value);
/*
if (условие) {
  // код который выплнится если условие правдиво
} else {
  //если условие не правдивоо выполнятся другие действи "else"
}
*/
// value = null; //выполнится Else
// value = ''; //выполнится Else
// value = 0; //выполнится Else
// value = NaN; //выполнится Else

// if ( value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// if (value) {
//   console.log('some action');
// } else {
//   console.log('else');
// }
/*
value = null;

console.log(!!value) //false
console.log(!value) // true .. Данным выражением мы какбы спрашиваем : если нет value то мы делаем какое-то действие (null в булевом представление это false, ро тому данное выражение отправляет обрантое значение от текущего)

if (!value) {
  console.log(value);
}
*/

// value = [1];
/*
//////////////////////////////////////////////
// проверяем что в массиве 
if (value.length) {
  console.log(value);
} else {
  console.log('array is emty');
}
*/
// проверяем является ли масив масивом

// value = null;

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is emty');
// }

//////////////////////////////////////////////
// let user = {
//   name: 'Denis'
// };

// if (user.name) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

////////////////////////////////////////////
// || - оператор или - запинается на правде (пытается преобразовать каждое значение к Тру)
// &&  - оператор и - запинается на лжи (каждое знае пытается преобразовать к фолс)

// value = 1 || 0;

// console.log(value);
///////////////////////////////////////////////
// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some action');
// } else {
//   console.log('other action');
// }

// let serverNickName = 'Denis';
// let nickname = serverNickName || 'default';

// console.log(nickname);
///////////////////////////////////////////
// value = 1 && 0 && 3 // запинается на 0
// value = 1 && 2 && 3 // выведет последнее значение
///////////////////////////////////////////
// let productPrice = 10;

// if (productPrice > 5 && productPrice < 20) {
//   console.log('Podhodit');
// } else {
//   console.log('nePodhodit');
// }

// console.log(value);

// value = 12

// if (value < 10) {
//   console.log('value < 10', value);
// } else if (value === 10) {
//   console.log('value = 10', value);
// } else (
//   console.log('else')
// )

// || - оператор или - запинается на правде (пытается преобразовать каждое значение к true)
// &&  - оператор и - запинается на лжи (каждое значение пытается преобразовать к false)


// let a = 0 || 'string'; // 0 значение false, по тому вывело  значение string которое true

// let a = 1 && 'string'; // выведет стринг string, так как оба значения true, код будет отрабатывать до тех пор пока не найдет false или до последнего значения

// let a = null || 25; // первый значение  false, код отрабатывает до первого true - выведет 25

// let a = null && 25; // первый значение  false, код отрабатывает до первого false, выведет null

// let a = null || 0 || 35; // певрвые 2 значения false, код отрабатывает до первой правды - выведет 35

// let a = null && 0 && 35; // запнется на первом значении false, выведет null

a = 5 + null

console.log(a); 

// exercise 3
let hiden = 10;

if (hiden == 10) {
  console.log('visible');
} else {
  console.log('hiden')
}

// Правильное решение 
let b = 'hidden';

// Всегда делайте строгое сравнение.
if (b === 'hidden') {
  b = 'visible';
} else {
  b = 'hidden';
}

// exercise 4

let anyNumber = 10;

if (anyNumber == 0) {
  anyNumber += 1;
} else if (anyNumber < 0) {
  anyNumber = 'less then zero';
} else if(anyNumber > 0) {
  anyNumber *= 10
}



console.log(anyNumber);

// exercise 5

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
  car.needRepair = true,
  console.log('Need Repair')
}

console.log(car.needRepair);

// exercise 6

console.clear()

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

item.priceWithDiscount = [parseInt(item.price) * (1 - (parseInt(item.discount)) / 100)];


if (parseInt(item.discount) > 0) {
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}

/*
//вариант пердподователя
let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
// мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);
// проверяем что цена и скинда не являются NaN так как это важно при расчетах
if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount)
} else {
  console.log(price);
}
*/


// exercise 7

let product = {

  name: 'Яблоко',
  
  price: '10$'
  
};
  
let min = 10; // минимальная цена
  
let max = 20; // максимальная цена


if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log('товар не найден');
}
//objects!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let object = {
//   product: 'iPhone'
// } 

// object.price = 1000;
// object.curency = 'Dollar';
// object.details = [];
// object.details.model = 'iphone 11'
// object.details.color = 'black'


// console.log(object)

// if/else !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// exercise 1
// let a = 'hidesn';

// if (a === 'hiden') {
//   console.log('vasible')
// } else {
//   console.log('hiden')
// }


// exercise 2
// let b = -1;

// if (b === 0) {
//   b = 1;
// } else if (b < 0) {
//   b = 'less then zero';
// } else if (b > 0) {
//   b *= 10;
// }

// console.log(b);


// exercise 3

// let car = { name: 'Lexus', age: "10", create: 2008, needRepair: false }

// if (car.age > 5) {
//   car.needRepair = true
//   console.log('Need Repair')
// } else if (car.age < 5) {
//   car.needRepair = false
// }

// console.log(car);


// exercise 4

// let item = { name: 'Intel core i7', price: '100', discount: '15%' } 
// let discount = parseFloat(item.discount);
// let price = parseFloat(item.price);

// if (!isNaN(price) && !isNaN(discount)) {
//   let priceWitDiscount = price - (price * (discount / 100));
//   console.log(priceWitDiscount);
// } else {
//   console.log(price);
// }

// console.log(item)


// exercise 5

// let min = 10;

// let max = 20;

// let product = {
//   name: 'Яблоко',
//   price: '10$'
//   };

// let costOfApple = parseFloat(product.price)

// if (costOfApple >= min && costOfApple <= max) {
//   console.log(product.name)
// } else {
//   console.log('товар не найден')
// }


// тернарный оператор и Switch !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// exercise 1

// let b = 'hidden';
// b = b === 'hidden' ? 'visible' : 'hidden';
// console.log(b)


// exercise 2

// let c = -1;
// c = c === 0 ? 1 : c < 0 ? 'less then zero' : c *= 10; 
// console.log(c)


// exercise 3

// let a = 'block';

// switch(a) {
//   case 'block':
//     console.log('block');
//     break;
//   case 'none':
//     console.log('none');
//     break; 
//   case 'inline':
//     console.log('inline');
//     break;
//   default:
//     console.log('other');
//     break;    
// }


// cycles !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// exercis 1
// let strFirst = 'i am in the easycode';
// let resFirst = '';

// for (i = 0; i < strFirst.length; i++) {
//   if (i === 0 || strFirst[i - 1] === ' ') {
//     resFirst += strFirst[i].toUpperCase()
//   } else {
//     resFirst += strFirst[i]
//   }
// }

// console.log(resFirst)


// exercis 2
// let strSecond = 'tseb eht ma i';
// let resSecond = '';

// for (let i = strSecond.length; i--;) {
//   resSecond += strSecond[i];
// }

// console.log(resSecond);


// exercis 3
// let res3 = 1;
// let number = 10;


// for (let i = 1; i < number; i++) {
//   res3 *= i
// }

// console.log(res3);


// exercis 4
// let str4 = 'JavaScript is a pretty good language';
// let res4 = '';

// for (let i = 0; i < str4.length; i++) {
//   if (i === 0 || str4[i - 1] === ' ') {
//     res4 += str4[i].toUpperCase();
//   } else if (str4[i] !== ' ') {
//    res4 += str4[i];
//   }
// }
// console.log(res4);


// exercis 5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (let value of numbers) {
//   if (value % 2 !== 0 && value <= 15) {
//     console.log(value)
//   }
// } 


// exercis 6
// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29 
//   }

// for (let key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase()
//   }
// }

// console.log(list)

  // for in !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const users = {
//     name: 'Denis',
//     age: 30
//   };

// for (let key in users) {
//   console.log(key);
//   console.log(users[key]);
// }



// functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function multiply() {
//   if (arguments.length === 0) {
//     x = 0
//     console.log(x);
//     return;
//   } else {
//     let x = 1
//     for (i = 0; i < arguments.length; i++) {
//       x *= arguments[i];
//     }
//     console.log(x);
//     return x;
//   }
// }

// multiply()

// function reverseString(string) {
//   string = String(string);
//   let res = String('');
//   for (i = string.length; i--;) {
//     res += string[i];
//   }
//   console.log(res)
//   return res;
// }

// reverseString('test');
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();

// function getCodeStringFromText(string) {
//   string = String(string)  
//   let res = '';
//   for (i = 0; i < string.length; i++) {
//     res += (string[i].charCodeAt() + ' ');
//   }
//   console.log(res)
// }

// getCodeStringFromText('hello')

// function getCodeStringFromText(str) {
//   str = String(str);
//   let res = '';
//   for (let i = 0; i < str.length; i++) {
//       res += (str[i].charCodeAt() + ' ');
//   }
//   console.log(res)
//   return res.trim();
// }

// getCodeStringFromText(' hello');

// function checkRandom (b) {
//   let a = Math.ceil(Math.random() * 10)
//   if (b === 0 || b > 10 || b < 0) {
//     console.log('Вы ввели не правильное число, введите число от 1 до 10');
//   } else if (a === b) {
//     console.log('Вы выйграли');
//   } else {
//     console.log('Вы не угадали ваше число: ' + b + ', а выпало число: ' + a + '.')
//   }
//   return
// }

// checkRandom(-1)



// function guessTheNumber(num) {
//   if (isNaN(num) === true) {
//     return new Error("Please provide a valid number");
//   } else if (isNaN(num) === false) {
//     let numRandom = Math.ceil(Math.random() * 10);
//     if (num === 0 || num > 10 || num < 0) {
//         num = new Error("Please provide number in range 0 -10");
//         return num;
//     } else if (num === numRandom) {
//         return "You win!";
//     } else if (num !== numRandom) {
//         return "You are lose, your number is " + num + ", the random number is " + numRandom + ".";
//     } 
//   }

// }

// console.log(guessTheNumber(4))


// // 4
// function guessTheNumber(num) {
//   const number = Number(num);

//   if (typeof number !== "number" || isNaN(number)) return new Error("Please provide a valid number");
//   if (number < 0 || number > 10) return new Error("Please provide number in range 0 - 10");

//   const random = Math.ceil(Math.random() * 10);

//   if (random === number) return "You win!";

//   return `You are lose, your number is ${number}, the random number is ${random}`;
// }

// console.log(guessTheNumber(21));

// задание на добавление от 1 до 10 при поступившем значении 10
// console.clear();




// массивы
// №1
// function getArray(num) {
// let arr = [];
// for (let i = 1; i <= num; i++) {
//   arr.push(i);
// }
// return arr;
// }

// console.log(getArray(10)); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// №2
// function doubleArray(arr) {
// arr = arr.concat(arr);
// return arr;
    
// }

// console.log(doubleArray([1,2,3])) // [1,2,3,1,2,3]

// №3
// function changeCollection() {
//  let res = [];
//   for (i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       let arr = arguments[i].slice();
//       arr.shift();
//       res.push(arr);
//     }
//   }
//   return res
// }

// console.log(changeCollection([1,2,3]))

// #4
// const users = [
//   {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ]


// function filterUsers(arr, key, value) {
//   if (!Array.isArray(arr)) return new Error('The first argument should be an array');
//   if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
//   if (value === undefined || value === null) return new Error('The value should be a valid value.');

//   const res = [];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) {
//       res.push(arr[i])
//     }
//   }

//   return res;
// }

// console.log(filterUsers(users, "age", 36))












// const square = function(x) {
//   return x * x;
// };

// console.log(square(2))
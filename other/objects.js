/*const user = {
  firstName: 'Denis',
  lastName: 'mischryakov',
  age: 30,
  isAdmin: true,
  email: 'mail@mail.com.ua',
  'user-adress': {
    city: 'Kharkiv',
  },
  skills: ['HTML', 'CSS', 'Js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-adress'];
value = user['user-adress'].city; //при такой записи переменную подстваить нельзя
value = user['user-adress']['city'];
value = user[prop][0]; // если хоти подставить переменную, а не просто значение, то используем квадратные скобки

user.firstName = 'Den';

value = user.firstName;

user.info = 'some info'; //добавление новой информации в обьект.

user['user-adress'].city = 'Kiev';
user['user-adress'].country = 'Ukrain';
user.plan = []; //создание пустого обьекта внутри обекта
user.plan.basic = [];

console.log(value);
console.log(user);
*/

let someObject = {
  product: 'iPhone'
};

someObject.price = 1000;
someObject.currency = 'dollar';
someObject.details = [];
someObject.details.model = 'iPhone 11';
someObject.details.color = 'Red'

console.log(someObject);





// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")



// // Запись «через точку» такого не позволяет:
//  user = {
//   name: "John",
//   age: 30
// };

// let key = "name";
// alert( user.key ); // undefined

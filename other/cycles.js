

//while - итератор/сколько прошло итераций > условие > действие которое увеличивает шаг/условие которое делает его правдивым или приводи к неправдивости

// let i = 0; //итератор
// while/*пока*/(/*здесь будет тру*/) {
//   /*тело будет выполнятся*/
// }

// let i = 0;
// while(i++ < 10) {
//   console.log(i);
// }

// let i = 10;
// while(i--) {
//   console.log(i);
// }
//на 0 цикл остановит свою работу так как 0 в булевом прелставлении = фолс, а цикл работает только до тех пор пока выражение имеет значение Фолс. 


// do while!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// do {
//   console.log('action');
// } while(i > 0);


//for!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// for (i = 0; i < 10;/*(3-е действие - проверка условия)*/ i++ /*(2-е действие - увеличение шага)*/) {
//   console.log(i); // (1-е действие)
// }



// перебор строки с выводом чисел
// let str = 'Hello';
// let red ='';

// for (let i = 0; i < str.length; i++) {
//   console.log(i);
// }

// перебор строки с выводом значения чисел - букв

// let str = 'Hello';
// let red ='';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i] + '!');
// }


// добавить символ после каждой буквы
// let str = 'Hello';
// let res ='';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
   // console.log(str[i] + '!');
// }
// console.log(res);


// let colors = ['white', 'black', 'Yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(colors)

// for (i = 0; i < 10; i++) {
//   if (i === 5){
//     break
//   }
//   if (i === 6){
//     continue
//   }
//   console.log(i);
// }

// const users = [
//   {
//     name: 'Denis',
//     age: 30
//   },
//   {
//     name: 'Oleg',
//     age: 12
//   },
//   {
//     name: 'Maks',
//     age: 25
//   },
//   {
//     name: 'Olga',
//     age: 2
//   } 
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name)
//   usersObj[users[i].name] = users[i]
// }
// console.log(usersObj['Denis'])


// for in !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const users = {
//     name: 'Denis',
//     age: 30
//   };

// for (let key in users) {
//   console.log(key);
//   console.log(users[key]);
// }

//for of !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// for (let value of users) {
//   console.log(value);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 10;
// while(i--) {
//   console.log(i);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// let nmbd = prompt("Введите число больше 100");
// for (let i = 100; i <= nmbd; i++) {
//   console.log('число больше 100');
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log( i ); // простое число
// }

// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };

// for (var key in menu) {
//   // этот код будет вызван для каждого свойства объекта
//   // ..и выведет имя свойства и его значение

//   console.log( "Ключ: " + key + " значение: " + menu[key] );
// }


// let i = 0;
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// let i2 = 0
// do {
//   console.log(i2);
//   i2++;
// } while (i2 <= 5);

// for (let i3 = 0; i3 <= 5; i3++) {
//   console.log(i3);
// }

// let num = 8;
// while (num) {
//   console.log(num);
//   num--;
// }

// let num2 = 0;
// while (num2 < 3) {
//   console.log(`число: ${num2}`);
//   num2++
// }

// for (let num3 = 0; num3 < 3; num3++) {
//     for (size = 0; size < 3; size++) {
//       console.log(size);
//       if (size == 1) break;
//     }
// }

// let stroka = 'i am in the easycode';
// let res = '';
// let stroka2 = '1 34 67 901 34567890 '






// for (let i = 0; i < stroka.length; i++) {
//   if (i === 0 || stroka[i - 1] === ' ') {
//     res += stroka[i].toUpperCase();
//   } else {
//     res += stroka2[i];
//   }
// }

// console.log(res);

// let str = 'tseb eht ma i';
// let res = '';

// for (let i = str.length; i--;) {
//   res += str[i];
// }

// console.log(res);



let someText = "some thing lika a boss say to fucking fegots";
let resultat = "";

for (let i = 0; i < someText.length; i++) {
  if (i === 0 || someText[i - 1] ===' ') {
    resultat += someText[i].toUpperCase();
  } else {
    resultat += someText[i]
  }
}

console.log(resultat);


let invertedText = 'tseb eht ma i';
let res2 ='';

for (let i = invertedText.length; i--;) {
  res2 += invertedText[i];
}
console.log(res2);

let factorial = 3;
let res3 = 1;

for (let i = 1; i <= factorial; i++) {
  res3 *= i;
}
console.log(res3)

let str4 = 'JavaScript is a pretty good language';
let res4 = '';

for (let i = 0; i < str4.length; i++) {
  if (i === 0 || str4[i - 1] === ' ') {
    res4 += str4[i].toUpperCase();
  } else if (str4[i] !== ' '){
    res4 += str4[i];
  }
}

console.log(res4);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let value of numbers) {
  if (value % 2) {
    console.log(value);
  }
}


let list = {

  name: 'denis',
  
  work: 'easycode',
  
  age: 29
  
  }

for (let key in list) {
  if (typeof list[key] === 'string') {
  list[key] = list[key].toUpperCase()
  }
}
console.log(list)




// for in !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const users = {
//     name: 'Denis',
//     age: 30
//   };

// for (let key in users) {
//   console.log(key);
//   console.log(users[key]);
// }









//for of !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// for (let value of users) {
//   console.log(value);
// }










/*
let user = {"name":"Smith", age: 30};
console.log(user['name'] == user.name);

console.log(+'-' + 2)

let str = '123';
let result = +str;
console.log(typeof(result), result);

var a
console.log(a)

console.clear();

let foo = { str: 'test' }; 
console.log(foo && foo.str); // test
// Это правильный ответ так как оператор && возвращает последнее значение из перечисленных если все перечисленные значения приводятся к true.


let arr = []
arr[500] = 1
console.log(arr.length); // 501
// Так как мы устанавливаем на 500 индекс значение 1 в массиве добавляется 500 элементов со значением undefined а общая длина 501
var x = 1; 
if (x) {
  var x = 2; 
  console.log(x);
} 
console.log(x); // 2, 2
// var не имеет блочной облости видимости поэтому определяя вторую var x мы фактически переопределяем переменную выше.

console.log(typeof null) // = object

//Какой тип данных у NaN? // number */
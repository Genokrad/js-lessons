// function someFunction() {
//   var x = 1;
//   console.log(x);
//   console.log(y);
//   y++;
// }

// var y = 2;

// someFunction();
// console.log(y)

// function someFunction() {
//   x = 1;
//   console.log(x);
// }

// someFunction();
// console.log(x);

// Если обявлять переменную внутри функции с var то переменная локальная, при обявлении таким образом "х = 1" без var - переменная видна глобально




// При таком написании результат війдет от 1 - 9, так как за счет var функция локальна.
// function someFunction() {
//   for(var i = 0; i < 10; i++){
//     console.log(i);
//   }
// }

// someFunction();
// console.log(i);

// При таком написании результат війдет от 1 - 10, так как без var функция глобальна. и после того как происходит результат функции делается последнее сложение и i присваевается + 1 и получается результат 10.
// function someFunction() {
//   for(var i = 0; i < 10; i++){
//     console.log(i);
//   }
// }

// someFunction();
// console.log(i);

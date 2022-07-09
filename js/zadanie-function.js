/*
//функция четный или не четный
//мой вариант
function isNumberOdd(number) {
  var NumberOdd = (number % 2);
  if(NumberOdd >= 1) {
    return true;
  } else {
    return false;
  }
}

console.log (isNumberOdd(11));
console.log (isNumberOdd(8));
console.log (isNumberOdd(0));
console.log (isNumberOdd(23));

//var x = isNumberdOdd(11);  значит тоже самое что и: console.log (isNumberOdd(11));
//console.log(x);
//////////////////////////////////////////////////////////////////////////////////////////

function isNumberOdd(number) {
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log (isNumberOdd(11));
console.log (isNumberOdd(8));
console.log (isNumberOdd(0));
console.log (isNumberOdd(23));

//вариант после рефакторинга

function isNumberOdd(number) {
 return number % 2 !== 0 
}
console.log (isNumberOdd(11));
console.log (isNumberOdd(8));
console.log (isNumberOdd(0));
console.log (isNumberOdd(23));


// Спизженный вариант факториала
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1): 1;
}

console.log( factorial(6));

вариант факториала преподователя
function factorial(naturalNumber) {
  var result = 1;
  for(i=1; i <= naturalNumber; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
*/


// var str = 'How are you';
// var replaced = str.split(' ').join('_');
// console.log(replaced);

























































function square(number) {
  return(number * number);
}

// function isSquareBig(storona){
//   var area = square(storona)
//   if (area > 10) {
//       return true;
//   }else {
//       return false;
//     }
//   } 
//   console.log(isSquareBig(5));

  var x = square(23);
console.log(x);

function isSquareBig(storona){
  if (square(storona) > 10) {
      return true;
  }else {
      return false;
    }
  } 
  console.log(isSquareBig(2));


  function delenie(nomer1, nomer2) {
      return (nomer1 / nomer2);
  }
  console.log(delenie(20, 2));

  function maloNormalnoMnogo(chislo1, chislo2) {
    if (delenie(chislo1, chislo2) <= 11) {
      return "malo"; }
    if (delenie(chislo1, chislo2) > 11 && delenie(chislo1, chislo2) <= 20) {
      return "normalno"}
    if (delenie(chislo1, chislo2) >= 21){
      return "mnogo"}
    } 
  
console.log(maloNormalnoMnogo(42, 2))

function decrement(x) {
	if (x > 11) {
  return x - 1;}
  else {
    return x;
  }
}

console.log(decrement(9));

// var animal = prompt ("Введите животное");
// var name = prompt ("Введите имя");

// function animalSay(animal, name) { 
//   switch (animal) {
//     case "кошка":
//       return name + " Privet";
//     case "собака":
//       return name + " Hola";
//     case "рксский корабль":
//       return name + " иди на хуй";
//   }

// }
// alert (animalSay(animal, name))


// мой вариант
// function changeSpaceToUndercore(str) {
//   return str.split('я').join('Ярик');
// }
// console.log(changeSpaceToUndercore("Ебать я смог нахуй!!!"));

// Вариант предаодавателя
function changeSpaceToUndercore(str) {
  var resultText = str.replace(/ /g,"_")
  return resultText
}

console.log (changeSpaceToUndercore("Ебать я смог нахуй!!!"))

// var str = 'How are you';
// var replaced = str.split(' ').join('_');
// console.log(replaced);
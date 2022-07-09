var vozrast = prompt ("Введите ваш возраст.");
var rost = prompt ("Введите ваш рост в см");
var ves = prompt ("Введите ваш вес в кг.");
excessWeight = ves / ((rost / 100) * (rost / 100));
console.log (excessWeight);
// var doYouHaveExcessWeight = excessWeight >= 27.9;

if(vozrast >= 18 && vozrast <=25){
  groupNumber = 1;
} else if(vozrast >= 25 && vozrast <=46){
  groupNumber = 2;
} else { 
  groupNumber = 3;
}


if(groupNumber === 1 && excessWeight <= 18){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес недостаточен, опасен для здоровья.");
} else if(groupNumber === 1 && excessWeight >= 18 && excessWeight < 20){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес слегка снижен, неопасно для здоровья.");
} else if(groupNumber === 1 && excessWeight >= 20 && excessWeight < 26){
  alert("Ваш индекс массы тела " + excessWeight + ". Нормальный.");
} else if(groupNumber === 1 && excessWeight >= 26 && excessWeight < 28){
  alert("Ваш индекс массы тела " + excessWeight + ". Излишний.");
} else if(groupNumber === 1 && excessWeight >= 28 && excessWeight < 31){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 1й степени.");
} else if(groupNumber === 1 && excessWeight >= 31 && excessWeight < 36){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 2й степени.");
} else if(groupNumber === 1 && excessWeight >= 36 && excessWeight < 41){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 3й степени.");
} else if(groupNumber === 1 && excessWeight >= 41) {
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 4й степени.");
} else if(groupNumber === 2 && excessWeight <= 17.5){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес недостаточен, опасен для здоровья.");
} else if(groupNumber === 2 && excessWeight >= 17.5 && excessWeight < 19.5){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес слегка снижен, неопасно для здоровья.");
} else if(groupNumber === 2 && excessWeight >= 19.5 && excessWeight < 23){
  alert("Ваш индекс массы тела " + excessWeight + ". Нормальный.");
} else if(groupNumber === 2 && excessWeight >= 23 && excessWeight < 27.5){
  alert("Ваш индекс массы тела " + excessWeight + ". Излишний.");
} else if(groupNumber === 2 && excessWeight >= 27.5 && excessWeight < 30){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 1й степени.");
} else if(groupNumber === 2 && excessWeight >= 30 && excessWeight < 35){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 2й степени.");
} else if(groupNumber === 2 && excessWeight >= 35 && excessWeight < 40){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 3й степени.");
} else if(groupNumber === 2 && excessWeight >= 40) {
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 4й степени.");
} else if(groupNumber === 3){
  alert("Ваш возраст не подходит!");
}











































/*if(excessWeight <= 17.5 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес недостаточен, опасен для здоровья.");
} else if(excessWeight >= 17.5 && excessWeight <= 19.5 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес слегка снижен, неопасно для здоровья.");
} else if(excessWeight >= 19.5 && excessWeight <= 23 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Нормальный.");
} else if(excessWeight >= 23 && excessWeight <= 27.5 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Излишний.");
} else if(excessWeight >= 27.5 && excessWeight <= 30 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 1й степени.");
} else if(excessWeight >= 30 && excessWeight <= 35 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 2й степени.");
} else if(excessWeight >= 35 && excessWeight <= 40 && vozrast <= 18 && vozrast >=25 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 3й степени.");
} else if(excessWeight >= 40 && vozrast >= 18 && vozrast <= 25 && vozrast <= 46) {
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 4й степени.");
}*/

/*if(excessWeight <= 18 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес недостаточен, опасен для здоровья.");
} else if(excessWeight >= 18 && excessWeight <= 20 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ваш вес слегка снижен, неопасно для здоровья.");
} else if(excessWeight >= 20 && excessWeight <= 26 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Нормальный.");
} else if(excessWeight >= 26 && excessWeight <= 28 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Излишний.");
} else if(excessWeight >= 28 && excessWeight <= 31 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 1й степени.");
} else if(excessWeight >= 31 && excessWeight <= 36 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 2й степени.");
} else if(excessWeight >= 36 && excessWeight <= 41 && vozrast >= 26 && vozrast <= 46){
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 3й степени.");
} else if(excessWeight >= 41 && vozrast >= 26 && vozrast <= 46) {
  alert("Ваш индекс массы тела " + excessWeight + ". Ожирение 4й степени.");
}*/




// alert("У вас лишний вес: " + doYouHaveExcessWeight);

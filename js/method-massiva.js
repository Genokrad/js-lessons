//push/pop
//unshift/shift
//indexOf
//slice



var names = ["John", "jane", "jack", "jim"];
console.log(names);

// names[4] = "Jeen";
// names.push("Jeen");


// метод push добавляет 1 єллемент, метод pop удаляет последний єллемент
var x = names.push("Jeen");
x = names.push("Ivan");
console.log (names);
console.log(x);

var y = names.pop()
console.log (names);
console.log(y);

// names.unshift("irene");
x = names.unshift("irene");
console.log (names);
console.log(x);

y = names.shift();
console.log (names);
console.log(y);

// при отсутствии єллемента в массиве віведет отрицательное значение. Если в масиве несколько одинаковіх єллементов , то индекс віведется первого которій он встретит.
names.push("erick");
console.log(names);
//indexOf
var z = names.indexOf("erick");
console.log(z);

var Toyota = ["Camry", 2010, "sedan", "black", true];

var isSedan = Toyota.indexOf("sedan") === -1 ? 
console.log("Type is not sedan"):
console.log("Type is not sedan");

//slice
var cars = ["Honda", "KIA", "Peugeot", "Mercedes", "Opel", "Toyota"];
var germanCars = cars.slice(3, 5); /*5 номер при такой записи не включается */
console.log(germanCars);
var isGermanCars = germanCars.indexOf("Mercedes") === -1 ?
console.log("is not German Cars"):
console.log("is German Cars");


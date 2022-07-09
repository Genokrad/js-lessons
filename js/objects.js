// var carToyota = ["Camry", 2010, "sedan", "black", true];

// console.log(carToyota[2]);


var carToyota = {
  model: "Camry",
  year: 2010,
  carBody: "sedan",
  color: "black",
  hasAirbag: true
};

var x = "carBody" 
console.log(carToyota["carBody"]);/*При таком обращении мы можем использовать переменную, пример ниже*/
console.log(carToyota[x]);

console.log(carToyota.carBody); /*При таком обращении мы не можем использовать переменную, так как будет искать именно в поле обьекта, переменная будет игнорироваться и код бует выдавать ошибку*/

console.log(carToyota.color);

carToyota.color = "red"; /*изменили значение цвета в обьекте*/

console.log(carToyota.color);
console.log(carToyota);
carToyota.year += 2 /*изменили значение года в обьекте*/
console.log(carToyota);

var carMazda = {};
var carOpel = new Object();
carOpel.year = 2018;
carOpel.model = "hatchback";
carOpel.carBode = "CX7";
carOpel.color = "blue";
carOpel.hasAirbag = false
carOpel.dorNumber = 4;

console.log(carOpel);

carMazda.year = 2018;
carMazda.model = "crossover";
carMazda.carBode = "CX7";
carMazda.color = "blue";
carMazda.hasAirbag = false
carMazda.dorNumber = 4;

console.log(carMazda);
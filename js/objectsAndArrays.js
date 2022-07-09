var colors = ["red", "orange", "yellow"];

var personJack = {
  firstName: "Jack",
  lastName: "brown",
  age: 28,
  isMarried: true,
  pets: ["cat", "dog", "snake"],
}

var nambers = [[1,2,3], [4,5,6], [7,8,9,10]];
console.log(nambers[1][2]);

console.log(personJack.pets[1]);

var sellers = [
  {
    firstName: "Peter",
    lastName: "Goodman",
    regDate: "09.08.2019",
    hasDiscount: true,
    age: 48,
    cars: [{
      carProducer: "fiat",
      carModel: "punto"
    }, 
    { carProducer: "mercedes",
      carModel: "vito"
    },
    { carProducer: "opel",
      carModel: "vectra"
    }]
  },
  {
    firstName: "john",
    lastName: "jason",
    regDate: "07.10.2019",
    hasDiscount: false,
    age: 32,
    cars: ["mazda", "mercedes", "toyota"]
  }
]

console.log(sellers[0].cars[1].carModel);
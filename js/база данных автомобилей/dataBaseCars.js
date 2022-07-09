var cars = [
  {
    maidIn: "USA",
    model: "Ford",
    year: "1990",
    color: "Red",
    isSelled: true
  },
  {
    maidIn: "Japan",
    model: "mitsubisi",
    year: "1990",
    color: "Blue",
    isSelled: true
  },
  {
    maidIn: "Russian",
    model: "Moskvich",
    year: "1990",
    color: "Orange",
    isSelled: false
  },
  {
    maidIn: "Germany",
    model: "mersedes",
    year: "1990",
    color: "Black",
    isSelled: true
  },
  {
    maidIn: "Italia",
    model: "Lambagini",
    year: "1990",
    color: "Yellow",
    isSelled: false
  }
]  

// for (var i = 0; i < cars.length; i++) {
//   if(cars[i].isSelled === true) { 
//     console.log(cars[i].isSelled);
//   }
// }

cars.forEach(function(car) {
  if(car.isSelled === false) {
    console.log(car);
  }
}

)

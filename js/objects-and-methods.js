/* способ 1
var carSeller1 = {
  firstName: "Jack",
  LastName: "White",
  regYear: 2020,
  hasDiscount: true,
  discount: 0,
  discountColculation: function(year) 
  {
    var discount;
    var summOfYear = 2022 - this.regYear;
    if(summOfYear <= 2) {
      discount = 0;
    } else if((summOfYear > 2) && (summOfYear <= 5)) {
      discount = 20;
    } else if(summOfYear > 5) {
      discount = 30;
    }
    return discount;

  }
}

var discount = carSeller1.discountColculation();
carSeller1.discount = discount;

console.log(discount);
способ 1 */ 

/* способ 2
var carSeller1 = {
  firstName: "Jack",
  LastName: "White",
  regYear: 2020,
  hasDiscount: true,
  discount: 0,
  discountColculation: function(year) 
  {
    var discount;
    var summOfYear = 2022 - this.regYear;
    if(summOfYear <= 2) {
      discount = 0;
    } else if((summOfYear > 2) && (summOfYear <= 5)) {
      discount = 20;
    } else if(summOfYear > 5) {
      discount = 30;
    }
    return discount;

  }
}

carSeller1.discount = carSeller1.discountColculation();

console.log(carSeller1.discount);

способ 2 */ 


// способ 3 все вычисления промходят внутри обьекта
var carSeller1 = {
  firstName: "Jack",
  LastName: "White",
  regYear: 2020,
  hasDiscount: true,
  discount: 0,
  calculateDiscount: function() 
  {
    var discount;
    var summOfYear = 2022 - this.regYear;
    if(summOfYear <= 2) {
      discount = 0;
    } else if((summOfYear > 2) && (summOfYear <= 5)) {
      discount = 20;
    } else if(summOfYear > 5) {
      discount = 30;
    }
    this.discount = discount;

  }
}

carSeller1.calculateDiscount();
console.log(carSeller1.discount);

// способ 3
// лекция 75

function square(number) {
  return number * number;
}

var x = square(2);
console.log(x);

function isSquareIsBig(side) {
  var squareArea = square(side);
  if(squareArea > 100) {
    return true;
  } else {
    return false;
  }
}

console.log (isSquareIsBig(10));



// лекция 74
/*
function complexhello(text){
  console.log(text);
}

// complexhello("hello my name is Erick. I'm 31 years old.");

function square(number) {
  console.log(number * number);
}

var x = square(2);
console.log(x);

square(10);

function rectengularArea(width, height) {
  console.log (width * height)
}

rectengularArea(2,3);

function complexhello(helloText, name, age){
  console.log(helloText + " my name is " + name + ". I'm " + age + " years old.");
}

complexhello("Hey!", "John", 30);
complexhello("Hi!", "Louise", 31);
*/






// лекция 73

// function hello() {
//     console.log("hello");
// }
// hello();

// function complexhello(){
//   console.log("hello my name is Erick. I'm 31 years old.");
// }

// complexhello();

// function alertHello(){
//   alert("Hello");
// }

// alertHello();
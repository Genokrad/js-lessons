// function foo() {
//   console.log('hello world')
// }

// foo();

// foo.field = 'denis';

// console.log(foo.field);

const arr = ['Denis', 'ivan', 'maks', 'olga']

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}

console.log(newArr);

let newArr2 = [];

for (let i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
}

console.log(newArr2);

function mapArray (arr, fn) {
  
}
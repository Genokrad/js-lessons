// let a = 1;
// let b = 0;

//тернарный оператор
// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

//выражение ? если тру : если фолс;
//выражение ? если тру : выражение ? если тру : если фолс;


// let c = a > 5 ? b = a : b += 1; 
// b = a > 0 ? a : b + 1;

// b = a > 0 ? 2 : a < 0 ? 3 : 0;
// let y = c;

// console.log(`b: ${b}, c: ${c}`);
// console.log(`b: ${b}`);
// console.log(y);

// switch case

// let color = 'white';

// switch(color) {
//   case 'yellow':
//     console.log('color is yellow');
//     break;
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'white':
//   case 'blue':
//     console.log('color is white || blue');
//     break;
//   default:
//     console.log('default')
// }

let a = 'none';
// excersise 1
switch(a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}

// excersise 2
// b = a > 0 ? 2 : a < 0 ? 3 : 0;

let b = 'hidden';

b = b === 'hidden' ? 'visible' : 'hidden';
console.log(b);

// excersise 3

let c = 2;

c = c === 0 ? 1 : c < 0 ? c = 'less then zero' : c *= 10;
console.log(c);


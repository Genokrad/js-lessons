let value;

// value = 10;

// namber to string
// value = "10";

value = String(10);
value = String(10+40);
value = (10).toString();

// Bolean to string

value = String(true);/*true/string*/

// Array to string
value = String([1, 2, 3]); /*1,2,3/string*/

// object to string (при сложении со строкой - любой тип данніх будет преобразовіваться к строке. При любіх других математических вічислениях строка наоборот будет преобразовіваться е сислу, если єто возможно)
value = String({name: "Denis"}) /*[object Object]/string*/

value = 30 + " " + 30; /*30 30/string*/

value = 30 - ""; /*30/NaN*/

value = 30 - "sdfs"; /*NaN/number*/

value = 30 - "5"; /*25/number*/

value = true + 10;/*11/number (true преобразовывается к 1, false преобразовывается к 0, Null преобразовывается к 0*/

value = false + false; /*0/number*/

value = null + null; /*0/number*/

value = null + true; /*1/number*/

value = false + undefined; /*NaN/number*/

// string to number

value = Number("23"); /*23/number*/

value = Number(true); /*1/number*/

value = Number(false); /*0/number*/

value = Number(null); /*0/number*/

value = Number(undefined); /*NaN/number*/

value = Number("sdfsdf"); /*NaN/number*/

value = Number([1, 2, 3]); /*NaN/number*/

value = parseInt("200"); /*200/number*/

value = parseInt("200sdfsdf"); /*200/number*/

value = parseInt("jghjg200"); /*NaN/number*/

value = parseFloat("200.2df"); /*200/number*/

// Boolean

value = Boolean("sdfsf") /*true/boolean*/

value = Boolean("") /*false/boolean*/

value = Boolean("234") /*true/boolean*/

value = Boolean("0") /*false/boolean*/

value = Boolean(undefined) /*false/boolean*/

value = Boolean(null) /*false/boolean*/

value = Boolean({}) /*true/boolean*/

value = Boolean([]) /*true/boolean*/

value = Boolean(NaN) /*false/boolean*/



console.log(value);
console.log(typeof value);
// var message = "Hello, world!";
// console.log(message);

// JavaScript is an untyped language.
// var x = "Hey!";
// var y = 10;

// console.log(x);
// console.log(y);
// console.log(x + y);

// y = " is for Horses!";
// console.log(x + y);

// Declaring multiple variables in one line
// var x = 1, y = 2, z = "3";
// console.log(x + y + z);

// Data types

// numbers
// var integer_num = 1;
// var float_num = 1.23;

// console.log(integer_num + float_num);

// // strings
// var message = "Let's learn JavaScript!\n";
// console.log(message);

// // booleans
// var is_cool = true;
// console.log(is_cool + ' dat!');

// // arrays
// var my_stuff = [integer_num, message, is_cool];
// console.log(my_stuff);

// hashes - no symbols as keys, only strings
// var capitals = {
//   "LA": "Baton Rouge",
//   "TX": "Austin",
//   "GA": "Atlanta"
// };
// console.log(capitals["LA"]);

// Null and Undefined
// var x;

// // Variables that have not been initialized with a value are undefined:
// console.log(x);           // undefined

// // But they are not null:
// console.log(x === null);  // false

// // Unless you make them null:
// x = null;
// console.log(x);           // null
// console.log(x === null);  // true
// console.log(x === undefined);  // false

// // Or use type coercion - 2 equal signs will change the value rather than simply compare
// console.log(x == undefined); // true

// Scope
// This variable is in the Global scope, on purpose:
// var x = "I'm a global variable called x!";
// // console.log(x);

// // Define a function called someFunction:
// function someFunction(){
//   // This variable only exists inside the function (aka local):
//   var y = "I'm a local variable called y!";
//   // console.log(x);
//   // console.log(y);

//   // This is automatically global because we forgot the "var".  Don't do it.
//   z = 10;
//   console.log(z);
// }

// someFunction();
// // console.log(x);
// // console.log(y); // results in an error
// console.log(z);

// Operators
// var x = 10,
//     y = 5,
//     z = 3;

// console.log(x + y);  // 15
// console.log(x - y);  // 5
// console.log(x * y);  // 50
// console.log(x / y);  // 2
// console.log(Math.floor(x / z));  // 3 Used Math.floor to round down (not like Ruby integer math)
// console.log(x % z);  // 1  modulus, or remainder

// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// console.log(x === y);
// console.log(x !== y);

// var a = true, b = false;

// console.log(a && b); // AND false
// console.log(a || b); // OR true

// Conditionals
// var x = 10, y = "popcorn";

// if (x > y){
//   console.log("x is greater than y");
// } else if (x < y){
//   console.log("x is less than y");
// } else {
//   console.log("x is neither greater than or less than y");
// }

// Loops
// var x = [1, 2, 3, 4, 5];

// // C-style loop
// for (var i = 0; i < x.length; i++){
//   console.log(x[i]);
// }

// // For each
// x.forEach(function (element){
//   console.log(element);
// });

// // While loop
// var i = 0;

// while (i < x.length){
//   console.log(x[i]);
//   i++;
// }

// A function with explicit arguments
// function sumExplicitly(a, b){
//   console.log(a + b);
// }

// sumExplicitly(10, 5);

// // A function with implicit arguments
// function sumImplicitly(){
//   var total = 0, i;

//   for (i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }

//   console.log(total);
// }

// sumImplicitly(1, 4, 7, 3, 20);

// We must use "return" to actually return a value
function sum(a, b){
  return a + b;
}

var x = sum(10, 5),
    y = sum(x, sum(20, 30));

console.log(x);
console.log(y);


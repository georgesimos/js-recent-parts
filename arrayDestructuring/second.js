// function data() {
//   return [1, 2, 3, 4, 5];
// }
// var tmp = data() || [];
// var first, second, third, rest;
// [first, , third, ...rest] = tmp;
// console.log(first, second, third, rest);

// // #####################

// // Swap
// var x = 10;
// var y = 20;
// console.log(x, y);
// [y, x] = [x, y];
// console.log(x, y);

// // #####################
// // Parameter Arrays
// function data2([first = 10, second = 20, third = 30] = []) {
//   console.log(first, second, third);
// }
// data2();

// #####################
// Nested Arrays Destructuring
function data3() {
  return [1, [2, 3], 4, 5];
  //    return [1, undefined, 4, 5];
}
var tmp = data3() || [];
var first, second, third, fourth, rest;
[first, [second, third] = [], fourth, ...rest] = tmp;
console.log(first, second, third, fourth, rest);

// #####################

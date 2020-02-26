// function data() {
//   return [1, 2, 3, 4, 5];
// }

// var tmp = data() || [];
// var first, second, third, rest;
// first = tmp[0];
// second = tmp[1] !== undefined ? tmp[1] : 2;
// third = tmp[2];
// rest = tmp.slice(3);
// console.log(first, second, third, rest);

// // #####################

// // Swap
// var x = 10;
// var y = 20;
// console.log(x, y);
// {
//   let temp = x;
//   x = y;
//   y = temp;
// }
// console.log(x, y);

// // #####################
// // Parameter Arrays
// function data2(tmp = []) {
//   var [first = 10, second = 20, third = 30] = tmp;
//   console.log(first, second, third);
// }
// data2();

// #####################
// Nested Arrays Destructuring
function data3() {
  return [1, [2, 3], 4, 5];
}

var tmp = data3() || [];

var first = tmp[0];
var tmp2 = tmp[1] || [];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2];
var rest = tmp.slice(3);
console.log(first, second, third, fourth, rest);
// #####################

function data() {
  return [1, 2, 3, 4, 5];
}
var tmp = data() || [];
var first, second, third, rest;
[first, , third, ...rest] = tmp;
console.log(first, second, third, rest);

// #####################

// Swap
var x = 10;
var y = 20;
console.log(x, y);
[y, x] = [x, y];
console.log(x, y);

// #####################
// Parameter Arrays
function data2([first, second, third] = []) {}

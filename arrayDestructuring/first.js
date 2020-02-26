function data() {
  return [1, 2, 3, 4, 5];
}

var tmp = data();
var first, second, third, rest;
first = tmp[0];
// second = tmp[1] !== undefined ? tmp[1] : 2;
third = tmp[2];
rest = tmp.slice(3);
console.log(first, second, third, rest);

// #####################

// Swap
var x = 10;
var y = 20;
console.log(x, y);
{
  let temp = x;
  x = y;
  y = temp;
}
console.log(x, y);

// #####################
// Parameter Arrays
function data2(tmp) {
  var [first, second, third] = tmp;
}

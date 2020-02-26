function data() {
  return [1, 2, 3, 4, 5];
}

var tmp = data();
var first, second, thrird, rest;
first = tmp[0];
second = tmp[1] !== undefined ? tmp[1] : 2;
third = tmp[2];
rest = tmp.slice(3);
console.log(rest);
// #####################

function data() {
  return [1, 2, 3, 4, 5];
}
var tmp = data();
var first, second, thrird, rest;
[first, second = 2, third, ...rest] = tmp;
console.log(rest);

// #####################

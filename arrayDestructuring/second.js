function data() {
  return [1, 2, 3, 4, 5];
}
var first, second, thrird, rest;
[first, second = 2, third, ...rest] = data();
console.log(rest);
// #####################

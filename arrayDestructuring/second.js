function data() {
  return [1, 2, 3, 4, 5];
}
var tmp = data();
var first, second, third, rest;
[first, , third, ...rest] = tmp;
console.log(first, second, third, rest);

// #####################

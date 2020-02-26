function data() {
  return { b: 2, c: 3, d: 4 };
}

var tmp = data();
var first = tmp.a !== undefined ? tmp.a : 42;
var second = tmp.b;
var third = tmp.c;

console.log(first, second, third);

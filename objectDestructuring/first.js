function data() {
  return {
    a: 1,
    b: {
      c: 3,
      d: 4
    }
  };
}

var tmp = data() || {};
var first = tmp.a !== undefined ? tmp.a : 42;
var tmp2 = tmp.b || {};
var second = tmp2.c;
var third = tmp2.d;

console.log(first, second, third);

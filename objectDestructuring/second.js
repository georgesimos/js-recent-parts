function data() {
  return { b: 2, c: 3, d: 4 };
}
var tmp = data();
var { a: first = 42, b: second, ...rest } = tmp;
console.log(first, second, rest);

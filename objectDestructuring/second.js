function data() {
  return { a: 1, b: 2, c: 3, d: 4 };
}
var tmp = data();
var { a: first, b: second, ...rest } = tmp;
console.log(first, second, rest);

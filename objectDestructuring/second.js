function data() {
  return { a: 1, b: 2, c: 3 };
}
var tmp = data();
var { a: first, b: second, c: third } = tmp;
console.log(first, second, third);

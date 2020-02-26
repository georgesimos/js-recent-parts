function data() {
  return {
    a: 1,
    b: {
      c: 3,
      d: 4
    }
  };
}

var { a: first = 42, b: { c: third, d: fourth } = {}, ...rest } = data() || {};
console.log(first, third, fourth, rest);

function data() {
  return [1, 2, 3, 4, 5];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 2;
var third = tmp[2];
var rest = tmp.slice(3);
console.log(rest);
// #####################

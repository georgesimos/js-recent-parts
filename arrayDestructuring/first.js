function data() {
  return [1, 2, 3];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 2;
var third = tmp[2];

// #####################

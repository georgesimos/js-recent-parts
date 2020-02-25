function data() {
  return [1, 2, 3, 4, 5];
}

var [first, second = 2, third, ...rest] = data();

// #####################

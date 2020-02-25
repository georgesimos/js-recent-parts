var amount = 12.3;

var msg = formatCurrency`The total for your order is ${amount}`;

console.log(msg);

function formatCurrency(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "number") {
        str += `$${values[i - 1].toFixed(2)}`;
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

function upper(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      str += String(values[i - 1]).toUpperCase();
    }
    str += strings[i];
  }
  return str;
}

var name = "George",
  twitter = "simos",
  topic = "JS Recent Parts";

const msg = upper`Hello ${name} (@${twitter}), welcome to ${topic}`;
console.log(msg === `Hello GEORGE (@SIMOS), welcome to JS RECENT PARTS`);

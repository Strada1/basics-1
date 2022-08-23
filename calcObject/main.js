let operations = {
  add: "+",
  multi: "*",
  sub: "-",
};
function calc(a, b, action) {
  switch (action) {
    case operations.add:
      return a + b;
      break;
    case operations.sub:
      return a - b;
      break;
    case operations.multi:
      return a * b;
      break;
  }
}
console.log(calc(55, 5, operations.add));


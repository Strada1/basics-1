let operations = {
  add : '+',
  multi : '*',
  sub : '-',
};


function calc(operator, a, b) {
  switch (operator) {
    case operations.add:
      return a + b;

    case operations.multi:
      return a * b;

    case operations.sub:
      return a - b;

    default:
      return console.log("error");
  }
}

console.log(calc(operations.add, 10, 5));
console.log(calc(operations.multi, 5, 5));
console.log(calc(operations.sub, 5, 5));
console.log(calc('nothing', 5, 5));
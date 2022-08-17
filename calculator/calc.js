
const operations = {
  add : "+",
  multi : "-",
  subtract : "*"
};

function calc(action, a, b) {
  switch (action) {
    case operations.add:
    return (a + b);

    case operations.multi:
      return (a - b);

    case operations.subtract:
      return (a * b);
  }
}
console.log(calc(operations.add, 5, 2));
console.log(calc(operations.multi, 10, 5));
console.log(calc(operations.subtract, 6, 3));

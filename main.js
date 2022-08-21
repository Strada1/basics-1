const operations = {
  add: "add",
  multi: "multi",
  sub: "subtract",
}

function calc(operator, a, b) {
  const {add, multi, sub} = operations;

  switch (operator) {
    case add:
      return a + b;
    case multi:
      return a * b;
    case sub:
      return a - b;
    default:
      console.log("Ошибка");
  }
}
calc(operations.add, 3, 2);

/////////////////////////////////

for (let i = 1; i <= 19; i++) {
  console.log(i);
}

/////////////////////////////////

let i = 1;

while(i <= 19) {
  console.log(i);
  i++;
}

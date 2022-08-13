function calc(identifier, a, b) {
  switch (identifier) {
    case "add":
      return a + b;

    case "multi":
      return a * b;

    case "substract":
      return a - b;

    default:
      return console.log("error");
  }
}

console.log(calc("add", 10, 5));
console.log(calc("multi", 5, 5));
console.log(calc("substract", 5, 5));
console.log(calc("nothing", 5, 5));
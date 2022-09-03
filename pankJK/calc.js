function calc(func, a, b) {
  switch (func) {
    case "add":
      return +a + +b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;

    default:
      return "error";
  }
}
console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));
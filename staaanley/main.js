function calc(a, b, mathOperation) {
  switch (mathOperation) {
    case "add":
      return a + b;

    case "multi":
      return a * b;

    case "subtract":
      return a - b;

    default:
      return "Error"
  }
}

console.log(calc(5, 7, "add"));
console.log(calc(2, 3, "multi"));
console.log(calc(10, 7, "subtract"));
console.log(calc(2, 3,));
function calc(action, a, b) {
  switch (action) {
    case "add":
      return (a + b);

    case "multi":
      return (a - b);

    case "subtract":
      return (a * b);
  }
}
console.log(calc("add", 5, 2));
console.log(calc("multi", 10, 5));
console.log(calc("subtract", 6, 3));

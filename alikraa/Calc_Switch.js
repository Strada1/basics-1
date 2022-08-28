function calc(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "subtract":
            return a - b;
        default:
            return "error";
    }
}
  
  
  console.log(calc("subtract", 100, 99));
  console.log(calc("add", 20, 6));
  console.log(calc("multi", 2, 11));
  console.log(calc("calc", 19, 88));
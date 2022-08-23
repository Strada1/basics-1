function calc(a, b, action) {
  switch (action) {
    case "add":
      return a + b;
      break;
    case "substruct":
      return a - b;
      break;
    case "multi":
      return a * b;
      break;
  }
}
console.log(calc(4, 5, "add"));
console.log(calc(4, 5, "substruct"));
console.log(calc(4, 5, "multi"));

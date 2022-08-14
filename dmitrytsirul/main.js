function calc(Operator, FirstNumber, SecondNumber) {
  if (FirstNumber !== +FirstNumber || SecondNumber !== +SecondNumber) {
    console.log("Вам нужно вести число");
  }
  switch (Operator) {
    case "+":
      console.log(+FirstNumber + +SecondNumber);
      break;
    case "-":
      console.log(+FirstNumber - +SecondNumber);
      break;
    case "*":
      console.log(+FirstNumber * +SecondNumber);
      break;
    default:
      console.log("Не правильно введен оператор '+','-','*'");
  }
}
console.log(calc("+", 9, 81));
console.log(calc("-", 10, 5));
console.log(calc("*", 2, 3));
console.log(calc("d", 2, 4));
console.log(calc("+", "s", 3));

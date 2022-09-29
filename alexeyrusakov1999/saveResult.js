export function calc(firstNumber, secondNumber, operation) {
  let result;
  switch (operation) {
    case "+":
      result = Number(firstNumber + secondNumber).toFixed(10);
      break;
    case "*":
      result = Number(firstNumber * secondNumber).toFixed(10);
      break;
    case "-":
      result = Number(firstNumber - secondNumber).toFixed(10);
      break;
    case "/":
      result = Number(firstNumber / secondNumber).toFixed(10);
      break;
  }
  return result;
}

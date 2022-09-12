export default function calc(calculations, numberOne, numberTwo) {
  switch (calculations) {
    case "+":
      return numberOne + numberTwo;
    case "*":
      return numberOne * numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "/":
      return numberOne / numberTwo;
    case "**":
      return umberOne ** numberTwo;
    case "%":
      return numberOne % numberTwo;
  }
}

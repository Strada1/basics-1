export function calc() {
  let a = +document.querySelector("#first-input").value;
  let b = +document.querySelector("#second-input").value;
  let operation = document.querySelector("#operation").value;
  let result;

  switch (operation) {
    case "+":
      result = Number(a + b).toFixed(10);
      break;
    case "*":
      result = Number(a * b).toFixed(10);
      break;
    case "-":
      result = Number(a - b).toFixed(10);
      break;
    case "/":
      result = Number(a / b).toFixed(10);
      break;
  }
  document.querySelector(".result").innerHTML = Number(result);
}

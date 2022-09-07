calculation.addEventListener("click", calc);

function calc() {
  let operation = document.getElementById("func").value;
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  let result = document.getElementById("result");
  if((a == "") || (b == "")) {
    result.innerHTML = 'error';
    result.style.background ="red"
  } else { 
    result.style.background = null
  switch (operation) {
    case "+":
        c = +a + +b
        result.innerHTML = c;
        break;s
    case "*":
      c = a * b;
      result.innerHTML = c;
      break;
    case "-":
      c = a - b;
      result.innerHTML = c;
      break;
    case "/":
      c = a / b;
      result.innerHTML = c;
      break;
  }}
}

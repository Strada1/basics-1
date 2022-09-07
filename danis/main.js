let equals = document.querySelector("#equals");
let result = document.querySelector(".result");


equals.addEventListener("click", function () {
  let operator = document.querySelector("#identifier").value;
  let firstNumber = document.querySelector(".a").value;
  let secondNumber = document.querySelector(".b").value;

  if ((firstNumber == "") || (secondNumber == "")) {
    result.textContent = "Пожалуйста введите все числа";
    result.style.color = "red";
  } else {
    result.textContent = Number(calc(operator, firstNumber, secondNumber).toFixed(2));
    result.style.color = "green";
  }
});

function calc(identifier, a, b) {
  switch (identifier) {
    case "+":
      return Number(a) + Number(b);

    case "*":
      return a * b;

    case "-":
      return a - b;

    case "/":
      return a / b;

  }
}


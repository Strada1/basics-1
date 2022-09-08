
  const operations = {
    add: "+",
    sub: "-",
    multi: "*",
    divide : "/",
  };

function calc() {
  let firstNumber = +document.getElementById("firstNumder").value;
  let secondNumber = +document.getElementById("secondNumber").value;
  let operator = document.getElementById("select").value;


  if (secondNumber == 0 && operator == "/") {
    alert("На ноль делить нельзя");
  } 



  switch (operator) {
    case operations.add:
      return firstNumber + secondNumber;
    case operations.multi:
      return firstNumber * secondNumber;
    case operations.sub:
      return firstNumber - secondNumber;
    case operations.divide:
      return firstNumber / secondNumber;
  }
}


let btn = document.querySelector(".button");
let result = document.querySelector(".result");
btn.addEventListener("click", () => (result.innerHTML = +calc().toFixed(10)));












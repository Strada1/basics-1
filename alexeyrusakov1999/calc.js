const calc = () => {
  let a = document.querySelector("#first-input").value;
  let b = document.querySelector("#second-input").value;
  let operation = document.querySelector("#operation").value;
  let result = document.querySelector(".result");

  if (a == "" || b == "") {
    result.textContent = "Вы не ввели число!";
  }

  switch (operation) {
    case "plus":
      result.textContent = Number(+a + +b).toFixed(10);
      break;
    case "multiply":
      result.textContent = Number(+a * +b).toFixed(10);
      break;
    case "mines":
      result.textContent = Number(+a - +b).toFixed(10);
      break;
    case "divide":
      result.textContent = Number(+a / +b).toFixed(10);
      break;
    default:
      alert("Эта операция не поддерживается");
  }
};

equal.addEventListener("click", calc);

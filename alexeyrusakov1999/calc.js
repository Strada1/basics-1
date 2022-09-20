let a = document.querySelector("#first-input").value; // присваиваю первое число инпуту
let b = document.querySelector("#second-input").value; // присваиваю второе число инпуту
let operation = document.querySelector("#operation").value;
let result = document.querySelector(".result");
let lastResults = document.querySelector(".SavesResults");

// создаю функцию, которая сохраняет результаты и удаляет по нажатию

function saveResult() {
  let lastResult = document.createElement("div");

  lastResult.addEventListener("click", () => {
    lastResult.remove();
  });

  lastResult.textContent = result.textContent;
  lastResults.append(lastResult);
}

// сама функция calc

const calc = () => {
  if (a == "" || b == "") {
    result.textContent = "Вы не ввели число!";
  }

  switch (operation) {
    case "plus":
      result.textContent = +Number(+a + +b).toFixed(10);
      break;
    case "multiply":
      result.textContent = +Number(+a * +b).toFixed(10);
      break;
    case "mines":
      result.textContent = +Number(+a - +b).toFixed(10);
      break;
    case "divide":
      result.textContent = +Number(+a / +b).toFixed(10);
      break;
    default:
      alert("Эта операция не поддерживается");
  }

  console.log(result.textContent);
};

// обработчик событий с двумя функциями

equal.addEventListener("click", () => {
  calc();
  saveResult();
});

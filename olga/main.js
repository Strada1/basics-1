const result = document.querySelector(".result");
const valueOne = document.querySelector(".calculate__value--one");
const valueTwo = document.querySelector(".calculate__value--two");
const calculateSelect = document.querySelector(".calculate__select");
const total = document.querySelector("span");
import { createEl } from "./modules.js";

function calc(operator, a, b) {
  console.log(a);
  switch (operator) {
    case "+":
      return +a + +b;
    case "*":
      return a * b;
    case "-":
      return a - b;
    default:
      console.log("Ошибка");
  }
}

result.addEventListener("click", function () {
  if (valueOne.value != "" && valueTwo.value != "") {
    createEl(
      (total.textContent = +calc(calculateSelect.value, valueOne.value, valueTwo.value).toFixed(2))
    );
  } else {
    total.textContent = "Заполните поле";
  }
});

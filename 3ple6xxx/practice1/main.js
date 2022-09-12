const button = document.getElementById("button");
const result = document.getElementById("result");
const calculations = document.getElementById("calculations");
const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
function resultSave(text) {
  const div = document.createElement("div");
  div.textContent = text;
  result.prepend(div);
  div.addEventListener("click", function () {
    setTimeout(() => div.remove(), 1000);
  });
}
button.addEventListener("click", function (event) {
  const arg1 = Number(numberOne.value);
  const arg2 = Number(numberTwo.value);
  event.preventDefault();
  if (arg1 === "" || arg2 === "") {
    return (result.textContent = "Введите числа");
  } 
  const response = calc(calculations.value, arg1, arg2);
  resultSave(response);
});
import calc from "./calc.js";
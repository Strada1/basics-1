import { calc } from "./calc.js";

elem.addEventListener("click", function () {
  let a = document.querySelector(".number1").value;
  let b = document.querySelector(".number2").value;
  let operator = document.querySelector("select").value;
  let result = document.querySelector(".result");
  result.textContent = calc(a, b, operator);

  let div = document.createElement("div");
  div.className = "del";
  div.textContent = calc(a, b, operator);
  let saveDiv = document.querySelector(".save_container");
  saveDiv.append(div);

  div.addEventListener("click", function () {
    div.remove();
  });
});





import { calc } from "./saveResult.js";

const button = document.querySelector(".equal");

button.addEventListener("click", () => {
  let a = +document.querySelector("#first-input").value;
  let b = +document.querySelector("#second-input").value;
  let operation = document.querySelector("#operation").value;

  document.querySelector(".result").innerHTML = Number(calc(a, b, operation));

  let newDiv = document.createElement("div");
  newDiv.textContent = Number(calc(a, b, operation));
  let lastResults = document.querySelector(".SavesResults");
  lastResults.append(newDiv);
  newDiv.addEventListener("click", () => newDiv.remove());
});

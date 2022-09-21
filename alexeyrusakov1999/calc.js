import { calc } from "./saveResult.js";

let button = document.querySelector(".equal");

// function calc() {
//   let a = +document.querySelector("#first-input").value;
//   let b = +document.querySelector("#second-input").value;
//   let operation = document.querySelector("#operation").value;

//   switch (operation) {
//     case "+":
//       result = Number(a + b).toFixed(10);
//       break;
//     case "*":
//       result = Number(a * b).toFixed(10);
//       break;
//     case "-":
//       result = Number(a - b).toFixed(10);
//       break;
//     case "/":
//       result = Number(a / b).toFixed(10);
//       break;
//   }
//   document.querySelector(".result").innerHTML = Number(result);
// }

button.addEventListener("click", () => {
  calc();

  let newDiv = document.createElement("div");
  newDiv.textContent = Number(result);
  let lastResults = document.querySelector(".SavesResults");
  lastResults.append(newDiv);
  newDiv.addEventListener("click", () => newDiv.remove());
});

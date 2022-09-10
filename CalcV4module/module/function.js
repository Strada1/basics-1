//Функция добавления
import {calc} from "/basics-1/CalcV4module/main.js";

export function addedResultDOM() {
  let element = document.querySelector(".result");
  let div = document.createElement("div");
  div.className = "calculation__result";
  div.innerHTML = +calc().toFixed(10);
  element.append(div);
  div.addEventListener("click", () => div.remove());
}


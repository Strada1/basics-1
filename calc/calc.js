import { CHECKS_TEXT } from './module.js';
import {CHECKS_VALUE} from './module.js'

const answer = document.getElementById("answer");
answer.addEventListener("click", calc);

let result1 = document.getElementById("result");

function calc() {
  const action = document.getElementById("action").value;
  const a = document.getElementById("number1").value;
  const b = document.getElementById("number2").value;
  let result2;

  if (a == "" || b == "") {
    return (result1.textContent = CHECKS_TEXT.EMPTY_STRING);
  }
  if (isNaN(a)) {
    return (result1.textContent = CHECKS_TEXT.THIS_IS_LETTERS);
  }
  if (isNaN(b)) {
    return (result1.textContent = CHECKS_TEXT.THIS_IS_LETTERS);
  } else {
    switch (action) {
      case "+":
        result2 = Number(a) + Number(b);
        result1.innerHTML = result2;
        break;

      case "-":
        result2 = a - b;
        result1.innerHTML = result2;
        break;

      case "*":
        result2 = a * b;
        result1.innerHTML = result2;
        break;

      case "/":
        if (Number(b) === CHECKS_VALUE.DIVIDE_ZERO) {
          return (result1.textContent = CHECKS_TEXT.DONT_DIVIDE_BY_ZERO);
        } else {
          result2 = a / b;
          result1.innerHTML = result2;
        }
    }
  }
  let ul = document.createElement("ul");
  document.body.append(ul);
  ul.className = "saveResult";

  answer.addEventListener("click", save);

  function save() {
    let save = document.createElement("ol");
    document.body.lastElementChild.append(save);
    save.textContent = result2;
    
    save.addEventListener("click", function () {
      save.remove();
    });
  }
}

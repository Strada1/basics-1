import {
  calculator,
  calcButton,
  firstInput,
  secondInput,
  operator,
  value,
  list,
} from "./consts.js";

function calc() {
  let firstOperand = +firstInput.value;
  let secondOperand = +secondInput.value;
  switch (operator.value) {
    case `sum`:
      value.innerHTML = firstOperand + secondOperand;
      break;
    case `sub`:
      value.innerHTML = firstOperand - secondOperand;
      break;
    case `multi`:
      value.innerHTML = firstOperand * secondOperand;
      break;
    case `div`:
      value.innerHTML = firstOperand / secondOperand;
      break;
    default:
      console.log(`Error`);
  }

  list.insertAdjacentHTML(
    `beforeend`,
    `<li class="js-item">${value.innerHTML}</li>`
  );

  const items = calculator.querySelectorAll(`.js-item`);

  items.forEach((item) => {
    function deleteItem() {
      item.remove();
    }

    item.addEventListener(`click`, deleteItem);
  });
}

calcButton.addEventListener(`click`, calc);

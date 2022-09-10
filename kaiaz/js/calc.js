let calcBtn = document.querySelector("#calc");
const ADD = "add";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const elements = [];

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let firstOperand = Number(document.querySelector("#first_operand").value);
  let secondOperand = Number(document.querySelector("#second_operand").value);
  let operation = document.querySelector("#operation").value;
  let result;

  switch (operation) {
    case ADD:
      result = add(firstOperand, secondOperand);
      break;
    case SUBTRACT:
      result = subtract(firstOperand, secondOperand);
      break;
    case MULTIPLY:
      result = multiply(firstOperand, secondOperand);
      break;
    case DIVIDE:
      result = divide(firstOperand, secondOperand);
      break;
  }
  renderResult(result);
  renderSavedResults(elements);
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function renderResult(res) {
  let text = document.querySelector("#result");
  text.textContent = res;
  createElem(res);
}

function createElem(elemContent) {
  element = document.createElement("div");
  element.className = "result";
  element.textContent = elemContent;
  element.addEventListener("click", function () {
    this.remove();
    elements.pop();
  });
  elements.push(element);
}

function renderSavedResults(elems) {
  let savedResultsElem = document.querySelector("#savedResults");
  for (el of elems) {
    savedResultsElem.append(el);
  }
}

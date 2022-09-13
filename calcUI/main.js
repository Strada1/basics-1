function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function calc() {
  let a = +term1.value;
  let b = +term2.value;
  let action = operation.value;
  const isNumber = !isNaN(a) && !isNaN(b) ? true : false;
  const operations = {
    add: add,
    multi: multi,
    subtract: subtract,
    div: div,
  };
  if (isNumber) {
    displayResult.value = operations[action](a, b);
    addTagResult(displayResult.value);
  } else {
    displayResult.innerHTML = "error";
  }
}
let countDivResult = 0;
function addTagResult(result) {
  let div = document.createElement("div");
  let id = `result${countDivResult++}`;
  div.id = id;
  div.innerHTML = result;
  calcdiv.after(div);
  div.addEventListener("click", div.remove);
}

result.addEventListener("click", calc);

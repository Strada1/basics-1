function getCalc(a, b, operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break
    case '*':
      result = a * b;
      break
    case '/':
      result = a / b;
      break
  }
  return result;
}

function getValue(classOfelement) {
  return document.querySelector(classOfelement).value
}

function getElement(classOfelement) {
  return document.querySelector(classOfelement);
}

function outPrint(message, textBoxClass) {
  let textBox = getElement(textBoxClass);
  textBox.textContent = message;
}

function clearResult() {
  outPrint('', '.result-message')
}

function mainBigFunction() {
  let firstNumber = +getValue('.first-number');
  let secondNumber = +getValue('.second-number');
  let operation = getValue('.operation');
  let result = +(getCalc(firstNumber, secondNumber, operation)).toFixed(10);
  outPrint(result, '.result-message')
}

let rezultButton = getElement('.get-result');
rezultButton.addEventListener("click", mainBigFunction);

let choosedOperator = getElement('.operation');
choosedOperator.addEventListener("change", clearResult);

function insertResult() {
  let historyBox = getElement('.history-box')
  let firstNumber = getValue('.first-number');
  let secondNumber = getValue('.second-number');
  let operation = getValue('.operation');
  let result = getElement('.result-message').textContent;
  let historyItem = `${firstNumber} ${operation} ${secondNumber} = ${result} `;
  let div = document.createElement('div');
  div.textContent = historyItem;
  div.classList.add('history-item')
  historyBox.append(div)
}
rezultButton.addEventListener("click", insertResult);

function deleteResultFromHistory() {
  let historyItems = document.querySelectorAll('.history-item');
  for (let historyItem of historyItems ) {
    historyItem.addEventListener("click", () => historyItem.remove() );
  }
}
rezultButton.addEventListener("click", deleteResultFromHistory);
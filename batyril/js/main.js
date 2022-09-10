const UI = {
  BUTTON: document.querySelector('.calculator__button'),
  RESULT: document.querySelector('.calculator__result'),
  ALL_PREVIOUS_RESULTS: document.getElementsByClassName('calculator__previous-result'),
  PARENT_RESULTS: document.querySelector('.calculator__results'),
  FIRST_NUMBER: document.querySelector('.calculator__number-first'),
  SECOND_NUMBER: document.querySelector('.calculator__number-second'),
  OPERATOR: document.querySelector('.calculator__operators'),
  FORM: document.querySelector('.calculator__form')
};

function getResultCalculator(operator, firstValue, secondValue) {
  let result;
  const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
    division: '/',
  };

  switch (operator) {
    case operations.multi:
      result = firstValue * secondValue;
      break;
    case operations.add:
      result = firstValue + secondValue;
      break;
    case operations.subtract:
      result = firstValue - secondValue;
      break;
    case operations.division:
      if (secondValue === 0) {
        result = 'you can\'t  divide by zero';
        break;
      }
      result = (firstValue / secondValue).toFixed(7);
      break;
    default:
      result = 'operator not found';
  }
  return result;
}

const history_results = [];

function renderingCalculationHistory(arr){
  if (history_results.length === 0){
    return
  }
  let divResult = document.createElement('div');
  divResult.classList.add('calculator__previous-result');
  divResult.textContent = `${arr[arr.length-1]}`
  UI.RESULT.after(divResult)
}

UI.BUTTON.addEventListener('click', () => renderingCalculationHistory(history_results))

UI.BUTTON.addEventListener('click', () => {
  if (UI.FIRST_NUMBER.value.length === 0 || UI.SECOND_NUMBER.value.length === 0) {
   return UI.RESULT.textContent = "enter the numbers"
  }

  UI.RESULT.textContent = getResultCalculator(
    UI.OPERATOR.value,
    Number(UI.FIRST_NUMBER.value),
    Number(UI.SECOND_NUMBER.value),
  );
  history_results.push(UI.RESULT.textContent);
});

function deletingExtraElements(numberElements,element) {
  if (numberElements >= 3){
    element.lastElementChild.remove()
  }
}

UI.BUTTON.addEventListener('click', () => deletingExtraElements(UI.ALL_PREVIOUS_RESULTS.length, UI.PARENT_RESULTS ))

function deletingElements(event) {
if (event.target.className === 'calculator__previous-result'){
  event.target.remove();
}
}

UI.PARENT_RESULTS.addEventListener('click', (event) => deletingElements(event))

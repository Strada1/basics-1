const Operations = {
  ADD: '+',
  MULTI: '*',
  SUBTRACT: '-',
  DIVIDE: '/'
};

const Error = {
  OPERAND_ERROR: 'Неверный формат введённого значения',
  OPERATOR_ERROR: 'Неизвестная операция',
  ZERO_DIVIDING_ERROR: 'Деление на ноль'
};

ALERT_SHOW_TIME = 5000;


const showError = (errorText) => {
  const errorFieldElement = document.querySelector('.error-field');
  errorFieldElement.textContent = errorText;
  errorFieldElement.classList.remove('error-field--hidden');

  setTimeout(() => {
    errorFieldElement.classList.add('error-field--hidden');
  }, ALERT_SHOW_TIME);
};


const getSum = (number1, number2) => +(number1 + number2).toFixed(10);

const getMultiplication = (number1, number2) => +(number1 * number2).toFixed(10);

const getSubtraction = (number1, number2) => +(number1 - number2).toFixed(10);

const getDividing = (number1, number2) => +(number1 / number2).toFixed(10);


const calc = (operation, number1, number2) => {
  if (!Object.values(Operations).includes(operation)) {
    showError(Error.OPERATOR_ERROR);
    return;
  }

  if (!isFinite(number1) || !isFinite(number2) || number1 === '' || number2 === '') {
    showError(Error.OPERAND_ERROR);
    return;
  }

  let result = null;
  number1 = +number1;
  number2 = +number2;

  switch (operation) {
    case Operations.ADD:
      result = getSum(number1, number2);
      break;

    case Operations.MULTI:
      result = getMultiplication(number1, number2);
      break;

    case Operations.SUBTRACT:
      result = getSubtraction(number1, number2);
      break;

    case Operations.DIVIDE:
      result = getDividing(number1, number2);
      if (!isFinite(result)) {
        showError(Error.ZERO_DIVIDING_ERROR);
        return;
      }
      break;
  }

  return result;
};


const addResultToList = (result) => {
  const resultItemElement = document.createElement('li');
  resultItemElement.className = 'calculator__result-item';
  resultItemElement.textContent = result;
  resultsListElement.prepend(resultItemElement);
  resultsListElement.addEventListener('click', (evt) => {
    evt.target.remove();
  });
};


const resultButtonElement = document.querySelector('.result-button');
const resultFieldElement = document.querySelector('.result-field');
const resultsListElement = document.querySelector('.calculator__results-list');

resultButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  const operator = document.querySelector('.operator-selector').value;
  const operandsFieldsElements = document.querySelectorAll('.operand-field');
  const firstValue = operandsFieldsElements[0].value;
  const secondValue = operandsFieldsElements[1].value;

  const result = calc(operator, firstValue, secondValue);

  if (result !== null && result !== undefined) {
    resultFieldElement.textContent = result;
    addResultToList(result);
  }
});

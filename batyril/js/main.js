const UI = {
  BUTTON: document.querySelector('.calculator__button'),
  RESULT: document.querySelector('.calculator__result'),
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

UI.BUTTON.addEventListener('click', () => {
  const VALUES_CALCULATOR = {
    FIRST_VALUE: Number(UI.FIRST_NUMBER.value),
    SECOND_VALUE: Number(UI.SECOND_NUMBER.value),
    OPERATOR: UI.OPERATOR.value,
  };

  UI.RESULT.textContent = getResultCalculator(
    UI.OPERATOR.value,
    VALUES_CALCULATOR.FIRST_VALUE,
    VALUES_CALCULATOR.SECOND_VALUE,
  );
});

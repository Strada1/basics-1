import { showError, Error } from './error.js';

const Operations = {
  ADD: '+',
  MULTI: '*',
  SUBTRACT: '-',
  DIVIDE: '/'
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

export { calc };

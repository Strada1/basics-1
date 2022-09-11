import { showError, Error } from './error.js';

const Operations = {
  ADD: '+',
  MULTI: '*',
  SUBTRACT: '-',
  DIVIDE: '/'
};

const Checks = {
  ZERO: 0,
  EMPTY: ''
};

const getSum = (number1, number2) => Number((number1 + number2).toFixed(10));

const getMultiplication = (number1, number2) => Number((number1 * number2).toFixed(10));

const getSubtraction = (number1, number2) => Number((number1 - number2).toFixed(10));

const getDividing = (number1, number2) => Number((number1 / number2).toFixed(10));


const calc = (operation, number1, number2) => {
  if (!isFinite(number1) || !isFinite(number2) || number1 === Checks.EMPTY || number2 === Checks.EMPTY) {
    showError(Error.OPERAND_ERROR);
    return;
  }

  number1 = Number(number1);
  number2 = Number(number2);

  switch (operation) {
    case Operations.ADD:
      return getSum(number1, number2);

    case Operations.MULTI:
      return getMultiplication(number1, number2);

    case Operations.SUBTRACT:
      return getSubtraction(number1, number2);

    case Operations.DIVIDE:
      if (number2 === Checks.ZERO) {
        showError(Error.ZERO_DIVIDING_ERROR);
        return;
      }
      return getDividing(number1, number2);

    default:
      showError(Error.OPERATOR_ERROR);
      return;
  }
};

export { calc };

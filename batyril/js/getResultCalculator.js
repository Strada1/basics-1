export function getResultCalculator(operator, firstValue, secondValue) {
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

const getSum = (number1, number2) => number1 + number2;

const getMultiplication = (number1, number2) => number1 * number2;

const getSubtraction = (number1, number2) => number1 - number2;


const calc = (operation, number1, number2) => {
  let result = null;

  switch (operation) {
    case 'add':
      result = getSum(number1, number2);
      break;

    case 'multi':
      result = getMultiplication(number1, number2);
      break;

    case 'subtract':
      result = getSubtraction(number1, number2);
      break;
  }

  return result;
};


console.log(calc('add', 4, 7));
console.log(calc('multi', 4, 7));
console.log(calc('subtract', 4, 7));

import { calc } from './operations.js';

const resultButtonElement = document.querySelector('.result-button');
const resultFieldElement = document.querySelector('.result-field');
const resultsListElement = document.querySelector('.calculator__results-list');
const operatorElement = document.querySelector('.operator-selector');
const operandsFieldsElements = document.querySelectorAll('.operand-field');

const addResultToList = (result, listElement) => {
  const resultItemElement = document.createElement('li');
  resultItemElement.className = 'calculator__result-item';
  resultItemElement.textContent = result;
  listElement.prepend(resultItemElement);
  resultItemElement.addEventListener('click', (evt) => {
    evt.target.remove();
  });
};

const calculator = () => {
  resultButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    const operator = operatorElement.value;
    const firstValue = operandsFieldsElements[0].value;
    const secondValue = operandsFieldsElements[1].value;

    const result = calc(operator, firstValue, secondValue);

    if (result !== null && result !== undefined) {
      resultFieldElement.textContent = result;
      const resultString = `${firstValue} ${operator} ${secondValue} = ${result}`;
      addResultToList(resultString, resultsListElement);
    }
  });
};

export { calculator };

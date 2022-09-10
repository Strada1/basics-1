import { calc } from './operations.js';

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
      addResultToList(result, resultsListElement);
    }
  });
};

export { calculator };

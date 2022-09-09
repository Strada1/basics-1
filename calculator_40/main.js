let num1 = document.querySelector('.calc_numOne');
let num2 = document.querySelector('.calc_numTwo');
let operator = document.querySelector('.calc_do');
let resultInCalc = document.querySelector('.fake-result');
let blockwithResults = document.querySelector('.resultsBlock');
let results = document.getElementsByClassName('result');
let btn = document.querySelector('.btn');

function calc(operator, a = 0, b = 0) {
  if (b === 0 && operator === 'divide') {
    return `Error`;
  }
  switch (operator) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    case 'divide':
      return a / b;
    default:
      console.log('Ошибка');
      return 'Ошибка';
  }
}

function CreateAndSaveElemInNotes() {
  let newRes = document.createElement('li');
  newRes.className = 'result';
  blockwithResults.append(newRes);
  newRes.addEventListener('click', e => {
    e.target.remove();
  });

  return newRes;
}

btn.addEventListener('click', function () {
  num1.placeholder = num1.value;
  num2.placeholder = num2.value;
  let newRes = CreateAndSaveElemInNotes();
  let gg = calc(operator.value, +num1.value, +num2.value);
  if (num1.value === '0' || num2.value === '0') {
    resultInCalc.textContent = gg;
    newRes.textContent = gg;
  } else {
    newRes.textContent = +gg.toFixed(10);
    resultInCalc.textContent = +gg.toFixed(10);
  }
  if (results.length === 11) {
    results[0].remove();
  }
});

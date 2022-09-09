const select = document.querySelector('#select');
const equally = document.querySelector('#equally');
const result = document.querySelector('#result');
const num_1 = document.querySelector('#num_1');
const num_2 = document.querySelector('#num_2');
const answers = document.querySelector('#answers');

const OPERATORS = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
}

equally.addEventListener('click', function () {
  if (num_1.value === '' || num_2.value === '') {
    return result.innerHTML = 'Пустой инпут'
  } else {
    if (select.value === '+') {
      result.innerHTML = Calculator(num_1.value, num_2.value, OPERATORS["+"]);
      createElement('+');
    } else if (select.value === '-') {
      result.innerHTML = Calculator(num_1.value, num_2.value, OPERATORS["-"]);
      createElement('-');
    } else if (select.value === '*') {
      result.innerHTML = Calculator(num_1.value, num_2.value, OPERATORS["*"]);
      createElement('*');
    } else if (select.value === '/') {
      result.innerHTML = Calculator(num_1.value, num_2.value, OPERATORS["/"]);
      createElement('/');
    }
  }
})


function Calculator (a, b, operator) {
  switch (operator) {
    case '+' :
      return +a + +b;
      break;
    case '-' :
      return +a - +b;
      break;
    case '*' :
      return +a * +b;
      break;
    case '/':
      return +a / +b;
      break;
    default:
      return 'Значения не заданы';
  }
}

function createElement (operator) {
  const answer = document.createElement('div');
  answer.className = 'answer';
  answer.innerHTML = Calculator(num_1.value, num_2.value, OPERATORS[`${operator}`]);
  answers.append(answer);
  deleteElement(answer);
}

function deleteElement (elem) {
  elem.addEventListener('click', () => {
    elem.className = 'display_none';
  })
}
let btn = document.getElementById('btn');
btn.onclick = function () {
  let firstOperand = document.getElementById('firstInput').value;
  let secondOperand = document.getElementById('secondInput').value;
  let operator = document.getElementById('select').value;
  if (firstOperand === '' || isNaN(+firstOperand) || secondOperand === '' || isNaN(+secondOperand)) {
    alert('Вы не ввели число!');
    return;
  }
  else{
    firstOperand = +firstOperand;
    secondOperand = +secondOperand;
  }

  let result = calc(operator, firstOperand, secondOperand);
  document.getElementById('calc_result').textContent = result;

}

function calc(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '/':
      return (firstOperand / secondOperand).toFixed(2);
    default:
      return ('Такого действия нет.');
  }
}

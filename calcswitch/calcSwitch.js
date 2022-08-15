let doit = prompt('введите оператор,(+,-,*)');
let num1 = +prompt('введите число 1');
let num2 = +prompt('введите число 2');
function calc(doit, num1, num2) {
  switch (doit) {
    case '+':
      {
        alert(num1 + num2);
      }
      break;

    case '-': {
      alert(num1 - num2);
      break;
    }

    case '*':
      {
        alert(num1 * num2);
      }
      break;
    default: {
      alert('Введено некорректное значение');
    }
  }
}

calc(doit, num1, num2);

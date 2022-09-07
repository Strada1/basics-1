function Calc() {
  let firstNumb = firstnumber.value;
  let secondNumb = secondnumber.value;
  if (firstNumb === '' || secondNumb === '') {
    result.textContent = 'Введите число';
  } else {
    switch (calc.value) {
      case '+':
        result.textContent = +firstNumb + +secondNumb;
        break;
      case '-':
        result.textContent = +firstNumb - +secondNumb;
        break;
      case '*':
        result.textContent = +firstNumb * +secondNumb;
        break;
      case '/':
        if (+secondNumb === 0) {
          result.textContent = 'Ошибка';
        } else {
          result.textContent = +firstNumb / +secondNumb;
          break;
        }
    }
  }
}

btn.addEventListener('click', Calc);

function сalc() {
  let firstNumb = firstnumber.value;
  let secondNumb = secondnumber.value;
  if (firstNumb === '' || secondNumb === '') {
    result.textContent = 'Введите число';
  } else {
    switch (calc.value) {
      case '+':
        result.textContent = +(+firstNumb + +secondNumb).toFixed(10);
        break;
      case '-':
        result.textContent = +(+firstNumb - +secondNumb).toFixed(10);
        break;
      case '*':
        result.textContent = +(+firstNumb * +secondNumb).toFixed(10);
        break;
      case '/':
        if (+secondNumb === 0) {
          result.textContent = 'Ошибка';
        } else {
          result.textContent = +(+firstNumb / +secondNumb).toFixed(10);
          break;
        }
    }
  }
}

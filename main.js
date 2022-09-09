function сalc() {
  let firstNumb = firstnumber.value;
  let secondNumb = secondnumber.value;
  let result = '';
  if (firstNumb === '' || secondNumb === '') {
    result = 'Введите число';
  } else {
    switch (calc.value) {
      case '+':
        result = +(+firstNumb + +secondNumb).toFixed(10);
        break;
      case '-':
        result = +(+firstNumb - +secondNumb).toFixed(10);
        break;
      case '*':
        result = +(+firstNumb * +secondNumb).toFixed(10);
        break;
      case '/':
        if (+secondNumb === 0) {
          result = 'Ошибка';
        } else {
          result = +(+firstNumb / +secondNumb).toFixed(10);
          break;
        }
    }
  }
  let divResult = document.querySelector('.calc__result');
  let div = document.createElement('div');
  div.innerHTML = result;
  divResult.prepend(div);
  div.addEventListener('click', () => div.remove());
}

btn.addEventListener('click', сalc);

export function сalc(operation, firstNumb, secondNumb) {
  if (firstNumb === '' || secondNumb === '') {
    return 'Введите число';
  } else {
    switch (operation) {
      case '+':
        return +(+firstNumb + +secondNumb).toFixed(10);
      case '-':
        return +(+firstNumb - +secondNumb).toFixed(10);
      case '*':
        return +(+firstNumb * +secondNumb).toFixed(10);
      case '/':
        if (+secondNumb === 0) {
          return 'Ошибка';
        } else {
          return +(+firstNumb / +secondNumb).toFixed(10);
        }
    }
  }
}

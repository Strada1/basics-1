const OPERATIONS = {
  ADD: '+',
  SUB: '-',
  MULTI: '*',
  DELETE: '/',
};
export default function сalc(operation, firstNumb, secondNumb) {
  if (firstNumb === '' || secondNumb === '') {
    return 'Введите число';
  }
  switch (operation) {
    case OPERATIONS.ADD:
      return +(+firstNumb + +secondNumb).toFixed(10);
    case OPERATIONS.SUB:
      return +(+firstNumb - +secondNumb).toFixed(10);
    case OPERATIONS.MULTI:
      return +(+firstNumb * +secondNumb).toFixed(10);
    case OPERATIONS.DELETE:
      if (+secondNumb === 0) {
        return 'Ошибка';
      } else {
        return +(+firstNumb / +secondNumb).toFixed(10);
      }
  }
}

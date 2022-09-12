export function calc(valueOpt, a, b) {
  let res = 0;

  switch (valueOpt) {
    case 'addition':
      res = Number(a) + Number(b); // применяем "Number" приводим к числовому значению, убераем конкатенацию.
      break;

    case 'subtraction':
      res = a - b;
      break;

    case 'multiplication':
      res = a * b;
      break;

    case 'division':
      res = a / b;
      break;
  }
  return res;
}

function Calc(action, a, b) {
  const isNumber = !isNaN(a) && !isNaN(b) ? true : false;
  const operations = {
    add: a + b,
    multi: a * b,
    subtract: a - b,
  };
  if (isNumber) {
    if (operations[action] === undefined) return "Операция не определена";
    return operations[action];
  } else return "Ошибка в аргументе";
}

console.log(Calc("add", 5, 3));

function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function Calc(action = "add", a, b) {
  const isNumber = !isNaN(a) && !isNaN(b) ? true : false;
  const operations = {
    add: add,
    multi: multi,
    subtract: subtract,
  };
  if (isNumber) {
    if (operations[action] === undefined) return "Операция не определена";
    return operations[action];
  } else {
    return "Ошибка в аргументе";
  }
}

console.log(Calc("add", 5, 3));

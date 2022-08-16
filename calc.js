function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}

function Calc(action, a, b) {
  const isNumber = !isNaN(a) && !isNaN(b) ? true : false;
  const operations = {
    add: "add",
    multi: "multi",
    subtract: "subtract",
  };
  if (isNumber) {
    switch (action) {
      case operations.add:
        return add(a, b);
      case operations.multi:
        return multi(a, b);
      case operations.subtract:
        return subtract(a, b);
      default:
        return "Операция не определена";
    }
  } else {
    return "Ошибка в аргументе";
  }
}

console.log(Calc("multi", 5, 3));

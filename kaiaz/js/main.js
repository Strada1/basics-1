const operations = {
  add: "add",
  sub: "sub",
  mult: "mult",
  div: "div",
};

function getNumber() {
  let number;
  while (!checkNumber(number)) {
    number = +prompt("Введите число", 2);
  }

  return number;
}

function checkNumber(number) {
  let isNumber;
  if (number === "" || isNaN(number)) {
    isNumber = false;
  } else {
    isNumber = true;
  }
  return isNumber;
}

function calc(operation, a, b) {
  let result;
  switch (operation) {
    case "add":
      result = add(a, b);
      break;
    case "sub":
      result = sub(a, b);
      break;
    case "mult":
      result = mult(a, b);
      break;
    case "div":
      result = div(a, b);
      break;
  }
  return result;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

console.log(calc(operations.add, getNumber(), getNumber()));
// console.log(calc(operations.sub, getNumber(), getNumber()));
// console.log(calc(operations.mult, getNumber(), getNumber()));
// console.log(calc(operations.div, getNumber(), getNumber()));

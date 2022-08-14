let a = prompt("Введите первое значение");
let b = prompt("Введите второе значение");
let operation = prompt("Введите действия их предоженных: add,multi,subtract");
let result;
  switch (operation) {
    case "add":
      result = +a + +b;
      break;
    case "multi":
      result = +a * +b;
      break;
    case "subtract":
      result = +a - +b;
      break;
    default:
      alert("Unsuported operation");
  }
  let final = operation + "=" + result;
  alert(final);






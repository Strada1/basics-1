let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let action = prompt("Введите действие", "add,multi,subtract");

switch (action) {
  case "add":
    alert(a + b);
    break;

  case "multi":
    alert(a * b);
    break;

  case "subtract":
    alert(a - b);
    break;

  default:
    alert("Вы выбрали неверное действие");
}

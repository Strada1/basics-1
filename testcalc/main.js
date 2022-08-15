// код Bohdan-antnyk
// тестовой пуш №3

// Последующий код можна розкоментировань и проверить если надо!
function calc(operator, a, b) {
  if (operator == "add") {
    return a + b;
  } else if (operator == "multi") {
    return a * b;
  } else if (operator == "subtract") {
    return a - b;
  } else {
    return "Неверно введение дание";
  }
}
let calculator = calc("multi", 30, 3);

console.log(calculator);

// ДЗ по калькулятору написаному на swithc case;

// function calc(operator, a, b) {
//   switch (operator) {
//     case "add":
//       console.log(a + b);
//       break;
//     case "multi":
//       console.log(a * b);
//       break;
//     case "subtract":
//       console.log(a - b);
//       break;
//     default:
//       return "Невірно введені значення чи оператор";
//       break;
//   }
// }
// calc("multi", 2, 5);

/////// код из дз по switch case;

// let browser = "Opera";
// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (browser == "Chrome") {
//   alert("Okay we support there browsers too");
// } else if (browser == "Firefox") {
//   alert("Okay we support there browsers too");
// } else if (browser == "Safari") {
//   alert("Okay we support there browsers too");
// } else if (browser == "Opera") {
//   alert("Okay we support there browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// ДЗ по switch case №2

// const number = +prompt("Введіть число між 0 і 3", "");
// switch (number) {
//   case 0:
//     alert("Ви ддели число 0");
//     break;
//   case 1:
//     alert("Ви ввели число 1");
//     break;
//   case 2 || 3:
//     alert("Ви ввели число 2 чи 3");
//     break;

//   default:
//     break;
// }

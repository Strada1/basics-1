let znakCalc = prompt("Введите действие (Add, Sub, Mult, Div, Exp)");
let aa = +prompt("Введите первое число");
let bb = +prompt("Введите второе число");

function Calc() {
  if (znakCalc == "Add") {
    alert(aa + bb);
  } else if (znakCalc == "Sub") {
    alert(aa - bb);
  } else if (znakCalc == "Mult") {
    alert(aa * bb);
  } else if (znakCalc == "Div") {
    alert(aa / bb);
  } else {
    alert(aa ** bb);
  }
}

Calc();



//Switch

let znak = prompt("Введите действие (Add, Sub, Mult, Div, Exp)");
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

switch (znak) {
  case "Add":
    alert(a + b);
    break;
  case "Sub":
    alert(a - b);
    break;
  case "Mult":
    alert(a * b);
    break;
  case "Div":
    alert(a / b);
    break;
  case "Exp":
    alert(a ** b);
    break;
}

let chislo = +prompt('Введите число', '');

function Exp() {
  alert( chislo ** 2 );
}

Exp();
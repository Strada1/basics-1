let a = +prompt("Введите значение а", "");
let b = +prompt("Введите значение b", "");

let c = prompt('Введите "add", "multi", "subtr"');

switch (c) {
  case "add":
    alert((c = a + b));
    break;
  case "subtr":
    alert((c = a - b));
    break;
  case "multi":
    alert((c = a * b));
    break;
}

let result = (a, b, c);

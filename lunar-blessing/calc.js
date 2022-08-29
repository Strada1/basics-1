const operations = {
    "add": "+",
    "multi": "*",
    "sub": "-",
}

function calc(operation, a, b) {
    switch (operation) {
        case "+":
            return a + b;
        case "*":
            return a * b;
        case "-":
            return a - b;
        default:
            alert('Unsuported operation');
    }
}
let a = Number(prompt('Введите число a'));
let b = Number(prompt('Введите число b'));
let operation = prompt('Введите команду');
let result = calc(operation, a, b);
alert(result);
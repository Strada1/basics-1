let operator = +prompt('Выберите действие: 1 - сложение, 2 - умножение, 3 - вычитание: ');
let a = +prompt('Введите первый операнд: ');
let b = +prompt('Введите второй операнд: ');


function calc(operator, a, b) {
    switch (operator) {
        case 1:
            alert(`Результат: ${a + b}`);
            break;
        case 2:
            alert(`Результат: ${a * b}`);
            break;
        case 3:
            alert(`Результат: ${a - b}`);
    }
}

calc(operator, a, b)
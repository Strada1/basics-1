function calc(operator, a, b) {
    switch (operator) {
        case 'add':
            return(a + b);
            break;
        case 'multi':
            return(a * b);
            break;
        case 'subtract':
            return(a - b);
            break;
        default:
            alert("Такого оператора нет!");
    }
}

let a = +prompt("Введите первое число");
let operator = prompt("Введите оператор(add, multi, subtract)");
let b = +prompt("Введите второе число");

let result = calc(operator, a, b);

alert(result);
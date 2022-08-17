const operations = {
    add: '+',
    multi: '*',
    subtract: '-'
}

function calc(key, a, b) {
    switch (key) {
        case operations.add:
            return(a + b);
            break;
        case operations.multi:
            return(a * b);
            break;
        case operations.subtract:
            return(a - b);
            break;
        default:
            alert("Такого оператора нет!");
    }
}

a = +prompt("Введите первое число");
key = prompt("Введите оператор(+, *, -)");
b = +prompt("Введите второе число");

let result = calc(key, a, b);

alert(result);
const operations = {
    add: '+',
    multi: '*',
    sub: '-',
};

function calc(first, second, operand) {
    switch(operand) {
        case "+":
            return(first + second);
        case "*":
            return(first * second);
        case "-":
            return(first - second);
        default:
            return("что-то я вас не понимаю");
    }
};

let first = prompt("Введите первое число", "0");
let second = prompt("Введите второе число", 0);
let operand = prompt("Введите +(add), -(sub), *(multi)", "add");

alert(calc(+first, +second, operations[operand]));
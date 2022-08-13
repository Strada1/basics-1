function calc(first, second, operand) {
    switch(operand) {
        case "add":
            return +first + +second;
        case "multi":
            return +first * +second;
        case "subtract":
            return +first - +second;
    }
}
let first = prompt("Введиде первое число", );
let second = prompt("Введиде второе число", );
let operand = prompt("Введиде действие между ними: 'add', 'multi', 'subtract'", );
alert(calc(first, second, operand));
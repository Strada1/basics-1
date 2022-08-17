const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
    divide: '/',
    power: '**'
}

function checkNumbers(a, b) {
    return (typeof (a) != 'number' || typeof (b) != 'number');
}

function calc(action, a, b) {
    if (checkNumbers(a, b))
        return "Issue with input numbers";
    let operation = operations[action];
    switch (operation) {
        case '+':
            return +a + +b;
        case '*':
            return a * b;
        case '-':
            return a - b;
        case '/':
            if (b !== 0)
                return a / b;
            else
                return "Couldn't divide by zero";
        case '**':
            return a ** b;
        default:
            return "Issue with input operator";
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('power', 3, 4));
console.log(calc('divide', 3, 4));
console.log(calc('divide', 3, 0));
console.log(calc('divide', -3, -10));

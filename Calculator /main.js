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
    switch (action) {
        case operations.add:
            return +a + +b;
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
        case operations.divide:
            if (b !== 0)
                return a / b;
            else
                return "Couldn't divide by zero";
        case operations.power:
            return a ** b;
        default:
            return "Issue with input operator";
    }
}

console.log(calc(operations.add, 1, 2));
console.log(calc(operations.multi, 1, 2));
console.log(calc(operations.subtract, 3, 2));
console.log(calc(operations.power, 3, 4));
console.log(calc(operations.divide, 3, 4));
console.log(calc(operations.divide, 3, 0));
console.log(calc(operations.divide, -3, -10));

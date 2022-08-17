const operations = { add: '+', multi: '*', subtract:'-', divide: '/', power:'**'  }

function calc(action, a, b) {
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
            break;
        case '**':
            return a ** b;
        default:
            return;
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('power', 3, 4));


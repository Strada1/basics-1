const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
}
function calc(action, a, b) {
    switch (action) {
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
    };
}
console.log('value1: ' + calc('+', 1, 2))
console.log('value2: ' + calc('*', 1, 2))
console.log('value3: ' + calc('-', 3, 2))
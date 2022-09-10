export function calc(operation, a, b) {
    const operations = {
        add: '+',
        multi: '*',
        subtract: '-',
        divide: '/'
    }

    switch (operation) {
        case operations.add:
            return Number(a) + Number(b);
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
        case operations.divide:
            return a / b;
        default:
            return 'Error';
    }
}
export function calc(operation, num1, num2) {
    const operations = { add: '+', multi: '*', subtract: '-', divide: '/' };
    let result;
    switch (operation) {
        case operations.add:
            result = num1 + num2;
            break;
        case operations.multi:
            result = num1 * num2;
            break;
        case operations.subtract:
            result = num1 - num2;
            break;
        case operations.divide:
            result = num1 / num2;
            break;
        default:
            result = undefined;
    };
    return result;
}

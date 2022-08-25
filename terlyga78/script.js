function calc(operation, num1, num2) {
    const operations = { add: '+', multi: '*', subtract: '-' };
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
        default:
            result = undefined;
    };
    return result;
}

document.writeln(`1 + 2 = ${calc('+', 1, 2)} <br>`);
document.writeln(`1 * 2 = ${calc('*', 1, 2)} <br>`);
document.writeln(`3 - 2 = ${calc('-', 3, 2)} <br>`);

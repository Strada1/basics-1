function getNumbers (a, b, operator) {
    
    let isNumber = ((typeof (a) === "number") && (typeof (b) === "number"));
    if (isNumber === false) {
        return console.log('not a number');
    } else {
        return calc (a, b, operator)
    }
}

function calc (a, b, operator) {
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break
        default:
            result = 'operator is not defined...';
    }

    return console.log (result);
}

function calc(action, a, b) {
    let operations = {
        add: a + b,
        multi: a * b,
        subtract: a - b,
    }
    return operations[action];
}
console.log( 'value1: ' + calc('add', 1, 2))
console.log( 'value2: ' + calc('multi', 1, 2))
console.log( 'value3: ' + calc('subtract', 3, 2))
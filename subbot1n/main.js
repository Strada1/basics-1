function calc(operation,a,b) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
        switch(operation) {
            case 'add': return (a + b);
            case 'multi': return (a * b);
            case 'subbtract': return (a - b);
            default: return('Unknown operation');
        }
    } else {
        return ('a or b is not a number');
        }
}

console.log(calc ('multi', 2, 10));
console.log(calc ('subbtract', 5, 3));
console.log( calc ('new', 5, 5));
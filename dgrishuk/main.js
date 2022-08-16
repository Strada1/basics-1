let operations = {
    add: '+',
    multi: '*',
    sub: '-',
}

function сalc(operator, a, b) {
    if (a === Number(a) && b === Number(b)) {
        switch (operator) {
            case operations.add:
                return a + b
            case operations.multi:
                return a * b
            case operations.sub:
                return a - b
        }
    } else {
        return 'Error in operands'
    }
}

console.log(сalc(operations.add, 1, 2));
console.log(сalc(operations.multi, 1, 2));
console.log(сalc(operations.sub, 3, 2));
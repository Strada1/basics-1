let operations = {
    add: "+",
    multi: "*",
    subtract: "-",
};

function calc(a, b, i) {
    switch (i) {
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
    }
}

console.log(calc(5, 10, operations.add));
console.log(calc(1, 2, operations.multi));
console.log(calc(3, 2, operations.subtract));

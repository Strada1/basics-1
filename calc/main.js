function calc(test, a, b) {
    switch (test) {
        case operations.add :
            return a + b
        case operations.multi :
            return a * b
        case operations.subtract :
            return a - b
    }

    }
const operations = {
    add: "+",
    multi: "*",
    subtract: "-"
}

console.log(calc(operations.add, 5, 5))
console.log(calc(operations.subtract, 6, 3))
console.log(calc(operations.multi, 10, 3))

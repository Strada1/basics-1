const operations = {

        add: '+',
        sub: '-',
        multi: '*',
    };

function calc(action, a, b) {

    switch (action) {
        case operations.add:
            return a + b;
        case operations.sub:
            return a - b;
        case operations.multi:
            return a * b;

    }

}
console.log(calc(operations.add, 5, 7));
console.log(calc(operations.sub,5, 7));
console.log(calc(operations.multi, 5, 7));

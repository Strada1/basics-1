function calc( operator, num1, num2 ) {
    const operations = {
        add: '+',
        multi: '*',
        subtract: '-'
    }
    
    switch (operator) {
        case operations.add:
            return console.log( num1 + num2);
        case operations.multi:
            return console.log( num1 * num2);
        case operations.subtract:
            return console.log( num1 - num2);
        default:
            console.log("Error");
    }
}

calc( '+', 1, 2 );
calc( '*', 1, 2);
calc( '-', 3,2);
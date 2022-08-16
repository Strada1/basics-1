function calc( operator, num1, num2 ) {
    const operations = {
        add: '+',
        multi: '*',
        subtract: '-'
    }
    
    if (operator == 'add'){
        return console.log( num1 + num2);
    } else if ( operator == 'multi'){
        return console.log( num1 * num2);
    } else if ( operator == 'subtract'){
        return console.log( num1 - num2)
    }
}

calc( '+', 1, 2 );
calc( '*', 1, 2);
calc( '-', 3,2);
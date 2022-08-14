function calc( operator, a , b ) {
    switch(operator) {
        case 'add' :
          return  a + b;
        
        case 'substract' :
            return  a - b;
        
        case 'divide' :
            return parseInt(a / b);
        
        case 'multiple' :
            return a * b;

        default: return console.log('Choose the operation');
    }
}

console.log(calc('add', 5, 3));
console.log(calc('substract', 200, 245));
console.log(calc('divide', 50, 4));
console.log(calc('multiple', 5, 10))

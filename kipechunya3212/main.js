let a = +prompt('Введите переменную a');
let b = +prompt('Введите переменную b');
let mod =  prompt('Введите add,multi,subtract если хотите сложить, умножить или вычесть соответственно');

function calc( mod, a, b ) {
    switch (mod) {
        case 'add' :
            return( a + b ); 
        case 'multi' :
            return( a * b); 
        case 'subtract' :
            return(a - b);
        default:
            return('error');
    }
    
      
}

alert (calc( mod, a, b ))
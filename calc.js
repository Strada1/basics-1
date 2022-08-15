"Use Strict";
function calc(operator,a,b){
    
    switch (operator) {
    case '+' : 
    return a+b;
    break;
    case '-' :
    return a-b;
    break;
    case '*' : 
    return a*b;
    break;
    
}
}
 console.log(calc('+', 11, 11 ));
 console.log(calc('-', 11, 11 ));
 console.log(calc('*', 11, 11 ));
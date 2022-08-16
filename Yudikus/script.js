//////////Ordinary calc
/*
function calc(operator,a ,b){
    if(operator === "add"){
        return a+b;
    } else if(operator === "multi"){
        return a*b;
    } else if(operator === "subtract"){
        return a-b;
    } else{
        console.log("Unknown operation");
    }
}
console.log(calc('add', 27, 33));
console.log(calc('multi', 5,5));
console.log(calc('subtract', 99, 97));
*/

/////////// Switch calc
function calc(operator, a, b){
    switch(operator){
        case ('add'):
            return a+b;
            break;
        case ('multi'):
            return a*b;
            break;
        case ('subtract'):
            return a-b;
            break;
        default:
            console.log('Unknown operation')        
    }
}
console.log(calc("add", 43, 95));
console.log(calc("multi", 43, 95));
console.log(calc("subtract", 43, 95));
console.log(calc(4));
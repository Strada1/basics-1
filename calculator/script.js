function calc (action,a,b) {

    if(action === 'add' || action === '+') {
    return a + b;
    } else if ( action === 'multi' || action === '*') {
    return a * b;
    } else if ( action === 'subtract' || action === '-') {
    return a - b;
    } else {
    return "change your operator"
    }
    }
    
    let action = prompt('Type the operator');
    let a = Number(prompt('Type the first number'));
    let b = Number(prompt('Type the the second number'));
    
    let result = calc(action,a,b);
    
    alert(result);

//switch

function calc (action,a,b) {

    switch (action) {
        case "add":
        case "+":
            return a + b;
            break;

        case "multi":
        case "*":
            return a * b;
            break;

        case "subtract":
        case "-":
            return a - b;
            break;
        default:
            return "change your operator";
    }
}

    let action = prompt('Type the operator');
    let a = Number(prompt('Type the first number'));
    let b = Number(prompt('Type the the second number'));
    
    let result = calc(action,a,b);
    
    alert(result);
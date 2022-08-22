let a;
let b;
let operator;

startOver();

function startOver(){
    a = prompt('enter a:');
    checkA();
}

function checkA(){
    if(a === null){

    }else if(isNaN(a/0 )){
        a = prompt('syntax error enter a:');
        checkA();
    }else{
        b = prompt('enter b:');
        checkB();
    }
}

function checkB(){
    if (b === null){

    }else if(isNaN( b/0)){
        b = prompt('syntax error enter b:');
        checkB();
    }else{
        operator = prompt('enter operator:', '+, *, -');
        calcInBrowser(operator,a,b);
    }
}

function calcInBrowser(operator, a, b) {

    switch (operator) {
        case null:
            break;
        case '+': alert(`add: ${+a + +b}`) ;
            startOver();
            break;
        case '*': alert(`multi: ${a * b}`) ;
            startOver();
            break;
        case '-': alert(`subtract: ${a - b}`);
            startOver();
            break;
        default: operator = prompt('syntax error enter operator ', '+, *, -' );
            calcInBrowser(operator, a, b);
            break;
    }
}
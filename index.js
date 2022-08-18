function swapPlace(obj){
    return (Object.fromEntries(Object.entries(obj).map(a => a.reverse())));
}

function calculator(firstNum, secondNum, operation){
    let operations = { 
        add: "+", 
        sub: "-", 
        multi: "*", 
        div: "/"
    };

    if(operation.length != 1){
        operations = swapPlace(operations);
    }

    if(typeof firstNum != 'number' || typeof secondNum != 'number'){
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
    }

    if(isNaN(firstNum) || isNaN(secondNum)){
        return ('Введено не число!');
    }

    switch(operation){ 
        case operations['add'] || operations['+']:
            return (firstNum + secondNum);

        case operations['sub'] || operations['-']:
            return (firstNum - secondNum);

        case operations['multi'] || operations['*']:
            return (firstNum * secondNum);

        case operations['div'] || operations['/']:
            return (firstNum / secondNum);

        default: 
            return ('Неизвестный оператор'); 
    } 
} 

console.log(calculator(5, '7', '+'));
console.log(calculator(5, '7', 'multi'));
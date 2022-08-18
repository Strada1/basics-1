function calculator(firstNum, secondNum, operation){ 
    let operations = { 
        add: "+", 
        sub: "-", 
        multi: "*", 
        div: "/"
    };

    firstNum = Number(firstNum); secondNum = Number(secondNum); 

    switch(operation){ 
        case operations['add']: 
            return (firstNum + secondNum); 

        case operations['sub']: 
            return (firstNum - secondNum); 

        case operations['multi']: 
            return (firstNum * secondNum); 

        case operations['div']: 
            return (firstNum / secondNum); 

        default: 
            return ('Неизвестный оператор'); 
    } 

} 

console.log(calculator(5, '7', "+"));
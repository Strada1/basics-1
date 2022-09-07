
resbut.addEventListener ('click',function(){
    let firstNumber = Number(first_value.value);
    let secondNumber = Number(second_value.value);
    let mathOper = math_operations.value;
    let result =document.querySelector(".result");
    
    if (firstNumber != "" && secondNumber !=""){
        result.textContent = calc(firstNumber,secondNumber,mathOper);
    }
    else{
        alert("Введите число")
    }
});

function calc(firstNumber,secondNumber,mathOper){
    switch(mathOper) {
        case 'plus':
            return firstNumber+secondNumber;
            break;
        case 'minus':
           return firstNumber-secondNumber;
            break;
        case 'mult':
            return firstNumber*secondNumber;
            break;
        case 'division':
           
            if (secondNumber === 0){
                alert('На ноль делить нельзя!');
            }
            else{
                return firstNumber/secondNumber;
            }
            break;
    }
}
let buttonEqual = document.querySelector('.equal');
let result = document.querySelector('.result');
let operator = document.querySelector('.operator');
let op1 = document.querySelector('.operand1');
let op2 = document.querySelector('.operand2');
let alert = document.querySelector('.alert');

/*
let newDiv = document.createElement('div');
newDiv.classList.add('calculationResult');
result.append(div);
*/
buttonEqual.addEventListener("click", calc);



function calc() {
    let number1 = +op1.value;
    let number2 = +op2.value;
    let hasError = false;
    
    
    alert.textContent = '';
    if (typeof number1 !== 'number' || isNaN(number1)) {
        alert.textContent = 'Неверный тип введенных данных, нужно ввести число в 1 поле. ';
        hasError = true;
    } 
    if (typeof number2 !== 'number' || isNaN(number2)) {
        alert.textContent = alert.textContent+'Неверный тип введенных данных, нужно ввести число во 2 поле.';
        hasError = true;
    }
    if (hasError) {
        return;
    }
    let newDiv = document.createElement('div');
    let action = operator.value;
    switch(action){
    case 'add':
    //result.insertAdjacentElement('beforeend', newDiv);
    result.append(newDiv);
    newDiv.classList.add('calcResult');
    newDiv.innerHTML = +number1 + +number2;
    newDiv.onclick = () => newDiv.remove();
    break;
    case 'subtract':
        result.append(newDiv);
        newDiv.classList.add('calcResult');
        newDiv.innerHTML = number1 - number2;
        newDiv.onclick = () => newDiv.remove();
    break;
    case 'multi':
        result.append(newDiv);
        newDiv.classList.add('calcResult');
        newDiv.innerHTML = number1 * number2;
        newDiv.onclick = () => newDiv.remove();
    break;
    case 'divide':
        result.append(newDiv);
        newDiv.classList.add('calcResult');
        newDiv.innerHTML = number1 / number2;
        newDiv.onclick = () => newDiv.remove();
    break;
}

};



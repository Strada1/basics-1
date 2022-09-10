let oldResults = [], id = 1;

const calc = function (){
    let firstNum = document.querySelector('.calc__firstNum').value,
        secondNum = document.querySelector('.calc__secondNum').value,
        operator = document.querySelector('.calc__operator').value,
        result = document.querySelector('.calc__result');

    let currentResult;

    if(firstNum === "" || secondNum === ""){
        return alert('Не все поля заполнены!');
    }

    switch(operator){
        case "+":
            currentResult = +firstNum + +secondNum;
            break;
        case "-":
            currentResult = firstNum - secondNum;
            break;
        case "*":
            currentResult = firstNum * secondNum;
            break;
        case "/":
            currentResult = firstNum / secondNum;
            break;
    }

    result.textContent = currentResult;

    prevOperation = {
        id: id++,
        leftOperand: firstNum,
        rightOperand: secondNum,
        operator: operator,
        equal: currentResult
    };

    oldResults.push(prevOperation);
    showPrevious();
    deleteElement();
}

document.querySelector('.calc__equal').addEventListener('click', calc);

const showPrevious = function(){
    let placeInput = document.querySelector('.calc__results');
    if(oldResults.length > 1){
        let last = oldResults[oldResults.length - 2];
        placeInput.insertAdjacentHTML('afterbegin', `<div class="calc__prev-result"><span>${last.id}. ${last.leftOperand} ${last.operator} ${last.rightOperand} = ${last.equal}</span></div>`);
        console.log(last);
    }
}

const deleteElement = function(){
    document.querySelectorAll('.calc__prev-result').forEach(element => {
        element.addEventListener('click', () => {
            element.remove();
        })
    });
}
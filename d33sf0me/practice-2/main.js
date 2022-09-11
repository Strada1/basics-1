import rememberAnswer from './rememberAnswer';
let button = document.getElementById('button');
let result = document.querySelector(".result");
button.addEventListener('click', calc);

function calc() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let operation = document.getElementById('operation').value;
    let answer = 0;
    if (a === '' || b === '') {
        alert('Please enter numbers correctly!');
    } else {
        switch (operation) {
            case "+":
                answer = (+a + +b);
                rememberAnswer(answer);
                return result.innerHTML = Number(answer.toFixed(10));
            case "-":
                answer = (+a - +b);
                rememberAnswer(answer);
                return result.innerHTML = Number(answer.toFixed(10));
            case "*":
                answer = (+a * +b);
                rememberAnswer(answer);
                return result.innerHTML = Number(answer.toFixed(10));
            case "/":
                if (b != 0) {
                    answer = (+a / +b);
                    rememberAnswer(answer);
                    return result.innerHTML = Number(answer.toFixed(10));
                } else alert('Error. Can`t divide by zero.');
        };
    };
};
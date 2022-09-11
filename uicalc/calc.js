let button = document.getElementById('button');
let result = document.querySelector(".result");
button.addEventListener('click', calc);


function calc() {
    let firstValue = document.getElementById('value1').value;
    let secondValue = document.getElementById('value2').value;
    let operation = document.getElementById('operation').value;
    let answer = 0;

    if (firstValue === '' || secondValue === '') {
        alert('send a correct number');
    } else {
        switch (operation) {
            case '+':
                answer = (+firstValue + +secondValue);
                return result.innerHTML = Number(answer.toFixed(10));

            case '-':
                answer = (+firstValue - +secondValue);
                return result.innerHTML = Number(answer.toFixed(10));

            case '*':
                answer = (+firstValue * +secondValue);
                return result.innerHTML = Number(answer.toFixed(10));
            case '/':
                if (secondValue != 0) {
                    answer = (+firstValue / +secondValue);
                    return result.innerHTML = Number(answer.toFixed(10));

                } else alert('Error')
        };

    };
}
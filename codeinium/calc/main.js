
function calc() {
    let select = document.getElementById("select");
    let operation = select.value;
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let result;
    switch (operation) {
        case "+": 
            result = a + b;
            if (!isNaN(result)){
                answer.textContent = +result.toFixed(10);
                break;
            } else {
                answer.textContent = 'ошибка при сложении'
                break;
            }
        case "-": 
            result = a - b;
            if (!isNaN(result)){
                answer.textContent = +result.toFixed(10);
                break;
            } else {
                answer.textContent = 'ошибка при вычитании'
                break;
            }
        case "*":
            result = a * b;
            if (!isNaN(result)) {
                answer.textContent = +result.toFixed(10);
                break;
            } else {
                answer.textContent = 'ошибка при умножении'
                break;
            }
        case "/":
            result = (a / b);
            if (!isFinite(result)) {
                answer.textContent = 'ошибка при делении';
                break;
            } else {
                result = a / b;
                answer.textContent = +result.toFixed(10);
                break;
            }
    } 
}

button.addEventListener('click', calc);
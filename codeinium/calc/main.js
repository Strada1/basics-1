
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
                answer.textContent = result;
                break;
            } else {
                answer.textContent = 'ошибка при сложении'
                break;
            }
        case "-": 
            result = a - b;
            if (!isNaN(result)){
                answer.textContent = result;
                break;
            } else {
                answer.textContent = 'ошибка при вычитании'
                break;
            }
        case "*":
            result = a * b;
            if (!isNaN(result)) {
                answer.textContent = result;
                break;
            } else {
                answer.textContent = 'ошибка при умножении'
                break;
            }
        case "/":
            result = (a / b).toFixed(3);
            if (!isFinite(result)) {
                answer.textContent = 'ошибка при делении';
                break;
            } else {
                result = (a / b).toFixed(3);
                answer.textContent = result;
                break;
            }
    } 
}

button.addEventListener('click', calc);

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
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            } else {
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">Ошибка при сложении</div>`);
                break;
            }
        case "-": 
            result = a - b;
            if (!isNaN(result)){
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            } else {
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">Ошибка при вычитании</div>`);
                break;
            }
        case "*":
            result = a * b;
            if (!isNaN(result)) {
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            } else {
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">Ошибка при умножении</div>`);
                break;
            }
        case "/":
            result = a / b;
            if (!isFinite(result)) {
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">Ошибка при делении</div>`);
                break;
            } else {
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            }
    } 
}

button.addEventListener('click', calc);

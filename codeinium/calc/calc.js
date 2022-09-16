export function calc() {
    try {
        let select = document.getElementById("select");
        let operation = select.value;
        let a = +document.getElementById("a").value;
        let b = +document.getElementById("b").value;
        let result;
        if (a !== +a || b !== +b) {
            throw new Error('Введите цифры')
        }
        switch (operation) {
            case "+": 
                result = a + b;
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            case "-": 
                result = a - b;
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            case "*":
                result = a * b;
                answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                break;
            case "/":
                try {
                    result = a / b;
                    if (b === 0) {
                        throw new Error('Нельзя делить на ноль!')
                    };
                    answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${+result.toFixed(10)}</div>`);
                    break;
                } catch(err) {
                    answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${err.message}</div>`);
                }
        } 
    } catch(err) {
        answers.insertAdjacentHTML('afterbegin', `<div onclick="this.remove()" class="answer">${err.message}</div>`);
    }
    

    

    
}



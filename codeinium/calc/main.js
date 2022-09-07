
function calc() {
    let select = document.getElementById("select");
    let operation = select.value;
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let result;
    switch (operation) {
        case "+": 
            result = a + b;
            answer.textContent = result;
            break;
        case "-": 
            result = a - b;
            answer.textContent = result;
            break
        case "*":
            result = a * b;
            answer.textContent = result;
            break;
        case "/":
            result = (a / b).toFixed(3);
            answer.textContent = result;
            break;
        default: 
            console.log('error');
    } 
}


button.addEventListener('click', calc);
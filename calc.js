let button = document.getElementById("button")
let result = document.getElementById("result")
let list = document.getElementById("list")

button.addEventListener('click', calc)


function calc() {
    const x = getResult();
    
    result.innerHTML = x;

    let divItem = document.createElement('div');
    divItem.innerHTML = x;
    divItem.addEventListener('click', function(){
        divItem.remove()
    })
    list.prepend(divItem);
}

function getResult() {
    const a = +document.getElementById('a').value;
    const b = +document.getElementById('b').value;
    const operation = document.getElementById('operation').value;

    switch (operation) {
        case "sum":
            return a + b;
        case "multiply":
            return a * b;
        case "subtract":
            return a - b;
        case "division":
            if (b === 0) {
                alert('0 in divisor')
            } else {
                return a / b;
            }
        default:
            alert('Unsuported operation');
    }
}

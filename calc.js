
function calc() {
    let a = +document.getElementById("firstNumber").value;
    let b = +document.getElementById("secondNumber").value;
    let operate = String(document.getElementById('choiceOperate').selectedIndex);
    switch (operate) {
        case '0':
            return a + b;
        case '1':
            return a * b;
        case '2':
            return a - b;
        case '3':
            return a / b;
    }  
}

function conclusion() {
    if(outputWindow.offsetHeight >= 462) {
        deleteResult();
    }
    outputWindow.innerHTML += `<div id="result"> ${calc()}</div>`;
};

function showResult() {
    button.addEventListener("click", conclusion);
}
function deleteResult() {
    outputWindow.innerHTML = " ";
}
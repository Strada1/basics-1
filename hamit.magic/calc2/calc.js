let expression = '';

function changeInnerHTML(value) {
    let res = document.getElementById('result');
    if (res.innerHTML === `0` || res.innerHTML === `-` || res.innerHTML === `+` || res.innerHTML === `*`) {
        if (res.innerHTML === '0') expression = value;
        else expression += value;

        res.innerHTML = value;
        return res;
    }
    else {
        expression += value;
        res.innerHTML += value;
        return res;
    }
}

function reset() {
    let res = document.getElementById('result');
    res.innerHTML = '0';
    expression = '';
}

function handleDot() {
    alert(`Простите, пока не работает :(`)
}
function plus() {
    let res = document.getElementById('result');
    res.innerHTML = '+';
    expression += '+';
}
function minus() {
    let res = document.getElementById('result');
    res.innerHTML = '-';
    expression += '-';
}
function multy() {
    let res = document.getElementById('result');
    res.innerHTML = '*';
    expression += '*';
}
function solve() {
    let res = document.getElementById('result');
    // debugger;
    if (res.innerHTML == undefined) res.innerHTML = 0;
    res.innerHTML = eval(expression);
    expression = eval(expression);
}
const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
}
function calc() {
    let a = +document.querySelectorAll('.input')[0].value;
    let b = +document.querySelectorAll('.input')[1].value;
    let action = document.getElementById('action').value;
    switch (action) {
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
    };
}

let btn = document.getElementById('btn');
let result = document.querySelector('.result');
btn.addEventListener('click', () => result.innerHTML = +calc().toFixed(10));


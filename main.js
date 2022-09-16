const operations = {
    add: '+',
    multi: '*',
    subtract: '-',
}
function calc() {
    try {
        let a = +document.querySelectorAll('.input')[0].value;
        let b = +document.querySelectorAll('.input')[1].value;
        if (isNaN(a) || isNaN(b)) {
            throw new Error('вы ввели не число')
        }
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
    catch (err) {
        alert(err.name);
        alert(err.message);
    }
}

let btn = document.getElementById('btn');
let result = document.querySelector('.result');
btn.addEventListener('click', () => result.innerHTML = +calc().toFixed(10));


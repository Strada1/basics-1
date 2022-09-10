document.getElementById('equal').addEventListener('click', calc);

function calc() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let operator = document.getElementById('select').value;
    let result = document.querySelector('.result');

    if (isNaN(a) || isNaN(b) || a == ''|| b == '') {
        container.classList.add('error');
        setTimeout(() => container.classList.remove('error'), 300)
    } else {
        switch(operator) {
            case 'add':
                result.innerHTML = Number((a + b).toFixed(4));
                break;
            case 'subtract':
                result.innerHTML = Number((a - b).toFixed(4));
                break;
            case 'multi':
                result.innerHTML = Number((a * b).toFixed(4));
                break;
            case 'divide':
                result.innerHTML = Number((a / b).toFixed(4));
                break;
                default:
                    alert('Houston, we have a problem');
                }
        let div2 = result.cloneNode(true);
        saveresult.append(div2);
        div2.setAttribute('onclick', 'this.remove()');
    }
}

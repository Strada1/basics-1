

const arg1 = document.querySelector('#arg1')
const arg2 = document.querySelector('#arg2')
const operation = document.querySelector('select')
const equal = document.querySelector('.equal')
const result = document.querySelector('.result')


equal.addEventListener('click', () => {



    switch (operation.value) {
        case '+':
            return result.innerHTML = Number(arg1.value) + Number(arg2.value);

        case '*':
            return result.innerHTML = Number(arg1.value) * Number(arg2.value);

        case '-':
            return result.innerHTML = Number(arg1.value) - Number(arg2.value);

        case '/':
            if (!arg2) {
                alert('Invalid argument')
                throw new Error('Invalid argument');
            } else {
                return result.innerHTML = (arg1 / arg2).toFixed(2);
            }

        default:
            alert(`Unknown operation: ${operation.value}`)
            throw new Error(`Unknown operation: ${operation.value}`);
    }
})

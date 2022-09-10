
import {a, b, operation, result} from "./main.js";
import {addDiv} from "./div.js";


export function calc() {

    if (a.value !== '' && b.value !== '') {

        switch (operation.value) {
            case '+':
                result.textContent = `${Number((Number(a.value) + Number(b.value)).toFixed(3))}`;
                break
            case '*':
                result.textContent = `${Number((a.value * b.value).toFixed(3))}`;
                break
            case '-':
                result.textContent = `${Number((a.value - b.value).toFixed(3))}`;
                break
            case '/':
                result.textContent = `${Number((a.value / b.value).toFixed(3))}`;
        }

    addDiv()
        
    }

    if (a.value === '') {
        a.placeholder = 'enter number'
    }
    if (b.value === '') {
        b.placeholder = 'enter number'
    }
    if (a.value === '' && b.value === '') {
        a.placeholder = 'enter number'
        b.placeholder = 'enter number'

    }
}

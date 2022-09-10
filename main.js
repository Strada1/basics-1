let equalsF = document.getElementById('equalsField');
let totalRes = document.getElementById('totalField');


equalsF.addEventListener('click', calcElementary);

function calcElementary () {

let a = document.getElementById('numField1').value;
let b = document.getElementById('numField2').value;
let operator = document.getElementById('sumField').value;
let res;

    switch (operator) {
        case '+':
        res = (+a + +b);
        totalField.innerHTML = +res;
        break;
        
        case '-':
        res = Number(a-b);
        totalField.innerHTML = res;
        break;
        
        case '*':
        res = Number(a*b);
        totalField.innerHTML = res;
        break;
        } 
}

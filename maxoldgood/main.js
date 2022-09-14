const ELEMENTS = {
    OPERATION: document.getElementById('select'),
    FIRST_NUMBER: (document.querySelector('.number-1')),
    SECOND_NUMBER: (document.querySelector('.number-2')),
    EQUAL_SIGN: document.getElementById('equalsign'),
    RESULT: document.querySelector('.result'),
}
const OPERATIONS = {
    ADD: '+',
    MULTI: '*',
    SUB: '-',
    DIVIDE: '/',
};

function calc (operation, a, b) {   

    switch(operation) {
     case OPERATIONS.ADD:
         return a+b;
         break;
     case OPERATIONS.MULTI:
         return a*b;
         break;
     case OPERATIONS.SUB:
         return a-b;
         break;
    case OPERATIONS.DIVIDE:
         return a/b;
         break;
 }
 };
 
 ELEMENTS.EQUAL_SIGN.onclick = function (){

    ELEMENTS.RESULT.value = calc (ELEMENTS.OPERATION.value, Number(ELEMENTS.FIRST_NUMBER.value), Number(ELEMENTS.SECOND_NUMBER.value)); 

    let div = document.createElement('div');
    div.innerHTML = ELEMENTS.RESULT.value;
    div.style.cssText = `margin-left:401px;`;

    ELEMENTS.RESULT.after(div);
}
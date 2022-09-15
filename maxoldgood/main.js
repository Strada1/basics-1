const ELEMENTS = {
    OPERATION: document.getElementById('select'),
    FIRST_NUMBER: (document.querySelector('.number-1')),
    SECOND_NUMBER: (document.querySelector('.number-2')),
    EQUAL_SIGN: document.getElementById('equalsign'),
    RESULT: document.querySelector('.result'),
    DARK: document.querySelector('.dark'),
    CALC_BODY: document.querySelector('.calc-body'),
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
    
    div.setAttribute("onclick", "this.remove()");
}


ELEMENTS.DARK.onclick = function theme () {
    ELEMENTS.CALC_BODY.style.backgroundColor="#383838";
    ELEMENTS.DARK.style.backgroundColor="white";
    ELEMENTS.DARK.value="светлая тема";
    ELEMENTS.DARK.className="white";
    document.querySelector(".white").onclick = function () {
        ELEMENTS.CALC_BODY.style.backgroundColor="white";
        ELEMENTS.DARK.style.backgroundColor="black";
        ELEMENTS.DARK.value="тёмная тема";
        ELEMENTS.DARK.className="dark";
    }
}

import {oldResults,id} from './main.js';

let showPrevious = function(){
    let placeInput = document.querySelector('.calc__results');
    if(oldResults.length > 1){
        let last = oldResults[oldResults.length - 2];
        placeInput.insertAdjacentHTML('afterbegin', `<div class="calc__prev-result"><span>${last.id}) ${last.leftOperand} ${last.operator} ${last.rightOperand} = ${last.equal}</span></div>`);
        console.log(last);
    }
}

let deleteElement = function(){
    document.querySelectorAll('.calc__prev-result').forEach(element => {
        element.addEventListener('click', () => {
            element.remove();
        })
    });
}

export{oldResults, id, showPrevious, deleteElement};
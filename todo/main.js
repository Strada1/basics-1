const ELEMENS = { 
    inputHigh : document.querySelector('.todo__input__hihg'),
    inputLow : document.querySelector('.todo__input__low'),
    formHigh : document.querySelector('#inp__form__high'),
    formLow : document.querySelector('#inp__form__low'),
    divListHigh : document.querySelector('.todo__list__high'),
    divListLow : document.querySelector('.todo__list__low')
}

function addTask(){
    let newInputHigh = ELEMENS.inputHigh.value
    let newInputLow = ELEMENS.inputLow.value
    if (newInputHigh != ''){
        ELEMENS.divListHigh.insertAdjacentHTML(`afterbegin`, `
        <div class="todo__list__high">
            <label class="todo__task">
                <input type="checkbox">
                <div class="task__text">
                    ${newInputHigh}
                </div>
            </label>
        </div>
        `)
    }
    if (newInputLow != ''){
    ELEMENS.divListLow.insertAdjacentHTML(`afterbegin`,`
        <div class="todo__list__low">
            <label class="todo__task">
                <input type="checkbox">
                <div class="task__text">
                    ${newInputLow}
                </div>
            </label>
        </div>
        `)
    }
    

}

ELEMENS.formHigh.addEventListener('submit', addTask)
ELEMENS.formLow.addEventListener('submit', addTask)






let formHigh = document.querySelector('.todo__add-high');
let high = document.querySelector('.high');
let newHighTask = document.querySelector('#input__high');
formHigh.addEventListener('submit', function (event) {
    event.preventDefault();
    high.insertAdjacentHTML('beforeend', `
    <div class="todo__task">
    <div class="todo__task-content">
    <div class=""><label class="todo__task-text">
            <input type="checkbox" id="high__task1" class="todo__task-checkbox">
            <span class="todo__task-name">${newHighTask.value}</span>
            </label></div>
            
            <button class="todo__task-btn">
            <img src="img/delete-btn.svg" alt="dlete task">
            </button>
            </div>
            </div>
            `)
})
let formLow = document.querySelector('.todo__add-low');
let low = document.querySelector('.low');
let newLowTask = document.querySelector('#input__low');
formLow.addEventListener('submit', function (event) {
    event.preventDefault();
    low.insertAdjacentHTML('beforeend', `
            <div class="todo__task">
            <div class="todo__task-content">
        <div class=""><label class="todo__task-text">
            <input type="checkbox" id="high__task1" class="todo__task-checkbox">
            <span class="todo__task-name">${newLowTask.value}</span>
        </label></div>
        
        <button class="todo__task-btn">
            <img src="img/delete-btn.svg" alt="dlete task">
        </button>
    </div>
</div>
    `)
})
const addBtn = document.querySelector('.btn');
const addList = document.querySelector('.addlist');
const inputField = document.getElementById('todo-input');

addBtn.addEventListener ('click', addTask)

function addTask () {
    
    addlist.insertAdjacentHTML("afterbegin", `<div class="add-list">
    <li class="item" id="item">
        <a href="#">
            <label class="container">
                <input type="checkbox" name="radio">
                <span class="checkmark"></span>
            </label>
        </a>
        <span class="todo-text">${inputField.value}</span>
        <a href="#" class="todo-remove"><img id="todo-remove"src="img/delete-task.svg" alt=""></i></a>
    </li>
</div>`);
}




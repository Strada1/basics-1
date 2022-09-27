function addTask(priority) {
    let task = document.getElementById(priority);
    let inputValue = task.querySelector("input").value;
    let div = document.createElement('div');
    div.className = `${priority}-task`;
    div.innerHTML = `<input type="radio" id="${priority}-task">
                    <label for="${priority}-task">${inputValue}</label>
                    <span class="${priority}__delete" onclick="deleteTask(event.currentTarget)">X</span>`;
    task.after(div);
}
function deleteTask(event) {
    event.parentNode.remove();

    
}

/*



*/

const list = [{ name: 'Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.', status: 'In progress', priority: 'High' }, { name: 'Посмотреть ютубчик', status: 'Done', priority: 'Low' }]

function addTask(_name, _status, _priority) {
    if (_name === "") return;
    newTask = {};
    newTask.name = _name;
    newTask.status = _status;
    newTask.priority = _priority;
    list.push(newTask);
}

function changeStatus(_name, _status, _priority) {
    let task = list.find(item => item.name == _name);
    if (task != undefined) {
        if (_status != undefined) task.status = _status;
        if (_priority != undefined) task.priority = _priority;
    }
}

function deleteTask(_taskName) {
    let index = list.findIndex(item => item.name == _taskName);
    if (index != -1) {
        list.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

function showList() {
    for (key in list) {
        checked = (list[key].status === 'Done' ? 'checked' : '');
        let block = `<div class="item"><div class="checkBox"><input type="checkbox" ${checked} onchange="changeStatusItem(this)"></div><div class="item-text">${list[key].name}</div> <div class="item-close-button" onclick="deleteItem(this.parentElement)"><img src="./icons/close-icon.svg" alt="add icon"></div></div>`;
        if (list[key].priority === 'High')
            formHighPriority.insertAdjacentHTML('afterend', block);
        else
            formLowPriority.insertAdjacentHTML('afterend', block);
    }
}

function changeStatusItem(_element) {
    if (_element.checked) changeStatus(_element.parentElement.nextSibling.innerText, 'Done');
    else changeStatus(_element.parentElement.nextSibling.innerText, 'In progress');
    clearItems();
    showList();
}

function addItem(_element, _status, _priority) {

    addTask(_element.firstElementChild.value, _status, _priority);
    _element.firstElementChild.value = "";
    clearItems();
    showList();
}

function deleteItem(_element) {
    deleteTask(_element.innerText);
    clearItems();
    showList();
}

function clearItems() {
    for (let elem of document.querySelectorAll('.item')) {
        elem.remove();
    }
}

clearItems();
showList();
